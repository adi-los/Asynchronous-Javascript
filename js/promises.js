let p = new Promise((res, rej) => {
    let status = false;
    if(status) return res("Connection Established !")
    else return rej(new Error("Connection Denied !"))
})


p.then((stat) => console.log(stat))
   .catch((err) => console.log(err))


let p1 = Promise.resolve({id: 0, user: "root1"})

let p2 = Promise.resolve({id: 2, user: "root2"})

p1.then((msg1) => console.log({msg: msg1}))

p2.then((msg2) => console.log({msg: msg2}))


let myPro_one = new Promise((res,rej) => {
    setTimeout(() => {
        res({lang: "ar", country: "Morocco"})
    }, 7000)
})


let myPro_two = new Promise((res,rej) => {
    setTimeout(() => {
        res({lang: "en", country: "US"})
    }, 2000)
})

Promise.all([myPro_one, myPro_two])
  .then((all_promises) => console.log(all_promises))


  Promise.race([myPro_one, myPro_two])
  .then((winner_promise) => console.log(winner_promise))