function doDebug() {
  var e　= {'parameter': {'aircon':32}};

  doPost(e);
}

function doPost(e) {
  // GASが302を返すと、IFTTTで制御不可となるため未使用
  Logger.log(e);
  
  return ContentService.createTextOutput("Done.");
}

function doGet(e) {
  Logger.log(e);

  var con = [
      new Action_GoingToBed(),
      new Action_TakeBath(),
      new Action_WakeUp(),
      new Action_ToggleAircon()
      ];


  const targetAction = con.find(trigger => trigger.isTarget(e));

  if(targetAction === undefined)
  {
    return ContentService.createTextOutput("No Exec.");
  }

  payload = JSON.stringify(targetAction.execGet());

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  // return response-data
  return output;
}