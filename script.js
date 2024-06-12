let div=document.querySelector('div');
let cityinput=document.querySelector('#searchweather');
let click=document.querySelector('#search');
let refresh=document.querySelector('#refresh');
const APIkey='ad4eb5a45f8c42c857e3f7232cd98292';

let temperature=document.querySelector('#temp');
let feelslike=document.querySelector('#feelslike');
let humidity=document.querySelector('#humidity');
let weather=document.querySelector('#weather');


const checkweather = async (input) => {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIkey}`;
    const data= await fetch(url);
    const response= await data.json();
    console.log(response);
    temperature.innerHTML+=`<h4>${Math.round(response.main.temp-273.15)} deg</h4>`;
    feelslike.innerHTML+=`<h4>${Math.round(response.main.feels_like-273.15)} deg</h4>`;
    humidity.innerHTML+=`<h4>${response.main.humidity}</h4>`;
    weather.innerHTML+=`<h4>${response.weather[0].main}</h4>`;
}

click.addEventListener('click',(e)=>{
    e.preventDefault();
    let searchinput=cityinput.value;
    checkweather(searchinput);
});


