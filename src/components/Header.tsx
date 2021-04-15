import { useState } from "react";
import { Menu, MenuIcon } from "./Menu";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div>
      <Menu
        visible={menuVisible}
        onClickVisible={() => {
          setMenuVisible(false);
        }}
      />
      <div className="flex justify-between p-3 bg-blue-500 text-white text-xl shadow-md">
        <button
          onClick={() => {
            setMenuVisible(true);
          }}
        >
          <div
            style={{ width: 25, verticalAlign: -6 }}
            className="inline-block mr-2"
          >
            {MenuIcon}
          </div>
          Menu
        </button>
        <div>Teams for Rookies</div>
        <div></div>
      </div>
    </div>
  );
};
