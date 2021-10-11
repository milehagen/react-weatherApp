import './App.css';
import WeatherIcon from 'react-icons-weather';


function App() {

  
  return (
    <div>
     <div class="clearfix">
       <form class="float-left">
         <input type="text" placeholder="Enter a city" autocomplete="off" value="oslo"/>
           <input type="submit" class="btn btn-primary" value="Search"/>
             </form>
             <button class="float-left btn btn-success">Current</button>
             </div>
             <div class="weather-summary">
               <div class="weather-summary-header">
                 <h1>Oslo</h1>
                 <div class="weather-detail__text">Monday 15:33</div>
                 <div class="weather-detail__text">Clouds</div>
                 </div><div class="row">
                   <div class="col-sm-6">
                   <div class="clearfix">
                     <div class="float-left weather-icon">
                         <div>
      <WeatherIcon className="weatherIconDay" name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
                     </div>
                     <div class="weather-temp weather-temp--today">15</div>
                     <div class="weather-unit__text weather-unit__text--today">°C</div>
                     </div>
                     </div>
                     <div class="col-sm-6">
                       <div class="weather-detail__text">Precipitation: 41%</div>
                       <div class="weather-detail__text">Wind: 1km/h</div>
                       </div>
                       </div>
                       </div>
    <div class="row">
      <div class="col-sm-2">
        <div class="forecast-day">Tue</div>
        <div class="forecast-icon">
              <div>
      <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
          </div>
        <div class="forecast-temperature">11°</div>
        </div>
        <div class="col-sm-2">
          <div class="forecast-day">Wed</div>
        <div class="forecast-icon">
              <div>
      <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
            </div>
            <div class="forecast-temperature">10°</div>
        </div>
        <div class="col-sm-2">
          <div class="forecast-day">Thu</div>
          < div class="forecast-icon"> 
              <div>
      <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
            </div>
            <div class="forecast-temperature">14°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Fri</div>
              <div class="forecast-icon">
                   <div>
      <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
                </div><div class="forecast-temperature">12°</div>
                </div>
                <div class="col-sm-2">
                  <div class="forecast-day">Sat</div>
                  <div class="forecast-icon">
                       <div>
      <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
                    </div>
        <div class="forecast-temperature">17°</div>
        </div>
        </div>
    </div>
  );
}

export default App;
