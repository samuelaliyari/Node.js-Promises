
const getTimeout = (num) => {
    return new Promise((resolve, reject) => {
        resolve(num)
    })
}

const randomNum = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve((Math.floor((Math.random() * 1000) + 1)))
        }, time)
    })
}

getTimeout(3000).then(time => randomNum(time)).then(number => {
    console.log(number)
    return randomNum(number)
}).then(number => console.log(number))