import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_USER } from "../graphql/queries";
import { User } from "../types/types";

export default function UserDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id },
  });
  const navigate = useNavigate();
  const user: User = data?.user;
  console.log(user);
  return (
    <div className="text-white p-4">
      <p
        className="text-lg cursor-pointer"
        onClick={() => {
          navigate("/read");
        }}
      >
        &lt;- Back to all users
      </p>
      <div className="p-12">
        <h1 className="text-2xl">{user?.name}</h1>
        <div className="p-6 pt-2">
          <p className="mt-4">{user?.email}</p>
          <p className="mt-4">{user?.nationality}</p>
        </div>
      </div>
    </div>
  );
}
