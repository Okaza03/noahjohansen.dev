export interface BlogPost {
  title: string;
  date: string;
  content: string;
}

export interface BlogPosts {
  [key: string]: BlogPost;
}
