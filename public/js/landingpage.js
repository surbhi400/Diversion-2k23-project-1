document.addEventListener('DOMContentLoaded', () => {
    const country = document.querySelector('#country');


    // fetch(' https://api.countrystatecity.in/v1/countries').then(res => {
    //     return res.json();
    // }).then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // })

    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {
       
        
        data.forEach(countries => {
            const options = document.createElement('option');
            options.text = countries.name.official;
            options.value = countries.name.official;
            country.append(options);
            
           
            
        });
            
    }).catch(err => {
        console.log(err);
    })

    

//     let Country = require('country-state-city').Country;
//     let State = require('country-state-city').State;
//     let City = require('country-state-city').City;

//     const allCities = State.getStatesOfCountry("IN");
    
//     allCities.forEach(city => {
//         const options = document.createElement('option');
//         options.text = city.name;
//         options.value = city.name;
//         country.append(options);
       
// })
    
});


