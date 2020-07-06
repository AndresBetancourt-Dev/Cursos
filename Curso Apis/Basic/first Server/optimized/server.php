<?php

//I define the types that will be allowed in my server

//Definir los tipos permitidos
$allowedTypes = [
    'books',
    'authors',
    'genres'
]; // A simple array that has the permited types


//GET
//To pass paramethers on PHP you must specify the url and after it add the
define('URL','http://localhost/Cursos/Curso%20Apis/Basic/first%20Server/server.php'); //?resource_type <- Paramether = books

//Obtener el tipo mediante parametro através de la URL
$resourceType = $_GET['resource_type'];

//If the resource type isn't in the array of the allowed types, then die.
if(!in_array($resourceType,$allowedTypes)){
    die;
}

//Case contrary i make a petition from the database.
$books = [
    1 => [
        'title' => 'Lo que el viento se llevo',
        'author_id' => 2,
        'genre_id' => 2
    ],
    2 => [
        'title' => 'Cien Años de Soledad',
        'author_id' => 1,
        'genre_id' => 1
    ],
    3 => [
        'title' => 'La Odisea',
        'author_id' => 3,
        'genre_id' => 1
    ]
];

header( 'Content-Type: application/json');

$resourceId = array_key_exists('resource_id',$_GET) ? $_GET['resource_id'] : '';

//And we generate a response
//Generamos la respuesta
switch(strtoupper($_SERVER['REQUEST_METHOD'])){
    case 'GET':
        //We return a json encode
        if(empty($resourceId)){
            echo json_encode($books);
        }else{
            if(array_key_exists($resourceId,$books)){
                echo json_encode($books[$resourceId]);
            }else{
                echo json_encode($books);
            }
        }
        
    break;
    case 'POST':
        echo "Something";
        $json = file_get_contents('php://input');
        $books[] = json_decode($json,true);
        
        echo "Something";
    break;
    case 'PUT':
    break;
    case 'DELETE':
    break;
}

?>

