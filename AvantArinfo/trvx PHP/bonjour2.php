<!DOCTYPE html>

<html>
     <head>
     	<meta charset="utf-8">
        <script src="exo_1flo.js"></script>
     	<title>html lien js</title>
     	
	</head>
<h2>Travaux en PHP</h2>
    
        <p>
            <?php 
            if (isset($_GET["nom"]) and isset($_GET["prenom"])and isset($_GET["repeter"])){
                for($repetition =1; $repetition <= $_GET["repeter"]; $repetition++){
                    echo "Bonjour" .$_GET["nom"]." ".$_GET["prenom"]; 
                }
            }else
                    echo "pas de valeur defini !";
            
            ?>
        </p>

     <body>
         
     	

     </body>
</html>