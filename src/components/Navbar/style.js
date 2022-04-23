import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 78px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const LogoWrapper = styled.div`
  color: var(--greenColor);
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
`;

export const Logo = styled("img")`
  margin-right: 6px;
  width: 50px;
  height: 50px;
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
`;
export const ItemsGroup = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  font-family: Cero Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 20px;
  margin: 0 25px;
  color: ${({ active }) => (active ? "#46A358" : "#3d3d3d")}};
`;
