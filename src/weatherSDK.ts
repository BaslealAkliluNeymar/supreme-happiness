import axios, { AxiosResponse } from 'axios';
import 'dotenv/config';
import NodeCache from 'node-cache';
import { WeatherResponse,cacheData } from './types.js';
export class WeatherSDK {
    private static URL:string = 'https://api.openweathermap.org/data/2.5/weather'
    private static HourlyURL:string = 'https://api.openweathermap.org/data/2.5/forecast'
    private WeatherCache:NodeCache;
    constructor(private api_key:string){
        this.WeatherCache = new NodeCache({stdTTL:6000})
    }
    
    async getCurrentWeatherByLocation(city:string) : Promise<WeatherResponse | string> {
        try
            {  
                const cacheKey:string = `weather_${city.trim().replace(' ','_').toLowerCase()}`;
                const cachedData:WeatherResponse | undefined = this.WeatherCache.get(cacheKey)
                console.log(`Cached Data: ${cachedData}`)
                if(!cachedData){
                    const findCountryCoordinates  = await axios.get(
                        'http://api.openweathermap.org/geo/1.0/direct',
                            { params:{
                                q:city,
                                limit:1,
                                appid:this.api_key
                            }}
                        )


                    if (!findCountryCoordinates.data.length){
                        throw new Error('Please Enter a Correct Country Name!')
                    }


                    const data = await axios.get(WeatherSDK.URL, {
                        params:{
                            lat:findCountryCoordinates.data[0].lat,
                            lon:findCountryCoordinates.data[0].lon,
                            appid:this.api_key
                        }
                    })


                    this.WeatherCache.set(cacheKey, data.data,600)
                    console.log(`From CacheKey :${this.WeatherCache.get(cacheKey)}`)
                    console.log(this.WeatherCache.get(cacheKey))
                    return data.data
                }
                else{
                    console.log('Data from Cache')
                    console.log(cachedData)
                    return cachedData as WeatherResponse
                }
            }
            catch (error) {
                return 'Failed to Fetch Weather Data, Please Try Again Later!';
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
                        if(!response){
                            throw new Error('Please Enter the Correct Country Name')
                        }
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
                        return weatherResponse.data
                    })
            } 
            catch (error) {
                  return 'Failed to Fetch Weather Date, Please Try Again Later!';
        }
    }

}



