 window.addEventListener('mouseup', (event) => {
     const modal = document.getElementById("mynavbar");
     
    if(event.target != modal && event.target.parentNode != modal) {
      modal.style.display = "none";
    }
  });