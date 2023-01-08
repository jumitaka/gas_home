class Action_ToggleAircon extends Action {
  execGet() {
    toggleAirconFlag();

    return { "value1": getAirconFlag() };
  }

  getParameterName() {
    const PARAM_AIRCON = 'aircon';
    return PARAM_AIRCON;
  }
}

function getAirconFlag() {
  var strFlg = PropertiesService.getScriptProperties().getProperty(getAirconFlagName());

  if (!strFlg) {
    return false;
  }

  return toBoolean(strFlg);
}

function toggleAirconFlag() {
  var flag = getAirconFlag();

  PropertiesService.getScriptProperties().setProperty(getAirconFlagName(), !flag);
}

function getAirconFlagName() {
  const AIRCON_FLAG = 'AirconFlag';
  return AIRCON_FLAG;
}