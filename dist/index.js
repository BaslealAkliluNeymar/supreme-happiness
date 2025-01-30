#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'dotenv/config';
import axios from 'axios';
import { Command } from 'commander';
const program = new Command();
class WeatherSDK {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = 'https://api.openweathermap.org/data/2.5/weather';
    }
    getCurrentWeatherByLocation(lat, lon) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield axios.get(this.url, {
                    params: {
                        lat: lat,
                        lon: lon,
                        appid: this.api_key
                    }
                });
                return data.data;
            }
            catch (error) {
                return 'There was an error!';
            }
        });
    }
    getCurrentWeatherByCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield axios.get(this.url, {
                    params: {
                        q: city,
                        appid: this.api_key
                    }
                });
                return data.data;
            }
            catch (error) {
                return 'There was an error!';
            }
        });
    }
}
console.log(process.argv);
program
    .command('weather')
    .argument('<city>', 'City name')
    .action((city) => __awaiter(void 0, void 0, void 0, function* () {
    const SDK = new WeatherSDK(process.env.API_KEY);
    const data = yield SDK.getCurrentWeatherByCity(city);
    console.log(data);
}));
program.parse(process.argv);
