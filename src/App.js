import React, { useState } from "react";
import "./styles.css";
import Grid from "./components/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import Fish from "./data/Fish";
import Insects from "./data/Insects";
import SeaCreatures from "./data/SeaCreatures";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Logo from "./photos/logo.PNG";
import Image from "react-bootstrap/Image";
export default function App() {
  const [radioValue, setRadioValue] = useState("1");
  const items = [
    { name: "Fish", item: Fish, value: "1" },
    { name: "Insects", item: Insects, value: "2" },
    { name: "SeaCreatures", item: SeaCreatures, value: "3" }
  ];
  return (
    <div className="App">
      <div>
        <Image className="py-3 img-fluid" src={Logo} alt="Logo" />
      </div>
      <ButtonGroup className="py-3">
        {items.map((radio, idx) => (
          <ToggleButton
            className="btn"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-success"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <Grid item={items[radioValue - 1]["item"]} />
    </div>
  );
}
