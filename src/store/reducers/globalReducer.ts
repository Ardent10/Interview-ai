import { initialState } from "./initialState";

type State = {
  [key: string]: any;
};
type Action = {
  type: string;
  payload: object;
};

const globalReducers = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER_PROFILE":
      return { ...state, userProfile: payload };

    case "SET_IS_LOADING":
      return { ...state, ...payload };

    case "UPDATE_RESUME_MODAL":
      return {
        ...state,
        resumeModal: { ...state.resumeModal, ...payload },
      };

    case "RESET_RESUME_MODAL":
      return {
        ...state,
        resumeModal: initialState.resumeModal,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};


export { globalReducers };
