(function () {

    console.log("actionsController plug-in!");

    //var SERVICES_URL = "http://192.168.3.104:8000/eventsreceiver"
    //if ( !SERVICES_URL ) var SERVICES_URL = "http://localhost:8000/eventsreceiver";

    var descriptors = {
        "Samsung_BN59-00940A": {
            id: "Samsung_BN59-00940A",
            bgImage: null,
            w: 100,
            h: 300,
            actions: [
                {
                    id: "ON_BUTTON",
                    label: "ON/OF",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_POWER"
                },{
                    id: "UP",
                    label: "UP",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_UP"
                },{
                    id: "DOWN",
                    label: "DOWN",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_DOWN"
                },{
                    id: "RIGHT",
                    label: "RIGHT",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_RIGHT"
                },{
                    id: "LEFT",
                    label: "LEFT",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_LEFT"
                },{
                    id: "VOL_DOWN",
                    label: "VOL_DOWN",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_VOLUMEUP"
                },{
                    id: "VOL_UP",
                    label: "VOL_UP",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_VOLUMEDOWN"
                },{
                    id: "ENTER",
                    label: "ENTER",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_ENTER"
                },{
                    id: "EXIT",
                    label: "EXIT",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_EXIT"
                },{
                    id: "RETURN",
                    label: "RETURN",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A RETURN"
                },{
                    id: "CHANNELUP",
                    label: "Ch_UP",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_CHANNELUP"
                },{
                    id: "CHANNELDOWN",
                    label: "Ch_DOWN",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_CHANNELDOWN"
                },{
                    id: "KEY_0",
                    label: "0",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_0"
                },{
                    id: "KEY_1",
                    label: "1",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_1"
                },{
                    id: "KEY_2",
                    label: "2",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_2"
                },{
                    id: "KEY_3",
                    label: "3",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_3"
                },{
                    id: "KEY_4",
                    label: "4",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_4"
                },{
                    id: "KEY_5",
                    label: "5",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_5"
                },{
                    id: "KEY_6",
                    label: "6",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_6"
                },{
                    id: "KEY_7",
                    label: "7",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_7"
                },{
                    id: "KEY_8",
                    label: "8",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_8"
                },{
                    id: "KEY_9",
                    label: "9",
                    os_command: "irsend",
                    command_params: "SEND_ONCE Samsung_BN59-00940A KEY_9"
                },
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

    // window.actionsController( "actions-controller-container", "Samsung_BN59-00940A" );
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
    
            htmlString += '<div class="remote-control '+ descriptorID +' frame-bg"><div class="remote-body">'; //+ currentController.actions.label +'</div>';
            for (var i = 0; i < currentController.actions.length; i++ ) { 
                htmlString += '<button ' +
                 'class="remote-button '+ currentController.actions[i].id +'" '+ 
                 'type="button" '+ 
                 'onclick="window.actionsController.launchControllerEvent(\''+ currentController.id +'\',\''+ currentController.actions[i].id +'\')" '+
                // 'style="'+
                // 'top:'+ currentController.actions[i].x +'px;'+
                // 'left:'+ currentController.actions[i].y +'px;'+
                // 'width:'+ currentController.actions[i].w +'px;'+
                // 'height:'+ currentController.actions[i].h +'px" '+
                 '>'+ currentController.actions[i].label +'</button>';
            }
            htmlString += '</div></div>';
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

        var getOsCommandParams = function( remoteModel, remoteEvent ) {
            console.log( "[actions-controller] getOsCommandParams()" );
            console.log( "[actions-controller] getOsCommandParams() remoteModel:", remoteModel );
            console.log( "[actions-controller] getOsCommandParams() remoteEvent:", remoteEvent );
            console.log( "[actions-controller] getOsCommandParams() descriptors[remoteModel]:", descriptors[remoteModel] );
            var obj = null;
            var ac = null;
            var os = null;
            var params = null; 
            var lon = descriptors[remoteModel].actions.length;
            for ( var i = 0; i < lon; i++) {
                obj = descriptors[remoteModel];
                ac = obj.actions[i];
                os = ac.command_params;
                if ( ac.id == remoteEvent ) params = os;
            }
            return params
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
                            "&"+"command_params=" + getOsCommandParams( remoteId, remoteEvent ) +
                            "&"+"osCommand=" + getOsCommand( remoteId, remoteEvent );

                sendEventToBack( data );
            }
        }
    }

    window.actionsController = actionsController();

}());
