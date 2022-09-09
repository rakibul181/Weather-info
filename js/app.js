


const city = document.getElementById('get-city').addEventListener('click', function () {
    const city = document.getElementById('city').value
    getWeatherData(city)
})




const getWeatherData = async (city) => {
    if(city!=NaN){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f268da259904ff9281efd271ff96ee5&units=metric`
        const response = await fetch(url)
        const data = await response.json()
        dispalyInfo(data)
    }
    else{
        alert('Enter A city Name')
    }
}

const dispalyInfo = (data) =>{
    console.log(data)

     setInnerText('city-name',data.name)
     const currentTemp = data.main.temp
     setInnerText('temparature',currentTemp)
     const condition = data.weather[0].main
    console.log(data.weather[0].main)
     setInnerText('weather-coundtion',condition)

     setInnerText('humidity',data.main.humidity)

     setInnerText('wind',data.wind.speed)

     setInnerText('feels-like',data.main.feels_like)

}

const setInnerText = (id,text) =>{
    const setText = document.getElementById(id)
    setText.innerText = text
}
getWeatherData('Rajshahi')