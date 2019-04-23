import{PolymerElement,html}from"./tr-app.js";class MyView1 extends PolymerElement{static get template(){return html`
      <style>
      h1{
          font-weight:lighter;
          color:#ff4081;
          font-family: 'Quicksand', sans-serif;  
        }
      </style>

      
      <h1>About</h1>

      <p>
      The photo you see above is what my physical self looks like. Intellectually I'm a complex being but I'd like to keep things simple for the purpose of this page. 
      <br>I'm currently pursuing  Electronics and Communication Engineering at Amrita University.
      Although my core subjects have little to do with programming, I've grown a deep fascination toward web development and I strive to accomplish more in this field.  

      </p> 
      <p>
      In addition to technical things, I also have diverse interests in art, photography, reading.
      My motto is to always keep learning new things.

      You'd find me reading, travelling or sleeping in my free time, or I could be doing all three at the same time &#x1F609;.
      </p>

      
    `}}window.customElements.define("tr-about",MyView1);