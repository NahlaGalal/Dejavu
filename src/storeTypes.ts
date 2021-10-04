export interface IUser {
  token: string;
}

export interface IStore {
  user: IUser;
  loading: boolean;
}