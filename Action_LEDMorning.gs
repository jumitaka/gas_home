class Action_LEDMorning extends Action {
  execGet() {
    // トリガー削除
    deleteTrigger(ledBedMorning.name);

    // トリガー作成
    ledLivingMorning();
    createTrigger(ledBedMorning.name, 2);

    return undefined;
  }

  getParameterName() {
    return PARAM_LEDMorning;
  }
}

function ledLivingMorning() {
  execIFTTT(ifttt_LEDLivingMorning());

  deleteTrigger(arguments.callee.name);
}

function ledBedMorning() {
  execIFTTT(ifttt_LEDBedMorning());

  deleteTrigger(arguments.callee.name);
}

const PARAM_LEDMorning = 'LEDMorning';