(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cAcB:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=u("mrSG"),r=u("qq5e"),a=u("Vx+w"),i=u("htdP").Formio,c=function(n){function l(l){var u=n.call(this)||this;return u.config=l,u.showLogin=!0,u}return o.__extends(l,n),l.prototype.ngOnInit=function(){(window.APP_SSO||this.config.query.sso||this.config.query.saml)&&(this.showLogin=!1,i.authUrl=window.SSO_PROJECT,i.ssoInit(window.APP_SSO||this.config.query.sso||"saml",{forceAuth:!0}))},l}(r.a),e=(Object(r.b)({auth:c}),function(){return function(){}}()),b=u("Yi/Q"),s=u("rxJI"),p=u("pMnS"),f=u("ZYCi"),d=u("Ip0R"),m=t.sb({encapsulation:0,styles:[[""]],data:{}});function g(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,2,"div",[["class","card-body panel-body"]],null,null,null,null,null)),(n()(),t.ub(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.tb(2,212992,null,0,f.p,[f.b,t.P,t.j,[8,null],t.h],null,null)],function(n,l){n(l,2,0)},null)}function h(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,1,"div",[["class","card-body panel-body"]],null,null,null,null,null)),(n()(),t.ub(1,0,null,null,0,"div",[["class","loader"]],null,null,null,null,null))],null,null)}function v(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,6,"div",[["class","card card-primary panel panel-default"]],null,null,null,null,null)),(n()(),t.ub(1,0,null,null,1,"div",[["class","card-header panel-heading"]],null,null,null,null,null)),(n()(),t.Kb(-1,null,["Login to your account"])),(n()(),t.jb(16777216,null,null,1,null,g)),t.tb(4,16384,null,0,d.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.jb(16777216,null,null,1,null,h)),t.tb(6,16384,null,0,d.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,4,0,u.showLogin),n(l,6,0,!u.showLogin)},null)}function w(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,1,"app-auth",[],null,null,null,v,m)),t.tb(1,114688,null,0,c,[a.a],null,null)],function(n,l){n(l,1,0)},null)}var y=t.qb("app-auth",c,w,{},{},[]),L=u("S8Yu"),E=u("r6Rv"),S=u("rJcy"),P=u("X5MQ"),j=u("LWLj"),q=t.sb({encapsulation:2,styles:[],data:{}});function I(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,1,"formio",[],null,[[null,"submit"]],function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==n.component.service.onLoginSubmit(u)&&t),t},b.c,b.b)),t.tb(1,770048,null,0,L.a,[E.a,[2,S.a]],{src:[0,"src"]},{submit:"submit"})],function(n,l){n(l,1,0,l.component.service.loginForm)},null)}function M(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,1,"ng-component",[],null,null,null,I,q)),t.tb(1,49152,null,0,P.a,[j.a],null,null)],null,null)}var O=t.qb("ng-component",P.a,M,{},{},[]),k=u("o3Vl"),A=t.sb({encapsulation:2,styles:[],data:{}});function J(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,1,"formio",[],null,[[null,"submit"]],function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==n.component.service.onRegisterSubmit(u)&&t),t},b.c,b.b)),t.tb(1,770048,null,0,L.a,[E.a,[2,S.a]],{src:[0,"src"]},{submit:"submit"})],function(n,l){n(l,1,0,l.component.service.registerForm)},null)}function _(n){return t.Lb(0,[(n()(),t.ub(0,0,null,null,1,"ng-component",[],null,null,null,J,A)),t.tb(1,49152,null,0,k.a,[j.a],null,null)],null,null)}var x=t.qb("ng-component",k.a,_,{},{},[]),F=u("KzPs"),R=u("ikog"),C=u("sd+H");u.d(l,"AuthModuleNgFactory",function(){return Y});var Y=t.rb(e,[],function(n){return t.Db([t.Eb(512,t.j,t.cb,[[8,[b.a,s.a,p.a,y,O,x]],[3,t.j],t.y]),t.Eb(4608,d.l,d.k,[t.v,[2,d.x]]),t.Eb(4608,E.a,E.a,[]),t.Eb(4608,F.a,F.a,[]),t.Eb(1073742336,d.b,d.b,[]),t.Eb(1073742336,R.a,R.a,[]),t.Eb(1073742336,f.o,f.o,[[2,f.t],[2,f.k]]),t.Eb(1073742336,C.a,C.a,[]),t.Eb(1073742336,e,e,[]),t.Eb(1024,f.i,function(){return[[{path:"",component:c,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:P.a},{path:"register",component:k.a}]}]]},[])])})}}]);