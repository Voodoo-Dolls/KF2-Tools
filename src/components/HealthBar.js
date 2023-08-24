import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/HealthBar.css";
const HealthBar = () => {
  //Redux
  const { zedName, headHealth, bodyHealth, zedObject } = useSelector(
    (state) => state.zed
  );
  const [percent, setPercent] = useState("50%");

  useEffect(() => {
    if (zedObject) {
      let num = (headHealth / zedObject["head-health"]) * 100;
      num = num.toFixed(2);
      setPercent(num.toString() + "%");
    }
  }, [headHealth]);
  return (
    <div>
      {zedObject && (
        <div className="healthbar_container">
          <span className="health_value">
            {headHealth} / {zedObject["head-health"]}
          </span>
          <div className="healthbar" style={{ width: `${percent}` }}></div>
        </div>
      )}
    </div>
  );
};

export default HealthBar;
