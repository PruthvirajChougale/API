let div=document.querySelector('div');
let cityinput=document.querySelector('#searchweather');
let click=document.querySelector('#search');
let refresh=document.querySelector('#refresh');
let icon=document.querySelector('#icon');
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
    if(response.weather[0].main=="Clouds"){
        icon.innerHTML=`<img src="images/clouds.png"></img>`;
    }
    if(response.weather[0].main=="Drizzle"){
        icon.innerHTML=`<img src="images/drizzle.png"></img>`;
    }
    if(response.weather[0].main=="Clear"){
        icon.innerHTML=`<img src="images/clear.png"></img>`;
    }
    if(response.weather[0].main=="Mist"){
        icon.innerHTML=`<img src="images/mist.png"></img>`;
    }
    if(response.weather[0].main=="Rain"){
        icon.innerHTML=`<img src="images/rain.png"></img>`;
    }
    if(response.weather[0].main=="Snow"){
        icon.innerHTML=`<img src="images/snow.png"></img>`;
    }

}

click.addEventListener('click',(e)=>{
    e.preventDefault();
    let searchinput=cityinput.value;
    temperature.innerHTML=` <P>Temperature : </P>`;
    feelslike.innerHTML=` <p>Feels like : </p>`;
    humidity.innerHTML=`<p>Humidity : </p>`;
    weather.innerHTML=`<p>Weather : </p>`;
    checkweather(searchinput);
    console.log(response);
});

refresh.addEventListener('click',(e)=>{
    e.preventDefault();
    temperature.innerHTML=` <P>Temperature : </P>`;
    feelslike.innerHTML=` <p>Feels like : </p>`;
    humidity.innerHTML=`<p>Humidity : </p>`;
    weather.innerHTML=`<p>Weather : </p>`;
    cityinput.value='';

})
