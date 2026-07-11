import ButtonClickNavigate from "@/components/ButtonClickNavigate/ButtonClickNavigate";
import GeminiModalShow from "@/components/GEMINIModal/GeminiModalShow";
import React from "react";

export const metadata = {
  title: "Settings",
  description: "Law Anatomy Settings Page...!!",
};

const SettingsPage = () => {
  return (
    <div>
      <h1 className="text-6xl text-blue-800 text-center">
        This is Settings Page.....
      </h1>
      <div>
        <ButtonClickNavigate href="/">Go to Home</ButtonClickNavigate>
      </div>
      <GeminiModalShow/>
    </div>
  );
};

export default SettingsPage;
