function exec_wakeUp(e)
{
  if (e.parameter == undefined)
  {
    return;
  }
  
  if(e.parameter.wakeUp == undefined)
  {
    return;
  } 
  
  deleteTrigger(goingToBed_In15Minutes.name);
  deleteTrigger(goingToBed_In30Minutes.name);
  deleteTrigger(goingToBed_In120Minutes.name);
}

function createSchedule_wakeUp()
{
  createTrigger(wakeUp_In10Minutes.name, 10);
}

function wakeUp_In10Minutes()
{
  deleteTrigger(goingToBed_In15Minutes.name);
  deleteTrigger(goingToBed_In30Minutes.name);
  deleteTrigger(goingToBed_In120Minutes.name);
  
  deleteTrigger(arguments.callee.name);
}