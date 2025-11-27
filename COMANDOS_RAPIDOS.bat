@echo off
echo.
echo ================================
echo    INTUS CMS - COMANDOS RAPIDOS
echo ================================
echo.

:menu
echo Selecciona una opcion:
echo.
echo 1. Iniciar sistema completo
echo 2. Parar sistema  
echo 3. Ver estado de servicios
echo 4. Ver logs en tiempo real
echo 5. Reiniciar solo frontend
echo 6. Reiniciar solo CMS
echo 7. Backup base de datos
echo 8. Abrir sitio web
echo 9. Abrir admin CMS
echo 0. Salir
echo.

set /p choice="Opcion (0-9): "

if "%choice%"=="1" goto start
if "%choice%"=="2" goto stop
if "%choice%"=="3" goto status
if "%choice%"=="4" goto logs
if "%choice%"=="5" goto restart_frontend
if "%choice%"=="6" goto restart_cms
if "%choice%"=="7" goto backup
if "%choice%"=="8" goto open_site
if "%choice%"=="9" goto open_admin
if "%choice%"=="0" goto exit
goto menu

:start
echo.
echo ⚡ Iniciando sistema completo...
docker-compose up -d
echo.
echo ✅ Sistema iniciado!
echo 🌐 Sitio web: http://localhost:3002
echo ⚙️  Admin CMS: http://localhost:1337/admin
pause
goto menu

:stop
echo.
echo 🛑 Parando sistema...
docker-compose down
echo.
echo ✅ Sistema detenido!
pause
goto menu

:status
echo.
echo 📊 Estado de servicios:
docker-compose ps
echo.
pause
goto menu

:logs
echo.
echo 📋 Logs en tiempo real (Ctrl+C para salir):
echo.
docker-compose logs -f

:restart_frontend
echo.
echo 🔄 Reiniciando frontend...
docker-compose restart frontend
echo ✅ Frontend reiniciado!
pause
goto menu

:restart_cms
echo.
echo 🔄 Reiniciando CMS...
docker-compose restart strapi  
echo ✅ CMS reiniciado!
pause
goto menu

:backup
echo.
echo 💾 Creando backup de la base de datos...
docker exec intus_postgres pg_dump -U intus_user intus_db > backup_%date:~-4,4%%date:~-10,2%%date:~-7,2%.sql
echo ✅ Backup creado!
pause
goto menu

:open_site
echo.
echo 🌐 Abriendo sitio web...
start http://localhost:3002
goto menu

:open_admin
echo.  
echo ⚙️ Abriendo admin CMS...
start http://localhost:1337/admin
goto menu

:exit
echo.
echo 👋 ¡Hasta luego!
exit