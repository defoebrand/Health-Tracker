import { VIEWCOMMUNITY, ALLCOMMUNITIES } from '../actions';

const communityReducer = (state = [], action) => {
  switch (action.type) {
    case VIEWCOMMUNITY:
      return {
        community: action.input,
      };
    case ALLCOMMUNITIES:
      return {
        communities: action.input,
      };

    default:
      return state;
  }
};

export default communityReducer;
