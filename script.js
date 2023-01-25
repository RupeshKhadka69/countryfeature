const apiKey = "r7fJ41U62O+vaeERs/d4Yg==T8LH2xtNudD4Qtog";

const jokeText = document.querySelector(".jokeText");



const countryName = document.querySelector('.name')
const capital = document.querySelector('.capital')
const region = document.querySelector('.region')
const gdp = document.querySelector('.gdp')
const surfaceArea = document.querySelector('.surface_area')
const sexRatio = document.querySelector('.sex_ratio')
const currencyCode = document.querySelector('.currencyCode')
const currencyName = document.querySelector('.currencyName')
const forestedArea = document.querySelector('.forested_area')


const button = document.querySelector('.button')


const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey} }
button.addEventListener('click', getCountryData)
   
    async function getCountryData(event){
          event.preventDefault()
          const input = document.querySelector('.input')
          const country = input.value
          const newUrl = 'https://api.api-ninjas.com/v1/country?name='+ country
          input.value = ''
          const spinner = document.querySelector('.js-spinner')
          spinner.classList.remove('hidden')
            const response = await fetch(newUrl,options)
              .then((res) => res.json())
              .catch((err)=> console.log(err))
              .then((data)=> {
                  countryName.innerHTML = data[0].name
                  capital.innerHTML = data[0].capital
                  region.innerHTML = data[0].region
                  gdp.innerHTML = data[0].gdp
                  surfaceArea.innerHTML = data[0].surface_area
                  sexRatio.innerHTML = data[0].sex_ratio
                  currencyCode.innerHTML = data[0].currency.code
                  currencyName.innerHTML = data[0].currency.name
                  forestedArea.innerHTML = data[0].forested_area
              })
              .catch((err) => {
                console.log(err) 
                alert('enter valid country')
              })
              .finally(()=> {

                  spinner.classList.add('hidden')
              }) 
              
          }

   
