const square = (num) => {
    return new Promise((resolve, reject) => {
        const squared = num * num
        resolve(squared)
        reject(err)
    })

}


const tripleSquare = (num) => {
    square(num).then(squared => square(squared)).then(squared => square(squared)).then(squared => console.log(squared)).catch(err => console.log(err))
}


tripleSquare(2)