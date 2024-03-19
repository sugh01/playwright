# Run from Github Actions
## A github action is setup which would run on CI, uses Shards for parallel processing

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

## Compile a compose file, pass the shard count from the cmd line
```bash
rm docker-compose.yml
./compose.sh 6
```
## Run the compose file
```bash
docker compose up --build
```
## Compile reports
```bash
npx playwright merge-reports --reporter html ./blob-report
npx playwright show-report
```

# Run on a remote selenium chrome provider
## We would set up a k8 deployment to deploy a standalone chrome service
## Run the k8 manifest, need to have a kubernetes context available, i used docker-desktop
## Update the number of replicas needed inside the ```k8s/node-deployment.yaml```
```bash
kubectl create namespace "grid"
kubectl config set-context --current --namespace=grid
kubectl apply -f k8s/node-deployment.yaml
```
## Verify the chrome node status

## port forward the service, verify pods and services are up
```bash
kubectl port-forward service/selenium-hub 4444:4444
```
## Verify that the chrome node is available
```bash
http://localhost:4444/wd/hub/status
```

## Once the nodes are up, Run the playwright tests while targeting to the remote url 
```bash
SELENIUM_REMOTE_URL=http://localhost:4444 yarn test --project=chromium
```
## Compile reports
```bash
npx playwright merge-reports --reporter html ./blob-report
npx playwright show-report
```

## Delete the k8 namespace
```bash
kubectl delete namespaces grid
```
