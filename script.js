var submitBtnEl = document.querySelector('.button')
var inputValueEl = document.querySelector('.inputValue')
var displayEl = document.querySelector('.display')


submitBtnEl.addEventListener('click', ()=>{
    console.log("button pressed") 
    sendApiRequest()
})


async function sendApiRequest() {
let response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValueEl.value+'&appid=210755dcdd1accd679a3739fa23e78a4')
console.log(response)    
 let data = await response.json()
        localStorage.setItem(inputValueEl)
        useApiData(data)
    }

/*.catch (err => alert("Not a city")

})*/

function useApiData(data){
document.querySelector('#display').innerHTML =`
<div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div class="card-body border border-dark">
                <h5 class="card-title">${data.city.name}</h5>
                <p class="card-text">${data.list[0].dt_txt}</p>
                <p class="card-text">Outside: ${data.list[0].weather[0].description}</p>
                <p class="card-text">${data.list[0].weather[0].icon}</p>
                <p class="card-text">Temperature: ${data.list[0].main.temp}</p>
                <p class="card-text">Humidity: ${data.list[0].main.humidity}</p>
                <p class="card-text">Wind Speed: ${data.list[0].wind.speed}</p>
                <p class="card-text">UV Index: ${data.list[0].current}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card-body border border-dark">
                <h5 class="card-title">${data.city.name}</h5>
                <p class="card-text">${data.list[6].dt_txt}</p>
                <p class="card-text">Outside: ${data.list[6].weather[0].description}</p>
                <p class="card-text">${data.list[6].weather[0].icon}</p>
                <p class="card-text">Temperature: ${data.list[6].main.temp}</p>
                <p class="card-text">Humidity: ${data.list[6].main.humidity}</p>
                <p class="card-text">Wind Speed: ${data.list[6].wind.speed}</p>
                <p class="card-text">UV Index: ${data.list[6].current}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card-body border border-dark">
                <h5 class="card-title">${data.city.name}</h5>
                <p class="card-text">${data.list[13].dt_txt}</p>
                <p class="card-text">Outside: ${data.list[13].weather[0].description}</p>
                <p class="card-text">${data.list[13].weather[0].icon}</p>
                <p class="card-text">Temperature: ${data.list[13].main.temp}</p>
                <p class="card-text">Humidity: ${data.list[13].main.humidity}</p>
                <p class="card-text">Wind Speed: ${data.list[13].wind.speed}</p>
                <p class="card-text">UV Index: ${data.list[13].current}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card-body border border-dark">
                <h5 class="card-title">${data.city.name}</h5>
                <p class="card-text">${data.list[20].dt_txt}</p>
                <p class="card-text">Outside: ${data.list[20].weather[0].description}</p>
                <p class="card-text">${data.list[20].weather[0].icon}</p>
                <p class="card-text">Temperature: ${data.list[20].main.temp}</p>
                <p class="card-text">Humidity: ${data.list[20].main.humidity}</p>
                <p class="card-text">Wind Speed: ${data.list[20].wind.speed}</p>
                <p class="card-text">UV Index: ${data.list[20].current}</p>
            </div>
        </div>
    </div>
</div>
`
}

/*
https://api.openweathermap.org/data/2.5/onecall?
http://api.openweathermap.org/data/2.5/weather?
/*var APIkey = "210755dcdd1accd679a3739fa23e78a4"
var city;
var state;*/

        /*<div class="col-sm-3">
            <div class="card-body border border-dark">
                <h5 class="card-title">${data.city.name}</h5>
                <p class="card-text">${data.list[27].dt_txt}</p>
                <p class="card-text">outside: ${data.list[27].weather[0].description}</p>
                <p class="card-text">${data.list[27].weather[0].icon}</p>
                <p class="card-text">Temperature: ${data.list[27].main.temp}</p>
                <p class="card-text">Humidity: ${data.list[27].main.humidity}</p>
                <p class="card-text">Wind Speed: ${data.list[27].wind.speed}</p>
                <p class="card-text">UV Index: ${data.list[27].current}</p>
            </div>
        </div>*/

/*funciton getApi() {
    var requestURL = 'api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}'
}*/
