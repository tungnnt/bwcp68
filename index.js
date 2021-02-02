const getOrderList = require("./api/get-order-list")
const login = require("./api/login")
const receiveTask = require("./api/receive-task")
const register = require("./api/register")
const submitTask = require("./api/submit-task")
const uploadImg = require("./api/upload-img")

const {
    randomString,
    randomName,
    randomCookie,
    randomPhone,
    randomIPHeader,
    randomDate,
    normalizeName,
    randomCSRF,
    randomFirstName,
    randomeBankNumber,
    randomUserAgent,
    randomIntegerAsString,
    randomImagePath,
} = require('./helper/random')
const readCaptcha = require("./helper/read-captcha")

require('./helper/createFolder')('data')

let count = 1

setImmediate(async () => {
    while (count <= 50) {
        console.log(`========== ${count} ==========`)

        try {
            const ip = randomIPHeader()

            let response

            const phone = randomPhone()

            console.log({ phone })

            const { code, epoch: codeRand } = await readCaptcha()

            console.log({ code, codeRand })

            response = await register(phone, code, codeRand, ip)

            if (response.code === 1) {
                count++
            }

            console.log(response)

            response = await login(phone, ip)

            const { token, uid } = response.info

            require('fs').appendFileSync('./data/accounts.txt', `${phone}|${uid}|${token}\n`, () => { })

            console.log({ token })

            response = await receiveTask(token, '1007', ip)

            console.log(response)

            response = await receiveTask(token, '1008', ip)

            console.log(response)

            response = await getOrderList(token, ip)

            const orderIdArray = response.info.map(task => task.order_id)

            console.log(orderIdArray)

            for (let i = 0; i < orderIdArray.length; i++) {
                response = await submitTask(orderIdArray[i], '\/upload\/image\/20210202\\831bb7d391d345825028bd2dfbb93641.png', token)

                console.log(response)
            }
        } catch (error) {
            console.log(error)
        }
    }
})