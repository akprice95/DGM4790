const axios = require('axios').default;
const fs = require('fs')


const fetchData = callback => {
    setTimeout(() => {
        callback('FetchData is Done')

    }, 1500)
}

setTimeout(() => {
    console.log ('Timout is done!')
    fetchData(text => {
        console.log(text)
    })
}, 2000)

console.log('Hello!')
console.log('Hi')

async function getStarWarsplanets(url) {
    axios.get('https://swapi.co/api/planets')
    .then(function ({ data }) {
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
    
}

 function getStarWarspeople(url) {
    axios.get('https://swapi.co/api/people')
    .then(function ({ data }) {
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
    
}

 function getStarWarsVehicles(url) {
    return axios.get('https://swapi.co/api/vehicles')
    .then(function ({ data }) {
        return data
    })
    .catch(function(error){
        console.log(error);
    })
    
}

var i = 0

setInterval(() => {
    console.log(`iteration ${i}`)
    i++

},  1000)

async function main(){
const vehicles = await getStarWarsVehicles();
const people = await getStarWarspeople();
const planets = await getStarWarsplanets();
fs.writeFile('vehicles.json', JSON.stringify(vehicles), (err) => {
    if (err) throw err;
    console.log('the file has been saved!')
})
}

main()