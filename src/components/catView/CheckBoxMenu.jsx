import CheckBox from "./CheckBox";
import React from "react";
const CheckBoxMenu = (props) => {
  const onEnabledChange = (e) => {
    props.isEnableCheck(!props.enableCheck);
  };
  const onAutoRefrashdChange = (e) => {
    props.isAutoRefreshCheck(!props.autoRefreshCheck);
  };

  return (
    <div>
      <CheckBox
        name={"Enabled"}
        checked={props.enableCheck}
        onChange={onEnabledChange}
      />
      <CheckBox
        name={"Auto-refresh every 5 seconds"}
        checked={props.autoRefreshCheck}
        onChange={onAutoRefrashdChange}
      />
    </div>
  );
};

export default CheckBoxMenu;
