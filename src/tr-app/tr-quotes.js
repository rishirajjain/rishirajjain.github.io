import{Polymer,html$1 as html,PolymerElement,html as html$1}from"./tr-app.js";const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<dom-module id="app-grid-style">
  <template>
    <style>
      :host {
        /**
         * The width for the expandible item is:
         * ((100% - subPixelAdjustment) / columns * itemColumns - gutter
         *
         * - subPixelAdjustment: 0.1px (Required for IE 11)
         * - gutter: var(--app-grid-gutter)
         * - columns: var(--app-grid-columns)
         * - itemColumn: var(--app-grid-expandible-item-columns)
         */
        --app-grid-expandible-item: {
          -webkit-flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;
          flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;
          max-width: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;
        };
      }

      .app-grid {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;

        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;

        padding-top: var(--app-grid-gutter, 0px);
        padding-left: var(--app-grid-gutter, 0px);
        box-sizing: border-box;
      }

      .app-grid > * {
        /* Required for IE 10 */
        -ms-flex: 1 1 100%;
        -webkit-flex: 1;
        flex: 1;

        /* The width for an item is: (100% - subPixelAdjustment - gutter * columns) / columns */
        -webkit-flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));
        flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));

        max-width: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));
        margin-bottom: var(--app-grid-gutter, 0px);
        margin-right: var(--app-grid-gutter, 0px);
        height: var(--app-grid-item-height);
        box-sizing: border-box;
      }

      .app-grid[has-aspect-ratio] > * {
        position: relative;
      }

      .app-grid[has-aspect-ratio] > *::before {
        display: block;
        content: "";
        padding-top: var(--app-grid-item-height, 100%);
      }

      .app-grid[has-aspect-ratio] > * > * {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);Polymer({_template:html`
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
`,is:"paper-card",properties:{/**
     * The title of the card.
     */heading:{type:String,value:"",observer:"_headingChanged"},/**
     * The url of the title image of the card.
     */image:{type:String,value:""},/**
     * The text alternative of the card's title image.
     */alt:{type:String},/**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */preloadImage:{type:Boolean,value:!1},/**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */fadeImage:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded. Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholderImage:{type:String,value:null},/**
     * The z-depth of the card, from 0-5.
     */elevation:{type:Number,value:1,reflectToAttribute:!0},/**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */animatedShadow:{type:Boolean,value:!1},/**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},/**
   * Format function for aria-hidden. Use the ! operator results in the
   * empty string when given a falsy value.
   */_isHidden:function(image){return image?"false":"true"},_headingChanged:function(heading){var currentHeading=this.getAttribute("heading"),currentLabel=this.getAttribute("aria-label");if("string"!==typeof currentLabel||currentLabel===currentHeading){this.setAttribute("aria-label",heading)}},_computeHeadingClass:function(image){return image?" over-image":""},_computeAnimated:function(animatedShadow){return animatedShadow}});class MyView3 extends PolymerElement{static get template(){return html$1`
      <style include="app-grid-style">

      :host {
      --app-grid-columns:3 ;
      --app-grid-item-height:50%;
      --app-grid-gutter:10px;
        }
        h1,h4{
        font-weight:lighter;
        color:#ff4081;
        font-family: 'Quicksand', sans-serif;  
        }
        .crd{
        background-color:#4f5b62;
        width:250px;
        height:150px;
        padding:5px;        

        }
        .crd:hover{
        box-shadow: 0 4px 8px 0 rgba(255,64,129,1);
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
        <h4>If these don't inspire you , what will?</h4>
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