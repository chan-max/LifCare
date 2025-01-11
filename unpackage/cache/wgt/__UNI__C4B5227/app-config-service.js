
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"pageOrientation":"portrait","backgroundColor":"#F8F8F8","backgroundColorTop":"#F4F5F6","backgroundColorBottom":"#F4F5F6","navigationBar":{"backgroundColor":"#ea4c89","titleText":"LifCare","type":"default","titleColor":"#ffffff"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"四叶草健康助手","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"compilerVersion":"4.36","entryPagePath":"pages/home/home","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#a8a8a8","selectedColor":"#ea4c89","borderStyle":"#666","blurEffect":"none","fontSize":"10px","iconWidth":"20px","spacing":"3px","height":"50px","list":[{"pagePath":"pages/home/home","iconPath":"/static/img/tabbar/home.png","selectedIconPath":"/static/img/tabbar/home-filled.png","text":"统计"},{"pagePath":"pages/record/record","iconPath":"/static/img/tabbar/record.png","selectedIconPath":"/static/img/tabbar/record-filled.png","text":"记录"},{"pagePath":"pages/workspace/workspace","iconPath":"/static/img/tabbar/workspace.png","selectedIconPath":"/static/img/tabbar/workspace-filled.png","text":"工作台"},{"pagePath":"pages/analyze/analyze","iconPath":"/static/img/tabbar/analyze.png","selectedIconPath":"/static/img/tabbar/analyze-filled.png","text":"日历"},{"pagePath":"pages/me/me","iconPath":"/static/img/tabbar/me.png","selectedIconPath":"/static/img/tabbar/me-filled.png","text":"我的"}],"backgroundColor":"#F8F8F8","blurEfect":"light","selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/home/home","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"今日","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/record/record","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"记录","type":"default"},"isNVue":false}},{"path":"pages/home/record-setting","meta":{"navigationBar":{"titleText":"记录设置","type":"default"},"isNVue":false}},{"path":"pages/record/sleep/sleep","meta":{"navigationBar":{"titleText":"睡眠","type":"default"},"isNVue":false}},{"path":"pages/record/sleep/record","meta":{"navigationBar":{"titleText":"记录睡眠","type":"default"},"isNVue":false}},{"path":"pages/record/sleep/analyze","meta":{"navigationBar":{"titleText":"睡眠分析","type":"default"},"isNVue":false}},{"path":"pages/record/height/record","meta":{"navigationBar":{"titleText":"记录身高","type":"default"},"isNVue":false}},{"path":"pages/record/walk/record","meta":{"navigationBar":{"titleText":"记录步数","type":"default"},"isNVue":false}},{"path":"pages/record/luck/record","meta":{"navigationBar":{"titleText":"记录运气","type":"default"},"isNVue":false}},{"path":"pages/record/weight/record","meta":{"navigationBar":{"titleText":"记录体重","type":"default"},"isNVue":false}},{"path":"pages/record/mood/record","meta":{"navigationBar":{"titleText":"记录心情","type":"default"},"isNVue":false}},{"path":"pages/record/feeling/record","meta":{"navigationBar":{"titleText":"记录感觉","type":"default"},"isNVue":false}},{"path":"pages/articles/index","meta":{"navigationBar":{"titleText":"文章","type":"default"},"isNVue":false}},{"path":"pages/record/smoke/record","meta":{"navigationBar":{"titleText":"吸烟记录","type":"default"},"isNVue":false}},{"path":"pages/record/period/record","meta":{"navigationBar":{"titleText":"记录生理期","type":"default"},"isNVue":false}},{"path":"pages/workspace/workspace","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"工作台","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/analyze/analyze","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"日历","type":"default"},"isNVue":false}},{"path":"pages/me/me","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/login/login","meta":{"navigationBar":{"titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/login/signup","meta":{"navigationBar":{"titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/me/update","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  