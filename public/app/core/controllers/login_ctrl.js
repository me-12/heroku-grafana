/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","../core_module","app/core/config"],function(a,b,c){"use strict";b.controller("LoginCtrl",["$scope","backendSrv","contextSrv","$location",function(a,b,d,e){a.formModel={user:"",email:"",password:""},d.sidemenu=!1,a.googleAuthEnabled=c.googleAuthEnabled,a.githubAuthEnabled=c.githubAuthEnabled,a.disableUserSignUp=c.disableUserSignUp,a.loginHint=c.loginHint,a.loginMode=!0,a.submitBtnText="Log in",a.init=function(){a.$watch("loginMode",a.loginModeChanged);var b=e.search();b.failedMsg&&(a.appEvent("alert-warning",["Login Failed",b.failedMsg]),delete b.failedMsg,e.search(b))},a.buildInfo={version:c.buildInfo.version,commit:c.buildInfo.commit,buildstamp:new Date(1e3*c.buildInfo.buildstamp)},a.submit=function(){a.loginMode?a.login():a.signUp()},a.loginModeChanged=function(b){a.submitBtnText=b?"Log in":"Sign up"},a.signUp=function(){a.loginForm.$valid&&b.post("/api/user/signup",a.formModel).then(function(b){"SignUpCreated"===b.status?e.path("/signup").search({email:a.formModel.email}):window.location.href=c.appSubUrl+"/"})},a.login=function(){delete a.loginError,a.loginForm.$valid&&b.post("/login",a.formModel).then(function(a){window.location.href=a.redirectUrl?a.redirectUrl:c.appSubUrl+"/"})},a.init()}])});