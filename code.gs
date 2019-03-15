// Code.gs
function doGet(e) {
  Maps.setAuthentication(null,null);
  return HtmlService
  .createTemplateFromFile("index")
  .evaluate()
  .setTitle("Google Spreadsheet Chart")
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
}

function getSpreadsheetDataForBarChart() {
  
  var ssID   = "**SpreadsheetID**",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[0],
      data   = sheet.getDataRange().getValues();
     
  return data;
    
}

function getSpreadsheetDataForMap() {
  
  var ssID   = "**SpreadsheetID**",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[1],
      data   = sheet.getDataRange().getValues();
  
  return data;
    
}

function getSpreadsheetDataForPieChart() {
  
  var ssID   = "**SpreadsheetID**",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[2],
      data   = sheet.getDataRange().getValues();
  
  return data;
    
}

function getSpreadsheetMiles(){
 var ssID   = "**SpreadsheetID**",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[3],
      response   = sheet.getDataRange().getValues();
  var data=0;
  
  for(i=1;i<response.length;i++){
  data=data+response[i][1];
  }
  return data;


}


function getSheetForCalender() {
  
  var ssID   = "**SpreadsheetID**",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[5],
      data   = sheet.getDataRange().getDisplayValues();
   return data;
    
}

function getSheetForMapConnection(){
var ssID   = "**SpreadsheetID**",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[4],
      data   = sheet.getDataRange().getDisplayValues();
   return data;
}

function getSheetForWordCloud(){
var ssID   = "**SpreadsheetID**",
      sheet  = SpreadsheetApp.openById(ssID).getSheets()[6],
      data   = sheet.getDataRange().getDisplayValues();
   return data;
}
