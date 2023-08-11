import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchUser } from "../api/user";
import { LogIn } from "../api/user";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  //login fire the useMutation with email and password as parameters
  const login = (email, password) => {
    loginMutation.mutate({ email, password });
  };

  const loginMutation = useMutation(LogIn, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });

  const { isError: isLoginError, error: loginError } = loginMutation;

  //if login is the success, useQuery notices a change and fetches the user usingfetchUser
  const { data, error, isLoading, isError } = useQuery(
    ["users", token],
    () => fetchUser(token),
    {
      enabled: !!token, // Only run this query if there's a token
      onSuccess: () => {
        setUser(data);
        navigate("/account");
      },
    }
  );

  if (isLoading) {
    return <div>Please wait a moment</div>;
  }

  //if the token matches, the user is not null nore unedfined so he's loggedIn
  const isLoggedIn = !!user;

  if (isError) {
    return <div>There is an error: {error} </div>;
  }

  console.log("USER AUTHCONTEXT", user);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        token,
        login,
        isLoginError,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextWrapper };
