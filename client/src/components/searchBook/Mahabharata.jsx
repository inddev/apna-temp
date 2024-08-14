import axios from "axios";
import React from "react";

const Mahabharata = () => {
  const fetchMahabharata = () => {
    axios
      .get("http://localhost:8000/api/user/mahabharata/1")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchMahabharata();
  return <div>Mahabharata</div>;
};

export default Mahabharata;
