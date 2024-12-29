import { FC, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/lib/queries";
import useAuth from "@/stores/useAuth";

const LoginScreen: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();

  const { mutate } = useMutation({
    mutationKey: ["login", username, password],
    mutationFn: () => login(username, password),
    onError: (error) => alert(error.message),
    onSuccess: ({ user, token, expiry }) => setAuth(user, token, expiry),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center p-4"
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
      <button type="submit" className="text-black">
        Login
      </button>
    </form>
  );
};

export default LoginScreen;
