import * as dotenv from 'dotenv'
dotenv.config()

import axios from "axios";

const apiKey = process.env.API_KEY
const url = 'https://1solar.freshservice.com/api/v2/requesters'
const data = [{
    "first_name": "Aaron",
    "last_name": "Santos",
    "primary_email": "Aaron.Santos@1solar.com"
},
{
    "first_name": "Zack",
    "last_name": "dichtel",
    "primary_email": "zack.dichtel@1solar.com"
},
{
    "first_name": "clay",
    "last_name": "phipps",
    "primary_email": "clay.phipps@1solar.com"
}]


const addUser = data.forEach(async (user) => {
    const config = {
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${Buffer.from(apiKey + ':X').toString('base64')}`
        },
        data: user
        
    }
    
    await axios(config).then(res => {
        console.log(res.status)
        console.log(res.data)
    }).catch(err => {
        console.error(err)
    })
})

export default addUser