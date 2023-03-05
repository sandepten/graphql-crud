import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_USERS } from "../graphql/queries";
import { User } from "../types/types";

export default function ReadData() {
  const { loading, error, data } = useQuery(GET_USERS);
  const navigate = useNavigate();
  return (
    <div className="text-white p-12">
      <p className="text-lg cursor-pointer" onClick={() => navigate("/")}>
        &lt;- Back to home
      </p>
      <div className="p-6">
        <h1 className="text-2xl">List of all users</h1>
        {data?.users.map((user: User) => (
          <div
            className="flex gap-6 mt-4 cursor-pointer"
            key={user.id}
            onClick={() => {
              navigate(`/user/${user.id}`);
            }}
          >
            <p>{user.name}</p>
            <p>-</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
