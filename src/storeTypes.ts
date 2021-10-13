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

export interface IStore {
  user: IUser;
  home: IHome;
  loading: boolean;
}
