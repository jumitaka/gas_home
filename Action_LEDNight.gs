class Action_LEDNight extends Action {
  execGet() {
    // トリガー削除
    deleteTrigger(ledLivingNight.name);

    // トリガー作成
    ledBedNight();
    createTrigger(ledLivingNight.name, 2);

    return undefined;
  }

  getParameterName() {
    const PARAM_LEDNight = 'LEDNight';
    return PARAM_LEDNight;
  }
}

function ledLivingNight() {
  execIFTTT(ifttt_LEDLivingNight());

  deleteTrigger(arguments.callee.name);
}

function ledBedNight() {
  execIFTTT(ifttt_LEDBedNight());

  deleteTrigger(arguments.callee.name);
}