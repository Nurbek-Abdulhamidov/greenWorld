import React, { useState } from "react";
import { Container } from "../../pages/style";
import { navbar } from "../../utils/navbar";
import logo from "../../assets/images/logo.png";
import { ItemsGroup, LinkGroup, Logo, LogoWrapper, Link } from "./style";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState("/home");

  return (
    <div style={{ dispaly: "flex", flexDiretion: "column", width: "100%" }}>
      <Container
        style={{
          width: "100%",
          borderBottom: "0.3px solid rgba( 70,163,88,0.5)",
        }}
      >
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
          Education
        </LogoWrapper>
        <LinkGroup>
          {navbar.map((value) => (
            <Link
              onClick={() => setActive(value.path)}
              active={active === value.path}
              to={value.path}
            >
              {value.title}
            </Link>
          ))}
        </LinkGroup>
        <ItemsGroup>
          <p>item</p>
        </ItemsGroup>
      </Container>
      <Outlet />
    </div>
  );
};
export default Navbar;
