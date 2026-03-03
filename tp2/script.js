let nb=1;
function add(){
    let produits=document.getElementById("produits");
    let newp=document.createElement("li");
    newp.textContent="Produit "+nb;
    produits.appendChild(newp);
    nb++;
}
function addbyinput(){
    let valid=true;
    let Produit=document.getElementById("produit").value;
    let Price=document.getElementById("price").value;
    console.log(Produit);
    let produits=document.getElementById("produits");
    let newp=document.createElement("li");
    let button=document.createElement("button");
    button.textContent="Supprimer";
     

    if(Produit===""){
        document.getElementById("errorNom").style.display="inline";
        valid=false;
    }
    else{
        document.getElementById("errorNom").style.display="none";
    }
    if(Price===""){
        document.getElementById("errorPrice").style.display="inline";
        valid=false;
    }   
    else{
        document.getElementById("errorPrice").style.display="none";
    }   
    if(valid){
        button.onclick=function(){
        produits.removeChild(newp);
    };
    newp.innerHTML=Produit+" : "+Price+"DH ";
    newp.appendChild(button);
    produits.appendChild(newp);
    Produit.value="";
    Price.value="";
    }
}



