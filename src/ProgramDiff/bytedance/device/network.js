function netWorkPromise () {
    let promist = new Promise(function (resolve, reject) {
        tt.getNetworkType({
            success: function (res) {
                resolve(res)
            },
            fail: function (res) {
                resolve(res)
            }
        })
    }).catch((e) => {
        console.log(e.message)
    })
    return promist
}

export {
    netWorkPromise
}