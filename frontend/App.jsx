import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:8888/users");
      const usersData = await response.json();
      console.log(usersData);
    };
    getUsers();
  });
  return <div>Hello frontend</div>;
};
