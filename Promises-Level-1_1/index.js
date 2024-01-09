const promiseXTwo = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 2), 2000)
    })
}
promiseXTwo(5).then(result => console.log(result)).catch(err => console.log(err))