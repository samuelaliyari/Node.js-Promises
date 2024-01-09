const promiseXTwo = (num) => {
    return new Promise((resolve, reject) => {
        const result = setTimeout(() => { return console.log(num * 2) }, 2000)
        resolve(result)
        reject(err)
    })
}
promiseXTwo(5).catch(err => console.log(err))