<?php 

//Obtenemos la información de la API de la página XKCD.
$json = file_get_contents('https://xkcd.com/info.0.json');
$data = json_decode($json,true); 

foreach($data as $llave => $datos){
    echo 'La llave es : <strong>'.$llave.'</strong> y su contenido es -> <strong>\''.$datos.'\'</strong></br>';
}

?>

<?php echo $data['year'].'-'.$data['month'].'-'.$data['day'];?>

<h1><?php echo $data['title'];?></h1>
<blockquote><?php echo $data['alt'];?></blockquote>
<img src="<?php echo $data['img']; ?>"/>
<span>Fecha de publicación</span><input min="2018-01-01" max="2018-12-31" type="date" value="<?php echo $data['year'].'-'.$data['month'].'-'.$data['day'];?>"/>
<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">