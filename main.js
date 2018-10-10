// dropdown menu function
const toggler = document.getElementBtId("toggler");
    toggler.onclick = () => {
    modal.style.display = "block";
} 

 // close menu onlick outside the dowpdown
 window.addEventListener('mouseup', (event) => {
     const modal = document.getElementById("navs");
     
    if(event.target != modal && event.target.parentNode != modal) {
      modal.style.display = "none";
    }
  });