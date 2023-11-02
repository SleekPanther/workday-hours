const delay = milliseconds => new Promise(result => setTimeout(result, milliseconds));
const waitTime = 800;    //700 is too fast, 1000 is more folloable

let enterTime = async hours => {
    // for(let day = 0; day < 5; day++){
        try{
            //Pick Time Type = ITS.Main
            // let timeTypeInput = document.querySelector('div[data-automation-hiddensearch].css-748hnh-SearchBarContainer.edt0qdt23');
            let timeTypeInput = document.querySelector('div[data-automation-hiddensearch] > input')
            timeTypeInput.click();      //open main dropdown
            await delay(waitTime);
            // let mostRecentlyUsedDiv = document.querySelector('div.css-svf4lv-LabelContainer-1.edt0qdt4');
            let mostRecentlyUsedDiv = document.querySelector('div[data-automation-label="Most Recently Used"]');
            mostRecentlyUsedDiv.click();    //open parent category
            await delay(waitTime);
            let itsMainOption = document.querySelector('div[data-automation-label="ITS.Main Application.Feature > Feature > Feature  (01/01/2020 - 12/31/2099)"');
            itsMainOption.click();
            timeTypeInput.dispatchEvent(new Event('change'));    //maybe unnecessary
            await delay(waitTime);
    
            let hoursInput = document.querySelector('input[data-automation-id="numericInput"]');
            hoursInput.value = 8;
            hoursInput.dispatchEvent(new Event('change'));   //needed for validation to clear (to make it think a user enter a value)
            // await delay(waitTime);
            let okButton = document.querySelector('div.wd-popup button[data-automation-id="wd-CommandButton"]');//.click()//('div[data-automation-id="toolbarButtonContainer"] div[data-automation-id="dropDownCommandButton" ');
            okButton.click();
        }
        catch(e){
            console.error(e);
        }
    // }
}
enterTime(8)