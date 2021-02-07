export const ajax = async (bodyFields, callback = null) => {
    let body = new FormData();
    for (let field in bodyFields) body.append(field, bodyFields[field]);

    return new Promise(async (resolve, reject) => {

        // check online
        if (!navigator.onLine && callback) {
            callback('Нет подключения к интернету');
            return reject(false);
        }
        // console.log(`${window.location.origin}/core/`);
        await fetch('http://ajax.abr', {
            method: "post",
            mode  : "cors",
            body  : body
        }).then(
            response => {
                if (!response.ok) {
                    // console.log(response.statusText);
                }

                try {
                    // result - requested data
                    // console - debug output
                    let res = response.json();

                    res.then(res => {
                        // if (res.console) console.log(res.console);

                        resolve(res.result);
                    });
                } catch (error) {
                    reject('Произошла какая-то ошибка :((');
                }
            }, () => reject('Произошла какая-то ошибка :(('));
    });
}