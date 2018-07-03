/* EXAMPLE 1 */

package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"bytes"
	"os/exec"
)

/*
func hello(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Hi! This is http://localhost:8000/")
	io.WriteString(w, "\n")
	io.WriteString(w, "http://localhost:8000/www/index.html")
	io.WriteString(w, "\n")
	io.WriteString(w, "Visit <a href=\"http://localhost:8000/www/index.html\">go!</a>")
}
*/

var mux map[string]func(http.ResponseWriter, *http.Request)

func main() {

	/*
		server := http.Server{
			Addr:    ":8000",
			Handler: &myHandler{},
		}
		mux = make(map[string]func(http.ResponseWriter, *http.Request))
		mux["/"] = hello
		server.ListenAndServe()
	*/

	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./www"))))

	http.HandleFunc("/eventsreceiver", _eventsreceiver)

	http.ListenAndServe(":8000", nil)

fmt.Print("A server has started in port 8000")
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

// ---------------------------------------------------
/*
func _eventsreceiver(w http.ResponseWriter, r *http.Request) {
	fmt.Println("eventsreceiver!")

	// Create an *exec.Cmd
	cmd := exec.Command("go", "version")
	//cmd := exec.Command("ls", "-l")

	// Stdout buffer
	cmdOutput := &bytes.Buffer{}

	// Attach buffer to command
	cmd.Stdout = cmdOutput

	// Execute command
	printCommand(cmd)
	err := cmd.Run() // will wait for command to return
	printError(err)
	// Only output the commands stdout
	printOutput(cmdOutput.Bytes()) // => go version go1.7.5 darwin/amd64

}
*/

func _eventsreceiver(w http.ResponseWriter, r *http.Request) {
	fmt.Println("eventsreceiver!")

	// --------------------------------------

	// "remote": remoteId,
	// "remoteEvent": remoteEvent,
	// "osCommand": getOsCommand( remoteId, remoteEvent )

	err2 := r.ParseForm()
	if err2 != nil {
		panic(err2)
	}
	//v := r.Form

	//owner := r.Form.Get("remote")
	//name := r.Form.Get("remoteEvent")
	osCommand := r.Form.Get("osCommand")

	fmt.Println("osCommand: %s", osCommand)

	// --------------------------------------

	// Create an *exec.Cmd
	//cmd := exec.Command("go", "version")
	//cmd := exec.Command("ls", "-l")

	cmd := exec.Command(osCommand)

	// Stdout buffer
	cmdOutput := &bytes.Buffer{}

	// Attach buffer to command
	cmd.Stdout = cmdOutput

	printCommand(cmd)
	err := cmd.Run() // will wait for command to return
	printError(err)
	// Only output the commands stdout
	printOutput(cmdOutput.Bytes()) // => go version go1.7.5 darwin/amd64

}
