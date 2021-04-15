import { useState } from "react";

type MenuComponent = {
  visible: boolean;
  onClickVisible: () => void;
};

export const MenuIcon = (
  <svg
    fillRule="evenodd"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
  >
    <path fill="white" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>
);

export const Menu = ({ visible, onClickVisible }: MenuComponent) => {
  if (!visible) {
    return <></>;
  }

  return (
    <div>
      <div className="fixed inset-y-0 left-0 bg-white">
        <div onClick={onClickVisible}>Close</div>
        <p>Menu</p>
      </div>
    </div>
  );
};
