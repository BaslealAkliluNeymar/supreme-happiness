import axios, { AxiosResponse } from 'axios';
import 'dotenv/config';
import { WeatherResponse } from './types.js';
export class WeatherSDK {
    private static URL:string = 'https://api.openweathermap.org/data/2.5/weather'
    private static HourlyURL:string = 'https://api.openweathermap.org/data/2.5/forecast'
    private static DailyURL:string = 'https://api.openweathermap.org/data/3.0/onecall/day_summary?'
    constructor(private api_key:string){

    }
    async getCurrentWeatherByLocation(city:string) : Promise<WeatherResponse | string> {
        try
            {
                const findCountryCoordinates  = await axios.get(
                    'http://api.openweathermap.org/geo/1.0/direct',
                       { params:{
                            q:city,
                            limit:1,
                            appid:this.api_key
                        }}
                    )

                const data= await axios.get(WeatherSDK.URL, {
                    params:{
                        lat:findCountryCoordinates.data[0].lat,
                        lon:findCountryCoordinates.data[0].lon,
                        appid:this.api_key
                    }
                })
                
                console.log(data.data)
                return data.data
            } catch (error) {
            return 'There was an error!';
        }
    }


    getWeatherForecast(city: string){
        try
            {
                return axios.get(
                    'http://api.openweathermap.org/geo/1.0/direct',
                       { params:{
                            q:city,
                            limit:1,
                            appid:this.api_key
                        }}
                    )
                    .then((response) => {
                        console.log(response.data)
                        const { lat , lon } = response.data[0]
                        
                       return axios.get(WeatherSDK.HourlyURL, {
                            params:{
                                lat:lat,
                                lon:lon,
                                appid:this.api_key
                            }
                        })  
                        
                    })
                    .then((weatherResponse) => {
                        console.log(weatherResponse.data)
                        return weatherResponse.data
                    })
            } 
            catch (error) {
                  return 'There was an error!';
        }
    }

}



