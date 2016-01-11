/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","../core_module","app/core/store","app/core/config"],function(a,b,c,d,e){"use strict";c.service("contextSrv",["$rootScope","$timeout",function(a,c){function f(){window.grafanaBootData.user&&b.extend(this,window.grafanaBootData.user)}var g=this;a.$on("toggle-sidemenu",function(){g.toggleSideMenu()}),this.hasRole=function(a){return this.user.orgRole===a},this.setSideMenuState=function(a){this.sidemenu=a,d.set("grafana.sidemenu",a)},this.toggleSideMenu=function(){this.setSideMenuState(!this.sidemenu),c(function(){a.$broadcast("render")},50)},this.getSidemenuDefault=function(){return this.hasRole("Admin")},this.version=e.buildInfo.version,this.lightTheme=!1,this.user=new f,this.isSignedIn=this.user.isSignedIn,this.isGrafanaAdmin=this.user.isGrafanaAdmin,this.sidemenu=d.getBool("grafana.sidemenu",this.getSidemenuDefault()),this.isSignedIn&&!d.exists("grafana.sidemenu")&&d.set("grafana.sidemenu",!1),this.isEditor=this.hasRole("Editor")||this.hasRole("Admin")}])});