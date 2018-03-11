'use strict';
/* global $ */
/* global PubNub */
/* eslint-disable max-len */
/* eslint-disable camelcase*/

let lastStr = ' ';
let appId = null;
let modeChange = 1;

function initPubNub() {
        console.log('initpubnub called');
        // check channnel Id
        if (appId == null) {
            while (!appId) {
                appId =prompt('CHANNEL ***(Enter any key, can not leave it empty):', '');
            }
            console.log('channel set to: '+appId);
            document.getElementById('channel').innerHTML += '<b>'+appId+'</b>';
        }

      let pubnub = new PubNub({publishKey: 'demo', subscribeKey: 'demo'});
      function $(id) {
          return document.getElementById(id);
        }
      let box = $('display_string');
      let target = $('target');
      let button = $('button');
      let channel = appId;
      let modeSelect = $('modeSelect');
      let start_button = $('start_button');
      let start = 0;

      console.log(channel);

      pubnub.addListener({
        message: function(obj) {
            console.log(obj.message);
            let objMsg = JSON.parse(obj.message);
            box.innerHTML = box.innerHTML + '<b>' + objMsg.username + '</b>: ' +
            objMsg.hello + '<br>' + objMsg.time + '</br>';
        bottom();
          }});
      pubnub.subscribe({channels: [channel]});

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
        let datetime = 'Last Sync: ' + currentdate.getDate() + '/'
                + (currentdate.getMonth()+1) + '/'
                + currentdate.getFullYear() + ' @ '
                + currentdate.getHours() + ':'
                + currentdate.getMinutes() + ':'
                + currentdate.getSeconds();
        msg.time = datetime;
        console.log(datetime);

        console.log(JSON.stringify(msg));
        pubnub.publish({channel: channel, message: JSON.stringify(msg)});
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
        }
    });

    modeSelect.addEventListener('change', function() {
        modeChange = modeSelect.value;
        changeMode();
        // call changeMode in test1.js to set or clear timer
        window.changeMode();
    });

    function contentChanged() {
        // this function will run each time the content of the DIV changes
        const msg = {};
        if (document.getElementsByClassName('target')[0].innerHTML) {
            msg.hello = document.getElementsByClassName('target')[0].innerHTML;
            lastStr = msg.hello;
            console.log(lastStr);
            msg.username = document.getElementById('username').value;
            let currentdate = new Date();
            let datetime = 'Last Sync: ' + currentdate.getDate() + '/'
                + (currentdate.getMonth()+1) + '/'
                + currentdate.getFullYear() + ' @ '
                + currentdate.getHours() + ':'
                + currentdate.getMinutes() + ':'
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
                pubnub.publish({channel: channel, message: JSON.stringify(msg)});
            }
            if ((modeChange == 3) && (start > 1)) {
                start = 0;
            }
        }
    }

    function changeMode() {
        if (modeChange == 1) {
            // at manual mode
            console.log('isManual', modeChange);
            target.removeEventListener('DOMSubtreeModified', contentChanged);
        } else {
            // at auto mode and mobile mode
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

