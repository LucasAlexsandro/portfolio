import React from "react";
import { DashArea } from "./styles";
import { IoFolderOpenOutline } from "react-icons/io5";


export default function Dash() {
  return (
    <DashArea>
      <div className="dash-container">
        <sidebar className="sidebar-area">
          <nav className="navigation">
            <ul>
              <li>
                <a className="navigation-title">
                  <i><IoFolderOpenOutline /></i>
                  <span>Posts</span>
                </a>
                <ul className="navigation-item">
                  <li className="item-link">Publicados</li>
                  <li className="item-link">Pendentes</li>
                  <li className="item-link">Rascunho</li>
                  <li className="item-link">Excluidos</li>
                </ul>
              </li>
            </ul>
          </nav>
        </sidebar>
        <main className="main-area"></main>
      </div>
    </DashArea>
  );
}
