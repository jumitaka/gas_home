/* 
  トリガー作成
 */
function createTrigger(functionName, durationMinutes) {
  if(durationMinutes <= 0)
  {
    functionName();
  }

  var durationMilliseconds = durationMinutes * 60 * 1000;

  var trigger = ScriptApp.newTrigger(functionName).timeBased().after(durationMilliseconds).create();
}

function createTriggerDate(functionName, triggerDate) {
  var trigger = ScriptApp.newTrigger(functionName).timeBased().at(triggerDate).create();
}

/* 
  トリガー削除
 */
function deleteTrigger(functionName) {
  ScriptApp.getProjectTriggers().filter(
    function (trigger) {
      return trigger.getHandlerFunction() == functionName
    }
  ).forEach(
    function (trigger) {
      ScriptApp.deleteTrigger(trigger);
    }
  );
}