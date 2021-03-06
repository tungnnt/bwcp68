const axios = require('axios')
const qs = require('qs')

module.exports = async (token, ip) => {
    const data = qs.stringify({
        'status': '1',
        'page_no': '1',
        'is_u': '2',
        'lang': 'en',
        'token': token
    })

    const config = {
        method: 'post',
        url: 'http://weshare.land/api/task/taskOrderlist',
        headers: {
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'http://weshare.land',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'http://weshare.land/xml/index.html',
            'accept-language': 'en-US,en;q=0.9',
            'Host': 'weshare.land',
            ...ip
        },
        data: data
    }

    const response = await axios(config)

    return response.data
}