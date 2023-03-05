import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_USER } from "../graphql/mutations";

export default function CreateUser() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    nationality: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      input: {
        name: userData.name,
        email: userData.email,
        nationality: userData.nationality,
      },
    },
  });
  const handleSubmit = async () => {
    try {
      setError(false);
      setSuccess(false);
      await createUser();
      setSuccess(true);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <main className="p-12 text-white">
      <p className="text-lg cursor-pointer" onClick={() => navigate("/")}>
        &lt;- Back to home
      </p>
      <div className="p-6">
        <h1 className="text-2xl">Create User:</h1>
        <div className="p-2 flex flex-col gap-4 w-1/3 mt-4">
          <input
            type="text"
            placeholder="Name"
            className="p-1.5"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-1.5"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Nationality"
            className="p-1.5"
            name="nationality"
            value={userData.nationality}
            onChange={handleChange}
          />
          <button
            className="bg-green-600 py-2 px-5 w-fit rounded-md"
            onClick={() => handleSubmit()}
          >
            Create
          </button>
        </div>
        {(error || success) && (
          <div className="mt-4 px-2">
            {error && (
              <p className="text-red-500 text-lg">! Error creating user</p>
            )}
            {success && <p className="text-green-500 text-lg">User created</p>}
          </div>
        )}
      </div>
    </main>
  );
}
