let apiData = [];
let myDay = document.getElementById("myDay")
let dayOfWeek = document.querySelectorAll(".dayOfWeek")

getAPI("cairo")
async function getAPI(even) {
    var result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5d80396f7244488680e203007221310&q=${even}&days=3`);
    apiData = await result.json()
    document.body.style.backgroundImage = `url('https://source.unsplash.com/random//1800×900/?${even}')`
    displayMyDay()
}

searchValue.addEventListener("keyup", function (e) {
    getAPI(e.target.value)
})

const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day) {
    if (day + date.getDay() > 6) {
        return day + date.getDay() - 7;
    } else {
        return day + date.getDay();
    }
}
for (var i = 0; i < dayOfWeek.length; i++) {
    dayOfWeek[i].innerHTML = weekday[checkDay(i)]
}

function displayMyDay() {
    var box = ''
    for (var i = 0; i < 1; i++) {
        box += `
        <div class="col-md-4" style="height: 100px;">
                <div class="box rounded-3 bg-dark text-light p-3">
                    <p>${apiData.location.name}</p>
                    <div class="d-flex justify-content-between ">
                            <h4>${apiData.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C</h4>
                            <div class="image">
                                <img src=${apiData.current.condition.icon} alt="img">
                            </div>
                        </div>
                        <h5 class="text-primary">${apiData.current.condition.text}</h5>
                        <div class="d-flex justify-content-between">
                            <h5><i class="fa-solid fa-umbrella"></i> 20%</h5>
                            <h5><i class="fa-solid fa-droplet"></i> 28%</h5>
                            <h5><i class="fa-solid fa-wind"></i> 31%</h5>
                        </div>
                </div>
    </div>
    <div class="col-md-4" style="height: 100px; margin-top: 120px; margin-bottom: 120px;">
                    <div class="box rounded-3 bg-dark text-light p-3">
                        <div class="d-flex flex-column justify-content-center align-items-center ">
                            <div class="image">
                                <img src=${apiData.forecast.forecastday[1].day.condition.icon} alt="img">
                            </div>
                            <h4>${apiData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h4>
                            <h6>${apiData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</h6>
                            <h5 class="text-primary p-1">${apiData.forecast.forecastday[1].day.condition.text}</h5>
                        </div>
                        
                    </div>
        </div>
        <div class="col-md-4" style="height: 500px;">
                    <div class="box rounded-3 bg-dark text-light p-3">
                        <div class="d-flex flex-column justify-content-center align-items-center ">
                            <div class="image">
                                <img src=${apiData.forecast.forecastday[2].day.condition.icon} alt="img">
                            </div>
                            <h4>${apiData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h4>
                            <h6>${apiData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h6>
                            <h5 class="text-primary p-1">${apiData.forecast.forecastday[2].day.condition.text}</h5>
                        </div>
                        
                    </div>
        </div>  `
    }
    myDay.innerHTML = box
}