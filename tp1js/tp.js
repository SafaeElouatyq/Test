//partie a
const produits=[
    {id:1, nom:"Produit 1", categorie:"informatique",prix:100,stock:10},
    {id:2, nom:"Produit 2", categorie:"maison",prix:150,stock:10},
    {id:3, nom:"Produit 3", categorie:"sport",prix:50,stock:0},
    {id:4, nom:"Produit 4", categorie:"informatique",prix:500,stock:10},
    {id:5, nom:"Produit 5", categorie:"maison",prix:600,stock:10},
    
    
]
    // produits.forEach(p=>{
    //     console.log(p.nom+" -"+p.categorie+"-"+p.prix+"DH "+p.stock)
    // })

//partie b
    // produits.forEach(p=>{
    //     if(p.stock===0){
    //         console.log(p.nom+" -"+p.categorie+"-"+p.prix+"DH "+p.stock)
    //     }
    // } )

    
//partie c
// function calculer(){
//     let total=0;
//     let vtotalstock=0;
//     produits.forEach(p=>{
//         total+=p.stock
//         vtotalstock+=p.prix*p.stock
//     })
    
//     console.log("le nombre total du produit est:"+total+" et la valeur total du stock est:"+vtotalstock+" DH");
// }
// calculer();
// function q(){
//     let min=produits[0].prix;
//     let max=produits[0].prix;
//     produits.forEach(p=>{
//         if(p.prix<min){
//             min=p.prix;
//             produitMin=p;
//         }
//         if(p.prix>max){
//             max=p.prix;
//             produitMax=p;}
//     })
//     console.log("le produit le moins cher est:"+produitMin.nom+" "+produitMin.prix+" DH et le produit le plus cher est:"+produitMax.nom+" "+produitMax.prix+" DH");
// }
// q();
produits.sort((a,b) => a.prix - b.prix);
console.log("Tri par prix croissant :", produits.map(p => p.nom + " (" + p.prix + " DH)"));

produits.sort((a,b) => b.stock - a.stock);
console.log("Tri par stock décroissant :", produits.map(p => p.nom + " (" + p.stock + " en stock)"));

