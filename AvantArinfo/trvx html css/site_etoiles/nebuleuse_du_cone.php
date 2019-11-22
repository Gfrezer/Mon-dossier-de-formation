<?php

if (isset($_POST["envoyer"]))
         {                            
            $nom = $_POST["nom"];
            $prenom = $_POST["prenom"];
            $age = $_POST["age"];
            $mail = $_POST["mail"];
            $password = $_POST["password"];
            $password_conf = $_POST["password_conf"];
            $connaissance = $_POST["connaissance"];
            $comment = $_POST["comment"];
            $suggestion = $_POST["suggestion"];
            $bdd = mysqli_connect('localhost','root','','etoiles');    
            $requete = "INSERT INTO inscription_mag (nom,prenom,age,mail,password,password_conf,connaissance,comment,suggestion) VALUES('$nom','$prenom',$age,'$mail','$password','$password_conf','$connaissance','$comment','$suggestion')";
    
            $bdd->query($requete) or die(print_r($bdd->error));
            mysqli_close($bdd);
         } 


?>

<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">

    <title>Les Etoiles dans l'univers</title>

</head>

<body>
    <header>
        <!--titre-->
        <div class="titre">
            <h1>les etoiles dans l'univers</h1>
            <span>premiers pas dans le monde des etoiles</span>
        </div>
    </header>

    <div class="nebuleuse_cone_grand">

        
            <img src="images/Nebula_du_cone.jpg" class="nebula_du_cone_grand" />
        <p>
            La nébuleuse diffuse du Cône, ainsi nommée à cause de sa forme apparente, est située au sud de NGC 2264, dans la partie nord de la constellation de la Licorne, juste au-dessus du milieu entre Procyon et Bételgeuse.

            La forme conique vient d'une nébuleuse froide, composée essentiellement d'hydrogène moléculaire, qui absorbe la poussière d'une nébuleuse d'émission faible, qui contient de l'hydrogène moléculaire ionisé par S Monocerotos, l'étoile la plus brillante de NGC 2264.

            William Herschel découvre la nébuleuse du Cône (qu'il nomme H V.27) le 26 décembre 1785.
        </p>
    </div>










    <footer class="footer">
        <h4 class="mois" onclick="mois()">rentrez le chiffre pour le mois</h4>



        <form method="post" action="nebuleuse_du_cone.php">
            <h3>Formulaire d'inscription au magazine "Les Etoiles dans l'univers"</h3>
            <div class="formulaire">
                <div class="conteneur">

                    <label for="votre nom">Votre nom :</label>
                    <input type="text" name="nom" /><br>

                    <label>Votre prenom :</label>
                    <input type="text" name="prenom" placeholder="votre Prenom" /><br>

                    <label>Votre age :</label>
                    <input type="number" name="age" placeholder="votre age" style="width: 80px" /><br>

                    <label>Adresse Mail :</label>
                    <input type="email" name="mail" placeholder="votre mail" /><br>

                    <label>Votre Mot de Passe :</label>
                    <input type="password" name="password" required /><br />

                    <label>Confirmez votre Mot de Passe :</label>
                    <input type="password" name="password_conf" required />


                    <div class="conteneur1" name="connaissance">
                        <h6>Entre nous...</h6>
                        <label>Vos connaissances en astronomie ?</label><br />
                        <input type="radio" name="connaissance" value="debutant" checked /><label>Debutant</label>
                        <input type="radio" name="connaissance" value="confirme" /><label>confirmé</label>
                        <input type="radio" name="connaissance" value="expert" /><label>expert</label><br>
                    </div>
                </div>

                <div class="entre_nous">

                    <div class="conteneur2">
                        <h6>Comment avez vous connu le site ?</h6>
                        <select name="comment">
                            <option value="par un ami">Par un ami </option>
                            <option value="dans un magazine">Dans un magazine</option>
                            <option value="sur un autre site>">Sur un autre site</option>
                            <option value="par hasard">Par hasard</option>
                        </select><br /><br /><br /><br /><br />
                        <label>Laissez une suggestion</label><br />
                        <textarea name="suggestion" rows="4" cols="50"></textarea>
                        <input id="bouton" class="bouton" type="submit" name="envoyer" value="Envoyer">
                        <?php
                        if (isset($_POST["envoyer"])){
                            ?>

                        <span class="mess_submit"> le formulaire est bien envoyé
                        </span>

                        <?php } ?>




                    </div>
                </div>

            </div>

        </form>
    </footer>
<script type="text/javascript" src="script.js"></script>

</body>

</html>
