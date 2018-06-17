// 서비스워커 등록 -> 브라우저 push 등록 확인인 -> 안된경우 push 등록 
// -> 등록한 단말기 key 서버 저장 -> 서버에서 해당 key로 push 전송

// 1. 웹 앱 메니페스트 JSON 파일 : sender_id (firebase setting)
// 2. server key (firebase setting) - legacy server key는 gcm key이므로 사용하지 않음
// 3. device key (firebase database > device key)

var request = require('request');

// firebase project server key
var serverKey = "key=" + "AAAAOdOpY8E:APA91bH4G8vV6ScMaaQNud9GfBvZmiog_D_04H3l7-jo1uOFPE5thEbhvwhwNkguougwIesDJ6btGHvs262F1emZLCgPpvewbKGqvaHXg71c_yYiObSP63dKfYiI8NVPzniqY7IVmEib";
// browser or device key
var deviceKey = "fHrzuzVXHys:APA91bE-bC-D5J5AH3QJRPus4RQRDlT3Se2I8V4fpCmQ3sdzMTZQ89tMXeXYvc9oiXzPIUwnCjREu-XzyCoRK7svaCCH7q1SS8DIWsUD3T458Odfy5I5MRWbCQVikN22bGSNe0YKE12I";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};
