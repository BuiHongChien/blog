import React from "react";
import { useHistory } from "react-router-dom";

const SideBar = ({ barOptions }) => {
  const history = useHistory();

  return (
    <div className="side-bar">
      <div className="side-bar__wrapper">
        {barOptions.map((o) => (
          <div className="side-bar__option">
            <button
              className="button button--side-bar"
              onClick={() => {
                // console.log('button was clicked!')
                history.push(`/more/${o}`);

              }}
            >
              {o}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
