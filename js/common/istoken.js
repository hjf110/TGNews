dd.ready(function () {
    const loginIn = (id) => {
        dd.runtime.permission.requestAuthCode({
            corpId: Api.corpId, // 企业id
            onSuccess: function (info) {
                // alert(JSON.stringify(info));
                let code = info.code;// 通过该免登授权码可以获取用户身份
                ajaxSubmit({code: code, appId: id}, Api.Login.ing, "GET", (e) => {
                   sessionStorage.setItem("isLogin","true");
                    let aa = e.data;
                    // alert(JSON.stringify(aa));
                    //存入用户信息

                    localStorage.setItem("startTime", updateTime(2));
                    localStorage.setItem("token", aa.token);
                    localStorage.setItem("userId", aa.id);
                    localStorage.setItem("userName", aa.name);
                    localStorage.setItem("userIcon", aa.icon);

                }, (err) => {
                    sessionStorage.setItem("isLogin","false");
                    // app.errorMsg = err;
                });
            },
            onFail: function (err) {
                alert(JSON.stringify(err));
                // console.log(err);
            }
        });

    };



    var token = localStorage.getItem('token');
    if (token == null || token == "") {
        loginIn(appid);
    }else{
        setInterval(() => {
            if (timeFn(localStorage.getItem("startTime")) > 14410) {
                loginIn(appid);
            }
        }, 1000);
    }
});
