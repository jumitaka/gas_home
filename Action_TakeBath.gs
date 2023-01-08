class Action_TakeBath extends Action {
  execGet() {
    createSchedule_takeBath();
    takeBath();

    return undefined;

    function createSchedule_takeBath() {
      deleteTrigger(takeBath_In720Minutes.name);
      createTrigger(takeBath_In720Minutes.name, 720);
    }
  }

  getParameterName() {
    const PARAM_TAKEBATH = 'takeBath';
    return PARAM_TAKEBATH;
  }
}

const BATH_FLAG = 'BathFlag';

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