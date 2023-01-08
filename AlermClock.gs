function alermClock() {
  var alermClockCalendarId = PropertiesService.getScriptProperties().getProperty('AlermClockCalendarId');
  var calendar = CalendarApp.getOwnedCalendarById(alermClockId);

  var today = new Date();

  var todeySchedules = Calendar.getEventsForDay(today);

  todeySchedules.forEach(schedule => {
    schedule.getStartTime()

    createTriggerDate(hueMorning.name, schedule.getStartTime());
  });

  var hasTrigger = ScriptApp.getProjectTriggers().includes(
    function (trigger) {
      return trigger.getHandlerFunction() == arguments.callee.name
    }
  );

  if(hasTrigger == false)
  {
    var trigger = ScriptApp.newTrigger(arguments.callee.name).timeBased().onMonthDay(28).create();
  }
}

function hueMorning()
{
  execIFTTT(ifttt_HueMorning());
}
