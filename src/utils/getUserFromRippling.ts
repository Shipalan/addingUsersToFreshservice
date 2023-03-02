import axios from "axios";

const apiKey = process.env.RIPPLING_API_KEY;

export interface userObjects {
  createdAt: string;
  department: string;
  firstName: string;
  id: string;
  isManager: boolean;
  lastName: string;
  manager: string;
  name: string;
  spokeId: null;
  title: string;
  updatedAt: string;
  workEmail: string;
}

const getUserInfoFromRippling = async () => {
  try {
    const usersFromRippling = await axios.get<userObjects[]>(
      "https://api.rippling.com/platform/api/employees",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          content_type: "application/json",
        },
      }
    ).then(res => res.data);

    return usersFromRippling
  } catch (error) {
    console.log(error)
    return
  }
};

export default getUserInfoFromRippling;
