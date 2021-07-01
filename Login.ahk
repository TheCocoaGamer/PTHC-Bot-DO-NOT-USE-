#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
ControlSend,,Mode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance force
#UseHook
SetKeyDelay , 30, 30
lineNum := 1
FileRead, gameStarted2, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt 

Loop 
{
	FileRead, gameStarted2, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt 
	sleep 10000
	
	
    if InStr(gameStarted2, "1"){


			
			FileReadLine, userid, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\userid.txt, lineNum
			if ErrorLevel{
			FileReadLine, passwords, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\passwords.txt, lineNum
			if ErrorLevel{
			FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\passwords.txt
			FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\userid.txt
			FileAppend ,1, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\userid.txt
			FileAppend ,1, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\passwords.txt
			userid := 1
			passwords := 1
			lineNum := 1
			sleep 3000
			reload
			}
			}
			else{
			FileReadLine, passwords, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\passwords.txt, lineNum
			}
			
		
		
		

			
			if (userid != "1") {
				
				
				ControlSend,,`user `del %userid%, ahk_exe cmd.exe
				ControlSend,,{Enter}, ahk_exe cmd.exe
				ControlSend,,`user a, ahk_exe cmd.exe
				ControlSend,,dd %userid% %passwords% default, ahk_exe cmd.exe
				ControlSend,,{Enter}, ahk_exe cmd.exe
				


				
				
				
			}
			
			


				lineNum := lineNum+1
				sleep 1000





			


		}
	
	else{

 sleep 3000
 reload
	
	}
	
	
}



