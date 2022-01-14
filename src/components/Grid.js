import React from "react";
import GridCard from "./GridCard";
import { Container, Row, Col } from "react-grid";
import "../stylesheets/Grid.css";
class Grid extends React.Component {
  render() {
    return (
      <Container fluid className="grid">
        <Row>
          {this.props.item.map((f, index) => (
            <Col className="col-lg-4 ml-5">
              <GridCard
                key={f["_id"]}
                name={f["Name"]}
                image_url={f["Icon Image"]}
                price={f["Sell"]}
                location={f["Where"]["How"]}
                shadow_size={f["Shadow"]}
                description={f["Description"]}
                catch_difficulty={f["Catch Difficulty"]}
                weather={f["Weather"]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Grid;
