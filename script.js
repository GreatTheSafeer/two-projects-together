document.addEventListener(`DOMContentLoaded`, function(){
    const contactform =document.getElementById(`contact-form`)
    const formMessage=document.getElementById(`form-message`)


    if (contactform) {


        contactform.addEventListener(`submit`, function(event){
            event.preventDefault();
            const name=document.getElementById(`name`).value.trim();
            const email=document.getElementById(`email`).value.trim();
            const message=document.getElementById(`message`).value.trim();



            if(!name || !email || !message ) {
                formMessage.textContent=`please fill out the fields`;
                formMessage.style.color=`red`;
                return;
            }
         setTimeout(function(){
            formMessage.textContent=`mesasge sent successfully`;
            formMessage.style.color=`green`;
            contactform.reset();
         }, 1000);

         setTimeout(function(){
            formMessage.textContent=``;
         },5000 );
        }
    
    )
    };
}
);