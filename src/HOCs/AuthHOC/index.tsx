import React from "react";
import { useSelector } from "react-redux";

export const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  UNKNOWN: "UNKNOWN",
};

export const REGULARS: Array<string> = [ROLES.USER, ROLES.ADMIN];

const AllowUsers = (
  UserList: Array<string>,
  GreenComponent: any,
  RedComponent?: any
) => {
  const emptyFragment = () => <></>;

  return (props: object, { children }: any) => {
    const UserData = useSelector((state: any) => state.User);
    const currentUserRole = UserData?.user.role;
    const isAllowed = UserList.indexOf(currentUserRole) != -1;
    const DisplayComponent: any = isAllowed
      ? GreenComponent
      : RedComponent
      ? RedComponent
      : emptyFragment;
    return <DisplayComponent {...props}>{children}</DisplayComponent>;
  };
};

export default AllowUsers;
