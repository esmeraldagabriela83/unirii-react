console.log("hello from bootstrap four js");

//tasted element
let toastElList = [].slice.call(document.querySelectorAll('.toast'))
   let toastList = toastElList.map(function (toastEl) {

     return new bootstrap.Toast(toastEl)
   })

   toastList[0].show()

//----------------------------------mmy toast----------------------
   toastList[1].show()

const myHiddenContent=document.getElementById('my-hidden-content');
myHiddenContent.style.border="3px solid green";

const myBtnAction=document.getElementById('my-btn-action');
myBtnAction.style.border="3px solid blue";

myBtnAction.addEventListener("click" , function(event){

event.preventDefault();
myHiddenContent.style.display="block";

});


//----------------------------------mmy toast live----------------------
   toastList[2].show()



//----------------------form js----------------------------------
let checkbox = document.getElementById("flexCheckIndeterminate");
   checkbox.indeterminate = true;


   (function () {
     'use strict'

     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     var forms = document.querySelectorAll('.needs-validation')

     // Loop over them and prevent submission
     Array.prototype.slice.call(forms)
       .forEach(function (form) {
         form.addEventListener('submit', function (event) {
           if (!form.checkValidity()) {
             event.preventDefault()
             event.stopPropagation()
           }

           form.classList.add('was-validated')
         }, false)
       })
   })()



   //
