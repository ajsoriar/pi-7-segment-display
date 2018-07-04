#! /bin/bash

# 2018-06-18

echo "Hello world!"

# move cursor to first position
echo -en '\x76' > /dev/ttyAMA0 
sleep 1

# Clear display null null null null
echo -en '\x01\x02\x7\x78' > /dev/ttyAMA0

# Show 1234
echo -en '\x76\x01\x02\x03\x04' > /dev/ttyAMA0