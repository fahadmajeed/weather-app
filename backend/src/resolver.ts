import axios from 'axios';
import { IResolvers } from '@graphql-tools/utils';

interface Weather {
  temperature: number;
  description: string;
  rain: number;
}

const resolvers: IResolvers = {
  Query: {
    weather: async (_, { latitude, longitude }: { latitude: number; longitude: number }) => {
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,rain&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);

        const { temperature_2m, wind_speed_10m, rain } = response.data.current;
        let rainPercentage = rain * 100;
        const description = `Temperature: ${temperature_2m}°C, Wind Speed: ${wind_speed_10m} m/s`;

        return {
          temperature: temperature_2m,
          description: description,
          rain: rainPercentage,
        } as Weather;
      } catch (error) {
        throw new Error(`Failed to fetch weather for latitude: ${latitude}, longitude: ${longitude}`);
      }
    }
  }
};

export default resolvers;
