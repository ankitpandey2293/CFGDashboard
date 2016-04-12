'Declare Variables
Dim strHost
Dim strDrive
Dim strOutput
Dim intFreeSpace
Dim intTotalSpace
Dim pctFreeSpace

'Taking in the input arguments
strHost = Wscript.Arguments.Item(0)
strDrive = Wscript.Arguments.Item(1)

'Connect to host via impersonation and run query on WMI
Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & strHost & "\root\cimv2")
Set colDisks = objWMIService.ExecQuery("Select * from Win32_LogicalDisk Where DeviceID ='" & strDrive & "'")

'Get status
For Each objDisk In colDisks
    intFreeSpace = objDisk.FreeSpace
    intTotalSpace = objDisk.Size
    pctFreeSpace = intFreeSpace / intTotalSpace
Next

pctFreeSpace = pctFreeSpace * 100
strOutput = "Disk Util(%) = " & vbTab & pctFreeSpace

'Output the status
WScript.StdOut.Write strOutput
