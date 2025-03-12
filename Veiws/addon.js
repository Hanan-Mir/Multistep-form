import selectPlanVeiw from "./selectPlanVeiw";
import addOnVeiw from "./addOnVeiw";
import infoVeiw from "./infoVeiw";
import View from "./veiw";
class Addon extends View{
    _addonSelected=[];
    _addOnMap=new Map();
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
    console.log(this._addonSelected[index]);
    this._addOnMap.delete(this._addonSelected[index]);
    this._addonSelected.splice(index,1);
    
}
                
            })
            console.log(this._addonSelected);
            for(let i=0;i<this._addonSelected.length;i++){
                let addonEl=document.querySelector(`.${this._addonSelected[i]}`);
                this._addOnMap.set(`${this._addonSelected[i]}`,`${addonEl.innerHTML}`);
            }
            console.log(this._addOnMap);
        }
        
    })
}


}
export default new Addon();