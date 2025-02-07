import React, { useState, useEffect } from "react";

export default function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);
  return (
    <div>
      <label htmlFor="userId">Choose a userId </label>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        min={1}
        max={10}
        id="userId"
      />
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
