
// All Documents
let hdiv = document.querySelector("#Hours");
let mdiv = document.querySelector("#Minutes");
let sdiv = document.querySelector("#seconds");
let hr12 = document.querySelector("#hr12");
let hr24 = document.querySelector("#hr24");
let am = document.querySelector("#am");
let pm = document.querySelector("#pm");


// Progress Bar
let progress = document.querySelector(".progress");

// Days Array
let sun = document.querySelector("#sun");
let mon = document.querySelector("#mon");
let tue = document.querySelector("#tue");
let wed = document.querySelector("#wed");
let thu = document.querySelector("#thu");
let fri = document.querySelector("#fri");
let sat = document.querySelector("#sat");




function timeShow(){

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDay();
    let realHour; 
    let realScnd, realMnt;
    let amOrPm, hcal;


   


    // Hour fixed
    if(h < 10){
        realHour = `0${h}`;
    }else{
        realHour = h;
    }
    
    if(h > 12){

        hcal = h - 12;
        amOrPm = pm.innerText = "pm";
            if(hcal <= 9){
                realHour = `0${hcal}`;
                amOrPm = pm.innerText = "pm";
            }else{
                realHour = h - 12;
                amOrPm = pm.innerText = "pm";

                
            }
            console.log(hcal);
    }else{
        amOrPm = am.innerText = "am";
    }

    // When h er man 0 hobe
    if(h == 0){
        realHour = 12;
    }

    // Add Zero when digits are single
    (m < 10) ? realMnt = `0${m}` : realMnt = m ;
    (s < 10) ? realScnd = `0${s}` : realScnd = s ;


    // Days Array
    let days = [sun, mon, tue, wed, thu, fri, sat];
    let day_num = days[d];
    day_num.style.color = "white";


    // progress bar
    progress.style.width = (realScnd/60) * 100 + "%";


   return [
    hdiv.textContent = realHour,
    mdiv.innerText = realMnt,
    sdiv.innerText = realScnd

   ];

}


setInterval(() => {

    timeShow();

},1000);



// function hr12Orhr24(){

//     let date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();
//     let d = date.getDay();
//     let realHour12or24, amOrPm; 


//  // 12 or 24 Hours
//  hr24.onclick = (event) => {
//     event.preventDefault();

//     realHour12or24 = h;
//     amOrPm = am.innerText = " ";
//     hr24.style.disply = "none";
//     hr12.style.disply = "";

// }


// }


// hr12Orhr24()




