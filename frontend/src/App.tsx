import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { login } from "./lib/queries";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["login", username, password],
    mutationFn: () => login(username, password),
    onError: (error) => alert(error.message),
    onSuccess: () => console.log("Logged in!"),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center p-4 bg-slate-900 h-screen"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="text-white">
        Login
      </button>
    </form>
  );
}

export default App;
