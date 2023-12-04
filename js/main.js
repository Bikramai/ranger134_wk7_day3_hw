

const getData = async (zipCode) => {
    // await will wait for the axios promise to fufill before setting response variable and moving on
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&appid=be330cb8ea63328f0370580e92e7d4bb&units=imperial`)
    console.log(response)
    console.log(response.data)
    return response.data
}


// function to create and insert html for each ranger object from the api call
const createList = (location, description, temp, feels_like, temp_min, temp_max, humidity, timezone) => {
    const html = `<div id=${location} class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush" id=${location}
    <li class="list-group-item">Description: ${description}</li>
    <li class="list-group-item">Feels Like: ${temp}°F</li>
    <li class="list-group-item">Humidity: ${feels_like}°F</li>    
    <li class="list-group-item">Current Temperature: ${temp_min}°F</li> 
    <li class="list-group-item">Temperature Max: ${temp_max}°F</li>
    <li class="list-group-item">Temperature Min: ${humidity}°F</li>
    <li class="list-group-item">Timezone: ${timezone}</li>
  </ul>
</div>`;
    // Seledting weather-list class from section in html
    document.querySelector('.weather-list').insertAdjacentHTML('beforeend', html)    
}

const loadData = async (event) => {
    event.preventDefault()
    let queryZipCode = document.querySelector("#zip-code").value
    //waits for the getData function to return a output
    // then we set that output to a rangers variable    
    const weather = await getData(queryZipCode)
    
    createList(weather.location, weather.description, weather.main.temp, weather.main.feels_like, weather.main.temp_min, weather.main.temp_max, weather.main.humidity, weather.timezone); 

}

const clearData = () => {
    document.querySelector('.weather-list').innerHTML = '';
}

