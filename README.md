# bulletjspusher
This is a small side project I decided to make for fun! :)

## How does it work
This package is very very VERY simple to understand, so don't worry :)

To import this package, simply use:
```js
const pb = require('bulletjspusher');
```

The 2 functions this package has are very simple to use.
If you simply want to push a note to a device, channel or clinet, use the following code:
```js
pb.PushBullet('ACCESS TOKEN');

pb.PostBullet(
    'note', // This is the type of push
    'Hello World Again!', // This is the body of the message
    'Hello World!', // This is the title of the message
    'device_iden', // Here you decide where you want to push the message. Other options are "channel_tag" and "client_iden"
    'DEVICE IDEN' // Or off course use the channel tag if you filled in "channel_tag" before or the client iden if you filled in "client_iden" before
);
```

If you want to push a link or file you should use this instead:
```js
// For pushing a link
pb.PostBullet(
    'link', // The type of push
    'Hello World Again!', // The body of the message
    'Hello World!', // The title of the message
    'device_iden', // Or "channel_tag", "client_iden"
    'DEVICE IDEN', // Or "CHANNEL TAG", "CLIENT IDEN"
    'URL' // The url you want to send with the push
);

// For pushing a file
pb.PostBullet(
    'link', // The type of push
    'Hello World Again!', // The body of the message
    'Hello World!', // The title of the message
    'device_iden', // Or "channel_tag", "client_iden"
    'DEVICE IDEN', // Or "CHANNEL TAG", "CLIENT IDEN"
    'URL', // The url to the file (file must be uploaded to something like mediafire for example)
    'file name', // Put in the name of the file
    'file type', // The MIME type of the file
);
```

This is all you have to do to push messages via pushbullet!

The explaination to all parameters are also added into vscode via @param.

## When bug or issues occure
You can report these to me via githubs issue tab.

I can't promise that I will get rid of the bugs and issues people may find,
because I am still a student and I don't have much time because of school.
(Sorry in advance)