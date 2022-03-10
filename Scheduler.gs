function createTrigger(functionName, durationMinutes)
{
  var durationMilliseconds = durationMinutes * 60 * 1000;

  var trigger = ScriptApp.newTrigger(functionName).timeBased().after(durationMilliseconds).create();
}

function deleteTrigger(functionName)
{
  ScriptApp.getProjectTriggers().filter(
    function(trigger){
      return trigger.getHandlerFunction() == functionName
    }
  ).forEach(
    function(trigger){
      ScriptApp.deleteTrigger(trigger);
    }
  );
}