(function () {

  console.log("[ajsrConsole] plug-in!");

  var ajsrConsole = function (options, e) {

    'use strict';

    console.log("[ajsrConsole]");

    function init(consoleType) {

      console.log("[ajsrConsole] init!");

      var consoleID = "ajsrConsole";



      if (consoleType === "TEXTAREA") { }

      if (consoleType === "CANVAS") { }

      if (consoleType === "HTML") {

        var htmlString = '<div id="' + consoleID + '" style="position: absolute;' +
          'bottom: 0;' +
          'width: 400px;' +
          'height: 300px;' +
          'background-color: #002a02;' +
          'color: yellow;' +
          'font-family: Courier New, Courier, monospace;' +
          'font-size: 11px;' +
          'padding: 3px;' +
          'z-index: 99999;' +
          'border: 1px solid yellow;">Waiting for logs...</div>';
      }

      var el = document.createElement('div');
      el.setAttribute("id", "ajsrConsole-container");
      el.innerHTML = htmlString;
      if (document.body != null) {
        document.body.appendChild(el)
      } else {
        console.error("[ajsrConsole] document.body is null!");
      }

    }

    init("HTML");

    return {
      /*
      init: function( value ){
          // canvas console
          // html console
          // textarea console
      },
      */
      el: null,
      data: {
        startTime: null
      },
      log: function (value) {
        console.log("[ajsrConsole] value:", value);
        var el = document.getElementById("ajsrConsole");
        console.log("[ajsrConsole] el:", el);
        el.innerHTML = el.innerHTML + "<br>" + value;
      },
      cls: function () {
        ç
        console.log("[ajsrConsole] cls!");
        //console.log("[ajsrConsole] value:", value);
        var el = document.getElementById("ajsrConsole");
        //console.log("[ajsrConsole] el:", el);
        el.innerHTML = "";
      },
      // set max lines,
      // colorlines,
      // autoscroll
      // show timestamp

      startTime: function () { // ajsrConsole.startTime()
        this.data.startTime = Date.now();
        this.log("[ajsrConsole] Time stats now!");
      },
      setLap: function (label) {
        if (!label) console.error("Label is mandatory!");
        var millis = Date.now() - this.data.startTime;
        this.log("[ajsrConsole] "+label+"; Seconds elapsed: " + millis / 1000 + " s.");
      }

    }
  }

  window.ajsrConsole = ajsrConsole();

  // Ussage example:
  // > ajsrConsole.log("Hello world!")

}());