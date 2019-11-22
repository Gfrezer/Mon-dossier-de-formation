<?php
//?XDEBUG_SESSION_START=xdebug
/*
$age_du_vist = 20;
$age_du_vist = 60;
$age_du_vist = 7;
$message = "hello!";
$message2 = "content";
echo "le visiteur qui a $age_du_vist ans, vous dit $message"; 

$adulte = true;
if (isset($_GET['age'])){
    echo "tu as ".$_GET['age']." ans";
    if($_GET['age']>17){
        echo "tu es un adulte";  
    
    }
    else{
    echo "tu est un enfant";
    }
}*/
?>
<?php
$prenoms = array("francois","michel","nicole","veronique");
var_dump($prenoms);

$etoiles = array(
    "numero" => "1",
    "nom" => "sirius",
    "lumiere" => "1125 dm",
    "distance" => "25 a.n.",);
var_dump($etoiles);
for ($i = 0; $i<count($prenoms); $i++) {
    echo $prenoms[$i]."<br />";
}
echo $prenoms[2]."<br />";
echo $etoiles["nom"]."<br />";

foreach ($etoiles as $azerty => $sart){
    echo $azerty.": ".$sart."<br />";
}
if (array_key_exists("nom", $etoiles)){
    echo "vrai"."<br />";    
}
else{
    echo "faux"."<br />";
}
$etoiles = "betegeurse";
    echo $etoiles;

?>
