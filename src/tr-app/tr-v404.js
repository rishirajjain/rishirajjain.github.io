import{PolymerElement,html}from"./tr-app.js";class MyView4 extends PolymerElement{static get template(){return html`
      <style>
      h1,h4{
          font-weight:lighter;
          color:#ff4081;
        }

      
      </style>

      <div class="card">
        <h1>Oops that's a 404!</h1>
        <h4>Could not find what you're looking for here.</h4><a href="[[rootPath]]about">head back</a>
        </div>
    `}}window.customElements.define("tr-v404",MyView4);