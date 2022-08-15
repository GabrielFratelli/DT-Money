import React from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import { Container } from "./styles";

export const Transactions = () => {
  return (
    <Container>
      <Header />
      <Summary />
    </Container>
  );
};
