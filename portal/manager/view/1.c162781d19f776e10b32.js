(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5YvF":function(n,t,r){"use strict";r.d(t,"a",(function(){return e})),r("XF9X");var e=function(){function n(n,t,r){this.service=n,this.route=t,this.router=r}return n.prototype.onDelete=function(){var n=this;this.service.remove().then((function(){n.router.navigate(["../../"],{relativeTo:n.route})}))},n.prototype.onCancel=function(){this.router.navigate(["../","view"],{relativeTo:this.route})},n}()},D6yi:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var e=function(){return function(){this.name="",this.form="",this.parents=[]}}()},Et9f:function(n,t,r){"use strict";r.d(t,"a",(function(){return i}));var e=r("CcnG"),i=(r("XF9X"),r("D6yi"),function(){function n(n,t,r,i){this.service=n,this.route=t,this.router=r,this.config=i,this.triggerError=new e.n}return n.prototype.onSubmit=function(n){var t=this,r=this.service.resource;r.data=n.data,this.service.save(r).then((function(){t.router.navigate(["../","view"],{relativeTo:t.route})})).catch((function(n){return t.triggerError.emit(n)}))},n}())},Fysl:function(n,t,r){"use strict";r.d(t,"a",(function(){return e})),r("LWLj"),r("XF9X");var e=function(){function n(n,t,r){var e=this;this.service=n,this.route=t,this.auth=r,this.perms={delete:!1,edit:!1},this.paramsSubscription=this.route.params.subscribe((function(n){e.init()}))}return n.prototype.ngOnInit=function(){this.init()},n.prototype.init=function(){var n=this;this.service.loadResource(this.route),this.service.formLoaded.then((function(t){n.auth.ready.then((function(){n.service.resourceLoaded.then((function(r){n.service.formFormio.userPermissions(n.auth.user,t,r).then((function(t){n.perms.delete=t.delete,n.perms.edit=t.edit}))}))}))}))},n.prototype.ngOnDestroy=function(){this.paramsSubscription&&this.paramsSubscription.unsubscribe()},n}()},OLPT:function(n,t,r){"use strict";r.d(t,"a",(function(){return b}));var e=r("CcnG"),i=r("ZYCi"),o=r("Ip0R"),u=r("Yi/Q"),s=r("S8Yu"),c=r("rJcy"),a=r("3CKi"),l=r("QMXP"),f=r("XF9X"),h=r("D6yi"),p=e.vb({encapsulation:0,styles:[".back-button[_ngcontent-%COMP%] { font-size: 0.8em; }"],data:{}});function v(n){return e.Yb(0,[(n()(),e.xb(0,0,null,null,4,"h3",[["style","margin-top:0;"]],null,null,null,null,null)),(n()(),e.xb(1,0,null,null,2,"a",[["class","back-button"],["routerLink","../"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,r){var i=!0;return"click"===t&&(i=!1!==e.Mb(n,2).onClick(r.button,r.ctrlKey,r.metaKey,r.shiftKey)&&i),i}),null,null)),e.wb(2,671744,null,0,i.n,[i.k,i.a,o.g],{routerLink:[0,"routerLink"]},null),(n()(),e.xb(3,0,null,null,0,"i",[["class","fa fa-chevron-left glyphicon glyphicon-chevron-left"]],null,null,null,null,null)),(n()(),e.Vb(4,null,[" | New "," "]))],(function(n,t){n(t,2,0,"../")}),(function(n,t){var r=t.component;n(t,1,0,e.Mb(t,2).target,e.Mb(t,2).href),n(t,4,0,r.service.form.title)}))}function m(n){return e.Yb(0,[(n()(),e.gb(16777216,null,null,1,null,v)),e.wb(1,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.xb(2,0,null,null,1,"formio",[],null,[[null,"submit"]],(function(n,t,r){var e=!0;return"submit"===t&&(e=!1!==n.component.onSubmit(r)&&e),e}),u.c,u.b)),e.wb(3,770048,null,0,s.a,[e.z,[2,c.a],[2,a.a]],{form:[0,"form"],submission:[1,"submission"],refresh:[2,"refresh"],error:[3,"error"],success:[4,"success"]},{submit:"submit"})],(function(n,t){var r=t.component;n(t,1,0,r.service.form),n(t,3,0,r.service.form,r.service.resource,r.service.refresh,r.onError,r.onSuccess)}),null)}function d(n){return e.Yb(0,[(n()(),e.xb(0,0,null,null,1,"ng-component",[],null,null,null,m,p)),e.wb(1,114688,null,0,l.a,[f.a,i.a,i.k,h.a],null,null)],(function(n,t){n(t,1,0)}),null)}var b=e.tb("ng-component",l.a,d,{},{},[])},QMXP:function(n,t,r){"use strict";r.d(t,"a",(function(){return i}));var e=r("CcnG"),i=(r("XF9X"),r("D6yi"),function(){function n(n,t,r,i){this.service=n,this.route=t,this.router=r,this.config=i,this.onError=new e.n,this.onSuccess=new e.n}return n.prototype.ngOnInit=function(){this.service.setContext(this.route)},n.prototype.onSubmit=function(n){var t=this;this.service.save(n).then((function(){t.router.navigate(["../",t.service.resource._id,"view"],{relativeTo:t.route})})).catch((function(n){return t.onError.emit(n)}))},n}())},UQit:function(n,t,r){"use strict";r.d(t,"a",(function(){return i})),r("XF9X"),r("D6yi");var e=r("LvDl"),i=function(){function n(n,t,r,e,i,o){this.service=n,this.route=t,this.router=r,this.config=e,this.cdr=i,this.ngZone=o}return n.prototype.ngOnInit=function(){var n=this;this.gridQuery={},this.service.setContext(this.route),this.service.formLoaded.then((function(){n.service&&n.config.parents&&n.config.parents.length?n.service.loadParents().then((function(t){Object(e.each)(t,(function(t){t&&t.filter&&(n.gridQuery["data."+t.name+"._id"]=t.resource._id)})),n.gridSrc=n.service.formUrl,n.createText="New "+n.service.form.title})):n.service.formUrl&&(n.gridSrc=n.service.formUrl,n.createText="New "+n.service.form.title),n.cdr.detectChanges()}))},n.prototype.onSelect=function(n){var t=this;this.ngZone.run((function(){t.router.navigate([n._id,"view"],{relativeTo:t.route})}))},n.prototype.onCreateItem=function(){var n=this;this.ngZone.run((function(){n.router.navigate(["new"],{relativeTo:n.route})}))},n}()},WBsH:function(n,t,r){"use strict";r("YCyN");var e=r("xXMy");r.d(t,"c",(function(){return e.a}));var i=r("LItn");r.d(t,"b",(function(){return i.a}));var o=r("95tr");r.d(t,"a",(function(){return o.a})),r("vckZ"),r("1aN1"),r("dymo"),r("m8nl");var u=r("+7FJ");r.d(t,"d",(function(){return u.a})),r("ypRH"),r("GDim")},XF9X:function(n,t,r){"use strict";r.d(t,"a",(function(){return f}));var e=r("CcnG"),i=(r("D6yi"),r("Di7c"),r("ePN/")),o=r("KzPs"),u=(r("rJcy"),r("CFBA")),s=r.n(u),c=r("Mr5W"),a=r("LvDl"),l=r.n(a),f=function(){function n(n,t,r,i){var u=this;this.appConfig=n,this.config=t,this.resourcesService=r,this.appRef=i,this.initialized=!1,this.isLoading=!0,this.alerts=new o.a,this.refresh=new e.n,this.formLoaded=new s.a((function(n,t){u.formResolve=n,u.formReject=t})),this.init()}return n.prototype.initialize=function(){console.warn("FormioResourceService.initialize() has been deprecated.")},n.prototype.init=function(){if(!this.initialized)return this.initialized=!0,this.appConfig&&this.appConfig.appUrl?(c.Formio.setBaseUrl(this.appConfig.apiUrl),c.Formio.setProjectUrl(this.appConfig.appUrl),c.Formio.formOnly=this.appConfig.formOnly):console.error("You must provide an AppConfig within your application!"),this.formUrl=this.appConfig.appUrl+"/"+this.config.form,this.resource={data:{}},this.resourcesService&&(this.resources=this.resourcesService.resources,this.resources[this.config.name]=this),this.loadForm()},n.prototype.onError=function(n){throw this.alerts.setAlert({type:"danger",message:n.message||n}),this.resourcesService&&this.resourcesService.error.emit(n),n},n.prototype.onFormError=function(n){this.formReject(n),this.onError(n)},n.prototype.setContext=function(n){this.resourceId=n.snapshot.params.id,this.resource={data:{}},this.resourceUrl=this.appConfig.appUrl+"/"+this.config.form,this.resourceId&&(this.resourceUrl+="/submission/"+this.resourceId),this.formio=new i.a(this.resourceUrl),this.resourcesService&&(this.resources[this.config.name]=this),this.loadParents()},n.prototype.loadForm=function(){var n=this;return this.formFormio=new i.a(this.formUrl),this.isLoading=!0,this.formLoading=this.formFormio.loadForm().then((function(t){return n.form=t,n.formResolve(t),n.isLoading=!1,n.loadParents(),t}),(function(t){return n.onFormError(t)})).catch((function(t){return n.onFormError(t)})),this.formLoading},n.prototype.loadParents=function(){var n=this;return this.config.parents&&this.config.parents.length?this.resourcesService?this.formLoading.then((function(t){var r=[];return n.config.parents.forEach((function(e){var i=e.resource||e,o=e.field||e,u=!e.hasOwnProperty("filter")||e.filter;n.resources.hasOwnProperty(i)&&n.resources[i].resourceLoaded&&r.push(n.resources[i].resourceLoaded.then((function(r){var e="";return c.Utils.eachComponent(t.components,(function(t,i){if(t.key===o)return t.hidden=!0,t.clearOnHide=!1,l.a.set(n.resource.data,i,r),e=i,!0})),{name:e,filter:u,resource:r}})))})),s.a.all(r).then((function(r){return n.refresh.emit({form:t,submission:n.resource}),r}))})):(console.warn("You must provide the FormioResources within your application to use nested resources."),s.a.resolve([])):s.a.resolve([])},n.prototype.onSubmissionError=function(n){this.onError(n)},n.prototype.loadResource=function(n){var t=this;return this.setContext(n),this.isLoading=!0,this.resourceLoading=this.resourceLoaded=this.formio.loadSubmission(null,{ignoreCache:!0}).then((function(n){return t.resource=n,t.isLoading=!1,t.refresh.emit({property:"submission",value:t.resource}),n}),(function(n){return t.onSubmissionError(n)})).catch((function(n){return t.onSubmissionError(n)})),this.resourceLoading},n.prototype.save=function(n){var t=this;return(n._id?this.formio:this.formFormio).saveSubmission(n).then((function(n){return t.resource=n,n}),(function(n){return t.onError(n)})).catch((function(n){return t.onError(n)}))},n.prototype.remove=function(){var n=this;return this.formio.deleteSubmission().then((function(){n.resource=null}),(function(t){return n.onError(t)})).catch((function(t){return n.onError(t)}))},n}()},kVPD:function(n,t,r){"use strict";var e=r("D6yi");r.d(t,"b",(function(){return e.a})),r("Di7c");var i=r("XF9X");r.d(t,"e",(function(){return i.a}));var o=r("Fysl");r.d(t,"a",(function(){return o.a}));var u=r("wLq9");r.d(t,"f",(function(){return u.a}));var s=r("Et9f");r.d(t,"c",(function(){return s.a})),r("5YvF"),r("QMXP");var c=r("UQit");r.d(t,"d",(function(){return c.a})),r("uFmT"),r("pP+O")},"pP+O":function(n,t,r){"use strict";r.d(t,"a",(function(){return o})),r("ikog"),r("KzPs"),r("YCyN"),r("Fysl"),r("wLq9"),r("Et9f"),r("5YvF"),r("QMXP"),r("UQit");var e=r("uFmT"),i=r("f/UD"),o=function(){function n(){}return n.forChild=function(t){return Object(i.a)(n,t,e.a)},n.forRoot=function(t){return Object(i.a)(n,t,e.a)},n}()},rbuc:function(n,t,r){"use strict";r.d(t,"a",(function(){return l}));var e=r("CcnG"),i=r("5YvF"),o=r("XF9X"),u=r("ZYCi"),s=e.vb({encapsulation:2,styles:[],data:{}});function c(n){return e.Yb(0,[(n()(),e.xb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["Are you sure you wish to delete this record?"])),(n()(),e.xb(2,0,null,null,4,"div",[["class","btn-toolbar"]],null,null,null,null,null)),(n()(),e.xb(3,0,null,null,1,"button",[["class","btn btn-danger"],["style","margin-right: 10px;"],["type","button"]],null,[[null,"click"]],(function(n,t,r){var e=!0;return"click"===t&&(e=!1!==n.component.onDelete()&&e),e}),null,null)),(n()(),e.Vb(-1,null,["Yes"])),(n()(),e.xb(5,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],(function(n,t,r){var e=!0;return"click"===t&&(e=!1!==n.component.onCancel()&&e),e}),null,null)),(n()(),e.Vb(-1,null,["No"]))],null,null)}function a(n){return e.Yb(0,[(n()(),e.xb(0,0,null,null,1,"ng-component",[],null,null,null,c,s)),e.wb(1,49152,null,0,i.a,[o.a,u.a,u.k],null,null)],null,null)}var l=e.tb("ng-component",i.a,a,{},{},[])},uFmT:function(n,t,r){"use strict";r.d(t,"a",(function(){return a}));var e=r("Fysl"),i=r("wLq9"),o=r("Et9f"),u=r("5YvF"),s=r("QMXP"),c=r("UQit");function a(n){return[{path:"",component:n&&n.index?n.index:c.a},{path:"new",component:n&&n.create?n.create:s.a},{path:":id",component:n&&n.resource?n.resource:e.a,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:n&&n.view?n.view:i.a},{path:"edit",component:n&&n.edit?n.edit:o.a},{path:"delete",component:n&&n.delete?n.delete:u.a}]}]}},wLq9:function(n,t,r){"use strict";r.d(t,"a",(function(){return e})),r("XF9X"),r("D6yi");var e=function(){return function(n,t){this.service=n,this.config=t}}()}}]);