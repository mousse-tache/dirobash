import ApiClient from "./apiClient";

export class QuotesClient {
    constructor() {
        this._apiClient = new ApiClient({ baseURL: "https://dirobash.herokuapp.com/api/" });
    }

    getQuotes = () => {
        return this._apiClient.get(`quotes`);
    }

    submitQuote = (quote) => {
        return this._apiClient.post(`quote`, { quote });
    };
}    

export default QuotesClient;