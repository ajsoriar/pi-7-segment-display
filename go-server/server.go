/* go server, 23-jun-2018 */

package main

import (
	"fmt"
	"io"
	"net/http"
	"os/exec"
	"strings"
)

var mux map[string]func(http.ResponseWriter, *http.Request)

func main() {

	fmt.Print("A server has started in port 8000")
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./www"))))
	http.HandleFunc("/eventsreceiver", _eventsreceiver)
	http.ListenAndServe(":8000", nil)
}

type myHandler struct{}

func (*myHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if h, ok := mux[r.URL.String()]; ok {
		h(w, r)
		return
	}

	io.WriteString(w, "My server: "+r.URL.String())
}

// ---------------------------------------------------

/*
func printCommand(cmd *exec.Cmd) {
	fmt.Printf("==> Executing: %s\n", strings.Join(cmd.Args, " "))
}

func printError(err error) {
	if err != nil {
		os.Stderr.WriteString(fmt.Sprintf("==> Error: %s\n", err.Error()))
	}
}

func printOutput(outs []byte) {
	if len(outs) > 0 {
		fmt.Printf("==> Output: %s\n", string(outs))
	}
}
*/

// ---------------------------------------------------

func _eventsreceiver(w http.ResponseWriter, r *http.Request) {

	fmt.Println("eventsreceiver!")

	err2 := r.ParseForm()
	if err2 != nil {
		panic(err2)
	}

	osCommand := r.Form.Get("osCommand")
	commandParams := r.Form.Get("command_params")

	fmt.Println("-> osCommand: %s", osCommand)
	fmt.Println("-> commandParams: %s", commandParams)

	// --------------------------------------

	paramsString := commandParams //"SEND_ONCE Samsung_BN59-00940A KEY_POWER"
	args := strings.Fields(paramsString)
	//cmd := exec.Command("irsend", args...)
	cmd := exec.Command(osCommand, args...)

	/*

		// Stdout buffer
		cmdOutput := &bytes.Buffer{}

		output, err2 := cmd.CombinedOutput()
		if err2 != nil {
			fmt.Println(fmt.Sprint(err2) + ": " + string(output))
			return
		} else {
			fmt.Println(string(output))
		}

		// Attach buffer to command
		cmd.Stdout = cmdOutput
		printCommand(cmd)
		err := cmd.Run() // will wait for command to return
		printError(err)
		printOutput(cmdOutput.Bytes()) // => go version go1.7.5 darwin/amd64

	*/

	err := cmd.Run() // will wait for command to return
}
