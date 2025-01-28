import React from "react";
import "./Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faTaxi,
  faFlagCheckered,
  faTrain,
  faShuttleVan,
  faWalking,
  faSignOut,
  faMapMarkerAlt,
  faPlaneArrival,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

// Icon mapping for convenience
const iconMap = {
  bus: faBus,
  taxi: faTaxi,
  "flag-checkered": faFlagCheckered,
  train: faTrain,
  "shuttle-van": faShuttleVan,
  walking: faWalking,
  exit: faSignOut,
};

const Timeline = ({ routes }) => {
  return (
    <div className="transportation-guide">
      {routes.map((route, index) => (
        <div key={index} className="route-section">
          <div className="route-header">
            <h4>{route.title}</h4>
            <p>{route.subtitle}</p>
          </div>
          <div className="simple-timeline">
            {route.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="timeline-item">
                {step.icon && (
                  <div className="timeline-icon" style={{ fontSize: "1.2em" }}>
                    <FontAwesomeIcon icon={iconMap[step.icon]} />
                  </div>
                )}
                <div
                  className="timeline-circle"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 0 0 2px ${step.color}`,
                  }}
                ></div>
                <div className="timeline-content">
                  {step.text}
                  {step.note && (
                    <div className="timeline-note">{step.note}</div>
                  )}
                </div>
                {stepIndex !== route.steps.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
