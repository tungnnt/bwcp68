var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('token', '7da72SlLILP2ZfEpFvLM+N+F9WuuOLw9xPX1leWDlmg+8CJRW9eeLjIxOdc');
data.append('type', '3');
data.append('image', fs.createReadStream('e:\\projects\\bwcp68\\image\\proof.jpg'));

var config = {
    method: 'post',
    url: 'http://weshare.land/api/User/UploadImg',
    headers: {
        ...data.getHeaders()
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
