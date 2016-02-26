import gamesObj from './games.json';

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

    container.appendChild(infoContainer);
    container.appendChild(preview);

    infoContainer.appendChild(title);
    infoContainer.appendChild(description);
    if (live) infoContainer.appendChild(live);
    infoContainer.appendChild(gh);

    document.body.appendChild(container);
  }
};

prepGames(gamesObj.jsGames);
prepGames(gamesObj.rubyGames);

console.log(games);
