'use strict';
/* global $ PB2 */

let text;
let allVal = '<br>';

function initPB() {
    const pb2 = new PB2('https://pb2-2018.jelastic.metropolia.fi/', 'trial');
    pb2.setReceiver(onMessage);

    $('#button').click(function() {
        console.log('Buotton send press');
        const msg = {};
        console.log(document.getElementsByClassName('target')[0].innerHTML, document.getElementById('final_span').innerHTML);
        if (document.getElementsByClassName('target')[0].innerHTML) {
            msg.hello = document.getElementsByClassName('target')[0].innerHTML;
        } else {
            msg.hello = document.getElementById('final_span').innerHTML;
        }
        
        msg.username = document.getElementById('username').value;
        pb2.sendJson(msg);
        console.log(document.getElementsByClassName('target')[0].innerHTML);
    });

}

function onMessage(data) {
    console.log('onMessage');
    // str = JSON.stringify(data);
    let str;
    // let appId;
    // let socketId;
    let username;
    console.log(data);
    console.log('socket.on message received: '+ str);
    if (data.json) {        
        console.log(data.json.hello);
        str = data.json.hello;
        // appId = data.app_id;
        // socketId = data.socketid;
        username = data.json.username;        
    }
    text = '<br>' + 'username: '+username+ '<br>'+ 'msg: '+str + '<br>';
    // + 'appId: '+appId + '<br>' + 'socketId: '+socketId+ '<br>' ;
    // allVal = allVal + text; 
    $('#display_string').append(text);
    bottom();    
}

function bottom() {
    document.getElementById( 'bottom' ).scrollIntoView();
};

$(document).ready(function() {
    initPB();
});
