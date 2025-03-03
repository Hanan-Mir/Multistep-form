import View from "./veiw";
import selectPlanVeiw from "./selectPlanVeiw";
class AddOnVeiw extends View{
    _generateMarkup(){
if(selectPlanVeiw._optionSelected=='month'){
    return `<section class="add-on hide">
  <div class="heading">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
<div class="addon-container">
<div class="addon-description">
  <input type="checkbox" name="" id="">
  <div class="addon-type">
    <h3>Online service</h3>
    <p>Access to multiplayer games</p>
  </div>
  <div class="cost"><p>+$1/mo</p>
  <p class="hide">+$10/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="">
  <div class="addon-type type2">
   <h3>Larger storage</h3>
    <p>Extra 1TB of cloud save</p>
  </div>
  <div class="cost"><p>+$2/mo</p>
    <p class="hide">+$20/yr</p>
  </div>
</div>
<div class="addon-description">
  <input type="checkbox" name="" id="">
  <div class="addon-type">
    <h3>Customizable profile</h3>
    <p>Custom theme on your profile</p>
  </div>
  <div class="cost"><p>+$2/mo</p>
    <p class="hide">+$20/yr</p>
  </div>
</div>

</div>
</section> `
}
    }
addHandlerRenderAddOn(){
    selectPlanVeiw._parentEl.addEventListener('click',(e)=>{
        e.preventDefault();
if(e.target.classList.contains('select-plan')){
alert("move to other section");
}

    })
}


}
export default new AddOnVeiw();