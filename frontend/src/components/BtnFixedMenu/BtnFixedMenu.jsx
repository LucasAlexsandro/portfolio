import React, { useState } from "react";
import { MenuFixedContainer, MenuOpen } from "./Styles";
import { AiOutlineMenu } from "react-icons/ai";

export default function BtnFixedMenu() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <MenuFixedContainer>
        <button className="btnFixed">
          <span>
            <AiOutlineMenu />
          </span>
          MENU
        </button>
      </MenuFixedContainer>
      {/* <MenuOpen>
        <nav className="NavBarMenuFixed">
          <ul>
            <li>
              <a>Bio</a>
            </li>
            <li>
              <a>Bio</a>
            </li>
            <li>
              <a>Bio</a>
            </li>
          </ul>
        </nav>
      </MenuOpen> */}
    </>
  );
}
