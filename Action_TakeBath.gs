class Action_TakeBath extends Action {
  execGet() {
    createSchedule_takeBath();
    takeBath();

    return undefined;
  }

  getParameterName() {
    return PARAM_TAKEBATH;
  }
}

const PARAM_TAKEBATH = 'takeBath';
const BATH_FLAG = 'BathFlag';

function createSchedule_takeBath() {
  deleteTrigger(takeBath_In720Minutes.name);
  createTrigger(takeBath_In720Minutes.name, 720);
}

function takeBath_In720Minutes() {
  resetBathFlag();

  deleteTrigger(arguments.callee.name);
}

function takeBath() {
  PropertiesService.getScriptProperties().setProperty(getBathFlagName(), true);
}

function getBathFlag() {
  var strFlg = PropertiesService.getScriptProperties().getProperty(getBathFlagName());

  if (!strFlg) {
    return false;
  }

  return toBoolean(strFlg);
}

function getBathFlagName() {
  return BATH_FLAG;
}

function resetBathFlag() {
  PropertiesService.getScriptProperties().setProperty(getBathFlagName(), false);
}