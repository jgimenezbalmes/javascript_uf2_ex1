var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1','UF2','UF3','UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1','alu2','alu13','alu4','alu5']
};

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

//Exercici 1 
console.log(Object.getOwnPropertyNames(Asignatura));

//Exercici 2
console.log(Asignatura);
delete Asignatura.alumnes;
console.log(Asignatura);

//Exercici 3
let length = Object.keys(Asignatura).length;
console.log(length);

//Exercici 4
for (let i=0; i<library.length; i++){
    console.log("Autor: "+library[i].author+", Títol: "+library[i].title);
}

//Exercici 5 
function Cilindre (radi, altura){
    this.radi = radi;
    this.altura = altura;
    this.volum = Math.PI*(radi**2)*altura;
}

let llauna = new Cilindre(2, 4);

//toFixed ens permet fixar la longitud amb 4 decimals
console.log(llauna.volum.toFixed(4));


//Exercici 6
function Cercle (radi){
    this.radi = radi;
    color_contorn = "blau";
    color_fons = "gris";
    gruix_contorn = 2;
}

Cercle.prototype.area = function(){
    let ar = Math.PI*(radi**2);
    console.log(ar);
}

Cercle.prototype.perimetre = function(){
    let per = Math.PI*radi*2;
    console.log(per);
}

//Exercici 7 

//typeof ens permet saber quin tipus de parametre s'esta passant (parametre, funcio,...)
function pillaMetodes(objecte) {
    for (key in objecte){
        if (typeof objecte[key]=="function"){
            console.log(key);
        }
    }
}

//Exercici 8 

//Es fa push de matrius de forma similar a l'exercici del buscamines
function posaProps(objecte) {
    let matriu=[];
    for (i in objecte){
        let matriu2=[];
        matriu2.push(i);
        matriu2.push(objecte[i]);
        matriu.push(matriu2);
    }
}

//Exercici 9

function inverteix(objecte) {
    let obj2={}
    for (let key in objecte){
        obj2[objecte[key]]= key;
    }
    console.log(obj2);
}

//Exercici 10

//Si un parametre no existeix, sera undefined per defecte. Hi ha un petit problema, que un parametre existent pot tenir valor undefined :/
function comprovaProp(objecte, parametre){
    return (typeof objecte[parametre] !== 'undefined'); 
}




