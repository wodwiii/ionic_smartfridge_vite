System.register(["./index-legacy-4Zi5nBXc.js"],(function(t,e){"use strict";var n,o,i,r;return{setters:[t=>{n=t.q,o=t.t,i=t.u,r=t.v}],execute:function(){var e=function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function c(t){try{s(o.next(t))}catch(t){r(t)}}function a(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){t.done?n(t.value):i(t.value).then(c,a)}s((o=o.apply(t,e||[])).next())}))},c=function(t,e){var n,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(c=0)),c;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){c.label=a[1];break}if(6===a[0]&&c.label<i[1]){c.label=i[1],i=a;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(a);break}i[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};t("pwa_camera_modal_instance",function(){function t(t){var n=this;i(this,t),this.onPhoto=r(this,"onPhoto",7),this.noDeviceError=r(this,"noDeviceError",7),this.handlePhoto=function(t){return e(n,void 0,void 0,(function(){return c(this,(function(e){return this.onPhoto.emit(t),[2]}))}))},this.handleNoDeviceError=function(t){return e(n,void 0,void 0,(function(){return c(this,(function(e){return this.noDeviceError.emit(t),[2]}))}))},this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image"}return t.prototype.handleBackdropClick=function(t){t.target!==this.el&&this.onPhoto.emit(null)},t.prototype.handleComponentClick=function(t){t.stopPropagation()},t.prototype.handleBackdropKeyUp=function(t){"Escape"===t.key&&this.onPhoto.emit(null)},t.prototype.render=function(){var t=this;return n("div",{class:"wrapper",onClick:function(e){return t.handleBackdropClick(e)}},n("div",{class:"content"},n("pwa-camera",{onClick:function(e){return t.handleComponentClick(e)},facingMode:this.facingMode,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))},Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:!1,configurable:!0}),t}()).style=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}"}}}));
