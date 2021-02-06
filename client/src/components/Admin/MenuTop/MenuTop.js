import React from "react";
import DenisLogo from "../../../assets/img/png/LOGODESA.png";
import { Button, Icon } from "antd";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={DenisLogo}
          alt="Denis Amarilla Ocampos"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("desconexión")}>
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
}
