<?php


//Boolean - values : true/false
$verdadero = true;
$falso = false; 


echo var_dump($falso);
echo $falso;
echo var_dump($verdadero);
echo $verdadero.' <-- Este es el valor del true = 1'.'</br>';


//Numeric
/*Integer */
$a = -123; $b = 0; $c = 7763;
echo $a.'-'.$b.'-'.$c;

$nulo = null;
echo $nulo;

if(0){

}else{
    echo 'Es falso, zero';
}

if(1){
    echo ' Es verdadero, uno';
}

if(['Something']){
    echo 'Hay algo en el arreglo';
}


if(null){

}else{
    echo 'Es falso, nulo';
}

if([]){
    
}else{
    echo 'Array vacio';
}


//Orientada a objetos - Objeto
class Car{

    private $engine;
    private $brand;


    function __construct(){
    $this->engine = 'V8';
    $this->brand = 'Ferrari';
    }

    function getEngine(){
        return $this->engine;
    }

    function getBrand(){
        return $this->brand;
    }
}


$car = new Car();
echo $car->getEngine();

try{
    //Cannot access a private property need to generate a setter
    $car->engine = 'V7';
}catch(Error $error){
    echo 'Hubo un error';
}



?>