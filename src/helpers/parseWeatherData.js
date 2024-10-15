export default function parseWeatherData(weatherData) {
//function to parse midday weather data out of array returned by open weather map, also filter to return last entry and first
    const usedDates = []; 
    return weatherData.list.filter((item, i) => {
        let currentDate = item["dt_txt"].split(" ")[0]
        usedDates.push(currentDate);
       return (item["dt_txt"].includes("12:00:00")|| i === 0 || i === 39);
    })
}