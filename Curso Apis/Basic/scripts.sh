
sudo apt-get install jq
#This scripts adds a book and prints the full collection

#GET specific allowed Type
curl http://localhost/Cursos/Curso%20Apis/Basic/first%20Server/server.php?resource_type=books | jq
#GET specific allowed Type item
curl 'http://localhost/Cursos/Curso%20Apis/Basic/first%20Server/server.php?resource_type=books&resource_id=2' | jq
# POST command -X it's for specify that we change the method in this case we say it's post, the url, and -d it's for setting up the value that we are passing
curl -X "POST" http://localhost/Cursos/Curso%20Apis/Basic/first%20Server/server.php?resource_type=books -d '{ "title": "La divina comedia", "author_id" : 4, "genre_id" : 4 }' | jq
#PUT
curl -X "PUT" 'http://localhost/Cursos/Curso%20Apis/Basic/first%20Server/server.php?resource_type=books&resource_id=2' -d '{ "title": "La divina comedia", "author_id" : 4, "genre_id" : 4 }'  | jq
