let linebot = require('linebot'), express = require('express');

let bot = linebot({
    channelId: '1656456537',
    channelSecret: '19e169a70caa7580610d94f6c099c025',
    channelAccessToken: '9Z3BX2rfrILoYm2tEatlm9uY87W/YzC2GN6CPcP6Kyy1VVd7OTlmyPJ8og7wtASc1LnTdRGhV+pixl/6aN9hPK4C8fYIB5TfTicGZab/7PzBc+wt84/If77Wtt8ZCoHrw2sztLzqx7M9uNRzkvYkdAdB04t89/1O/w1cDnyilFU='
});

const linebotParser = bot.parser(),
    app = express();

bot.on('message', function (event) {
    // 把收到訊息的 event 印出來
    console.log(event);
    if (event.message.type = 'text') {
        var msg = event.message.text;
        event.reply(msg).then(function (data) {
            // success
            console.log(data)
            // console.log(msg);
        }).catch(function (error) {
            // error
            console.log('error');
        });
    }
});

app.post('/webhook', linebotParser);

// 在 localhost 走 8080 port
let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;

    console.log("My Line bot App running on port", port);
});

app.get('/', (req, res) => {
    res.send("server is running")
})