# Trip-Prepper App

Deployed [on Heroku](https://trip-prepper.herokuapp.com)

`npm install` - will get you all necessary dependencies,
`npm run start` - for locally running server.js on port 8081,
`npm run test` - for running jest tests,
`npm run build-prod` - building production folder (dist),
`npm run build-dev` - running the app in the development mode.

## Optional features:
(At least one of these was required)

<details>
  <summary>Applied in the project ⬇️</summary>

  - [x] Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure  -localities).
      * Additional feature added by myself: choose random picture from the set of pictures available in the received objects.
  - [x] Integrate the REST Countries API to pull in data for the country being visited.
      * REST Countries API replaced by Amadeus API for cheap hotel deals data.
  - [x] Allow the user to remove the trip.
  - [x] Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
  - [x] Instead of just pulling a single day forecast, pull the forecast for multiple days.
  </details>

  <details>
    <summary>To be developed in the future for further learning purposes: ⬇️</summary>

    - [ ] Add end date and display length of trip.
    - [ ] Allow user to add multiple destinations on the same trip.
        * Pull in weather for additional locations.
    - [ ] Allow the user to add hotel and/or flight data.
    - [ ] Incorporate icons into forecast.
    - [ ] Allow user to Print their trip and/or export to PDF.
    - [ ] Allow the user to add a todo list and/or packing list for their trip.
    - [ ] Allow the user to add additional trips.
    - [ ] Automatically sort additional trips by countdown.
    - [ ] Move expired trips to bottom/have their style change so it’s clear it’s expired.
  </details>

## Useful resources:

### Knowledge:

* [Three-Line Menu: Worth the Minimal Hamburger Icon?](https://thinksem.com/blog/three-line-menu-hamburger-icon/),
* [Beginner's Guide to SEO](https://moz.co,m/beginners-guide-to-seo),
* [How to use Local Storage with JavaScript](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/),
* [Generating multiple html files](https://github.com/jantimon/html-webpack-plugin#generating-multiple-html-files),
* [Window.matchMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia),
* [3 ways to fix the CORS error(...)](https://medium.co,m/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9),
* [CSS Dropdowns](https://www.w3schools.com/css/css_dropdowns.asp),
* [How to handle the IF ELSE in promise.then](https://stackoverflow.com/questions/33257412/how-to-handle-the-if-else-in-promise-then),
* [Amadeus API Documentation](https://github.com/amadeus4dev/amadeus-node),
* [JavaScript Start-Up Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization),
* [Check if object contains key - JavaScript](https://oamatech.com/check-if-object-contains-key-javascript/),
* Plus dozens of StackOverflow threads on various CORS problems, MDN and Jest documentation.

### Media:

* [Pexels - bgr image](https://www.pexels.com/photo/backpack-bag-blur-commuter-346768/),
* [Img for logo](https://icons8.com/icon/112479/around-the-globe),
Icons8:
* [Loader](https://icons8.com/preloaders/),
* [Weather icons](https://icons8.com/icon/set/weather/dotty)


### Software:

* [Krita](https://krita.org/en/),
* [Figma](https://www.figma.com/),
* [Atom](https://atom.io/),
* [Postman](https://www.postman.com/),
