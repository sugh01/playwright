# Run from Github Actions
### A github action is setup which would run on CI, uses Shards for parallel processing

# Run from CLI

```bash
npx playwright test
```
or 
```bash
yarn test
```
## Compile reports

```bash
npx playwright merge-reports --reporter html ./blob-report
npx playwright show-report
```

# Run with docker compose for parallel execution

### Compile a compose file, pass the shard count from the cmd line
```bash
rm docker-compose.yml
./compose.sh 6
```
### Run the compose file
```bash
docker compose up --build
```
### Compile reports
```bash
npx playwright merge-reports --reporter html ./blob-report
npx playwright show-report
```

# Run on a remote selenium chrome provider
### We would set up a k8 deployment to deploy a standalone chrome service
### Run the k8 manifest, need to have a kubernetes context available, i used docker-desktop
### Update the number of replicas needed inside the ```k8s/node-deployment.yaml```
```bash
kubectl create namespace "grid"
kubectl config set-context --current --namespace=grid
kubectl apply -f k8s/node-deployment.yaml
```
### Verify the chrome node status

### port forward the service, verify pods and services are up
```bash
kubectl port-forward service/selenium-hub 4444:4444
```
### Verify that the chrome node is available
```bash
http://localhost:4444/wd/hub/status
```

### Once the nodes are up, Run the playwright tests while targeting to the remote url 
```bash
SELENIUM_REMOTE_URL=http://localhost:4444 yarn test --project=chromium
```
### Compile reports
```bash
npx playwright merge-reports --reporter html ./blob-report
npx playwright show-report
```

### Delete the k8 namespace
```bash
kubectl delete namespaces grid
```

## Few notes on my attempts to run on a selenium hub

The K8s folder would have another set of yaml files which assists in seting up a hub and node, but there is a bug which restricts the node from registering into the hub, it is not a k8 thing though, i tried with docker hub and node going by the official playwrigt docs and that did not work as well. One possible reason may be that i am running on ```arm```. 
I have also added a ```values.yaml``` file to run ```selenium-grid``` with helm 
```https://github.com/SeleniumHQ/docker-selenium/tree/trunk/charts/selenium-grid```. Though it sets up properly with helm and nodes register to hubs, playwright was not able to connect to a session. Will be worth looking into sometime.