function dropdown() {
    const selectItem = document.querySelectorAll(".click");
  
    selectItem.forEach((item, i) => {
      item.addEventListener("click", (event) => {
        const selectBody = document.querySelectorAll(".sub-menu__list");
  
        selectBody[i].classList.toggle("show");
        item.classList.toggle("shadow");
      });
    });
  }
  
  
  dropdown();