type MoviesResp = {
    totalResults: string;
    Response: 'True' | 'False';
    Search: MovieData[]
}
type MovieData = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface ISearchByOMBd {
    BASE_URL: string;
    currentTimeOut: undefined | number;
    timeoutValue: number;
    searchSelector: string;
    initSearchAction(): void;
}

export class SearchByOMBd implements ISearchByOMBd {
    private apiKey = 'a82916e2';
    public BASE_URL = `http://www.omdbapi.com/`;
    private keyParam = `?apikey=${this.apiKey}&`;
    public currentTimeOut: undefined | number = undefined;
    public timeoutValue: number = 1000;
    public searchSelector: string;
    public containerSelector: string;

    constructor(searchSelector: string, containerSelector: string) {
        this.searchSelector = searchSelector;
        this.containerSelector = containerSelector;
        this.initSearchAction();
    }

    initSearchAction(): void {
        const input: HTMLElement | null = document.getElementById(this.searchSelector);
        input!.addEventListener('keydown',  this.onSearchKeyDown.bind(this));
    }

    onSearchKeyDown (): void {
        clearTimeout(this.currentTimeOut);
        this.currentTimeOut = setTimeout(this.updateResults.bind(this), this.timeoutValue);
    }
    async updateResults (): Promise<void> {
        const input: HTMLInputElement | null = document.getElementById(this.searchSelector) as HTMLInputElement;
        const movieResultContainer: HTMLElement | null = document.getElementById(this.containerSelector);
        const inputValue: string = input.value.trim();
        if(!inputValue){
            movieResultContainer!.innerHTML = '';
            return;
        }
        if(inputValue.length > 2){
            movieResultContainer!.innerHTML = this.getSpinnerHtml();
            const movieData = await this.sendOMBdRequest(inputValue);
            if(movieData[`Response`] === 'False'){
                movieResultContainer!.innerHTML =
                    `
                              <h2 class="text-center">Movie not Found :(</h2>
                            `;
            }else{
                const moviesList = movieData.Search;
                movieResultContainer!.innerHTML = this.genMoviesList(moviesList);
            }
        }

    }

    genMoviesList(moviesList: MovieData[]): string {

        let html = `
        <p class="text-center">Found ${moviesList.length}</p>
        <div id="moviesList" class="d-flex justify-content-around flex-wrap">`
        moviesList.forEach(movie => {
            html += `
                <div class="movieItem p-3">
                    <img alt="poster" class="w-100" src="${movie.Poster}">
                    <h3 class="text-center">${movie.Title}</h3>
                    <p class="text-center">Year: ${movie.Year} / Type: ${movie.Type}</p>
                </div>
            `
        });

        html += `
        </div>
        `
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
        `
    }

    async sendOMBdRequest (value: string): Promise<MoviesResp> {
        return  await fetch(`${this.BASE_URL}${this.keyParam}s=${value}`)
            .then((res:Response):Promise<MoviesResp> => res.json());
    }

}