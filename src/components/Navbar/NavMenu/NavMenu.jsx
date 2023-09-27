"use client";
import React, { useState } from "react";
import { Menu, Card, Space, Row, Col } from "antd";
import style from "./style.module.css";

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
    /* Navbar componenti için loading hazırlanacak */
    <Menu
      className={style.navMenu}
      mode="horizontal"
      openKeys={openKeys}
      inlineIndent={0}
      onOpenChange={onOpenChange}
      style={{
        border: "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Space size="large">
        <SubMenu
          key="kadin"
          title="KADIN"
          onMouseEnter={() => onMouseEnter("kadin")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "kadin" && (
            <Card>
              <Row>
                <Col>
                  <Menu.ItemGroup key="test1" title="Test 1">
                    <Menu.Item key="women">Kadın</Menu.Item>
                    <Menu.Item key="men">Erkek</Menu.Item>
                    <Menu.Item key="kids">Çocuk</Menu.Item>
                  </Menu.ItemGroup>
                </Col>
                <Col>
                  <Menu.ItemGroup key="test2" title="Test 2">
                    <Menu.Item key="women">Kadın</Menu.Item>
                    <Menu.Item key="men">Erkek</Menu.Item>
                    <Menu.Item key="kids">Çocuk</Menu.Item>
                  </Menu.ItemGroup>
                </Col>
                <Col>
                  <Menu.ItemGroup key="test3" title="Test 3">
                    <Menu.Item key="women">Kadın</Menu.Item>
                    <Menu.Item key="men">Erkek</Menu.Item>
                    <Menu.Item key="kids">Çocuk</Menu.Item>
                  </Menu.ItemGroup>
                </Col>
                <Col>
                  <Menu.ItemGroup key="test4" title="Test 4">
                    <Menu.Item key="women">Kadın</Menu.Item>
                    <Menu.Item key="men">Erkek</Menu.Item>
                    <Menu.Item key="kids">Çocuk</Menu.Item>
                  </Menu.ItemGroup>
                </Col>
              </Row>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="erkek"
          title="ERKEK"
          onMouseEnter={() => onMouseEnter("erkek")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "erkek" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="teknoloji"
          title="TEKNOLOJİ"
          onMouseEnter={() => onMouseEnter("teknoloji")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "teknoloji" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="cocuk"
          title="ÇOCUK"
          onMouseEnter={() => onMouseEnter("cocuk")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "cocuk" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="aksesuar"
          title="AKSESUAR"
          onMouseEnter={() => onMouseEnter("aksesuar")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "aksesuar" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="sectiklerimiz"
          title="SEÇTİKLERİMİZ"
          onMouseEnter={() => onMouseEnter("sectiklerimiz")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "sectiklerimiz" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="outlet"
          title="OUTLET"
          onMouseEnter={() => onMouseEnter("outlet")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "outlet" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="kampanyalar"
          title="KAMPANYALAR"
          onMouseEnter={() => onMouseEnter("kampanyalar")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "kampanyalar" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
        <SubMenu
          key="tumurunler"
          title="TÜM ÜRÜNLER"
          onMouseEnter={() => onMouseEnter("tumurunler")}
          onMouseLeave={onMouseLeave}
        >
          {hoveredKey === "tumurunler" && (
            <Card
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                border: "none", // Sınırı kaldırmak için
                width: "100%", // Kart boyutunu ayarlamak için
              }}
            >
              <Menu.ItemGroup key="test1" title="Test 1">
                <Menu.Item key="women">Kadın</Menu.Item>
                <Menu.Item key="men">Erkek</Menu.Item>
                <Menu.Item key="kids">Çocuk</Menu.Item>
              </Menu.ItemGroup>
            </Card>
          )}
        </SubMenu>
      </Space>
    </Menu>
  );
};

export default NavbarMenu;
