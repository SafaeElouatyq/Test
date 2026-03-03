// ==========================
// PARTIE A
// ==========================

const produits = [
    {id:1, nom:"Laptop", categorie:"Informatique", prix:7000, stock:5},
    {id:2, nom:"Souris", categorie:"Informatique", prix:150, stock:0},
    {id:3, nom:"Canapé", categorie:"Maison", prix:3000, stock:2},
    {id:4, nom:"Tapis", categorie:"Maison", prix:600, stock:10},
    {id:5, nom:"Ballon", categorie:"Sport", prix:200, stock:0}
];

// 3. Affichage
console.log("Liste des produits :");
produits.forEach(p => {
    console.log(`${p.nom} - ${p.categorie} - ${p.prix} DH - Stock: ${p.stock}`);
});


// ==========================
// PARTIE B
// ==========================

// 4. Produits en rupture
console.log("Produits en rupture :");
produits.forEach(p => {
    if(p.stock === 0){
        console.log(p.nom);
    }
});

// 5. Prix > 500
console.log("Produits > 500 DH :");
produits.forEach(p => {
    if(p.prix > 500){
        console.log(p.nom);
    }
});

// 6. Recherche par catégorie
let categorieUser = prompt("Entrer une catégorie :");

produits.forEach(p => {
    if(p.categorie.toLowerCase() === categorieUser.toLowerCase()){
        console.log(p);
    }
});


// ==========================
// PARTIE C
// ==========================

// 7. Calculs
let totalProduits = produits.length;
let valeurStock = 0;

produits.forEach(p => {
    valeurStock += p.prix * p.stock;
});

console.log("Nombre total de produits :", totalProduits);
console.log("Valeur totale du stock :", valeurStock, "DH");


// 8. Min et Max
let min = produits[0];
let max = produits[0];

produits.forEach(p => {
    if(p.prix < min.prix){
        min = p;
    }
    if(p.prix > max.prix){
        max = p;
    }
});

console.log("Produit le moins cher :", min.nom, "-", min.prix, "DH");
console.log("Produit le plus cher :", max.nom, "-", max.prix, "DH");


// ==========================
// PARTIE D
// ==========================

// 9. Ajouter au stock
let idRecherche = parseInt(prompt("Entrer ID du produit :"));
let produitTrouve = produits.find(p => p.id === idRecherche);

if(produitTrouve){
    let qte = parseInt(prompt("Quantité à ajouter :"));
    produitTrouve.stock += qte;
    console.log("Produit modifié :", produitTrouve);
}else{
    console.log("Produit introuvable");
}

// 10. Supprimer produit
let idSupp = parseInt(prompt("Entrer ID à supprimer :"));
let index = produits.findIndex(p => p.id === idSupp);

if(index !== -1){
    produits.splice(index,1);
    console.log("Produit supprimé. Nouvelle liste :", produits);
}else{
    console.log("Produit introuvable");
}


// ==========================
// PARTIE E
// ==========================

// 11. Tri par prix croissant
produits.sort((a,b) => a.prix - b.prix);
console.log("Tri par prix croissant :", produits);

// 12. Tri par stock décroissant
produits.sort((a,b) => b.stock - a.stock);
console.log("Tri par stock décroissant :", produits);

// 13. Catégorie la plus représentée
let compteur = {};

produits.forEach(p => {
    if(compteur[p.categorie]){
        compteur[p.categorie]++;
    }else{
        compteur[p.categorie] = 1;
    }
});

let maxCategorie = null;
let maxCount = 0;

for(let cat in compteur){
    if(compteur[cat] > maxCount){
        maxCount = compteur[cat];
        maxCategorie = cat;
    }
}

console.log("Catégorie la plus représentée :", maxCategorie);
