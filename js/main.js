/*
// dropdown menu function
const toggler = document.getElementById("toggler");
    toggler.onclick = () => {
    dropMenu.style.display = "block";
} 

 // close menu onlick outside the dowpdown
 window.addEventListener('mouseup', (event) => {
     const dropMenu = document.getElementById("navs");
     
    if(event.target != dropMenu && event.target.parentNode != dropMenu) {
      dropMenu.style.display = "none";
    }
  });
  */
 // keep nav-link underlined after any of it has been clicked
 const navContainer = document.getElementById("myNavs");
 const navs = navComtainer.document.getElementsByClassName("nav-link");
 for every nav-link 
 for(let i=0; i<navs.length; i++){
     navs[i].addEvenetListner("click", () => {
        const current = document.getElementsByClassName("active2");
         current[0].className = current[0].ClassName.replace("active2", "");
         this.className =+ " active2";
     });
 }
  
  
