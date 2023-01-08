function alermHoliday(isCurrentMonth) {
  var holidayCalendarId = PropertiesService.getScriptProperties().getProperty('HolidayCalendarId');
  var calendar = CalendarApp.getCalendarById(holidayCalendarId);

  var today = new Date();

  if(isCurrentMonth)
  {
    // true
    var startDate = new Date(today.getTime());
    startDate.setDate(1);
    startDate.setHours(0,0,0);
  }
  else
  {
    //未定義あるいはfalse
    var startDate = nextMonth(today);
  }

  var endDate =  nextMonth(startDate);

  var monthHolidays = calendar.getEvents(startDate, endDate);

  deleteTrigger(tvOff.name);

  monthHolidays.forEach(schedule => {
    var holidayDate = schedule.getStartTime();

    var isWeekEnd = [0, 6].includes(holidayDate.getDay());

    if(isWeekEnd)
    {
      return;
    }

    if(today > holidayDate)
    {
      return;
    }

    var tvOffDate = new Date(holidayDate);
    tvOffDate.setHours(6, 32, 0);

    createTriggerDate(tvOff.name, tvOffDate);
  });

  var methodName = arguments.callee.name;

  var hasTrigger = ScriptApp.getProjectTriggers().filter(
    trigger => {
      return trigger.getHandlerFunction() == methodName
    }
  );
  
  if(hasTrigger.length == 0)
  {
    // 毎月28日に来月分作成
    var trigger = ScriptApp.newTrigger(methodName).timeBased().onMonthDay(28).create();
  }

  function nextMonth(date)
  {
    if (date.getMonth() == 11) {
        var nextMonth = new Date(date.getFullYear() + 1, 0, 1);
    } else {
        var nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }

    return nextMonth;
  }
}

function tvOff()
{
  execIFTTT(ifttt_TvOff());
}

function currentMonthHoliday()
{
  alermHoliday(true);
}