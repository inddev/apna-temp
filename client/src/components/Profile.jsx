import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  // console.log(user.picture);

  if (!isAuthenticated) {
    return <div className="text-center text-2xl font-bold">Not logged in</div>;
  }

  if (isLoading) {
    return <div className="text-center text-2xl font-bold">Loading...</div>;
  }
  return (
    <div className="m-5">
      {user && (
        <div className="sm:w-1/2 border mx-auto p-5 rounded-3xl bg-orange-400 text-white">
          <img
            src={user?.picture}
            alt="user-picture"
            className="mx-auto rounded-full w-28"
          />
          <h1 className="text-center mt-3 text-2xl font-bold">{user.name}</h1>
          <p className="text-center mt-1 text-sm font-semibold">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
