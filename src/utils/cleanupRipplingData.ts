import { userObjects } from "./getUserFromRippling";

const cleanupRipplingData = async (usersFromRippling: userObjects[]) => {
  const filteredArray = usersFromRippling.filter(
    (user) => user.workEmail !== null
  );

  return filteredArray;
};

export default cleanupRipplingData;
