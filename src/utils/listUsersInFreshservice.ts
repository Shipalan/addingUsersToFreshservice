import { userObjects } from "./getUserFromRippling";
import axios from "axios";

const apiKey = process.env.FRESHSERVICE_API_KEY;
const url = "https://1solar.freshservice.com/api/v2/requesters";

export interface freshServiceUser {
    active: boolean;
    address: string | null;
    background_information: null;
    can_see_all_changes_from_associated_departments: boolean;
    can_see_all_tickets_from_associated_departments: boolean;
    created_at: string;
    custom_fields: object;
    department_ids: string[];
    department_names: string[];
    external_id: null;
    first_name: string;
    has_logged_in: boolean;
    id: number;
    is_agent: boolean;
    job_title: null;
    language: string;
    last_name: string;
    location_id: null;
    location_name: null;
    mobile_phone_number: null;
    primary_email: string;
    reporting_manager_id: string | null;
    secondary_emails: [];
    time_format: string;
    time_zone: string;
    updated_at: string;
    vip_user: boolean;
    work_phone_number: null;

}

export interface userEmail {
    email: string
}


const listUsersInFreshservice = async () => {
  try {
    const config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(apiKey + ":X").toString("base64")}`,
      },
    };

    const requester = await axios(config).then(
      (res) => {
        const existingUsers: userEmail[] = []
        const requester = res.data.requesters
        const users = requester.forEach((user) => {
            const u = {
                email: user.primary_email
            }

            existingUsers.push(u)
        })

        console.log(users)
        
 
        return existingUsers
      }
    );

    if (requester) {
      return requester;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export default listUsersInFreshservice;
