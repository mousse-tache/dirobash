import ApiClient from "./apiClient";

export class QuotesClient {
    constructor() {
        this._apiClient = new ApiClient({ baseURL: "https://dirobash.herokuapp.com/api/" });
    }

    getQuotes = (page) => {
        return this._apiClient.get(`quotes/${page}`);
    }

    getLatest = () => {
        return this._apiClient.get(`quotes/latest`);
    }

    submitQuote = (quote) => {
        return this._apiClient.post(`quote`, quote);
    };

    getQuoteByNumber = (number) => {
        return this._apiClient.get(`quote/${number}`)
    }
}    

export default QuotesClient;