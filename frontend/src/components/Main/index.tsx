import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface MainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children, className, ...props }) => (
  <main className={cn("h-screen w-screen", className)} {...props}>
    {children}
  </main>
);

export default Main;
