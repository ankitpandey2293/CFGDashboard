'Declare Variables
Dim strHost
Dim strService
Dim strOutput

'Taking in the input arguments
strHost = Wscript.Arguments.Item(0)
strService = Wscript.Arguments.Item(1)

'Connect to host via impersonation and run query on WMI
Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & strHost & "\root\cimv2")
Set colRunningServices = objWMIService.ExecQuery("Select * from Win32_Service WHERE DisplayName = '" & strService & "'")

'Get status
For Each objService In colRunningServices
	strOutput = objService.State
Next

'Output the status
WScript.StdOut.Write strOutput



