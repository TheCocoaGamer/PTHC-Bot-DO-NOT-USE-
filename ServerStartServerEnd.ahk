#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
ControlSend,,Mode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance force
#UseHook
SetKeyDelay , 30, 30

Loop 
{
	FileRead, line,C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted.txt
	
    if InStr(line, "started"){
	
	
	
	FileRead, numbers, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\logging\numbers.txt
	
	newnumbers := numbers + 1
	
	FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\logging\numbers.txt
	FileAppend ,%newnumbers%, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\logging\numbers.txt
	
	WinClose, ahk_exe TerrariaServer.exe
	WinClose, ahk_exe cmd.exe
	
	Run, cmd.exe
	
	sleep 5000
	ControlSend,,cd C`:, ahk_exe cmd.exe
	sleep 1000
	ControlSend,,`\, ahk_exe cmd.exe
	sleep 1000
	ControlSend,,Users\ZebraBoiGamer\Desktop\Folders\Tshock_Server, ahk_exe cmd.exe
	sleep 100
	ControlSend,,{Enter} , ahk_exe cmd.exe
	sleep 100
	ControlSend,,echo , ahk_exe cmd.exe
	sleep 100
	ControlSend,,{Enter} , ahk_exe cmd.exe
	sleep 100
	ControlSend,,setlocal , ahk_exe cmd.exe
	sleep 100
	ControlSend,,{Enter} , ahk_exe cmd.exe
	sleep 100
	ControlSend,,TerrariaServer , ahk_exe cmd.exe
	sleep 100
	ControlSend,,{Enter} , ahk_exe cmd.exe
	
	sleep 5000


	ControlSend,,d 1 , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
	ControlSend,,y , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
	
	
	ControlSend,,n , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
	
	
	FileRead, worldSize, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\worldSize.txt 
	ControlSend,,%worldSize% , ahk_exe cmd.exe
	ControlSend,,{Enter}  , ahk_exe cmd.exe
	
		
	FileRead, difficulty, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\difficulty.txt
	ControlSend,,%difficulty% , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
	
		
	FileRead, evil, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\worldEvil.txt
	ControlSend,,%evil% , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe

	
	FileRead, thcAmount, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\thcAmount.txt
	ControlSend,,{!}%thcAmount% , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
	
	
	ControlSend,,{Enter} , ahk_exe cmd.exe
	
	sleep 10000
	
	
	ControlSend,,1 , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
 
 	
	FileRead, maxPlayer, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\maxPlayerAmount.txt 
	ControlSend,,%maxPlayer% , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
	
	ControlSend,,7778 , ahk_exe cmd.exe
	 ControlSend,,{Enter} , ahk_exe cmd.exe
	 

	 ControlSend,,{Enter} , ahk_exe cmd.exe
	 

	 ControlSend,,{Enter} , ahk_exe cmd.exe
	 
	 
	

	FileRead, graceTime, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\graceTime.txt
	ControlSend,,grace begin %graceTime%m , ahk_exe cmd.exe
	ControlSend,,{Enter} , ahk_exe cmd.exe
	terrariaTime := graceTime * 60000

	FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt
	FileAppend ,1, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt

	sleep 180000
	sleep terrariaTime

	FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt
	FileAppend ,0, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt


	Clipboard:=
	
	loop {
	
	sleep 1000
	
	ControlSend,,playing , ahk_exe cmd.exe
	sleep 100
	ControlSend,,{Enter} , ahk_exe cmd.exe
	sleep 100
	ControlSend,,^a, ahk_exe cmd.exe
	sleep 100
	ControlSend,,^c, ahk_exe cmd.exe
	sleep 100
	
	If InStr(clipboard, "Online Players (1/69)"){
		break
		}
	}
	

	
	lastWords := SubStr(clipboard, -30)
	lineNum := 10
	FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\endLine.txt
	FileAppend ,%lastWords%, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\endLine.txt
	fml := 0
	loop{
	
	FileReadLine, endLine, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\endLine.txt, lineNum


	if ErrorLevel
	{
	lineNum := lineNum - 1
	} 
	
	else 
	{
	if (fml = 0)
	{
	lineNum := lineNum - 1
	fml := 1
	} 
	else{
	break
	}
	}
	}
	
	FileAppend ,%Clipboard%, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\logging\%newnumbers%.txt
	FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted.txt
	FileAppend ,%endline%, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted.txt
	ControlSend,,`exit, ahk_exe cmd.exe
	ControlSend,,{Enter}, ahk_exe cmd.exe
	
	
	Clipboard:=
		
	Reload
	
	}
	
	else{
	sleep 3000
	reload
	}
	
}





