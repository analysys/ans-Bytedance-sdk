/**
 * [getStoragePromise description] 获取存储
 * @param  {String} name [description]
 * @return {Function}      [description]
 */
let getStoragePromise = function (name) {
    return new Promise(function (resolve, reject) {
        try {
            let value = tt.getStorageSync(name)
            resolve(value)
        } catch (e) {
            tt.getStorage({
                key: name,
                success: function (res) {
                    resolve(res.data)
                },
                fail: function (res) {
                    resolve(res)
                }
            })
        }
    }).catch((e) => { console.log(e.message) })
}
/**
 * [setStoragePromise description]设置存储
 * @param {[type]} name  [description]
 * @param {[type]} value [description]
 */
let setStoragePromise = function (name, value) {
    return new Promise(function (resolve, reject) {
        let val = value
        try {
            tt.setStorageSync(name, val)
            resolve(200)
        } catch (e) {
            tt.setStorage({
                key: name,
                data: val,
                success: function () {
                    resolve(200)
                },
                fail: function () {
                    resolve(400)
                }
            })
        }
    }).catch((e) => { console.log(e.message) })
}
export { getStoragePromise, setStoragePromise }