<?php

//I define the types that will be allowed in my server

//Definir los tipos permitidos en un arreglo
$allowedTypes = [
    'books',
    'authors',
    'genres'
]; // A simple array that has the permited types


//GET
//To pass paramethers on PHP you must specify the url and after it add the
//Para pasar parametros por medio de url sin definir reglas en el htaccess
define('URL','http://localhost/Cursos/Curso%20Apis/Basic/first%20Server/server.php'); //?resource_type <- Paramether = books

//Obtener el tipo mediante parametro através de la URL
$resourceType = $_GET['resource_type'];
//Obtain the paramether in this case  http://localhost/Cursos/Curso%20Apis/Basic/first%20Server/server.php?resource_type=books

//If the resource type isn't in the array of the allowed types, then die.
if(!in_array($resourceType,$allowedTypes)){
    die;
}
//If the paramether value it's not defined in the array the process dies

//Case contrary i make a petition from the database.
//This array simulated a database array when SELECT in case of SQL
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


//I set the header to specify that the response or request = json = Javascript Object Notation
header( 'Content-Type: application/json');

//If the key resource_id it's defined in the GET array the it's assigned to a variable
$resourceId = array_key_exists('resource_id',$_GET) ? $_GET['resource_id'] : '';

//And we generate a response
//Generamos la respuesta
//Depending the Method i generate a different response

switch(strtoupper($_SERVER['REQUEST_METHOD'])){
    case 'GET':
        //We return a json encode
        //But if the $resourceId variable = empty then skip and print all the array of books JSON
        if(empty($resourceId)){
            echo json_encode($books);
            
        }else{
            //If the key passed by second paramether exists in the array then we print the specific key value
            if(array_key_exists($resourceId,$books)){
                echo json_encode($books[$resourceId]);
            }else{
                //Else we don't
                echo json_encode($books);
            }
        }
        
    break;
    case 'POST':
        //We can specify the input via console
        $json = file_get_contents('php://input');
        //We assign at the last position of the array the value this assignation works as the push method on Javascript
        $books[] = json_decode($json,true);
        
        //We show the new collection of books
        echo json_encode($books);
    break;
    case 'PUT':
        //We can specify the input via console
        $json = file_get_contents('php://input');
        //We assign at the last position of the array the value this assignation works as the push method on Javascript
        $books[$resourceId] = json_decode($json,true);
        
        //We show the new collection of books
        echo json_encode($books);
    break;
    case 'DELETE':
    break;
}

?>

