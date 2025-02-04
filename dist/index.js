// // #!/usr/bin/env node
// // import 'dotenv/config';
// // // import axios from 'axios'; 
// // // import { Command } from 'commander';
// // import { Sequelize,DataTypes } from 'sequelize';
// // const sequelize = new Sequelize('Inventory','postgres','1209',{
// //     dialect:'postgres',
// //     host:'localhost',
// //     port:5432 
// // })
// // interface UserAttributes {
// //     user_id:number;
// //     user_name:string;
// //     password:string;
// //     age:number;
// // }
// // const User = sequelize.define('user',{
// //     user_id:{
// //         type:DataTypes.INTEGER,
// //         primaryKey:true,
// //         autoIncrement:true
// //     },
// //     user_name:{
// //         type:DataTypes.STRING,
// //         allowNull:false
// //     },
// //     password:{
// //         type:DataTypes.STRING,
// //         allowNull:false 
// //     },
// //     age:{
// //         type:DataTypes.INTEGER
// //     }
// // },{
// //     freezeTableName:true,
// //     timestamps:false
// // })
// // User.sync({ force :true }).then(()=>{
// //     const user = User.build({
// //         user_id:1,
// //         user_name:'bas',
// //         password:'1234',
// //         age:25
// //     })
// //     console.log(user)
// //     // return user.save()
// // })
// // .then(() =>{
// //     console.log('User added to database')
// // })
// // .catch(() =>{
// //     console.log('Error creating table')
// // })
// // // const program = new Command()
// // // class WeatherSDK{  
// // //     private api_key:string
// // //     url:string
// // //     constructor(api_key:string){
// // //         this.api_key = api_key;
// // //         this.url = 'https://api.openweathermap.org/data/2.5/weather'
// // //     }
// // //     async getCurrentWeatherByLocation(lat:number, lon:number) {
// // //         try
// // //         {
// // //             const data = await axios.get(this.url, {
// // //                 params:{
// // //                     lat:lat,
// // //                     lon:lon,
// // //                     appid:this.api_key
// // //                 }
// // //             })
// // //             return data.data
// // //         } catch (error) {
// // //             return 'There was an error!';
// // //         }
// // //     }
// // //     async getCurrentWeatherByCity(city:string){
// // //         try{
// // //             const data = await axios.get(this.url, {
// // //                 params:{
// // //                    q:city,
// // //                    appid:this.api_key 
// // //                 }
// // //             })
// // //             return data.data
// // //         } catch (error) {
// // //             return 'There was an error!';
// // //         }
// // //     }
// // // }
// // // console.log(process.argv[2])
// // // program 
// // //     .command('weather')
// // //     .argument('<city>', 'City name')
// // //     .action(async (city:string) =>{
// // //         const SDK = new WeatherSDK(process.env.API_KEY as string)
// // //         const data  = await SDK.getCurrentWeatherByCity(city)
// // //         console.log(data)
// // //     })
// // // program.parse(process.argv);
// abstract class Department{
//     static fiscalYear:number = 2020
//     // private name:string ='DEFAULT'
//     // private id: string
//     protected employees:string[] = []
//     constructor(
//         private id:string,
//         private readonly name:string = 'DEFAULT' 
//     ){}
//     abstract describe(this:Department):void
//     printName() {
//         console.log(this.name)
//     }
//     addEmployyes(employee:string){
//         this.employees.push(employee)
//     }
//     printEmployee(){
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
//     static createEmployee(name:string){
//         return { name: name}
//     }
// }
// Department.fiscalYear = 2021
// console.log(Department.fiscalYear)
// console.log(Department.createEmployee('Max').name)
// class ITDepartment extends Department{
//     constructor(id:string, public admins:string[]){
//         super(id,'IT')
//     }
//     describe(this: Department): void {
//         console.log('Describe from IT Department')
//     }
//     get Admins(){
//         if(this.admins.length < 1){
//             throw('There Seems to be a problem!')
//         }
//         return this.admins
//     }
//     set Admins(employee:string[]) {
//         this.admins = employee
//     }
//     addEmployyes(employee: string): void {
//         if (employee === 'MAX'){
//             return 
//         }
//         this.employees.push(employee)
//     }
// }
// const department = new ITDepartment('it1',[])
// department.Admins = ['MAX']
// department.Admins
import { WeatherSDK } from './weatherSDK.js';
const weatherSDK = new WeatherSDK(process.env.API_KEY || '');
console.log(weatherSDK.getCurrentWeatherByLocation('London'));
