import './css/style.css';

import Controller from './js/controller';
import Store from './js/store';
import View from './js/views';
import registerServiceWorker from './js/register-service-worker';

const store = new Store('series');
const view = new View();
const controller = new Controller(store, view);

controller.showSeriesList();

registerServiceWorker();
