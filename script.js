var submitBtnEl = document.querySelector('.button')
var inputValueEl = document.querySelector('.inputValue')
var nameEl = document.querySelector('.name')
var descEl = document.querySelector('.desc')
var tempEl = document.querySelector('.temp')
var displayEl = document.querySelector('.display')

submitBtnEl.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValueEl.value+'&APPID=210755dcdd1accd679a3739fa23e78a4')
    .then(response => response.json())
    .then(data => {
        useApiData(data)
    })

.catch (err => alert("Not a city"))

})

/*function useApiData(data){
document.querySelector('.display').innerHTML =`
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.main[0].name}</h5>
    <p class="card-text">${data.weather[0].description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
}*/

/*var APIkey = "210755dcdd1accd679a3739fa23e78a4"
var city;
var state;*/



/*funciton getApi() {
    var requestURL = 'api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}'
}*/



  


