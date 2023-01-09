class Action_AlermClockReschedule extends Action {
  execGet() {
    alermClock();
    currentMonthHoliday();

    return undefined;
  }
  getParameterName() {
    const PARAM_ALERMCLOCKRESCHEDULE = 'AlermClockReschedule';
    return PARAM_ALERMCLOCKRESCHEDULE;
  }
}

