'Declare Variables
Dim strHost
Dim strOutput
Dim intMax

'Taking in the input arguments
strHost = Wscript.Arguments.Item(0)

'Connect to host via impersonation and run query on WMI
Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & strHost & "\root\cimv2")
Set CPUInfo = objWMIService.ExecQuery("SELECT * FROM Win32_PerfFormattedData_PerfOS_Processor", , 48)

'Get status
intMax = 0

For Each Item In CPUInfo
    If Item.PercentProcessorTime > intMax Then
        intMax = Item.PercentProcessorTime
    End If
Next


strOutput = "CPU Util(%) = " & vbTab & intMax
  
'Output the status
WScript.StdOut.Write strOutput



