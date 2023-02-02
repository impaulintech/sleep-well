import React, { useState } from "react";

import NextHead from "~/components/atoms/NextHead";
import UserSettingModal from "~/components/molecules/UserSettingsModal";

const UserSettings = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <div>
      <div className="flex flex-col h-screen justify-between">
        <UserSettingModal />
        <div>
          <NextHead title="SleepWell | Profile"></NextHead>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
