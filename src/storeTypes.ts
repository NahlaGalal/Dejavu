export interface IUser {
  token: string;
  success: any;
  errors: any;
}

export interface IHome {
  sliders: {
    id: number;
    title: string;
    background: string;
    description: string;
  }[];
  about: {
    id?: number;
    title: string;
    image?: string;
    description: string;
    order: number
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
    cover: string;
    bio: string;
  };
  user: IUsers["profile"];
  errors: any;
}

export interface IMemory {
  content: string;
  statues: "Draft" | "Published" | "Archived";
  place: string;
  anonymous: boolean;
  public?: boolean;
  author: IUsers["profile"];
  parties: {
    receiver: IUsers["profile"];
    public: boolean;
  }[];
  feeling: {
    id: number;
    name: string;
    code: string;
  };
  gang: {
    id: number;
    creator: string;
    name: string;
    description: string;
    cover: string;
  };
  images: {
    image: string;
    video: string;
  }[];
  videos: {
    image: string;
    video: string;
  }[];
}

export interface IMemories {
  count: number;
  next: string;
  previous: string;
  results: IMemory[];
}

export interface IStore {
  user: IUser;
  home: IHome;
  users: IUsers;
  memories: IMemories;
  loading: boolean;
}
