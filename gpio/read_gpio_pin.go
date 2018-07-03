package main

import (
        "fmt"
        "./go-rpio"
        "os"
        "time"
)

var (
	pin11 = rpio.Pin(11)
        pin12 = rpio.Pin(12)
        pin13 = rpio.Pin(13) 
)

func main() {

        // Open and map memory to access gpio, check for errors
        if err := rpio.Open(); err != nil {
                fmt.Println(err)
                os.Exit(1)
        }

        // Unmap gpio memory when done
        defer rpio.Close()

// Set pin to output mode
        //pin.Output()
pin11.Input()
pin12.Input()
pin13.Input()

//open /dev/gpiomem: permission denied
// Read state
data11:=pin11.Read()
data12:=pin12.Read()
data13:=pin13.Read()

        // Toggle - infinite loop
        for {
                
          //pin.Toggle()
                
data11=pin11.Read()
data12=pin12.Read()
data13=pin13.Read()

fmt.Println(data11)
fmt.Println(data12)
fmt.Println(data13)
fmt.Println("----")

                time.Sleep(time.Second)
        }
}
