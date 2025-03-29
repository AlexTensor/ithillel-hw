export class SearchByOMBd {
    constructor(searchSelector, containerSelector) {
        this.apiKey = 'a82916e2';
        this.BASE_URL = `http://www.omdbapi.com/`;
        this.keyParam = `?apikey=${this.apiKey}&`;
        this.currentTimeOut = undefined;
        this.timeoutValue = 1000;
        this.searchSelector = searchSelector;
        this.containerSelector = containerSelector;
        this.initSearchAction();
    }
    initSearchAction() {
        const input = document.getElementById(this.searchSelector);
        input.addEventListener('keydown', this.onSearchKeyDown.bind(this));
    }
    onSearchKeyDown() {
        clearTimeout(this.currentTimeOut);
        this.currentTimeOut = setTimeout(this.updateResults.bind(this), this.timeoutValue);
    }
    async updateResults() {
        const input = document.getElementById(this.searchSelector);
        const movieResultContainer = document.getElementById(this.containerSelector);
        const inputValue = input.value.trim();
        if (!inputValue) {
            movieResultContainer.innerHTML = '';
            return;
        }
        if (inputValue.length > 2) {
            movieResultContainer.innerHTML = this.getSpinnerHtml();
            const movieData = await this.sendOMBdRequest(inputValue);
            if (movieData[`Response`] === 'False') {
                movieResultContainer.innerHTML =
                    `
                              <h2 class="text-center">Movie not Found :(</h2>
                            `;
            }
            else {
                const moviesList = movieData.Search;
                movieResultContainer.innerHTML = this.genMoviesList(moviesList);
            }
        }
    }
    genMoviesList(moviesList) {
        let html = `
        <p class="text-center">Found ${moviesList.length}</p>
        <div id="moviesList" class="d-flex justify-content-around flex-wrap">`;
        moviesList.forEach(movie => {
            html += `
                <div class="movieItem p-3">
                    <img alt="poster" class="w-100" src="${movie.Poster}">
                    <h3 class="text-center">${movie.Title}</h3>
                    <p class="text-center">Year: ${movie.Year} / Type: ${movie.Type}</p>
                </div>
            `;
        });
        html += `
        </div>
        `;
        return html;
    }
    getSpinnerHtml() {
        return `
        <div class="mx-auto w-25 d-flex justify-content-around mt-4">
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        `;
    }
    async sendOMBdRequest(value) {
        return await fetch(`${this.BASE_URL}${this.keyParam}s=${value}`)
            .then((res) => res.json());
    }
}
