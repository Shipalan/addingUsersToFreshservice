import axios from "axios";
import { userObjects } from "./getUserFromRippling";

const apiKey = process.env.FRESHSERVICE_API_KEY;
const url = "https://1solar.freshservice.com/api/v2/requesters";

const addUser = async (users: userObjects[]) => {
  users.forEach(async (user) => {
    const config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(apiKey + ":X").toString("base64")}`,
      },
      data: user,
    };

    await axios(config)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export default addUser;
