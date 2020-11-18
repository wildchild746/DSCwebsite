import React from "react";
import "./Member.css";

const Member = (props) => {
  return (
    <div
      className={`container p-0 ${
        props.dark === 1 ? "text-light" : "text-dark"
      }`}
      id="Member"
    >
      <div className="row">
        {props.side === "right" ? (
          <div className="col p-1">
            <img
              id="MemberImage"
              className="rounded-circle"
              src={props.Image}
              alt={props.Name}
              style={{ borderColor: props.dark === 1 ? "#fff" : "#9a9a9a" }}
            />
          </div>
        ) : (
          ""
        )}
        <div className="col-8 my-auto">
          <div className="row">
            <h4
              className={`m-0 ${
                props.side === "left"
                  ? "ml-auto text-right"
                  : "mr-auto text-left"
              }`}
            >
              {props.Name}
            </h4>
          </div>
          <div className="row">
            <h6
              className={`m-0 ${
                props.side === "left"
                  ? "ml-auto text-right"
                  : "mr-auto text-left"
              } font-weight-bold`}
            >
              {props.Team}
            </h6>
          </div>
          <div className="row">
            <h6
              className={`font-italic m-0 ${
                props.side === "left"
                  ? "ml-auto text-right"
                  : "mr-auto text-left"
              }`}
            >
              {props.Role}
            </h6>
          </div>
        </div>
        {props.side === "left" ? (
          <div className="col p-1">
            <img
              id="MemberImage"
              className={`rounded-circle`}
              src={props.Image}
              alt={props.Name}
              style={{ borderColor: props.dark === 1 ? "#fff" : "#9a9a9a" }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="row">
        <p
          className={`${
            props.side === "left" ? "ml-auto text-right" : "mr-auto text-left"
          } font-italic`}
        >
          {props.Description}
        </p>
      </div>
      <div className="row">
        <button
          className={`btn btn-outline-primary ${
            props.side === "left" ? "ml-auto" : "mr-auto"
          }`}
        >
          Know more
        </button>
      </div>
    </div>
  );
};

export default Member;
