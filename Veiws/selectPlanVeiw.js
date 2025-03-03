import View from "./veiw";
class SelectPlanVeiw extends View{

_parentEl=document.querySelector('.right');
_optionSelected;
//using event delegation
addHandlerActivateCard(){
this._parentEl.addEventListener('click',function(e){
    const clickedCard=e.target.closest('.card');
//To activate the current card
    if(e.target.classList.contains('card')){
        const allCards=document.querySelectorAll('.card');
        allCards.forEach((card)=>{
            card.classList.remove('active-card');
        })
if(!clickedCard) return;
console.log(clickedCard);
clickedCard.classList.add('active-card');


}})
}
//To move the toggle section and change the data on the card accordingly
addHandlerToggle(){
    this._parentEl.addEventListener('click',function(e){
if(e.target.classList.contains('option')){
 let selectedOption=e.target.value;
 let arcadeCost=document.querySelector('.arcade-cost');
 let advancedCost=document.querySelector('.advanced-cost');
 let proCost=document.querySelector('.pro-cost');
 let description=document.querySelectorAll('.free-duration');
 if(selectedOption=='month'){
    this._optionSelected="month";
    arcadeCost.innerHTML='';
    arcadeCost.innerHTML="$9/month";
    advancedCost.innerHTML="";
    advancedCost.innerHTML="$12/mo"
    proCost.innerHTML="";
    proCost.innerHTML="$15/mo"
    description.forEach((des)=>{
        des.classList.add('hide');
     })
 }
 if(selectedOption=='year'){
    this._optionSelected="year";
arcadeCost.innerHTML='';
arcadeCost.innerHTML="$90/yr";
advancedCost.innerHTML="";
    advancedCost.innerHTML="$120/yr"
    proCost.innerHTML="";
    proCost.innerHTML="$150/yr";
    description.forEach((des)=>{
        des.classList.remove('hide');
     })
 }

}
    })
}


}
export default new SelectPlanVeiw();