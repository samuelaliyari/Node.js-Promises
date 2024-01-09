const randomNum = () => {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 10);
        console.log(number)
        if (number < 6)
            reject("is smaller than 6")
        resolve(number)
    })
}
randomNum()
    .then(number => number)
    .catch(err => console.log(err))