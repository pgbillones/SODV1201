let x = new Promise((resolve, reject)=>{
    let a = 4 - 2

    if (a == 2)
    {
        resolve('Correct!')
    }
    else
    {
        reject('Wrong!')
    }
})
x.then((message)=>{
    console.log('It is then ' + message)
}).catch((message)=> {
    console.log('It is then ' + message)
})