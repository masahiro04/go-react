export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOG = 'GET_BLOG';
export const ADD_BLOGS = 'ADD_BLOGS';
export const ADD_BLOG = 'ADD_BLOG';
export const UPDATE_BLOG = 'UPDATE_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';

export interface Blog {
  id: number;
  title: string;
  body: string;
}

export interface BlogState {
  blogs: Blog[]
}

export interface GetBlogsAction {
  type: typeof GET_BLOGS
  // eslint-disable-next-line @typescript-eslint/ban-types
  payload: {}
}

export interface AddBlogsAction {
  type: typeof ADD_BLOGS
  payload: { blogs: Blog[] }
}

export interface AddBlogAction {
  type: typeof ADD_BLOG
  payload: { blog: Blog }
}

export interface UpdateBlogAction {
  type: typeof UPDATE_BLOG
  payload: { blog: Blog }
}

export interface DeleteBlogAction {
  type: typeof DELETE_BLOG
  payload: { id: number }
}

export type BlogActionTypes =
  GetBlogsAction
  | AddBlogsAction
  | AddBlogAction
  | UpdateBlogAction
  | DeleteBlogAction;
