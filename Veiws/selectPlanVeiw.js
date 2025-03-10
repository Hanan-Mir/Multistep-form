import View from "./veiw";
class SelectPlanVeiw extends View{

_parentEl=document.querySelector('.right');
optionSelected='month';
_planSelected;
//function for option selected
optionSelectedfun(option){
this.optionSelected=option;
}
//using event delegation
addHandlerActivateCard(){
this._parentEl.addEventListener('click',(e)=>{
    const clickedCard=e.target.closest('.card');
//To activate the current card
    if(e.target.classList.contains('card')){
        const allCards=document.querySelectorAll('.card');
        allCards.forEach((card)=>{
            card.classList.remove('active-card');
        })
if(!clickedCard) return;
clickedCard.classList.add('active-card');
this._planSelected=clickedCard.dataset.planselected;



}})
}
//To move the toggle section and change the data on the card accordingly
addHandlerToggle(){
    this._parentEl.addEventListener('click',(e)=>{
if(e.target.classList.contains('option')){
 let selectedOption=e.target.value;
 let arcadeCost=document.querySelector('.arcade-cost');
 let advancedCost=document.querySelector('.advanced-cost');
 let proCost=document.querySelector('.pro-cost');
 let description=document.querySelectorAll('.free-duration');
 if(selectedOption=='month'){
    arcadeCost.innerHTML='';
    arcadeCost.innerHTML="$9/month";
    advancedCost.innerHTML="";
    advancedCost.innerHTML="$12/mo"
    proCost.innerHTML="";
    proCost.innerHTML="$15/mo"
    description.forEach((des)=>{
        des.classList.add('hide');
     })
   this.optionSelectedfun('month');
 }
 if(selectedOption=='year'){
arcadeCost.innerHTML='';
arcadeCost.innerHTML="$90/yr";
advancedCost.innerHTML="";
    advancedCost.innerHTML="$120/yr"
    proCost.innerHTML="";
    proCost.innerHTML="$150/yr";
    description.forEach((des)=>{
        des.classList.remove('hide');
     })
     this.optionSelectedfun('year');
 }

}
    })
}

}
export default new SelectPlanVeiw();