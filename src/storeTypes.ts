export interface IUser {
  token: string;
  errors: any;
}

export interface IStore {
  user: IUser;
  loading: boolean;
}