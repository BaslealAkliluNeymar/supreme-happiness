var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import 'dotenv/config';
export class WeatherSDK {
    constructor(api_key) {
        this.api_key = api_key;
    }
    getCurrentWeatherByLocation(city) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findCountryCoordinates = yield axios.get('http://api.openweathermap.org/geo/1.0/direct', { params: {
                        q: city,
                        limit: 1,
                        appid: this.api_key
                    } });
                const data = yield axios.get(WeatherSDK.URL, {
                    params: {
                        lat: findCountryCoordinates.data[0].lat,
                        lon: findCountryCoordinates.data[0].lon,
                        appid: this.api_key
                    }
                });
                console.log(data.data);
                return data.data;
            }
            catch (error) {
                return 'There was an error!';
            }
        });
    }
    getWeatherForecast(city) {
        try {
            return axios.get('http://api.openweathermap.org/geo/1.0/direct', { params: {
                    q: city,
                    limit: 1,
                    appid: this.api_key
                } })
                .then((response) => {
                console.log(response.data);
                const { lat, lon } = response.data[0];
                return axios.get(WeatherSDK.HourlyURL, {
                    params: {
                        lat: lat,
                        lon: lon,
                        appid: this.api_key
                    }
                });
            })
                .then((weatherResponse) => {
                console.log(weatherResponse.data);
                return weatherResponse.data;
            });
        }
        catch (error) {
            return 'There was an error!';
        }
    }
}
WeatherSDK.URL = 'https://api.openweathermap.org/data/2.5/weather';
WeatherSDK.HourlyURL = 'https://api.openweathermap.org/data/2.5/forecast';
WeatherSDK.DailyURL = 'https://api.openweathermap.org/data/3.0/onecall/day_summary?';
