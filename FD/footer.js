/* 向上跑马灯插件
*  修改时间：20180729
*  作者：anywise_qiu
*  使用：
*  var a = new HorseRceLamp(滚动对象，滚动速度);
*  滚动对象为jquery对象
* 
*/
(function(){
    
    //向上跑马灯
    var HorseRceLamp = function(sowingObject,speed){
        this.tops = 0;
        this.speed = speed;
        this.setInterval = null;
        this.contentHeight = sowingObject.height();
        this.sowingObject = sowingObject;
        this.clone_element();
    }

    HorseRceLamp.prototype = {
        //定时器
        time_setInterval:function(){
            var _this = this;
            this.setInterval = setInterval(function(){
                _this.sowing();
            },this.speed);
        },
        //清除定时器
        clear_setInterval:function(){
            clearInterval(this.setInterval);
        },
        //滚动
        sowing:function(scrollHeight){
            var scrollHeight = -this.sowingObject.position().top;
            this.tops--;
            if(scrollHeight >= this.contentHeight){
                this.tops = 0;
            }
            this.sowingObject.css({"top":this.tops});
        },
        //复制
        clone_element:function(){
            this.sowingObject.append(this.sowingObject.html());
            this.time_setInterval();
            this.hover();
        },
        //鼠标划入划出动作
        hover:function(){
            var _this = this;
            this.sowingObject.hover(function(){
                _this.clear_setInterval();
            },function(){
                _this.time_setInterval();
            })
        }
    }
    
    window.HorseRceLamp = HorseRceLamp;
    /*footer*/
    var rceLamp = new HorseRceLamp($(".trendsContent"), 50);
})();
