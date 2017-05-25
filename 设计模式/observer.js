/**
 * Created by gonghongon 2017-05-22;
 * @description [观察者模式]
 */

//将观察者存放在闭包中，当页面加载时立即执行;
var observer=(function(){
	//防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存;
	var _message={};
	return {
		//注册信息接口===侦听事件；
		regist:function(type,fn){
			/**
			 * @param  {[type]} [消息类型===事件类型]
			 * @param {[fn]}    [相对于的处理动作===侦听事件回调]
			 */
			if(typeof _message[type]==='undefined'){
				_message[type]=[fn];
			}else{
				_message[type].push(fn);
			}
		},
		//发布信息接口
		fire:function(type,params){
			/**
			 * @param {[type]} [消息类型]
			 * @param {[params]} [执行动作需传递的参数]
			 */
			if(!_message[type]) return;

			var events={
				type:type,
				args:params||{}
			};

			var i=0,len=_message[type].length;

			for(;i<len;i++){
				//依次执行注册的消息对应的动作序列;
				_message[type][i].call(this,events);
			}
		},
		//删除信息接口
		remove:function(type,fn){
			if(_message[type] instanceof Array){
				var i=_message.length-1;
				for (; i >= 0; i--) {
					_message[type][i]===fn&&_message[type].splice(i,-1);
				};
			}
		}
	}
})();

observer.regist("data",function(e){
	console.log(e);
})
observer.fire("data","aaa");