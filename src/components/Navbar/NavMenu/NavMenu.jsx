"use client";
import React, { useState } from "react";
import { Menu, Card } from "antd";

const { SubMenu } = Menu;

const NavbarMenu = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const [hoveredKey, setHoveredKey] = useState(null);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const onMouseEnter = (key) => {
    setHoveredKey(key);
  };

  const onMouseLeave = () => {
    setHoveredKey(null);
  };

  return (
    <Menu
      mode="vertical"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        border: "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <SubMenu
        key="kadin"
        title="KADIN"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card
            style={{
              width: 500,
              marginTop: 10,
              top: "100%",
              left: 0,
            }}
          >
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
      <SubMenu
        key="erkek"
        title="ERKEK"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card style={{ width: 500, marginTop: 10 }}>
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
      <SubMenu
        key="cocuk"
        title="ÇOCUK"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card style={{ width: 500, marginTop: 10 }}>
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
      <SubMenu
        key="aksesuar"
        title="AKSESUAR"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card style={{ width: 500, marginTop: 10 }}>
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
      <SubMenu
        key="sectiklerimiz"
        title="SEÇTİKLERİMİZ"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card style={{ width: 500, marginTop: 10 }}>
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
      <SubMenu
        key="outlet"
        title="OUTLET"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card style={{ width: 500, marginTop: 10 }}>
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
      <SubMenu
        key="kampanyalar"
        title="KAMPANYALAR"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card style={{ width: 500, marginTop: 10 }}>
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
      <SubMenu
        key="tumurunler"
        title="TÜM ÜRÜNLER"
        onMouseEnter={() => onMouseEnter("cardMenu")}
        onMouseLeave={onMouseLeave}
      >
        <Menu.Item key="women">Kadın</Menu.Item>
        <Menu.Item key="men">Erkek</Menu.Item>
        <Menu.Item key="kids">Çocuk</Menu.Item>
        {hoveredKey === "cardMenu" && (
          <Card style={{ width: 500, marginTop: 10 }}>
            <p>Özel kategori içeriği burada.</p>
          </Card>
        )}
      </SubMenu>
    </Menu>
  );
};

export default NavbarMenu;
