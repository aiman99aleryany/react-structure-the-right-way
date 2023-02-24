export type UserFields = {
    isInit: boolean;
    id: string;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type User = {
    isInit: boolean;
    isSignedIn: boolean;
    fields: UserFields;
};
