'Declare Variables
Dim strHost
Dim strOutput
Dim intGB
Dim intUtil
Dim intMaxMem
Dim intMem

'Taking in the input arguments
strHost = Wscript.Arguments.Item(0)

'Connect to host via impersonation and run query on WMI
 Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & strHost & "\root\cimv2")
 Set colItems = objWMIService.ExecQuery("Select * from Win32_PerfFormattedData_PerfOS_Memory", , 48)
 
'Get status
intGB = 1024
intGB = intGB * intGB * intGB

For Each objItem In colItems
	intMaxMem = Round(objItem.CommitLimit / intGB, 3)
    intMem = Round(objItem.CommittedBytes / intGB, 3)
Next

intUtil = intMem / intMaxMem
intUtil = intUtil * 100

 
strOutput = "Mem Util(%) = " & vbTab & intUtil
  
'Output the status
WScript.StdOut.Write strOutput


