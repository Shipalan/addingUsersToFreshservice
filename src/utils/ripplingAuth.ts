import axios from "axios";

const apiKey = process.env.RIPPLING_API_KEY;

const getUserInfoFromRippling = async () => {
  await axios
    .get("https://api.rippling.com/platform/api/employees", {
      headers: {
        Authorization: apiKey,
        "content_type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUserInfoFromRippling;
