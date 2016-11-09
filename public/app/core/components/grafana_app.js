/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","lodash","jquery","app/core/core_module","app/core/profiler","app/core/app_events"],function(a){function b(a,b){return{restrict:"E",controller:i,link:function(c,d){var f,g=e["default"]("body");c.$watch("contextSrv.sidemenu",function(a){void 0!==a&&(g.toggleClass("sidemenu-open",c.contextSrv.sidemenu),a||b.setPinnedState(!1)),b.sidemenu&&(f=!0,setTimeout(function(){f=!1},300))}),c.$watch("contextSrv.pinned",function(a){void 0!==a&&g.toggleClass("sidemenu-pinned",a)});var h;c.$on("$routeChangeSuccess",function(a,b){h&&g.removeClass(h),h=b.$$route.pageClass,h&&g.addClass(h),e["default"]("#tooltip, .tooltip").remove()}),g.click(function(h){var i=e["default"](h.target);if(0!==i.parents().length){0===i.parents(".dash-playlist-actions").length&&a.stop(),g.find(".search-container").length>0&&0===i.parents(".search-container").length&&c.$apply(function(){c.appEvent("hide-dash-search")}),!f&&!b.pinned&&g.find(".sidemenu").length>0&&0===i.parents(".sidemenu").length&&c.$apply(function(){c.contextSrv.toggleSideMenu()});var j=d.find(".popover");j.length>0&&0===i.parents(".graph-legend").length&&j.hide()}})}}}b.$inject=["playlistSrv","contextSrv"];var c,d,e,f,g,h,i;return a("grafanaAppDirective",b),{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a}],execute:function(){i=function(){function a(a,b,e,f,i,j){a.init=function(){a.contextSrv=j,f.appSubUrl=c["default"].appSubUrl,a._=d["default"],g.profiler.init(c["default"],f),b.init(),e.init(),a.dashAlerts=b},a.initDashboard=function(b,c){a.appEvent("dashboard-fetch-end",b),i("DashboardCtrl",{$scope:c}).init(b)},f.onAppEvent=function(a,b,c){var d=f.$on(a,b),e=this;1!==e.$id||c||console.log("warning rootScope onAppEvent called without localscope"),c&&(e=c),e.$on("$destroy",d)},f.appEvent=function(a,b){f.$emit(a,b),h["default"].emit(a,b)},f.colors=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7","#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B","#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"],a.init()}return a.$inject=["$scope","alertSrv","utilSrv","$rootScope","$controller","contextSrv"],a}(),a("GrafanaCtrl",i),f["default"].directive("grafanaApp",b)}}});