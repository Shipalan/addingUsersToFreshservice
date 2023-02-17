import * as dotenv from "dotenv"
import auth from "./utils/freshserviceAuth"
dotenv.config()


const handler = async () => {
    await auth
}

handler()