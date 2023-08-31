document.getElementById("open").onclick = function(){ 
// lorsque l'élément id est cliqué  une fonction est éxécutée

     document.getElementById("info").classList.toggle("hidden");
     document.getElementById("info").classList.toggle("");
// cette fonction utilise la méthode classlist.toogle pour ajouter ou supprimer la class hidden

      // document.getElementById("open").classList.toggle("hidden");
      // ensuite la même method est utilisée pour ajouté
 
};

document.getElementById("fleche").onclick = function(){

   document.getElementById("info").classList.toggle("hidden");
   document.getElementById("info").classList.toggle("");
    

//   document.getElementById("open").classList.toggle("hidden");

};

document.getElementById("heart").onclick = function(){

   document.getElementById("heartOpen").classList.toggle("hidden");
   document.getElementById("heartClose").classList.toggle("hidden")
};

