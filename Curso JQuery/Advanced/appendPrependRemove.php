<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>
<?php 
$hello = 'Hello';

?>
<body>
    <ol class="list">
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
        <li>Elemento 5</li>
    </ol>
    <input data-trigger="textArea" name="myTextArea" id="textArea" cols="30" rows="10"></input>
    <button class="append">Append</button>
    <button class="prepend">
        Prepend
    </button>
    <button class="empty">Vaciar Lista</button>

    
    <button class="remove">Remove</button>
    <script>

        var x = <?php 
        $hello = 15;
        echo $hello; ?>;
    console.log(x)
        $(()=>{


            //Tenemos una lista
           const lista = $('.list');
           //Agarramos el input
           const textArea = $('#textArea');
           //Y los tres botones cada uno hace algo distinto de las 3 funcionalidades
            const button = $('.append');
            const prepend = $('.prepend')
            const remove = $('.remove')
            const empty = $('.empty')


            empty.on('click',()=>{
                lista.empty()
            })

            button.click(()=>{
                if(textArea.val()){
                    lista.append('<li>'+textArea.val()+'</li>')
                    textArea.val('')
                }else{
                    console.log('El Textarea esta vacio')
                }
            })

            prepend.click(()=>{
                if(textArea.val()){
                    lista.prepend('<li>'+textArea.val()+'</li>');
                    textArea.val('')
                }else{
                    console.log('El Textarea esta vacio')
                }
            })
            
            remove.click(()=>{
               
                    if(textArea.val()){
                   
                   for(let item of lista.children()){
                      const jqueryItem = $(item)
                      if(jqueryItem.text()===textArea.val()){
                          jqueryItem.remove()
                          return
                      }
                   }

                   console.log('No se encontro este elemento')


                    }else{
                        console.log('El Textarea esta vacio')
                    }
              
            })


        })

    </script>
</body>
</html>