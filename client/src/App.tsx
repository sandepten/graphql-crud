import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <main className="p-12 text-white">
      <h1 className="text-3xl font-bold underline">
        GraphQL Learning application
      </h1>
      <div className="p-6 flex gap-6 mt-4">
        <p
          className="border border-gray-300 w-fit p-3 font-semibold cursor-pointer"
          onClick={() => {
            navigate("/read");
          }}
        >
          Read users
        </p>
        <p
          className="border border-gray-300 w-fit p-3 font-semibold cursor-pointer"
          onClick={() => {
            navigate("/createUser");
          }}
        >
          Create user
        </p>
      </div>
    </main>
  );
}

export default App;
