package main

import (
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

func main() {

	//fs := http.FileServer(http.Dir("static"))
	//http.Handle("/static/", http.StripPrefix("/static/", fs))

	fs := http.FileServer(http.Dir("css"))
	http.Handle("/www/css/", http.StripPrefix("/www/css/", fs))

	http.HandleFunc("/", serveTemplate)

	log.Println("Listening...")
	http.ListenAndServe(":3000", nil)
}

func serveTemplate(w http.ResponseWriter, r *http.Request) {
	lp := filepath.Join("www/templates", "layout.html")
	fp := filepath.Join("www/templates", filepath.Clean(r.URL.Path))

	tmpl, _ := template.ParseFiles(lp, fp)
	tmpl.ExecuteTemplate(w, "layout", nil)
}

/*

   Instructions:

   - Run the example and open localhost:3000/example.html in your browser.

*/
