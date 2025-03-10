import View from "./veiw";
import selectPlanVeiw from "./selectPlanVeiw";
import infoVeiw from "./infoVeiw";
class AddOnVeiw extends View{
  planSelected;
  planCost;
  _currentSection=document.querySelector('.addOn-section');
  _selectedAddOn=document.querySelectorAll('.addOn');
  setPlanData(planSelected,planCost){
    this.planSelected=planSelected;
    this.planCost=planCost;
  }
    _generateMarkup(){
     if(selectPlanVeiw.optionSelected=='month'){
    return `<section class="add-on">
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
  <div class="cost"><p>+$1/mo</p>
  <p class="hide">+$10/yr</p>
  </div>
</div>
<div class="addon-description" value='larger-storage'>
  <input type="checkbox" name="" id="" value='larger-storage' class='addOn'>
  <div class="addon-type type2">
   <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
  </div>
  <div class="cost"><p>+$2/mo</p>
    <p class="hide">+$20/yr</p>
  </div>
</div>
<div class="addon-description" value='customizable-profile'>
  <input type="checkbox" name="" id="" value='customizable-profile' class='addOn'>
  <div class="addon-type">
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
  </div>
  <div class="cost"><p>+$2/mo</p>
    <p class="hide">+$20/yr</p>
  </div>
</div>

</div>
</section> 
<div class="back-btn">
  <button class='selectPlan'>Go Back</button>
</div>
<div class="button">
  <button class="summary">Next Step</button>
</div>`
}
if(selectPlanVeiw.optionSelected=='year'){
 return` <section class="add-on">
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
  <p>+$10/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="" value='larger-storage' class='addOn'>
  <div class="addon-type type2">
   <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
  </div>
  <div class="cost">
    <p>+$20/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="" value='customizable-profile' class='addOn'>
  <div class="addon-type">
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
  </div>
  <div class="cost">
    <p>+$20/yr</p>
  </div>
</div>

</div>
</section><div class="back-btn">
  <button class='selectPlan'>Go Back</button>
</div>
<div class="button">
  <button class="summary">Next Step</button>
</div> `


}
 }
addHandlerRenderAddOn(handler){
    selectPlanVeiw._parentEl.addEventListener('click',(e)=>{
if(e.target.classList.contains('select-plan')){
  e.preventDefault();
  let activeCard=document.querySelector('.active-card');
  if(activeCard){
handler(infoVeiw._parentEl);
console.log(this._selectedAddOn);
this._selectedAddOn.forEach((addon)=>{
if(addon.checked){
  alert(addon.value);
}


})
}
}
  })
}
}
export default new AddOnVeiw();