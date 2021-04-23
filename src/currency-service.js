export default class Currency {
  static getCurrency(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/API_KEY/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(currency);
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}
