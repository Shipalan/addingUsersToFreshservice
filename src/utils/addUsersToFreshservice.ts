import axios from "axios";
import { userObjects } from "./getUserFromRippling";

const apiKey = process.env.FRESHSERVICE_API_KEY;
const url = "https://1solar.freshservice.com/api/v2/requesters";

const addUser = async (users: userObjects[]) => {
  users.forEach(async (user) => {

    const userData = {
      first_name: user.firstName,
      last_name: user.lastName,
      job_title: user.title,
      primary_email: user.workEmail,
      work_phone_number: null,
      mobile_phone_number: null,
      can_see_all_tickets_from_associated_departments: false
    }

    const config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(apiKey + ":X").toString("base64")}`,
      },
      data: userData,
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
