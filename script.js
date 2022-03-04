// ajouter une tâche

document.querySelector('#new').onclick = function () {
    if (document.querySelector('#nouveaux input').value.length == 0) {
        alert("Entrer une tache !")
    } else {
        document.querySelector('#taches').innerHTML
            +=
            // création d'une classe pour chaque nouvel élément avec l'icon pour supprimer
            `
        <div class="tache">
        <span id="nom_tache">
        ${document.querySelector('#nouveaux input').value}
        
</span>
<button class="supprimer">
<i class="fa-solid fa-trash-can"></i>
</button>

</div>

        `;

        //Supprimer une tâche
        var en_cours = document.querySelectorAll(".supprimer");
        for (var i = 0; i < en_cours.length; i++) {
            en_cours[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        // barrer une tache quand on clique dessus
        var taches = document.querySelectorAll(".tache");
        for (var i = 0; i < taches.length; i++) {
            taches[i].onclick = function () {
                this.classList.toggle('completé');
            }
        }
        //supprimer la recherche une fois la liste envoyé
        document.querySelector("#nouveaux input").value = ""
        document.querySelector("#date input").value = ""
        document.querySelector("#catégorie input").value = ""
    }
}



// La même chose mais en prenant la dâte en compte



//message d'erreur quand il n'y a pas de date
document.querySelector('#new').onclick = function () {
    if (document.querySelector('#date input').value.length == 0) {
        alert("Entrer une date !")
    }
    else {
        document.querySelector('#taches').innerHTML
        +=
        // création d'une classe pour chaque nouvel élément avec l'icon pour supprimer
        `
    <div class="tache">
    <span id="nom_tache">
    ${document.querySelector('#nouveaux input').value}
    
</span>
<button class="supprimer">
<i class="fa-solid fa-trash-can"></i>
</button>

</div>

    `;

        //Supprimer une tâche
        var en_cours = document.querySelectorAll(".supprimer");
        for (var i = 0; i < en_cours.length; i++) {
            en_cours[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        // barrer une tache quand on clique dessus
        var taches = document.querySelectorAll(".tache");
        for (var i = 0; i < taches.length; i++) {
            taches[i].onclick = function () {
                this.classList.toggle('completé');
            }
        }
        //supprimer la recherche une fois la liste envoyé
        document.querySelector("#nouveaux input").value = ""
        document.querySelector("#date input").value = ""
        document.querySelector("#catégorie input").value = ""
    }
}



// La même chose mais en prenant la  en compte



//message d'erreur quand il n'y a pas de catégorie
document.querySelector('#new').onclick = function () {
    if (document.querySelector('#catégorie input').value.length == 0) {
        alert("Entrer une catégorie !")
    }
    else {
        document.querySelector('#taches').innerHTML
        +=
        // création d'une classe pour chaque nouvel élément avec l'icon pour supprimer
        `
    <div class="tache">
    <span id="nom_tache">
    ${document.querySelector('#nouveaux input').value}
    
</span>
<button class="supprimer">
<i class="fa-solid fa-trash-can"></i>
</button>

</div>

    `;

        //Supprimer une tâche
        var en_cours = document.querySelectorAll(".supprimer");
        for (var i = 0; i < en_cours.length; i++) {
            en_cours[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        // barrer une tache quand on clique dessus
        var taches = document.querySelectorAll(".tache");
        for (var i = 0; i < taches.length; i++) {
            taches[i].onclick = function () {
                this.classList.toggle('completé');
            }
        }
        //supprimer la recherche une fois la liste envoyé
        document.querySelector("#nouveaux input").value = ""
        document.querySelector("#date input").value = ""
        document.querySelector("#catégorie input").value = ""
    }
}




