/* eslint-env browser */
import { UUID } from './helpers';

class Store {
  constructor() {
    const { localStorage } = window;

    this.getLocalStorage = () => {
      return JSON.parse(localStorage.getItem('series') || '[]');
    };

    this.setLocalStorage = series => {
      localStorage.setItem('series', JSON.stringify(series));
    };
  }

  addSeries(title) {
    const seriesList = this.getLocalStorage();
    seriesList.push({
      title,
      id: UUID(),
      seasonCount: 0,
      episodeCount: 0
    });
    this.setLocalStorage(seriesList);
  }

  removeSeries(id) {
    const seriesList = this.getLocalStorage().filter(series => series.id !== id);

    this.setLocalStorage(seriesList);
  }

  increaseSeasonCount(id) {
    const seriesList = this.getLocalStorage();
    seriesList.find(series => series.id === id).seasonCount += 1;

    this.setLocalStorage(seriesList);
  }

  decreaseSeasonCount(id) {
    const seriesList = this.getLocalStorage();
    let { seasonCount } = seriesList.find(series => series.id === id);
    if (seasonCount <= 0) return;
    seasonCount -= 1;
    seriesList.find(series => series.id === id).seasonCount = seasonCount;

    this.setLocalStorage(seriesList);
  }

  increaseEpisodeCount(id) {
    const seriesList = this.getLocalStorage();
    seriesList.find(series => series.id === id).episodeCount += 1;

    this.setLocalStorage(seriesList);
  }

  decreaseEpisodeCount(id) {
    const seriesList = this.getLocalStorage();
    let { episodeCount } = seriesList.find(series => series.id === id);
    if (episodeCount <= 0) return;
    episodeCount -= 1;
    seriesList.find(series => series.id === id).episodeCount = episodeCount;

    this.setLocalStorage(seriesList);
  }
}

export default Store;
