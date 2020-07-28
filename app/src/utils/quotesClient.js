import ApiClient from "./apiClient";

export class QuotesClient {
    constructor() {
        // TODO avoir un api à cette adresse là
        this._apiClient = new ApiClient({ baseURL: "https://dirobash.herokuapp.com/api/" });
    }

    getQuotes = () => {
        return this._apiClient.get(`quotes/`);
    }

    submitQuotes = (quote) => {
        return this._apiClient.post(`quotes/`, {quote});
    };
}    

export default QuotesClient;