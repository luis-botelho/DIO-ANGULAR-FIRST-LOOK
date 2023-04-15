class customTitle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    //base
    const componentRoot = document.createElement("h1");

    componentRoot.textContent = this.getAttribute("title");
    //send base
    shadow.appendChild(componentRoot);
    //style
    const style = document.createElement("style");
    style.textContent = `
      h1{
        color: red;
      }

    `;  
    //send the style
    shadow.appendChild(style);
  } 
}
customElements.define("custom-title", customTitle);
