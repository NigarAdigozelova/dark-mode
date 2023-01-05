import { Container } from "@chakra-ui/react";
import React, { useContext } from "react";
import { MainContext } from "../context/ContextProvider";
import ModeSwitch from "./ModeSwitch";

const Header = () => {
  const { mode } = useContext(MainContext);
  return (
    <div>
      <Container>
      <ModeSwitch />
      Header current mode: <span style={{ color: "red" }}>{mode}</span>
      <br />
      </Container>
    </div>
  );
};

export default Header;
