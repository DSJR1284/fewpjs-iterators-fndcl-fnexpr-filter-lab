// Code your solution here

function findMatching(drivers, string){
    return drivers.filter(newDriver => newDriver.toUpperCase()=== string.toUpperCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driverName => driverName.toUpperCase()[0] === string.toUpperCase()[0])
}

function matchName(drivers, string){
    return drivers.filter(names => names.name === string)
}



// let bigCities = cities.filter(city => city.population > 3000000);
// console.log(bigCities);