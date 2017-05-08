
const data_base = 'http://localhost:8080/api/';
// const data_base = 'http://192.168.2.12:8080/api/';
export const login = (username, password) => {
     let body = 'name='+username;
     body += '&password='+password;
     return new Promise((resolve, reject) => {
          fetch(data_base + 'user/accesstoken/', {
               method: 'POST',
               body: body,
               headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    // 'Authorization': ''
               },
          }).then((res)=> {
               console.log(res)
 
               if (res.ok) {
                    // console.log(res.json())
                    return res.json().then((data) => {
                         resolve(data);
                    })
               } else {
                    reject(res.status);
               }

          }).catch((err)=> {
               console.log('throw error')
               reject(err);
          })
     });
}

export const signup = (username, password) => {
     let body = 'name='+username;
     body += '&password='+password;
     return new Promise((resolve, reject) => {
          fetch(data_base + 'signup/', {
               method: 'POST',
               body: body,
               headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    // 'Authorization': ''
               },
          }).then((res)=> {
               if (res.ok) {
                    return res.json().then((data) => {
                         resolve(data);
                    })
               } else {
                    console.log('error')
                    resolve([]);
               }

          }).catch((err)=> {
               console.log(err);
               resolve([]);
          })
     });
}