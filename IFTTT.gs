function ifttt_HueRelax()
{
  const HUERelax = 'hueRelax';
  return HUERelax;
}

function ifttt_HueOff()
{
  const HUEOFF = 'hueOff';
  return HUEOFF;
}

function ifttt_ACSleep()
{
  const ACSLEEP = 'acSleep';
  return ACSLEEP;
}

function execIFTTT(event)
{
  
  const IFTTTKEY = "IFTTT_Key";
  var ifttt_key = PropertiesService.getScriptProperties().getProperty(IFTTTKEY);
  var urlFormat = "https://maker.ifttt.com/trigger/{event}/with/key/dHHa4DlVYPC2MIwtDndpvO"
  
  var options =
      {
        "method" : "post"
      };
  
  UrlFetchApp.fetch(urlFormat.replace('{event}', event), options);
}