<?php



$matches = [];
echo $_SERVER["REQUEST_URI"];

if(preg_match('/\/([^\/]+)\/([^\/]+)/',$_SERVER["REQUEST_URI"],$matches)){

    $_GET['resource_type'] = $matches[1];
    $_GET['resource_id'] = $matches[2];

    require './server.php';
}elseif(preg_match('/\/([^\/]+)\/?/',$_SERVER["REQUEST_URI"],$matches)){
    $_GET['resource_type'] = $matches[1];

    require './server.php';
}else{
    error_log('No matches');
    echo 'No matches';
    http_response_code(404);
}