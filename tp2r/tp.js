function ajouterElement(){
    let nom = document.getElementById("nom").value;
    let prix = document.getElementById("prix").value;
    let quantite = document.getElementById("quantite").value;
    let table = document.getElementById("table");
    let tr = document.createElement("tr");

    tr.innerHTML="<td>"+nom+"</td><td>"+prix+"</td><td>"+quantite+"</td>";
    table.appendChild(tr);
    document.getElementById("prixTotal").innerText="Prix total est "+(prix*quantite)+" DH";
}