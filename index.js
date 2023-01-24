/*la recuperation des elements*/
const fron =document.querySelector('#fron');
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const password2 =document.querySelector('#password2');


 // evenements

 fron.addEventlistener('click',e=>{
    e.preventDefault();
    fron_verify();
 })
   //fontion

    function fron_verify (){
        // obtenir toute les valeurs des inputs
        const uservalue = username.value.trin();
        const useremail = email.value.trin();
        const userpassword = password.value.trin();
        const userpassword2 = password2.value.trin();
    }
     // username verify
       if (uservalue ==="") {
         let message ="username ne peut pas etre vide";
         setError(username,message);
         else if (username.match)
       }
     
     function setError(elem,message){
        const fromcontrol = elem.parentElement;
        const small = fromcontrol.querySelector('small');
     }
             // ajout du message d'erreur
        small.innerText = message
             // ajout de la classe error
         fromcontrol.classNAme = "from-control error";
          alert("hello salut");
    
