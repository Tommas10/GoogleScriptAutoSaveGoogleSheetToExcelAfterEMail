#This is GoogleScriptAutoSaveGoogleSheetToExcelAfterEMail.
#Created by Tommas Huang
#Date: 2020-09-15

function getGoogleSpreadsheetAsExcel(){
  
  try {
    
    var ss = SpreadsheetApp.getActive();    
    var url = "https://docs.google.com/feeds/download/spreadsheets/Export?key=" + ss.getId() + "&exportFormat=xlsx";
    
    var params = {
      method      : "get",
      headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
      muteHttpExceptions: true
    };
    
    var blob = UrlFetchApp.fetch(url, params).getBlob();
    blob.setName(ss.getName() + ".xlsx");
    MailApp.sendEmail("xxxx@gmail.com", "Google Sheet to Excel", "The XLSX file is attached", {attachments: [blob]});
    
  } catch (f) {
    Logger.log(f.toString());
  }
}