// dropdown menu function
const toggler = document.getElementBtId("toggler");
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