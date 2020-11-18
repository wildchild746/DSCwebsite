import React from "react";
import CubeBlue from "../../Resources/Vectors/CubeBlue.svg";
import CubeYellow from "../../Resources/Vectors/CubeYellow.svg";
import CubeRed from "../../Resources/Vectors/CubeRed.svg";
import CubeGreen from "../../Resources/Vectors/CubeGreen.svg";
import TriangleBlue from "../../Resources/Vectors/TriangleBlue.svg";
import TriangleYellow from "../../Resources/Vectors/TriangleYellow.svg";
import TriangleRed from "../../Resources/Vectors/TriangleRed.svg";
import TriangleGreen from "../../Resources/Vectors/TriangleGreen.svg";
import HexagonsSolid from "../../Resources/Vectors/HexagonsSolid.svg";
import Hexagons from "../../Resources/Vectors/Hexagons.svg";
import CircleRed from "../../Resources/Vectors/CircleRed.svg";
import PatternRed from "../../Resources/Vectors/PatternRed.svg";
import PatternGreen from "../../Resources/Vectors/PatternGreen.svg";
import PatternYellow from "../../Resources/Vectors/PatternYellow.svg";
import "./Background.css";

const Background = (props) => {
  var backgrounds = [];
  for (var i = 1; i < props.repeat + 1; i++) {
    backgrounds.push(
      <div id="background" key={i}>
        <img
          id="cube1"
          className="FloatY"
          src={CubeBlue}
          alt="CubeBlue"
          style={{ "--bg": i }}
        />
        <img
          id="cube2"
          className="FloatX"
          src={CubeYellow}
          alt="CubeYellow"
          style={{ "--bg": i }}
        />
        <img
          id="cube3"
          className="FloatX"
          src={CubeGreen}
          alt="CubeGreen"
          style={{ "--bg": i }}
        />
        <img
          id="cube4"
          className="FloatY"
          src={CubeRed}
          alt="CubeRed"
          style={{ "--bg": i }}
        />
        <div id="spiral1" className="Spiral" style={{ "--bg": i }} />
        <div id="spiral2" className="Spiral" style={{ "--bg": i }} />
        <div id="triangleGroup1" style={{ "--bg": i }}>
          <img className="Wave1" src={TriangleBlue} alt="TriangleBlue" />
          <img className="Wave2" src={TriangleBlue} alt="TriangleBlue" />
          <img className="Wave3" src={TriangleBlue} alt="TriangleBlue" />
          <img className="Wave4" src={TriangleBlue} alt="TriangleBlue" />
          <img className="Wave5" src={TriangleBlue} alt="TriangleBlue" />
        </div>
        <div id="triangleGroup2" style={{ "--bg": i }}>
          <img className="Wave6" src={TriangleYellow} alt="TriangleYellow" />
          <img className="Wave7" src={TriangleYellow} alt="TriangleYellow" />
          <img className="Wave8" src={TriangleYellow} alt="TriangleYellow" />
          <img className="Wave9" src={TriangleYellow} alt="TriangleYellow" />
          <img className="Wave10" src={TriangleYellow} alt="TriangleYellow" />
        </div>
        <div id="triangleGroup3" style={{ "--bg": i }}>
          <img className="Wave11" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave12" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave13" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave14" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave15" src={TriangleGreen} alt="TriangleGreen" />
        </div>
        <div id="triangleGroup4" style={{ "--bg": i }}>
          <img className="Wave3" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave4" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave5" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave6" src={TriangleGreen} alt="TriangleGreen" />
          <img className="Wave7" src={TriangleGreen} alt="TriangleGreen" />
        </div>
        <div id="triangleGroup5" style={{ "--bg": i }}>
          <img className="Wave5" src={TriangleRed} alt="TriangleRed" />
          <img className="Wave6" src={TriangleRed} alt="TriangleRed" />
          <img className="Wave7" src={TriangleRed} alt="TriangleRed" />
          <img className="Wave8" src={TriangleRed} alt="TriangleRed" />
          <img className="Wave9" src={TriangleRed} alt="TriangleRed" />
        </div>
        <img
          id="hexagonsSolid1"
          className="GrowShrink"
          src={HexagonsSolid}
          alt="HexagonsSolid"
          style={{ "--bg": i }}
        />
        <img
          id="hexagonsSolid2"
          className="GrowShrink"
          src={HexagonsSolid}
          alt="HexagonsSolid"
          style={{ "--bg": i }}
        />
        <img
          id="hexagonsSolid3"
          className="GrowShrink"
          src={HexagonsSolid}
          alt="HexagonsSolid"
          style={{ "--bg": i }}
        />
        <img
          id="hexagonsSolid4"
          className="GrowShrink"
          src={HexagonsSolid}
          alt="HexagonsSolid"
          style={{ "--bg": i }}
        />
        <img
          id="hexagons1"
          className="GrowShrink"
          src={Hexagons}
          alt="Hexagons"
          style={{ "--bg": i }}
        />
        <img
          id="hexagons2"
          className="GrowShrink"
          src={Hexagons}
          alt="Hexagons"
          style={{ "--bg": i }}
        />
        <div id="circlesGroup1" style={{ "--bg": i }}>
          <div>
            <img className="Wave6" src={CircleRed} alt="CircleRed" />
            <img className="Wave7" src={CircleRed} alt="CircleRed" />
            <img className="Wave8" src={CircleRed} alt="CircleRed" />
            <img className="Wave9" src={CircleRed} alt="CircleRed" />
            <img className="Wave10" src={CircleRed} alt="CircleRed" />
            <img className="Wave11" src={CircleRed} alt="CircleRed" />
          </div>
          <div>
            <img className="Wave6" src={CircleRed} alt="CircleRed" />
            <img className="Wave7" src={CircleRed} alt="CircleRed" />
            <img className="Wave8" src={CircleRed} alt="CircleRed" />
            <img className="Wave9" src={CircleRed} alt="CircleRed" />
            <img className="Wave10" src={CircleRed} alt="CircleRed" />
            <img className="Wave11" src={CircleRed} alt="CircleRed" />
          </div>
          <div>
            <img className="Wave6" src={CircleRed} alt="CircleRed" />
            <img className="Wave7" src={CircleRed} alt="CircleRed" />
            <img className="Wave8" src={CircleRed} alt="CircleRed" />
            <img className="Wave9" src={CircleRed} alt="CircleRed" />
            <img className="Wave10" src={CircleRed} alt="CircleRed" />
            <img className="Wave11" src={CircleRed} alt="CircleRed" />
          </div>
          <div>
            <img className="Wave6" src={CircleRed} alt="CircleRed" />
            <img className="Wave7" src={CircleRed} alt="CircleRed" />
            <img className="Wave8" src={CircleRed} alt="CircleRed" />
            <img className="Wave9" src={CircleRed} alt="CircleRed" />
            <img className="Wave10" src={CircleRed} alt="CircleRed" />
            <img className="Wave11" src={CircleRed} alt="CircleRed" />
          </div>
        </div>
        <img
          id="pattern1"
          src={PatternRed}
          alt="PatternRed"
          style={{ "--bg": i }}
        />
        <img
          id="pattern2"
          src={PatternGreen}
          alt="PatternGreen"
          style={{ "--bg": i }}
        />
        <img
          id="pattern3"
          src={PatternYellow}
          alt="PatternYellow"
          style={{ "--bg": i }}
        />
      </div>
    );
  }
  return (
    <div>
      <div
        id="backgroundContainer"
        className={props.dark === 1 ? "dark" : ""}
        style={{ "--bg": props.repeat }}
      >
        {backgrounds}
      </div>
      {/* <div id="BackgroundOverlay" /> */}
    </div>
  );
};
export default Background;
