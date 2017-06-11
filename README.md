# smarthome X10 light wifi bridge

## The Device

  * Raspberry pi (or similar. I'm using an OrangePi One)
  * USB X10 RF PC Tranceiver (CM19A)
  * Custom Bash script which turns X10 devices on or off via Python library

## What this repository does

  * listens for GET requests on endpoint `/l/[houseCode]/[X10Number]/[ON|OFF]`
  * turns X10 device ON or OFF depending on the received request

