import selectPlanVeiw from "./selectPlanVeiw";
import addOnVeiw from "./addOnVeiw";
import infoVeiw from "./infoVeiw";
import View from "./veiw";
class Addon extends View{
    _addonSelected=[];
addHandlerGetData(){
    selectPlanVeiw._parentEl.addEventListener('click',(e)=>{

        if(e.target.closest('.add-on')){
            const addOns=document.querySelectorAll('.addOn');
            addOns.forEach((addon)=>{
                if(addon.checked && !this._addonSelected.includes(addon.value)){
                    this._addonSelected.push(addon.value);
                }
if(!addon.checked && this._addonSelected.includes(addon.value)){
    const index=this._addonSelected.indexOf(addon.value);
    this._addonSelected.splice(index,1);
}
                
            })
            console.log(this._addonSelected);
        }
        
    })
}


}
export default new Addon();