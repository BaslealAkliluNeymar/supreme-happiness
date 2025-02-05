import { WeatherSDK } from './weatherSDK.js'
const weatherSDK = new WeatherSDK(process.env.API_KEY || '')
console.log(weatherSDK.getCurrentWeatherByLocation('New York'))