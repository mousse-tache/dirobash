import ApiClient from "./apiClient";

export class QuotesClient {
    constructor() {
        this._apiClient = new ApiClient({ baseURL: process.env.REACT_APP_API_URL });
    }

    getAllQuotes = () => {
        return this._apiClient.get(`citations`)
    }

    getQuotes = (page) => {
        return this._apiClient.get(`citations/${page}`);
    }

    getLatest = () => {
        return this._apiClient.get(`citations/latest`);
    }

    submitQuote = (quote) => {
        return this._apiClient.post(`citation`, quote);
    };

    getQuoteByNumber = (number) => {
        return this._apiClient.get(`citation/${number}`)
    }
}    

export default QuotesClient;