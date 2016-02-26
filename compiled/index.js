/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "compiled/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _games = __webpack_require__(1);

	var _games2 = _interopRequireDefault(_games);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function prepGames(games) {
	    for (var i = 0; i < games.length; i++) {
	        var container = document.createElement('div');
	        container.className = "container";

	        var infoContainer = document.createElement('div');
	        infoContainer.className = "info-container";

	        var title = document.createElement('h3');
	        title.innerText = games[i].name;

	        var ul = document.createElement('ul');
	        var li1 = document.createElement('li');
	        li1.innerText = games[i].li1;
	        var li2 = document.createElement('li');
	        li2.innerText = games[i].li2;
	        ul.appendChild(li1);
	        ul.appendChild(li2);

	        // const description = document.createElement('p');
	        // description.innerText = games[i].description;

	        var prevLink = false,
	            live = false;

	        if (games[i].live) {
	            live = document.createElement('a');
	            live.href = games[i].live;
	            prevLink = live.cloneNode(true);
	            live.innerText = 'live';
	            live.className = 'link';
	        }

	        var gh = document.createElement('a');
	        gh.href = games[i].gh;
	        gh.innerText = 'github';
	        gh.className = 'link';

	        var preview = document.createElement('div');
	        preview.style = "background-image: url('" + games[i].preview + "')";
	        preview.className = games[i].name;
	        if (prevLink) prevLink.appendChild(preview);

	        var previewContainer = document.createElement('div');
	        previewContainer.className = 'preview-container';
	        prevLink ? previewContainer.appendChild(prevLink) : previewContainer.appendChild(preview);

	        container.appendChild(infoContainer);
	        container.appendChild(previewContainer);

	        infoContainer.appendChild(title);
	        infoContainer.appendChild(ul);
	        if (live) infoContainer.appendChild(live);
	        infoContainer.appendChild(gh);

	        document.querySelector('#centered').appendChild(container);
	    }
	};

	prepGames(_games2.default.jsGames);
	prepGames(_games2.default.rubyGames);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"jsGames": [
			{
				"name": "Unscramble",
				"preview": "http://jacobhamblin.github.io/unscramble/img/preview.png",
				"live": "http://jacobhamblin.github.io/unscramble",
				"gh": "https://github.com/jacobhamblin/unscramble",
				"li1": "Scrambles wordlists pulled from wordnik API for the user to reorder",
				"li2": "Rendered with React"
			},
			{
				"name": "Asteroids",
				"preview": "http://jacobhamblin.github.io/asteroids/preview.png",
				"live": "http://jacobhamblin.github.io/asteroids",
				"gh": "https://github.com/jacobhamblin/asteroids",
				"li1": "Utilizes prototypal inheritance and mixins to maintain modular and extendable code base",
				"li2": "Collision detection system for asteroids, bullets, and ship",
				"li3": "Drawn on HTML5 Canvas"
			},
			{
				"name": "Snake",
				"preview": "../snake/preview.png",
				"live": "../snake/index.html",
				"gh": "https://github.com/jacobhamblin/jsGames/tree/gh-pages/snake",
				"li1": "Eating apples extends the snake and increases travel speed",
				"li2": "Displayed through divs and CSS"
			}
		],
		"rubyGames": [
			{
				"name": "Chess",
				"preview": "http://i.imgur.com/vg7FqPT.jpg",
				"gh": "http://github.com/jacobhamblin/chess",
				"li1": "Supports network play through websockets",
				"li2": "Multi-level class inheritance structure DRYs up code"
			},
			{
				"name": "Checkers",
				"preview": "http://i.imgur.com/a9ov2A9.png",
				"gh": "http://github.com/jacobhamblin/checkers",
				"li1": "Multi-level class inheritance structure DRYs up code",
				"li2": "Move validation algorithms determine possible moves"
			}
		]
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);