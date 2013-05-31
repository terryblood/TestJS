require("js/helper/jsb_constants.js");

var MW = MW || {};

var appFiles = [
    'js/hello.js',
    'js/GameMenu.js'
];

cc.dumpConfig();

for( var i=0; i < appFiles.length; i++){
    require(appFiles[i]);
}

var director = cc.Director.getInstance();
director.setDisplayStats(true);

//set FPS. the default value is 1.0/60 if you don't call this
director.setAnimationInterval(1.0 / 60);

//create a scene. it's an autorelease object
var mainScene = GameMenu.scene();

//run
director.runWithScene(mainScene);
