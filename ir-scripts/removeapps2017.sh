# Automatically remove Apps from Samsung Smart TV 2017

clear

echo "---------------" 
echo "- FUN!        -" 
echo "---------------" 


#!/bin/bash

i=1
n=1

# continue until $n equals 5
#while [ $n -le 5 ]
while  [ $i -le $n ]
do

    # 1) [DOWN] - Move cursor to menu option
        #KEY_DOWN
	irsend SEND_ONCE Samsung_BN59-00940A KEY_POWER
        sleep 10 # Waits 5 seconds.

    # 2) [ENTER] - Delete App
        #KEY_ENTER
        irsend SEND_ONCE Samsung_BN59-00940A KEY_POWER
        sleep 5  # Waits 5 seconds.

    # 3) [LEFT] - Move cursor to Modal button 'Delete' (The OS asks for confirmation)
        #KEY_DOWN
        irsend SEND_ONCE Samsung_BN59-00940A KEY_POWER
        sleep 10  # Waits 5 seconds.

    # 4) [ENTER] - Selects menu option
        #KEY_ENTER
        #KEY_DOWN
        irsend SEND_ONCE Samsung_BN59-00940A KEY_POWER
        sleep 5  # Waits 5 seconds.

	echo "Welcome $i times."
	i=$(( i+1 ))	 # increments $i

done


echo "done!"

