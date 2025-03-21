import React, { createContext, useContext } from "react";

const LocalUserContext = createContext({});

const LocalStateContext = LocalUserContext.Provider;

const UserContextProvider = ({ children }) => {
  const logout = () => {
    localStorage.removeItem("@logeIn");
    localStorage.removeItem("email");
    window.location.reload();
  };

  const UserLogin = async (userCredential) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCredential),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("@logeIn", true);
      localStorage.setItem("email", data.email);
      window.location.href = "/";
    } catch (error) {
      alert("Something went wrong! " + error);
    }
  };

  return (
    <LocalStateContext value={{ logout, UserLogin }}>
      {children}
    </LocalStateContext>
  );
};

const useUser = () => useContext(LocalUserContext);

export { UserContextProvider, useUser };
