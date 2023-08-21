console.log(1)

getRepo("gitlab cli", (repo) => {
    console.log(repo)
    console.log("#".repeat(15))
    addChanges('index.html style.css readme.txt', (added) => {
        console.log(added)
        console.log("#".repeat(15))
        getCommit('Add Ar Language To Application', (commmit) => {
            console.log(commmit)
            console.log("#".repeat(15))
            getPush("master", (push) => {
                console.log(push)
                console.log("#".repeat(15))
                let reports = `
                    ############REPORT STATUS###############
                        REPO: ${repo.myRepo}
                        FILES: ${added.Includes}
                        COMMIT: ${commmit.Commit_m}
                        ORIGIN: ${push.push_origin}
                        STATUS: 200 OK ${true} 100/100 ----- DONE !
                    ########################################
                `
                report(reports, (report) => {
                    console.log(report)
                })
            })
        })
    })
})

console.log(3)



function getRepo(repo, callback) {
    setTimeout(() => {
        console.log("Fetching User: ")
        callback({myRepo: repo})
}, 3000)}



function addChanges(add, callback) {
    setTimeout(() => {
        console.log("Add Changes: ")
        callback({Includes: add, adding_status: true})
}, 4000)}

function getCommit(commit, callback) {
    setTimeout(() => {
        console.log("Commit Changes: ")
        callback({Commit_m: commit, commit_status: true})
}, 3000)}


function getPush(origin, callback) {
    setTimeout(() => {
        console.log("Push Changes: ")
        callback({push_origin: origin, push_status: true})
}, 7000)}


function report(reports, callback){
    setTimeout(() => {
        console.log("Report: ")
        callback({report: reports, report_status: true})
}, 5000)}