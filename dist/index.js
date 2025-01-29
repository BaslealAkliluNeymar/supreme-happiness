var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import 'dotenv/config';
import axios from 'axios';
const app = express();
function getCurrentWeatherByLocation(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { lat, lon, api_key } = data;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
            const fetchedData = yield axios.get(url);
            return fetchedData.data;
        }
        catch (error) {
            return 'There was an error!';
        }
    });
}
function getCurrentWeatherByCityName(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { lat, lon, city_name, api_key } = data;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;
            const fetchedData = yield axios.get(url);
            return fetchedData.data;
        }
        catch (error) {
            return "There was an error!";
        }
    });
}
function getCurrentWeatherByZipCode(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { lat, lon, city_name, country_code, zip_code, api_key } = data;
            const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},${country_code}&appid=${api_key}`;
            const fetchedData = yield axios.get(url);
            return fetchedData.data;
        }
        catch (error) {
            return "There was an error!";
        }
    });
}
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const weatherData = yield getCurrentWeatherByLocation({
        lat: 35,
        lon: 139,
        api_key: process.env.API_KEY || ''
    });
    res.json(weatherData);
}));
app.get('/:zip', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city_name = req.params.zip;
    const weatherData = yield getCurrentWeatherByCityName({
        lat: 35,
        lon: 139,
        city_name: city_name,
        api_key: process.env.API_KEY || ''
    });
    res.json(weatherData);
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
