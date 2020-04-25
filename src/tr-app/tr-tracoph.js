import{PolymerElement,html}from"./tr-app.js";class MyView2 extends PolymerElement{static get template(){return html`
      <style >
      :host {
        
          }
         h1,h4{
          font-weight:lighter;
          color:#ff4081;
          font-family: 'Quicksand', sans-serif;  
           }
             
          iron-image{
            width:400px;
            height:250px;
          }
          .app{
            display: flex;
            overflow-x: scroll;
            -ms-overflow-style: none;
          
          }
         .app::-webkit-scrollbar {
          display: none;
        }
          
          .polaroid{
            margin-right: 17px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
          }
          .polaroid:hover{
            box-shadow: 0 4px 8px 0 white;
          }
          .indigo{
            background-color:white;
            opacity:0.8;
            color:black;        
          }
          paper-icon-button.pink{
            width: 50px;
            height: 50px;
            background-color: white;
            border-radius: 17px;
            
            }
    
            paper-icon-button.pink:hover {
            background-color:#ff94c2;
            border-radius: 17px;
            }
            .follow{
              text-align:right; margin:0px auto 0px auto;
            }
            .slider{
              text-align:center;
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
          <p>Sharing positive vibes through photographs &#x1F601;.For more photos click on this &#x1F449; <a href="https://www.instagram.com/tracoph/" target="_blank"><paper-icon-button src="/images/icons/insta.svg" class="pink" alt="Loading..." ></paper-icon-button></a>
          </p>
          
          
          
        </div>
        
        <div class="app" id="app">
        <template is="dom-repeat"  items="[[imdata]]">
          <div id="outer">     
            <div class="polaroid">
             <iron-image sizing="cover" alt="Gallery Images" src="[[item.imloc]]" ></iron-image>
            </div>
          </div>
        </template>
        
           </div>
           
        <div class="slider">
        <paper-button on-tap="prev" > < </paper-button>   
        <paper-button on-tap="next" > > </paper-button> 
        </div>

    `}prev(){this.$.app.scrollBy({left:-200,behavior:"smooth"})}next(){this.$.app.scrollBy({left:200,behavior:"smooth"})}}window.customElements.define("tr-tracoph",MyView2);