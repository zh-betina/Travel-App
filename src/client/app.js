import './styles/layout.scss';
import './styles/navbar.scss';
import './styles/main.scss';
import './styles/footer.scss';
import bgr from './media/bgr.png';
import bgrMobile from './media/bgr-mobile.png';
import logo from './media/logo.png';
import loader from './media/loader.gif';
import weatherIcon from './media/weatherIcon.png';

import { clickEvent, handleInput } from './js/handleInput.js';
import { saveTrip } from './js/saveTrip.js';
import { displayTrips, tripsArray } from './js/displayTrips.js';
import { longTermWeather } from './js/longTermWeather.js';
import { removeEntry } from './js/removeEntry.js';
import manageData from './js/displayTrips.js';
import { dataSet } from './js/handleInput.js';
import { hotelsEl, weatherEl } from './js/hotelWeatherEntries.js';

export {
  clickEvent,
  handleInput,
  saveTrip,
  displayTrips,
  removeEntry,
  longTermWeather,
  manageData,
  tripsArray,
  dataSet,
  hotelsEl,
  weatherEl
}
