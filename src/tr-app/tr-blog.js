import{PolymerElement,html}from"../../node_modules/@polymer/polymer/polymer-element.js";import"../../node_modules/@polymer/iron-ajax/iron-ajax.js";import"../../node_modules/@polymer/paper-card/paper-card.js";import"../../node_modules/@polymer/paper-button/paper-button.js";import"../../node_modules/@polymer/paper-input/paper-input.js";import"../../node_modules/@polymer/paper-input/paper-textarea.js";import"../../node_modules/@polymer/paper-dialog/paper-dialog.js";class blog extends PolymerElement{static get template(){return html`
    <style>

	.postdiv{
	    background-color:#4f5b62;
	    padding:15px;
	    margin-top:10px; 

	    }

	.nav span{
		font-weight:lighter;
	    color:#ff4081;
	    font-size:30px;
      text-transform:uppercase;
		}    

	.nav{
		display: flex;
		margin: 1em;
	}    

	.alignright{
		margin-left: auto;
	}

  #sobtn
  {
    background-color:red;
    color:white;
  }

  #sbtn{
    background-color:green;
    color:white;
  }
  #addpost
  {
    background-color:#ff4081;
    color:white;
  }

  #dialog{
    border-radius:5px;
    width:100vh;
  }
  .buttons{
    display: flex;


  }
  #login{
    border-radius:5px;

  }
  .postdiv{


  }



   paper-dialog.coloured {
    border: 2px solid;
    border-color: #4caf50;
    background-color: #f1f8e9;
    color: #4caf50;
  }

  paper-dialog.size-position {
    width: 100%;
    height: auto;
    overflow: auto;
  }



    </style>

<div class="nav">
<span>Tracoph-Blog</span>

<div class="alignright"><paper-button on-tap="addForm"  id="addpost" >Add post</paper-button></div>
<div><paper-button on-tap="signIntoggle" id="sbtn">Sign In</paper-button></div>
<div><paper-button on-tap="signOut"  id="sobtn">Sign Out</paper-button></div>


</div>


<div id="blogList">

</div>


<!--Modal Add post form-->

<paper-dialog id="dialog" modal>

 <form id="form">
 <paper-input label="Title" id="title" ></paper-input>
 <paper-input label="Author name"id="aname" ></paper-input>
 <paper-textarea label="Content goes here" id="content"></paper-textarea>

  <div class="buttons">
<!--<input type="file" accept="image/*" alt="add image" id="image"></input> -->

    <div class="alignright"><paper-button dialog-confirm style="background-color: #263238; color: white;" >close</paper-button>
    </div>
    <div>
    <paper-button style="background-color:#ff4081;color: white;" on-tap="subMit">Submit</paper-button>
   </div>
    
  </div>
</form>
</paper-dialog>

<!--Modal Sign in-->

<paper-dialog id="login" modal>

 <form id="form">
 <paper-input label="User Name" id="uname" required auto-validate error-message="Enter Username!"></paper-input>
 <paper-input label="Password" id="pwd" type="password" required auto-validate error-message="Enter Password"></paper-input>

  <div class="buttons">
   <div class="alignright"> <paper-button dialog-confirm style="background-color: #263238; color: white;" >close</paper-button>
    </div>
   <div> <paper-button style="background-color:#ff4081;color: white;" on-tap="readUser">Login</paper-button>
 </div>
    
  </div>
</form>
</paper-dialog>


<!--Modal update post form-->

<paper-dialog id="updatediag" modal>

 <form id="form">
 <paper-input label="Title" id="uptitle"></paper-input>
 <paper-input label="Author name"id="upname" ></paper-input>
 <paper-textarea label="Content goes here" id="upcontent"></paper-textarea>

  <div class="buttons">
  <div class="alignright">  <paper-button dialog-confirm style="background-color: #263238; color: white;" >close</paper-button>
    </div>
   <div> 
   <paper-button style="background-color:#ff4081;color: white;" on-tap="updatePost">update</paper-button>
 </div>
    
  </div>
</form>
</paper-dialog>


<!--Modal View full post-->

<paper-dialog id="vipo" class="size-position" modal>

<div id="viewFull">
</div> 


  <div class="buttons">
  <div class="alignright">  
   <paper-button style="background-color:#263238; color: white;" on-tap="closed">close</paper-button>
    </div>    
  </div>
</form>
</paper-dialog>





    `}ready(){super.ready();// checks for session details
var check=sessionStorage.values,f=sessionStorage.flag;//first load
if("undefined"===typeof f){var values={addpost:"none",sobtn:"none"};window.sessionStorage.values=JSON.stringify(values);var rvalue=JSON.parse(sessionStorage.values);this.$.addpost.style.display=rvalue.addpost;this.$.sobtn.style.display=rvalue.sobtn}//signed in
else if("1"===f){this.$.sbtn.style.display="none"}//signed out
else if("0"===f){var values={addpost:"none",sobtn:"none"};window.sessionStorage.values=JSON.stringify(values);var rvalue=JSON.parse(sessionStorage.values);this.$.addpost.style.display=rvalue.addpost;this.$.sobtn.style.display=rvalue.sobtn}this.addEventListener("load",this.fireRead())}//Display posts from firebase
fireRead(){db.collection("blog").get().then(snapshot=>{snapshot.docs.forEach(doc=>{this.renderData(doc)})})}renderData(doc){const bList=this.$.blogList;let div=document.createElement("div"),title=document.createElement("h2"),author=document.createElement("span"),content=document.createElement("p"),time=document.createElement("p");div.setAttribute("docId",doc.id);div.setAttribute("class","postdiv");title.setAttribute("class","title");author.setAttribute("class","author");content.setAttribute("class","content");title.textContent=doc.data().title;author.textContent=doc.data().author;content.textContent=doc.data().content;time.textContent=doc.data().date;div.appendChild(title);div.appendChild(author);div.appendChild(time);let viewpost=document.createElement("paper-button");viewpost.innerHTML="View Post";viewpost.setAttribute("class","viewpost");div.appendChild(viewpost);shw=doc.id;var vp=this.$.vipo;const full=this.$.viewFull;viewpost.onclick=function viewPost(){vp.toggle();let div=document.createElement("div"),title=document.createElement("h2"),author=document.createElement("span"),content=document.createElement("p"),time=document.createElement("p");var vfp=db.collection("blog").doc(shw);vfp.get();title.textContent=doc.data().title;author.textContent=doc.data().author;content.textContent=doc.data().content;time.textContent=doc.data().date;div.setAttribute("id",doc.id);div.appendChild(title);div.appendChild(author);div.appendChild(content);div.appendChild(time);full.appendChild(div);chn=doc.id};// delete element
var f=sessionStorage.flag,idc=doc.id;if("1"===f){let delbtn=document.createElement("paper-button");delbtn.innerHTML="delete";delbtn.setAttribute("class","delbtn");div.appendChild(delbtn);delbtn.onclick=function deletePost(){if(confirm("Are sure you want to delete this post?")){db.collection("blog").doc(idc).delete().then(function(){window.location.reload()}).catch(function(error){window.alert("Failed to delete post: ",error)})}};//update post
let updt=document.createElement("paper-button");updt.innerHTML="update";updt.setAttribute("class","upadtebtn");div.appendChild(updt);var diag=this.$.updatediag;updt.onclick=function updateToggle(){diag.toggle();pid=idc}}//endif
bList.appendChild(div)}updatePost(){var upatedoc=db.collection("blog").doc(pid);let title=this.$.uptitle.value,author=this.$.upname.value,content=this.$.upcontent.value,date=new Date().toString(),data={title:title,author:author,content:content,date:date};var updatediag=this.$.updatediag;return upatedoc.update(data).then(function(){updatediag.close();window.location.reload()}).catch(function(error){// The document probably doesn't exist.
window.alert("Failed to update post: ",error)})}closed(){this.$.vipo.toggle();var element=this.shadowRoot.getElementById(chn);element.parentNode.removeChild(element)}addForm(){this.$.dialog.toggle()}subMit(){let title=this.$.title.value,author=this.$.aname.value,content=this.$.content.value,date=new Date().toString();this.fireWrite(title,author,content,date)}//push data into Firebase
fireWrite(title,author,content,date){let data={title:title,author:author,content:content,date:date};var dialog=this.$.dialog;db.collection("blog").add(data).then(function(){dialog.close();window.location.reload()}).catch(function(error){window.alert("Failed to post: ",error)})}readUser(){db.collection("userdetail").get().then(snapshot=>{snapshot.docs.forEach(udat=>{this.signIn(udat)})})}signIntoggle(){this.$.login.toggle()}signIn(udat){let user=udat.data().username,pass=udat.data().password,userinp=this.$.uname.value,pwdinp=this.$.pwd.value;if(user===userinp&&pass===pwdinp){this.$.login.close();var values={addpost:"block",sbtn:"none",sobtn:"block"};window.sessionStorage.values=JSON.stringify(values);var rvalue=JSON.parse(sessionStorage.values);this.$.addpost.style.display=rvalue.addpost;this.$.sbtn.style.display=rvalue.sbtn;this.$.sobtn.style.display=rvalue.sobtn;window.sessionStorage.flag=1;window.location.reload()}else{window.alert("Invalid Username / Password")}}signOut(){sessionStorage.flag=0;window.location.reload()}}window.customElements.define("tr-blog",blog);