/* 
  就寝を検知
 */
class Action_GoingToBed extends Action {
  execGet() {
    createSchedule_goingToBed();

    return undefined;
  }

  getParameterName() {
    return PARAM_GOINGTOBED;
  }
}

const PARAM_GOINGTOBED = 'goingToBed';

function createSchedule_goingToBed() {
  createTrigger(goingToBed_In15Minutes.name, 15);
  createTrigger(goingToBed_In30Minutes.name, 30);
  createTrigger(goingToBed_In120Minutes.name, 120);
}

function goingToBed_In15Minutes() {
  execIFTTT(ifttt_HueRelax());

  deleteTrigger(arguments.callee.name);
}

function goingToBed_In30Minutes() {
  if (getBathFlag()) {
    execIFTTT(ifttt_LEDTimer());
    execIFTTT(ifttt_HueOff());
  }

  deleteTrigger(arguments.callee.name);
}

function goingToBed_In120Minutes() {
  execIFTTT(ifttt_ACSleep());

  deleteTrigger(arguments.callee.name);
}