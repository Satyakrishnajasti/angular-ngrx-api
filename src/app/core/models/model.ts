export interface CountNumber {
  count: number;
}

export interface Albums {
  userId: number;
  id: number;
  title: string;
}

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
