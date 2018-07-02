import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="site-title">US City Weather Forecast</h1>
        <p>Find the weather forecast by entering the name of a city in the US.</p>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
