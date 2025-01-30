#!/usr/bin/env node
import 'dotenv/config';
import axios from 'axios'; 
import { Command } from 'commander';

const program = new Command()
class WeatherSDK{  
    private api_key:string
    url:string

    constructor(api_key:string){
        this.api_key = api_key;
        this.url = 'https://api.openweathermap.org/data/2.5/weather'
    }


    async getCurrentWeatherByLocation(lat:number, lon:number) {
        try
        {
            const data = await axios.get(this.url, {
                params:{
                    lat:lat,
                    lon:lon,
                    appid:this.api_key
                }
            })
            
            return data.data
        } catch (error) {
            return 'There was an error!';
        }
    }

    async getCurrentWeatherByCity(city:string){
        try{
            const data = await axios.get(this.url, {
                params:{
                   q:city,
                   appid:this.api_key 
                }
            })
            
            return data.data
        } catch (error) {
            return 'There was an error!';
        }
    }
}


console.log(process.argv)
program 
    .command('weather')
    .argument('<city>', 'City name')
    .action(async (city:string) =>{
        const SDK = new WeatherSDK(process.env.API_KEY as string)
        const data  = await SDK.getCurrentWeatherByCity(city)
        console.log(data)
    })

program.parse(process.argv);
