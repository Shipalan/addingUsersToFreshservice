import * as dotenv from "dotenv"
dotenv.config()
import addUser from "./utils/freshserviceAuth"


const handler = async () => {
    await addUser
}

handler()