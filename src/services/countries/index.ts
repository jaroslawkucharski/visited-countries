import countries from 'data/countries.json'

// Static countries list (restcountries.com v3.1 API has been shut down)
export const getCountries = () => Promise.resolve(countries)
