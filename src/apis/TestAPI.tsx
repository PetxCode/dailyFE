import axios from "axios"

export const getData = async () => {
    return await axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
        return res.data
    })
}
// ${ page }https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false