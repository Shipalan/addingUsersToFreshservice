import * as dotenv from 'dotenv'
dotenv.config()

import axios from "axios";

const apiKey = process.env.API_KEY
const url = 'https://1solar.freshservice.com/api/v2/requesters'

console.log(apiKey)

const config = {
    method: 'post',
    url: url,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(apiKey + ':X').toString('base64')}`
    },
    data: {
        "first_name": "Ron",
        "last_name": "Weasley",
        "primary_email": "Ron.Weasley@1solar.com"
    }
    
}

const auth = axios(config).then(res => {
    console.log(res.status)
    console.log(res.data)
}).catch(err => {
    console.error(err)
})

export default auth