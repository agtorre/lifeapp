#### Android

INIT:

* install jdk
* install sdk
* sudo port install npm
* sudo port install watchman
* export path to adb
** export PATH=$PATH:/Users/name/Library/Android/sdk/platform-tools/
* tunnel adb from android to dev host
** adb reverse tcp:8081 tcp:8081
* run react-native server on localhost
** cd client/LifeAppAndroid
** react-native run-android

DEV:

* as JS files are modified, from client/LifeAppAndroid
** curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle
** note: this requires react-native server to be running
