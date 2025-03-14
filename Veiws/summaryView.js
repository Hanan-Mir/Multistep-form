import View from "./veiw";
import addOnVeiw from "./addOnVeiw";
import infoVeiw from "./infoVeiw";
import addon from "./addon";
import selectPlanVeiw from "./selectPlanVeiw";
class Summary extends View{
    _currentSection=document.querySelector('.summary-section');
    _getStringFormat(plan){
        return plan.charAt(0).toUpperCase()+plan.slice(1);
    }
_generateMarkup(){
    return ` <section class="finishing-up">
  <div class="heading">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>
  </div>
  <div class="summary-container">
<div class="selected-plan">
  <div class="plan">
  <p class="plan-name">${this._getStringFormat(selectPlanVeiw._planSelected).replace('-card','')} (${this._getStringFormat(selectPlanVeiw.optionSelected)}ly)</p>
  <a href="#" class="change">Change</a>
</div>
<p class="price pmonthly">${selectPlanVeiw._planCost}</p>
<p class="price pyearly hide">$90/yr</p>
</div>
<div class="break"></div>
<div class="service-type">
  <p class="service-name">Online-service</p>
  <p class="service-cost smonthly">+$2/mo</p>
  <p class="service-cost syearly hide">+$10/mo</p>
  
</div>
<div class="storage-type">
  <p class="storage-name">Larger storage</p>
  <p class="storage-cost smonthly">+$2/mo</p>
  <p class="storage-cost syearly hide">+$20/yr</p>
</div>
  </div>
  
  </section>
  <div class="total-month">
    <p class="totalM">Total(per ${selectPlanVeiw.optionSelected})</p>
    <p class="totalM-cost tmonthly ">+$12/mo</p>
    <p class="totalM-cost tyearly hide">+$120/yr</p>
  </div>
  <div class="back-btn">
  <button class='addon'>Go Back</button>
</div>
  <div class="button">
  <button class="btn-confirm">Confirm</button>
</div>
  `
}
addHandlerRender(handler){
    selectPlanVeiw._parentEl.addEventListener('click',(e)=>{
if(e.target.classList.contains('summary')){
    handler(infoVeiw._parentEl);
}
    })
}
addHandlerRenderAddOn(handler){
    selectPlanVeiw._parentEl.addEventListener('click',(e)=>{
        if(e.target.classList.contains('addon')){
            handler(infoVeiw._parentEl);
        }
    })
}



}
export default new Summary();