import React from "react";
import Member from "../Member/Member";
import "./MemberContainer.css";

const MemberContainer = (props) => (
  <div id="MemberContainer" className="row my-5 my-lg-0">
    {props.side === "left" ? (
      ""
    ) : (
      <div className="d-none overflow-hidden h-100 d-lg-flex v-center p-0 col-lg-6 border-0">
        <img
          src={props.SideImage}
          alt={props.Name}
          className="shadow overflow-hidden mr-0 ml-auto"
          style={{ width: "70%" }}
        />
        <svg
          width={(window.innerWidth / 200) * 15}
          height={window.innerWidth < 992 ? "0" : "4320"}
        >
          <line
            x1={(window.innerWidth / 200) * 15}
            x2={(window.innerWidth / 200) * 15}
            y1="0"
            y2="2146"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <line
            strokeDasharray="2,2"
            x1="0"
            y1="2160"
            x2={(window.innerWidth / 200) * 15 - 17}
            y2="2160"
            stroke={props.dark === 1 ? "white" : "#202020"}
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx={(window.innerWidth / 200) * 15}
            cy="2160"
            r="14"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <line
            x1={(window.innerWidth / 200) * 15}
            x2={(window.innerWidth / 200) * 15}
            y1="2174"
            y2="4320"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
        </svg>
      </div>
    )}
    <div className="v-center overflow-hidden h-100 p-0 col-lg-6 border-0">
      {props.side === "left" ? (
        ""
      ) : (
        <svg width="17" height={window.innerWidth < 992 ? "0" : "4320"}>
          <line
            x1="0"
            x2="0"
            y1="0"
            y2="2146"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <circle
            cx="0"
            cy="2160"
            r="14"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <line
            x1="0"
            x2="0"
            y1="2174"
            y2="4320"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
        </svg>
      )}
      <Member
        Name={props.Name}
        Team={props.Team}
        Role={props.Role}
        Description={props.Description}
        Image={props.ProfilePicture}
        dark={props.dark}
        side={props.side}
      />
      {props.side === "left" ? (
        <svg width="17" height={window.innerWidth < 992 ? "0" : "4320"}>
          <line
            x1="17"
            x2="17"
            y1="0"
            y2="2146"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <circle
            cx="17"
            cy="2160"
            r="14"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <line
            x1="17"
            x2="17"
            y1="2174"
            y2="4320"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
        </svg>
      ) : (
        ""
      )}
    </div>
    {props.side === "left" ? (
      <div className="d-none overflow-hidden h-100 d-lg-flex v-center p-0 col-lg-6 border-0">
        <svg
          width={(window.innerWidth / 200) * 15}
          height={window.innerWidth < 992 ? "0" : "4320"}
          id="MemberSVG"
        >
          <line
            x1="0"
            x2="0"
            y1="0"
            y2="2146"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <circle
            cx="0"
            cy="2160"
            r="14"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
          <line
            strokeDasharray="2,2"
            x1="14"
            y1="2160"
            x2={(window.innerWidth / 200) * 15}
            y2="2160"
            stroke={props.dark === 1 ? "white" : "#202020"}
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="0"
            x2="0"
            y1="2174"
            y2="4320"
            style={{
              fill: "none",
              stroke: props.dark === 1 ? "white" : "#202020",
              strokeWidth: window.innerWidth < 992 ? "0" : "6px",
            }}
          />
        </svg>
        <img
          src={props.SideImage}
          alt={props.Name}
          className="shadow overflow-hidden ml-0"
          style={{ width: "70%" }}
        />
      </div>
    ) : (
      ""
    )}
  </div>
);

export default MemberContainer;
