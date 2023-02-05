import React, { useState } from "react";
import { toast } from "react-hot-toast";
import AuthApi from "~/api/admin/AuthApi";
import { deleteCookie } from "cookies-next";

import GearIcon from "~/shared/icons/GridIcon";
import SettingsModal from "../SettingsModal";
import LogoutIcon from "~/shared/icons/LogoutIcon";
import SettingsIcon from "~/shared/icons/SettingsIcon";
import redirect from "~/shared/utils/redirect";

const Sidebar = ({ toggleCollapse }: any) => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);

  const handleLogout = () => {
    toast.promise(
      AuthApi.logout().then(() => {
        deleteCookie("token");
        window.location.pathname = "/";
      }),
      {
        loading: "Loading",
        success: (data) => `Logged out`,
        error: (err) => `${err.response.data.message}`,
      }
    );
  };

  const handleSettings = () => {
    setShowSettingsModal(true);
  };

  return (
    <>
      <SettingsModal
        showModal={showSettingsModal}
        setShowModal={setShowSettingsModal}
      />
      {toggleCollapse && (
        <div
          className={`h-full pt-14 bg-swell-vdark text-white justify-between flex flex-col flex-1 sm:flex-none`}
        >
          <div className="flex w-full items-center space-x-2 px-6 py-4 text-base bg-swell-10">
            <GearIcon />
            <p>Recommendations</p>
          </div>
          <div className="border-t">
            <button
              onClick={handleSettings}
              className="flex w-full items-center space-x-2 px-6 py-4 text-base"
            >
              <SettingsIcon />
              <p>Settings</p>
            </button>
            <button
              onClick={handleLogout}
              className="flex w-full items-center space-x-2 px-6 py-4 mb-2 text-base"
            >
              <LogoutIcon />
              <p>Logout</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
