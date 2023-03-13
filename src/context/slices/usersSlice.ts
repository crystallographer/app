import { User } from "../../types/user";

export type UsersSlice = {
    users: User[];
    setUsers?: (users: User[]) => void;
};

export const usersSlice: UsersSlice = {
    users: []
};
