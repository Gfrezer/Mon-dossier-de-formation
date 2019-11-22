var notes = [12, 15, 8, 20, 18.2, 12, 7, 9, 5, 12, 18, 12, 4, 16, 7, 11, 10, 8, 19, 5, 12 ,13, 14, 7, 9, 19, 18, 13, 15, 3, 5, 9, 9, 15, 18, 10];

//for (i = 0; i < notes.length ; i++) {
  //  console.log (notes[i]);
//}


//for (var i = notes.length-1;  -1 < i; i--){
       // console.log(notes[i]);
//}


//for (var i = notes.length/3;  i < notes.length*2/3; i++){
//        console.log(notes[i]);
//}

var debut = notes.length/3;
var fin = notes.length*2/3;

for (var i = debut;  i < fin; i++){
        console.log(notes[i]);
}

var somme = 0;
for (var i = 0;  i < notes.length; i++){
    somme = somme + notes[i];
    
}
console.log(somme/notes.length);

var minimum = notes[0];
for (i = 1; i < notes.length; i++){
            
     if (minimum > notes[i]){
        minimum = notes[i];        
    }
    
    
}
console.log(minimum);

let a;
console.log(a);