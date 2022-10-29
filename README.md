
## Install ingress-nginx-controller (v1.3.1)
https://kubernetes.github.io/ingress-nginx/deploy/#quick-start

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.1/deploy/static/provider/cloud/deploy.yaml

docker build -t binkaga:1.0 .
docker build -f Dockerfile.prod -t binkaga:1.0-prd .

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true binkaga:1.0

kubectl apply -f deployment.yaml




kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8081:80