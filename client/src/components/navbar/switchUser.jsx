import Switch from "react-switch";

const SwitchUser = ({checked, handleChange = f => f}) => {
  return (
    <div id="switch">
      <span id="switch-label">{checked ? "Admin" : "User"}</span>
      <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
    </div>
  );
};

export default SwitchUser;
