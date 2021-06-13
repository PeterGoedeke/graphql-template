export type UserModel = {
    _id: string;
    services: {
        email: {
            address: string;
        }
    }
    profile: UserProfile;
};

export type UserProfile = {
    firstName?: string;
    lastName?: string;
    age?: number;
};