document.getElementById("open").onclick = function(){ 
   // lorsque l'élément id est cliqué  une fonction est éxécutée
   document.getElementById("info").classList.toggle("hidden");
   document.getElementById("info").classList.remove("animate__slideOutDown");
   document.getElementById("info").classList.add("animate__slideInUp");
};

document.getElementById("fleche").onclick = function()
{
   document.getElementById("info").classList.remove("animate__slideInUp");
   document.getElementById("info").classList.add("animate__slideOutDown");

   // au bout de 500ms on ajoute la class hidden à notre élément info
   window.setTimeout(function() {
      document.getElementById("info").classList.toggle("hidden");
   }, 500);
};

document.getElementById("heart").onclick = function(){

   document.getElementById("heartOpen").classList.toggle("hidden");
   document.getElementById("heartClose").classList.toggle("hidden")
};

