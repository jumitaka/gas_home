class Action_AlermClockReschedule extends Action {
  execGet() {
    alermClock();
    currentMonthHoliday();

    return undefined;
  }
  getParameterName() {
    return PARAM_ALERMCLOCKRESCHEDULE;
  }
}

const PARAM_ALERMCLOCKRESCHEDULE = 'AlermClockReschedule';