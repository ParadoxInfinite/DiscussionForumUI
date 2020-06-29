import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

interface TokenInterface {
  foo: string;
  exp: number;
  iat: number;
}

const initState = {
  user: null as any,
};

if (localStorage.getItem("discussionForumToken")) {
  const token: string = localStorage.getItem("discussionForumToken")!;
  const decodedToken = jwtDecode<TokenInterface>(token);
  if (decodedToken!.exp * 1000 < Date.now())
    localStorage.removeItem("discussionForumToken");
  else initState.user = decodedToken;
}

const AuthContext = createContext({
  user: null,
  login: (userData: any) => {},
  logout: () => {},
});

function authReducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, initState);

  const login = (userData: any) => {
    localStorage.setItem("discussionForumToken", userData.token);
    dispatch({ type: "LOGIN", payload: userData });
  };
  const logout = () => {
    localStorage.removeItem("discussionForumToken");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
