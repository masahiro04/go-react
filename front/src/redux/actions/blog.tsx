import * as types from '../../types/blog';

export function getBlogs(): types.BlogActionTypes {
  return {
    type: types.GET_BLOGS,
    payload: {}
  };
}

export function addBlogs(blogs: types.Blog[]): types.BlogActionTypes {
  return {
    type: types.ADD_BLOGS,
    payload: { blogs }
  };
}

export function addBlog(blog: types.Blog): types.BlogActionTypes {
  return {
    type: types.ADD_BLOG,
    payload: { blog }
  };
}

export function updateBlog(blog: types.Blog): types.BlogActionTypes {
  return {
    type: types.UPDATE_BLOG,
    payload: { blog }
  };
}

export function deleteBlog(id: number): types.BlogActionTypes {
  return {
    type: types.DELETE_BLOG,
    payload: { id }
  };
}
