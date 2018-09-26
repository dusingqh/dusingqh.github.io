;$(function(){
    /******************
        轮播图 start
    *******************/
    (function () {
        var duration = 4000;//定义变量，轮播间隔时间
        var playTime = 600;//定义变量,动漫持续时间
        //获取元素
        var oneLi = $('.banner li').eq(0).clone();
        $('.bannerBox').append(oneLi);
        var oUL = $('.bannerBox');
        var oLIs = $('.bannerBox li');
        var oNavList = $('.bannerNum').children();
        var index = 0;
        var imgLength = oLIs.length - 1;

        var w = $(window).width();//屏幕的宽度

        //监听屏幕大小改变
        $(window).resize(function () {
            
            w = $(window).width();//屏幕的宽度
            if (w <= 1100) {
                w = 1100;
            }
            oLIs.css({ "width": w });
            oUL.css({ "width": w * 5 });
            oUL.stop();
            oUL.css({ "left": index * (-w), "transition": "left 0s" });
            clearInterval(timer);
            timer = setInterval(function () {
                auter();
            }, duration);

        })

        //浏览器标签选项卡改变
        var hiddenProperty = 'hidden' in document ? 'hidden' :
                'webkitHidden' in document ? 'webkitHidden' :
                'mozHidden' in document ? 'mozHidden' :
                null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function () {
            if (!document[hiddenProperty]) {
                timer = setInterval(function () {
                    auter();
                }, duration);
            } else {
                clearInterval(timer);
            }
        }
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);

        oLIs.css({ "width": w });
        oUL.css({ "width": w * 5 });

        //自动轮播
        var timer = setInterval(function () {
            auter();
        }, duration);
        function auter() {
            index++;
            if (index > imgLength) {
                index = 1;
                oUL.css({ "left": 0, "transition": "left 0s" });
            }
            var timess = setTimeout(function () {
                move(index);
            }, 50);
        }

        clearTimer(oUL);
        clearTimer(oNavList);

        //鼠标划上，停止自动播放
        function clearTimer(ele) {
            ele.hover(function () {
                clearInterval(timer);
            }, function () {
                clearInterval(timer);
                timer = setInterval(function () {
                    auter();
                }, duration);
            });
        }

        //点击小按钮切换图片
        oNavList.each(function () {
            var _index = $(this).index();
            $(this).on("click", function () {
                if (_index >= imgLength - 1 && index >= imgLength) {
                    oUL.css({ "left": 0, "transition": "left 0s" });
                }
                index = _index;
                var timese = setTimeout(function () {
                    move(_index);
                }, 50);
            })
        })

        //函数：点击切换图片，图片动画
        function move(index) {
            //oUL.stop().animate({
            //    'left': index * (-w) + 'px'
            //}, playTime);
            oUL.css({ "left": index * (-w), "transition": "left 1s" });
            //小图标样式随着图片切换变化
            oNavList.removeClass('current');
            oNavList.eq(index >= imgLength ? 0 : index).addClass('current');
        }
    })();

    /******************
        轮播图 start
    *******************/


    /****************
    *  销售网络 start
    * ***************/
    (function(){
        $(".cityItem").hover(function(){
            $(this).css({"z-index":"5"});
            $(this).children(".cityData").css({"display":"block"});
        },function(){
            $(this).css({"z-index":"1"});
            $(this).children(".cityData").css({"display":"none"});
        });
    })();
    /****************
    *  销售网络 end
    * ***************/

    /************
    * 关于我们 start
    ***********/
    /*关于我们 轮播*/
    (function () {
        //轮播时间
        var dataTime = 3000;
        //定义索引，0对应第一张
        var index = 0;
        //定时器函数，轮播
        //定义定时器
        var itemTimes;
        itemsStInterval();
        function itemsStInterval() {
            itemTimes = setInterval(function () {
                index++;
                if (index >= 2) {
                    index = 0;
                };
                animation(index);
            }, dataTime);
        }

        //鼠标划上按钮，定时器停止，停止轮播，鼠标滑出，重新开启
        $(".carouselNum span").hover(function () {
            clearTimeout(itemTimes);
        }, function () {
            itemsStInterval();
        });

        //点击按钮切换
        $(".carouselNum span").click(function () {
            index = $(this).index();
            animation(index);
        });

        //轮播函数,接收index参数，表示当前是第几张
        function animation(index) {
            //切换图片
            $(".carouselBox li").fadeOut(800);
            $(".carouselBox li").eq(index).fadeIn(800);
            //切换按钮样式
            $(".carouselNum span").removeClass("current");
            $(".carouselNum span").eq(index).addClass("current");
        }

    })();
    /************
    * 关于我们 end
    ***********/

    /************
    *   产品中心 start
    **************/
    (function () {
        $(".produceList").each(function () {
            var list = $(this).find("li").length;
            if (list <= 2) {
                $(this).parent().find(".prevBtn").css({ "background": "#ccc", "color": "#333" });
                $(this).parent().find(".nextBtn").css({ "background": "#ccc", "color": "#333" });
            }
            $(this).children("ul").css({"width":464*list});
        });

        //切换
        swicth();
        function swicth() {
            var index = 0;
            //函数：点击切换图片，图片动画
            function move(obj, index) {
                obj.css({ "left": index * (-232), "transition": "left 1s" });
            }
            function next(obj, imgLength) {
                index++;
                if (index > imgLength - 2) {
                    index = 1;
                    obj.css({ "left": 0, "transition": "left 0s" });
                }
                var time = setTimeout(function () {
                    move(obj, index, imgLength);
                }, 50);
            }
            function perv(obj, imgLength) {
                index--;
                if (index <= 0) {
                    index = imgLength - 3;
                    obj.css({ "left": (imgLength-2) * (-232), "transition": "left 0s" });
                }
                var time = setTimeout(function () {
                    move(obj, index, imgLength);
                }, 50);
            }
            $(".modleItem .prevBtn").click(function () {
                var obj = $(this).parent().find("ul");
                var imgLength = obj.find("li").length;
                if (imgLength > 2) {
                    perv(obj, imgLength)
                }
            });
            $(".modleItem .nextBtn").click(function () {
                var obj = $(this).parent().find("ul");
                var imgLength = obj.find("li").length;
                if (imgLength > 2) {
                    next(obj, imgLength);
                }
            });
        }
    })();
    /************
    *   产品中心 end
    **************/
    
})