import{PolymerElement,html}from"./tr-app.js";class MyView2 extends PolymerElement{static get template(){return html`
      <style>
      h1,h4{
          font-weight:lighter;
          color:#ff4081;
        }

      
      </style>
      <iron-ajax 
          auto
          url="/data/images.json"
          handle-as="json"
          last-response="{{imdata}}">
      </iron-ajax>

      <div>
        <h1>Tracoph</h1>
        <h4>Travel - Code - Photograph </h4>
        <p>A niche I created. Sharing positive vibes through photographs &#x1F601; </p>
        </div>
      
        <template is="dom-repeat"  items="[[imdata]]">
        

        </template>

        

    `}}window.customElements.define("tr-tracoph",MyView2);