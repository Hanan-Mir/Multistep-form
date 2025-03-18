function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,a={},n={},s=t.parcelRequire94c2;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequire94c2=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,n=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)n.set(t[a],{baseUrl:e,path:t[a+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["j4MnI","index.c5d31403.js","cFtnW","icon-arcade.f69113a3.svg","hDB8r","icon-advanced.aedd8084.svg","gfa2f","icon-pro.188e6dbf.svg","gP4MP","icon-thank-you.07233564.svg"]'));class c{_data;_btnNext=document.querySelector(".next");_listOfSections=document.querySelectorAll(".step-count");_render=function(e,t){this._data=e;let a=this._data;this.clear(t),t.insertAdjacentHTML("afterbegin",a)};clear(e){e.innerHTML=""}_activateCurrentSection=function(e){this._listOfSections.forEach(e=>{e.classList.remove("active")}),e.forEach(e=>{e.classList.add("active"),e.style.color="black"})}}var d={};d=new URL("icon-arcade.f69113a3.svg",import.meta.url).toString();var i={};i=new URL("icon-advanced.aedd8084.svg",import.meta.url).toString();var r={};r=new URL("icon-pro.188e6dbf.svg",import.meta.url).toString();class l extends c{_parentEl=document.querySelector("#container");_currentSection=document.querySelectorAll(".plan-section");_previousSectionBtn=document.querySelector(".infoSection");_username=document.querySelector("#username");_email=document.querySelector("#email");_phNumber=document.querySelector("#ph-no");_userNameNASection=document.querySelector(".messageUserName");_emailNASection=document.querySelector(".messageemail");_phNumberNASection=document.querySelector(".messagePhNumber");veiw=new c;_generateMarkup(){return`<section class="select-plan">
  <div class="heading">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing</p>
  </div>
  <div class="card-container">
<div class="card" data-planSelected='arcade-card'>
  <div class="card-icons">
    <img src="${e(d)}" alt="">
  </div>
  <div class="card-info">
    <h3 class='planname'>Arcade</h3>
    <p class="arcade-cost">$9/mo</p>
    <p class="free-duration hide">2 months free</p>
  </div>
  </div>
  <div class="card" data-planSelected='advanced-card'>
    <div class="card-icon">
      <img src="${e(i)}" alt="">
    </div>
    <div class="card-info">
      <h3>Advanced</h3>
      <p class="advanced-cost">$12/mo</p>
      <p class="free-duration hide">2 months free</p>
    </div>
    </div>
    <div class="card pro-card" data-planSelected='pro-card'>
      <div class="card-icon">
        <img src="${e(r)}" alt="">
      </div>
      <div class="card-info">
        <h3>Pro</h3>
        <p class="pro-cost">$15/mo</p>
        <p class="free-duration hide">2 months free</p>
      </div>
      </div>
  </div>
<div class="toggle-section">
  <label for="month">Monthly</label>
  <div class="radio-btn">
    <input type="radio" name="option" value="month"  id="month" class="option">
    <input type="radio" name="option" value="year" id="year"  class="option">
    <div class="slider"></div>
  </div>
  <label for="year">Yearly</label>
</div>
</section>
<div class="back-btn">
  <button class='infoSection'>Go Back</button>
</div>
<div class="button">
  <button class="select-plan">Next Step</button>
</div>`}_currentPageMarkup(){return`
  <section class="your-info">
<div class="heading">
  <h1>Personal info</h1>
  <p>Please provide your name,email address, and phone number.</p>
</div>
<div class="name input-style ">
  <label for="username">Name</label>
  <input type="text" name="" id="username" placeholder="e.g Mir Hanan" class="textbox-style" required>
</div>
<div class="email input-style ">
  <label for="email">Email Address</label>
<input type="email" name="" id="email" class="textbox-style" placeholder="hanan@gmail.com" required>
</div>
<div class="phone-number input-style ">
  <label for="ph-no">Phone Number</label>
<input type="number" name="" id="ph-no" class="textbox-style" placeholder="+91 7780964843" required>
</div>
</section>
<div class="button">
  <button class="next">Next Step</button>
</div>
  `}addHandlerRender(e){this.veiw._btnNext.addEventListener("click",t=>{t.preventDefault(),e(this._parentEl)})}addHanderRender(e){this._previousSectionBtn.addEventListener("click",t=>{t.preventDefault(),e(this._parentEl)})}}var o=new l;class p extends c{_parentEl=document.querySelector(".right");optionSelected="month";_planSelected;_costEl;_planCost;optionSelectedfun(e){this.optionSelected=e}addHandlerActivateCard(){this._parentEl.addEventListener("click",e=>{let t=e.target.closest(".card");if(e.target.classList.contains("card")){if(document.querySelectorAll(".card").forEach(e=>{e.classList.remove("active-card")}),!t)return;t.classList.add("active-card"),this._planSelected=t.dataset.planselected,this._costEl=document.querySelector(`.${this._planSelected.replace("-card","-cost")}`),this._planCost=this._costEl.innerHTML,console.log(this._planCost)}})}addHandlerToggle(){this._parentEl.addEventListener("click",e=>{if(e.target.classList.contains("option")){let t=e.target.value,a=document.querySelector(".arcade-cost"),n=document.querySelector(".advanced-cost"),s=document.querySelector(".pro-cost"),c=document.querySelectorAll(".free-duration");"month"==t&&(a.innerHTML="",a.innerHTML="$9/month",n.innerHTML="",n.innerHTML="$12/mo",s.innerHTML="",s.innerHTML="$15/mo",c.forEach(e=>{e.classList.add("hide")}),this.optionSelectedfun("month"),this._planCost=this._costEl.innerHTML,console.log(this._planCost)),"year"==t&&(a.innerHTML="",a.innerHTML="$90/yr",n.innerHTML="",n.innerHTML="$120/yr",s.innerHTML="",s.innerHTML="$150/yr",c.forEach(e=>{e.classList.remove("hide")}),this.optionSelectedfun("year"),this._planCost=this._costEl.innerHTML,console.log(this._planCost))}})}}var u=new p;class v extends c{planSelected;planCost;_currentSection=document.querySelectorAll(".addOn-section");_selectedAddOn=document.querySelectorAll(".addOn");setPlanData(e,t){this.planSelected=e,this.planCost=t}_generateMarkup(){return"month"==u.optionSelected?`<section class="add-on">
  <div class="heading">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
<div class="addon-container">
<div class="addon-description"'>
  <input type="checkbox" name="" id="" value='online-service' class='addOn'>
  <div class="addon-type">
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
  </div>
  <div class="cost"><p class="online-service">+$1/mo</p>
  <p class="hide online-service">+$10/yr</p>
  </div>
</div>
<div class="addon-description" value='larger-storage'>
  <input type="checkbox" name="" id="" value='larger-storage' class='addOn'>
  <div class="addon-type type2">
   <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
  </div>
  <div class="cost"><p class='larger-storage'>+$2/mo</p>
    <p class="hide larger-storage">+$20/yr</p>
  </div>
</div>
<div class="addon-description" value='customizable-profile'>
  <input type="checkbox" name="" id="" value='customizable-profile' class='addOn'>
  <div class="addon-type">
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
  </div>
  <div class="cost"><p class='customizable-profile'>+$2/mo</p>
    <p class="hide customizable-profile">+$20/yr</p>
  </div>
</div>

</div>
</section> 
<div class="back-btn">
  <button class='selectPlan'>Go Back</button>
</div>
<div class="button">
  <button class="summary">Next Step</button>
</div>`:"year"==u.optionSelected?` <section class="add-on">
  <div class="heading">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
<div class="addon-container">
<div class="addon-description">
  <input type="checkbox" name="" id="" value='online-service' class='addOn'>
  <div class="addon-type">
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
  </div>
  <div class="cost">
  <p class="online-service">+$10/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="" value='larger-storage' class='addOn'>
  <div class="addon-type type2">
   <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
  </div>
  <div class="cost">
    <p class='larger-storage'>+$20/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="" value='customizable-profile' class='addOn'>
  <div class="addon-type">
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
  </div>
  <div class="cost">
    <p class='customizable-profile'>+$20/yr</p>
  </div>
</div>

</div>
</section><div class="back-btn">
  <button class='selectPlan'>Go Back</button>
</div>
<div class="button">
  <button class="summary">Next Step</button>
</div> `:void 0}addHandlerRenderAddOn(e){u._parentEl.addEventListener("click",t=>{t.target.classList.contains("select-plan")&&(t.preventDefault(),document.querySelector(".active-card")&&(e(o._parentEl),console.log(this._selectedAddOn),this._selectedAddOn.forEach(e=>{e.checked&&alert(e.value)})))})}addHandlerRenderSelectPlan(e){u._parentEl.addEventListener("click",t=>{t.target.classList.contains("selectPlan")&&e(o._parentEl)})}onClickCheckBox(){u._parentEl.addEventListener("click",e=>{e.target.classList.contains("selectPlan")&&document.querySelectorAll(".addon-description").forEach(e=>{console.log(e),e.addEventListener("click",()=>{alert("Clicked")})})})}}var h=new v;class m extends c{_addonSelected=[];_addOnMap=new Map;addHandlerGetData(){u._parentEl.addEventListener("click",e=>{if(e.target.closest(".add-on")){document.querySelectorAll(".addOn").forEach(e=>{if(e.checked&&!this._addonSelected.includes(e.value)&&this._addonSelected.push(e.value),!e.checked&&this._addonSelected.includes(e.value)){let t=this._addonSelected.indexOf(e.value);console.log(this._addonSelected[t]),this._addOnMap.delete(this._addonSelected[t]),this._addonSelected.splice(t,1)}}),console.log(this._addonSelected);for(let e=0;e<this._addonSelected.length;e++){let t=document.querySelector(`.${this._addonSelected[e]}`);this._addOnMap.set(`${this._addonSelected[e]}`,`${t.innerHTML}`)}console.log(this._addOnMap)}})}}var _=new m,g={};g=new URL("icon-thank-you.07233564.svg",import.meta.url).toString();class S extends c{_currentSection=document.querySelectorAll(".summary-section");_load=!0;_getStringFormat(e){return e.charAt(0).toUpperCase()+e.slice(1)}_generateMarkup(){return` <section class="finishing-up">
  <div class="heading">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>
  </div>
  <div class="summary-container">
<div class="selected-plan">
  <div class="plan">
  <p class="plan-name">${this._getStringFormat(u._planSelected).replace("-card","")} (${this._getStringFormat(u.optionSelected)}ly)</p>
  <a href="#" class="change">Change</a>
</div>
<p class="price pmonthly">${u._planCost}</p>
<p class="price pyearly hide">$90/yr</p>
</div>
<div class="break"></div>

  </div>
  
  </section>
  <div class="total-month">
    <p class="totalM">Total(per ${u.optionSelected})</p>
    <p class="totalM-cost tmonthly tcost ">+$12/mo</p>
    <p class="totalM-cost tyearly hide">+$120/yr</p>
  </div>
  <div class="back-btn">
  <button class='addon'>Go Back</button>
</div>
  <div class="button">
  <button class="btn-confirm">Confirm</button>
</div>
  `}_generateSucessMarkUp(){return`<section class="sucess-container">
  <div class="sucess">
<img src="${e(g)}" alt="">
<h1>Thank you!</h1>
<p class="sucess-msg">Thanks for confirming your subscription!We hope you have fun using our platform.If you ever need support,please feel free to email us at support@hanan.com.</p>
</div>
</section>`}addHandlerRender(e){u._parentEl.addEventListener("click",t=>{t.target.classList.contains("summary")&&e(o._parentEl)})}addHandlerRenderAddOn(e){u._parentEl.addEventListener("click",t=>{t.target.classList.contains("addon")&&(e(o._parentEl),this._load=!0)})}insertAddonsSelected(){u._parentEl.addEventListener("click",e=>{if(document.querySelector(".finishing-up")&&this._load){let e=this.getNumber(u._planCost,1),t=document.querySelector(".summary-container"),a=document.querySelector(".tcost");console.log(t),this._load&&_._addOnMap.forEach((a,n)=>{let s=document.createElement("div");e+=this.getNumber(a,2),s.classList.add("storage-type"),s.innerHTML=`<p class="service-name">${n}</p>
  <p class="service-cost smonthly">${a}</p>`,t.appendChild(s)}),this._load=!1,"month"==u.optionSelected?a.innerHTML=`+$${e}/mo`:a.innerHTML=`+$${e}/yr`}})}getNumber(e,t){let a=e.indexOf("/");return+e.slice(t,a)}renderSelectPlanOnClick(e){u._parentEl.addEventListener("click",t=>{t.target.classList.contains("change")&&(e(o._parentEl),this._load=!0)})}renderSucessMessage(e){u._parentEl.addEventListener("click",t=>{t.target.classList.contains("btn-confirm")&&(console.log("Hello"),e(u._parentEl))})}}var y=new S;const f=function(e){b(o._username)&&E(o._email)&&b(o._phNumber)&&(o._render(o._generateMarkup(),e),o._activateCurrentSection(o._currentSection)),b(o._username)||o._userNameNASection.classList.remove("hide"),E._email||o._emailNASection.classList.remove("hide"),b(o._phNumber)||o._phNumberNASection.classList.remove("hide")},b=function(e){if(e.value)return!0},E=function(e){if(e.value.includes("@")&&e.value.endsWith(".com"))return!0},L=function(e){h._render(h._generateMarkup(),e),h._activateCurrentSection(h._currentSection)};o.addHandlerRender(f),u.addHandlerActivateCard(),u.addHandlerToggle(),h.addHandlerRenderAddOn(L),_.addHandlerGetData(),y.addHandlerRender(function(e){y._render(y._generateMarkup(),e),y._activateCurrentSection(y._currentSection)}),h.addHandlerRenderSelectPlan(f),y.addHandlerRenderAddOn(L),y.insertAddonsSelected(),y.renderSelectPlanOnClick(f),y.renderSucessMessage(function(e){y._render(y._generateSucessMarkUp(),e)}),h.onClickCheckBox();
//# sourceMappingURL=index.c5d31403.js.map
