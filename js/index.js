import gamesObj from './games.json';
import '../sass/index.scss';

function prepGames(games, domEl) {
  for (let i = 0; i < games.length; i++) {
    const container = document.createElement('div');
    container.className = "container";

    const infoContainer = document.createElement('div');
    infoContainer.className = "info-container";

    const title = document.createElement('h3');
    title.innerText = games[i].name;

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.innerText = games[i].li1;
    const li2 = document.createElement('li');
    li2.innerText = games[i].li2;
    ul.appendChild(li1);
    ul.appendChild(li2);

    // const description = document.createElement('p');
    // description.innerText = games[i].description;

    let prevLink = false, live = false;

    if (games[i].live) {
      live = document.createElement('a');
      live.href = games[i].live;
      prevLink = live.cloneNode(true);
      live.innerText = 'live';
      live.className = 'link';
    }

    const gh = document.createElement('a');
    gh.href = games[i].gh;
    gh.innerText = 'github';
    gh.className = 'link';

    const preview = document.createElement('div');
    preview.style = "background-image: url('" + games[i].preview + "')";
    preview.className = games[i].name;
    if (prevLink) prevLink.appendChild(preview);


    const previewContainer = document.createElement('div');
    previewContainer.className = 'preview-container';
    prevLink ? previewContainer.appendChild(prevLink) : previewContainer.appendChild(preview);

    container.appendChild(infoContainer);
    container.appendChild(previewContainer);

    infoContainer.appendChild(title);
    infoContainer.appendChild(ul);
    if (live) infoContainer.appendChild(live);
    infoContainer.appendChild(gh);

    domEl.appendChild(container);
  }
};

prepGames(gamesObj.jsGames, document.querySelector('#js'));
prepGames(gamesObj.rubyGames, document.querySelector('#ruby'));
