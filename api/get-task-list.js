const axios = require('axios')
const qs = require('qs')

module.exports = async (token) => {
    const data = qs.stringify({
        'group_id': '11',
        'task_level': '1',
        'page_no': '1',
        'is_u': '0',
        'lang': 'en',
        'token': token
    })

    const config = {
        method: 'post',
        url: 'https://www.bwcp68.top/api/task/getTaskList',
        headers: {
            'authority': 'www.bwcp68.top',
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'http://www.bwcp68.top',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'http://www.bwcp68.top/',
            'accept-language': 'en-US,en;q=0.9'
        },
        data: data
    }

    const response = await axios(config)

    return response.data
}