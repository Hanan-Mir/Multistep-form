import View from "./veiw";
class SelectPlanVeiw extends View{
    _arcadeCard=document.querySelector('.arcade-card');
    _advancedCard=document.querySelector('.advanced-card');
    _proCard=document.querySelector('.pro-card');
    _allCards=document.querySelectorAll('.card');
    addHandlerActiveCard(){
        console.log(this._allCards);

        this._allCards.forEach((card)=>{
            console.log(card);
            card.addEventListener('DOMContentLoaded',function(e){
                e.preventDefault();
                alert('card clicked');
            })
        })
    }

}
export default new SelectPlanVeiw();