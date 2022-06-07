import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import  Weather from './components/Weather';
import Alert from './components/Alert';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';


const App: FC = () =>{  // FC = Function Component
    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMsg = useSelector((state: RootState) => state.alert.message);
    const loading = useSelector((state: RootState) => state.weather.loading);


  return (
    <div className="has-text-centered">
      <Search title="Enter city name and press search button" />
      {
        loading ? <h1 className="is-size-3 py-2">Loading...</h1> : weatherData && <Weather data={weatherData} />
      }

      {
        alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />
      }
      {
        error && <Alert message={error} onClose={() => dispatch(setError())} />
      }
    </div>
  );
}

export default App;
