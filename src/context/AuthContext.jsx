import { createContext, useEffect, useState } from "react";
import service from "../service/service";
import axios from "axios";
import { useQuery } from "react-query";

export const AuthContext = createContext();
const AuthContextWrapper = ({ children }) => {
  const fetchUser = async (token) => {
    const response = await service.get("/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const token = localStorage.getItem("token");

  const {
    data: user,
    error,
    isLoading,
    isError,
  } = useQuery(["users", token], () => fetchUser(token), {
    enabled: !!token, // Only run this query if there's a token
  });

  const isLoggedIn = !!user; // true if user is not null or undefined

  if (isLoading) {
    return <div>Please wait a moment</div>;
  }

  if (isError) {
    return <div>There is an error: {error} </div>;
  }

  // const authentificationUser = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       const response = await axios.get("//localhost:3000/auth/verify", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setToken(token);
  //       setUser(response.data);
  //       setIsLoggedIn(true);
  //       setIsLoading(false);
  //     } else {
  //       setUser(null);
  //       setIsLoggedIn(false);
  //       setIsLoading(false);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     setUser(null);
  //     setIsLoggedIn(false);
  //     setIsLoading(false);
  //   }
  // };

  const updateToken = (token) => {
    localStorage.setItem("token", token);
    checkLogin(token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
        setToken: updateToken,

        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextWrapper };
