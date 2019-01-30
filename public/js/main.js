// dropdown menu function
const dropMenu = document.getElementById("navbarColor01");
const toggler = document.getElementById("toggler");

    toggler.onclick = () => {
    dropMenu.style.display = "block"; 

 // close menu onlick outside the dowpdown
 window.addEventListener('mouseup', (event) => {    
    if(event.target != dropMenu && event.target.parentNode != dropMenu) {
      dropMenu.style.display = "none";
    }
  });
 }
  
 // keep nav-link underlined after any of it has been clicked
 const navContainer = document.getElementById("myNavs");
 const navs = navContainer.document.getElementsByClassName("nav-link");
 //for every nav-link 
 for(let i=0; i<navs.length; i++){
     navs[i].addEvenetListner("click", () => {
        const current = document.getElementsByClassName("active2");
         current[0].className = current[0].ClassName.replace("active2", "");
         this.className =+ " active2";
     });
 }
  
  
  // Contact-Form Message Submission
 
 $(document).ready(function{
     $('#contact-form').submit(function(e) {
        var name = document.getElementById('name'),
            email = document.getElementById('email'),
            message = document.getElementById('Textarea');
            
        if(!name.value || !email.value || !message.value){
            alert("Please check your entries!");
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: 'https://formspree.io/martinsoluwaseun47@gmail.com',
                data: $(#contact-form).serialize(),
                dataType: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            alert('Your message has been sent');
        }
     });
 }); 