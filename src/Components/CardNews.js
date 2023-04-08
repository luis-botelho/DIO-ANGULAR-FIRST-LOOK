class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  //create the shadow component
  build() {

    const componentRoot = document.createElement("div");
    componentRoot.setAttributes("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class",  "card-left");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    //assing children
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
  }
  style() {}
}
customElements.define("card-news", CardNews);
