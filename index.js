const CHANGE_ELEMENT_STATE = () => {
    const ELEMENT = document.querySelector(".drop-down-title");
 
    const BODY = document.querySelector("body");
 
    ELEMENT.addEventListener("mouseover", () => {
       ELEMENT.classList.add("hovered");
       ELEMENT.addEventListener("mouseout", () => {
          ELEMENT.classList.remove("hovered");
       });
    });
 
    ELEMENT.addEventListener("click", () => {
       ELEMENT.classList.add("focused");
    });
 
    BODY.addEventListener("click", (event) => {
       if (event.target !== ELEMENT) {
          ELEMENT.classList.remove("focused");
       }
    });
 };

 module.exports = CHANGE_ELEMENT_STATE