if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
    FastClick.prototype.focus = function(targetElement) {
      'use strict';
      targetElement.focus();
    };
  }, false);
}
$(function(){
  windowSize();
  function windowSize(){
    var width = document.body.clientWidth;
    document.documentElement.style.fontSize=width / 750 * 100 + 'px';
    document.body.style.fontSize=width / 750 * 100 + 'px';
  }
})

// 判断系统语言切换中英文
if (navigator.language) {
  var language = navigator.language;
} else {
  var language = navigator.browserLanguage;
}
var locale = localStorage.lang ? localStorage.lang : (language.indexOf('zh-') != -1 ? 'zh' : 'en')
var currency = localStorage.currency ? localStorage.currency : (language.indexOf('zh-') != -1 ? 'CNY' : 'USD')
localStorage.lang = locale;
localStorage.currency = currency;
const i18n = new VueI18n({
	locale: locale,    // 语言标识
	messages: {
		'zh': {
      '钱包支付密码': '支付密码',
      '地址钱包名称': '钱包名称',
    },
    'en': {
      // index & frame
    	'首页': 'Home',
      '收付款': 'Payment',
      '我的': 'Personal',
      '个人中心': 'Personal',
      'ELA钱包': 'ELA Wallet',
      '创建钱包': 'Create Wallet',
      '导入钱包': 'Import wallet',
      '总资产': 'Total assets',
      '交易记录': 'Transaction Record',
      '收款': 'Receive',
      '付款': 'Payment',
      '钱包管理': 'Wallet',
      '安全中心': 'Security',
      '系统设置': 'Settings',
      '地址簿': 'Address Book',
      '帮助中心': 'Help Center',
      '关于我们': 'About us',
      '支持我们': 'Support us',

      // aboutus
      '我们是一群区块链爱好者，坚信拥有区块链的世界会更美好。我们热爱Elastos，因为它代表了新一代的区块链技术。<b></b>希望能见证Elastos的成长，也希望跟着它一起成长，创造更美好的世界！': 'We are a group of blockchain enthusiasts who believe that the world of blockchains will be better.<b></b>We love Elastos because it represents a new generation of blockchain technology.<b></b>I hope to witness the growth of Elastos, and I hope to grow with it and create a better world!',
      '当前版本号': 'Current version',

      // addcontact
      '添加联系人': 'Add contacts',
      '名称': 'Name',
      '邮箱': 'Mail',
      '地址': 'Addr',
      '保存': 'Save',
      '请输入名称': 'Enter a name',
      '请输入亦来币地址': 'Enter ELA address',
      '名称不能为空': 'Name null',
      '邮箱格式不正确': 'Mail wrong',
      '地址不能为空': 'Addr null',
      '地址格式不正确': 'Addr wrong',
      '添加失败<br>该地址已存在': 'The address<br>already exists',

      // address
      '没有联系人': 'No contacts yet',
      '地址': 'Addr',
      '地址簿详情': 'Address details',
      '去付钱': 'Payment',
      '移除': 'Remove',
      '你确定你要移除此联系人？': 'Are you sure you want to delete<br>this contact?',
      '确定删除': 'Ok',
      '搜索': 'Search',
      '搜索': 'Search',

      // currency
      '货币': 'Currency',

      // help
      '帮助中心': 'Help center',
      '联系我们': 'Contact us',

      // exportpurse
      '导出钱包文件': 'Export wallet files',
      '钱包文件': 'Wallet file',
      '文件密码': 'Password',
      '请设置文件密码': 'Please set the file password',
      '导出钱包文件并复制': 'Export wallet files and copy',
      '温馨提示': 'Tips',
      '请复制粘贴文件到安全、离线的地方保存': 'Please copy and paste the file to a safe, offline place to save',
      '需要文件密码才能成功恢复钱包': 'Need file password to successfully restore wallet',
      '文件密码不得为空': 'File password null',
      '两次密码不一致': 'Two inconsistencies',

      // import
      '通过助记词导入': 'Import via mnemonics',
      '通过钱包文件导入': 'Import via wallet file',

      // importjson
      '文件导入钱包': 'File import wallet',
      '通过钱包文件导入': 'Import via wallet file',
      '请粘贴钱包文件内容': 'Please paste wallet file content',
      '请输入文件密码': 'Enter the file password',
      '支付密码': 'Password',
      '请设置支付密码': 'Set up payment password',
      '如果您导入的是.josn文件，请用手机打开文件，复制文件内容到钱包APP中，才可以导入钱包。': 'If you import a .josn file, open the file on your phone and copy the contents of the file into the wallet app before you can import the wallet.',
      '钱包文件不得为空': 'Wallet file null',
      '支付密码不得为空': 'Pay password null',
      '正在导入': 'Importing',
      '钱包已存在，是否覆盖': 'Wallet already exists,<br>is it covered',
      '确定覆盖': 'Ok',
      '钱包导入成功': 'Imported successfully',
      '导入失败<br>请检查钱包文件': 'Please check<br>wallet file',
      '导入失败<br>请检查文件密码': 'Please check<br>the file password',

      // importwords
      '助记词': 'Mnemonics',
      '助记词导入钱包': 'Mnemonics import wallet',
      '请输入助记词，以空格键区分': 'Enter mnemonics and space distinction',
      '请输入支付密码': 'Enter payment password',
      '助记词密码': 'Password',
      '请输入助记词密码': 'Enter mnemonic password',
      '如果您以前设置了助记词密码，请点击更多输入助记词密码': 'If you previously set a mnemonic password, click More to enter the mnemonic password',
      '请输入助记词': 'Mnemonic null',
      '导入失败<br>请检查助记词': 'Please check<br>the mnemonic',
      '导入失败<br>请检查助记词密码': 'Please check the<br>mnemonic password',

      // linkme
      '发送': 'Send',
      '主题': 'Theme',
      '详情': 'Details',
      '请输入主题': 'Enter a topic',
      '请输入详情': 'Enter details',
      '最多可添加三张图片': 'Add up to<br>three pictures',
      '邮箱不能为空': 'Mail null',
      '主题不能为空': 'Theme null',
      '详情不能为空': 'Details null',
      '发送成功': 'Sent successfully',

      // password
      'PIN码': 'PIN code',
      '请验证指纹': 'Verification fingerprint',
      '输入您当前的PIN码': 'Enter your current PIN',
      '请设置新的PIN码': 'Please set a new PIN',
      'PIN码错误': 'PIN error',
      '密码': 'Password',
      '数量': 'Amount',
      '费用': 'Fees',
      '备注': 'Note',
      '请输入正确的数量<br>最多4位小数': 'Amount up<br>to 4 decimal places',
      '计算费用': 'Calculation fee',
      '可用资金不足': 'Insufficient funds',
      '矿工费用不足': 'Insufficient<br>funds for fee',
      '创建交易': 'Create a deal',
      '发布交易': 'Post a deal',
      '确认交易': 'Confirm transaction',
      '广播交易': 'Broadcast transaction',
      '交易成功，等待确认': 'Successful transaction,<br>waiting for confirmation',
      '系统检测到您有一笔交易': 'The system detected<br>that you have a transaction',
      '因超时被锁定，是否继续发送？': 'Since the timeout was locked,<br>do you want to continue sending?',
      '继续发送': 'Send',
      '密码错误': 'Wrong password',
      '未知错误': 'Unknown mistake',

      // personalwallet
      '钱包名称': 'Name',
      '高级选项': 'Advanced options',
      '短语密码': 'Password',
      '支付密码在付款的时候使用': 'Payment password used at the time of payment',
      '在创建过程中返回，该钱包创建失败': 'Returned during creation, the wallet creation failed',
      '两次支付密码不一致': 'Inconsistent<br>payment password',
      '两次短语密码不一致': 'Inconsistent<br>mnemonic password',
      '正在创建钱包': 'Creating wallet',
      '创建失败请重试': 'Failed to create',
      '钱包创建成功': 'Created successfully',

      // preferences
      '钱包设置': 'Wallet settings',
      '请输入钱包名称': 'Enter wallet name',
      '钱包支付密码': 'Payment password',
      '备份短语': 'Backup phrase',
      '导出钱包文件': 'Export wallet files',
      '安全退出钱包': 'Security exit wallet',
      '请设置新支付密码': 'Set up payment password',
      '请确认您已做好钱包备份<br>如果丢失或遗忘，任何人都无法<br>帮您恢复钱包': 'Please make sure that you have<br>a wallet backup and if<br>lost or forgotten, nobody can<br>restore your wallet',
      '确定退出钱包': 'Ok',

      // receive
      '复制收款地址': 'Copy payment address',
      '下载二维码': 'Download QR code',
      '已保存到相册': 'Saved to album',
      '正在生成地址': 'Generating address',
      '生成地址失败': 'Failed to<br>generate address',

      // scancode
      '扫一扫': 'Scan code',
      '相册': 'Album',

      // security
      '启用所有安全功能以获得最大保护': 'Enable all security features for<br>maximum protection',
      '指纹解锁': 'Touch ID',
      '面容ID': 'Face ID',
      '请先设置PIN': 'Please set PIN',

      // support
      '您的赞赏是我们前进的动力！': 'Your appreciation is our driving force!',
      'ELA赞赏地址': 'ELA appreciated the address',
      '复制地址': 'Copy address',


      // words
      '查看助记词': 'View mnemonics',
      '请仔细记下这段话': 'Please note this paragraph carefully',
      '我已记下': 'I have written down',
      '温馨提示：截图是不安全的！': 'Tips: Screenshots are not safe!',
      '备份助记词': 'Backup mnemonics',
      '任何人只要持有你的恢复短语，就可以访问和花掉<br>你的亦来币！截图备份的方式是不安全的，建议把助记词<br>记录到纸上，进行妥善保管。': 'Anyone who has your recovery phrase can access and<br>spend your Yilai! The method of backup<br>of the screenshot is not safe.<br>It is recommended that the mnemonic be recorded<br>on paper and stored properly.',
      '我已知晓风险': 'I already know the risk',
      '请按顺序点击助记词，以确认备份是否正确': 'Please click mnemonics in order to confirm that<br>the backup is correct',
      '备份成功': 'Successful backup',
      '创建钱包地址': 'Create wallet address',
      '备份失败<br>请检查助记词': 'Backup failed<br>Check mnemonic',
      '助记词不完整': 'The mnemonic<br>is incomplete',
      '清除': 'Clear',

      // 通用
      '加载中': 'Loading',
      '系统提醒': 'Warning',
      '取消': 'Cancel',
      '确定': 'Ok',
      '复制成功': 'Copied to clipboard',
      '重复密码': 'Repeat',
      '请再次输入': 'Enter again',
      '提交': 'Submit',
      '更多': 'More',
      '语言': 'Language',
      '货币': 'Currency',
      '网络异常': 'network anomaly',


      // 新增
      '请输入付款数量': 'Enter amount',
      '自动计算矿工费用': 'Automatic calculation fees',
      '请输入备注': 'Enter Note',
      '已接收': 'Received',
      '已发送': 'Sent',
      '已调动': 'Moved',
      '无效': 'Invalid',
      '系统公告': 'Notice',
      '查看详情': 'View details',
      '密码最少8位字符': 'A minimum of 8<br>bits of password',
      '最近交易': 'Recent transactions',
      '正在发送': 'Being sent',
      '锁定中': 'Locking',
      '为了保证转账交易的安全，转账后会随机锁定一部分亦来币，转账成功后自动解锁。': 'In order to ensure the security of the transfer transaction, a part of the ELA will be locked randomly after the transfer, and will be automatically unlocked after the transfer is successful.',
      '复制交易号成功': 'Copied to clipboard',
      '收款地址': 'Address',
      '交易哈希': 'Hash',
      '手续费': 'Fees',
      '确认量': 'Confirmation',
      '交易时间': 'Transaction hour',
      '到账需要6个以上确认': 'Six confirmation to the account',
      '最大可用': 'Available',
      '全部': 'Max',
      '生成收款地址': 'Generate address',
      '地址钱包名称': 'Wallet name',
      '查看区块': 'View the block',
      '请稍后': 'Loading',
      '长按识别下载': 'Long press',
      '最好用的亦来云钱包APP': 'The best Elastos purse APP',
      '安全、简单、强大': 'Safe, simple and powerful',
      '交易详情': 'Transaction details',
      '分享APP': 'Share APP',
      '隐藏价格': 'Hidden price',

      '绑定ERC20地址': 'Bind ERC20',
      '请输入ERC20地址': 'ERC20 address',
      '1、ERC20地址，推荐钱包比特派、imtoken的ETH的收款地址，交易所的ETH收款地址无效': '1. Address of ERC20, the collection address of ETH that recommends wallet Bitpie and Imtoken, and the ETH collection address of the exchange is invalid.',
      '2、设定空投地址会将当前钱包中的所有余额转发到一个当前钱包的内部地址，并支付相应的交易费。如果在空投截止时间点前又进行了转账操作，之前的注册空投地址的操作会失效，导致无法领到空投的代币': '2. Set the airdrop address to forward all balances in the current wallet to an internal address of the current wallet and pay corresponding transaction fees. If the money transfer operation is conducted before the airdrop deadline, the previous operation of registered airdrop address will be invalid, resulting in the inability to receive the airdrop token.',
      '立即绑定': 'Immediate binding',
      '添加地址需要发布一笔钱包内转账<br>并支付相应的交易费': 'Adding an address requires initiating<br>an in-wallet transfer',
      '去支付': 'Ok',
      '历史绑定': 'Historical binding',
      '第一个为有效ERC地址': 'The first is the current binding address',

    },
	}
})


// 下拉刷新
function downLoad(func){
  func = func || function(){}
  api.setCustomRefreshHeaderInfo({
    bgColor:'#ebecef',
    image: {
        pull: 'widget://image/loading/frame-0.png',
        transform: [
          'widget://image/loading/frame-0.png',
          'widget://image/loading/frame-1.png',
          'widget://image/loading/frame-2.png',
          'widget://image/loading/frame-3.png',
          'widget://image/loading/frame-4.png',
          'widget://image/loading/frame-5.png',
          'widget://image/loading/frame-6.png',
          'widget://image/loading/frame-7.png',
          'widget://image/loading/frame-8.png',
          'widget://image/loading/frame-9.png',
          'widget://image/loading/frame-10.png',
          'widget://image/loading/frame-11.png',
          'widget://image/loading/frame-12.png',
          'widget://image/loading/frame-13.png',
          'widget://image/loading/frame-14.png',
          'widget://image/loading/frame-15.png',
          'widget://image/loading/frame-16.png',
          'widget://image/loading/frame-17.png',
        ],
        load: [
          'widget://image/loading/frame-0.png',
          'widget://image/loading/frame-1.png',
          'widget://image/loading/frame-2.png',
          'widget://image/loading/frame-3.png',
          'widget://image/loading/frame-4.png',
          'widget://image/loading/frame-5.png',
          'widget://image/loading/frame-6.png',
          'widget://image/loading/frame-7.png',
          'widget://image/loading/frame-8.png',
          'widget://image/loading/frame-9.png',
          'widget://image/loading/frame-10.png',
          'widget://image/loading/frame-11.png',
          'widget://image/loading/frame-12.png',
          'widget://image/loading/frame-13.png',
          'widget://image/loading/frame-14.png',
          'widget://image/loading/frame-15.png',
          'widget://image/loading/frame-16.png',
          'widget://image/loading/frame-17.png',
        ]
    }
  }, function() {
      func();
  });
}


// 修改本地存储钱包数组内的参数
function setLoclaList(id,key,val,func,type){
  func = func || function(){}
  type = type || true;
  var list = JSON.parse(localStorage.walletList);
  var localOpen = JSON.parse(localStorage.walletOpen);
  var index = 0;
  for(var i=0;i<list.length;i++){
    if(list[i].walletId == id){
      index = i;break;
    }
  }
  list[index][key] = val;
  localOpen[key] = val;
  localStorage.walletList = JSON.stringify(list);
  if(type || localOpen.walletId == id){
    localStorage.walletOpen = JSON.stringify(localOpen);
  }
  func();
}


// 验证密码
function openPassword(type){
  type = type || ''
  api.openWin({
    name: 'password',
    slidBackEnabled:false,
    animation:{
        type:"none",
        duration:0
    },
    url: api.wgtRootDir + '/html/password.html',
    pageParam:{
      type:type
    }
  });
}

// 验证指纹
function touchID(_this,func,func2){
  func2 = func2 || function(){}
  // 判断是否支持指纹识别
  var touchID = api.require('touchID');
  touchID.isValid(function(ret) {
      if (ret.status) {
          touchID.verify({
             title: '验证指纹'
          }, function(ret) {
              if (ret.status) {
                  func();
              } else {
                  if (ret.code == 0) {
                  } else if (ret.code == 1) {
                  } else if (ret.code == 2) {
                  } else if (ret.code == 3) {
                    func2();
                    // _this.$dialog.alert({
                    //     mes: _this.$t('multiplevalidation')
                    // });
                  } else {
                    // _this.$dialog.toast({
                    //     mes: _this.$t('验证失败'),
                    //     timeout: 1000,
                    // });
                  }
              }
          });
      }
  });
}


// 判断本地钱包有无钱包
function walletListNull(func){
  if(localStorage.walletList && JSON.parse(localStorage.walletList).length){
    func();
  }else{
    api.openWin({
      name: 'welcome',
      slidBackEnabled:false,
      animation:{type:"none",duration:0},
      url: api.wgtRootDir + '/html/welcome.html',
    });
  }
}


function formatFloat(f, digit) {
  digit = digit || 6
  var m = Math.pow(10, digit);
  return parseInt(f * m, 10) / m;
}


//验证
function verification(type,str,label,dome){
  label = label || "";
  var regular = "";
  switch(type){
    case 'isnul':
			str = $.trim(str);
			regular = /.+$/;
			break;
    case 'email':
      str = str || '000@aa.com';
			regular =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
			break;
    case 'address':
			regular =  /^([E]{1})([A-Za-z0-9]{33})$/;
			break;
    case 'number':
			regular =  /^\d+(\.\d{1,4})?$/;
			break;
    case 'password':
			regular =  /^.{8,}/;
			break;
    default:
      return true;
  }
  if(!regular.test(str) || str == null){
    dome.$dialog.toast({
      mes: label,
      timeout: 1000
    });
    return false;
  }else{
    return true;
  }
}


// 选择弹窗
function selectWindow(text,ok,func,func2){
  ok = ok || '确定';
	func=func || function(){};
	func2=func2 || function(){};
	var windowHtml = '<div class="alertMask"><div class="alertBox ws_seWin"><img src="../image/ld.png"><div class="ws_alertOff"></div><h2>系统提醒</h2><div class="alertContent">'+ text +'</div><button id="ws_no">取消</button><button id="ws_yes">'+ ok +'</button></div></div>';
	$('body').append(windowHtml);
	$('.alertMask').fadeIn(300,function(){
		document.ontouchmove=function(){
			return false;
		}
	});
	$('.alertMask #ws_no,.ws_alertOff').on('click',function(){
		$('.alertMask').fadeOut(300,function(){
			$('.alertMask').remove();
			document.ontouchmove=function(){
				return true;
			}
			func2();
		});
	});
	$('.alertMask #ws_yes').on('click',function(){
		$('.alertMask').fadeOut(300,function(){
			$('.alertMask').remove();
			document.ontouchmove=function(){
				return true;
			}
			func();
		});
	});
}

// copy
function copy(_this,val,text){
  text = text || _this.$t('复制成功')
  if(val){
    var clipBoard = api.require('clipBoard');
    clipBoard.set({
      value: val
    }, function(ret, err) {
      if (ret) {
        _this.$dialog.toast({mes: text,icon: 'success'});
      }
    });
  }
}

// 修改标题栏颜色
function setBarStyleToggle(style1,style2){
  api.addEventListener({
    name:'viewappear'
  }, function(ret, err){
    api.setStatusBarStyle({
      style: style1
    });
  });
  api.addEventListener({
    name:'viewdisappear'
  }, function(ret, err){
    api.setStatusBarStyle({
      style: style2
    });
  });
}
