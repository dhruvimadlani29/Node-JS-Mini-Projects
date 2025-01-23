import readLine from 'readline/promises';
const apiKey = '378dc4efd79ac6b7626e53befe4ea0ea';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error('City not found, please check the city name');
    const weatherData = await response.json();
    console.log('\n weatherData', weatherData);
    console.log('\n City : ', weatherData.name);
    console.log('\n Temperature : ', weatherData.main.temp);
    console.log('\n Feels like : ', weatherData.main.feels_like);
    console.log('\n Description : ', weatherData.weather[0].description);
    console.log(`\n Humidity :  ${weatherData.main.humidity}%`);
    console.log(`\n Wind speed :  ${weatherData.wind.speed} m/s`);
  } catch (error) {
    console.log(error);
  }
};

const city = await rl.question('Enter a city name to get its weather : ');
await getWeather(city);
rl.close();
