Dim objXmlHttpMain , URL

strJSONToSend = {"appName": "", "serverName": "", "parameter": "", "status": "", "message":"","timeStamp":"" }

URL="https://localhost:15001/api/postServerData" 
Set objXmlHttpMain = CreateObject("Msxml2.ServerXMLHTTP") 
on error resume next 
objXmlHttpMain.open "POST",URL, False 
objXmlHttpMain.setRequestHeader "x-access-token", "Bearer <api secret id>"
objXmlHttpMain.setRequestHeader "Content-Type", "application/json"


objXmlHttpMain.send strJSONToSend

set objJSONDoc = nothing 
set objResult = nothing