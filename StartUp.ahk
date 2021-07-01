#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
ControlSend,,Mode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance force
#UseHook
SetKeyDelay , 30, 30

^o::
{

InputBox, Restarting ,, Do you want to restart everything? Press 1 or cancel.

if (Restarting = 1)
{

fullScriptPath = C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\Login.ahk  ; edit with your full script path
DetectHiddenWindows, On 
WinClose, %fullScriptPath% ahk_class AutoHotkey

sleep 100

fullScriptPath1 = C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\Reload.ahk ; edit with your full script path
WinClose, %fullScriptPath1% ahk_class AutoHotkey

sleep 100

fullScriptPath2= C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\ServerStartServerEnd.ahk  ; edit with your full script path
WinClose, %fullScriptPath2% ahk_class AutoHotkey
sleep 100
WinClose, ahk_exe Console.exe
sleep 100
WinClose, ahk_exe Console.exe
sleep 100
WinClose, ahk_exe cmd.exe
sleep 100
WinClose, ahk_exe TerrariaServer.exe
sleep 100
Run, %fullScriptPath% ahk_class AutoHotkey
sleep 100
Run, %fullScriptPath1% ahk_class AutoHotkey
sleep 100
Run, %fullScriptPath2% ahk_class AutoHotkey
sleep 100

FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\reload.txt
FileAppend ,1, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\reload.txt
FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted.txt
FileAppend ,0, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted.txt
FileDelete  C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt
FileAppend ,0, C:\Users\ZebraBoiGamer\Desktop\Desktop\New folder\gameStarted2.txt

}
}