 window.addEventListener('mouseup', (event) => {
     const modal = document.getElementById("navs");
     
    if(event.target != modal && event.target.parentNode != modal) {
      modal.style.display = "none";
    }
  });