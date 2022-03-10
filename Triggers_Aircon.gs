function exec_aircon(e)
{
  if (e.parameter == undefined)
  {
    return;
  }
  if(e.parameter.aircon == undefined)
  {
    return;
  } 
  
  toggleAirconFlag();
}

function getAirconStatus(e)
{
  if (e.parameter == undefined)
  {
    return;
  }
  if(e.parameter.aircon == undefined)
  {
    return;
  } 
  
  return [getAirconFlag()];
}

function getAirconFlag()
{
  var strFlg = PropertiesService.getScriptProperties().getProperty(getBathFlagName());
  
  if(!strFlg)
  {
    return false;
  }
  
  return toBoolean(strFlg);
}

function toggleAirconFlag()
{
  var flag = getAirconFlag();

  PropertiesService.getScriptProperties().setProperty(getAirconFlagName(), !flag);
}

function getAirconFlagName()
{
  const AIRCON_FLAG = 'AirconFlag';
  return AIRCON_FLAG;
}