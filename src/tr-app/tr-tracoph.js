import{PolymerElement,html}from"./tr-app.js";class MyView2 extends PolymerElement{static get template(){return html`
      <style include="app-grid-style">
      :host {
      --app-grid-columns:4 ;
      --app-grid-item-height:25%;
      --app-grid-gutter:10px;
        }
      h1,h4{
          font-weight:lighter;
          color:#ff4081;
        }

        app-grid{
          width:250px;
          height:250px;
        }
        .imcont{
          background-color:white;
          color:black;
          height: 100%;
          width:100%;
        --iron-image-height: 100%;
        --iron-image-width: 100%;

        }
        iron-image {
        width: 400px;
        height: 400px;
       
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

<!-- <paper-button on-click="toggleDialog">open</paper-button>

<paper-dialog id="dialog" modal> 
  <h2>Header</h2>
  <iron-image  fade src="/images/tracoph/p2.jpg" ></iron-image>

  <div class="buttons">
    <paper-button dialog-dismiss>Cancel</paper-button>
    <paper-button dialog-confirm autofocus>Accept</paper-button>
  </div>
</paper-dialog>
 -->


    <!-- 
        <div class="app-grid">
        <template is="dom-repeat"  items="[[imdata]]">
       
       <div class="imcont">
       <iron-image fade src="[[item.imloc]]"> </iron-image>
        </div>
       

        </template>
        </div>  -->
        

    `}toggleDialog(){this.$.dialog.toggle()}}window.customElements.define("tr-tracoph",MyView2);