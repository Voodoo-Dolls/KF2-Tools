import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/HealthBar.css";
const HealthBar = () => {
  //Redux
  const { headHealth, bodyHealth, zedObject } = useSelector(
    (state) => state.zed
  );
  const [headPercent, setHeadPercent] = useState("100%");
  const [bodyPercent, setBodyPercent] = useState("100%");

  useEffect(() => {
    if (zedObject) {
      let num = (headHealth / zedObject["head-health"]) * 100;
      num = num.toFixed(2);
      setHeadPercent(num.toString() + "%");
    }
  }, [headHealth]);

  useEffect(() => {
    if (zedObject) {
      let num = (bodyHealth / zedObject["body-health"]) * 100;
      num = num.toFixed(2);
      setBodyPercent(num.toString() + "%");
    }
  }, [bodyHealth]);
  return (
    <div>
      {zedObject && (
        <div className="healthbar_container">
          <span className="health_value">
            {headHealth} / {zedObject["head-health"]}
          </span>
          <div className="healthbar" style={{ width: `${headPercent}` }}></div>
        </div>
      )}
      {zedObject && (
        <div className="healthbar_container">
          <span className="health_value">
            {bodyHealth} / {zedObject["body-health"]}
          </span>
          <div className="healthbar" style={{ width: `${bodyPercent}` }}></div>
        </div>
      )}
    </div>
  );
};

export default HealthBar;
