$(function(){
    newMatchId=$.cookie('new_MatchId');
    $.ajax({
        type:"GET",
        url: "http://api.hanghai.onairm.cn/match/getInfo",
        dataType:"json",
        data: {"matchId":newMatchId},    
        async:true,  
        cache:true,  
        success: function(data){
            if(data.statusCode==0){
                if(!data.data){
                    return;
                }
                var top_ =null;
                var matchLunbo=data.data['matchLunbo'];
                var matchDate=data.data['matchDate'];
                var matchSailing =data.data['matchSailing']; 
                shipType=matchSailing;
                var matchRanking =data.data['matchRanking'];
                var matchTeam=data.data['matchTeam'];
                var matchNews=data.data['matchNews'];
                var matchForum=data.data['matchForum'];
                var matchPlan=data.data['matchPlan'];
            //初始化是判断是否有数据，如果没有模块隐藏
                if(matchLunbo==0){
                    $(".syhead").hide();
                }
                if(matchRanking==0){
                    $("#matchScoreHead").hide();
                    $("#matchScoreCon").hide();
                }
                if(matchTeam==0){
                    $("#matchTeamIntro").hide();
                }
                if(matchNews==0){
                    $("#matchNewsZhiji").hide();
                }
                if(matchForum==0){
                    $("#matchForum").hide();
                }
                if(matchPlan==0){
                    $("#matchArrange").hide();
                }
            //比赛名字和位置
                $("#matchName").text(data.data['matchName']);
                document.title=data.data['matchName'];
                $("#weizhi").text(data.data['matchArea']);
                saveMatchName(data.data['matchName']);
            //轮播图上面的日期，提示信息
                var itemHtml=""; 
                var strHead='';
                strHead+='<h2 class="syh">'+data.data.matchName+'</h2>';
                strHead+='<div class="floatright hidden">';
                strHead+='<span class="weizhi">'+data.data.matchArea+'</span>';
                strHead+='<a href="#" class="weizhimap"></a>';
                strHead+='</div>';
                $("#shouyehead").html(strHead);
                // $("div h2.syh").eq(0).text(data.data.matchName);
                // $(".weizhi").text(data.data.matchArea);
                var str1='';
                var str2='';
                var str3='';
                str1+='<span class="span span1">Day:</span><span class="span spancount">'+data.data.matchDate.theDay+'</span>/<span class="span">'+data.data.matchDate.totalDays+'</span>';
                str2+='<span class="span">'+getTime(matchDate['begin'])+'</span><span class="span">-</span><span class="span">'+getTime(matchDate['end'])+'</span>';
                $("#headdate").html(str1);
                $("#headday").html(str2);

            //轮播部分
                $.each(matchLunbo,function(index,item){   
                    if(!item['link']){
                      item['link'] = 'javascript:;';
                    }     
                    itemHtml+='<div class="swiper-slide"><a class="sybannera" link="'+item['link']+'" type="'+item['type']+'" matchId="'+item['matchId']+'" content="'+item['content']+'" cid="'+item['cid']+'" href="'+item['link']+' "><img src="'+formatFileUrl(item['icon'])+'?imageView2/1/w/750/h/500'+'" alt="" link="'+item['link']+'" class="sybanner"></a></div>'; 
                });
                $("#swiperhuadong").html(itemHtml);
            //船型部分
                
                $.each(matchSailing,function(index,item){

                     str3+='<a href="javascript:openSailingDetail(\''+item['sailingId']+'\');" class="chuanxinga"><span class="innerspan">'+item['name']+'</span></a>';
                     // str3+='<a href="saishichuanxing.html?sailingId='+item['sailingId']+'" class="chuanxinga"><span class="innerspan">'+item['name']+'</span></a>';   
                });
                $(".syxinghao").html(str3);
            //icon部分增加cid
                $('#aboutMatchA').attr('href', 'javascript:matchInfo(\''+data.data['matchId']+'\',\''+data.data['matchName']+'\',\''+data.data['matchAboutCid']+'\',1)');
                
                $('#pictureA').attr('href', 'javascript:imageUploadInfo(\''+data.data['matchId']+'\',\''+data.data['matchName']+'\',\''+data.data['matchAboutCid']+'\',1)');
                $('#vedioA').attr('href', 'javascript:vedioUploadInfo(\''+data.data['matchId']+'\',\''+data.data['matchName']+'\',\''+data.data['matchAboutCid']+'\',1)');
                $('#annocumentMatchA').attr('href', 'javascript:matchLinkaDetial(\''+data.data['matchId']+'\',\''+data.data['matchAnnouncementCid']+'\',\''+data.data['matchName']+'\',2)');
                $('#matchMapA').attr('href', 'javascript:matchLinkaDetial(\''+data.data['matchId']+'\',\''+data.data['matchAreaCid']+'\',\''+data.data['matchName']+'\',3)');
                $('#registerA').attr('href', 'javascript:matchLinkaDetial(\''+data.data['matchId']+'\',\''+data.data['matchJoinMacthCid']+'\',\''+data.data['matchName']+'\',10)');
                $('#lifeViewA').attr('href', 'javascript:matchLinkaDetial(\''+data.data['matchId']+'\',\''+data.data['matchLifeCid']+'\',\''+data.data['matchName']+'\',9)');
                $('#questionViewA').attr('href', 'javascript:matchLinkaDetial(\''+data.data['matchId']+'\',\''+data.data['matchQuestionCid']+'\',\''+data.data['matchName']+'\',4)');
                $('#matchShipA').attr('href', 'javascript:openSailingDetail()');
            //判断是否显示轨迹页面
                if(data.data['matchTrackingStatus']==1){
                    $('#shipTaila').attr('href', 'javascript:shipTailInfo(\''+data.data['matchId']+'\',\''+data.data['matchName']+'\',\''+data.data['matchAboutCid']+'\',1)');
                }else{
                    $('#shipTaila').attr('href','javascript:;');
                    $('#shipTaila').click(function(){
                        alert('本次比赛暂未启用CNSA船位轨迹服务，如需开启，请联系18611106662');
                    })
                }
               
               //图片icon增加cid和matchId
               // $('#matchChiheBtn').attr('matchId', 'javascript:openSailingDetail(\''+item['sailingId']+'\')');
            //比赛成绩部分
                $('#addMoreScore').attr('href', 'javascript:matchScoreAddMore(\''+data.data['matchId']+'\',\''+data.data['matchName']+'\',\''+data.data['matchAboutCid']+'\',1)');
                var str6='';
                var str7='';
                $.each(matchRanking,function(index,item){
                    if(item['rank']==0){
                        $("#matchScoreHead").hide();
                        $("#matchScoreCon").hide();
                        console.log("yincang");
                        return;
                    }
                    str6+='<li class="chengjili hidden">';
                    str6+='<a href="javascript:saveLevelSailingId(\''+item['sailingId']+'\')" class="chengjip" sailingId="'+item['sailingId']+'">'+item['name']+'</a>';
                    str6+='<img src="images/wave.svg" alt="" class="smwave">';
                    str6+='<div class="chengjimingci hidden">';
                    var i=0;
                    $.each(item['rank'],function(index,item){

                        i++;
                        if(i>6){
                          return;
                        }
                          str6 += '<div class="mingcixiangqing hidden">';
                          str6 += '<a href="javascript:;" class="lilinka bscjap" >';
                          str6 += '<p class="indexduiming" id="levelP'+item['teamId']+'" teamId="'+item['teamId']+'">'+item['name']+'</p>';
                          str6 += '<p class="mingci">'+item['score']+'</p>';
                          str6 += '</a>';
                          str6 += '</div>';
                    });
                    str6+='</div>';
                    str6+='</li>';
                }); 
                 $(".chengjiul").html(str6);
                var wid1=3.15*($(".chengjiul li").length)+"rem";
                $("#gradsrcoller").width(wid1);
                $(".chengjiul").width(wid1);
                // $(".chengjiul li").each(function(){
                //     console.log($(this).height());
                // })
                var liminHeight=$(".chengjiul").height();
                $(".chengjiul li").css({'min-height':liminHeight})
                
                //滑动事件代码
                var myScroll1 = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: false,preventDefault: true ,eventPassthrough: true });
                $(".chuanduijieshaodiv").on("touch",function(e){
                    e.preventDefault();
                })
            //船队介绍部分
                var str8='';
                var teamNum = 0;
                $.each(matchTeam,function(index,item){
                    if($("#shipTeamSailingId"+item['teamId']).length<=0){
                        teamNum++;
                        str8+='<a href="javascript:openTeamDetail(\''+item['teamId']+'\');" id="shipTeamSailingId'+item['teamId']+'" class="chuanduia">';
                        // str8+='<img src="'+formatFileUrl(item['icon'])+'?imageView2/1/w/200/h/280'+'" alt="" class="chuanduiimg" teamId="'+item['teamId']+'" >';
                        str8+='<img src="'+formatFileUrl(item['icon'], '/../images/shipteam_img.png')+'?imageView2/1/w/200/h/280'+'" alt="" class="chuanduiimg" teamId="'+item['teamId']+'" >';
                        str8+='<h3 class="chuanduimingzi" teamId="'+item['teamId']+'">'+item['name']+'</h3>';
                        str8+='</a>';
                        $(".chuanduijieshaodiv").html(str8);

                    }
                });
             //修改船队总数
                $("#teamCount").html(teamNum+"支船队参赛");
                var wid2=2.1*$(".chuanduijieshaodiv a").length+"rem";
                // alert(wid2)
                $("#shipscroller").width(wid2);
                $(".chuanduijieshaodiv").width(wid2);
                var myScroll2 = new IScroll('#scroller', { scrollX: true, scrollY: false, mouseWheel: false,preventDefault: true ,eventPassthrough: true });
            //赛事论坛部分
                var str9='';
                 $.each(matchForum,function(index,item){
                     if($("#luntanli"+item['cid']).length<=0){
                         str9+='<li class="luntanli luntanli1" id="luntanli'+item['cid']+'">';
                         str9+='<a href="'+item['link']+'" class="luntana" target="_blank" teamId="'+item['teamId']+'">· '+item['title']+' </a>';
                         str9+='</li>';
                     }

                    var luntanItem=$(str9);
                    if(!item['link']){
                         luntanItem.find('a').attr('href', 'javascript:matchInfo("'+item['cid']+'")');   
                    }
                });
                $("#saishiluntaiul").empty();
                $("#saishiluntaiul").html(str9);
            //赛事直击
                var str10='';
                $.each(matchNews,function(index,item){
                    if($("#saishizhijili"+item['cid']).length<=0){
                        str10+='<li class="saishizhijili" id="saishizhijili'+item['cid']+'">';
                        str10+='<div class="safe hidden">';
                        str10+='<a href="javascript:matchInfo(\''+item['matchId']+'\',\''+item['name']+'\',\''+item['cid']+'\',\''+item['type']+'\');" class="lilinka" cid="'+item['cid']+'" matchId="'+item['matchId']+'" content="'+item['content']+'" link="'+item['link']+'" type="'+item['type']+'">';
                        str10+='<h2 class="saishizhijih">'+item['title']+'</h2>';
                        str10+='<div href="javascript:;" class="zhijijieshao">';
                        str10+='<img src="'+formatFileUrl(item['icon'])+'?imageView2/1/w/270/h/180'+'" alt="" class="zhijijieshaoimg">';
                        str10+='<div class="shjswenzi">';
                        str10+='<p class="shzjwenzip">'+item['description']+'</p>';
                        str10+='<p class="shzjwenzitime">'+getTime1(item['createdTime'])+'</p>';
                        str10+='</div>';
                        str10+='</div>';
                        str10+='</a>';
                        str10+='</div>';
                        str10+='</li>';
                    }
                });
                $("#shouyesaishijizhi").empty();
                $("#shouyesaishijizhi").append(str10);
                $(".saishizhijili:last").css({border:"none"});
                $("#jiazaimoreaNew").attr('href', 'javascript:openNewDetail("'+matchNews['type']+'")');
                $('#jiazaimoreaNewMatch').attr('href', 'javascript:matchAddMore(\''+data.data['matchId']+'\',\''+data.data['matchName']+'\',\''+data.data['matchAboutCid']+'\',1)');
              
            //赛事行程
                var str11='';
                var str12='';
                $.each(matchPlan,function(index,item){
                    $("#saishishijian").empty();
                    $("#journeyarrange").empty();
                    str11+='<a href="javascript:;" class="jadate jadate1">'+item['title']+'</a>';
                    str12+='<div class="jacontent jaconp">'+item['content']+'</div>';
                });
                $("#saishishijian").empty();
                $("#journeyarrange").empty();
                $("#saishishijian").html(str11);
                $("#journeyarrange").html(str12);
                var jadateWidth=1.39*$('.jadate').length+'rem';
                $("#saishishijian").width(jadateWidth);
                var myScroll5 = new IScroll('#matchArrangeConTitle', { scrollX: true, scrollY: false, mouseWheel: false,preventDefault: true ,eventPassthrough: true });
                $("#matchArrangeConTitle").on("touch",function(e){
                    e.preventDefault();
                })
             //点击事件和行程样式更改      
                // (function(){
                    $("#saishishijian a").eq(0).css({color:"#55ccff",borderBottom:".04rem solid #55ccff"});
                    $("#journeyarrange div.jacontent").hide();
                    $("#journeyarrange div").eq(0).show();
                    $("#saishishijian").on("click",'a.jadate',function(){
                        $("#saishishijian a").css({color:"#fff",borderBottom:"none"});
                        $("#journeyarrange div.jacontent ").hide();
                        var y=$(this).index();
                        $(this).css({color:"#55ccff"});
                        $(this).css({borderBottom:".04rem solid #55ccff"});
                        $("#journeyarrange div.jacontent").eq(y).show();
                    });
                // })();
            }
            
        }
    });
});




