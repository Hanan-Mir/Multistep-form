import infoVeiw from "./Veiws/infoVeiw";
import View from "./Veiws/veiw";
import selectPlanVeiw from "./Veiws/selectPlanVeiw";
import addOnVeiw from "./Veiws/addOnVeiw";
import addon from "./Veiws/addon";
import summaryView from "./Veiws/summaryView";
const loadSelectPlan=function(parentEl){
   
    if(checkDataPresent(infoVeiw._username) && checkMail(infoVeiw._email) && checkDataPresent(infoVeiw._phNumber)){
        infoVeiw._render(infoVeiw._generateMarkup(),parentEl);
        infoVeiw._activateCurrentSection(infoVeiw._currentSection);
    }
    //if no username entered
    if(!checkDataPresent(infoVeiw._username)){
        infoVeiw._userNameNASection.classList.remove('hide');
    }
    if(!checkMail._email){
        infoVeiw._emailNASection.classList.remove('hide');
    }
    if(!checkDataPresent(infoVeiw._phNumber)){
        infoVeiw._phNumberNASection.classList.remove('hide');
    }
}
//function to load previous(info) plan
const loadInfoPlan=function(parentEl){
    infoVeiw._render(infoVeiw._currentPageMarkup,parentEl);
}
//function to test weather data is present in the text box
const checkDataPresent=function(element){
    if(element.value){
        return true;
    }
}
//function to check weather email is in the correct format
const checkMail=function(element){
    if(element.value.includes('@') && element.value.endsWith('.com')){
        return true;
    }
}
//function to load add-on page
const loadAddOn=function(parentEl){
addOnVeiw._render(addOnVeiw._generateMarkup(),parentEl);
addOnVeiw._activateCurrentSection(addOnVeiw._currentSection)
}
//function to load summary page
const loadSummary=function(parentEl){
    summaryView._render(summaryView._generateMarkup(),parentEl);
    summaryView._activateCurrentSection(summaryView._currentSection);

}
//load sucess message
const loadSucessMessage=function(parentEl){
    summaryView._render(summaryView._generateSucessMarkUp(),parentEl);
}
let init=function(){
    infoVeiw.addHandlerRender(loadSelectPlan);
    selectPlanVeiw.addHandlerActivateCard();
    selectPlanVeiw.addHandlerToggle();
    addOnVeiw.addHandlerRenderAddOn(loadAddOn);
    addon.addHandlerGetData();
    summaryView.addHandlerRender(loadSummary);
    addOnVeiw.addHandlerRenderSelectPlan(loadSelectPlan);
    summaryView.addHandlerRenderAddOn(loadAddOn);
    summaryView.insertAddonsSelected();
    summaryView.renderSelectPlanOnClick(loadSelectPlan);
    summaryView.renderSucessMessage(loadSucessMessage);
    addOnVeiw.onClickCheckBox();
}
init();