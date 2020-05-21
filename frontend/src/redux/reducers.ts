interface LoginReducerInterface {
  data: {
    token: string;
  };
  type: string;
}

export const login = (state: any = [], action: LoginReducerInterface) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, data: action.data };

    default:
      return state;
  }
};

export const signUp = (state: any = [], action: any) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, data: action.data };

    case "SIGN_UP_ERROR":
      return { ...state, data: { error: action.error } };
    default:
      return state;
  }
};

export const feed = (state: any = [], action: any) => {
  switch (action.type) {
    case "FEED_GET_DATA":
      return { ...state, data: action.data };
    default:
      return state;
  }
};
