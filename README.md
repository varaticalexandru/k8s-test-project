# k8s-test-project

- node.js app (custom webserver)

- express web server package

Plan:

1) create node.js express web app
   configure webserver: responds with hostname of server, when connecting via root url (distinguish which pod answers specific request)

2) dockerize the app
    using Dockerfile, build command

3) push docker image to Dockerhub

4) create deployment using custom built image
