let myPromise = new Promise((res, rej) => {
    let users = new Array(["adilos"])
    if(users.length > 0) {
        res(users)
    }else{
        rej(new Error("Users Not Found"));
    }
})


async function doThis(){
   try{
    console.log(await myPromise)
   }
   catch(err){
    console.log(new Error(err))
   }
   finally{
    console.log("Opeartion Done!")
   }
}

doThis()
