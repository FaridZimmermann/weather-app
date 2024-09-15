export default function parseWeatherData(weatherData) {
//function to parse midday weather data out of array returned by open weather map, also filter to return last entry and first

    return weatherData.list.filter((item, i) => {
       return item["dt_txt"].includes("12:00:00")|| i === 0 || i === 39;
    });
}