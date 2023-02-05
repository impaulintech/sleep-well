import { useState } from "react";
import Sidebar from "~/components/molecules/Sidebar";
import Topbar from "~/components/molecules/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [toggleCollapse, setToggleCollapse] = useState<boolean>(true);

  return (
    <div className="h-screen flex justify-start">
      <Topbar handleClick={() => setToggleCollapse(!toggleCollapse)} />
      <Sidebar
        toggleCollapse={toggleCollapse}
        setToggleCollapse={setToggleCollapse}
      />
      <div
        className={`bg-swell-60  flex-1 p-4 items-center justify-center overflow-y-auto flex ${
          toggleCollapse && "hidden sm:flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
