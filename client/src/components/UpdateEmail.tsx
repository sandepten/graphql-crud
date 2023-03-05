import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UPDATE_EMAIL } from "../graphql/mutations";

export default function UpdateEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const oldEmail = searchParams.get("email");
  const [updateEmail] = useMutation(UPDATE_EMAIL, {
    variables: { id, email },
  });
  const handleSubmit = async () => {
    try {
      setError(false);
      setSuccess(false);
      await updateEmail();
      setSuccess(true);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <main className="p-12 text-white">
      <a href={`/user/${id}`} className="text-lg cursor-pointer">
        &lt;- Back to user
      </a>
      <div className="p-6">
        <h1 className="text-2xl">Update email:</h1>
        <div className="p-2 flex flex-col gap-4 w-1/3 mt-4">
          <input
            type="email"
            placeholder={oldEmail?.length ? oldEmail : "Email"}
            className="p-1.5"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-green-600 py-2 px-5 w-fit rounded-md"
            onClick={() => handleSubmit()}
          >
            Update
          </button>
        </div>
        {(error || success) && (
          <div className="mt-4 px-2">
            {error && (
              <p className="text-red-500 text-lg">! Error updating email</p>
            )}
            {success && (
              <p className="text-green-500 text-lg">Email updated!</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
