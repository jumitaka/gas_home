
function ifttt_HueRelax() {
  const HUERelax = 'hueRelax';
  return HUERelax;
}

function ifttt_HueOff() {
  const HUEOFF = 'hueOff';
  return HUEOFF;
}

function ifttt_ACSleep() {
  const ACSLEEP = 'acSleep';
  return ACSLEEP;
}

function ifttt_LEDBedMorning() {
  const LEDBedMorning = 'LEDBedMorning';
  return LEDBedMorning;
}

function ifttt_LEDBedNight() {
  const LEDBedNight = 'LEDBedNight';
  return LEDBedNight;
}

function ifttt_LEDLivingMorning() {
  const LEDLivingMorning = 'LEDLivingMorning';
  return LEDLivingMorning;
}

function ifttt_LEDLivingNight() {
  const LEDLivingNight = 'LEDLivingNight';
  return LEDLivingNight;
}

/* 
  IFTTTリクエスト呼び出し
  key情報は、プロジェクトのプロパティIFTTTKEYにて保持
 */
function execIFTTT(event) {

  const IFTTTKEY = "IFTTT_Key";
  var ifttt_key = PropertiesService.getScriptProperties().getProperty(IFTTTKEY);
  var urlFormat = "https://maker.ifttt.com/trigger/{event}/with/key/dHHa4DlVYPC2MIwtDndpvO"

  var options =
  {
    "method": "post"
  };

  UrlFetchApp.fetch(urlFormat.replace('{event}', event), options);
}