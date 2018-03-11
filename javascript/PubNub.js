'use strict';
/* global $ */

let lastStr = ' ';
let appId = null;
let modeChange = 1;

function initPubNub() {
        console.log('initpubnub called');

        if (appId == null) {
            appId =prompt('channel:',''); 
            console.log('channel set to: '+appId);
            document.getElementById('channel').innerHTML += '<b>'+appId+'</b>';
            // initPubNub();
        }

      var pubnub = new PubNub({ publishKey : 'demo', subscribeKey : 'demo' });
      function $(id) { return document.getElementById(id); }
      var box = $('display_string'), target = $('target'), button = $('button'),
          channel = appId, mode = $('mode'), backMode = $('backMode'), start_button = $('start_button');
      var recognition = new webkitSpeechRecognition();
      
      let start = 0;
      let count = 0;

      console.log(channel);

      pubnub.addListener({
          message: function(obj) {
		console.log(obj.message);
		let objMsg = JSON.parse(obj.message);
		//let username = objMsg.username;
		//let msg = objMsg.hello;
		box.innerHTML = box.innerHTML + '<b>' + objMsg.username + '</b>: ' + objMsg.hello + '<br>' + objMsg.time + '</br>';
		//box.innerHTML = '<b>' + username + '</b>: ' + msg + '<br>' + box.innerHTML
        //box.innerHTML = (''+obj.message).replace( /[<>]/g, '' ) + '<br>' + box.innerHTML
        bottom();
          }});
      pubnub.subscribe({channels: [channel]});

      //input.addEventListener('keyup', function(e) {
      //    if ((e.keyCode || e.charCode) === 13) {
      //      pubnub.publish({channel : channel,message : input.value,x : (input.value='')});
      //  }
      //});

    button.addEventListener('click', function() {
        
        console.log('Button send press');
        const msg = {};
        if (document.getElementsByClassName('target')[0].innerHTML) {
            msg.hello = document.getElementsByClassName('target')[0].innerHTML;
        } else {
            msg.hello = document.getElementById('final_span').innerHTML;
        }
        
        msg.username = document.getElementById('username').value;
        let currentdate = new Date();
        let datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        msg.time = datetime;
        console.log(datetime);

        console.log(JSON.stringify(msg));
        pubnub.publish({channel: channel, message : JSON.stringify(msg)});
    });

    // if (window.addEventListener && (document.getElementsByClassName('mode').value == true)) {
    //     // Normal browsers
    //     // button.addEventListener('click', contentChanged, false);
    //     target.addEventListener('DOMSubtreeModified', contentChanged, false);
    // } else
    //     if (window.attachEvent) {
    //         // IE
    //         // button.attachEvent('click', contentChanged);
    //         console.log(document.getElementsByClassName('target')[0].innerHTML, lastStr);
    //         if (document.getElementsByClassName('target')[0].innerHTML != lastStr) {
    //             target.attachEvent('DOMSubtreeModified', contentChanged);
    //         }
    //     }

    // if (mode) {
        backMode.addEventListener('click', function() {
            modeChange--;
            if (modeChange < 1) {
                modeChange = 3;
            }
            changeMode();
       });

        mode.addEventListener('click', function() {
            modeChange++;
            if (modeChange > 3) {
                modeChange = 1;
            }
            changeMode();
       });

       start_button.addEventListener('click', function() {
        if (modeChange == 3) {
            if (start > 1) {
                start = -1;
            }
            console.log('before checking with 2', modeChange, start);
            if ( start < 2) {
                start++;
            }
            console.log('after checking', modeChange, start);            
            // if (start == 2) {
            //     start = 0;
            //     target.removeEventListener('DOMSubtreeModified', contentChanged);
            // }
            // if (start == 0) {
            //     target.addEventListener('DOMSubtreeModified', contentChanged);
            // }
        }
    });
    // }

    function contentChanged() {
        // this function will run each time the content of the DIV changes
        const msg = {};
        if (document.getElementsByClassName('target')[0].innerHTML) {
            msg.hello = document.getElementsByClassName('target')[0].innerHTML;
            lastStr = msg.hello;
            console.log(lastStr);
            msg.username = document.getElementById('username').value;
            let currentdate = new Date();
            let datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
            msg.time = datetime;
            console.log(datetime);
            console.log(JSON.stringify(msg));
            // pubnub.publish({channel: channel, message: JSON.stringify(msg)});
            if ((modeChange == 1) || (modeChange == 2)) {
                // document.getElementById('start_button').click();
                pubnub.publish({channel: channel, message: JSON.stringify(msg)});
            }
            console.log('before sending', modeChange, start);
            if ((modeChange == 3) && (start < 2)) {
                count++;
                pubnub.publish({channel: channel, message: JSON.stringify(msg)});
                if (count > 1) {
                    start = 0;
                    count = 0;
                }
            }
            if (start > 1) {
                start = 0;
            }
        }
    }

    function changeMode() {
        if (modeChange == 1) {
            // đang ở manual mode
            console.log('isManual', modeChange);
            target.removeEventListener('DOMSubtreeModified', contentChanged);
        } else {
            // đang ở auto mode va mobile mode
            console.log('isManual', modeChange);
            target.addEventListener('DOMSubtreeModified', contentChanged);
            start = 0;
            document.getElementById('final_span').innerHTML = '';
        }
    }
}

$(document).ready(function() {
    initPubNub();
});

function bottom() {
    document.getElementById( 'bottom' ).scrollIntoView();
}

