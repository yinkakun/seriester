/* eslint-env browser */
import Template from './template';

class View {
  constructor() {
    this.$newSeries = document.querySelector('.js-new-series');
    this.$seriesList = document.querySelector('.js-series-list');
  }

  showSeriesList(seriesList) {
    this.$seriesList.innerHTML = Template.templateSeriesList(seriesList);
  }

  addSeries(handler) {
    this.$newSeries.addEventListener('submit', $event => {
      $event.preventDefault();
      const title = $event.target.querySelector('.js-input').value.trim('');
      $event.target.reset();
      if (!title) return;
      handler(title);
    });
  }

  removeSeries(handler) {
    this.$seriesList.addEventListener('click', $event => {
      if (!$event.target.matches('.js-series-delete')) return;
      const { id } = $event.target.parentNode.dataset;
      handler(id);
    });
  }

  increaseSeasonCount(handler) {
    this.$seriesList.addEventListener('click', $event => {
      if (!$event.target.matches('.js-season-increase')) return;
      const { id } = $event.target.parentNode.parentNode.dataset;
      handler(id);
    });
  }

  decreaseSeasonCount(handler) {
    this.$seriesList.addEventListener('click', $event => {
      if (!$event.target.matches('.js-season-decrease')) return;
      const { id } = $event.target.parentNode.parentNode.dataset;
      handler(id);
    });
  }

  increaseEpisodeCount(handler) {
    this.$seriesList.addEventListener('click', $event => {
      if (!$event.target.matches('.js-episode-increase')) return;
      const { id } = $event.target.parentNode.parentNode.dataset;
      handler(id);
    });
  }

  decreaseEpisodeCount(handler) {
    this.$seriesList.addEventListener('click', $event => {
      if (!$event.target.matches('.js-episode-decrease')) return;
      const { id } = $event.target.parentNode.parentNode.dataset;
      handler(id);
    });
  }
}

export default View;
