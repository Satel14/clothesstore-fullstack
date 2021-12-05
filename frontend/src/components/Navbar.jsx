import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { Badge } from "antd";
import SetLanguage from "./language/SetLanguage";
import { translate } from "react-switch-lang";
import "../style/style.scss";
import Modal from './Modal'



const Navbar = (props, current) => {
  const { t } = props;
  const [modalActive, setModalActive] = useState(true)

  return (
    <div className="navbar">
      <Menu
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="main" icon={<HomeOutlined />}>
          <Link to="/">{t("menu.home")}</Link>
        </Menu.Item>
        <Menu.Item key="products" icon={<HeartOutlined />}>
          <Link to="/product">{t("menu.products")}</Link>
        </Menu.Item>
        <Menu.Item key="Faq" icon={<QuestionCircleOutlined />}>
          <Link to="/faq">{t("menu.faq")}</Link>
        </Menu.Item>
      </Menu>

      <div className="navbar__logo">
        CLOTHES
        <span>.STORE</span>
      </div>
      <Menu
        selectedKeys={[current]}
        mode="horizontal"
        className="right-menu"
      ></Menu>
      <div className="button_sign" onClick={() => setModalActive(true)}>{t("menu.signup")}</div>
      <Modal active={modalActive} setActive={setModalActive}>
      </Modal>
      <Badge count={2}>
        <Button component={Link} to="/cart">
          <ShoppingCartOutlined />
        </Button>
      </Badge>
      <div className="navbar_lang">
        <SetLanguage />
      </div>
    </div>
  );
}

export default translate(Navbar);
