let country = "Guinea Bissau";
console.log(country.replace(" ", "-"));

let city = " Sydney   ";
city = city.trim();
console.log(city);

let place = "School";
place = place.toUpperCase();
console.log(place);

let attraction = "Opera House";
attraction = attraction.toLowerCase();
console.log(attraction);

let sentence = `I went to visit the ${attraction} in ${city}, right next to my ${place.toLowerCase()}. Now, I'm getting ready for my trip to ${country}!`;

console.log(sentence);
