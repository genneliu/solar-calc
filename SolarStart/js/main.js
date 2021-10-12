/*jslint browser:true */
"use strict";

function addMonths(elem) {
let annualUseKw = 0, dailyUseKw = 0, i= 0, x = 0;
let months = document.getElementById(elem).getElementsByTagName('input');


    for(i=0; i<months.length; i++){
        x = Number(months[i].value);
        annualUseKw += x;
    }

    dailyUsekw = annualUseKw/365;
    return dailyUseKw;
}

function sunHours() {
    let hrs;
    let theZone = document.forms.solarForm.zone.selectedIndex;
    //make sure index does not return 0 for zone 1
    theZone += 1;
    switch(theZone) {
        case 1:
            hrs = 6;
            break;
        case 2:
            hrs = 5.5;
            break;
        case 3:
            hrs = 5;
            break;
        case 4:
            hrs = 4.5;
            break;
        case 5:
            hrs = 4.2;
            break;
        case 6:
            hrs = 3.5;
            break;
        default:
            hrs = 0; 
    }
    return hrs;
}

function calculatePanel() {
    let userChoice = document.forms.solarForm.panel.selectedIndex;
    let panelOptions = document.forms.solarForm.panel.options;
    let power = panelOptions[userChoice].value;
    let nombre = panelOptions[userChoice].text;
    let x = [power, nombre];
    return x;
}




function calculateSolar() {
    let dailyUsekw = addMonths('mpc');
    // console.log(dailyUseKw);

    let sunHoursPerDay = sunHours()
    // console.log(sunHoursPerDay)

    let minKwNeeds = dailyUsekw/sunHoursPerDay;
    // console.log(minKwNeeds);

    let realKwNeeds = minKwNeeds * 1.25;
    // console.log(realKwNeeds);

    let realWattNeeds = realKwNeeds * 1000;
    // console.log(realWattNeeds);

    let panelInfo = calculatePanel();
    let panelOutput = panelInfo[0];
    let panelNombre = panelInfo[1];
    // console.log(panelOutput)
    // console.log(panelNombre)

    let panelsNeeded = Math.ceil.realWattNeeds/panelOutput;
    // console.log(panelsNeeded)

    let feedBack = "";
    feedBack += "<p> Based on your average daily use of "+Math.round(dailyUsekw)+" kwh, you will need to purchase "+panelsNeeded+" brand solar panels to offset 100% of your electricity bill</p>";
    feedBack += "<h2> Additional Details </h2>";
    feedBack += "<p> You average daily electricity consumption: "+Math.round(dailyUsekw)+" KwH per day </p>";
    feedBack += "<p> Average sunshine hours per day: "+sunHoursPerDay+" hours </p>";
    feedBack += "<p> Realistic watts needed per hour: "+Math.round(realWattNeeds)+" watts/hour.</p>";
    feedBack += "<p> The "+panelHombre+" panel you selected generates about "+panelOutput+" watts per hour </p>";

    document.getElementById('feedback').innerHTML=feedBack;
    }

