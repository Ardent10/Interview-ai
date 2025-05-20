import { initialState } from "./initialState";

type State = {
  [key: string]: any;
};
type Action = {
  type: string;
  payload: object;
};

const globalReducers = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "SET_USER_PROFILE": {
      return {
        ...state,
        userProfile: action.payload,
      };
    }
      case "SET_IS_LOADING": {
      return {
        ...state,
        ...action.payload,
      };
    }

    case 'LOGOUT' : {
      return initialState;
    }

    default:
      return state;
  }
};

export { globalReducers };