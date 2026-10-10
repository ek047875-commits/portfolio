@echo off
cd /d "%~dp0"
title Escale - serveur de test
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js n est pas installe. Installez la version LTS : https://nodejs.org
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installation des dependances, cela prend 1 a 2 minutes...
  call npm install
  if errorlevel 1 (
    echo Echec de npm install. Verifiez votre connexion internet.
    pause
    exit /b 1
  )
)
echo Demarrage... le site s ouvre sur http://localhost:3000
start /b cmd /c "timeout /t 8 >nul & start http://localhost:3000"
call npm run dev
pause
