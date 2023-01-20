import { client } from 'config/client'

export const getCountries = () => client.get('https://restcountries.com/v3.1/all')
