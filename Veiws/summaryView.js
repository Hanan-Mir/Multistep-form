import View from "./veiw";
import addOnVeiw from "./addOnVeiw";
import infoVeiw from "./infoVeiw";
import addon from "./addon";
import selectPlanVeiw from "./selectPlanVeiw";
import thankYou from 'url:../assets/images/icon-thank-you.svg'
class Summary extends View{
    _currentSection=document.querySelectorAll('.summary-section');
    _load=true;
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

  </div>
  
  </section>
  <div class="total-month">
    <p class="totalM">Total(per ${selectPlanVeiw.optionSelected})</p>
    <p class="totalM-cost tmonthly tcost ">+$12/mo</p>
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
_generateSucessMarkUp(){
  return `<section class="sucess-container">
  <div class="sucess">
<img src="${thankYou}" alt="">
<h1>Thank you!</h1>
<p class="sucess-msg">Thanks for confirming your subscription!We hope you have fun using our platform.If you ever need support,please feel free to email us at support@hanan.com.</p>
</div>
</section>`
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
            this._load=true;
        }
    })
}
//function to insert html in the table based on the adddons selected
insertAddonsSelected(){
  // window.addEventListener('load',(e)=>{
  //   if(document.querySelector('.summary-container')){
  //     alert("page loaded sucessfully");
  //   }
  // })
  selectPlanVeiw._parentEl.addEventListener('click',(e)=>{
    if(document.querySelector('.finishing-up') && this._load){
      let totalSum=this.getNumber(selectPlanVeiw._planCost,1);
      let container=document.querySelector('.summary-container');
      let total=document.querySelector('.tcost');
      // total.innerHTML=this.getNumber(selectPlanVeiw._planCost);
      console.log(container);
      if(this._load){
      addon._addOnMap.forEach((value,key)=>{
        const row=document.createElement('div');
        totalSum+=this.getNumber(value,2);
        row.classList.add('storage-type');
        row.innerHTML=`<p class="service-name">${key}</p>
  <p class="service-cost smonthly">${value}</p>`;
  container.appendChild(row);
      })   
    }
    this._load=false;
      if(selectPlanVeiw.optionSelected=='month'){
      total.innerHTML=`+$${totalSum}/mo`;
      }else{
        total.innerHTML=`+$${totalSum}/yr`;
      }
 }
  })
}

getNumber(str,startIndex){
  let endIndex=str.indexOf('/');
  let amount=+str.slice(startIndex,endIndex);
  return amount;

}
//load select plan
renderSelectPlanOnClick(handler){
selectPlanVeiw._parentEl.addEventListener('click',(e)=>{
  if(e.target.classList.contains('change')){
    handler(infoVeiw._parentEl);
    this._load=true;
  }
})
}
//render sucess message
renderSucessMessage(handler){
  selectPlanVeiw._parentEl.addEventListener('click',(e)=>{
if(e.target.classList.contains('btn-confirm')){
  console.log('Hello');
  handler(selectPlanVeiw._parentEl);
}
  })
}

}
export default new Summary();