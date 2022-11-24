export default class Weather {
  constructor(key) {
    this.key = a64018b69373ca9136664eb9e917ce74;
    this.baseURL = 'http://api.openweathermap.org';
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  getWeather() {
    return fetch(
      `${this.baseURL}/data/2.5/weather?q=seoul&appid=${this.key}&units=metric`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(new Error(`에러 발생, ${error}`)));
  }

  search(query) {
    return fetch(
      `${this.baseURL}/data/2.5/weather?q=${query}&appid=${this.key}&units=metric`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(new Error(`에러 발생, ${error}`)));
  }
}
