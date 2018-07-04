(function () {

    console.log("actionsController plug-in!");

    var SERVICES_URL = "http://localhost:8000/eventsreceiver"

    var descriptors = {
        "SAMSUNG-GENERIC-REMOTE": {
            id: "SAMSUNG-GENERIC-REMOTE",
            bgImage: null,
            w: 100,
            h: 300,
            actions: [
                {
                    id: "ON_BUTTON",
                    label: "ON/OF",
                    // "irsend SEND_ONCE Samsung_BN59-00940A KEY_POWER",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_POWER",
                    x: 5,
                    y: 5,
                    w: 30,
                    h: 30
                },
                {
                    id: "UP",
                    label: "UP",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_UP",
                    x: 5,
                    y: 50,
                    w: 30,
                    h: 30
                },
                {
                    id: "DOWN",
                    label: "DOWN",
                    //os_command: "say 'hello'",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_DOWN",
                    x: 5,
                    y: 100,
                    w: 30,
                    h: 30
                },
                {
                    id: "OO",
                    label: "OO",
                    //os_command: "say 'hello'",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_DOWN",
                    x: 5,
                    y: 150,
                    w: 30,
                    h: 30
                },


                {
                    id: "DIR",
                    label: "DIR",
                    os_command: "DIR",
                    x: 50,
                    y: 5,
                    w: 30,
                    h: 30
                },
                {
                    id: "IP",
                    label: "IP",
                    os_command: "./scripts/show-ip.sh",
                    command_params: null,
                    x: 50,
                    y: 50,
                    w: 30,
                    h: 30
                },
                {
                    id: "X",
                    label: "X",
                    os_command: "x",
                    command_params: "x",
                    x: 50,
                    y: 100,
                    w: 30,
                    h: 30
                }
            ]
        },
        "generic": {

        },
        "party": {

        },
        "TALK": {
            id: "TALK",
            bgImage: null,
            w: 100,
            h: 300,
            actions: [
                {
                    id: "HELLO",
                    label: "Say Hello",
                    x: 5,
                    y: 5,
                    w: 40,
                    h: 40
                },
                {
                    id: "SEE-YOU",
                    label: "Say see you",
                    x: 5,
                    y: 50,
                    w: 40,
                    h: 40
                }
            ]
        }
    };




    // window.actionsController( "actions-controller-container", "SAMSUNG-GENERIC-REMOTE" );
    var actionsController = function () { // function (targetID, descriptorID ) {

        'use strict';


        var init = function( targetID, descriptorID ) {

            var currentController = descriptors[descriptorID];
            console.log("currentController:", currentController );
    
            // ------------------
            // Draw buttons
            // ------------------
    
            var el = document.getElementById( targetID );
    
            var htmlString = el.innerHTML;
    
            htmlString += '<div class="remote-control" style="top:'+ 10 +'px">'; //+ currentController.actions.label +'</div>';
            for (var i = 0; i < currentController.actions.length; i++ ) { 
                htmlString += '<button ' +
                 'class="remote-button" '+ 
                 'type="button" '+ 
                 'onclick="window.actionsController.launchControllerEvent(\''+ currentController.id +'\',\''+ currentController.actions[i].id +'\')" '+
                 'style="'+
                 'top:'+ currentController.actions[i].x +'px;'+
                 'left:'+ currentController.actions[i].y +'px;'+
                 'width:'+ currentController.actions[i].w +'px;'+
                 'height:'+ currentController.actions[i].h +'px" '+
                 '>'+ currentController.actions[i].label +'</button>';
            }
            htmlString += '</div>';
            console.log("htmlString:", htmlString );
            el.innerHTML = htmlString;
        }

        // var launchControllerEvent = function( buttonId, buttonLabel ) {
        //     ajsrConsole.log( buttonId +", "+ buttonLabel +" was pressed!");
        //     var urlStr = SERVICES_URL +"/?data="+ buttonId;
        //     // call to backend!
        //     var data = null;
        //     callBackEnd( "GET", urlStr, data );
        // };

        var sendEventToBack = function( dataToBeSent ){
            console.log( "sendEventToBack() dataToBeSent:", dataToBeSent );
            callBackEnd("POST", null, dataToBeSent );
        };

        // callBackEnd( "GET", urlStr, data );
        var callBackEnd = function( method, url, data) {
            
            console.log( "callBackEnd()" );

            if (url === null ) url = SERVICES_URL;
            var request  = new XMLHttpRequest();
            request.open(method, url );
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.onload = function() {

                if (request.status === 200) {

                    //that.successFunction();

                } else if (request.status === 401)  {
    
                    console.log("request.response.error:", request.response.error );
    
                } else {
    
                }
            };
            request.onerror = function() {

                console.log("request.onerror ..." );
            };
            request.onreadystatechange = function() {
                if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                    // Request finished. Do processing here.
                }
            };

            request.send(data);

            ajsrConsole.setLap("Data was sent!");
        }

        var getOsCommand = function( remoteModel, remoteEvent ) {

            console.log( "[actions-controller] getOsCommand()" );
            console.log( "[actions-controller] getOsCommand() remoteModel:", remoteModel );
            console.log( "[actions-controller] getOsCommand() remoteEvent:", remoteEvent );
            console.log( "[actions-controller] getOsCommand() descriptors[remoteModel]:", descriptors[remoteModel] );

            var obj = null;
            var ac = null;
            var os = null;
            var cmd = null; 

            var lon = descriptors[remoteModel].actions.length;
            for ( var i = 0; i < lon; i++) {
                obj = descriptors[remoteModel];
                ac = obj.actions[i];
                os = ac.os_command;
                if ( ac.id == remoteEvent ) cmd = os;
            }
            
            return cmd
        }

        return {
            new: function( targetID, descriptorID  ) {
                init( targetID, descriptorID  );
            },
            getControls: function(){

            },
            destroyAll: function() {

            },
            //launchControllerEvent: function( remoteEvent, label, remoteModel ) {
            launchControllerEvent: function( remoteId, remoteEvent ) {
                console.log("[actions-controller] launchControllerEvent()");
                //console.log("remoteEvent:", remoteEvent );
                //console.log("label:", label );
                ajsrConsole.log(remoteId +", "+ remoteEvent);

                /*
                
                                    "remote": remoteId,
                    "remoteEvent": remoteEvent,
                    "osCommand": getOsCommand( remoteId, remoteEvent )
                
                */

               //var data = "foo=bar&lorem=ipsum";

               var data =   "remote="+ remoteId +
                            "&"+"remoteEvent=" + remoteEvent +
                            "&"+"osCommand=" + getOsCommand( remoteId, remoteEvent );


                sendEventToBack( data );
            }
        }
    }

    window.actionsController = actionsController();

}());