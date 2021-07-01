#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
ControlSend,,Mode Inpute  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance force
#UseHook
SetKeyDelay 1,1




Loop 
{
	FileRead, reloading, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\reload.txt 

    if InStr(reloading, "1"){
	
	WinClose, ahk_exe Console.exe
	WinClose, ahk_exe Console.exe
	WinClose, ahk_exe cmd.exe
	
	
	Run, C:\Users\ZebraBoiGamer\Desktop\Folders\Console2\Console.exe,,, OutputVarPID
	sleep 300
	WinActivate ahk_pid %OutputVarPID%
	sleep 200
	Send cd C`: 
	Send `\ 
	Send Users\ZebraBoiGamer\Desktop\Desktop\New folder
	Send {Enter} 
	sleep 150
	Send node bot.js 
	Send {Enter} 
	
	Run, C:\Users\ZebraBoiGamer\Desktop\Folders\Console2\Console.exe,,, OutputVarPID1
	sleep 300
	WinActivate ahk_pid %OutputVarPID1%
	sleep 200
	Send cd C`: 
	Send `\ 
	Send Users\ZebraBoiGamer\Desktop\Desktop\New folder\DiscordBot2 
	Send {Enter} 
	sleep 150
	Send node bot.js 
	Send {Enter} 
	
	
	FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\reload.txt
	FileAppend ,0, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\reload.txt
	
	}
	
	else{
	sleep 3000
	reload
	}
			
			
	
	
}





