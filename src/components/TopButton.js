import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../css/common.css";
import "../css/topButton.css";

function TopButton() {
  // const { pathname } = useLocation();

  function clickTopButton() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="topButton" onClick={clickTopButton}>
      ↑
    </div>
  );
}

export default TopButton;
