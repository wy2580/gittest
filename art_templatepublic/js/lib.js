//获取赛事ID
function getMatchId(){
    return '1';
}
//获取赛事Name
// function getMatchName(){
//     return '2016年第一届“黄海杯”帆船赛';
// }

//获取API主机
function getApiUrl(){
    return 'http://api.hanghai.onairm.cn';
    return 'http://api.hanghai.onairm.cn';
}
//同步发送GET请求，返回请求数据的data部分
function getData(config){
    var url = config.url || '';
    var param = config.data || {};
    var data = false;
    jQuery.ajax({
        url: getApiUrl() + url,
        data:param,
        type:"GET",
        async:false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend:function(){},
        success:function(returnData){
            //提醒用户
            var dataRaw = JSON.parse(returnData);
            if(dataRaw.statusCode+'' === '0'){//成功
                //清除登录用户cookie
                if(dataRaw.loginStatus+'' === '0'){
                    $.cookie('current_user', null);
                }
                data = dataRaw.data;
            }
        },
        error:function(){
            alert('网络请求失败！');
        }
    });
    return data;
}

//同步发送GET请求,返回请求的全部数据
function getAllData(config){
    var url = config.url || '';
    var param = config.data || {};
    var data = false;
    jQuery.ajax({
        url: getApiUrl() + url,
        data:param,
        type:"GET",
        async:false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend:function(){},
        success:function(returnData){
            //提醒用户
            var dataRaw = JSON.parse(returnData);
            if(dataRaw.statusCode+'' === '0'){//成功
                //清除登录用户cookie
                if(dataRaw.loginStatus+'' === '0'){
                    $.cookie('current_user', null);
                }
                data = dataRaw;
            }
        },
        error:function(){
            alert('网络请求失败！');
        }
    });
    return data;
}


//异步发送POST请求
function postData(config){
    var url = config.url || '';
    var param = config.data || {};
    var callback = config.callback || function(){};
    jQuery.ajax({
        url : getApiUrl() + url,
        data : param,
        type : "POST",
        async : true,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend:function(){},
        success:function(returnData){
            //提醒用户
            var dataRaw = JSON.parse(returnData);
            if(dataRaw.statusCode+'' === '0'){//成功
                //清除登录用户cookie
                if(dataRaw.loginStatus+'' === '0'){
                    $.cookie('current_user', null);
                }
                callback(dataRaw.data || {});
            }else{//其它错误
                alert('信息有误！');
            }
        },
        error:function(){
            alert('网络请求失败！');
        }
    });
    return false;
}
//获取当前登录用户,如果未登录返回false
function getLoginUser(){
    var userJson = $.cookie('current_user');
    return userJson ? JSON.parse(userJson) : false;
}
//
//格式化文件地址（七牛）
function formatFileUrl(file, defaultFile){
    var file = arguments[0] !== undefined ? arguments[0] : '';
    if(!file || file == '0' || file == 0){
        file = '';
    }
    var defaultFile = arguments[1] !== undefined ? arguments[1] : '/img/logo.png';
    var qiniuUrl = 'http://img.cnsa.cc/';
    var fileUrl = '';
    if(!file){//地址不存在
        if(defaultFile.indexOf("http://") === 0){//默认地址为绝对地址
            fileUrl = defaultFile;
        }else if(defaultFile.indexOf("/") === -1){//默认地址为七牛地址
            fileUrl = qiniuUrl + defaultFile;
        }else{//默认地址为相对地址
            fileUrl = defaultFile;
        }
    }else if(file.indexOf("http://") === 0){//绝对地址
        fileUrl = file;
    }else{
        if(file.indexOf("/") === -1){//七牛地址
            fileUrl = qiniuUrl + file;
        }else{//相对地址
            fileUrl = file;
        }
    }
    return fileUrl;
}
//初始化用户信息
function initUserInfo(){
    var user = getLoginUser();
    if(!user){
        return false;
    }
    $('#userIcon').attr('src', formatFileUrl(user.icon, '/images/chengyuan1.png'));
    $('#userNickname').html(user.realName || user.nickName);
    $('#userPhone').html(user.phone);
}
//验证用户登录
function loginCheck(){
    if(!getLoginUser()){
        window.location.href="dengluzhuce.html";
        // $(".back").on("click",function(){
        //     window.history.back(-1); 
        // });
        return false;
    }
    return true;
}
//格式化日期时间
function formatDate(timestamp, defaultDate){
    var defaultDate = defaultDate || '';
    if(!timestamp && defaultDate !== 'now'){
            return defaultDate;
    }
    var now = timestamp ? new Date(parseInt(timestamp) * 1000) : new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var formatNumber = function(number){
        return (number > 9 ? number : ('0' + number));
    }
    return year + "." + formatNumber(month) + "." + formatNumber(day);
}
//获取船员角色列表
function getMemberRoleMap(){
    return {
        r_1 : '船长',
        r_2 : '战术师',
        r_3 : '舵手',
        r_4 : '领航',
        r_5 : '导航',
        r_6 : '瞭望',
        r_7 : '前甲板',
        r_8 : '主缭',
        r_9 : '前缭',
        r_10 : '主帆手',
        r_11 : '前帆手',
        r_12 : '球帆手',
        r_13 : '船员',
        r_14 : '水手',
        r_15 : '机械师'
    };
}
//初始化用户头像
(function(){
    var currentUser = getLoginUser();
    if(!currentUser){
        $('.headsuoluetu').attr('src', 'images/weidenglu.png');
    }else{
        $('.headsuoluetu').attr('src', formatFileUrl(currentUser.icon, '9a7127776928f53d4dac809d4b92f176'));
        
    }
})();