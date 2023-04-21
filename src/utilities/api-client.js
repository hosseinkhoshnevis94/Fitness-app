import axios from "axios";


export default axios.create({
    baseURL:'https://exercisedb.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key':'c2b0f31dd2mshbf3939f4b1c684ap19274bjsncee2f9f26eb2',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
})