import * as dotenv from "dotenv";
dotenv.config();
import addUser from "./utils/addUsersToFreshservice";
import getUserInfoFromRippling from "./utils/ripplingAuth";

const handler = async () => {
  await getUserInfoFromRippling();

  //Adding users to Freshservice
  //    await addUser()
};

handler();
