import { userObjects } from "./getUserFromRippling";
import { userEmail } from "./listUsersInFreshservice";

const removeUsers = async (
  usersFromFreshservice: userEmail[],
  cleanUsersFromRippling: userObjects[]
) => {
  for (let i = 0; i < usersFromFreshservice.length; i++) {
    const inFreshservice = usersFromFreshservice[i].email;

    for (let j = 0; j < cleanUsersFromRippling.length; j++) {
      if (inFreshservice === cleanUsersFromRippling[j].workEmail) {
        const index = cleanUsersFromRippling.findIndex(
          (e) => e.workEmail === inFreshservice
        );

        cleanUsersFromRippling.splice(index, 1);
      }
    }
  }
  return cleanUsersFromRippling;
};

export default removeUsers;
