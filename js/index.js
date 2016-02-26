import gamesObj from './games.json';
import '../sass/index.scss';

function prepGames(games) {
  for (let i = 0; i < games.length; i++) {
    const container = document.createElement('div');
    container.className = "container";

    const infoContainer = document.createElement('div');
    infoContainer.className = "info-container";

    const title = document.createElement('h2');
    title.innerText = games[i].name;

    const description = document.createElement('p');
    description.innerText = games[i].description;

    const live = document.createElement('a');
    live.href = games[i].live;
    live.innerText = 'live';

    const gh = document.createElement('a');
    gh.href = games[i].gh;
    gh.innerText = 'github';

    const preview = document.createElement('div');
    preview.style = "background-image: url('" + games[i].preview + "')";

    const previewContainer = document.createElement('div');
    previewContainer.className = 'preview-container';
    previewContainer.appendChild(preview);

    container.appendChild(infoContainer);
    container.appendChild(previewContainer);

    infoContainer.appendChild(title);
    infoContainer.appendChild(description);
    if (live) infoContainer.appendChild(live);
    infoContainer.appendChild(gh);

    document.querySelector('#centered').appendChild(container);
  }
};

prepGames(gamesObj.jsGames);
prepGames(gamesObj.rubyGames);

console.log(games);
