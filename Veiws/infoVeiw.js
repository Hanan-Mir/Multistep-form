import View from "./veiw";
import arcade from 'url:../assets/images/icon-arcade.svg';
import advanced from 'url:../assets/images/icon-advanced.svg';
import pro from 'url:../assets/images/icon-pro.svg';
class Infoview extends View{
_parentEl=document.querySelector('#container');
_currentSection=document.querySelector('.plan-section');
_previousSectionBtn=document.querySelector('.infoSection');
_username=document.querySelector('#username');
_email=document.querySelector('#email');
_phNumber=document.querySelector('#ph-no');
_userNameNASection=document.querySelector('.messageUserName');
_emailNASection=document.querySelector('.messageemail');
_phNumberNASection=document.querySelector('.messagePhNumber');
veiw=new View();
_generateMarkup(){
    return`<section class="select-plan">
  <div class="heading">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing</p>
  </div>
  <div class="card-container">
<div class="card">
  <div class="card-icons">
    <img src="${arcade}" alt="">
  </div>
  <div class="card-info">
    <h3>Arcade</h3>
    <p class="arcade-cost">$9/mo</p>
    <p class="free-duration hide">2 months free</p>
  </div>
  </div>
  <div class="card advanced-card">
    <div class="card-icon">
      <img src="${advanced}" alt="">
    </div>
    <div class="card-info">
      <h3>Advanced</h3>
      <p class="advanced-cost">$12/mo</p>
      <p class="free-duration hide">2 months free</p>
    </div>
    </div>
    <div class="card pro-card">
      <div class="card-icon">
        <img src="${pro}" alt="">
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
</div>`
}
_currentPageMarkup(){
  return `
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
  `
}
addHandlerRender(handler){
    this.veiw._btnNext.addEventListener('click',(e)=>{
        e.preventDefault();
        handler(this._parentEl);
    });
}
addHanderRender(handler){
  this._previousSectionBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    handler(this._parentEl);
  })
}




}
export default new Infoview();