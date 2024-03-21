import React, { useEffect } from "react";
import axios from "axios";

function MainPage() {
  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Only Verfied and Logged in User Has access to this page.</div>;
}

export default MainPage;
