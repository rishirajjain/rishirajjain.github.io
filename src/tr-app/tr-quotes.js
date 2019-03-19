import{Polymer,html$1 as html,PolymerElement,html as html$1}from"./tr-app.js";Polymer({_template:html`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(image){return image?"false":"true"},_headingChanged:function(heading){var currentHeading=this.getAttribute("heading"),currentLabel=this.getAttribute("aria-label");if("string"!==typeof currentLabel||currentLabel===currentHeading){this.setAttribute("aria-label",heading)}},_computeHeadingClass:function(image){return image?" over-image":""},_computeAnimated:function(animatedShadow){return animatedShadow}});class MyView3 extends PolymerElement{static get template(){return html$1`
      <style include="app-grid-style">

      :host {
      --app-grid-columns:3 ;
      --app-grid-item-height:50%;
      --app-grid-gutter:10px;
        }
        h1,h4{
        font-weight:lighter;
        color:#ff4081;
        }
        .crd{
        background-color:#4f5b62;
        width:250px;
        height:150px;
        padding:5px;        

        }
        .crd:hover{
        -webkit-box-shadow: -1px 2px 15px 3px rgba(255,64,129,1);
        -moz-box-shadow: -1px 2px 15px 3px rgba(255,64,129,1);
        box-shadow: -1px 2px 15px 3px rgba(255,64,129,1);
        }

        .quote{
        text-align:center;
        position: relative;
        
        }

        .quote p{
          font-size: 16px;
        }

        .app-grid{
          text-align:center;
        }

        .cred{
        font-size: 12px;
        text-align: justify;
        width: 100px;
        height: 30px;
        position: relative;
        left: 60%;
        bottom:0;
        color:#ff4081;

        }
       

        @media (max-width:780px) {
        .crd{
          width:220px;
        }
      }     

     

      @media (max-width: 640px) {
        :host {
          --app-grid-columns: 2;
        }
        .crd{
          width:240px;
          height:100px ;
        }
        .cred{
          font-size:12px;
        }
        .quote p{
          font-size:12px;

        }
      }

      @media(max-width:500px){
      
        .crd{
          width:160px;
          height:100px ;
        
      }
      .cred{
        width:80px;
        left:40%;
        font-size:10px;
        }
        .quote p{
          font-size:10px;

        }
    }
    @media(max-width:370px){
      .crd{
          width:140px;
          height:80px ;
        
      }
      .cred{
        width:60px;
        left:40%;
        font-size:9px;
        }
        .quote p{
          font-size:9px;

        }
        }
       
      </style>
      <iron-ajax 
          auto
          url="/data/quotes.json"
          handle-as="json"
          last-response="{{quotes}}">
      </iron-ajax>

      <div>
        <h1>Quotes</h1>
        <h4>Warning: Deep thoughts that inspire.</h4>
     </div>
        
     <div class="app-grid">
  
        <template is="dom-repeat"  items="[[quotes]]">
        <div>     
           <paper-card class="crd">
             <div class="quote">
              <p>[[item.quote]]</p>
             </div>
             <div class="cred">--[[item.by]]</div>
           </paper-card>   
            </div>
        </template>
  
     </div>

     

    `}}window.customElements.define("tr-quotes",MyView3);