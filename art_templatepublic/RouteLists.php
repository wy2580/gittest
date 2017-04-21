<?php

namespace App\Utils;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class RouteLists {

	public $VERSION_MAX = '2.0.0';
	//所有route的规则
	public $lists = array(
		//获取验证码
		'verifyCode' => array(
			'route' => '/user/verifyCode',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1',
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端 2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'type' => array('isNull' => FALSE, 'value' => array('1', '2')), //type 1 必须存在用户名  2、必须不存在用户名
						'username' => array('isNull' => FALSE, 'value' => array('isPhone'))
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				)
			)
		),
		//用户登录
		'login' => array(
			'route' => '/user/login',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'type' => array('isNull' => FALSE, 'value' => array('1', '2')), //登录方式 1 普通登录，2 验证码登录
						'username' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 1024)),
						'password' => array('isNull' => TRUE),
						'verifyCode' => array('isNull' => TRUE, 'value' => array('isNumber'), 'length' => array('min' => 1, 'max' => 10))
					),
					'return' => '{"statusCode":0,"message":"成功","timestamp":1481162780,"data":{"userId":"hanghai5848bbff5b238788415727","userName":"航海13146594799","nickname":"hanghai_5848bbff5b281","phone":"13146594799","phoneIsVerify":true,"iconUrl":"","gender":"secret","email":"","emailIsVerify":false,"address":"","birthday":0,"regdate":1481161727,"slogan":"","occupation":null}}',
					'debug' => FALSE
				),
			),
		),
		//用户注册
		'register' => array(
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'username' => array('isNull' => FALSE, 'value' => array('isPhone'), 'length' => array('min' => 0, 'max' => 1024), 'isUser' => FALSE),
						'verifyCode' => array('isNull' => FALSE, 'value' => array('isNumber'), 'length' => array('min' => 0, 'max' => 10)),
						'password' => array('isNull' => FALSE, 'length' => array('min' => 6, 'max' => 100)),
						'nickname' => array('isNull' => TRUE)
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//用户登出
		'logout' => array(
			'route' => '/user/logout',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//更新用户信息
		'updateUserInfo' => array(
			'route' => '/user/updateUserInfo',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
						'IDNumber' => array('isNull' => FALSE, 'length' => array('min' => 16, 'max' => 18)),
						'realName' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 10)),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//加入船队
		'jionTeam' => array(
			'route' => '/user/jionTeam',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => TRUE, 'value' => array('isNumber')),
						'teamId' => array('isNull' => TRUE, 'value' => array('isNumber'))
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//创建船队
		'createTeam' => array(
			'route' => '/team/createTeam',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => FALSE, 'value' => array('isNumber')),
						'teamName' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'teamEnglishName' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'uName' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'phone' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'telExtra' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'clubName' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'clubAddress' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'tel' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'icon' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'description' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//更新配置船员信息
		'updateTeamMember' => array(
			'route' => '/team/updateMember',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => TRUE, 'value' => array('isNumber')),
						'teamId' => array('isNull' => TRUE, 'value' => array('isNumber')),
						'memberJson' => array('isNull' => FALSE),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//船队加入赛事
		'jionMatch' => array(
			'route' => '/team/jionMatch',
			'method' => 'post',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => TRUE, 'value' => array('isNumber')),
						'sailingId' => array('isNull' => TRUE, 'value' => array('isNumber')),
						'teamId' => array('isNull' => TRUE, 'value' => array('isNumber')),
						'teamName' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'area' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'club' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100)),
						'sponsor' => array('isNull' => FALSE, 'length' => array('min' => 1, 'max' => 100))
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//获取用户创建的船队列表
		'getUserTeamList' => array(
			'route' => '/user/getTeamList',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//获取赛事船队列表 saillingId 可不传-暂未用
		'getMatchTeamList' => array(
			'route' => '/team/getMatchTeamList',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => FALSE, 'value' => array('isNumber')),
						'saillingId' => array('isNull' => TRUE, 'value' => array('isNumber'))
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//获取船队详情
		'getTeamDetail' => array(
			'route' => '/team/getTeamDetail',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'teamId' => array('isNull' => TRUE, 'value' => array('isNumber'))
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		),
		//获取赛事信息
		'getMatchInfo' => array(
			'route' => '/match/getInfo',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => TRUE, 'value' => array('isNumber')),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => false
				),
			),
		),
		//获取赛船详情
		'getSailingDetail' => array(
			'route' => '/sailing/getSailingDetail',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'sailingId' => array('isNull' => FALSE, 'value' => array('isNumber')),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => false
				),
			),
		),
		//获取赛事赛船级别类型列表
		'getMatchSailingList' => array(
			'route' => '/match/getMatchSailingList',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => FALSE, 'value' => array('isNumber')),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => false
				),
			),
		),
		//获取经理人的船队 加入赛事报名
		'getIsMatchEnroll' => array(
			'route' => '/match/getIsMatchEnroll',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => FALSE, 'value' => array('isNumber')),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => false
				),
			),
		),
		//获取内容详情
		'getContentDetail' => array(
			'route' => '/match/getContentDetail',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'cId' => array('isNull' => FALSE, 'value' => array('isNumber')),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => false
				),
			),
		),
		//获取资源列表
		'getResourceList' => array(
			'route' => '/match/getResourceList',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 2, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 0, //0不验证登录 1 验证登录
					'parameters' => array(
						'matchId' => array('isNull' => FALSE, 'value' => array('isNumber')),
						'type' => array('isNull' => FALSE, 'value' => array('1', '2')),
						'page' => array('isNull' => FALSE, 'value' => array('isNumber')),
						'size' => array('isNull' => FALSE, 'value' => array('isNumber')),
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => false
				),
			),
		),
		//获取config暂未用
		'getConfig' => array(
			'route' => '/base/getConfig',
			'method' => 'get',
			'version' => array(
				'1.0.0' => '1',
				'max' => '1'
			),
			'rules' => array(
				'1' => array(
					'isStrict' => 1, //0 不严格，可自己增加参数 1 严格，可以减少参数  2非常严格 参数个数不能变  
					'authType' => 2, //1客户端  2web
					'auth' => 1, //0不验证登录 1 验证登录
					'parameters' => array(
					),
					'return' => '{"statusCode":0,"message":"Success","timestamp":1478243405}',
					'debug' => FALSE
				),
			),
		)
	);

}
