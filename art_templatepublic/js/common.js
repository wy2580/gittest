// ////格式化文件地址（七牛）
// function formatFileUrl(file){
//     var file = arguments[0] !== undefined ? arguments[0] : '';
//     if(!file || file == '0' || file == 0){
//         file = '';
//     }
//     // var qiniuUrl = 'img.cnsa.cc/';
//     var qiniuUrl = 'oi2kndavr.bkt.clouddn.com/';
//     var fileUrl = '';
//     if(!file){//地址不存在
//         fileUrl = 'http://img.96211.com/3494490539e8f9a973a3d8b67b4b8de2' //默认图
//     }else if(file.indexOf("http://") === 0){//绝对地址
//         fileUrl = file;
//     }else{
//         if(file.indexOf("/") === -1){//七牛地址
//             fileUrl = 'http://'+qiniuUrl + file;
//         }else{//相对地址
//             fileUrl = file;
//         }
//     }
     
//     return fileUrl;
// }

//时间戳处理函数
    function getTime(timestamp) {
 
        var newDate = new Date();
        newDate.setTime(timestamp * 1000);
        Date.prototype.format = function (format) {
            var date = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return format;
            }
            return  newDate.format('MM/dd')
    }
  function getTime1(timestamp) {
        var newDate = new Date();
        newDate.setTime(timestamp * 1000);
        Date.prototype.format = function (format) {
            var date = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return format;
            }
            return  newDate.format('yyyy-MM-dd hh:mm:ss')

    }
// //打开赛事船行页面
// function openMatchShip(saveSailId){
//     $.cookie('saveSailId', saveSailId);
//     window.location.href="saishichuanxing.html";
// }
// 打开赛船信息的页面
    function openSailingDetail(sailingId){
        $.cookie('currentSailingId', sailingId);
        // $.cookie('saveSailId', saveSailId);
        window.location.href="saishichuanxing.html";
    }
//赛事成绩点击加载更多
    function matchScoreAddMore(infiId,matchname,cid,type){
        $.cookie('match_score_id', infiId);
        $.cookie('match_score_name', matchname);
        $.cookie('match_score_cid', cid);
        $.cookie('match_score_type', type);
        window.location.href="historyScore.html";
    }
//赛事直击点击加载更多
    function matchAddMore(infiId,matchname,cid,type){
        $.cookie('match_more_id', infiId);
        $.cookie('match_more_name', matchname);
        $.cookie('match_more_cid', cid);
        $.cookie('match_more_type', type);
        window.location.href="newslist.html";
    }
//赛事信息详情页面,将赛事新闻的比赛名称传入cookie里。
    function matchInfo(infiId,matchname,cid,type){
        $.cookie('match_infi_id', infiId);
        $.cookie('match_name', matchname);
        $.cookie('match_cid', cid);
        $.cookie('match_type', type);
        window.location.href="saishijieshao.html";
    }
//图片上传页面,将赛事主页的相关ID传入cookie里。
    function imageUploadInfo(infoId,matchname,cid,type){
        $.cookie('match_image_id', infoId);
        $.cookie('match_image_name', matchname);
        $.cookie('match_image_cid', cid);
        $.cookie('match_image_type', type);
        window.location.href="tupian01.html";
    }
//视频上传页面,将赛事主页的相关ID传入cookie里。
    function vedioUploadInfo(infoId,matchname,cid,type){
        $.cookie('match_vedio_id', infoId);
        $.cookie('match_vedio_name', matchname);
        $.cookie('match_vedio_cid', cid);
        $.cookie('match_vedio_type', type);
        window.location.href="shipinbofang.html";
    }
//赛船轨迹,将赛事新闻的比赛名称传入cookie里。
    function shipTailInfo(infiId,matchname,cid,type){
        $.cookie('match_map_infi_id', infiId);
        $.cookie('match_map_name', matchname);
        $.cookie('match_map_cid', cid);
        $.cookie('match_map_type', type);
        window.location.href="shipTail.html";
    }

//单个赛事首页icon区域关于赛事的a标签的函数
    function aboutMatchA(matchId,matchName){
        $.cookie('match_infi_id', infiId);
        $.cookie('match_name', matchname);
        window.location.href="saishijieshao.html";
    }
//赛事公告点击跳入链接函数
    // function annocumentMatch(matchId,annocumentCid,matchname,type){
    //     $.cookie('match_annocu_id', matchId);
    //     $.cookie('match_annocu_cid', annocumentCid);
    //     $.cookie('match_annocu_name', matchname);
    //     $.cookie('match_map_type', type);
    //     window.location.href="matchNotices.html";
    // }
    function matchLinkaDetial(matchId,linkaCid,matchname,type){
        $.cookie('match_linka_id', matchId);
        $.cookie('match_linka_cid', linkaCid);
        $.cookie('match_linka_name', matchname);
        $.cookie('match_linka_type', type);
        window.location.href="matchDetial.html";
    }
 //打开相应船队主页
    function openTeamDetail(teamId){
        $.cookie('teamMainPageTeamId', teamId);
        window.location.href="chuanduizhuye.html";
    }
// 打开赛事新闻列表
    function openNewDetail(newType){
        $.cookie('currentNewType', newType);
        window.location.href="newslist.html";
    }

 //二期首页获取赛事ID
    function MatchId(newMatchId){
        $.cookie('new_MatchId', newMatchId);
        window.location.href="noindex.html";
    }    
//首页赛事行程将赛事名字存在cookie里
    function saveMatchName(matchName){
        $.cookie('match_Name', matchName);
        return $.cookie('match_Name');
    }
//首页赛事行程将赛事名字存在cookie里
    function saveLevelSailingId(SailingId){
        $.cookie('levelSailingId', SailingId);
        window.location.href="historyScore.html";
    }
//不同赛事底部的合作伙伴和信息展示
    //司南杯
    function siNanBeiCooperate(){
           return $(['<div class="zuweihui">',
             '<p class="chengbandanweip">指导单位：中国帆船帆板运动协会、海南省文化广电出版体育厅</p>',
             '<p class="chengbandanweip">主办单位：三亚市人民政府、三沙市人民政府</p>',
             '<p class="chengbandanweip">支持单位：海南省海防与口岸办公室、交通部南海救助局三亚基地</p>',
             '<p class="chengbandanweip">承办单位：三亚市文化广电出版体育局、三亚司南航海推广发展有限公司</p>',
             '<p class="chengbandanweip">协办单位：三亚亚龙湾游艇会</p>',
           '</div>',
           '<div class="zhidaodanwei">',
              '<p class="chengbandanweip">司南杯大帆船赛组委会</p>',
              '<p class="chengbandanweip">三亚司南航海推广发展有限公司</p>',
              '<p class="chengbandanweip">地址：海南省三亚市榆亚大道2号鸿洲时代海岸2号楼2601室</p>',
              '<p class="chengbandanweip">电话：0898-88601866</p>',
              '<p class="chengbandanweip">报名咨询：baoming2016@sinanregatta.com</p>',
              '<p class="chengbandanweip">媒体联络：media@sinanregatta.com</p>',
           '</div>',
        ].join(''));
    }
    // 黄海杯
    function huanghaiBeiCooperate(){
        return $([
        '<div class="zuweihui">',
            '<p class="chengbandanweip">主办：镇海（北京）网络科技有限公司</p>',
            '<p class="chengbandanweip">地址：北京市东城区朝阳门SOHO </p>',
            '<p class="chengbandanweip">联系电话：+86 18562623669（徐鹏)</p>',
        '</div>',
        // '<div class="lianxifangshi">',
        //     '<p class="chengbandanweip">报名咨询：baoming2016@sinanregatta.com </p>',
        //     '<p class="chengbandanweip">媒体联络：media@sinanregatta.com </p>',
        // '</div>',
        // '<div class="zhidaodanwei">',
        //     '<p class="chengbandanweip">指导单位：中国帆船帆板运动协会、海南省文化广电出版体育厅</p>',
        //     '<p class="chengbandanweip">主办单位：三亚市人民政府、三沙市人民政府 </p>',
        //     '<p class="chengbandanweip">支持单位：海南省海防与口岸办公室、交通部南海救助局三亚基地 </p>',
        //     '<p class="chengbandanweip">承办单位：三亚市文化广电出版体育局、三亚司南航海推广发展有限公司 </p>',
        //     '<p class="chengbandanweip">协办单位：三亚亚龙湾游艇会 </p>',
        // '</div>',
        ].join(''));
    }
    //没有数据的赛事默认信息
    function defaultInfoCooperate(){
        return $([
            '<div class="zuweihui">',
            '    <p class="chengbandanweip">指导单位：**帆船帆板运动协会、**省文化广电出版体育厅</p>',
            '    <p class="chengbandanweip">主办单位：**市人民政府、**市人民政府</p>',
            '    <p class="chengbandanweip">支持单位：**省海防与口岸办公室、交通部**救助局**基地</p>',
            '    <p class="chengbandanweip">承办单位：**市文化广电出版体育局、*****航海推广发展有限公司</p>',
            '    <p class="chengbandanweip">协办单位：**湾游艇会</p>',
            '</div>',
            '<div class="lianxifangshi">',
                '<p class="chengbandanweip">**杯帆船赛组委会</p>',
                '<p class="chengbandanweip">**航海推广发展有限公司</p>',
            '</div>',
            '<div class="zhidaodanwei">',
                '<p class="chengbandanweip">地址：**省**市**大道*号****</p>',
                '<p class="chengbandanweip">电话：0898-88888888 </p>',
                '<p class="chengbandanweip">报名咨询：baoming2016@cnsa.cc </p>',
                '<p class="chengbandanweip">媒体联络：media@cnsa.cc</p>',
            '</div>',
        ].join(''));
    }
    if($.cookie('new_MatchId')==15){
        $("#organizerSafe").empty();
        $("#organizerSafe").append(siNanBeiCooperate());
        $(".cooperateLogo").attr({'src':'../images/sinanBai_cooperate.png'});
        $(".organizerLogo").attr({'src':'../images/sinanBei_organizer.png'});
        $(".logoimg").attr({'src':'../images/logorace.svg'});

    }else if($.cookie('new_MatchId')==1){
        $("#organizerSafe").empty();
        $("#organizerSafe").append(huanghaiBeiCooperate());
        $(".cooperateLogo").attr({'src':'../images/huanghaicooperateLogo.png'});
        $(".organizerLogo").attr({'src':'../images/huanghaiorganizierLogo.png'});
        $(".logoimg").attr({'src':'../images/huanghaiMatchLogo.png'});
        $(".logoimg").css({'width': '3.72rem', 'height': '1.98rem','margin-top': '-.99em','right':'20%'});

    }else{
        $("#organizerSafe").empty();
        $("#organizerSafe").append(defaultInfoCooperate());
        $(".cooperateLogo").attr({'src':'../images/cooperation.svg'});
        $(".organizerLogo").attr({'src':'../images/cooperation.svg'});
        $(".logoimg").attr({'src':'../images/logo_race.svg'});
        $(".logoimg").css({'width': '1.32rem', 'height': '1.12rem','margin-top': '-.56em'});

    }