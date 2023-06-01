# sit323-737-2023-t1-prac10.1p

Open Google cloud
Access Terminal
Create Cluster
gcloud config set project PROJECT_ID
gcloud container clusters create-auto hello-cluster \
    --region=australia-southeast2
    
Get your credentials
gcloud container clusters get-credentials hello-cluster \
    --region australia-southeast2

Pull your docker image and push to gcr
docker pull mukulksingh98/sit737:latest
docker tag mukulksingh98/sit737:latest gcr.io/<project_id>/sit737:latest
docker push gcr.io/<project_id>/sit737:latest

Create a deployment
kubectl create deployment hello-server \
    --image=gcr.io/<project_id>/sit737:latest

Expose deployment
kubectl expose deployment hello-server --type LoadBalancer --port 80 --target-port 3000

Check your pods

kubeclt get pods

Get your external IP

kubectl get service hello-server

Copy that in your browser
http://EXTERNAL.IP

Delete your service and cluster
kubectl delete service hello-server
gcloud container clusters delete hello-cluster \
    --region australia-southeast2