import { useEffect, useState } from "react";
import axios from "../../api/apiconfig";
import UsersCard from "../../components/UsersCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users");
        const filteredUsers = res.data.filter((u) => u.isAdmin !== true);
        setUsers(filteredUsers);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const renderusers = users.map((u) => {
    return <UsersCard key={u.id} users={u} />;
  });

  return (
    <div className="h-[90vh]">
      <div className="w-full pb-5">
        <h1 className="md:text-6xl text-4xl font-black py-2">Manage Users</h1>
        <p className="font-thin w-[70%] md:w-[26%]  md:text-lg text-gray-600 py-3 md:py-4">
          Manage your users efficiently and organized.
        </p>
      </div>

      {users.length > 0 ? (
        <>
          <div className="flex flex-col items-center gap-4">{renderusers}</div>
        </>
      ) : (
        <>
          <h1>No Registered Users yet.</h1>
        </>
      )}
    </div>
  );
};

export default Users;
