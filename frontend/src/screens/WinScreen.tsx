import { FC } from "react";

const WinScreen: FC = () => {
  const CODE = import.meta.env.CODE || "";
  return (
    <div>
      <h1>Win Screen</h1>
      <p>
        The code is: <strong>{CODE}</strong>
      </p>
    </div>
  );
};

export default WinScreen;
