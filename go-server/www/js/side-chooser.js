(function() {

    console.log("sideChooser plug-in!");

    window.sideChooser = function(options, e) {

        'use strict';

        /*

        htmlString +=   '<div  class="sideChooser-back-bg '+ params.template +' '+ params.css +' " style=" '+ _bg_layer_style +' '+ params.bgStyle +' "></div>';
        htmlString +=   '<div id="sideChooser-'+ _timestamp +'" class="sideChooser '+ params.template +' '+ params.css +'" style="'+ _modal_style +' '+ params.style +' " >';

        htmlString +=   '<div class="title">'+ params.title +'</div>'+
                        '<div class="content"><p>'+ params.message +'</p></div>'+
                        '<div class="footer">';
                        if( params.showCancel ) htmlString += '<button id="btn-cancel" class="btn cancel" type="button">'+ params.cancelButton +'</button>';

        htmlString +=   ''+
                        '<button id="btn-ok" class="btn confirm" type="button">'+ params.okButton +'</button>'+
                        '</div>'+
                        '</div>';

            var el = document.createElement('div');
            el.setAttribute("id", "sideChooser-container" );
            el.innerHTML = htmlString;
            document.body.appendChild(el);


        function cancel(){
            console.log("btn cancel!");

            params.onCancel();
            params.beforeClose();
            destroy();
        }

        function confirm(){
            console.log("btn confirm!");

            params.onConfirm();
            params.beforeClose();
            destroy();
        }

        function getFocused(){
            var el = document.getElementById("btn-ok");
            if ( hasClass( el, 'default') ) return 1;
            return 0;
        }

        window.sideChooser.confirm = confirm;

        */

        return 0
    }

}());