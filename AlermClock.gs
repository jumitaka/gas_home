function alermClock() {
  var alermClockCalendarId = PropertiesService.getScriptProperties().getProperty('AlermClockCalendarId');
  var calendar = CalendarApp.getOwnedCalendarById(alermClockCalendarId);

  var today = new Date();

  var todeySchedules = calendar.getEventsForDay(today);

  todeySchedules.forEach(schedule => {
    var scheduleTime = schedule.getStartTime();
    scheduleTime.setHours(scheduleTime.getHours() - 1);
    scheduleTime.setMinutes(scheduleTime.getMinutes() - 30);
    
    if(today > scheduleTime)
    {
      return;
    }

    createTriggerDate(hueMorning.name, scheduleTime);
  });

  var methodName = arguments.callee.name;

  deleteTrigger(methodName);

  var hasTrigger = ScriptApp.getProjectTriggers().includes(
    function (trigger) {
      return trigger.getHandlerFunction() == methodName
    }
  );

  if(hasTrigger == false)
  {
    var triggerDate = new Date(today.getTime());
    triggerDate.setDate(triggerDate.getDate() + 1);
    triggerDate.setHours(2, 0, 0);
    createTriggerDate(methodName, triggerDate);
  }
}

function hueMorning()
{
  execIFTTT(ifttt_HueMorning());
}
