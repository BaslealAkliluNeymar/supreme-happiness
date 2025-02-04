import axios from 'axios';
import 'dotenv/config';
import { WeatherResponse } from './types.js';
export class WeatherSDK {
    private static URL:string = 'https://api.openweathermap.org/data/2.5/weather'
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

                console.log(findCountryCoordinates)
  
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
}



