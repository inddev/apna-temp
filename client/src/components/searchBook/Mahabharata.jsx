import axios from "axios";
import React from "react";

const Mahabharata = () => {
  const fetchMahabharata = () => {
    axios
      .get("http://localhost:8000/api/user/mahabharata/1")
      .then((data) => {
        if (data.data.success) {
          alert("data retrieved Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchMahabharata();
  return <div>Mahabharata</div>;
};

export default Mahabharata;
