@echo off
color A 
:A
type %1
ping 0.0.0.0 -n 4 > nul
cls
goto :A