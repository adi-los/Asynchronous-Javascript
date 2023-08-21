async function getDetails(id, ...user){
    if(id !== "undefined" && user.length > 0){
        return "User Signed Up Successfully !"
    }
    else{
        throw new Error("User Not Signed Up!")
    }
}


getDetails(0,"adil", "badr", "wassim")
   .then((msg) => console.log(msg))
   .catch((err) => console.log(err))



let myPromise = new Promise((res, rej) => {
    res("Hello Everyone I'm Running Because Of Await Keyword")
})

async function doEverything(){
    console.log("Reading...")
    console.log("Starting...")
    console.log(await myPromise)
}

doEverything()