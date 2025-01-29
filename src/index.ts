import express from 'express';
import 'dotenv/config';
import axios from 'axios'; 

const app = express();

interface Weather {
    lat: number;
    lon: number;
    api_key: string;
    city_name?:string;
    country_code?:string;
    state_code?:string;
    zip_code?:string;
}

async function getCurrentWeatherByLocation(data: Weather) {
    try {
        const { lat, lon, api_key } = data;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
        const fetchedData = await axios.get(url);
        return fetchedData.data;
    } catch (error) {
        return 'There was an error!';
    }
}

async function getCurrentWeatherByCityName(data:Weather){
    try {
        const {lat, lon, city_name, api_key} = data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;
        const fetchedData = await axios.get(url);
        return fetchedData.data;
    }
    catch(error){
        return "There was an error!"
    }
    
}


async function getCurrentWeatherByZipCode(data:Weather){
    try {
        const {lat, lon, city_name, country_code,zip_code,api_key} = data
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},${country_code}&appid=${api_key}`;
        const fetchedData = await axios.get(url);
        return fetchedData.data;
    }
    catch(error){
        return "There was an error!"
    }
    
}

app.get('/', async (req, res) => {
    const weatherData = await getCurrentWeatherByLocation({
        lat: 35,
        lon: 139,
        api_key: process.env.API_KEY || ''
    });
    res.json(weatherData);
});


app.get('/:zip',async (req,res)=>{
    const city_name = req.params.zip;
    const weatherData = await getCurrentWeatherByCityName({
        lat: 35,
        lon: 139,
        city_name: city_name,
        api_key: process.env.API_KEY || ''
    });
    res.json(weatherData);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});