import * as types from '../../types/blog';

const initialState: types.BlogState = { blogs: [] };

export default function BlogReducer(
  state = initialState, action: types.BlogActionTypes
): types.BlogState {
  switch (action.type) {
    case types.GET_BLOGS:
      return { ...state };
    case types.ADD_BLOGS:
      const { blogs } = action.payload;
      return { ...state, blogs };
    case types.ADD_BLOG:
      const { blog } = action.payload;
      const clone = JSON.parse(JSON.stringify(state.blogs));
      clone.unshift(blog);
      return { ...state, blogs: clone };
    case types.UPDATE_BLOG: {
      const { blog } = action.payload;
      const clone = JSON.parse(JSON.stringify(state.blogs));
      const index = clone.findIndex((obj: any) => obj.id === blog.id);
      if (index !== -1) clone[index] = blog;
      return { ...state, blogs: clone };
    }
    case types.DELETE_BLOG: {
      const { id } = action.payload;
      let clone = JSON.parse(JSON.stringify(state.blogs));
      const index = clone.findIndex((obj: any) => obj.id === id);
      if (index !== -1) clone.splice(index, 1);
      return { ...state, blogs: clone };
    }
    default:
      return state;
  }
};
