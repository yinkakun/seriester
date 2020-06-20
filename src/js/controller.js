class Controller {
  constructor(store, view) {
    this.store = store;
    this.view = view;

    this.view.showSeriesList(this.store.getLocalStorage());
    this.view.addSeries(this.handleAddSeries);
    this.view.removeSeries(this.handleRemoveSeries);
    this.view.increaseSeasonCount(this.handleIncreaseSeasonCount);
    this.view.decreaseSeasonCount(this.handleDecreaseSeasonCount);
    this.view.increaseEpisodeCount(this.handleIncreaseEpisodeCount);
    this.view.decreaseEpisodeCount(this.handleDecreaseEpisodeCount);
  }

  showSeriesList = () => {
    this.view.showSeriesList(this.store.getLocalStorage());
  };

  handleAddSeries = title => {
    this.store.addSeries(title);
    this.view.showSeriesList(this.store.getLocalStorage());
  };

  handleRemoveSeries = id => {
    this.store.removeSeries(id);
    this.view.showSeriesList(this.store.getLocalStorage());
  };

  handleIncreaseSeasonCount = id => {
    this.store.increaseSeasonCount(id);
    this.view.showSeriesList(this.store.getLocalStorage());
  };

  handleDecreaseSeasonCount = id => {
    this.store.decreaseSeasonCount(id);
    this.view.showSeriesList(this.store.getLocalStorage());
  };

  handleIncreaseEpisodeCount = id => {
    this.store.increaseEpisodeCount(id);
    this.view.showSeriesList(this.store.getLocalStorage());
  };

  handleDecreaseEpisodeCount = id => {
    this.store.decreaseEpisodeCount(id);
    this.view.showSeriesList(this.store.getLocalStorage());
  };
}

export default Controller;
