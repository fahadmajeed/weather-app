import r2wc from "@r2wc/react-to-web-component"
import  { WeatherComponentReact } from './components/WeatherComponent';

const WebApp = r2wc(WeatherComponentReact, {
  props: {
    latitude: "number",
    longitude: "number",
    city: "string",
  },
})

customElements.define("weather-app", WebApp)
