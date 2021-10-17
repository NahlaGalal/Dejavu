export interface IUser {
  token: string;
  success: any;
  errors: any;
}

export interface IHome {
  sliders: {
    id: number;
    title: "";
    background: "";
    description: "";
  }[];
  errors: any;
}

export interface IUsers {
  profile: {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    avatar: string;
    bio: string;
  },
  user: IUsers["profile"];
  errors: any;
}

export interface IStore {
  user: IUser;
  home: IHome;
  users: IUsers;
  loading: boolean;
}
