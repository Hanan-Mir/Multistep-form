export default class View{
    _data;
    _btnNext=document.querySelector('.next');
    _listOfSections=document.querySelectorAll('.step-count');
    //function to render the html form
    _render=function(data,parentEl){
    this._data=data;
     let markup=this._data;
     this.clear(parentEl);
   parentEl.insertAdjacentHTML('afterbegin',markup);
    }
    clear(parentEl){
        parentEl.innerHTML='';
    }
    //function that will highlight the current active section
_activateCurrentSection=function(curSection){
    
   
    this._listOfSections.forEach((section)=>{
        section.classList.remove('active');
    })
    curSection.forEach((section)=>{
        section.classList.add('active');
        section.style.color="black";
    })
}
    }
    











