webpackJsonp([1],{147:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),l=t.n(u),s=t(3),c=t(10),p=t(148),A=t(51),d=t(20),b=t(157),h=t.n(b),g=t(9),m=t(13),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),C=function(e){function n(){var e,t,r,u;a(this,n);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return t=r=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),r.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},r.inputChangedHandler=function(e,n){var t=Object(m.b)(r.state.controls,o({},n,Object(m.b)(r.state.controls[n],{value:e.target.value,valid:Object(m.a)(e.target.value,r.state.controls[n].validation),touched:!0})));r.setState({controls:t})},r.submitHandler=function(e){e.preventDefault(),r.props.onAuth(r.state.controls.email.value,r.state.controls.password.value,r.state.isSignup)},r.switchAuthModeHandler=function(){r.setState(function(e){return{isSignup:!e.isSignup}})},u=t,i(r,u)}return r(n,e),f(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var o=n.map(function(n){return l.a.createElement(p.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(o=l.a.createElement(d.a,null));var a=null;this.props.error&&(a=l.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=l.a.createElement(c.d,{to:this.props.authRedirectPath})),l.a.createElement("div",{className:h.a.Auth},i,a,l.a.createElement("form",{onSubmit:this.submitHandler},o,l.a.createElement(A.a,{btnType:"Success"},"Submit")),l.a.createElement(A.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),n}(u.Component),x=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},v=function(e){return{onAuth:function(n,t,o){return e(g.b(n,t,o))},onSetAuthRedirectPath:function(){return e(g.j("/"))}}};n.default=Object(s.b)(x,v)(C)},148:function(e,n,t){"use strict";var o=t(0),a=t.n(o),i=t(149),r=t.n(i),u=function(e){var n=null,t=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(r.a.Invalid),e.elementType){case"input":n=a.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=a.a.createElement("textarea",Object.assign({className:r.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=a.a.createElement("select",{className:r.a.InputElement,value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=a.a.createElement("input",Object.assign({className:r.a.inputClasses},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:r.a.Input},a.a.createElement("label",{className:r.a.Label},e.label),n)};n.a=u},149:function(e,n,t){var o=t(150);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;t(145)(o,a);o.locals&&(e.exports=o.locals)},150:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Input_Input_s67N0{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input_Label__n-1m{font-weight:700;display:block;margin-bottom:8px}.Input_InputElement_2-aFx{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input_InputElement_2-aFx:focus{outline:none;background-color:#ccc}.Input_Invalid_1sl1p{border:1px solid red;background-color:salmon}","",{version:3,sources:["/Users/janeyou/Desktop/Burger-Builder/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,mBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,mBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,0BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,gCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,qBACI,qBAAsB,AACtB,uBAAyB,CAC5B",file:"Input.css",sourcesContent:[".Input{\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; \n}\n\n.Label{\n    font-weight: bold; \n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement{\n    outline: none; \n    border: 1px solid #ccc; \n    background-color: white; \n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%; \n    -webkit-box-sizing: border-box; \n            box-sizing: border-box; \n}\n\n.InputElement:focus {\n    outline: none; \n    background-color: #ccc; \n}\n\n.Invalid {\n    border: 1px solid red; \n    background-color: salmon; \n}\n\n\n"],sourceRoot:""}]),n.locals={Input:"Input_Input_s67N0",Label:"Input_Label__n-1m",InputElement:"Input_InputElement_2-aFx",Invalid:"Input_Invalid_1sl1p"}},157:function(e,n,t){var o=t(158);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!1};a.transform=void 0;t(145)(o,a);o.locals&&(e.exports=o.locals)},158:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Auth_Auth_2YUr1{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media(min-width:600px){.Auth_Auth_2YUr1{width:500px}}","",{version:3,sources:["/Users/janeyou/Desktop/Burger-Builder/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,iBACI,iBAAiB,AACjB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAGD,wBACI,iBACI,WAAY,CACf,CACJ",file:"Auth.css",sourcesContent:[".Auth{\n    margin:20px auto; \n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n\n@media(min-width:600px){\n    .Auth{\n        width:500px; \n    }\n}"],sourceRoot:""}]),n.locals={Auth:"Auth_Auth_2YUr1"}}});
//# sourceMappingURL=1.6ad98fce.chunk.js.map