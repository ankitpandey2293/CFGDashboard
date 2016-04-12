'Declare Variables
Dim strHost
Dim strOutput
Dim intLog
Dim intEvent
Dim intCount

'Taking in the input arguments
strHost = Wscript.Arguments.Item(0)
intLog = Wscript.Arguments.Item(1)
intEvent = Wscript.Arguments.Item(2)

Const CONVERT_TO_LOCAL_TIME = True


intCount = 0 
Set dtmStartDate = CreateObject("WbemScripting.SWbemDateTime")
dtmStartDate.SetVarDate DateAdd("n", -480, Now) ' CONVERT_TO_LOCAL_TIME

strQuery = "Select * from Win32_NTLogEvent Where EventType = '" & intEvent & "' and " & "Logfile = '" & intLog & "' and " & "TimeWritten > '" & dtmStartDate & "'" 

'Connect to host via impersonation and run query on WMI
Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & strHost & "\root\cimv2")
Set colEvents = objWMIService.ExecQuery(strQuery) 

'Get status
intMax = 0

For Each objEvent In colEvents
	intCount = intCount + 1
Next

If intEvent = 1 Then
		strOutput = "Error(s) = " & vbTab & intCount
	ElseIf intEvent = 2 Then
		strOutput = "Warning(s) = " & vbTab & intCount
	ElseIf intEvent = 3 Then
		strOutput = "Infomation = " & vbTab & intCount
	ElseIf intEvent = 4 Then
		strOutput = "Security Audit Success = " & vbTab & intCount
	ElseIf intEvent = 5 Then
		strOutput = "Security Audit Failure = " & vbTab & intCount
End If
  
'Output the status
WScript.StdOut.Write strOutput