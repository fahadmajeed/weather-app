"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const resolvers = {
    Query: {
        weather: async (_, { latitude, longitude }) => {
            try {
                const response = await axios_1.default.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,rain&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
                const { temperature_2m, wind_speed_10m, rain } = response.data.current;
                let rainPercentage = rain * 100;
                const description = `Temperature: ${temperature_2m}°C, Wind Speed: ${wind_speed_10m} m/s`;
                return {
                    temperature: temperature_2m,
                    description: description,
                    rain: rainPercentage,
                };
            }
            catch (error) {
                throw new Error(`Failed to fetch weather for latitude: ${latitude}, longitude: ${longitude}`);
            }
        }
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolver.js.map