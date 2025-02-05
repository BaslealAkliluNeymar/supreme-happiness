"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherSDK = void 0;
var axios_1 = require("axios");
require("dotenv/config");
var NodeCache = require("node-cache");
var WeatherSDK = /** @class */ (function () {
    function WeatherSDK(api_key) {
        this.api_key = api_key;
        this.WeatherCache = new NodeCache.default({ stdTTL: 600 });
    }
    WeatherSDK.prototype.getCurrentWeatherByLocation = function (city) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, cachedData, findCountryCoordinates, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        cacheKey = "weather_".concat(city.trim().replace(/ /g, '_').toLowerCase());
                        console.log(cacheKey);
                        cachedData = this.WeatherCache.get(cacheKey);
                        console.log("Cached Data: ".concat(cachedData));
                        if (!!cachedData) return [3 /*break*/, 3];
                        return [4 /*yield*/, axios_1.default.get('http://api.openweathermap.org/geo/1.0/direct', { params: {
                                    q: city,
                                    limit: 1,
                                    appid: this.api_key
                                } })];
                    case 1:
                        findCountryCoordinates = _a.sent();
                        if (!findCountryCoordinates.data.length) {
                            throw new Error('Please Enter a Correct Country Name!');
                        }
                        return [4 /*yield*/, axios_1.default.get(WeatherSDK.URL, {
                                params: {
                                    lat: findCountryCoordinates.data[0].lat,
                                    lon: findCountryCoordinates.data[0].lon,
                                    appid: this.api_key
                                }
                            })];
                    case 2:
                        data = _a.sent();
                        this.WeatherCache.set(cacheKey, data.data, 600);
                        console.log('Cached Data');
                        console.log(this.WeatherCache.keys()[0]);
                        return [2 /*return*/, data.data];
                    case 3:
                        console.log('Data from Cache');
                        console.log(cachedData);
                        return [2 /*return*/, cachedData];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        return [2 /*return*/, 'Failed to Fetch Weather Data, Please Try Again Later!'];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WeatherSDK.prototype.getWeatherForecast = function (city) {
        var _this = this;
        try {
            return axios_1.default.get('http://api.openweathermap.org/geo/1.0/direct', { params: {
                    q: city,
                    limit: 1,
                    appid: this.api_key
                } })
                .then(function (response) {
                if (!response) {
                    throw new Error('Please Enter the Correct Country Name');
                }
                var _a = response.data[0], lat = _a.lat, lon = _a.lon;
                return axios_1.default.get(WeatherSDK.HourlyURL, {
                    params: {
                        lat: lat,
                        lon: lon,
                        appid: _this.api_key
                    }
                });
            })
                .then(function (weatherResponse) {
                return weatherResponse.data;
            });
        }
        catch (error) {
            return 'Failed to Fetch Weather Date, Please Try Again Later!';
        }
    };
    WeatherSDK.URL = 'https://api.openweathermap.org/data/2.5/weather';
    WeatherSDK.HourlyURL = 'https://api.openweathermap.org/data/2.5/forecast';
    return WeatherSDK;
}());
exports.WeatherSDK = WeatherSDK;
