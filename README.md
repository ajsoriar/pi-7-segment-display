# pi-7-segment-display
7 segment display control for raspberry pi

## Show your IP:
- Run this script: 'go run getip.go' in order to show your IP in the console.

## Clear the 7-segments display:
- Run this script: './clear.display.sh'
- Or in the console: echo -en '\x78\x78\x78\x78' > /dev/ttyAMA0 

## Show the IP in the display
'./paintip.sh < go run getip.go'

## move cursor to first position
> echo -en '\x76' > /dev/ttyAMA0

## Show 1234
> echo -en '\x76\x01\x02\x03\x04' > /dev/ttyAMA0

## Show 0000
> echo -en '\x76\x00\x00\x00\x00' > /dev/ttyAMA0

## Turn on a couple of doths:
> 'echo -en '\x77\x30' > /dev/ttyAMA0'

## completely clear the display
echo -en '\x78\x78\x78\x78\' > /dev/ttyAMA0
