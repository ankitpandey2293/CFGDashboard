echo off
cls
title Trillium Meteor Post-setup
echo Download Meteor Windows Binary for below URL
echo .
echo https://install.meteor.com/windows
echo .
pause
meteor create trillium
cd trillium
echo .
echo Removing Meteor Core Pacakages..
echo .
pause
cls
meteor remove blaze-html-templates
cls
meteor remove ecmascript
cls
echo Installing Angular packages and dependencies
pause
meteor npm install --save angular angular-meteor
meteor add angular-templates pbastowski:angular-babel
pause

cls
echo Setup Complete
echo start application ?
pause
meteor 