import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import Image from "../../components/image/Image";
import Title from "../../components/title/Title";
import MediumText from "../../components/description/Description";
import { Button } from "antd";

const Entity = (props) => {
  const { name, logo, description, detailUrl, editUrl } = props;

  return (
    <Container>
      {logo && <Image imageUrl={logo} />}
      <Title style={{ marginLeft: 10 }}>{name}</Title>
      {description && (
        <>
          <MediumText style={{ fontWeight: "bold" }}>Description:</MediumText>
          <MediumText style={{ marginBottom: "16px" }}>
            {description}
          </MediumText>
        </>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={detailUrl ? detailUrl : "#"}>
          <Button type="primary" danger>
            Detail
          </Button>
        </Link>
        <Link to={editUrl ? editUrl : "#"}>
          <Button style={{ marginLeft: 16 }} type="primary">
            Edit
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Entity;
