class Action_ToggleAircon extends Action {
  execGet() {
    toggleAirconFlag();

    return { "value1": getAirconFlag() };
  }

  getParameterName() {
    return PARAM_AIRCON;
  }
}

const PARAM_AIRCON = 'aircon';
const AIRCON_FLAG = 'AirconFlag';

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
  return AIRCON_FLAG;
}