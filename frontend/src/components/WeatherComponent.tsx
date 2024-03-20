import  * as React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import '../App.css'; 

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // URL of your backend GraphQL server
  cache: new InMemoryCache()
});

const WEATHER_QUERY = gql`
  query Weather($latitude: Float!, $longitude: Float!) {
    weather(latitude: $latitude, longitude: $longitude) {
      temperature
      description
      rain
    }
  }
`;

export const WeatherComponentReact = ({ latitude, longitude, city }) => {
  const { loading, error, data } = useQuery(WEATHER_QUERY, {
    client,
    variables: { latitude, longitude }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="widget">
        <div className="details">
          <div className="temperature" data-testid="temperature">{data.weather.temperature}°C</div>
          <div className="summary">
            {city}
          </div>
          <div data-testid="windSpeed" className="wind">{data.weather.description.split(', ')[1]}</div>
        </div>
        <div className={ (data.weather.temperature >=20 ? 'pictoBackdropSunny' : 'pictoBackdrop')}></div>
        <div className={ (data.weather.rain >=10 ? 'rainy' : 'norain')}></div>
        <div className="pictoFrame"></div>
        <div className="pictoCloudBig"></div>
        <div className="pictoCloudFill"></div>
        <div className="pictoCloudSmall"></div>
        <div className="iconCloudBig"></div>
        <div className="iconCloudFill"></div>
        <div className="iconCloudSmall"></div>
      </div>
    </div>
  );
};
