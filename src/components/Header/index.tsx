import React from "react";

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoimg from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoimg} alt="DT Money" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
