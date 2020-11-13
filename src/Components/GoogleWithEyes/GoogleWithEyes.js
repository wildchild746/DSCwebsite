import React from "react";
import Google from "../../Resources/Vectors/Google.svg";
import "./GoogleWithEyes.css";

const GoogleWithEyes = () => {
  const _onMouseHover = (e) => {
    let eyes = document.querySelectorAll(".eye");
    eyes.forEach(function (eye) {
      let eyeBall = eye.getElementsByClassName("eyeball")[0],
        pupil = eye.getElementsByClassName("pupil")[0],
        glare = eye.getElementsByClassName("glare")[0],
        eyeR = eyeBall.r.baseVal.value,
        pupilR = pupil.rx.baseVal.value,
        glareR = glare.rx.baseVal.value,
        bound = eyeBall.getBoundingClientRect(),
        cx = bound.left + eyeR,
        cy = bound.bottom - eyeR,
        x = e.clientX - cx,
        y = e.clientY - cy,
        d = Math.sqrt(x * x + y * y),
        theta = Math.atan2(y, x),
        angle = (theta * 180) / Math.PI + 360;

      let max = 200.0;
      if (d > max) d = max;

      let t = (d / max) * (eyeR - pupilR),
        t2 = (d / max) * (eyeR - glareR);

      pupil.style.transform = `translate(${t + "px"}) rotate(${angle + "deg"})`;
      pupil.style.transformOrigin = `${eyeBall.cx.baseVal.value - t + "px"} ${
        eyeBall.cy.baseVal.value + "px"
      }`;

      glare.style.transform = `translate(${t2 + "px"}) rotate(${
        angle + "deg"
      })`;
      glare.style.transformOrigin = `${eyeBall.cx.baseVal.value - t2 + "px"} ${
        eyeBall.cy.baseVal.value + "px"
      }`;
    });
  };
  const _onMouseOut = () => {
    let eyes = document.querySelectorAll(".eye");
    eyes.forEach(function (eye) {
      let eyeBall = eye.getElementsByClassName("eyeball")[0],
        pupil = eye.getElementsByClassName("pupil")[0],
        glare = eye.getElementsByClassName("glare")[0];
      pupil.style.transformOrigin = `${eyeBall.cx.baseVal.value + "px"} ${
        eyeBall.cy.baseVal.value + "px"
      }`;
      glare.style.transformOrigin = `${eyeBall.cx.baseVal.value + "px"} ${
        eyeBall.cy.baseVal.value + "px"
      }`;
    });
  };
  return (
    <div
      id="GoogleWithEyes"
      onMouseMove={this._onMouseHover}
      onMouseOut={this._onMouseOut}
      ref="GoogleWithEyes"
    >
      <img id="G" src={Google} alt="Google" />
      <svg
        width="389"
        height="184"
        viewBox="0 0 389 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="Eyes"
      >
        <g class="eye">
          <circle
            class="eyeball"
            fill-rule="evenodd"
            clip-rule="evenodd"
            cx="131"
            cy="92"
            r="42"
            fill="white"
          />
          <ellipse
            class="pupil"
            fill="#000000"
            fill-rule="evenodd"
            clip-rule="evenodd"
            cx="131"
            cy="92"
            rx="14.829"
            ry="16.062"
          />
          <ellipse
            class="glare"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#FFFFFF"
            cx="131"
            cy="92"
            rx="3.496"
            ry="4.082"
          />
        </g>
        <g class="eye">
          <circle
            class="eyeball"
            fill-rule="evenodd"
            clip-rule="evenodd"
            cx="258"
            cy="87"
            r="42"
            fill="white"
          />
          <ellipse
            class="pupil"
            fill="#000000"
            fill-rule="evenodd"
            clip-rule="evenodd"
            cx="258"
            cy="87"
            rx="14.582"
            ry="16.062"
          />
          <ellipse
            class="glare"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#FFFFFF"
            cx="258"
            cy="87"
            rx="3.438"
            ry="4.082"
          />
        </g>
      </svg>
    </div>
  );
};

export default GoogleWithEyes;
