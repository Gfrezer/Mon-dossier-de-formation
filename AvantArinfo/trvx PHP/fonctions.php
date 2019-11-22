<?php/*
$phrase = "salut,je bosse sur le php";
$nombreDeCaracter = strlen($phrase);
echo "il y a $nombreDeCaracter dans cette phrase"."<br />";
if ($nombreDeCaracter>20){
    echo "il y a plus de 20 caracteres dans cette phrase!"."<br />";
}
    function Dates($jour){
    echo "salut, aujourd'hui nous sommes $jour"; 
}
Dates("lundi");
*/
?>

<!DOCTYPE html>

<html>
     <head>
     	<meta charset="utf-8">
        <script src="exo_1flo.js"></script>
     	<title>html lien js</title>
     	
	</head>
<h2>Travaux en PHP</h2>
    
        <p>
            Cette ligne a été écrite entièrement en HTML.<br />
            <?php echo "Celle-ci a été écrite entièrement en PHP."; ?><br />
            <a href="bonjour2.php?nom= Hamonic&amp;prenom= Gael">Dis moi bonjour</a>
        </p>

     <body>
         
     	

     </body>
</html>
