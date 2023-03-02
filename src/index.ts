import * as dotenv from "dotenv";
dotenv.config();
import addUser from "./utils/addUsersToFreshservice";
import getUserInfoFromRippling from "./utils/getUserFromRippling";
import listUsersInFreshservice from "./utils/listUsersInFreshservice";
import removeExistingUsers from "./utils/removeExistingUsers";

const handler = async () => {
  const usersFromRippling = await getUserInfoFromRippling();

  // Adding users to Freshservice
  if (!usersFromRippling) {
    return
  }
  const usersInFreshservice = await listUsersInFreshservice()

  if(!usersInFreshservice){
    return
  }

  const updatedUserList = await removeExistingUsers(usersInFreshservice)
  //   await addUser(users);
};

handler();
