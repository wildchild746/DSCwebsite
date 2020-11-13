import React from "react";
import "./Member.css";

const Member = (props) => (
  <div className="container-fluid" id="Member">
    <div className="row">
      <div className="col-8">
        <div className="row">
          <h4 className="ml-auto text-right">{props.Name}</h4>
        </div>
        <div className="row">
          <h5 className="ml-auto text-right font-weight-bold">{props.Team}</h5>
        </div>
        <div className="row">
          <h5 className="ml-auto text-right">{props.Role}</h5>
        </div>
      </div>
      <div className="col">
        <img
          id="MemberImage"
          className="rounded-circle"
          src={props.Image}
          alt={`${props.Name} - Image`}
        />
      </div>
    </div>
    <div className="row">
      <h5 className="ml-auto text-right font-italic">{props.Description}</h5>
    </div>
    <div className="row">
      <button className="btn btn-outline-primary ml-auto">Know more</button>
    </div>
  </div>
);

export default Member;
