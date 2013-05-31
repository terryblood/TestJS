cc.dumpConfig();

var GameMenu = cc.Layer.extend({
           ctor:function(){
              cc.associateWithNative(this,cc.Layer);
           },
           init:function(){
                               var bRet = false;
                               if(this.super()){
                               winSize = cc.Director.getInstance().getWinSize();
                               var sp = cc.Sprite.create(s_loading);
                               sp.setAnchorPoint(cc.p(0,0));
                               this.addChild(sp,0,1);
                               }
           }



})