import React from "react";
import {
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack
} from "react-ui-cards";
import { Container, Row, Col } from "react-grid";
class GridCard extends React.Component {
  getShadowSize() {
    if (this.props.shadow_size == null) {
      return "";
    } else {
      return "Shadow Size: " + this.props.shadow_size;
    }
  }
  getWeather() {
    if (this.props.weather == null) {
      return "";
    } else {
      return "Weather: " + this.props.weather;
    }
  }

  getCatchDifficulty() {
    if (this.props.catch_difficulty == null) {
      return "";
    } else {
      return "Catch Difficulty: " + this.props.catch_difficulty;
    }
  }
  render() {
    return (
      <div>
        <FlippingCard float className="mx-auto">
          <FlippingCardFront float>
            <div
              class="container-fluid"
              style={{
                width: "100%",
                height: "100%",
                backgroundPosition: "left",
                backgroundColor: "#95d6c0"
              }}
            >
              <img alt="Photo" src={this.props.image_url} />
              <h4> Name: {this.props.name} </h4>
              <h5> Price: {this.props.price} Bells </h5>
              <h5> Location: {this.props.location} </h5>
              <h5> {this.getShadowSize()} </h5>
              <h5> {this.getCatchDifficulty()} </h5>
              <h5> {this.getWeather()} </h5>
            </div>
          </FlippingCardFront>
          <FlippingCardBack>
            <div
              className="container-fluid"
              style={{
                width: "100%",
                height: "100%",
                backgroundPosition: "left",
                backgroundColor: "#95d6c0"
              }}
            >
              <Container fluid>
                <p> Description: {this.props.description} </p>
              </Container>
            </div>
          </FlippingCardBack>
        </FlippingCard>
      </div>
    );
  }
}

export default GridCard;
