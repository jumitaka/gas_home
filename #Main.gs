function doPost(e) {
  Logger.log(e);

  exec_goingToBed(e);
  exec_takeBath(e);
  exec_wakeUp(e);
  exec_aircon(e);
  
  return ContentService.createTextOutput("Done.");
}

function doGet(e) {
  Logger.log(e);

  payload = JSON.stringify(getAirconStatus(e));

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  // return response-data
  return output;
}