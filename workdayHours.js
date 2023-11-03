const delay = milliseconds => new Promise(result => setTimeout(result, milliseconds));
const waitTime = 800;    //700 is too fast, 1000 is more followable

let enterTime = async hours => {
    let day = 1;
    let mondaySeparator = document.querySelector('div[automationdid="nonTimedDaySeparator_1"]');
    let mondayLeftPercentDecimal = parseFloat(mondaySeparator.style.left.slice(0, -1)) / 100;    //remove % @ end
    let overlay = mondaySeparator.parentElement;
    let overlayPosition = overlay.getBoundingClientRect();;
    let cssWidth = window.getComputedStyle(overlay).getPropertyValue('width');
    let overlayWidth = getCssNumberWithoutUnits(cssWidth);
    let mondayPixelLeftOffset = overlayWidth * (mondayLeftPercentDecimal * day);
    let extraXOffset = 40;
    let extraYOffset = 300;    //in case there are any existing time entries/special events
    let clickX = overlayPosition.x + mondayPixelLeftOffset + extraXOffset;
    let clickY = overlayPosition.y + extraYOffset;
    let clickPositionElement = document.elementFromPoint(clickX, clickY);
    //TODO figure out why this doesn't work or what event is needed to trigger the time entry popup
    clickPositionElement.click(clickX, clickY);
    // let clickEvent =  event = new MouseEvent('click', {
    //     view: window,
    //     bubbles: true,
    //     cancelable: true,
    //     screenX: clickX,
    //     screenY: clickY,
    // });
    // clickPositionElement.dispatchEvent(event);   //.click(clickX, clickY); should do the same thing

    //see where the simulate click lands
    let box = document.querySelector('#clickPosition');
    if (!box) {
        box = document.createElement('div');
        box.id = 'clickPosition';
        box.style.backgroundColor = 'black';
        box.style.height = '5px'
        box.style.width = '5px'
        box.style.position = 'absolute';
        document.querySelector('body').appendChild(box);
    }
    box.style.top = clickY + 'px';
    box.style.left = clickX + 'px';

    let breakpoint = true;
    // // for(let day = 1; day <= 5; day++){
    //     try {
    //         //Pick Time Type = ITS.Main
    //         // let timeTypeInput = document.querySelector('div[data-automation-hiddensearch].css-748hnh-SearchBarContainer.edt0qdt23');
    //         let timeTypeInput = document.querySelector('div[data-automation-hiddensearch] > input')
    //         timeTypeInput.click();      //open main dropdown
    //         await delay(waitTime);
    //         // let mostRecentlyUsedDiv = document.querySelector('div.css-svf4lv-LabelContainer-1.edt0qdt4');
    //         let mostRecentlyUsedDiv = document.querySelector('div[data-automation-label="Most Recently Used"]');
    //         mostRecentlyUsedDiv.click();    //open parent category
    //         await delay(waitTime);
    //         let itsMainOption = document.querySelector('div[data-automation-label="ITS.Main Application.Feature > Feature > Feature  (01/01/2020 - 12/31/2099)"');
    //         itsMainOption.click();
    //         timeTypeInput.dispatchEvent(new Event('change'));    //maybe unnecessary
    //         await delay(waitTime);

    //         let hoursInput = document.querySelector('input[data-automation-id="numericInput"]');
    //         hoursInput.value = 8;
    //         hoursInput.dispatchEvent(new Event('change'));   //needed for validation to clear (to make it think a user enter a value)
    //         // await delay(waitTime);
    //         let okButton = document.querySelector('div.wd-popup button[data-automation-id="wd-CommandButton"]');//.click()//('div[data-automation-id="toolbarButtonContainer"] div[data-automation-id="dropDownCommandButton" ');
    //         okButton.click();
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }
    // // }
}

let getCssNumberWithoutUnits = value => {
    const numberMatch = value.match(/(\d*\.?\d+)/);    //\d* matches 0 or more digits, \. matches a period, \d+ matches 1 or more digits
    return numberMatch == null ? 0 : parseFloat(numberMatch[0]);
}
enterTime(8)