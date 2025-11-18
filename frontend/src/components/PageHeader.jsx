import React from "react";
import Container from "./Container";

const PageHeader = ({ title }) => {
  return (
    <div className="bg-gray-950 text-white py-16 md:py-24">
      <Container>
        <h1 className="text-h2 text-center uppercase">{title}</h1>
      </Container>
    </div>
  );
};

export default PageHeader;
