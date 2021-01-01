
//Bangladesh Time and Date
let getBangladeshTime = function(){
     document.getElementById('b_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Dhaka', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('b-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Dhaka',timeStyle:'medium',hourCycle:'h12'});
}
getBangladeshTime();
setInterval(getBangladeshTime, 1000);

// Saudi Arabia Time and Date
let getSaudiTime = function(){
     document.getElementById('s_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Riyadh', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('s-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Riyadh',timeStyle:'medium',hourCycle:'h12'});
}
getSaudiTime();
setInterval(getSaudiTime, 1000);


// Dubai Time and Date
let getDubaiTime = function(){
     document.getElementById('d_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Dubai', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('d-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Dubai',timeStyle:'medium',hourCycle:'h12'});
}
getDubaiTime();
setInterval(getDubaiTime, 1000);


// Qatar Time and Date
let getQatarTime = function(){
     document.getElementById('q_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Qatar', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('q-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Qatar',timeStyle:'medium',hourCycle:'h12'});
}
getQatarTime();
setInterval(getQatarTime, 1000);


// Kuwait Time and Date
let getKuwaitTime = function(){
     document.getElementById('k_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Kuwait', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('k-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Kuwait',timeStyle:'medium',hourCycle:'h12'});
}
getKuwaitTime();
setInterval(getKuwaitTime, 1000);


// London Time and Date
let getLondonTime = function(){
     document.getElementById('l_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Europe/London', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('l-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Europe/London',timeStyle:'medium',hourCycle:'h12'});
}
getLondonTime();
setInterval(getLondonTime, 1000);

// America Time and Date
let getAmericaTime = function(){
     document.getElementById('am_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'america/new_york', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('am-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'america/new_york',timeStyle:'medium',hourCycle:'h12'});
}
getAmericaTime();
setInterval(getAmericaTime, 1000);


// France Time and Date
let getFranceTime = function(){
     document.getElementById('f_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Europe/Paris', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('f-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Europe/Paris',timeStyle:'medium',hourCycle:'h12'});
}
getFranceTime();
setInterval(getFranceTime, 1000);


// Canada Time and Date
let getCanadaTime = function(){
     document.getElementById('c_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'America/Toronto', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('c-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'America/Toronto',timeStyle:'medium',hourCycle:'h12'});
}
getCanadaTime();
setInterval(getCanadaTime, 1000);


// Australia Time and Date
let getAustraliaTime = function(){
     document.getElementById('as_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Australia/Sydney', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('as-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Australia/Sydney',timeStyle:'medium',hourCycle:'h12'});
}
getAustraliaTime();
setInterval(getAustraliaTime, 1000);



// Italy Time and Date
let getItalyTime = function(){
     document.getElementById('i_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Europe/Rome', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('i-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Europe/Rome',timeStyle:'medium',hourCycle:'h12'});
}
getItalyTime();
setInterval(getItalyTime, 1000);



// Malayshia Time and Date
let getMalayshiaTime = function(){
     document.getElementById('m_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Kuala_Lumpur', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('m-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Kuala_Lumpur',timeStyle:'medium',hourCycle:'h12'});
}
getMalayshiaTime();
setInterval(getMalayshiaTime, 1000);


// Oman Time and Date
let getOmanTime = function(){
     document.getElementById('o_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Muscat', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('o-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Muscat',timeStyle:'medium',hourCycle:'h12'});
}
getOmanTime();
setInterval(getOmanTime, 1000);




// Greece Time and Date
let getGreeceTime = function(){
     document.getElementById('g_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Europe/Athens', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('g-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Europe/Athens',timeStyle:'medium',hourCycle:'h12'});
}
getGreeceTime();
setInterval(getGreeceTime, 1000);



// India Time and Date
let getIndiaTime = function(){
     document.getElementById('in_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Kolkata', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('in-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Kolkata',timeStyle:'medium',hourCycle:'h12'});
}
getIndiaTime();
setInterval(getIndiaTime, 1000);



// Pakistan Time and Date
let getPakistanTime = function(){
     document.getElementById('p_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Karachi', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('p-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Karachi',timeStyle:'medium',hourCycle:'h12'});
}
getPakistanTime();
setInterval(getPakistanTime, 1000);



// South Korea Time and Date
let getSKoriaTime = function(){
     document.getElementById('sk_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Seoul', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('sk-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Seoul',timeStyle:'medium',hourCycle:'h12'});
}
getSKoriaTime();
setInterval(getSKoriaTime, 1000);



// Bhutan Time and Date
let getBhutanTime = function(){
     document.getElementById('bu_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Thimphu', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('bu-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Thimphu',timeStyle:'medium',hourCycle:'h12'});
}
getBhutanTime();
setInterval(getBhutanTime, 1000);



// Nepal Time and Date
let getNepalTime = function(){
     document.getElementById('n_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Kathmandu', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('n-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Kathmandu',timeStyle:'medium',hourCycle:'h12'});
}
getNepalTime();
setInterval(getNepalTime, 1000);


// Singapore Time and Date
let getSingaporeTime = function(){
     document.getElementById('sin_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Singapore', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
     document.getElementById('sin-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Singapore',timeStyle:'medium',hourCycle:'h12'});
}
getSingaporeTime();
setInterval(getSingaporeTime, 1000);



// Singapore Time and Date
// let getSingaporeTime = function(){
//      document.getElementById('sin_date_part').innerHTML = new Date().toLocaleDateString("en-GB",{timeZone:'Asia/Singapore', weekday: "long", year: "numeric", month: "short", day: "2-digit"});
//      document.getElementById('sin-time').innerHTML = new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Singapore',timeStyle:'medium',hourCycle:'h12'});
// }
// getSingaporeTime();
// setInterval(getSingaporeTime, 1000);


