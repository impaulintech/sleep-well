import { getCookie } from "cookies-next";
import { toast } from "react-hot-toast";

import AuthApi from "~/api/admin/AuthApi";
import redirect from "~/shared/utils/redirect";
import Button from "~/components/atoms/Button";

export default function Home() {
  const token = getCookie("token");

  const handleLogout = () => {
    toast.promise(
      AuthApi.logout().then(() => {
        redirect("/login");
      }),
      {
        loading: "Loading",
        success: (data) => `Logged out`,
        error: (err) => `${err.response.data.message}`,
      }
    );
  };
  return (
    <>
      <main className="text-center flex justify-center items-center font-bold text-5xl text-white min-h-screen h-full">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-btn-2">Sleep Well</h1>
          <Button
            onClick={handleLogout}
            className="bg-swell-30 w-fit ml-auto text-base overflow-hidden"
          >
            Logout
          </Button>
        </div>
      </main>
    </>
  );
}
