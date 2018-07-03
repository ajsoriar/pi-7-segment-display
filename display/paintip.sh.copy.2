# script that will show the IP in the display
# 2018-06-18

echo $1

echo -en '\x76' > /dev/ttyAMA0
sleep 1

#for i in 1 2 3 4
for i in 1
do
  echo "Looping ... number $i"

  #ip='192.168.3.15'
  ip=$1

  A="$(cut -d'.' -f1 <<<"$ip")"
  B="$(cut -d'.' -f2 <<<"$ip")"
  C="$(cut -d'.' -f3 <<<"$ip")"
  D="$(cut -d'.' -f4 <<<"$ip")"

  echo "$A"
  echo -en '\x76\x01\x02\x03\x04' > /dev/ttyAMA0
  sleep 2

  echo "$B"
  echo -en '\x76\x02\x03\x04\x05' > /dev/ttyAMA0
  sleep 2

  echo "$C"
  echo -en '\x76\x03\x04\x05\x06' > /dev/ttyAMA0
  sleep 2

  echo "$D"
  echo -en '\x76\x04\x05\x06\x07' > /dev/ttyAMA0
  sleep 2

done

echo "This is the end!"
