import { escapeForHTML } from './helpers';

class Template {
  static templateSeriesList(seriesList) {
    if (!seriesList.length) {
      return `<span class="series__empty">Enter series title to start tracking series</span>`;
    }

    return seriesList.reverse().reduce((accumulator, series) => {
      return `${accumulator}<li class="series__item" data-id=${series.id}>
        <p class="js-series-name series__title">${escapeForHTML(series.title)}</p>
        <span class="js-series-delete series__delete-btn">
        </span>

        <div class="series__counter">
        <button class="js-season-decrease series__btn">-</button>
        <p>Season<span class="js-season-count series__count">${series.seasonCount}</span></p>
        <button class="js-season-increase series__btn">+</button>
        </div>

        <div class="series__counter">
        <button class="js-episode-decrease series__btn">-</button>
        <p>Episode<span class="js-episode-count series__count">${series.episodeCount}</span></p>
        <button class="js-episode-increase series__btn">+</button>
        </div>
      </li>`;
    }, '');
  }
}

export default Template;
