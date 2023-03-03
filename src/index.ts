import * as dotenv from "dotenv";
dotenv.config();
import addUser from "./utils/addUsersToFreshservice";
import cleanupRipplingData from "./utils/cleanupRipplingData";
import getUserInfoFromRippling from "./utils/getUserFromRippling";
import listUsersInFreshservice from "./utils/listUsersInFreshservice";
import removeUsers from "./utils/removeUsers";

const handler = async () => {
  const usersFromRippling = await getUserInfoFromRippling();

  if (!usersFromRippling) {
    return;
  }

  const cleanUsersFromRippling = await cleanupRipplingData(usersFromRippling);
  
  // Adding users to Freshservice
  const usersInFreshservice = await listUsersInFreshservice();

  if (!usersInFreshservice) {
    return;
  }

  const updatedUserList = await removeUsers(
    usersInFreshservice, cleanUsersFromRippling
  );
  //   await addUser(users);
};

handler();
