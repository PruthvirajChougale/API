let div=document.querySelector('div');
let cityinput=document.querySelector('#searchweather');
let click=document.querySelector('#search');
const APIkey='ad4eb5a45f8c42c857e3f7232cd98292'; 

const checkweather = async (input) => {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIkey}`;
    const data= await fetch(url);
    const response= await data.json();
    console.log(response);
}

click.addEventListener('click',(e)=>{
    e.preventDefault();
    let searchinput=cityinput.value;
    checkweather(searchinput);
});
