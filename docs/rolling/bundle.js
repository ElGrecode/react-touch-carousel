!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=45)}([function(e,t){e.exports=React},function(e,t,n){"use strict";function r(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n}function o(e,t,n){return e<t?t:e>n?n:e}function a(e,t){return Math.round(e/t)*t}function i(e){return{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}}function u(e){return e.changedTouches[0].identifier}function c(e,t){var n={};return Object.keys(e).forEach(function(r){t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.range=r,t.clamp=o,t.precision=a,t.getTouchPosition=i,t.getTouchId=u,t.omit=c},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!m){var e=o(i);m=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,m=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||m||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.omit=t.getTouchId=t.getTouchPosition=t.precision=t.clamp=t.range=void 0;var r=n(1);Object.defineProperty(t,"range",{enumerable:!0,get:function(){return r.range}}),Object.defineProperty(t,"clamp",{enumerable:!0,get:function(){return r.clamp}}),Object.defineProperty(t,"precision",{enumerable:!0,get:function(){return r.precision}}),Object.defineProperty(t,"getTouchPosition",{enumerable:!0,get:function(){return r.getTouchPosition}}),Object.defineProperty(t,"getTouchId",{enumerable:!0,get:function(){return r.getTouchId}}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r.omit}});var o=n(6),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=a.default},function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=(0,y.getTouchPosition)(e),n=t.x,r=t.y;this.x=n,this.y=r,this.time=Date.now()}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),p=r(f),d=n(7),h=r(d),m=n(20),v=r(m),y=n(1),g={component:"div",cardSize:e.innerWidth||320,cardCount:1,cardPadCount:2,defaultCursor:0,loop:!0,autoplay:0,vertical:!1,renderCard:function(){},precision:.001,moveScale:1,stiffness:200,damping:25,onRest:function(){},onDragStart:function(){},onDragEnd:function(){},onDragCancel:function(){},maxOverflow:.5,clickTolerance:2,ignoreCrossMove:!0},b=Object.keys(g),w=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onTouchStart=function(e){var t=n.touchCount;n.touchCount+=e.changedTouches.length,n.setState({active:!0}),n.stopAutoplay(),n.tracingTouchId=(0,y.getTouchId)(e),n.touchMoves=[new c(e)],n.isMovingCross=null;var r=n.props,o=r.cardSize,a=r.clickTolerance;n.grabbing=o*Math.abs(n.usedCursor-n.state.cursor)>a,t?n.modCursor():n.setCursor(n.usedCursor).then(n.modCursor)},n.onTouchMove=function(e){n.grabbing=!1;var t=new c(e),r=(0,y.getTouchId)(e);r!==n.tracingTouchId&&(n.touchMoves=[t]),n.tracingTouchId=r;var o=e.defaultPrevented;if(!o&&n.state.active&&n.touchMoves.length){if(null==n.isMovingCross){var a=n.props,i=a.vertical,u=a.ignoreCrossMove,s=u;"number"!=typeof s&&(s=s?1:0);var l=i?"y":"x",f=i?"x":"y",p=Math.abs(t[l]-n.touchMoves[0][l]),d=Math.abs(t[f]-n.touchMoves[0][f]);n.isMovingCross=d*s>p}o=n.isMovingCross}if(!o){e.preventDefault();var h=n.props,m=h.cardSize,v=h.moveScale,g=h.vertical,b=h.onDragStart,w=n.touchMoves[n.touchMoves.length-1],T=g?"y":"x",x=t[T]-w[T];n.setState({dragging:!0},n.state.dragging?void 0:b),n.setCursor(n.state.cursor+x/m*v),n.touchMoves.push(t),n.touchMoves.length>250&&n.touchMoves.splice(0,50)}},n.onTouchEndOrCancel=function(e){var t=e.type;if(n.touchCount-=e.changedTouches.length,n.touchCount>0)return void(n.touchMoves=[]);n.grabbing&&(e.preventDefault(),e.stopPropagation());var r=n.state.dragging,o=null;if(r&&n.touchMoves.length){for(var a=n.props,i=a.cardSize,u=a.moveScale,c=a.vertical,s=n.props.damping/1e6,l=n.touchMoves,f=l.length,p=0;--f>=0&&p<100;)p=Date.now()-l[f].time;f++;var d=c?"y":"x",h=((0,y.getTouchPosition)(e)[d]-l[f][d])/p,m=h*Math.abs(h)/s/2,v=n.state.cursor,g=(0,y.clamp)(m/i*u,Math.floor(v)-v,Math.ceil(v)-v);o=Math.round(v+g),n.touchMoves=[]}else o=Math.round(n.state.cursor);n.setState({active:!1,dragging:!1},function(){n.setCursor(o),r&&n.props["touchend"===t?"onDragEnd":"onDragCancel"]()}),n.tracingTouchId=null,n.autoplayIfEnabled()},n.onSpringRest=function(){if(n.shouldEnableSpring()){n.setState({springing:!1});for(var e=Math.round(n.usedCursor),t=-e,r=t%n.props.cardCount;r<0;)r+=n.props.cardCount;n.props.onRest(t,r,e,n.state)}},n.autoplayIfEnabled=function(){n.props.autoplay&&(n.autoplayTimer=setInterval(n.next,n.props.autoplay))},n.stopAutoplay=function(){n.autoplayTimer&&(clearInterval(n.autoplayTimer),n.autoplayTimer=null)},n.go=function(e){return n.modCursor().then(function(){n.setCursor(e)})},n.next=function(){return n.modCursor().then(function(){n.setCursor(n.state.cursor-1)})},n.prev=function(){return n.modCursor().then(function(){n.setCursor(n.state.cursor+1)})},n.setCursor=function(e){var t=n.shouldEnableSpring()&&e!==n.state.cursor;return new Promise(function(r){n.setState({cursor:e,springing:t},r)})},n.modAs=function(e){return new Promise(function(t){n.setState({moding:!0,cursor:e},function(){n.setState({moding:!1},t)})})},n.modCursor=function(){return new Promise(function(e){var t=n.props,r=t.loop,o=t.cardCount;if(!r)return e();for(var a=n.state.cursor,i=a;i>0;)i-=o;for(;i<1-o;)i+=o;i!==a?n.modAs(i).then(e):e()})},n.shouldEnableSpring=function(){var e=n.state,t=e.active,r=e.moding;return!t&&!r},n.state={cursor:e.defaultCursor,active:!1,dragging:!1,springing:!1,moding:!1},n.usedCursor=0,n.touchCount=0,n.touchMoves=[],n.autoplayTimer=null,n.grabbing=!1,n.tracingTouchId=null,n.isMovingCross=null,n}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.autoplayIfEnabled()}},{key:"componentWillUnmount",value:function(){this.stopAutoplay()}},{key:"getCursor",value:function(){return this.state.cursor}},{key:"getComputedCursor",value:function(){var e=this.props,t=e.cardCount,n=e.loop,r=e.maxOverflow,o=this.state,a=o.cursor,i=o.dragging,u=a;return n||(u=(0,y.clamp)(u,1-t,0),i&&a>0?u=r-r/(a+1):i&&a<1-t&&(u=1-t-r+r/(1-t-a+1))),u}},{key:"getUsedCursor",value:function(){return this.usedCursor}},{key:"render",value:function(){var e=this,t=this.props,n=t.component,r=(t.cardSize,t.cardCount),a=t.cardPadCount,i=t.renderCard,u=t.stiffness,c=t.damping,l=t.precision,f=t.loop,d=o(t,["component","cardSize","cardCount","cardPadCount","renderCard","stiffness","damping","precision","loop"]),m=f?a:0,g={stiffness:u,damping:c,precision:l},w=this.getComputedCursor();return p.default.createElement(h.default,{defaultStyle:{cursor:w},style:{cursor:this.shouldEnableSpring()?(0,v.default)(w,g):(0,y.precision)(w,l)},onRest:this.onSpringRest},function(t){var o=t.cursor;return e.usedCursor=o,p.default.createElement(n,s({},(0,y.omit)(d,b),{cursor:o,carouselState:e.state,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEndOrCancel,onTouchCancel:e.onTouchEndOrCancel}),(0,y.range)(0-m,r-1+m).map(function(t){for(var n=t%r;n<0;)n+=r;return i(t,n,o,e.state)}))})}}]),t}(p.default.PureComponent);w.defaultProps=g,t.default=w}).call(t,n(2))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(8),s=r(c),l=n(9),f=r(l),p=n(10),d=r(p),h=n(11),m=r(h),v=n(12),y=r(v),g=n(14),b=r(g),w=n(0),T=r(w),x=n(15),O=r(x),C=1e3/60,S=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=r.state,o=n.currentStyle,a=n.currentVelocity,u=n.lastIdealStyle,c=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var l=e[s];"number"==typeof l&&(t||(t=!0,o=i({},o),a=i({},a),u=i({},u),c=i({},c)),o[s]=l,a[s]=0,u[s]=l,c[s]=0)}t&&r.setState({currentStyle:o,currentVelocity:a,lastIdealStyle:u,lastIdealVelocity:c})},this.startAnimationIfNecessary=function(){r.animationID=y.default(function(e){var t=r.props.style;if(b.default(r.state.currentStyle,t,r.state.currentVelocity))return r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,void(r.accumulatedTime=0);r.wasAnimating=!0;var n=e||m.default(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*C&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/C)*C)/C,i=Math.floor(r.accumulatedTime/C),u={},c={},s={},l={};for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var p=t[f];if("number"==typeof p)s[f]=p,l[f]=0,u[f]=p,c[f]=0;else{for(var h=r.state.lastIdealStyle[f],v=r.state.lastIdealVelocity[f],y=0;y<i;y++){var g=d.default(C/1e3,h,v,p.val,p.stiffness,p.damping,p.precision);h=g[0],v=g[1]}var w=d.default(C/1e3,h,v,p.val,p.stiffness,p.damping,p.precision),T=w[0],x=w[1];s[f]=h+(T-h)*a,l[f]=v+(x-v)*a,u[f]=h,c[f]=v}}r.animationID=null,r.accumulatedTime-=i*C,r.setState({currentStyle:s,currentVelocity:l,lastIdealStyle:u,lastIdealVelocity:c}),r.unreadPropStyle=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return a(t,e),u(t,null,[{key:"propTypes",value:{defaultStyle:O.default.objectOf(O.default.number),style:O.default.objectOf(O.default.oneOfType([O.default.number,O.default.object])).isRequired,children:O.default.func.isRequired,onRest:O.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||f.default(n),o=s.default(r);return{currentStyle:r,currentVelocity:o,lastIdealStyle:r,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=m.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=m.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(y.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&T.default.Children.only(e)},t}(T.default.Component);t.default=S,e.exports=t.default},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n,r,a,i,u){var c=-a*(t-r),s=-i*n,l=c+s,f=n+l*e,p=t+f*e;return Math.abs(f)<u&&Math.abs(p-r)<u?(o[0]=r,o[1]=0,o):(o[0]=p,o[1]=f,o)}t.__esModule=!0,t.default=r;var o=[0,0];e.exports=t.default},function(e,t,n){(function(t){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(3))},function(e,t,n){(function(t){for(var r=n(13),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",u=o["request"+i],c=o["cancel"+i]||o["cancelRequest"+i],s=0;!u&&s<a.length;s++)u=o[a[s]+"Request"+i],c=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!u||!c){var l=0,f=0,p=[];u=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=c}}).call(t,n(2))},function(e,t,n){(function(t){(function(){var n,r,o,a,i,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},a=n(),u=1e9*t.uptime(),i=a-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(3))},function(e,t,n){"use strict";function r(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var o="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==o)return!1}return!0}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){e.exports=n(16)()},function(e,t,n){"use strict";var r=n(17),o=n(18),a=n(19);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,a,i,u,c){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,i,u,c],f=0;s=new Error(t.replace(/%s/g,function(){return l[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t){return o({},u,t,{val:e})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r;var a=n(21),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=o({},i.default.noWobble,{precision:.01});e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(l(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(l(r.parts[a],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],u=a[1],c=a[2],s=a[3],l={css:u,media:c,sourceMap:s};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function a(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",s(t,e.attrs),a(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(t,e.attrs),a(e,t),t}function s(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var s=g++;n=y||(y=u(t)),r=f.bind(null,n,s,!1),o=f.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=d.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=p.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=T(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),y=null,g=0,b=[],w=n(24);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],c=h[u.id];c.refs--,a.push(c)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete h[c.id]}}}};var T=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[{title:"Card 1",background:"#0072bb",text:"react-touch-carousel only handles the trouble parts, i.e.\n    - touch gestures parsing\n    - scroll cursor rounding and modding\n    - items padding and looping\n    - auto playing"},{title:"Card 2",background:"#ff4c3b",text:"It is left up to you to\n    - decide the carousel structure\n    - render each item in the carousel\n    - style everything\n    - add some fancy decorators like dots"},{title:"Card 3",background:"#ffca18",text:"Install it by\n    - npm install --save react-touch-carousel"},{title:"Card 4",background:"#44c1c1",text:"See some example code in the '/examples' dir at GitHub. And you can run and play with the code after cloning it, by\n    - npm install\n    - npm run dev\n    - open localhost:5000"},{title:"Card 5",background:"#29c53c",text:"react-touch-carousel is released under MIT license"}];t.default=r},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function c(e){var t=e.cursor,n=(e.carouselState,u(e,["cursor","carouselState"])),r=(t-b)*g+(w-g)/2;return p.default.createElement("div",{className:"carousel-container"},p.default.createElement("div",l({className:"carousel-track",style:{transform:"translate3d("+r+"px, 0, 0)"}},n)))}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(0),p=r(f),d=n(4),h=n(25),m=r(h),v=n(5),y=r(v);n(46);var g=300,b=3,w=(0,v.clamp)(window.innerWidth,0,960),T=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"renderCard",value:function(e,t,n){var r=m.default[t],o=40*(e+n),a=Math.abs(e+n)<.5;return p.default.createElement("div",{key:e,className:"carousel-card"},p.default.createElement("div",{className:"carousel-card-inner",style:{backgroundColor:r.background,transform:"rotate("+o+"deg)",zIndex:a?1:0}},p.default.createElement("div",{className:"carousel-title"},r.title),p.default.createElement("div",{className:"carousel-text"},r.text)))}},{key:"render",value:function(){return p.default.createElement(y.default,{component:c,cardSize:g,cardCount:m.default.length,cardPadCount:b,autoplay:2e3,renderCard:this.renderCard})}}]),t}(f.Component);document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("react-root");(0,d.render)(p.default.createElement(T,null),e),"ontouchmove"in window||document.getElementById("mobile-tip").removeAttribute("hidden")})},function(e,t,n){var r=n(47);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(23)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(22)(void 0),t.push([e.i,"body,html{margin:0}.ui-center,h1{text-align:center}h1{margin:1.5em;font-size:24px}#mobile-tip{text-align:center}#mobile-tip:not([hidden])~#react-root{opacity:.1}.carousel-container{position:relative;height:300px;max-width:960px;margin:0 auto;overflow:hidden;touch-action:pan-y}.carousel-card,.carousel-track{display:flex;height:100%}.carousel-card{flex:0 0 300px;justify-content:center;align-items:center;text-align:center;font-weight:700;color:#fff;-webkit-tap-highlight-color:transparent}.carousel-card-inner{position:relative;flex-direction:column;width:290px;height:290px;border-radius:5px}.carousel-title{margin-top:20px;font-size:1.5em}.carousel-text{padding:1em;font-size:14px;white-space:pre-wrap;text-align:left;font-family:sans-serif}",""])}]);