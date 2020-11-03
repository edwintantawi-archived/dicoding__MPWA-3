const webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BI0UQhMAlvPeIXKmtQyfdE1EaDPH3Nz2Rbfhe-e8i0i1LrIDDZXrvN8mp3Kpo5U8cKDaAKcGC_i_YO1owpImWFg",
    "privateKey": "WOAX-qAX9kVwPlnRxrPkyUDu_iAMR7s6-X7yFcHAQhM"
};
 
 
webPush.setVapidDetails(
    'mailto:edwintantawi@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/elim9lZjeKA:APA91bGehFU3h9m9FCdrXXBX2_P4iPYiN1AJxqFm8gztMwlxPuwWO1Sw89yJ2ViKt34McjvBip6JeTzaNCiCv6vqwLYShrtH9Cr0zhzIepei9phD67soIf1l6ZjXi_JXXfRsfIc0N4N",
    "keys": {
        "p256dh": "BF7nILoC2Rrv/anZr8ddSdYo9PGHQxYzkIYeiHEwjrGzt08Oc2qiAi4w5Pb9uXY8XnzGu7KneNn0OHZ+s+arFXU=",
        "auth": "ScyfyYw0ZVBFDiqsqH576g=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '986950567379',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);