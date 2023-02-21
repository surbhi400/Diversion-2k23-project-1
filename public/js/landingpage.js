document.addEventListener('DOMContentLoaded', () => {
//     const country = document.querySelector('#country');

    // fetch('https://restcountries.com/v3.1/all').then(res => {
    //     return res.json();
    // }).then(data => {
       
        
    //     data.forEach(countries => {
    //         const options = document.createElement('option');
    //         options.text = countries.name.official;
    //         options.value = countries.name.official;
    //         country.append(options);
            
           
            
    //     });
            
    // }).catch(err => {
    //     console.log(err);
    // })

    

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
// import csc from 'country-state-city';
// console.log(State.getStatesOfCountry("IN"));

const question_item = document.getElementsByClassName('question-item');
var i;
for(i = 0; i< question_item.length; i++){
    question_item[i].addEventListener("click", function() {
        this.classList.toggle("active");
    

    const answer_item = this.nextElementSibling;
    if(answer_item.style.display === "block"){
        answer_item.style.display = "none";
    }
    else {
        answer_item.style.display = "block";
    }
});
}


