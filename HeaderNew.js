import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const HeaderNew = () => {
  const [drop, setDrop] = useState(false);

  const dropChange = () => {
    setDrop(!drop);
  };
  return (
    <>
      <Container>
        <Logo>
          Logo
          {/* <Image />{" "} */}
        </Logo>
        <NavI>
          <span>Illustration</span> <Icon1 onClick={dropChange} />
          {drop ? (
            <DropCtr>
              <h1>Hello</h1>
            </DropCtr>
          ) : null}
        </NavI>

        <Nav>Artist</Nav>
        <SearchIn>
          <Icon />
          <Input placeholder="Make your serch..." />
        </SearchIn>
        <Button bg1>Try Pro Free</Button>
        <Button bg>Sign In</Button>
        <MainMenu>
          <Menu />
        </MainMenu>
      </Container>
      <Body>Hello</Body>
    </>
  );
};

export default HeaderNew;

const DropCtr = styled.div`
  position: absolute;
  height: 300px;
  width: 600px;
  background-color: #fff;
  margin-top: 30px;
`;

const Body = styled.div`
  height: 90vh;
  width: 100%;
  background-color: darkcyan;
`;
const MainMenu = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1.5px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  cursor: pointer;
  margin: 0 10px;
  :hover {
    border: 1.5px solid #005eff;
  }
`;
const Menu = styled(BsThreeDotsVertical)`
  font-size: 25px;
`;
const Button = styled.button`
  padding: 6px 20px;
  outline: none;
  border: 1px solid;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${({ bg }) => (bg ? "#fff" : "#005EFF")};
  color: ${({ bg }) => (bg ? "#000" : "#fff")};
  border-color: ${({ bg1 }) => (bg1 ? "transparent" : "gray")};
  transition: all 350ms;

  :hover {
    border-color: ${({ bg1 }) => (bg1 ? "transparent" : "#005EFF")};
    transform: scale(0.97);
  }
`;
const Input = styled.input`
  /* width: 100%; */
  border: 0;
  outline: none;
`;
const Icon = styled(FiSearch)`
  margin: 0 5px;
  color: gray;
`;
const Icon1 = styled(RiArrowDropDownLine)`
  cursor: pointer;
  font-size: 20px;
  margin-top: -3px;
`;
const SearchIn = styled.div`
  height: 40px;
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;
const Nav = styled.div`
  margin-right: 15px;
  font-weight: 600;
`;
const NavI = styled.div`
  margin: 0 15px;
  position: relative;
  transition: all 500ms;

  span {
    font-weight: 600;
    cursor: pointer;
  }
`;
// const Image = styled.img``;
const Logo = styled.div`
  font-family: poppins;
  font-weight: 800;
  font-size: 25px;
  margin-left: 20px;
`;
const Container = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  font-family: poppins;
`;
