import './styles/layout.scss';
import './styles/navbar.scss';
import './styles/main.scss';
import './styles/footer.scss';
import bgr from './media/bgr.png';
import bgrMobile from './media/bgr-mobile.png';
import logo from './media/logo.png';

import { clickEvent } from './js/handleInput.js';
import { handleInput } from './js/handleInput.js';
import { saveTrip } from './js/saveTrip.js';
import { displayTrips } from './js/displayTrips.js';
import { removeEntry } from './js/removeEntry.js';
import manageData from './js/displayTrips.js';
import { tripsArray } from './js/displayTrips.js';

export {
  clickEvent,
  handleInput,
  saveTrip,
  displayTrips,
  removeEntry,
  manageData,
  tripsArray
}
