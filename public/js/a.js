(function(a){var b={}
b.$Modules=b
;
var c={"build_number":"20140912.032509","git_commit":"0fc2da9166665b99dd0729ed45debb2ba0db954f","languages":{"af":"__$$__stringtable_lang_af","ar":"__$$__stringtable_lang_ar","az":"__$$__stringtable_lang_az","bg":"__$$__stringtable_lang_bg","ca":"__$$__stringtable_lang_ca","cs":"__$$__stringtable_lang_cs","da":"__$$__stringtable_lang_da","de":"__$$__stringtable_lang_de","el":"__$$__stringtable_lang_el","es":"__$$__stringtable_lang_es","et":"__$$__stringtable_lang_et","eu":"__$$__stringtable_lang_eu","fa":"__$$__stringtable_lang_fa","fi":"__$$__stringtable_lang_fi","fo":"__$$__stringtable_lang_fo","fr":"__$$__stringtable_lang_fr","ga":"__$$__stringtable_lang_ga","gl":"__$$__stringtable_lang_gl","he":"__$$__stringtable_lang_he","hr":"__$$__stringtable_lang_hr","hu":"__$$__stringtable_lang_hu","id":"__$$__stringtable_lang_id","is":"__$$__stringtable_lang_is","it":"__$$__stringtable_lang_it","ja":"__$$__stringtable_lang_ja","ka":"__$$__stringtable_lang_ka","ko":"__$$__stringtable_lang_ko","ku":"__$$__stringtable_lang_ku","lt":"__$$__stringtable_lang_lt","lv":"__$$__stringtable_lang_lv","mk":"__$$__stringtable_lang_mk","mn":"__$$__stringtable_lang_mn","ms":"__$$__stringtable_lang_ms","nb":"__$$__stringtable_lang_nb","nl":"__$$__stringtable_lang_nl","pl":"__$$__stringtable_lang_pl","pt":"__$$__stringtable_lang_pt","pt_BR":"__$$__stringtable_lang_pt_BR","ro":"__$$__stringtable_lang_ro","ru":"__$$__stringtable_lang_ru","si":"__$$__stringtable_lang_si","sk":"__$$__stringtable_lang_sk","sl":"__$$__stringtable_lang_sl","sq":"__$$__stringtable_lang_sq","sr":"__$$__stringtable_lang_sr","sv":"__$$__stringtable_lang_sv","sw":"__$$__stringtable_lang_sw","th":"__$$__stringtable_lang_th","tr":"__$$__stringtable_lang_tr","uk":"__$$__stringtable_lang_uk","ur":"__$$__stringtable_lang_ur","vi":"__$$__stringtable_lang_vi","zh_CN":"__$$__stringtable_lang_zh_CN","zh_TW":"__$$__stringtable_lang_zh_TW","en":"__$$__stringtable_lang_en"},"strings":["Zopim Live Chat requires cookies to function. Enable cookies?","Privacy policy","Chat with us","Leave a message","support","We're online","We're away","We're offline","Live Support","Ask us anything","Hi, welcome to our website!","Questions?","Click here to chat with us","Choose a Department","Message","Phone","Sorry, we aren't online at the moment. Leave a message and we'll get back to you.","Sorry, we aren't online at the moment.","Thanks for the message! We'll get back to you as soon as we can.","Nice chatting with you!","How would you rate the chat experience you just had?","Thanks for the good rating! Would you like to leave a comment?","What did you like about this chat?","Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve.","What did you dislike about this chat?","Minimize","Send","Type your message here","Submit","Cancel","Back to Chat","End","Send Chat Transcript to","Email","This isn't a valid email","Email sent to @@@@<email>@@@@","Close","Online","Away","Offline","Complete this field","Enter a valid email address","Select an option","Check this option to continue","Select at least one option","Select a department","This field is invalid","Phone number","Are you sure you want to end this chat?","Facebook","Twitter","Google+","<name> joined the chat","<name> left the chat","<old_name> is now known as <new_name>","Chat started","Chat ended","<number> new message","<number> new messages","<number> New","Chat","Reconnecting","Click to reconnect","Resuming session","Loading","Chat Disabled","Disabled","Zopim Live Chat","Unlink from <name>","Please wait while our agents attend to you. There are currently <number> visitor(s) waiting to be served.","Powered by Zopim Live Chat","Zendesk","Send Message","Start Chatting","Any Department","Closed","File size too large. Maximum total size is limited to <size>.","The file you are trying to send is not supported.","File sending is temporary disabled. Please try again later.","Failed to send. Please try again.","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Weekdays","Weekends","Daily","All day","Our Operating Hours","Back","Send Another","Operating Hours","UTC","Drop files here","Skip","Zopim Live Chat requires cookies to function","You objected to the use of cookies based on our @cookie policy@. Approve the use of cookies to enable chat functions.","You may disable the chat anytime.","Enable Cookies and Chat","If you do not agree with our @cookie policy@, you may disable the chat widget. Past information and cookies will be removed.","You may re-enable chat anytime.","Disable Chat","Name","Connect with <name>","Introduce yourself","Hello there!","Name, Email","Edit","Sign out","or","Connect to","Please update your profile","Please provide your name","Please provide a valid email","or sign in with","Phone Number","Please provide a valid phone","Hi, <name>","Hi there!","Sign In","Sound","Cookies","About","Send a File","Email Transcript","End This Chat","Connect with","Use Name and Email","Edit Contact Details","Enter your name","Enter your email","Enter your phone","Save","Open in new window","Options","Sign in","Rate this chat","Change rating","Great","Bad","<name> is typing ...","<name> are typing ...","This widget uses @cookies@.","to","You","Click here to change","Message not sent","Resend","Uploading \"<file_name>\"","\"<file_name>\" sent.","End Chat","Not Yet","Open Form","Your Profile","Open","Leave a Message"]},d=b.Module=(function(){var x=[],y=/^function *\( *\) *{ *([\s\S]*) *}$/
function z(D,E){var F=b[D]
F.module_function=new Function('$Modules',E.toString().replace(y,'$1'))
F.ready()}
function A(D){var E,F,G,H
for(E=x.length-1;E>=0;E--){G=x[E]
H=G.dependencies
for(F=H.length-1;F>=0;F--){if(H[F]==D){H.splice(F,1)
break}}
G.ready()}}
function B(){var D=Array.prototype.slice.call(arguments),E=D.shift()
this.fqname=E
this.name=E.split('.').pop()
this.callbacks=[]
this.dependencies=D
x.push(this)}
B.ensureLoaded=function(D,E){if(D instanceof B)D.ensureLoaded(E)
else E()}
B.prototype.ensureLoaded=function(D){this.ifLoaded(D)
this.load()}
B.prototype.ifLoaded=function(D){this.callbacks.push(D)}
B.prototype.load=function(){var D=this.getDependencies(),E,F
function G(H){z(H[0],H[1])}
for(E=0;E<D.length;E++){F=D[E]
if(F.loader)continue
F.loader=new t(c.baseURL+'/lib/'+c.build_number+'/'+F.fqname+'.js',b,G)}}
B.prototype.getDependencies=function(){var D=this.dependencies,E,F=[this]
for(E=0;E<D.length;E++){var G=b[D[E]]
F=F.concat(G.getDependencies())}
return F}
B.prototype.ready=function(){if(this.dependencies.length||!this.module_function)return
for(E=x.length-1;E>=0;E--)if(x[E]==this){x.splice(E,1)
break}
this.module_function(b)
var D=b[this.fqname],E
D.ifLoaded=D.ensureLoaded=C
for(E=0;E<this.callbacks.length;E++)this.callbacks[E](D)
A(this.fqname)
delete this.callbacks
delete this.fqname
delete this.name
delete this.dependencies
delete this.loader}
function C(D){D()}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_core_Module"].join('')
B.prototype.__jx__fqname="jx_core_Module"}
return B})(),e=b.clone=(function(){function x(){}
function y(z){x.prototype=z
return new x()}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_core_globals_clone"].join('')
y.prototype.__jx__fqname="jx_core_globals_clone"}
return y})(),f=b.indexOf=(function(){var x=Array.prototype.indexOf
if(typeof x!='function'||!/\[native code\]/.test(x.toString()))x=y
function y(A){"use strict"
if(this==null){throw new TypeError()}
var B=Object(this),C=B.length>>>0
if(C===0){return -1}
var D=0
if(arguments.length>0){D=Number(arguments[1])
if(D!=D){D=0}
else if(D!=0&&D!=Infinity&&D!=-Infinity){D=(D>0||-1)*Math.floor(Math.abs(D))}}
if(D>=C){return -1}
var E=D>=0?D:Math.max(C-Math.abs(D),0)
for(;E<C;E++){if(E in B&&B[E]===A){return E}}
return -1}
function z(A,B,C){return x.call(B,A,C)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_core_globals_indexOf"].join('')
z.prototype.__jx__fqname="jx_core_globals_indexOf"}
return z})(),g=b.isArray=(function(){function x(y){return Object.prototype.toString.call(y)=='[object Array]'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isArray"].join('')
x.prototype.__jx__fqname="jx_core_globals_isArray"}
return x})(),h=b.isFunction=(function(){function x(y){return typeof y=='function'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isFunction"].join('')
x.prototype.__jx__fqname="jx_core_globals_isFunction"}
return x})(),i=b.isString=(function(){function x(y){return typeof (y)=='string'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isString"].join('')
x.prototype.__jx__fqname="jx_core_globals_isString"}
return x})(),j=b.isNumber=(function(){function x(y){return typeof (y)=='number'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isNumber"].join('')
x.prototype.__jx__fqname="jx_core_globals_isNumber"}
return x})(),k=b.isUndefined=(function(){var x=(function(y){return function(z,A){return A?z==null:z===y}})()
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isUndefined"].join('')
x.prototype.__jx__fqname="jx_core_globals_isUndefined"}
return x})(),l=b.nextTick=(function(){var x=100,y,z=[]
function A(C,D,E){p.ok(typeof C=='function','1st argument to nextTick must be a function')
if(E){for(var F=z.length;F-->0;){if(z[F][0]===C&&z[F][1]===D)return}}
z.push([C,D])
if(!y)y=setTimeout(B,0)}
function B(){var C=(+new Date())+x,D=z
z=[]
if(y)y=clearTimeout(y)
for(var E=0,F=D.length;E<F;E++){try {D[E][0].apply(D[E][1])}catch(G){r.fire('error',G)}
if((+new Date())>C){if(E<F-1){D.splice(0,E+1)
if(z.length){z=D.concat(z)}
else{z=D
y=setTimeout(B,0)}}
break}}}
A.tick=B
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_core_globals_nextTick"].join('')
A.prototype.__jx__fqname="jx_core_globals_nextTick"}
return A})(),m=b.Polyfill=(function(){if(!h(String.prototype.trim)){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'')}}
var x={}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Polyfill"].join('')
x.prototype.__jx__fqname="jx_core_Polyfill"}
return x})(),n=b.parseBoolean=(function(){function x(y){return !!y&&y!='false'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_parseBoolean"].join('')
x.prototype.__jx__fqname="jx_core_globals_parseBoolean"}
return x})(),o=b.StackTrace=(function(){var x
try {(0)()}catch(A){x=A.arguments?'chrome':A.stack?'firefox':window.opera&&!('stacktrace' in A)?'opera':'other'}
function y(){this.stack=this[x]()}
y.prototype.toString=function(){return this.stack.join('\n')}
y.prototype.chrome=function(){try {(0)()}catch(A){return A.stack.replace(/^(.*?\n){2}/,'').replace(/^[^\(]+?[\n$]/g,'').replace(/^\s+at\s+/g,'').replace(/^Object.<anonymous>\s*\(/g,'{anonymous}()@').split('\n')}}
y.prototype.firefox=function(){try {(0)()}catch(A){return A.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/,'').replace(/^\(/g,'{anonymous}(').split('\n')}}
y.prototype.opera=function(){try {(0)()}catch(A){var B=A.message.split('\n'),C='{anonymous}',D=/Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i,E,F,G
for(E=4,F=0,G=B.length;E<G;E+=2){if(D.test(B[E])){B[F++]=(RegExp.$3?RegExp.$3+'()@'+RegExp.$2+RegExp.$1:C+'()@'+RegExp.$2+':'+RegExp.$1)+' -- '+B[E+1].replace(/^\s+/,'')}}
B.splice(F,B.length-F)
return B}}
y.prototype.other=function(){var A=arguments.callee,B='{anonymous}',C=/function\s*([\w\-$]+)?\s*\(/i,D=[],E=0,F,G,H=20
while(A&&D.length<H){F=C.test(A.toString())?RegExp.$1||B:B
G=Array.prototype.slice.call(A['arguments'])
D[E++]=F+'('+z(G)+')'
if(A===A.caller&&window.opera){break}
A=A.caller}
return D}
function z(A){for(var B=0;B<A.length;++B){var C=A[B]
if(typeof C=='object'){A[B]='#object'}
else if(typeof C=='function'){A[B]='#function'}
else if(typeof C=='string'){A[B]='"'+C+'"'}}
return A.join(',')}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_core_StackTrace"].join('')
y.prototype.__jx__fqname="jx_core_StackTrace"}
return y})(),p=b.Assert=(function(){var x={ok:y,isFunction:function(z,A){y(h(z),A)}}
x.log=function(){}
function y(z,A){if(!z)x.log(A)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Assert"].join('')
x.prototype.__jx__fqname="jx_core_Assert"}
return x})(),q=b.Browser=(function(){var x=navigator,y=x.userAgent.toLowerCase(),z=+(/trident.*rv:? *([0-9]+)/.exec(y)||[])[1]||!1,A=eval("/*@cc_on(function(v,m){return v>=9?v:v>=5.8?8:v>=5.7&&m?7:v>=5.6?6:v>=5.5?5.5:v>=5.1?5:v>=3?4:3})(@_jscript_version,'maxHeight' in document.createElement('a').style)@*/"),B=A==8,C=A==7,D=A==6,E=window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]",F=navigator.vendor=='Google Inc.',G=navigator.vendor=='Apple Computer, Inc.',H=!A&&!E&&(F||G||/webkit|khtml/.test(y)),I=+/\d+/.exec(/firefox\/\d+/i.exec(navigator.userAgent)||''),J=y.indexOf('firefox/2')>-1,K=y.indexOf('firefox/3')>-1,L=y.indexOf("iphone")!=-1,M=y.indexOf("ipod")!=-1,N=y.indexOf("ipad")!=-1,O=L||N||M,P=y.indexOf("android")!=-1,Q=y.indexOf("wp7")!=-1,R=O||P||Q,S,T=A&&'msie'||I&&'firefox'||E&&'opera'||F&&'chrome'||G&&'safari',U,V=A&&!W,W=document.compatMode=="CSS1Compat",X=!W,Y=A&&X&&document.documentElement&&!!document.documentElement.style.setExpression,Z=document.documentMode||A,$$=(y.indexOf("windows")!=-1||y.indexOf("win32")!=-1),$_=(y.indexOf("macintosh")!=-1||y.indexOf("mac os x")!=-1),$a=document.location.protocol=='https:',$b=x.language||x.browserLanguage||x.userLanguage||x.systemLanguage,$c={noBoxSizing:Z<=7,ie:{cssBottomRight:D,cssFixed:D||Y,buggyCSS:D||Y}},$d=!1
if(window.CustomEvent){try {new window.CustomEvent('testevent',{bubbles:!1,cancelable:!0,detail:!0})
$d=!0}catch($r){;}}
switch(T){case 'msie':case 'firefox':case 'chrome':U=+/\d+/.exec(new RegExp(T+'[ /]\\d+').exec(y)||'')
break
default:U=+/\d+/.exec(/version[ \/]\d+/.exec(y)||'')}
function $e($r){return $r.replace(/^http:/,$a?'https:':'http:')}
function $f(){if(window.innerHeight!==a)return window.innerHeight
if(document.documentElement)return document.documentElement.offsetHeight
if(document.getElementsByTagName['body'].length)return document.getElementsByTagName['body'][0].clientHeight
return 0}
function $g(){if(window.innerWidth!==a)return window.innerWidth
if(document.documentElement)return document.documentElement.offsetWidth
if(document.getElementsByTagName['body'].length)return document.getElementsByTagName['body'][0].clientWidth
return 0}
if(D){var $h=[]
$c.leaksMemory=function($r){p.isFunction($r)
$h.push($r)}
var $i=function(){for(var $r=0;$r<$h.length;$r++)$h[$r]()}
$c.leaksMemory.remove=function($r){for(var $s=$h.length-1;$s>=0;$s--)if($r==$h[$s])$h.splice($s,1)}
window.attachEvent('onunload',$i)}
var $j='Shockwave Flash',$k='ShockwaveFlash.ShockwaveFlash',$l='application/x-shockwave-flash',$m='application/x-java-vm'
function $n(){var $r=x.plugins&&x.plugins[$j],$s
if($r){$s=x.mimeTypes&&x.mimeTypes[$l]
if($s&&!$s.enabledPlugin)return null
return $r.description}
else if(window.ActiveXObject){try {$r=new window.ActiveXObject($k)
$r.AllowScriptAccess='always'
return $r.GetVariable('$version')}catch($t){;}}}
function $o(){var $r=x.mimeTypes
if(A)return Q?!1:('javaEnabled' in x)&&x.javaEnabled()
if($r&&($r=$r[$m])&&($r=$r.enabledPlugin))return $r.name}
function $p(){if(!k(S))return S
var $r=document.createElement('div'),$s=document.createElement('div'),$t=$r.style,$u=$s.style
$t.overflow='auto'
$t.width=$t.height='100px'
$t.position='absolute'
$t.top='-1000px'
$u.width='100%'
$u.height='200px'
$r.appendChild($s)
document.body.appendChild($r)
S=$r.offsetWidth-$r.clientWidth
document.body.removeChild($r)
return S}
var $q={browser:T,version:U,isStrict:W,isQuirks:X,isOpera:E,isSafari:G,isWebKit:H,isChrome:F,isAndroid:P,isIPhone:L,isIPod:M,isIPad:N,isIOS:O,isWP7:Q,isMobile:R,isNewIE:z,isIE:A,isIE6:D,isIE7:C,isIE8:B,isFF:I,isFF2:J,isFF3:K,isBorderBox:V,isCustomEvents:$d,engineIE:Z,bugs:$c,isWindows:$$,isMac:$_,isSecure:$a,secureURL:$e,hasFlash:$n(),hasJava:$o(),language:$b,getScrollbarSize:$p,getWindowClientHeight:$f,getWindowClientWidth:$g}
if((typeof $q==='function')&&$q.prototype&&!$q.__jx__no_fqname){$q.prototype.__jx__fqname_chain=[($q.prototype.__jx__fqname_chain||"")," ","jx_core_Browser"].join('')
$q.prototype.__jx__fqname="jx_core_Browser"}
return $q})(),r=b.Events=(function(){var x={extend:y,body:y(document.body,!0),window:y(window,!0),document:y(document,!0),runAfterScriptReady:B,runAfterFirstChildReady:C,runAfterDomReady:D}
x.extend(x)
function y(J,K){var L={},M={},N=function(X){if(!J.nodeType&&J!=window&&J!=document)return !0
if(J.tagName=='FORM'&&X=='submit')return !1
return !q.isCustomEvents&&(q.isFF&&q.isFF<9?!document.createEvent('event')[X.toUpperCase()]:typeof (J['on'+X])=='undefined')},O=function(X,Y,Z){if(!X&&typeof Y!='function')throw 'bad arguments to on / addEventListener'
if(!(X in L)){L[X]=[]
if(!N(X))P(X)}
L[X].push(Y)
return J},P=function(X){if(X in M)return
M[X]=function(Y){Y&&(Y.stopPropagation||U(Y))
var Z,$$=L[X],$_=$$.length,$a=!0
$$._active=!0
for(Z=0;Z<$_;Z++){try {if(!$$[Z])continue
if($$[Z].call(J,(q.isCustomEvents&&(Y instanceof window.CustomEvent))?Y.detail:Y)===!1)$a=!1}catch($b){x.fire('error',$b)}}
$$._active=!1
if($$._dirty){for(Z=0;Z<$_;Z++){if(!$$[Z]){if(Z==$_-1)$$.pop()
else $$[Z--]=$$.pop()
$_--}}
$$._dirty=!1}
if($a===!1){if(Y){Y.preventDefault()
Y.returnValue=!1}
return !1}}
if(J.attachEvent)J.attachEvent('on'+X,M[X])
else if(J.addEventListener)J.addEventListener(X,M[X],!1)},Q=function(X){var Y=M[X]
if(!Y)return
if(J.attachEvent)J.detachEvent('on'+X,Y)
else if(J.addEventListener)J.removeEventListener(X,Y,!1)
delete M[X]
delete L[X]},R=function(X,Y){var Z=L[X]
if(!Z)return
for(var $$=0,$_=Z.length;$$<$_;$$++)if(Z[$$]===Y){if(Z.length==1){if(M[X])Q(X)
else delete L[X]}
else if(Z._active)Z[$$]=null,Z._dirty=!0
else if($$==$_-1)Z.pop()
else Z[$$]=Z.pop()
break}
return J},S=function(){if(L&&M){for(var X in M)if(M.hasOwnProperty(X))Q(X)
L=M=null}},T=function(X,Y){if(!q.isCustomEvents||N(X)){var Z=L[X],$$=!0
if(Z&&Z.length){Z._active=!0
var $_,$a,$b
for($_=0,$a=Z.length;$_<$a;$_++){try {$b=Z[$_].call(J,Y)
if($b===!1)$$=!1}catch($c){x.fire('error',$c)}}
Z._active=!1
if(Z._dirty){for($_=0;$_<$a;$_++){if(!Z[$_]){if($_==$a-1)Z.pop()
else Z[$_--]=Z.pop()
$a--}}
Z._dirty=!1}}
return $$}
else{return J.dispatchEvent(new window.CustomEvent(X,{bubbles:!1,cancelable:!0,detail:Y}))}},U=function(X){X.preventDefault=U.preventDefault
X.stopPropagation=U.stopPropagation
X.target=X.srcElement}
U.preventDefault=function(){this.returnValue=!1}
U.stopPropagation=function(){this.cancelBubble=!0}
var V={fire:T,on:O,un:R,unextendEvents:S}
if(K)return V
for(var W in V)if(V.hasOwnProperty(W))J[W]=V[W]
if(q.bugs.leaksMemory)q.bugs.leaksMemory(function(){for(var X in V)if(V.hasOwnProperty(X))J[X]=null})
return J}
var z=0,A=[[],[],[],[]]
function B(J){E(0,J)}
function C(J){E(1,J)}
function D(J){E(2,J)}
function E(J,K){if(J<=z)K()
else A[J].push(K)}
function F(J){while(z<J){z++
for(var K=0;K<A[z].length;K++)A[z][K]()
A[z]=null}}
function G(){if(z>0)return
if(document.body&&document.body.firstChild)F(1)
else window.setTimeout(G,200)}
function H(){F(2)}
function I(){var J
if(q.isSafari){J=window.setInterval(function(){if(/loaded|complete/i.test(document.readyState)){window.clearInterval(J)
H()}},20)}
else if(document.addEventListener){if(/loaded|complete/i.test(document.readyState))H()
else document.addEventListener("DOMContentLoaded",H,!1)}
else if(q.isIE){window.attachEvent('onload',H)
var K=document.createElement('document:ready')
J=window.setInterval(function(){if(/loaded|complete/i.test(document.readyState)){K=null
window.clearInterval(J)
H()
return}
try {K.doScroll('left')}catch(L){return}
K=null
window.clearInterval(J)
H()},200)}}
G()
I()
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Events"].join('')
x.prototype.__jx__fqname="jx_core_Events"}
return x})(),s=b.DataIFrame=(function(){function x(y){var z,A,B=r.extend(this)
if(window.ActiveXObject){z=new window.ActiveXObject('htmlfile')
z.open()
z.write('<script>document.win = window</script>')
z.close()
A=z.win}
else{var C=this.iframe=document.createElement('iframe'),D=C.style
B.allowTransparency='true'
B.frameBorder='0'
D.backgroundColor='transparent'
D.position='absolute'
D.width=D.height='1px'
D.left=D.top='-9999px'
D.border=0
document.body.appendChild(C)
try {A=C.contentWindow
z=A.document}catch(E){B.fire('error')
B.destroy()
return}}
B.doc=z
B.win=A
B.$Loader={cleanup:function(){l(function(){if(B.$Loader.payload)B.fire('success',B.$Loader.payload)
else B.fire('error')
B.$Loader.payload=null
if(!y)B.destroy()})}}
B.reusable=y}
x.prototype.setScope=function(y){this.scope=y}
x.prototype.load=function(y){this.doc.open()
this.win.$Loader=this.$Loader
this.win.$Loader.scope=this.scope||{}
this.doc.write('<html><head><script src="'+y+'"></script></head><body onload="try { $Loader.cleanup() } catch(e) {}"></body></html>')
this.doc.close()}
x.prototype.destroy=function(){try {this.iframe&&document.body.removeChild(this.iframe)
this.doc=this.win=this.iframe=this.win.$Loader=null}catch(y){;}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_DataIFrame"].join('')
x.prototype.__jx__fqname="jx_io_DataIFrame"}
return x})(),t=b.ScriptLoader=(function(){function x(y,z,A){var B=this
r.extend(B)
var C=new s()
z=z||{}
C.setScope(z)
C.on('success',A)
C.on('error',function(D){B.onError(D)})
C.load(y)}
x.prototype.onError=function(y){y}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_ScriptLoader"].join('')
x.prototype.__jx__fqname="jx_io_ScriptLoader"}
return x})(),u=b.JCSS=(function(){var x={space:/ /g,repeatingLinearGradient:/^\s*repeating-linear-gradient/,prependFQName:/^(\*\*self|)(?!.+?keyframes)/,prePrependFQName:/^(?!\*\*self)/g,replacePseudo:/\:\:\:([A-Za-z_\-.]+)/g,replaceAppend:/ +?&/g,placeholder:/::placeholder$/,replaceVariables:/(?:(?:([A-Za-z\-]+):)??(?:& *:)?\$\$([A-Za-z_\.]+))(?=;)/g,replaceLeftovers:/(?:(?:[A-Za-z\-]+:)??(?:& *:)?(\$\$[A-Za-z_\.]*?)??)(?=;)/g,replaceMedia:/(.*)(@media.*)@mediaend(.*)/,commaStart:/^,/,selectorCase:/([A-Z]+)/g,removePrefix:/^\$\$/,isVariable:/\$\$[A-Za-z_]+/},y={placeholder:['::-webkit-input-placeholder',':-moz-placeholder','::-moz-placeholder',':-ms-input-placeholder','.placeholder']},z,A=[],B={},C={},D={},E={},F='__jcss__default',G=0,H={},I=[],J,K={}
r.extend(K)
K.setIFrameOnly=function(Z){z=n(Z)}
K.generateAll=function(Z){var $$
for(var $_ in b)if(b.hasOwnProperty($_)){$$=b[$_]
if($$&&$$.prototype&&$$.__jx__jcss&&!$$.__jx__jcss_generated){K.generate(null,$$.prototype.__jx__fqname,$$.__jx__jcss,null,$$)
$$.__jx__jcss_generated=!0}}
Z||K.writeChanges()}
K.generate=function(Z,$$,$_,$a,$b,$c){if(!$_)return
if(!Z&&!$b){return}
$$=$$?'.'+$$.trim().replace(x.space,'.'):''
$_=$_||{}
$a='_'+($a||'')
var $d=[]
$b=$b||Z.__jx__constructor
while($b&&$b.prototype.__jx__super){$b=$b.prototype.__jx__super
if($b.__jx__jcss)$d.unshift(R($b.__jx__jcss,null,$$,!0).join('\n'))}
try {$d.push(R($_,null,$$,!0).join('\n'))}catch($f){;}
var $e=$d.join('')
if(($a in B)&&!$c){B[$a]=[B[$a],$e].join('')
if(!($a in D))D[$a]=''
D[$a]=[D[$a],$e].join('')
E[$a]=!1}
else{B[$a]=$e
D[$a]=$e
E[$a]=!0}
if(!J)J=window.setTimeout(K.writeChanges,0)}
K.setPalette=function(Z,$$,$_){Z=Y(Z)||{}
$$=$$||F
$_=parseInt($_,10)
if(!H[$$]&&isNaN($_)){return}
if(!isNaN($_)&&$_<0){return}
if($$==F&&!isNaN($_)&&$_!=G){return}
if(I[$_]&&I[$_]!=$$){return}
var $a
for(var $b in Z)if(Z.hasOwnProperty($b)){$a=typeof Z[$b]
if($a=='boolean'||$a=='number'||$a=='string')continue
Z[$b]=R(Z[$b],null,null,null,!0).join('')}
H[$$]=Z
if(!isNaN($_)){var $c=f($$,I)
if($c!=-1){I[$c]=a}
I[$_]=$$}}
K.delPalette=function(Z){if(!Z)return
var $$
if(j(Z)){if(!I[Z])return
delete H[I[Z]]
I[Z]=a}
else{if(!H[Z])return
$$=f(Z,I)
delete H[Z]
I[$$]=a}}
K.delPalettes=function(){H={}
I.length=0
L()}
function L(){K.setPalette({},F,G)}
L()
K.appendPalette=function(){}
K.getPalette=function(Z){Z=Z||F
return H[Z]||{}}
K.getVariable=function(Z){for(var $$=I.length-1;$$>=0;$$--){if(I[$$]&&H[I[$$]]&&(H[I[$$]][Z]||j(H[I[$$]][Z]))){if(x.isVariable.test(H[I[$$]][Z])){return K.getVariable(H[I[$$]][Z].toString().slice(2))}
return H[I[$$]][Z]}}}
K.reload=function(){K.writeChanges(!0)}
var M,N
function O(Z,$$,$_){while(M[$_]||j(M[$_])){$_=M[$_].toString().replace(x.removePrefix,'')}
if($$){return S($$,$_)}
return $_||''}
K.writeChanges=function(Z){if(J)window.clearTimeout(J)
J=null
var $$=Z?B:D,$_,$a,$b,$c
M={}
N={}
for($b in H)if(H.hasOwnProperty($b)){$c=f($b,I)
for($a in H[$b])if(H[$b].hasOwnProperty($a)){if((isNaN(N[$a])||$c>N[$a])&&(H[$b][$a]||j(H[$b][$a]))){M[$a]=H[$b][$a]
N[$a]=$c}}}
for($a in $$)if($$.hasOwnProperty($a)){if(!$$[$a])continue
$_=$$[$a].replace(x.replaceVariables,O)
$_=$_.replace(x.replaceLeftovers,'')
if(!z)P(document,'jcss'+$a,$_,Z||E[$a])
for(var $d=0;$d<A.length;$d++)P(A[$d].idoc,'jcss'+$a,$_,Z||E[$a])
C[$a]=$_
Z||($$[$a]='')
E[$a]=!1}
K.fire('write',$_)}
K.bindIFrame=function(Z){for(var $$=0,$_=A.length;$$<$_;$$++)if(Z===A[$$])return
A.push(Z)
for(var $a in B)if(B.hasOwnProperty($a))P(Z.idoc,'jcss'+$a,C[$a])}
K.unbindIFrame=function(Z){for(var $$=0,$_=A.length;$$<$_;$$++)if(Z===A[$$])A.splice($$,1)}
function P(Z,$$,$_,$a){if(!Z)Z=document
var $b=Q(Z,$$)
if(!$b){$b=Z.createElement('style')
Z.getElementsByTagName('head')[0].appendChild($b)
$b.type='text/css'
$$&&$b.setAttribute('__jx__stylesheet_id',$$)
if($b.styleSheet!==a){if(!$b.styleSheet){Z.getElementsByTagName('head')[0].removeChild($b)
$b=null
return}
$b.styleSheet.cssText=$_}
else{$b[typeof document.body.textContent!='undefined'?'textContent':'innerText']=$_}}
else{if($a){if($b.styleSheet){$b.styleSheet.cssText=$_}
else{$b[typeof document.body.textContent!='undefined'?'textContent':'innerText']=$_}}
else{if($b.styleSheet){$b.styleSheet.cssText=[$b.styleSheet.cssText,$_].join('')}
else{var $c=document.createTextNode($_)
$b.appendChild($c)}}}}
function Q(Z,$$){if(!$$)return
if(!Z)Z=document
for(var $_=0,$a=Z.styleSheets.length;$_<$a;$_++){if(((Z.styleSheets[$_].ownerNode&&Z.styleSheets[$_].ownerNode.getAttribute('__jx__stylesheet_id'))||(Z.styleSheets[$_].owningElement&&Z.styleSheets[$_].owningElement.getAttribute('__jx__stylesheet_id')))==$$){return ((Z.styleSheets[$_].ownerNode&&Z.styleSheets[$_].ownerNode)||(Z.styleSheets[$_].owningElement&&Z.styleSheets[$_].owningElement))}}}
K.transform2CSS=R
function R(Z,$$,$_,$a,$b){var $c=[],$d=[],$e,$f,$g,$h,$i,$j
for($e in Z)if(Z.hasOwnProperty($e)){$f=Z[$e]
$g=a
if($e=='@keyframes'){$j=[]
for(var $k in $f)if($f.hasOwnProperty($k)){$j=R($f[$k])
$d.push(X(['@-webkit-keyframes ',$k,' { ',$j.join(' '),' } ']))
$d.push(X(['@-moz-keyframes ',$k,' { ',$j.join(' '),' } ']))
$d.push(X(['@-ms-keyframes ',$k,' { ',$j.join(' '),' } ']))
$d.push(X(['@-o-keyframes ',$k,' { ',$j.join(' '),' } ']))
$d.push(X(['@keyframes ',$k,' { ',$j.join(' '),' } ']))}
continue}
if($e.slice(0,6)=='@media'){$e=[$e,'@mediaend'].join('')}
switch(typeof $f){case 'boolean':case 'number':case 'string':$g=$e.split(',')
for($h=0,$i=$g.length;$h<$i;$h++)$c.push(S($g[$h],$f))
break
default:if(g($f)){for($h=0,$i=$f.length;$h<$i;$h++)$c.push(S($e,$f[$h]))
break}
if(x.placeholder.test($e)){$j=$e.replace(x.placeholder,'')
$g=[]
for($h=0,$i=y.placeholder.length;$h<$i;$h++)$g.push(X([$j,y.placeholder[$h]]))}
if(!g($g))$g=$e.split(',')
for($h=0,$i=$g.length;$h<$i;$h++)$d=$d.concat(R($f,$g[$h].trim()))
break}}
if($c.length){if(!$b){$c.unshift('{')
$c.push('}')}
$d.push($c.join(''))}
if($$||$_||($a&&!(q.isIE<9))){for($h=0,$i=$d.length;$h<$i;$h++){$$&&($d[$h]=[$$.replace(x.replacePseudo,'\.$1'),' ',$d[$h]].join(''))
$_&&($d[$h]=$d[$h].replace(x.prePrependFQName,' ').replace(x.prependFQName,$_))
$a&&($d[$h]=$d[$h].replace(x.replaceAppend,''))
$a&&($d[$h]=$d[$h].replace(x.replaceMedia,"$2 { $1 $3 }"))}}
return $d}
K.toStyle=S
function S(Z,$$){function $_($g){$b.push(X([$g,($c?' !important;':';')]))}
function $a($g){$b.push($g?Z:Z.replace(x.selectorCase,"-$1").replace(x.commaStart,"").toLowerCase())
$_(X([':',$$]))}
var $b=[],$c,$d=$$&&$$.split&&$$.split(' ')
if(x.isVariable.test($$)){$a(!0)
return $b.join('')}
if($d&&$d.length&&$d[$d.length-1]=='!important'){$c=!0
$d.pop()
$$=$d.join(' ')}
switch(Z){case 'background':$b.push(X([Z,':']))
switch($d[0]){case 'linear-gradient':$d.splice(0,1)
$$=$d.join(' ')
$_(X(['-webkit-linear-gradient',$$]))
$_(X(['background:-o-linear-gradient',$$]))
$_(X(['background:-moz-linear-gradient',$$]))
$_(X(['background:-ms-linear-gradient',$$]))
$_(X(['background:-linear-gradient',$$]))
break
case 'gradient':var $e,$f
$_(W($d[2],$d[3]));($d[1]=='top')&&($e='bottom');($d[1]=='left')&&($e='right');($d[1]=='right')&&($e='left');($d[1]=='bottom')&&($e='top')
$f=X([$d[1],',',$d[2],',',$d[3],')'])
$_(X(['background:-o-linear-gradient(',$f]))
$_(X(['background:-moz-linear-gradient(',$f]))
$_(X(['background:-ms-linear-gradient(',$f]))
$_(X(['background:linear-gradient(',$f]))
if($d[1]=='left'||$d[1]=='right'){$_(X(['background:-webkit-gradient(linear,',$d[1],' center,',$e,' center,from(',$d[2],'),to(',$d[3],'))']))
$_(X(['filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',T($d[2]),', endColorstr=',T($d[3]),', GradientType=1)']))
$_(X(['-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',T($d[2]),', endColorstr=',T($d[3]),', GradientType=1)']))}
else{$_(X(['background:-webkit-gradient(linear,center ',$d[1],',center ',$e,',from(',$d[2],'),to(',$d[3],'))']))
$_(X(['filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',T($d[2]),', endColorstr=',T($d[3]),')']))
$_(X(['-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',T($d[2]),', endColorstr=',T($d[3]),')']))}
break
default:if($$.slice(0,4)=='rgba'){$_(U($$,!0))
if(q.bugs.noBoxSizing){break}
$b.push(X([Z,':']))}
$_($$)
break}
break
case 'radius':case 'borderRadius':switch($d.length){case 1:$d[1]=$d[0]
case 2:$d[2]=$d[0]
case 3:$d[3]=$d[1]
default:$_(X(['-moz-border-radius-topleft:',$d[0]]))
$_(X(['-moz-border-radius-topright:',$d[1]]))
$_(X(['-moz-border-radius-bottomleft:',$d[2]]))
$_(X(['-moz-border-radius-bottomright:',$d[3]]))
$_(X(['border-top-left-radius:',$d[0]]))
$_(X(['border-top-right-radius:',$d[1]]))
$_(X(['border-bottom-left-radius:',$d[2]]))
$_(X(['border-bottom-right-radius:',$d[3]]))
$_(X(['-webkit-border-top-left-radius:',$d[0]]))
$_(X(['-webkit-border-top-right-radius:',$d[1]]))
$_(X(['-webkit-border-bottom-left-radius:',$d[2]]))
$_(X(['-webkit-border-bottom-right-radius:',$d[3]]))
break}
break
case 'boxShadow':$_(X(['-moz-box-shadow:',$$]))
$_(X(['-webkit-box-shadow:',$$]))
$_(X(['box-shadow:',$$]))
break
case 'userSelect':$_(X(['-moz-user-select:',$$]))
$_(X(['-webkit-user-select:',$$]))
$_(X(['-o-user-select:',$$]))
$_(X(['user-select:',$$]))
break
case 'appearance':$_(X(['-webkit-appearance:',$$]))
$_(X(['-moz-appearance:',$$]))
$_(X(['appearance:',$$]))
break
case 'animation':$_(X(['-webkit-animation:',$$]))
$_(X(['-moz-animation:',$$]))
$_(X(['-ms-animation:',$$]))
$_(X(['-o-animation:',$$]))
$_(X(['animation:',$$]))
break
case 'transform':$_(X(['-webkit-transform:',$$]))
$_(X(['-moz-transform:',$$]))
$_(X(['-ms-transform:',$$]))
$_(X(['-o-transform:',$$]))
$_(X(['transform:',$$]))
break
case 'transformOrigin':$_(X(['-webkit-transform-origin:',$$]))
$_(X(['-moz-transform-origin:',$$]))
$_(X(['-ms-transform-origin:',$$]))
$_(X(['-o-transform-origin:',$$]))
$_(X(['transform-origin:',$$]))
break
case 'transition':$_(X(['-webkit-transition:',$$]))
$_(X(['-moz-transition:',$$]))
$_(X(['-o-transition:',$$]))
$_(X(['transition:',$$]))
break
case 'rotate':$_(X(['-webkit-transform:rotate(',$$,'deg)']))
$_(X(['-moz-transform:rotate(',$$,'deg)']))
$_(X(['-ms-transform:rotate(',$$,'deg)']))
$_(X(['-o-transform:rotate(',$$,'deg)']))
break
case 'opacity':$_(X(['opacity:',$$]))
$_(X(['-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=',$$*100,')"']))
$_(X(['filter:alpha(opacity=',$$*100,')']))
$_(X(['-moz-opacity:',$$]))
$_(X(['-webkit-opacity:',$$]))
$_(X(['-o-opacity:',$$]))
break
case 'textOverflow':$_(X(['text-overflow:',$$]))
$_(X(['-o-text-overflow:',$$]))
$_(X(['-ms-text-overflow:',$$]))
break
case 'display':if(q.bugs.noBoxSizing&&$$=='inline-block'){$_('display:inline')
$_('zoom:1')}
else $_(X(['display:',$$]))
break
case 'backgroundImage':if(x.repeatingLinearGradient.test($$)){$b.push('background-image:')
$$=$$.replace(x.repeatingLinearGradient,'');(q.isChrome||q.isIOS||q.isSafari)?$_(X(['-webkit-repeating-linear-gradient',$$])):q.isFF?$_(X(['-moz-repeating-linear-gradient',$$])):q.isOpera?$_(X(['-o-repeating-linear-gradient',$$])):q.isIE?$_(X(['-ms-repeating-linear-gradient',$$])):$_(X(['repeating-linear-gradient',$$]))
break}
default:$a()
break}
return $b.join('')}
function T(Z){if(typeof Z!='string')return ''
var $$
$$=Z.charAt(0)=='#'?Z.substring(1):Z
if($$.slice(0,3)=='rgb')return U($$)
if($$.length==3)$$=$$.charAt(0)+$$.charAt(0)+$$.charAt(1)+$$.charAt(1)+$$.charAt(2)+$$.charAt(2)
return '#'+$$}
function U(Z,$$){Z=Z.slice(5,-1)
Z=Z.split(',')
if(Z.length==3||$$)return '#'+V(Z[0])+V(Z[1])+V(Z[2])
Z[3]=(parseFloat(Z[3],10)*255).toFixed()
return '#'+V(Z[3])+V(Z[0])+V(Z[1])+V(Z[2])}
function V(Z){Z=parseInt(Z,10).toString(16)
if(Z.length==1)Z='0'+Z
return Z}
function W(Z,$$){(Z.slice(0,3)=='rgb')&&(Z=U(Z,!0));($$.slice(0,3)=='rgb')&&($$=U($$,!0))
Z=T(Z).substring(1)
$$=T($$).substring(1)
var $_=$c(0),$a=$c(2),$b=$c(4)
return ('#'+$_+$a+$b)
function $c($d){return (Math.round((parseInt(Z.substring($d,$d+2),16)+parseInt($$.substring($d,$d+2),16))/32)*16).toString(16)}}
function X(Z){return Z.join('')}
function Y(Z,$$,$_){if(!Z)return
if(!$$)$$={}
if($_)$_+='.'
else $_=''
for(var $a in Z)if(Z.hasOwnProperty($a)){if(typeof Z[$a]=='object'){Y(Z[$a],$$,$_+$a)}
else{$$[$_+$a]=Z[$a]}}
return $$}
if((typeof K==='function')&&K.prototype&&!K.__jx__no_fqname){K.prototype.__jx__fqname_chain=[(K.prototype.__jx__fqname_chain||"")," ","jx_core_JCSS"].join('')
K.prototype.__jx__fqname="jx_core_JCSS"}
return K})(),v=b._=(function(){var x=[],y='_',z=[],A=[]
function B(Q,R){if(isNaN(Q)){return Q}
if(Q==-1)Q=x.length
var S=x[Q]
if(!S)x[Q]=S=new C()
if(typeof (R)=='string')S.add('_',R)
else for(var T in R)if(R.hasOwnProperty(T))S.add(T,R[T])
return S}
function C(){var Q={},R=[],S={add:V,bind:W,onTranslate:X,toJSON:Y,toString:Z,update:$$},T=['concat','replace','toLowerCase','toUpperCase']
for(var U=0;U<T.length;U++)S[T[U]]=$a(T[U])
return S
function V($b,$c){Q[$b]=$c}
function W($b){D($b,S)}
function X($b){R.push($b)}
function Y(){return Z()}
function Z($b){return Q[$b||y]||Q._}
function $$($b){var $c=Z($b),$d
for($d=0;$d<R.length;$d++)R[$d]($c)}
function $_($b,$c){var $d=new C(),$e
x[Q._]=$d
for(var $f in Q)if(Q.hasOwnProperty($f)){$e=Q[$f]
if(typeof ($e)!='string')continue
$e=$e[$b].apply($e,$c)
$d.add($f,$e)}
return $d}
function $a($b){return function(){return $_($b,arguments)}}}
function D(Q,R){for(var S=0;S<z.length;S++)if(z[S]==Q){A[S]=R
return}
z.push(Q)
A.push(R)}
function E(Q){for(var R=0;R<z.length;R++)if(z[R]==Q){z.splice(R,1)
A.splice(R,1)
return}}
var F=[]
function G(Q){Q=Q.split(/-|_/).slice(0,2)
var R=Q[0]=Q[0].toLowerCase()
if(Q[1])Q[1]=Q[1].toUpperCase()
Q=Q.join('_')
if(Q in c.languages)return Q
if(R in c.languages)return R
return null}
function H(Q){var R,S,T,U,V,W
Q=G(Q)
if(!Q)return
V=c.languages[Q]
if(!V)return
W=b[c.languages[Q]]
if(!W)return
B.language=y=Q
d.ensureLoaded(W,function(X){if(X)I(Q)
if(Q!=y)return
for(R=0,S=x.length;R<S;R++)if(x[R].update instanceof Function)x[R].update(Q)
for(R=0,S=z.length;R<S;R++){T=z[R]
U=A[R].toString()
if(typeof (T.textContent)=='string')T.textContent=U
else{if(typeof (T.innerText)=='string')T.innerText=U
else if(typeof (T.nodeValue)=='string')try {T.data=U}catch(Y){;}}}
F._active=!0
S=F.length
try {for(R=0;R<S;R++)F[R]&&F[R](Q)}catch(Y){;}
F._active=!1
if(F._dirty){for(R=0;R<S;R++){if(!F[R]){if(R==S-1)F.pop()
else F[R--]=F.pop()
S--}}
F._dirty=!1}})}
function I(Q){var R=b[c.languages[Q]],S
for(S=0;S<R.length;S++)if(R[S]!==0)x[S].add(Q,R[S])}
function J(Q){F.push(Q)}
function K(Q){for(var R=0,S=F.length;R<S;R++){if(F[R]==Q){if(F._active)F[R]=null,F._dirty=!0
else if(R==S-1)F.pop()
else F[R]=F.pop()
break}}}
var L=/^ar|^fa|^he/
function M(){return !(y.search(L)==-1)}
function N(Q){if(!M())return Q
return Q.replace(/left/,'%left%').replace(/right/,'left').replace(/%left%/,'right').replace(/ltr/,'%ltr%').replace(/rtl/,'ltr').replace(/%ltr%/,'rtl')}
var O=c.strings
for(var P=0;P<O.length;P++)B(P,O[P])
B.bind=D
B.flip=N
B.onLanguage=J
B.unLanguage=K
B.update=H
B.unbind=E
B.rtl=M
B.findClosestLanguage=G
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_core__"].join('')
B.prototype.__jx__fqname="jx_core__"}
return B})(),w=b.Element=(function(){var x={create:N,extend:T,appendChild:P,addChildren:Q,hasParentNode:O,id:D,get:I,set:G,unset:H,mangleIDs:J,generateID:D,nativeGenerator:K,getStyles:R,processDeferredStyles:B}
function y($$,$_,$a){try {$$.style[Z($_)]=$a}catch($b){if(console)console.log('Failed to set style.'+$_+' to "'+$a+'": '+$b.description)}}
var z=y
function A(){}
function B(){}
var C=1
function D(){return '___$_'+C++}
var E='__JX__ID',F={}
function G($$,$_){var $a=$_.getAttribute(E)
$a=$a?$a.split(' '):[]
$$||($$=D())
F[$$]=$_
$a.push($$)
$_.setAttribute(E,$a.join(' '))}
function H($$){var $_=$$.getAttribute(E)
if(!$_)return
$_=$_.split(' ')
for(var $a=0;$a<$_.length;$a++)delete F[$_[$a]]}
function I($$){return F[$$]}
if(q.bugs.leaksMemory)q.bugs.leaksMemory(function(){for(var $$=0,$_=F.length,$a;$$<$_;$$++){$a=F[$$]
$a.plugLeakage&&$a.plugLeakage()}})
function J($$,$_){var $a
for(var $b=0;$b<$_.length;$b++){$a=$_[$b]
if(typeof ($a)!='string'){if($a[1])$a[1]=$$+'__'+$a[1]
if($a[3])J($$,$a[3])}}
return $_}
function K($$){var $_=function($a,$b,$c,$d,$e){$b=$b||D()
var $f=$a.ownerDocument,$g=x.create($f,$$,$b)
$g.__jx__constructor=$_
$g.__jx__native=!0
var $h=!1
$g.appendToParent=function($i){if(!x.hasParentNode($g))x.appendChild($a,$g)
if($i&&!$h){if($a.appendToParent)$a.appendToParent(!0)
$h=!0}}
$g.setStyle($c)
$g.setAttributes($e)
x.addChildren($g,$d)
$g.appendToParent()
return $g}
return $_}
function L($$){while($$.defaultPlacement)$$=$$.defaultPlacement
return $$}
function M($$){if($$.createElement)return $$
return L($$).ownerDocument}
function N($$,$_,$a,$b){var $c=M($$).createElement($_)
if(q.isSafari&&$_.toLowerCase()=='textarea'){$c.style.resize='none'}
switch($_.toLowerCase()){case 'textarea':case 'input':$c.style.outlineStyle='none'}
A($c)
G($a,$c)
T($c)
r.extend($c)
$c.setStyle($b)
if(q.buggyCSS)$c.setOverflow('auto')
return $c}
function O($$){return ($$.parentNode&&$$.parentNode.nodeType&&$$.parentNode.nodeType!=11)}
function P($$,$_){if($$==document.body&&($_.style.position=='absolute'||$_.style.position=='fixed')){$$.insertBefore($_,$$.firstChild)
$_.applyConstraints()
return}
var $a=$$
while($a.defaultPlacement)$a=$a.defaultPlacement
$a.appendChild($_)
$_.applyConstraints()}
function Q($$,$_){if(!$_||!$_.length)return
$$=L($$)
var $a,$b,$c=$$.ownerDocument,$d
for(var $e=0;$e<$_.length;$e++){$b=$_[$e]
if(g($b))$a=$b[0]($$,$b[1],$b[2],$b[3],$b[4])
else{$d=$c.createTextNode($b)
$$.appendChild($d)
if(typeof $b.bind=='function')$b.bind($d)}}
return $a}
function R($$){var $_=$$.ownerDocument
if($_.defaultView&&$_.defaultView.getComputedStyle)return $_.defaultView.getComputedStyle($$,null)||{}
if($$.currentStyle)return $$.currentStyle
return {}}
function S($$,$_){return R($$)[$_]}
function T($$,$_){var $a=$$.style,$b=$$.ownerDocument,$c=$b.compatMode=='BackCompat',$d=!!($b.documentElement&&$b.documentElement.style.setExpression),$e=q.isIE6||(q.isIE&&$c&&$d)
function $f($2){var $3
for(var $4 in $2)if($2.hasOwnProperty($4)){$3='set'+$4.substr(0,1).toUpperCase()+$4.substr(1)
if(typeof $$[$3]=='function')$$[$3]($2[$4])}}
function $g(){return $$.innerText||$$.textContent||''}
function $h($2){v&&v.unbind&&v.unbind($$)
if($2&&typeof $2.bind=='function')$2.bind($$)
if(typeof document.body.textContent!='undefined')$$.textContent=$2
else $$.innerText=$2}
function $i($2){var $3,$4
if(arguments.length==1&&i($2)){if(!$2)return
$2=$2.split(';')
for($3=0;$3<$2.length;$3++){if($2[$3].match(/^\s*$/))continue
$4=$2[$3].match(/\s*([^:]+):\s*(.*?)\s*$/)
if(!$4&&$2[$3].length){if(console)console.log('Bad style: "'+$2[$3]+'"')
continue}
$6($4[1],$4[2])}}
else if(arguments.length==1&&typeof ($2)=='object'){for(var $5 in $2)if($2.hasOwnProperty($5))$6($5,$2[$5])}
else if(arguments.length>1){for($3=0;$3<arguments.length;$3+=2)$6(arguments[$3],arguments[$3+1])}
function $6($7,$8){var $9=Z('set-'+$7)
if(typeof $$[$9]=='function')$$[$9]($8)
else z($$,$7,$8)}}
function $j($2){function $3(){var $4=(v&&v.flip)?v.flip($2):$2
if(q.isIE)$a.styleFloat=$4
else $a.cssFloat=$4}
;
v&&v.onLanguage&&v.onLanguage($3)
$3()
return $$}
var $k,$l,$m,$n,$o,$p,$q,$r,$s
$k=$l=$m=$n=$o=$p=NaN
$q=null
function $t($2){$k=$z($2)
$B()
return $$}
function $u($2){$m=$z($2)
$B()
return $$}
function $v($2){$l=$z($2)
$B()
return $$}
function $w($2){$n=$z($2)
$B()
return $$}
function $x($2){$o=$z($2)
$B()
return $$}
function $y($2){$p=$z($2)
$B()
return $$}
function $z($2){return (i($2)&&$2.substr($2.length-1)=='%')?parseInt($2,10)+'%':parseInt($2,10)}
function $A($2){switch($2){case 'static':case 'relative':case 'absolute':case 'fixed':$q=$2}
if($q!==null)z($$,'position',($e&&$q=='fixed')?'absolute':$q)
return $$}
function $B(){if(!isNaN($k)&&!isNaN($p))$l=NaN
if(!isNaN($m)&&!isNaN($o))$n=NaN
if($o<0)$o=0
if($p<0)$p=0
$C()}
function $C(){if(!x.hasParentNode($$))return
if(q.bugs.ie.cssFixed&&$q=='fixed'){l($D,$$,!0)
return}
if(q.bugs.ie.cssBottomRight&&((!isNaN($m)&&!isNaN($n))||(!isNaN($k)&&!isNaN($l)))){$F()
return}
$G()}
function $D(){$E()
if($$.appendToParent)$$.appendToParent(!0)
if($l<0)$l=0
if($n<0)$n=0
p.ok(isNaN($m)!=isNaN($n),'One and only one of left/right must be set')
p.ok(isNaN($k)!=isNaN($l),'One and only one of top/bottom must be set')
p.ok(!isNaN($o),'Width must be set')
p.ok(!isNaN($p),'Height must be set')
p.ok($$.ownerDocument==document,'Fixed element must be top level element')
if($p!=$s){$a.height=$p+'px'
$s=$p}
if($o!=$r){$a.width=$o+'px'
$r=$o}
var $2,$3,$4,$5
if(q.isQuirks){$5='document.body.clientHeight'
$4='document.body.clientWidth'
$2='(dummye34cf6=document.body.scrollLeft)+'
$3='(dummye34cf6=document.body.scrollTop )+'}
else{$5='document.documentElement.clientHeight'
$4='document.documentElement.clientWidth'
$2='(dummye34cf6=document.documentElement.scrollLeft)+'
$3='(dummye34cf6=document.documentElement.scrollTop )+'}
if(!isNaN($m))$2+=$m
else if(i($m))$2+=parseInt($m,10)/100*(q.isQuirks?document.body:document.documentElement).clientWidth
else $2+=$4+'-'+($o+$n)
if(!isNaN($k))$3+=$k
else if(i($k))$3+=parseInt($k,10)/100*(q.isQuirks?document.body:document.documentElement).clientHeight
else $3+=$5+'-'+($p+$l)
if(q.isIE6&&document.body.currentStyle.direction=='rtl'){if(q.isQuirks)$2+='-(document.body.scrollWidth-document.body.clientWidth)'
else $2+='-(document.documentElement.scrollWidth-document.documentElement.clientWidth)'}
$a.setExpression('left',$2+'+"px"')
$a.setExpression('top',$3+'+"px"')}
function $E(){if($E.alreadyHacked)return
$E.alreadyHacked=1
if(q.isStrict)document.body.parentNode.style.background='#fff url(https://) fixed'
else{if(document.body.currentStyle.backgroundAttachment!='fixed'){if(document.body.currentStyle.backgroundImage!='none'){var $2=document.createElement('div'),$3=$2.style,$4=document.body.currentStyle
$3.backgroundAttachment=$4.backgroundAttachment
$3.backgroundColor=$4.backgroundColor
$3.backgroundImage=$4.backgroundImage
$3.backgroundPositionX=$4.backgroundPositionX
$3.backgroundPositionY=$4.backgroundPositionY
$3.backgroundRepeat=$4.backgroundRepeat
$3.position='absolute'
$3.zIndex=-1
$3.top=$3.left=0
$3.width='100%'
document.body.insertBefore($2,document.body.firstChild)
var $5=!1,$6=0,$7,$8,$9=function(){if(!$5&&$6){$7+=document.body.clientWidth-$6
$3.width=$7+'px'
$6=document.body.clientWidth}
if($8)return
$8=setTimeout(function(){$3.width=0
document.body.className=document.body.className
$7=Math.max(document.body.scrollWidth,document.body.clientWidth)
$3.width=$7+'px'
$6=document.body.clientWidth
$5=document.body.scrollWidth>document.body.clientWidth
$8=null},0)}
setTimeout($9,0)
$3.setExpression('height','document.body.scrollHeight+"px"')
$9()}
document.body.style.backgroundImage='url(https://)'
document.body.style.backgroundAttachment='fixed'}}}
function $F(){if($$.appendToParent)$$.appendToParent(!0)
$E()
var $2=isNaN($m)?'':$m,$3=isNaN($n)?'':$n,$4=isNaN($o)?'':$o,$5,$6=isNaN($k)?'':$k,$7=isNaN($l)?'':$l,$8=isNaN($p)?'':$p,$9,_$=$$.ownerDocument.compatMode=='BackCompat'
if($q=='fixed'&&$$.ownerDocument==document){if(_$){$9='document.body.clientHeight'
$5='document.body.clientWidth'}
else{$9='document.documentElement.clientHeight'
$5='document.documentElement.clientWidth'}}
else{$9='this.offsetParent.clientHeight'
$5='this.offsetParent.clientWidth'}
if(q.isIE6){if(!isNaN($m)&&!isNaN($n)){$3=''
$4=[$5,$m,$n].join('-')}
if(!isNaN($k)&&!isNaN($l)){$7=''
$8=[$9,$k,$l].join(' - ')}}
if($q=='fixed'&&$$.ownerDocument==document){if(_$){if(!isNaN($m)||isNaN($n))$2+='+(dummye34cf6=document.body.scrollLeft)'
else{$2+='+(dummye34cf6=document.body.scrollLeft)+document.body.clientWidth-this.offsetWidth-'+$n
$3=''}
if(!isNaN($k)||isNaN($l))$6+='+(dummye34cf6=document.body.scrollTop)'
else{$6+='+(dummye34cf6=document.body.scrollTop)+document.body.clientHeight-this.offsetHeight-'+$l
$7=''}}
else{if(!isNaN($m)||isNaN($n))$2+='+(dummye34cf6=document.documentElement.scrollLeft)'
else if(q.isIE6){$2+='+(dummye34cf6=document.documentElement.scrollLeft)+document.documentElement.clientWidth-this.offsetWidth-'+$n
$3=''}
else $3+='+document.documentElement.scrollWidth-(dummye34cf6=document.documentElement.scrollLeft)-document.documentElement.clientWidth'
if(!isNaN($k)||isNaN($l))$6+='+(dummye34cf6=document.documentElement.scrollTop)'
else if(q.isIE6){$6+='+(dummye34cf6=document.documentElement.scrollTop)+document.documentElement.clientHeight-this.offsetHeight-'+$l
$7=''}
else $7+='+document.documentElement.scrollHeight - (dummye34cf6=document.documentElement.scrollTop) - document.documentElement.clientHeight'}}
var __,_a
if(0&&$$.parentNode==document.body)window.attachEvent('onscroll',function(){if(!__){_c('left',$2)
_c('right',$3)
_c('width',$4)
_c('top',$6)
_c('bottom',$7)
_c('height',$8)
__=setInterval(function(){_a--
if(!_a)_b()},200)}
_a=5})
function _b(){$a.removeExpression('left')
$a.removeExpression('right')
$a.removeExpression('width')
$a.removeExpression('top')
$a.removeExpression('bottom')
$a.removeExpression('height')
clearInterval(__)
__=!1}
_c('left',$2)
_c('right',$3)
_c('width',$4)
_c('top',$6)
_c('bottom',$7)
_c('height',$8)
function _c(_d,_e){$a[_d]=''
$a.removeExpression(_d)
if(typeof (_e)=='number')$a[_d]=_e+'px'
else if(i(_e)&&_e.substr(_e.length-1)=='%')$a[_d]=_e
else if(i(_e)&&_e.length)$a.setExpression(_d,_e)}}
function $G(){$I()
$H()}
function $H(){$a.top=i($k)?$k:isNaN($k)?'':$k+'px'
$a.bottom=i($l)?$l:isNaN($l)?'':$l+'px'
if($p!=$s){$a.height=i($p)?$p:isNaN($p)?'':$p+'px'
$s=$p}}
function $I(){$a.left=i($m)?$m:isNaN($m)?'':$m+'px'
$a.right=i($n)?$n:isNaN($n)?'':$n+'px'
if($o!=$r){$a.width=i($o)?$o:isNaN($o)?'':$o+'px'
$r=$o}}
var $J='',$K=0,$L=0
$$.dock=function($2,$3,$4){$J=$2
if(j($3))$K=$3
if(j($4))$L=$4
$M()
$$.on('jx:resize',$M)}
function $M(){var $2=isNaN($o)?$$.offsetWidth:$o,$3=isNaN($p)?$$.offsetHeight:$p,$4,$5,$6,$7,$8,$9
$4=$5=$6=$7=NaN
$8=$9=0
switch($J.charAt(0)){case 't':$4=0
break
case 'm':$4='50%'
break
case 'b':$5=0
break}
switch($J.charAt(1)){case 'l':$6=0
break
case 'c':$6='50%'
break
case 'r':$7=0
break}
if($4=='50%')$8=-($3/2)
if($6=='50%')$9=-($2/2)
var _$=0
if($L>=0||!isNaN($4)||typeof ($4)=="string"){$8+=$L}
else{_$=-$L}
$9+=$K
$$.setMargin([$8+'px',0,_$+'px',$9+'px'].join(' ')).setTop($4).setBottom($5).setLeft($6).setRight($7)}
var $N,$O=[0,0,0,0]
function $P($2){if(!g($2)){$2=$2.split(' ')
$2[0]=parseInt($2[0],10)
$2[1]=parseInt($2[1],10)
$2[2]=parseInt($2[2],10)
$2[3]=parseInt($2[3],10)}
if($e){$2[1]=Math.max(0,$2[1])
$2[2]=Math.max(0,$2[2])}
$N=$2
return $$}
function $Q($2){if(!g($2)){$2=$2.split(' ')
$2[0]=parseInt($2[0],10)
$2[1]=parseInt($2[1],10)
$2[2]=parseInt($2[2],10)
$2[3]=parseInt($2[3],10)}
$O=[Math.max(0,$2[0]),Math.max(0,$2[1]),Math.max(0,$2[2]),Math.max(0,$2[3])]
return $$}
function $R(){if(!$N)return
if($m<$N[3]+$O[3])$m=$N[3]
if($n<$N[1]+$O[1])$n=$N[1]
if($k<$N[0]+$O[0])$k=$N[0]
if($l<$N[2]+$O[2])$l=$N[2]
var $2=q.isQuirks?document.body:document.documentElement,$3=isNaN($o)?$$.offsetWidth:$o,$4=$2.clientWidth-$3,$5=$2.clientHeight-$$.offsetHeight
if($4-$m<=$N[1]+$O[1])$m=$4-$N[1]
if($4-$n<=$N[3]+$O[3])$n=$4-$N[3]
if($5-$k<=$N[2]+$O[2])$k=$5-$N[2]
if($5-$l<=$N[0]+$O[0])$l=$5-$N[0]}
function $S($2,$3){$l=$n=NaN
$k=$3
$m=$2
$R()
$C()
return $$}
function $T($2,$3){if(isNaN($m)&&isNaN($n))$m=0
if(isNaN($k)&&isNaN($l))$k=0
if(!isNaN($m))$m+=$2
if(!isNaN($n))$n-=$2
if(!isNaN($k))$k+=$3
if(!isNaN($l))$l-=$3
$R()
$C()}
function $U($2,$3,$4,$5){if($2){if(isNaN($o))$o=$$.offsetWidth
$o=Math.max($4||0,$o+$2)}
if($3){if(isNaN($p))$p=$$.offsetHeight
$p=Math.max($5||0,$p+$3)}
$R()
$C()
$$.fire('jx:resize')
return $$}
var $V=!1
function $W($2){if($2=='none'||$2=='block')$V=!0
if($2=='none'||$2=='hidden'||$2=='false'||!$2)$X()
else $Z()
return $$}
function $X(){if($V){if($a.display!='none'){$a.display='none'
$$.fire('hide')}}
else{if($a.visibility!='hidden'){$a.visibility='hidden'
$$.fire('hide')}}
return $$}
function $Y(){if($V)return $$.getStyle('display')!='none'
else return $$.getStyle('visibility')=='visible'}
function $Z(){if($V){if($a.display!='block'){$a.display='block'
$$.fire('show')}}
else{if($a.visibility!='visible'){$a.visibility='visible'
$$.fire('show')}}
return $$}
$$.getStyles=function(){return R($$)}
$$.getStyle=function($2){return S($$,$2)}
$$.setAttributes=$f
$$.getText=$g
$$.setText=$h
$$.setStyle=$i
$$.setFloat=$j
$$.setPosition=$A
$$.setTop=$t
$$.setBottom=$v
$$.setLeft=$u
$$.setRight=$w
$$.setHeight=$y
$$.setWidth=$x
$$.applyConstraints=$C
$$.setVisible=$W
$$.setBounds=$P
$$.setSnaps=$Q
$$.move=$T
$$.moveTo=$S
$$.resizeBy=$U
$$.hide=$X
$$.show=$Z
$$.isVisible=$Y
for(var $0 in U)if(U.hasOwnProperty($0))$$[$0]=U[$0]
if($_){var $1=$$.firstChild
while($1){T($1,!0)
$1=$1.nextSibling}}
return $$}
var U=x.proto={$:function($$){return I(this.id+'__'+$$)},destroy:function(){if(this._destructors){for(var $$=this._destructors,$_=$$.length,$a=0;$a<$_;$a++)$$[$a].call(this)}
this.parentNode&&this.parentNode.removeChild(this)
this._autobinds&&this.autounbind()
typeof this.empty=='function'&&this.empty()
typeof this.unextendEvents=='function'&&this.unextendEvents()
H(this)
if(q.bugs.leaksMemory)typeof this.plugLeakage=='function'&&this.plugLeakage()},empty:function(){var $$
while(($$=this.firstChild)){if(typeof $$.destroy=='function')$$.destroy()
else if($$.jx_wrapper)$$.jx_wrapper.destroy()
else if($$.nodeType==1)U.destroy.call($$)
else this.removeChild($$)}},onDestruction:function($$){(this._destructors||(this._destructors=[])).push($$)},autobind:function($$,$_,$a){$$.on($_,$a)
this._autobinds||(this._autobinds=[])
this._autobinds.push([$$,$_,$a])},autounbind:function($$,$_,$a){var $b=this._autobinds,$c,$d
if($$&&$_&&$a){for($c=$b.length-1;$c>=0;$c--){$d=$b[$c]
if($d[0]==$$&&$d[1]==$_&&$d[2]==$a){$b.splice($c,1)
$d[0].un($d[1],$d[2])
return}}
return}
if(!$$&&!$_&&!$a){if(!$b)return
for($c=$b.length-1;$c>=0;$c--){$d=$b[$c]
$d[0].un($d[1],$d[2])}
return}},getXY:function(){var $$,$_,$a=this.offsetParent
$$=this.offsetLeft
$_=this.offsetTop
while($a){$$+=$a.offsetLeft
$_+=$a.offsetTop
$a=$a.offsetParent}
return [$$,$_]},getFixedXY:function(){var $$=0,$_=0,$a=this
if("getBoundingClientRect" in this){var $b=this.ownerDocument,$c=$b.body,$d=$b.defaultView||$a.parentWindow||!1,$e=$a.getBoundingClientRect(),$f=$b.clientTop||$c.clientTop||0,$g=$b.clientLeft||$c.clientLeft||0,$h=$d.pageYOffset||$c.scrollTop,$i=$d.pageXOffset||$c.scrollLeft
$_=$e.top+$h-$f
$$=$e.left+$i-$g}
else{$_=$a.offsetTop
$$=$a.offsetLeft
while(($a=$a.offsetParent)){$_-=$a.scrollTop,$$-=$a.scrollLeft
$_+=$a.offsetTop,$$+=$a.offsetLeft}}
return [$$,$_]},toggle:function(){this.isVisible()?this.hide():this.show()
return this},setOpacity:function($$){$$=Math.max(Math.min($$,1),0)
if(q.isIE)this.style.filter=(this.style.filter||'').replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi,'')+($$>=1?'':'progid:DXImageTransform.Microsoft.Alpha(opacity='+$$*100+'), ')
else this.style.opacity=$$
return this},setBackgroundImage:function($$){var $_=$$
if($_&&q.isIE)this.style.filter+='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+$_+'",sizingMethod="scale"), '
else this.style.backgroundImage='url("'+$$+'")'
return this},setClass:function($$){this.className=$$
return this},addClass:function($$){this.removeClass($$)
this.className+=' '+$$
return this},removeClass:function($$){var $_=this.className.split(' ')
for(var $a=0;$a<$_.length;$a++){if($_[$a]==$$){$_[$a]=""}}
this.className=$_.join(' ')
return this},setRotation:function($$){if(q.isFF)this.style.MozTransform=$$?'rotate('+$$+'deg)':''
else if(q.isSafari)this.style.WebkitTransform=$$?'rotate('+$$+'deg)':''
else if(q.isIE){this.style.filter=$$?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round($$/90)+')':''
if(q.isIE8&&$$){var $_=this.getElementsByTagName('iframe')
if(q.isIE8&&$_.length){$_[0].style.filter=$$?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round($$/90)+')':''
this.style.overflow='visible'}}}
return this},setSelectable:function($$){function $_(){return !1}
if($$&&$$!='false'){this.unselectable='on'
if(typeof this.style.MozUserSelect!='undefined')this.style.MozUserSelect='none'
else if(typeof this.style.WebkitUserSelect!='undefined')this.style.WebkitUserSelect='none'
else if(typeof this.onselectstart!='undefined')this.un('selectstart',$_)}
else{this.unselectable='on'
if(typeof this.style.MozUserSelect!='undefined')this.style.MozUserSelect='none'
else if(typeof this.style.WebkitUserSelect!='undefined')this.style.WebkitUserSelect='none'
else if(typeof this.onselectstart!='undefined')this.on('selectstart',$_)}
return this},setScrollTop:function($$){this.scrollTop=$$
return this}}
if(q.leaksMemory)U.plugLeakage=function(){this.unextendEvents&&this.unextendEvents()
this.$=this.plugLeakage=this.destroy=this.empty=this.autobind=this.autounbind=this._autobinds=this._destructors=this.onDestruction=this.getXY=this.appendToParent=this.defaultPlacement=this.getStyles=this.getStyle=this.setAttributes=this.getText=this.setText=this.setStyle=this.setFloat=this.setPosition=this.setTop=this.setBottom=this.setLeft=this.setRight=this.setHeight=this.setWidth=this.applyConstraints=this.setVisible=this.setBounds=this.setSnaps=this.move=this.moveTo=this.resizeBy=this.hide=this.show=this.isVisible=this.toggle=this.setOpacity=this.setBackgroundImage=this.setClass=this.addClass=this.removeClass=this.setRotation=this.setSthisectable=this.setScrollTop=this.setBackground=this.setBackgroundPosition=this.setBorder=this.setBorderColor=this.setBorderStyle=this.setBorderWidth=this.setBorderTop=this.setBorderRight=this.setBorderBottom=this.setBorderLeft=this.setClear=this.setColor=this.setPadding=this.setMargin=this.setMarginTop=this.setMarginRight=this.setMarginBottom=this.setMarginLeft=this.setDisplay=this.setLineHeight=this.setLetterSpacing=this.setVisibility=this.setOutline=this.setOverflow=this.setOverflowX=this.setOverflowY=this.setFontFamily=this.setFontSize=this.setFontWeight=this.setFontStyle=this.setTextAlign=this.setTextDecoration=this.setTextTransform=this.setVerticalAlign=this.setZIndex=this.setCursor=this.setHref=this.setSrc=this.setChecked=this.setMedia=this.setName=this.setType=this.setValue=this.setDataNode=this.__jx__constructor=this.__jx__native=null}
var V,W
V='background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor'.split(' ')
for(W=0;W<V.length;W++)U[Z('set-'+V[W])]=X(Z(V[W]))
V='checked href media name src target type value'.split(' ')
for(W=0;W<V.length;W++)U[Z('set-'+V[W])]=Y(V[W])
function X($$){return (function($_){try {this.style[$$]=$_}catch($a){;}
return this})}
function Y($$){return (function($_){this.setAttribute($$,$_)
return this})}
function Z($$){$$=$$.split(/[^a-zA-Z0-9]/)
for(var $_=1;$_<$$.length;$_++)if($$[$_].length)$$[$_]=$$[$_].substr(0,1).toUpperCase()+$$[$_].substr(1)
return $$.join('')}
if(q.isIE)document.execCommand("BackgroundImageCache",!1,!0)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Element"].join('')
x.prototype.__jx__fqname="jx_core_Element"}
return x})()
b.__$$__jx_data_SetDataNode=(function(){var x={applySetDataNode:z}
function y(A){var B,C
if(A.leaf){B=this
B.autobind(A,'value',function(D){if('value' in B)B.value=D
else B.setText(D)})}
else{B=this.firstChild
while(B){if(B.getAttribute){C=B.getAttribute('name')
if(C)B.setDataNode(A.descend(C))
else B.setDataNode(A)}
B=B.nextSibling}}}
function z(A){if(A.setDataNode)return
A.setDataNode=y
var B=A.firstChild
while(B){z(B)
B=B.nextSibling}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_data_SetDataNode"].join('')
x.prototype.__jx__fqname="jx_data_SetDataNode"}
return x})()
b.__$$__meshim_common_ArrayUtils=(function(){var x={shuffle:y,random_index:A,map:D}
function y(E,F){return F?B(E,F):z(E)}
function z(E){var F=E.length,G,H
while(F>1){G=Math.floor(F--*Math.random())
H=E[G]
E[G]=E[F]
E[F]=H}
return E}
function A(E,F){if(!E||E.length<=0)return -1
if(!F){return Math.floor(Math.random()*E.length)}
F=C(E,F)
var G=0,H
for(H=F.length;H--;){G+=F[H]}
var I=Math.random()*G,J=0,K=F.length
for(H=0;H<K-1;H++){J+=F[H]
if(I<=J)return H}
return H}
function B(E,F){var G=E.concat(),H,I,J,K,L
F=C(E,F)
E.length=0
L=0
for(H=F.length;H--;){L+=F[H]}
J=Math.random()*L
K=0
H=0
while(G.length){K+=F[H]
if(J<=K){L-=F[H]
I=G.splice(H,1)[0]
F.splice(H,1)
E.push(I)
J=Math.random()*L
K=0
H=0}
else{H++}}
return E}
function C(E,F){if(g(F)){if(F.length===E.length){return F.concat()}
else{throw new window.Error('Invalid weights array: length does not match')}}
else if(h(F)){return D(E,F)}
else{throw new window.Error('Invalid weights supplied')}}
function D(E,F,G){var H,I,J
if(!g(E)){throw new TypeError(' arr is not an array')}
var K=Object(E),L=K.length>>>0
if(!h(F)){throw new TypeError(F+' is not a function')}
if(arguments.length>2){H=G}
I=new Array(L)
J=0
while(J<L){var M,N
if(J in K){M=K[J]
N=F.call(H,M,J,K)
I[J]=N}
J++}
return I}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_ArrayUtils"].join('')
x.prototype.__jx__fqname="meshim_common_ArrayUtils"}
return x})()
b.__$$__div=(function(){var x=w.nativeGenerator("div")
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","div"].join('')
x.prototype.__jx__fqname="div"}
return x})()
b.__$$__meshim_common_Chroma=(function(){var x={},y={};(function(){var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$$,$_,$a,$b,$c,$d,$e,$f,$g,$h,$i,$j,$k,$l,$m,$n,$o,$p
$f=typeof x!=="undefined"&&x!==null?x:this
J=($k=$f.chroma)!=null?$k:$f.chroma={}
if(typeof y!=="undefined"&&y!==null){y.exports=J}
A=(function(){function $q($r,$s,$t,$u){var $v,$w,$x
$v=this
if(($r==null)&&($s==null)&&($t==null)&&($u==null)){$r=[255,0,255]}
if($g($r)==="array"&&$r.length===3){if($u==null){$u=$s}
$x=$r,$r=$x[0],$s=$x[1],$t=$x[2]}
if($g($r)==="string"){$u='hex'}
else{if($u==null){$u='rgb'}}
if($u==='rgb'){$v._rgb=[$r,$s,$t]}
else if($u==='hsl'){$v._rgb=Q($r,$s,$t)}
else if($u==='hsv'){$v._rgb=R($r,$s,$t)}
else if($u==='hex'){$v._rgb=O($r)}
else if($u==='lab'){$v._rgb=T($r,$s,$t)}
else if($u==='lch'){$v._rgb=W($r,$s,$t)}
else if($u==='hsi'){$v._rgb=P($r,$s,$t)}
$w=K($v._rgb)}
$q.prototype.rgb=function(){return this._rgb}
$q.prototype.hex=function(){return $$(this._rgb)}
$q.prototype.toString=function(){return this.hex()}
$q.prototype.hsl=function(){return $a(this._rgb)}
$q.prototype.hsv=function(){return $b(this._rgb)}
$q.prototype.lab=function(){return $c(this._rgb)}
$q.prototype.lch=function(){return $d(this._rgb)}
$q.prototype.hsi=function(){return $_(this._rgb)}
$q.prototype.luminance=function(){return Y(this._rgb)}
$q.prototype.name=function(){var $r,$s
$r=this.hex()
for($s in J.colors)if(J.colors.hasOwnProperty($s)){if($r===J.colors[$s]){return $s}}
return $r}
$q.prototype.interpolate=function($r,$s,$t){var $u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G
$B=this
if($t==null){$t='rgb'}
if($g($s)==="string"){$s=new $q($s)}
if($t==='hsl'||$t==='hsv'||$t==='lch'||$t==='hsi'){if($t==='hsl'){$F=$B.hsl()
$G=$s.hsl()}
else if($t==='hsv'){$F=$B.hsv()
$G=$s.hsv()}
else if($t==='hsi'){$F=$B.hsi()
$G=$s.hsi()}
else if($t==='lch'){$F=$B.lch()
$G=$s.lch()}
if($t.substr(0,1)==='h'){$w=$F[0],$D=$F[1],$z=$F[2]
$x=$G[0],$E=$G[1],$A=$G[2]}
else{$z=$F[0],$D=$F[1],$w=$F[2]
$A=$G[0],$E=$G[1],$x=$G[2]}
if(!isNaN($w)&&!isNaN($x)){if($x>$w&&$x-$w>180){$u=$x-($w+360)}
else if($x<$w&&$w-$x>180){$u=$x+360-$w}
else{$u=$x-$w}
$v=$w+$r*$u}
else if(!isNaN($w)){$v=$w
if($A===1||$A===0){$C=$D}}
else if(!isNaN($x)){$v=$x
if($z===1||$z===0){$C=$E}}
else{$v=void(0)}
if($C==null){$C=$D+$r*($E-$D)}
$y=$z+$r*($A-$z)
if($t.substr(0,1)==='h'){return new $q($v,$C,$y,$t)}
else{return new $q($y,$C,$v,$t)}}
else if($t==='rgb'){$F=$B._rgb
$G=$s._rgb
return new $q($F[0]+$r*($G[0]-$F[0]),$F[1]+$r*($G[1]-$F[1]),$F[2]+$r*($G[2]-$F[2]),$t)}
else if($t==='lab'){$F=$B.lab()
$G=$s.lab()
return new $q($F[0]+$r*($G[0]-$F[0]),$F[1]+$r*($G[1]-$F[1]),$F[2]+$r*($G[2]-$F[2]),$t)}
else{throw "color mode "+$t+" is not supported"}}
$q.prototype.darken=function($r){var $s,$t
if($r==null){$r=20}
$t=this
$s=$t.lch()
$s[0]-=$r
return J.lch($s)}
$q.prototype.darker=function($r){return this.darken($r)}
$q.prototype.brighten=function($r){if($r==null){$r=20}
return this.darken(-$r)}
$q.prototype.brighter=function($r){return this.brighten($r)}
$q.prototype.saturate=function($r){var $s,$t
if($r==null){$r=20}
$t=this
$s=$t.lch()
$s[1]+=$r
return J.lch($s)}
$q.prototype.desaturate=function($r){if($r==null){$r=20}
return this.saturate(-$r)}
return $q})()
O=function($q){var $r,$s,$t,$u,$v
if($q.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)){if($q.length===4||$q.length===7){$q=$q.substr(1)}
if($q.length===3){$q=$q.split("")
$q=$q[0]+$q[0]+$q[1]+$q[1]+$q[2]+$q[2]}
$v=parseInt($q,16)
$t=$v>>16
$s=$v>>8&255
$r=$v&255
return [$t,$s,$r]}
if($u=N($q)){return $u}
throw "unknown color: "+$q}
N=function($q){var $r,$s,$t,$u
if((J.colors!=null)&&J.colors[$q]){return O(J.colors[$q])}
if($t=$q.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){return $t.slice(1,4)}
if($t=$q.match(/rgb\(\s*(\-?\d+)%,\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)){$u=$t.slice(1,4)
for($s in $u)if($u.hasOwnProperty($s)){$u[$s]=Math.round($u[$s]*2.55)}
return $u}
if($t=$q.match(/hsl\(\s*(\-?\d+),\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)){$r=$t.slice(1,4)
$r[1]*=0.01
$r[2]*=0.01
return Q($r)}}
$$=function(){var $q,$r,$s,$t,$u,$v
$v=$h(arguments),$s=$v[0],$r=$v[1],$q=$v[2]
$u=$s<<16|$r<<8|$q
$t="000000"+$u.toString(16)
return "#"+$t.substr($t.length-6)}
R=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G,$H
$B=$h(arguments),$t=$B[0],$y=$B[1],$A=$B[2]
$A*=255
if($y===0){$x=$s=$q=$A}
else{if($t===360){$t=0}
if($t>360){$t-=360}
if($t<0){$t+=360}
$t/=60
$u=Math.floor($t)
$r=$t-$u
$v=$A*(1-$y)
$w=$A*(1-$y*$r)
$z=$A*(1-$y*(1-$r))
switch($u){case 0:$C=[$A,$z,$v],$x=$C[0],$s=$C[1],$q=$C[2]
break
case 1:$D=[$w,$A,$v],$x=$D[0],$s=$D[1],$q=$D[2]
break
case 2:$E=[$v,$A,$z],$x=$E[0],$s=$E[1],$q=$E[2]
break
case 3:$F=[$v,$w,$A],$x=$F[0],$s=$F[1],$q=$F[2]
break
case 4:$G=[$z,$v,$A],$x=$G[0],$s=$G[1],$q=$G[2]
break
case 5:$H=[$A,$v,$w],$x=$H[0],$s=$H[1],$q=$H[2]}}
$x=Math.round($x)
$s=Math.round($s)
$q=Math.round($q)
return [$x,$s,$q]}
$b=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y,$z
$z=$h(arguments),$w=$z[0],$s=$z[1],$q=$z[2]
$v=Math.min($w,$s,$q)
$u=Math.max($w,$s,$q)
$r=$u-$v
$y=$u/255.0
if($u===0){$t=void(0)
$x=0}
else{$x=$r/$u
if($w===$u){$t=($s-$q)/$r}
if($s===$u){$t=2+($q-$w)/$r}
if($q===$u){$t=4+($w-$s)/$r}
$t*=60
if($t<0){$t+=360}}
return [$t,$x,$y]}
Q=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D
$C=$h(arguments),$t=$C[0],$x=$C[1],$v=$C[2]
if($x===0){$w=$s=$q=$v*255}
else{$A=[0,0,0]
$r=[0,0,0]
$z=$v<0.5?$v*(1+$x):$v+$x-$v*$x
$y=2*$v-$z
$t/=360
$A[0]=$t+1/3
$A[1]=$t
$A[2]=$t-1/3
for($u=$B=0;$B<=2;$u=++$B){if($A[$u]<0){$A[$u]+=1}
if($A[$u]>1){$A[$u]-=1}
if(6*$A[$u]<1){$r[$u]=$y+($z-$y)*6*$A[$u]}
else if(2*$A[$u]<1){$r[$u]=$z}
else if(3*$A[$u]<2){$r[$u]=$y+($z-$y)*((2/3)-$A[$u])*6}
else{$r[$u]=$y}}
$D=[Math.round($r[0]*255),Math.round($r[1]*255),Math.round($r[2]*255)],$w=$D[0],$s=$D[1],$q=$D[2]}
return [$w,$s,$q]}
$a=function($q,$r,$s){var $t,$u,$v,$w,$x,$y
if($q!==void(0)&&$q.length===3){$y=$q,$q=$y[0],$r=$y[1],$s=$y[2]}
$q/=255
$r/=255
$s/=255
$w=Math.min($q,$r,$s)
$v=Math.max($q,$r,$s)
$u=($v+$w)/2
if($v===$w){$x=0
$t=void(0)}
else{$x=$u<0.5?($v-$w)/($v+$w):($v-$w)/(2-$v-$w)}
if($q===$v){$t=($r-$s)/($v-$w)}
else if($r===$v){$t=2+($s-$q)/($v-$w)}
else if($s===$v){$t=4+($q-$r)/($v-$w)}
$t*=60
if($t<0){$t+=360}
return [$t,$x,$u]}
C=18
F=0.95047
G=1
H=1.08883
T=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z
if($q!==void(0)&&$q.length===3){$y=$q,$q=$y[0],$r=$y[1],$s=$y[2]}
if($q!==void(0)&&$q.length===3){$z=$q,$q=$z[0],$r=$z[1],$s=$z[2]}
$w=($q+16)/116
$v=$w+$r/500
$x=$w-$s/200
$v=U($v)*F
$w=U($w)*G
$x=U($x)*H
$u=$j(3.2404542*$v-1.5371385*$w-0.4985314*$x)
$t=$j(-0.969266*$v+1.8760108*$w+0.041556*$x)
$s=$j(0.0556434*$v-0.2040259*$w+1.0572252*$x)
return [X($u,0,255),X($t,0,255),X($s,0,255)]}
$c=function(){var $q,$r,$s,$t,$u,$v,$w
$w=$h(arguments),$s=$w[0],$r=$w[1],$q=$w[2]
$s=$e($s)
$r=$e($r)
$q=$e($q)
$t=$i((0.4124564*$s+0.3575761*$r+0.1804375*$q)/F)
$u=$i((0.2126729*$s+0.7151522*$r+0.072175*$q)/G)
$v=$i((0.0193339*$s+0.119192*$r+0.9503041*$q)/H)
return [116*$u-16,500*($t-$u),200*($u-$v)]}
V=function(){var $q,$r,$s,$t
$t=$h(arguments),$s=$t[0],$q=$t[1],$r=$t[2]
$r=$r*Math.PI/180
return [$s,Math.cos($r)*$q,Math.sin($r)*$q]}
W=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z
$y=V($q,$r,$s),$t=$y[0],$u=$y[1],$v=$y[2]
$z=T($t,$u,$v),$x=$z[0],$w=$z[1],$v=$z[2]
return [X($x,0,255),X($w,0,255),X($v,0,255)]}
U=function($q){if($q>0.206893034){return $q*$q*$q}
else{return ($q-4/29)/7.787037}}
$i=function($q){if($q>0.008856){return Math.pow($q,1/3)}
else{return 7.787037*$q+4/29}}
$j=function($q){return Math.round(255*($q<=0.00304?12.92*$q:1.055*Math.pow($q,1/2.4)-0.055))}
$e=function($q){if(($q/=255)<=0.04045){return $q/12.92}
else{return Math.pow(($q+0.055)/1.055,2.4)}}
S=function(){var $q,$r,$s,$t,$u,$v
$v=$h(arguments),$u=$v[0],$q=$v[1],$r=$v[2]
$s=Math.sqrt($q*$q+$r*$r)
$t=Math.atan2($r,$q)/Math.PI*180
return [$u,$s,$t]}
$d=function(){var $q,$r,$s,$t,$u,$v,$w
$v=$h(arguments),$u=$v[0],$s=$v[1],$r=$v[2]
$w=$c($u,$s,$r),$t=$w[0],$q=$w[1],$r=$w[2]
return S($t,$q,$r)}
$_=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y
$y=$h(arguments),$w=$y[0],$s=$y[1],$r=$y[2]
$q=Math.PI*2
$w/=255
$s/=255
$r/=255
$v=Math.min($w,$s,$r)
$u=($w+$s+$r)/3
$x=1-$v/$u
if($x===0){$t=0}
else{$t=(($w-$s)+($w-$r))/2
$t/=Math.sqrt(($w-$s)*($w-$s)+($w-$r)*($s-$r))
$t=Math.acos($t)
if($r>$s){$t=$q-$t}
$t/=$q}
return [$t*360,$x,$u]}
P=function($q,$r,$s){var $t,$u,$v,$w
$w=$h(arguments),$q=$w[0],$r=$w[1],$s=$w[2]
$q/=360
if($q<1/3){$t=(1-$r)/3
$v=(1+$r*M(E*$q)/M(D-E*$q))/3
$u=1-($t+$v)}
else if($q<2/3){$q-=1/3
$v=(1-$r)/3
$u=(1+$r*M(E*$q)/M(D-E*$q))/3
$t=1-($v+$u)}
else{$q-=2/3
$u=(1-$r)/3
$t=(1+$r*M(E*$q)/M(D-E*$q))/3
$v=1-($u+$t)}
$v=X($s*$v*3)
$u=X($s*$u*3)
$t=X($s*$t*3)
return [$v*255,$u*255,$t*255]}
K=function($q){var $r
for($r in $q)if($q.hasOwnProperty($r)){if($q[$r]<0){$q[$r]=0}
if($q[$r]>255){$q[$r]=255}}
return $q}
Y=function($q,$r,$s){var $t
$t=$h(arguments),$q=$t[0],$r=$t[1],$s=$t[2]
$q=Z($q)
$r=Z($r)
$s=Z($s)
return 0.2126*$q+0.7152*$r+0.0722*$s}
Z=function($q){$q/=255
if($q<=0.03928){return $q/12.92}
else{return Math.pow(($q+0.055)/1.055,2.4)}}
J.Color=A
J.color=function($q,$r,$s,$t){return new A($q,$r,$s,$t)}
J.hsl=function($q,$r,$s){return new A($q,$r,$s,'hsl')}
J.hsv=function($q,$r,$s){return new A($q,$r,$s,'hsv')}
J.rgb=function($q,$r,$s){return new A($q,$r,$s,'rgb')}
J.hex=function($q){return new A($q)}
J.css=function($q){return new A($q)}
J.lab=function($q,$r,$s){return new A($q,$r,$s,'lab')}
J.lch=function($q,$r,$s){return new A($q,$r,$s,'lch')}
J.hsi=function($q,$r,$s){return new A($q,$r,$s,'hsi')}
J.interpolate=function($q,$r,$s,$t){if(($q==null)||($r==null)){return '#000'}
if($g($q)==='string'){$q=new A($q)}
if($g($r)==='string'){$r=new A($r)}
return $q.interpolate($s,$r,$t)}
J.contrast=function($q,$r){var $s,$t
if($g($q)==='string'){$q=new A($q)}
if($g($r)==='string'){$r=new A($r)}
$s=$q.luminance()
$t=$r.luminance()
if($s>$t){return ($s+0.05)/($t+0.05)}
else{return ($t+0.05)/($s+0.05)}}
$f=typeof x!=="undefined"&&x!==null?x:this
J=($l=$f.chroma)!=null?$l:$f.chroma={}
A=J.Color
B=(function(){function $q($r){var $s,$t,$u
if($r==null){$r={}}
$s=this
$s.range($r.colors,$r.positions)
$s._mode=($t=$r.mode)!=null?$t:'rgb'
$s._nacol=J.hex(($u=$r.nacol)!=null?$u:J.hex('#ccc'))
$s._spread=0
$s._fixed=!1
$s.domain([0,1])
$s}
$q.prototype.range=function($r,$s){var $t,$u,$v,$w,$x,$y,$z,$A
$v=this
if($r==null){$r=['#ddd','#222']}
if(($r!=null)&&$g($r)==='string'&&((($y=J.brewer)!=null?$y[$r]:void(0))!=null)){$r=J.brewer[$r].slice(0)}
for($t=$w=0,$z=$r.length-1;0<=$z?$w<=$z:$w>=$z;$t=0<=$z?++$w:--$w){$u=$r[$t]
if($g($u)==="string"){$r[$t]=new A($u)}}
$v._colors=$r
if($s!=null){$v._pos=$s}
else{$v._pos=[]
for($t=$x=0,$A=$r.length-1;0<=$A?$x<=$A:$x>=$A;$t=0<=$A?++$x:--$x){$v._pos.push($t/($r.length-1))}}
return $v}
$q.prototype.domain=function($r){var $s
if($r==null){$r=[]}
$s=this
$s._domain=$r
$s._min=$r[0]
$s._max=$r[$r.length-1]
if($r.length===2){$s._numClasses=0}
else{$s._numClasses=$r.length-1}
return $s}
$q.prototype.get=function($r){var $s,$t,$u,$v
$v=this
if(isNaN($r)){return $v._nacol}
if($v._domain.length>2){$s=$v.getClass($r)
$t=$s/($v._numClasses-1)}
else{$t=$u=($r-$v._min)/($v._max-$v._min)
$t=Math.min(1,Math.max(0,$t))}
return $v.fColor($t)}
$q.prototype.fColor=function($r){var $s,$t,$u,$v,$w,$x,$y
$v=this
$t=$v._colors
for($u=$x=0,$y=$v._pos.length-1;0<=$y?$x<=$y:$x>=$y;$u=0<=$y?++$x:--$x){$w=$v._pos[$u]
if($r<=$w){$s=$t[$u]
break}
if($r>=$w&&$u===$v._pos.length-1){$s=$t[$u]
break}
if($r>$w&&$r<$v._pos[$u+1]){$r=($r-$w)/($v._pos[$u+1]-$w)
$s=J.interpolate($t[$u],$t[$u+1],$r,$v._mode)
break}}
return $s}
$q.prototype.classifyValue=function($r){var $s,$t,$u,$v,$w,$x,$y
$v=this
$s=$v._domain
$y=$r
if($s.length>2){$x=$s.length-1
$t=$v.getClass($r)
$w=$s[0]+($s[1]-$s[0])*(0+$v._spread*0.5)
$u=$s[$x-1]+($s[$x]-$s[$x-1])*(1-$v._spread*0.5)
$y=$v._min+(($s[$t]+($s[$t+1]-$s[$t])*0.5-$w)/($u-$w))*($v._max-$v._min)}
return $y}
$q.prototype.getClass=function($r){var $s,$t,$u,$v
$v=this
$s=$v._domain
if($s!=null){$u=$s.length-1
$t=0
while($t<$u&&$r>=$s[$t]){$t++}
return $t-1}
return 0}
$q.prototype.validValue=function($r){return !isNaN($r)}
return $q})()
J.ColorScale=B
J.scale=function($q,$r){var $s,$t,$u
$s=new J.ColorScale()
$s.range($q,$r)
$u=!1
$t=function($v){var $w
$w=$s.get($v)
if($u&&$w[$u]){return $w[$u]()}
else{return $w}}
$t.domain=function($v,$w,$x,$y){var $z
if($x==null){$x='e'}
if(!arguments.length){return $s._domain}
if($w!=null){$z=J.analyze($v,$y)
if($w===0){$v=[$z.min,$z.max]}
else{$v=J.limits($z,$x,$w)}}
$s.domain($v)
return $t}
$t.mode=function($v){if(!arguments.length){return $s._mode}
$s._mode=$v
return $t}
$t.range=function($v,$w){$s.range($v,$w)
return $t}
$t.out=function($v){$u=$v
return $t}
$t.getColor=function($v){return $t($v)}
$t.spread=function($v){if(!arguments.length){return $s._spread}
$s._spread=$v
return $t}
return $t}
if(($m=J.scales)==null){J.scales={}}
J.scales.cool=function(){return J.scale([J.hsl(180,1,0.9),J.hsl(250,0.7,0.4)])}
J.scales.hot=function(){return J.scale(['#000','#f00','#ff0','#fff'],[0,0.25,0.75,1]).mode('rgb')}
J.analyze=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z
$v={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0}
if($s==null){$s=function(){return !0}}
$t=function($A){if(($A!=null)&&!isNaN($A)){$v.values.push($A)
$v.sum+=$A
if($A<$v.min){$v.min=$A}
if($A>$v.max){$v.max=$A}
$v.count+=1}}
$x=function($A,$B){if($s($A,$B)){if(($r!=null)&&$g($r)==='function'){return $t($r($A))}
else if(($r!=null)&&$g($r)==='string'||$g($r)==='number'){return $t($A[$r])}
else{return $t($A)}}}
if($g($q)==='array'){for($y=0,$z=$q.length;$y<$z;$y++){$w=$q[$y]
$x($w)}}
else{for($u in $q)if($q.hasOwnProperty($u)){$w=$q[$u]
$x($w,$u)}}
$v.domain=[$v.min,$v.max]
$v.limits=function($A,$B){return J.limits($v,$A,$B)}
return $v}
J.limits=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G,$H,$I,$J,$K,$L,$M,$N,$O,$P,$Q,$R,$S,$T,$U,$V,$W,$X,$Y,$Z,$0,$1,$2,$3,$4,$5,$6,$7,$8,$9,_$,__,_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k
if($r==null){$r='equal'}
if($s==null){$s=7}
if($q.values==null){$q=J.analyze($q)}
$F=$q.min
$D=$q.max
$P=$q.sum
$S=$q.values.sort(function(_l,_m){return _l-_m})
$C=[]
if($r.substr(0,1)==='c'){$C.push($F)
$C.push($D)}
if($r.substr(0,1)==='e'){$C.push($F)
for($z=$T=1,__=$s-1;1<=__?$T<=__:$T>=__;$z=1<=__?++$T:--$T){$C.push($F+($z/$s)*($D-$F))}
$C.push($D)}
else if($r.substr(0,1)==='l'){if($F<=0){throw 'Logarithmic scales are only possible for values > 0'}
$G=Math.LOG10E*Math.log($F)
$E=Math.LOG10E*Math.log($D)
$C.push($F)
for($z=$U=1,_a=$s-1;1<=_a?$U<=_a:$U>=_a;$z=1<=_a?++$U:--$U){$C.push(Math.pow(10,$G+($z/$s)*($E-$G)))}
$C.push($D)}
else if($r.substr(0,1)==='q'){$C.push($F)
for($z=$V=1,_b=$s-1;1<=_b?$V<=_b:$V>=_b;$z=1<=_b?++$V:--$V){$L=$S.length*$z/$s
$M=Math.floor($L)
if($M===$L){$C.push($S[$M])}
else{$N=$L-$M
$C.push($S[$M]*$N+$S[$M+1]*(1-$N))}}
$C.push($D)}
else if($r.substr(0,1)==='k'){$I=$S.length
$t=new Array($I)
$x=new Array($s)
$O=!0
$J=0
$v=null
$v=[]
$v.push($F)
for($z=$W=1,_c=$s-1;1<=_c?$W<=_c:$W>=_c;$z=1<=_c?++$W:--$W){$v.push($F+($z/$s)*($D-$F))}
$v.push($D)
while($O){for($A=$X=0,_d=$s-1;0<=_d?$X<=_d:$X>=_d;$A=0<=_d?++$X:--$X){$x[$A]=0}
for($z=$Y=0,_e=$I-1;0<=_e?$Y<=_e:$Y>=_e;$z=0<=_e?++$Y:--$Y){$R=$S[$z]
$H=Number.MAX_VALUE
for($A=$Z=0,_f=$s-1;0<=_f?$Z<=_f:$Z>=_f;$A=0<=_f?++$Z:--$Z){$y=Math.abs($v[$A]-$R)
if($y<$H){$H=$y
$u=$A}}
$x[$u]++
$t[$z]=$u}
$K=new Array($s)
for($A=$0=0,$3=$s-1;0<=$3?$0<=$3:$0>=$3;$A=0<=$3?++$0:--$0){$K[$A]=null}
for($z=$1=0,$4=$I-1;0<=$4?$1<=$4:$1>=$4;$z=0<=$4?++$1:--$1){$w=$t[$z]
if($K[$w]===null){$K[$w]=$S[$z]}
else{$K[$w]+=$S[$z]}}
for($A=$2=0,$5=$s-1;0<=$5?$2<=$5:$2>=$5;$A=0<=$5?++$2:--$2){$K[$A]*=1/$x[$A]}
$O=!1
for($A=_g=0,$6=$s-1;0<=$6?_g<=$6:_g>=$6;$A=0<=$6?++_g:--_g){if($K[$A]!==$v[$z]){$O=!0
break}}
$v=$K
$J++
if($J>200){$O=!1}}
$B={}
for($A=_h=0,$7=$s-1;0<=$7?_h<=$7:_h>=$7;$A=0<=$7?++_h:--_h){$B[$A]=[]}
for($z=_i=0,$8=$I-1;0<=$8?_i<=$8:_i>=$8;$z=0<=$8?++_i:--_i){$w=$t[$z]
$B[$w].push($S[$z])}
$Q=[]
for($A=_j=0,$9=$s-1;0<=$9?_j<=$9:_j>=$9;$A=0<=$9?++_j:--_j){$Q.push($B[$A][0])
$Q.push($B[$A][$B[$A].length-1])}
$Q=$Q.sort(function(_l,_m){return _l-_m})
$C.push($Q[0])
for($z=_k=1,_$=$Q.length-1;_k<=_$;$z=_k+=2){if(!isNaN($Q[$z])){$C.push($Q[$z])}}}
return $C}
$f=typeof x!=="undefined"&&x!==null?x:this
$g=(function(){var $q,$r,$s,$t,$u
$q={}
$u="Boolean Number String Function Array Date RegExp Undefined Null".split(" ")
for($s=0,$t=$u.length;$s<$t;$s++){$r=$u[$s]
$q["[object "+$r+"]"]=$r.toLowerCase()}
return function($v){var $w
$w=Object.prototype.toString.call($v)
return $q[$w]||"object"}})()
if(($n=$f.type)==null){$f.type=$g}
Array.max=function($q){return Math.max.apply(Math,$q)}
Array.min=function($q){return Math.min.apply(Math,$q)}
X=function($q,$r,$s){if($r==null){$r=0}
if($s==null){$s=1}
if($q<$r){$q=$r}
if($q>$s){$q=$s}
return $q}
$h=function($q){if($q.length===3){return $q}
else{return $q[0]}}
E=Math.PI*2
D=Math.PI/3
M=Math.cos
$f=typeof x!=="undefined"&&x!==null?x:this
J=($o=$f.chroma)!=null?$o:$f.chroma={}
J.brewer=I={OrRd:['#fff7ec','#fee8c8','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#b30000','#7f0000'],PuBu:['#fff7fb','#ece7f2','#d0d1e6','#a6bddb','#74a9cf','#3690c0','#0570b0','#045a8d','#023858'],BuPu:['#f7fcfd','#e0ecf4','#bfd3e6','#9ebcda','#8c96c6','#8c6bb1','#88419d','#810f7c','#4d004b'],Oranges:['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704'],BuGn:['#f7fcfd','#e5f5f9','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b'],YlOrBr:['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#993404','#662506'],YlGn:['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#006837','#004529'],Reds:['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'],RdPu:['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177','#49006a'],Greens:['#f7fcf5','#e5f5e0','#c7e9c0','#a1d99b','#74c476','#41ab5d','#238b45','#006d2c','#00441b'],YlGnBu:['#ffffd9','#edf8b1','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#253494','#081d58'],Purples:['#fcfbfd','#efedf5','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#54278f','#3f007d'],GnBu:['#f7fcf0','#e0f3db','#ccebc5','#a8ddb5','#7bccc4','#4eb3d3','#2b8cbe','#0868ac','#084081'],Greys:['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525','#000000'],YlOrRd:['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'],PuRd:['#f7f4f9','#e7e1ef','#d4b9da','#c994c7','#df65b0','#e7298a','#ce1256','#980043','#67001f'],Blues:['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'],PuBuGn:['#fff7fb','#ece2f0','#d0d1e6','#a6bddb','#67a9cf','#3690c0','#02818a','#016c59','#014636'],Spectral:['#9e0142','#d53e4f','#f46d43','#fdae61','#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd','#5e4fa2'],RdYlGn:['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#ffffbf','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837'],RdBu:['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#f7f7f7','#d1e5f0','#92c5de','#4393c3','#2166ac','#053061'],PiYG:['#8e0152','#c51b7d','#de77ae','#f1b6da','#fde0ef','#f7f7f7','#e6f5d0','#b8e186','#7fbc41','#4d9221','#276419'],PRGn:['#40004b','#762a83','#9970ab','#c2a5cf','#e7d4e8','#f7f7f7','#d9f0d3','#a6dba0','#5aae61','#1b7837','#00441b'],RdYlBu:['#a50026','#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695'],BrBG:['#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'],RdGy:['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#ffffff','#e0e0e0','#bababa','#878787','#4d4d4d','#1a1a1a'],PuOr:['#7f3b08','#b35806','#e08214','#fdb863','#fee0b6','#f7f7f7','#d8daeb','#b2abd2','#8073ac','#542788','#2d004b'],Set2:['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3'],Accent:['#7fc97f','#beaed4','#fdc086','#ffff99','#386cb0','#f0027f','#bf5b17','#666666'],Set1:['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'],Set3:['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f'],Dark2:['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666'],Paired:['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'],Pastel2:['#b3e2cd','#fdcdac','#cbd5e8','#f4cae4','#e6f5c9','#fff2ae','#f1e2cc','#cccccc'],Pastel1:['#fbb4ae','#b3cde3','#ccebc5','#decbe4','#fed9a6','#ffffcc','#e5d8bd','#fddaec','#f2f2f2']}
$f=typeof x!=="undefined"&&x!==null?x:this
J=($p=$f.chroma)!=null?$p:$f.chroma={}
J.colors=L={indigo:"#4b0082",gold:"#ffd700",hotpink:"#ff69b4",firebrick:"#b22222",indianred:"#cd5c5c",yellow:"#ffff00",mistyrose:"#ffe4e1",darkolivegreen:"#556b2f",olive:"#808000",darkseagreen:"#8fbc8f",pink:"#ffc0cb",tomato:"#ff6347",lightcoral:"#f08080",orangered:"#ff4500",navajowhite:"#ffdead",lime:"#00ff00",palegreen:"#98fb98",darkslategrey:"#2f4f4f",greenyellow:"#adff2f",burlywood:"#deb887",seashell:"#fff5ee",mediumspringgreen:"#00fa9a",fuchsia:"#ff00ff",papayawhip:"#ffefd5",blanchedalmond:"#ffebcd",chartreuse:"#7fff00",dimgray:"#696969",black:"#000000",peachpuff:"#ffdab9",springgreen:"#00ff7f",aquamarine:"#7fffd4",white:"#ffffff",orange:"#ffa500",lightsalmon:"#ffa07a",darkslategray:"#2f4f4f",brown:"#a52a2a",ivory:"#fffff0",dodgerblue:"#1e90ff",peru:"#cd853f",lawngreen:"#7cfc00",chocolate:"#d2691e",crimson:"#dc143c",forestgreen:"#228b22",darkgrey:"#a9a9a9",lightseagreen:"#20b2aa",cyan:"#00ffff",mintcream:"#f5fffa",silver:"#c0c0c0",antiquewhite:"#faebd7",mediumorchid:"#ba55d3",skyblue:"#87ceeb",gray:"#808080",darkturquoise:"#00ced1",goldenrod:"#daa520",darkgreen:"#006400",floralwhite:"#fffaf0",darkviolet:"#9400d3",darkgray:"#a9a9a9",moccasin:"#ffe4b5",saddlebrown:"#8b4513",grey:"#808080",darkslateblue:"#483d8b",lightskyblue:"#87cefa",lightpink:"#ffb6c1",mediumvioletred:"#c71585",slategrey:"#708090",red:"#ff0000",deeppink:"#ff1493",limegreen:"#32cd32",darkmagenta:"#8b008b",palegoldenrod:"#eee8aa",plum:"#dda0dd",turquoise:"#40e0d0",lightgrey:"#d3d3d3",lightgoldenrodyellow:"#fafad2",darkgoldenrod:"#b8860b",lavender:"#e6e6fa",maroon:"#800000",yellowgreen:"#9acd32",sandybrown:"#f4a460",thistle:"#d8bfd8",violet:"#ee82ee",navy:"#000080",magenta:"#ff00ff",dimgrey:"#696969",tan:"#d2b48c",rosybrown:"#bc8f8f",olivedrab:"#6b8e23",blue:"#0000ff",lightblue:"#add8e6",ghostwhite:"#f8f8ff",honeydew:"#f0fff0",cornflowerblue:"#6495ed",slateblue:"#6a5acd",linen:"#faf0e6",darkblue:"#00008b",powderblue:"#b0e0e6",seagreen:"#2e8b57",darkkhaki:"#bdb76b",snow:"#fffafa",sienna:"#a0522d",mediumblue:"#0000cd",royalblue:"#4169e1",lightcyan:"#e0ffff",green:"#008000",mediumpurple:"#9370db",midnightblue:"#191970",cornsilk:"#fff8dc",paleturquoise:"#afeeee",bisque:"#ffe4c4",slategray:"#708090",darkcyan:"#008b8b",khaki:"#f0e68c",wheat:"#f5deb3",teal:"#008080",darkorchid:"#9932cc",deepskyblue:"#00bfff",salmon:"#fa8072",darkred:"#8b0000",steelblue:"#4682b4",palevioletred:"#db7093",lightslategray:"#778899",aliceblue:"#f0f8ff",lightslategrey:"#778899",lightgreen:"#90ee90",orchid:"#da70d6",gainsboro:"#dcdcdc",mediumseagreen:"#3cb371",lightgray:"#d3d3d3",mediumturquoise:"#48d1cc",lemonchiffon:"#fffacd",cadetblue:"#5f9ea0",lightyellow:"#ffffe0",lavenderblush:"#fff0f5",coral:"#ff7f50",purple:"#800080",aqua:"#00ffff",whitesmoke:"#f5f5f5",mediumslateblue:"#7b68ee",darkorange:"#ff8c00",mediumaquamarine:"#66cdaa",darksalmon:"#e9967a",beige:"#f5f5dc",blueviolet:"#8a2be2",azure:"#f0ffff",lightsteelblue:"#b0c4de",oldlace:"#fdf5e6"}}).call(this)
var z=x.chroma
z.Color.prototype.lighten=function(A){return this.brighten(A)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_Chroma"].join('')
z.prototype.__jx__fqname="meshim_common_Chroma"}
return z})()
b.__$$__meshim_widget_Config=(function(){var x=D(),y=document.location.protocol+'//v2.zopim.com/widget',z=y+'/images',A=y+'/sounds',B=y+'/fonts'
c.baseURL=q.secureURL(x.baseURL)
var C={ASSETS_URL:y,IMAGES_URL:z,SOUNDS_URL:A,FONTS_URL:B,ASSETS_LEGACY:document.location.protocol+'//cdn.zopim.com/assets',BRANDING_URL:'https://www.zopim.com',AVATARS:{CONCIERGE:z+'/avatar_simple_agent.png',AGENT:z+'/avatar_simple_agent.png',VISITOR:z+'/avatar_simple_visitor.png',DEFAULT:z+'/avatar_simple_visitor.png'},ACCOUNT_KEY:x.accountKey,BRAND_DOMAIN:x.brandDomain,COUNTRY_CODE:F(),AUTH_URL:'https://www.zopim.com/auth/$NAME/$KEY-$MID',AUTH_LOGOUT_URL:'https://www.zopim.com/auth/logout/$KEY-$MID',IS_POPOUT:window.$zopim_popout,POPOUT_WINDOW_PREFIX:'zlivechatpopout_',POPOUT_URL:'https://v2.zopim.com/widget/livechat.html',FILE_UPLOAD_PATH:'/client/widget/uploads',FILE_UPLOAD_MAX:5*1024*1024,RESEND_MSG_TIMEOUT:5000,FILE_REPLACE_SOURCE:/^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,FILE_REPLACE_RESULT:'$1io$2'}
function D(){var G=E(),H=[/\/?[?]/,/\/livechat\//],I=[]
for(var J=0;J<H.length;J++){I=G.split(H[J])
if(I.length)break}
var K=I[1],L=I[0],M=L.replace(/^(https?:)?\/\//i,'').split('/')[0],N=M.replace(/(.+\.)(?=.+\..+)/,''),O=I[0].split('/')
if(O.pop()==M){O=I[0]}
else{O=O.join('/')}
return {accountKey:K,brandDomain:N,baseURL:O}}
function E(){if(window.$zopim&&window.$zopim.s)return window.$zopim.s.src
var G,H=document.getElementsByTagName('script'),I=/.*zopim.(com|net)\//
for(var J=0,K=H.length;J<K;J++){G=H[J].src||''
if(I.test(G))return G}
return ''}
function F(){var G='VN'.toUpperCase()
if(G.charAt(0)=='<')G='geo'
return G}
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","meshim_widget_Config"].join('')
C.prototype.__jx__fqname="meshim_widget_Config"}
return C})()
b.__$$__jx_ui_HTMLEvent=(function(){function x(z){z.preventDefault=x.preventDefault
z.stopPropagation=x.stopPropagation
z.target=z.srcElement}
x.preventDefault=function(){this.returnValue=!1}
x.stopPropagation=function(){this.cancelBubble=!0}
function y(){this.allCallbacks={}
this.nativeHandlers={}}
y.prototype.useCustomHandling=function(z){if(!this.dom.nodeType&&this.dom!=window&&this.dom!=document)return !0
if(this.tagName.toLowerCase()=='form'&&z=='submit')return !1
return !q.isCustomEvents&&(q.isFF&&q.isFF<9?!document.createEvent('event')[z.toUpperCase()]:typeof (this.dom['on'+z])=='undefined')}
y.prototype.addEventListener=function(z,A){if(!z&&typeof A!='function')throw 'bad arguments to on / addEventListener'
if(!(z in this.allCallbacks)){this.allCallbacks[z]=[]
if(!this.useCustomHandling(z))this.setupNativeEventListener(z)}
this.allCallbacks[z].push(A)
return this}
y.prototype.setupNativeEventListener=function(z){if(z in this.nativeHandlers)return
var A=this
this.nativeHandlers[z]=function(B){B&&(B.stopPropagation||x(B))
var C,D=A.allCallbacks[z],E=D.length,F=!0
D._active=!0
for(C=0;C<E;C++){try {if(!D[C])continue
if(D[C].call(A,(q.isCustomEvents&&(B instanceof window.CustomEvent))?B.detail:B)===!1)F=!1}catch(G){r.fire('error',G)}}
D._active=!1
if(D._dirty){for(C=0;C<E;C++){if(!D[C]){if(C==E-1)D.pop()
else D[C--]=D.pop()
E--}}
D._dirty=!1}
if(F===!1){if(B){B.preventDefault()
B.returnValue=!1}
return !1}}
if(this.dom.attachEvent)this.dom.attachEvent('on'+z,this.nativeHandlers[z])
else if(this.dom.addEventListener)this.dom.addEventListener(z,this.nativeHandlers[z],!1)}
y.prototype.teardownNativeEventListener=function(z){var A=this.nativeHandlers[z]
if(!A)return
if(this.dom.attachEvent)this.dom.detachEvent('on'+z,A)
else if(this.dom.addEventListener)this.dom.removeEventListener(z,A,!1)
delete this.nativeHandlers[z]
delete this.allCallbacks[z]}
y.prototype.removeEventListener=function(z,A){var B=this.allCallbacks[z]
if(!B)return
for(var C=0,D=B.length;C<D;C++)if(B[C]===A){if(B.length==1){if(this.nativeHandlers[z])this.teardownNativeEventListener(z)
else delete this.allCallbacks[z]}
else if(B._active)B[C]=null,B._dirty=!0
else if(C==D-1)B.pop()
else B[C]=B.pop()
break}
return this}
y.prototype.unextendEvents=function(){if(!this.allCallbacks||!this.nativeHandlers)return
for(var z in this.nativeHandlers)if(this.nativeHandlers.hasOwnProperty(z))this.teardownNativeEventListener(z)
this.allCallbacks=this.nativeHandlers=null}
y.prototype.fireCustomEvent=function(z,A){if(!q.isCustomEvents||this.useCustomHandling(z)){var B=this.allCallbacks[z],C=!0
if(B&&B.length){B._active=!0
var D,E,F
for(D=0,E=B.length;D<E;D++){try {F=B[D].call(this,A)
if(F===!1)C=!1}catch(G){r.fire('error',G)}}
B._active=!1
if(B._dirty){for(D=0;D<E;D++){if(!B[D]){if(D==E-1)B.pop()
else B[D--]=B.pop()
E--}}
B._dirty=!1}}
return C}
else{return this.dom.dispatchEvent(new window.CustomEvent(z,{bubbles:!1,cancelable:!0,detail:A}))}}
y.prototype.fire=y.prototype.fireCustomEvent
y.prototype.on=y.prototype.addEventListener
y.prototype.un=y.prototype.removeEventListener
y.__jx__no_fqname=!0
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_HTMLEvent"].join('')
y.prototype.__jx__fqname="jx_ui_HTMLEvent"}
return y})()
b.__$$__meshim_common_sounds_BGSoundTag=(function(){function x(y){if(!q.isIE)return
if(q.isIE>=9)return
var z=document.createElement('bgsound')
if(document.body)document.body.insertBefore(z,document.body.firstChild)
else document.documentElement.appendChild(z)
this.dom=z
this.loop=0
this.load(y)}
x.prototype.load=function(y){this.src=y+'.wav'}
x.prototype.play=function(y){this.dom.src=this.src
this.dom.loop=y?y:this.loop}
x.prototype.stop=function(){this.dom.src=''}
x.prototype.setVolume=function(){}
x.prototype.setLoop=function(y){this.loop=parseInt(y,10)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_BGSoundTag"].join('')
x.prototype.__jx__fqname="meshim_common_sounds_BGSoundTag"}
return x})()
b.__$$__meshim_common_sounds_FlashSound=(function(){var x=10
function y(z){var A,B=+new Date()+Math.round(Math.random()*10000),C=z.substring(0,z.lastIndexOf('/')+1)+'JSMP3.swf'
if(q.isIE){try {new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')}catch(F){return}
A=document.createElement('div')
document.body.insertBefore(A,document.body.firstChild)
var D='<object id="__zopimSoundPlayer'+B+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1">'+'<param name="movie" value="'+C+'" />'+'<param name="allowScriptAccess" value="always" />'+'</object>'
A.innerHTML=D
A=A.firstChild
var E=document.title.split('#')[0]
l(function(){if(document.title!==E)document.title=E})}
else{if(!navigator.mimeTypes['application/x-shockwave-flash'])return
A=document.createElement('embed')
A.id='__zopimSoundPlayer'+B
A.src='/dashboard/sounds/JSMP3.swf'
A.setAttribute('allowScriptAccess','always')
document.body.insertBefore(A,document.body.firstChild)}
A.style.left=A.style.top='-9999px'
A.style.position='absolute'
this.dom=A
this.loop=1
this.load(z)}
y.prototype.load=function(z){if(this.dom.loadSound){this.dom.loadSound(z+'.mp3')
this.loaded=!0}
else{var A=this
setTimeout(function(){A.load(z)},1000)}}
y.prototype.play=function(z){if(this.loaded){try {this.dom.playSound(z||this.loop)}catch(B){;}}
else{var A=this
setTimeout(function(){A.play(z)},1000)}}
y.prototype.stop=function(){if(this.loaded){try {this.dom.stopSound()}catch(z){;}}}
y.prototype.setVolume=function(z){z=parseInt(z,10)
if(isNaN(z))return
if(z>x)z=x
if(z<0)z=0
if(this.loaded){try {this.dom.setVolume(z/x)}catch(B){;}}
else{var A=this
setTimeout(function(){A.setVolume(z)},500)}}
y.prototype.setLoop=function(z){this.loop=z
if(this.loaded){try {this.dom.setLoop(z)}catch(B){;}}
else{var A=this
setTimeout(function(){A.setLoop(z)},500)}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_FlashSound"].join('')
y.prototype.__jx__fqname="meshim_common_sounds_FlashSound"}
return y})()
b.__$$__meshim_common_sounds_AudioTag=(function(){var x=10
function y(A){var B=document.createElement('audio'),C=this,D=function(){z.call(C)}
if(!B.canPlayType)return
var E=/^(probably|maybe)$/i
try {if(B.canPlayType('audio/mpeg').match(E))this.type='mp3'
else if(B.canPlayType('audio/ogg; codecs="vorbis"').match(E))this.type='ogg'
else if(B.canPlayType('audio/wav').match(E))this.type='wav'
else return}catch(F){return}
B.setAttribute('autobuffer','true')
B.setAttribute('preload','')
this.dom=B
this.remainingLoop=1
this.loop=1
this.load(A)
this.dom.addEventListener('ended',D,!1)}
function z(){if(this.remainingLoop>1){this.remainingLoop--
if(q.isSafari){this.dom.load()}
this.dom.play()}}
y.prototype.load=function(A){this.dom.setAttribute('src',A+'.'+this.type)
this.remainingLoop=0}
y.prototype.play=function(A){if(q.isSafari){this.dom.load()}
if(this.dom.currentTime)this.dom.currentTime=0
this.remainingLoop=A?A:this.loop
this.dom.play()}
y.prototype.stop=function(){this.dom.pause()
if(this.dom.currentTime)this.dom.currentTime=0}
y.prototype.setVolume=function(A){A=parseInt(A,10)
if(isNaN(A))return;(A>x)&&(A=x);(A<0)&&(A=0)
this.dom.volume=A/x}
y.prototype.setLoop=function(A){this.loop=A}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_AudioTag"].join('')
y.prototype.__jx__fqname="meshim_common_sounds_AudioTag"}
return y})()
b.__$$__meshim_common_Regex=(function(){var x='[a-z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+([a-z0-9][a-z0-9-]*[a-z0-9])',y='(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)',z={email:new RegExp('^'+x+'$','i'),ip_token:new RegExp('^'+y+'$'),ip:new RegExp('^(?:'+y+'\\.){3}'+y+'$'),tld:/^(AERO|ARPA|ASIA|A[CDEFGILMNOQRSTUWXZ]|BIZ|B[ABDEFGHIJMNORSTVWYZ]|CAT|COM|COOP|C[ACDFGHIKLMNORUVXYZ]|D[EJKMOZ]|EDU|E[CEGRSTU]|F[IJKMOR]|GOV|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|INFO|INT|I[DELMNOQRST]|JOBS|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]||MIL|MOBI|MUSEUM|M[ACDEGHKLMNOPQRSTUVWXYZ]|NAME|NET|N[ACEFGILOPRUZ]|ORG|OM|PRO|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTUVYZ]|TEL|TRAVEL|T[CDFGHJKLMNOPRTVWZ]|U[AGKSYZ]|V[ACEGINU]|W[FS]|XN|Y[ET]|Z[AMW])$/i,search:{email:new RegExp('(^|\\s+)'+x,'ig'),hurl:/(^|\s+)(?:(?:https?|ftps?):\/\/)(?:\S+)/ig,url:/(^|\s+)(?:[\w-]+\.)+(\w{2,})(?::[0-9]+)?(?:\/\S*)?/g}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_Regex"].join('')
z.prototype.__jx__fqname="meshim_common_Regex"}
return z})()
b.__$$__jx_io_socket_XDomainDynScript=(function(){var x=y
y.protocol='xdds'
function y(A){var B=this,C=this.longpoll=new s(!0),D=this.sender=new s(!0)
C.on('success',function(E){B.process_data(E)})
C.on('error',function(){B.abort('longpoll error')})
D.on('success',function(){B.ondrain&&B.ondrain()})
D.on('error',function(){B.abort('sender error')})
this.url='https://'+A
r.window.on('unload',this.unload=function(){B.abort('unload')})
this.longpoll.load(this.url+['c',+new Date()].join('/'))}
y.prototype.process_data=function(A){if(!A||this._abort)return
!this.ts&&this.onopen&&this.onopen()
this.ts=+new Date()
this.onmessage&&this.onmessage(A,this.ts)
this.longpoll&&this.longpoll.load(this.url+['p',+new Date()].join('/'))}
y.prototype.send=function(A){if(this._abort)return !1
var B=this.url+['d',+new Date(),window.encodeURIComponent(A)].join('/')
this.sender&&this.sender.load(B)
return !1}
y.prototype.abort=function(A){if(this._abort)return
this._abort=!0
z('XDDS - abort: '+A)
r.window.un('unload',this.unload)
this.longpoll.destroy()
this.sender.destroy()
this.longpoll=this.sender=this.unload=null
this.onclose&&this.onclose(A)
window.CollectGarbage&&window.CollectGarbage()}
var z=function(){}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_XDomainDynScript"].join('')
x.prototype.__jx__fqname="jx_io_socket_XDomainDynScript"}
return x})()
b.__$$__jx_io_socket_WebSocket=(function(){var x=window.WebSocket||window.MozWebSocket,y=x?z:null
function z(A){var B=new x('wss://'+A+['c',+new Date()].join('/')),C=this
B.onclose=function(D){C.onclose&&C.onclose(D)}
B.onerror=function(D){C.onerror&&C.onerror(D)}
B.onmessage=function(D){C.onmessage&&C.onmessage(D.data,+new Date())}
B.onopen=function(D){C.onopen&&C.onopen(D)}
this.ws=B}
z.prototype.abort=function(){}
z.prototype.close=function(){return this.ws.close()}
z.prototype.send=function(A){this.ws.send(A)
return !0}
z.protocol='ws'
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_io_socket_WebSocket"].join('')
y.prototype.__jx__fqname="jx_io_socket_WebSocket"}
return y})()
b.__$$__meshim_common_Color=(function(){var x=['red','green','blue']
function y(G){if(!(this instanceof y))return new y(G)
var H=''
if(typeof G=='object')H='object'
else if(/#/.test(G))H='hex'
else if(/hsl\(.+\)/.test(G))H='hsl'
else if(/hsv\(.+\)/.test(G))H='hsv'
else if(/rgba\(.+\)/.test(G))H='rgba'
switch(H){case 'object':A.call(this,G)
break
case 'hex':z.call(this,G)
break
case 'hsl':B.call(this,G)
break
case 'hsv':E.call(this,G)
break
case 'rgba':D.call(this,G)
break}
if(typeof this.alpha!=='number')this.alpha=1}
y.prototype.lighten=function(G){var H=this.toHSL()
H.l=H.l+(1-H.l)*G
return new y(H)}
y.prototype.darken=function(G){var H=this.toHSL()
H.l=H.l-H.l*G
return new y(H)}
y.prototype.blend=function(G,H){if(!(G instanceof y))G=new y(G)
var I={}
for(var J=0;J<3;J++){var K=this[x[J]],L=G[x[J]]
I[x[J]]=Math.round(K+(L-K)*H)}
return new y(I)}
y.prototype.complement=function(){var G=this.red,H=this.blue,I=this.green,J=Math.max(G,H,I),K=Math.min(G,H,I),L={}
L.red=J+K-G
L.green=J+K-I
L.blue=J+K-H
return new y(L)}
y.prototype.toStrRGB=y.prototype.toRGB=function(){var G=[]
for(var H=0;H<3;H++){var I=this[x[H]].toString(16)
G[H]=(I.length<2)?'0'+I:I}
return '#'+G.join('')}
y.prototype.toStrRGBA=function(){return 'rgba('+[this.red,this.green,this.blue,this.alpha].join(',')+')'}
y.prototype.toHSL=function(){var G=this.red/255,H=this.green/255,I=this.blue/255,J=Math.max(G,H,I),K=Math.min(G,H,I),L=J-K,M,N,O,P
if(L===0)P=0
else if(J==G)P=((H-I)/L)%6
else if(J==H)P=(I-G)/L+2
else if(J==I)P=(G-H)/L+4
M=60*P
M=(M<0)?360+M%360:M%360
O=0.5*(J+K)
N=(L===0)?0:L/(1-Math.abs(2*O-1))
return {h:M,s:N,l:O}}
y.prototype.toHSV=function(){var G=this.red/255,H=this.green/255,I=this.blue/255,J=Math.max(G,H,I),K=Math.min(G,H,I),L=J-K,M,N,O,P
if(L===0)P=0
else if(J==G)P=((H-I)/L)%6
else if(J==H)P=(I-G)/L+2
else if(J==I)P=(G-H)/L+4
M=60*P
M=(M<0)?360+M%360:M%360
O=J
N=(L===0)?0:L/O
return {h:M,s:N,v:O}}
y.prototype.toArray=function(){return [this.red,this.green,this.blue]}
y.prototype.clone=function(){return new y(this)}
y.prototype.validate=function(){for(var G=0;G<3;G++){var H=this[x[G]]
if(!(typeof H=='number'&&H>=0&&H<=255))return !1}
if(!(typeof this.alpha=='number'&&this.alpha>=0&&this.alpha<=1))return !1
return !0}
function z(G){G=G.replace(/#/g,'').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
if(/^\w{3}/.test(G))G=G.replace(/^(\w)(\w)(\w)$/,'$1$1$2$2$3$3')
this.red=parseInt(G.substr(0,2),16)
this.green=parseInt(G.substr(2,2),16)
this.blue=parseInt(G.substr(4,2),16)}
function A(G){if('red' in G&&'green' in G&&'blue' in G){this.red=G.red
this.green=G.green
this.blue=G.blue
this.alpha=G.alpha}
else if('h' in G&&'s' in G&&'l' in G){C.call(this,G)}
else if('h' in G&&'s' in G&&'v' in G){F.call(this,G)}}
function B(G){G=G.replace(/[A-Za-z]+|\(|\)/g,'').replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var H=G.split(' '),I={h:(parseFloat(H[0])<0)?(360+parseFloat(H[0])%360):parseFloat(H[0])%360,s:(H[1].indexOf('%')<0)?parseFloat(H[1]):parseInt(H[1],10)/100,l:(H[2].indexOf('%')<0)?parseFloat(H[2]):parseInt(H[2],10)/100}
C.call(this,I)}
function C(G){var H,I=G.h,J=G.s,K=G.l,L=(1-Math.abs(2*K-1))*J,M=I/60,N=L*(1-Math.abs(M%2-1)),O=K-0.5*L
switch(Math.floor(M)){case 0:H=[L,N,0]
break
case 1:H=[N,L,0]
break
case 2:H=[0,L,N]
break
case 3:H=[0,N,L]
break
case 4:H=[N,0,L]
break
case 5:H=[L,0,N]
break}
this.red=Math.round(255*(H[0]+O))
this.green=Math.round(255*(H[1]+O))
this.blue=Math.round(255*(H[2]+O))}
function D(G){G=G.replace(/[A-Za-z(,]+/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var H=G.split(' ')
this.red=parseInt(H[0],10)
this.green=parseInt(H[1],10)
this.blue=parseInt(H[2],10)
this.alpha=parseFloat(H[3])}
function E(G){G=G.replace(/[A-Za-z%]+|\(|\)/g,'').replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var H=G.split(' '),I={h:(parseFloat(H[0])<0)?(360+parseFloat(H[0]))%360:parseFloat(H[0])%360,s:(H[1].indexOf('%')<0)?parseFloat(H[1]):parseInt(H[1],10)/100,v:(H[2].indexOf('%')<0)?parseFloat(H[2]):parseInt(H[2],10)/100}
F.call(this,I)}
function F(G){var H,I=G.h,J=G.s,K=G.v,L=K*J,M=I/60,N=L*(1-Math.abs(M%2-1)),O=K-L
switch(Math.floor(M)){case 0:H=[L,N,0]
break
case 1:H=[N,L,0]
break
case 2:H=[0,L,N]
break
case 3:H=[0,N,L]
break
case 4:H=[N,0,L]
break
case 5:H=[L,0,N]
break}
this.red=Math.round(255*(H[0]+O))
this.green=Math.round(255*(H[1]+O))
this.blue=Math.round(255*(H[2]+O))}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_Color"].join('')
y.prototype.__jx__fqname="meshim_common_Color"}
return y})()
b.__$$__jx_io_socket_StreamingHTMLFile=(function(){var x=q.isIE&&y
y.protocol='shtmlf'
function y(A){var B=this,C=new s(!0),D,E
D=new window.ActiveXObject('htmlfile')
D.open()
D.close()
E=D.createElement('iframe')
D.body.appendChild(E)
C.on('success',function(){B.ondrain&&B.ondrain()})
C.on('error',function(){B.abort()})
this.sender=C
this.htmlfile=D
this.remote_frame=E
this.url='https://'+A
r.window.on('unload',this.unload=function(){B.abort()})
this.connect()}
y.prototype.connect=function(){var A=this.remote_frame,B,C,D=this,E,F=200
this.timer=setTimeout(G,250)
function G(){try {B=A.contentWindow.frames[0]}catch(J){return D.abort()}
if(!B){D.timer=setTimeout(G,Math.min(800,F*=1.3))
return}
try {B.name
D.timer=setTimeout(G,Math.min(800,F*=1.3))
return}catch(J){;}
B.location.href='about:blank'
if(q.isIE<7)D.timer=setTimeout(I,20)
else B.onload=I}
var H=0
function I(){try {C=B.name}catch(L){if(!(H++%10))B.location.href='about:blank'
D.timer=setTimeout(I,20)
return}
H=0
if(C){C=C.split('\n\n')
!E&&D.onopen&&D.onopen()
E=+new Date()
for(var J=0;J<C.length-1;J++){var K=C[J]
if(K=='abort')return D.abort()
else D.onmessage&&D.onmessage(K,E)}
try {B.name=''
B.onload=null}catch(L){D.abort()}}
D.timer=setTimeout(G,F=200)}
z('SHF connecting to: '+this.url)
A.src=this.url+['c',+new Date()].join('/')}
y.prototype.send=function(A){var B=this.url+['d',+new Date(),window.encodeURIComponent(A)].join('/')
this.sender.load(B)
return !1}
y.prototype.abort=function(A){if(this._abort)return
this._abort=!0
z(A)
this.remote_frame.onload=this.remote_frame.onerror=null
this.htmlfile.open()
this.htmlfile.close()
this.sender.destroy()
r.window.un('unload',this.unload)
this.sender=this.htmlfile=this.remote_frame=this.unload=null
clearTimeout(this.timer)
this.onclose&&this.onclose(A)
window.CollectGarbage()}
var z=function(){}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_StreamingHTMLFile"].join('')
x.prototype.__jx__fqname="jx_io_socket_StreamingHTMLFile"}
return x})()
b.__$$__jx_io_socket_StreamingPostMessage=(function(){var x=window.postMessage?!q.isAndroid&&y:null
y.protocol='spm'
function y(B){var C=this,D,E,F=this.iframe=z('iframe')
this.url='https://'+B
F.src=this.src=D=this.url+['c',+new Date()].join('/')
E=D.match(/https?:\/\/[^\/]+/)[0]
F.onload=function(I){C.abort(I)}
document.body.insertBefore(F,document.body.firstChild)
A('SPM connecting to: '+this.url)
window.addEventListener('message',H,!1)
this.remove_listeners=function(){window.removeEventListener('message',H,!1)}
var G
function H(I){!G&&C.onopen&&C.onopen()
G=+new Date()
if(I.origin!=E)return
if(I.data=='event-stream')F.onload=null
else C.onmessage&&C.onmessage(I.data,G)}}
y.prototype.send=function(B){this.iframe.contentWindow.postMessage(B,this.src)
return !0}
y.prototype.abort=function(B){if(this._abort)return
this._abort=!0
A(B)
this.iframe&&document.body.removeChild(this.iframe)
this.onclose&&this.onclose(B)
this.remove_listeners()
this.iframe=this.remove_listeners=null}
function z(B){var C=document.createElement(B),D=C.style
D.position='absolute'
D.width=D.height=0
D.overflow='hidden'
return C}
var A=function(){}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_StreamingPostMessage"].join('')
x.prototype.__jx__fqname="jx_io_socket_StreamingPostMessage"}
return x})()
b.__$$__jx_io_socket_ChunkedXHR=(function(){var x=q.isIE?window.XDomainRequest:!q.isOpera&&!q.isAndroid&&window.XMLHttpRequest,y=x?A:null,z=q.isIE?'//':'https://'
A.protocol='cxhr'
function A(C){var D=this.xhr=new x(),E=this,F='',G=0,H
this.url=z+C
D.open('GET',this.url+['c',+new Date()].join('/'),!0)
D.onerror=function(J){E.abort(J)}
if(q.isIE){D.onprogress=function(){I(+new Date())}
D.onload=function(){E.abort('close')}}
else{D.onreadystatechange=function(){switch(D.readyState){case 3:I(+new Date())
break
case 4:E.abort('close')
break}}}
B('CXHR connecting to: '+this.url)
D.send()
function I(J){B('extracting data')
!H&&E.onopen&&E.onopen()
H=J
F+=D.responseText.substr(G)
G=D.responseText.length
F=F.split('\n\n')
for(var K=0;K<F.length-1;K++)E.onmessage&&E.onmessage(F[K],H)
F=F[F.length-1]
if(G>1*1024*1024&&!F.length||G>4*1024*1024)E.abort()}}
A.prototype.send=function(C){var D=this.url+['d',+new Date()].join('/'),E=new x(),F=this,G
E.open('POST',D,!0)
E.send(C)
if(q.isIE){E.onerror=H
E.onload=I}
else{E.onreadystatechange=function(){if(E.readyState!=4)return
if(E.status!=200)H()
I()}}
G=setTimeout(H,5000)
function H(){F.abort('send failed')}
function I(){F.xhr_sender=null
clearTimeout(G)
F.ondrain&&F.ondrain()}
this.xhr_sender=E
return !1}
A.prototype.abort=function(C){if(this._abort)return
this._abort=!0
B(C)
this.xhr&&this.xhr.abort()
this.xhr_sender&&this.xhr_sender.abort()
this.onclose&&this.onclose(C)
this.onerror=this.onload=this.onprogress=this.onreadystatechange=this.xhr=this.xhr_sender=null}
var B=function(){}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_io_socket_ChunkedXHR"].join('')
y.prototype.__jx__fqname="jx_io_socket_ChunkedXHR"}
return y})()
b.__$$__meshim_common_SvgCanvas=(function(){function x(y,z,A,B,C){z=z||w.generateID()
var D=y.ownerDocument,E
E=D.createElementNS("http://www.w3.org/2000/svg",'svg')
E.vectorType='svg'
w.extend(E)
r.extend(E)
w.set(z,E)
var F=!1
E.appendToParent=function(G){if(!w.hasParentNode(E))w.appendChild(y,E)
if(G&&!F){if(y.appendToParent)y.appendToParent(!0)
F=!0}}
E.setClass=function(G){E.setAttribute('class',G)
return E}
E.addClass=function(G){E.setAttribute('class',E.getAttribute('class')+' '+G)
return E}
E.removeClass=function(G){var H=E.getAttribute('class'),I=new RegExp('\\b'+G+'\\b','g')
H.replace(I,'')
E.setAttribute('class',H)
return E}
E.setViewBox=function(G){E.setAttribute('viewBox',G)
return E}
E.setStyle(A)
E.setAttributes(C)
w.addChildren(E,B)
E.appendToParent()
return E}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_SvgCanvas"].join('')
x.prototype.__jx__fqname="meshim_common_SvgCanvas"}
return x})()
b.__$$__meshim_widget_controllers_GoogleAnalytics=(function(){var x=(function(){var y='Zopim Livechat',z,A,B,C,D={OLD:'ga.js',NEW:'analytics.js'}
function E(){if(z||A)return !0
var J,K=window[window['GoogleAnalyticsObject']||'ga']
if(typeof K=='function'){A=K
J=!0}
if(window._gaq&&window._gat){z=window._gaq
B=window._gat
J=!0}
return J}
function F(J){if(J==D.NEW&&A){if(typeof A.getAll=='function'){return A.getAll()}}
else if(J==D.OLD&&B){if(typeof B._getTrackers=='function'){return B._getTrackers()}
else if(typeof B._getTrackerByName=='function'){return [B._getTrackerByName()]}}
return []}
function G(J,K,L){if(!E()||!J)return
if(A)H(J,K,L)
if(z)I(J,K,L)}
function H(J,K,L){C=F(D.NEW)
if(C.length){for(var M=0,N=C.length;M<N;M++){if(typeof C[M].send=='function'){if(K)C[M].send('event',L||y,J,K)
else C[M].send('event',L||y,J)}}}
else{if(K)A('send','event',L||y,J,K)
else A('send','event',L||y,J)}}
function I(J,K,L){C=F(D.OLD)
z.push(function(){for(var M=0,N=C.length;M<N;M++){if(typeof C[M]._trackEvent!='function')continue
if(K)C[M]._trackEvent(L||y,J,K)
else C[M]._trackEvent(L||y,J)}})}
return {trackEvent:G}})()
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_GoogleAnalytics"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_GoogleAnalytics"}
return x})()
b.__$$__meshim_widget_themes_Overrides=(function(){var x={popout:{name$string:'simple'},mobile:{name$string:'simple',chat_button:{display_status$bool:!1}}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Overrides"].join('')
x.prototype.__jx__fqname="meshim_widget_themes_Overrides"}
return x})()
b.__$$__jx_io_Form=(function(){var x=(q.isIE6||q.isIE7||q.isIE8)?B:A
x.get=z
x.post=y
function y(C,D,E){if(h(D))E=D,D=null
D||(D={})
x('POST',C,D,E)}
function z(C,D,E){if(h(D))E=D,D=null
D||(D={})
x('GET',C,D,E)}
function A(C,D,E,F){var G='form'+~~(100000*Math.random()),H,I,J,K=E.timeout||10000,L=document.createElement('form'),M=document.createElement('iframe')
L.method=C
L.action=D
M.style.display='none'
if(E.params){for(I in E.params)if(E.params.hasOwnProperty(I)){J=document.createElement('input')
J.name=I
J.value=E.params[I]
L.appendChild(J)}}
document.body.appendChild(L)
document.body.appendChild(M)
L.target=M.contentWindow.name=G
l(function(){L.submit()
document.body.removeChild(L)
J=L=null
M.onload=function(){M.onload=null
M.contentWindow.location.href='about:blank'
M.onload=function(){M.onload=null
clearTimeout(H)
F&&F(null,M.contentWindow.name)
document.body.removeChild(M)
M=null}}})
H=setTimeout(function(){F&&F('timeout')
document.body.removeChild(M)
M=null},K)}
function B(C,D,E,F){var G=document
if(window.ActiveXObject)try {G=new window.ActiveXObject('htmlfile')
G.open(),G.close()}catch(Q){;}
var H='form'+~~(100000*Math.random()),I,J,K,L,M=E.timeout||10000,N=G.createElement('<form target="'+H+'"/>'),O=G.createElement('<iframe name="'+H+'"/>')
N.method=C
N.action=D
O.style.display='none'
if(E.params){for(K in E.params)if(E.params.hasOwnProperty(K)){L=G.createElement('<input name="'+K+'"/>')
L.value=E.params[K]
N.appendChild(L)}}
G.body.appendChild(N)
G.body.appendChild(O)
N.submit()
G.body.removeChild(N)
L=N=null
J=setTimeout(P,100)
function P(){if(!O.contentWindow.frames.length){J=setTimeout(P,100)
return}
O.contentWindow.location.href='about:blank'
clearTimeout(I)
setTimeout(function(){F&&F(null,O.contentWindow.name)
G.body.removeChild(O)
G=O=null},0)}
I=setTimeout(function(){F&&F('timeout')
clearTimeout(J)
G.body.removeChild(O)
G=O=null},M)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_Form"].join('')
x.prototype.__jx__fqname="jx_io_Form"}
return x})()
b.__$$__jx_data_JSON=(function(){var x=(!k(window)&&window.JSON)||{parse:M,stringify:C}
x={parse:M,stringify:C}
var y=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,z={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','\\':'\\\\','"':'\\"'}
function A(N){return '"'+N.replace(y,B)+'"'}
function B(N){return z[N]||'\\u'+('0000'+N.charCodeAt(0).toString(16)).slice(-4)}
function C(N){switch(typeof N){case 'string':return A(N)
case 'number':return isFinite(N)?N.toString():'null'
case 'boolean':return String(N)
case 'object':if(!N)return 'null'
var O=[],P,Q
if(g(N)){for(P=0,Q=N.length;P<Q;P++)O[P]=C(N[P])||'null'
return '['+O.join(',')+']'}
var R,S=[],T
for(R in N)if(N.hasOwnProperty(R))S.push(R)
S.sort()
for(P=0,Q=S.length;P<Q;P++){R=S[P]
T=C(N[R])
if(T)O.push(A(R)+':'+T)}
if(O.length)return '{'+O.join(',')+'}'}}
var D='(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)',E='(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]'+'|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',F='(?:\"'+E+'*\")',G=new RegExp('(?:false|true|null|[\\{\\}\\[\\]]'+'|'+D+'|'+F+')','g'),H=new RegExp('\\\\(?:([^u])|u(.{4}))','g'),I={'"':'"','/':'/','\\':'\\','b':'\b','f':'\f','n':'\n','r':'\r','t':'\t'},J=new String(''),K='\\'
function L(N,O,P){return O?I[O]:String.fromCharCode(parseInt(P,16))}
function M(N){var O=N.match(G),P=O.length,Q=O[0],R,S,T,U,V
if(Q=='{')R={},V=1
else if(Q=='[')R=[],V=1
else R=[],V=0,S=!0
var W=[R]
for(P=O.length;V<P;++V){Q=O[V]
switch(Q.charCodeAt(0)){case 91:U=W[0]
W.unshift(U[T||U.length]=[])
T=void(0)
break
case 93:W.shift()
break
case 123:U=W[0]
W.unshift(U[T||U.length]={})
T=void(0)
break
case 125:W.shift()
break
case 102:U=W[0]
U[T||U.length]=!1
T=void(0)
break
case 110:U=W[0]
U[T||U.length]=null
T=void(0)
break
case 116:U=W[0]
U[T||U.length]=!0
T=void(0)
break
case 34:Q=Q.substring(1,Q.length-1)
if(Q.indexOf(K)!==-1)Q=Q.replace(H,L)
U=W[0]
if(T==void(0)){if(U instanceof Array)T=U.length
else{T=Q||J
break}}
U[T]=Q
T=void(0)
break
default:U=W[0]
U[T||U.length]=+(Q)
T=void(0)
break}}
if(S){if(W.length==1)return R[0]}
else if(!W.length)return R
throw 'error'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_data_JSON"].join('')
x.prototype.__jx__fqname="jx_data_JSON"}
return x})()
b.__$$__jx_core_ObjectUtil=(function(){var x=function(C,D){return C===D||C&&D&&typeof C=='object'&&typeof D=='object'&&y(C,D)},y=function(C,D){var E
for(E in C)if(C.hasOwnProperty(E))if(!x(C[E],D[E]))return !1
for(E in D)if(D.hasOwnProperty(E))if(!x(C[E],D[E]))return !1
return !0},z=function(C){if(typeof (C)!='object'||!C)return C
var D={}
for(var E in C)if(C.hasOwnProperty(E))D[E]=z(C[E])
return D},A=function(C){if(C){for(var D=1,E=arguments.length;D<E;D++){var F=arguments[D]
if(!F)continue
for(var G in F)if(F.hasOwnProperty(G)){C[G]=F[G]}}}
return C},B={equal:x,clone:z,extend:A}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_core_ObjectUtil"].join('')
B.prototype.__jx__fqname="jx_core_ObjectUtil"}
return B})()
b.__$$__meshim_common_System=(function(){var x={info:{gitCommit:c.git_commit,buildNumber:c.build_number,userAgent:window.navigator.userAgent,platform:window.navigator.platform,language:q.language,browser:q.browser,version:q.version,javaVersion:q.hasJava,flashVersion:q.hasFlash,url:window.location.toString()}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_System"].join('')
x.prototype.__jx__fqname="meshim_common_System"}
return x})()
b.__$$__jx_data_DataNode=(function(){function x(z,A){this.name=z
this.leaf=/\$[a-z]+$/.test(z)
this.parentNode=A
this.listeners_value=[]
this.listeners_write=[]
if(!this.leaf){this.listeners_keys=[]
this.childNodes={}
this.keys={}}}
x.prototype.fqname=function(){return y(this.path())}
x.prototype.path=function(){var z=this,A=[this.name]
while((z=z.parentNode))A.unshift(z.name)
return A}
x.prototype.descend=function(z){var A=this,B,C,D
if(typeof z=='string')z=z.split('.')
for(C=0,D=z.length;C<D;C++){B=z[C]
if(!(B in A.childNodes))A.childNodes[B]=new x(B,A)
A=A.childNodes[B]}
return A}
x.prototype.$$=x.prototype.descend
x.prototype.$=function(z){if(!(z in this.childNodes))return (this.childNodes[z]=new x(z,this))
return this.childNodes[z]}
x.prototype.update=function(z,A,B){var C
if(this.leaf){this.value=z
this.notifyListeners(z,A,B)}
else{if(z==null){for(C in this.childNodes)if(this.childNodes.hasOwnProperty(C))this.childNodes[C].update(null,!0,B)}
else{for(C in z)if(z.hasOwnProperty(C))this.$(C).update(z[C],!0,B)}
this.notifyListeners(z,A,B)}}
x.prototype.write=function(z,A){this.update(z,A||!1,{path:this.path(),value:z})}
x.prototype.bindWrite=function(z){this.listeners_write.push(z)}
x.prototype.bindValue=function(z){this.listeners_value.push(z)
try {z.call(this,this.getValue())}catch(A){r.fire('error',A)}}
x.prototype.bindKeys=function(z){if(this.leaf){return}
this.listeners_keys.push(z)
try {z.call(this,this.getKeys(),[])}catch(A){r.fire('error',A)}}
x.prototype.unbindValue=function(z){for(var A=this.listeners_value.length;A--;)if(this.listeners_value[A]==z){this.listeners_value.splice(A,1)
return}}
x.prototype.unbindKeys=function(z){if(this.leaf)return
for(var A=this.listeners_keys.length;A--;)if(this.listeners_keys[A]==z){this.listeners_keys.splice(A,1)
return}}
x.prototype.on=function(z,A){switch(z){case 'value':this.bindValue(A)
break
case 'keys':this.bindKeys(A)
break}}
x.prototype.un=function(z,A){switch(z){case 'value':this.unbindValue(A)
break
case 'keys':this.unbindKeys(A)
break}}
x.prototype.addListener=function(z,A){this.listeners[z].push(A)}
x.prototype.removeListener=function(z,A){var B=this.listeners[z]
for(var C=B.length;C--;)if(B[C]==A)B.splice(C,1)}
x.prototype.notifyListeners=function(z,A,B){for(var C=0;C<this.listeners_value.length;C++)try {this.listeners_value[C].call(this,z)}catch(H){r.fire('error',H)}
if(B){for(C=0;C<this.listeners_write.length;C++)try {this.listeners_write[C].call(this,B)}catch(H){r.fire('error',H)}}
if(this.leaf)return
var D=[],E=[],F
if(z){for(F in z)if(z.hasOwnProperty(F)){if(z[F]!==null){if(!(F in this.keys)){this.keys[F]=1
D.push(F)}}
else{if(F in this.keys){delete this.keys[F]
E.push(F)}}}}
else{for(F in this.keys)if(this.keys.hasOwnProperty(F)){delete this.keys[F]
E.push(F)}}
for(C=0;C<this.listeners_keys.length;C++)try {this.listeners_keys[C].call(this,D,E)}catch(H){r.fire('error',H)}
if(!A&&this.parentNode){var G={}
G[this.name]=z
this.parentNode.notifyListeners(G,A,B)}}
x.prototype.getValue=function(z){if(z)return this.descend(z).getValue()
if(this.leaf)return this.value
var A,B={},C
for(var D in this.childNodes)if(this.childNodes.hasOwnProperty(D)){if((C=this.childNodes[D].getValue())!=null){B[D]=C
A=!0}}
return A?B:null}
x.prototype.getKeys=function(){if(this.leaf){return null}
var z=[]
for(var A in this.keys)if(this.keys.hasOwnProperty(A))z.push(A)
return z}
function y(z){var A=''
for(var B=0;B<z.length;B++){if(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(z[B]))A+='.'+z[B]
else A+='['+JSON.stringify(z[B])+']'}
return A.substr(1)}
if(typeof exports!='undefined')exports.DataNode=x
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_data_DataNode"].join('')
x.prototype.__jx__fqname="jx_data_DataNode"}
return x})()
b.__$$__jx_language_Detect=(function(){var x={guess:F},y=[],z={en:[/\b(up|me|submit|offers?|about|rights?|more|contact|all|downloads?|how|search|to|do|i[nst]?|your?|that|was|one?|are|with|[bw]e|have|this|f?or|had|by|[hn]ot?|[bo]ut|so|some|what|can|[tw]here|why|other|over|die|ten)\b/ig,4,/\b(inn|set|end|about|pro|the|of|from|and|a|as|at)\b/ig,6],cs:[/[\u00e1\u010d\u010f\u00e9\u011b\u00ed\u0148\u00f3\u0159\u0161\u0165\u00fa\u016f\u00fd\u017e]/gi,5,/\b(by|do|to|[aikosvz])\b/ig,3,/\b(na|za|se|je|\u017ee|ve|jako|jsem|pro|tak|po|u\u017e|jsou|byl)\b/ig,6],de:[/[\u00df]/g,10,/[\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc]/g,7,/\b(de[mrs]|vo[nm]|zu[mr]?|da[s\u00df]?|eine[mnrs]?|a[lu]s|wir|[sw]ie|n[ao]ch|vor[ms]?|(\u00fcb|od|ab)er|und|im|mit|sich|auf|f\u00fcr|nicht|auch|es|bei|nur|bis|mehr|durch)\b/ig,6],es:[/[\u00f1]/g,10,/[\xE1\xE9\xED\xF3\xFA]/ig,6,/\b(que|nuestro|ingresar|inicio|qu[e\u00e9]|[dt]e|ser?|[ms]i|l?a|e[lns]|y|tu|los?|una?|por|con|para|est(\u00e1|ar))\b/ig,6],fr:[/[\u0153]/gi,15,/[\u00e0\u00e2\u00e7\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00fb\u00f9\u00fc\u00ff]/ig,7,/\b(son)\b/ig,4,/\b(en)\b/ig,5,/\b([ado]u|aux?|[do]u|la|[cdls]es|es?t|une?|ne|qu[ei]|sur|dans|pa[rs]|il|sont|avec|voir)\b/ig,6],hr:[/[\u010d\u0107\u0111\u0161\u017e]/gi,10,/d\u017e|lj|nj/gi,3,/\b(ali|ja|je|mene|na|ne|od|ovo|se|sve|ti|u|za|znati)\b/ig,6],ms:[/\b(and)\b/ig,4,/\b((se)?(biji|buah|orang)|ada|anda|atau|boleh|bukan|dalam|dan|dari|di|ini|kami|ke|lagi|sila|tidak|tinggi|telah|untuk)\b/ig,6],da:[/[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g,10,/\b(de)\b/ig,5,/\b(ind|l\u00e6s|nyheder|[vt]il|s?om|og|[mv]ed|kan|har|var|tager|af|d?et|de[tn]{2}e|skal|den|set|noget|nogle|mange|hadde|eller|efter|end|blive|er|sekund|viser|ud|(a|vi|sku)lle)\b/ig,6],nb:[/[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g,10,/\b(de)\b/ig,5,/\b(passord|nyheter|inn|[vt]il|s?om|og|[mv]ed|kan|[htv]ar|av|d?et|de[tn]{2}e|skal|se(g|tt)|noen?|mange|hadde|e[lt]{2}er|enn|blir?|ble|andre|viser|ut|(a|vi|sku)lle)\b/ig,6],nl:[/\b(in|die)\b/ig,4,/\b(de|en)\b/ig,5,/\b(het|dat|van|ik|te|een|hij|niet|zijn)\b/ig,6],pt:[/[\u00e1\u00e2\u00e3\u00e0\u00e7\u00e9\u00ea\u00ed\u00f3\u00f4\u00f5\u00fa]/ig,7,/\b(gr\u00e1fico|ao|como|das?|de|dos|ele|em?|mai?s|na|n\u00e3o|os?|para|por|que|se|uma?)\b/ig,6],sk:[/\u00e1\u00e4\u010d\u010f\u00e9\u00ed\u013e\u013a\u0148\u00f3\u00f4\u0155\u0161\u0165\u00fa\u00fd\u017e/ig,10,/dz|d\u017e/ig,5,/\b(ten|to|do|so)\b/ig,4,/\b(ja|na|za|c\u030co|t\u00e1|po|vo|zo|n\u00e1[s\u030cs])\b/ig,6],tr:[/[\u00c7\u011e\u0130\u00d6\u015e\u00dc\u00e7\u011f\u0131\u00f6\u015f\u00fc]/g,7,/\b(son)\b/ig,4,/\b(formu|bir|ve|ne|bu|i\u00e7in|o|b?en|\u00e7ok|(al|\u00e7\u0131k|ol|yap)mak|(de|gel|git|g\u00f6r|iste|ver)mek|gibi|daha|kendi|ile|ama|sonra|kadar|yer|insan|de\u011fil|y\u0131l|g\u00fcn|biz)\b/ig,6],vi:[/[\u00e0\u1ea3\u00e3\u00e1\u1ea1\u0103\u1eb1\u1eb3\u1eb5\u1eaf\u1eb7\u00e2\u1ea7\u1ea9\u1eab\u1ea5\u1ead\u0111\u00e8\u1ebb\u1ebd\u00e9\u1eb9\u00ea\u1ec1\u1ec3\u1ec5\u1ebf\u1ec7\u00ec\u1ec9\u0129\u00ed\u1ecb\u00f2\u1ecf\u00f5\u00f3\u1ecd\u00f4\u1ed3\u1ed5\u1ed7\u1ed1\u1ed9\u01a1\u1edd\u1edf\u1ee1\u1edb\u1ee3\u00f9\u1ee7\u0169\u00fa\u1ee5\u01b0\u1eeb\u1eed\u1eef\u1ee9\u1ef1\u1ef3\u1ef7\u1ef9\u00fd\u1ef5]/ig,8,/\b(v\u00e0|c\u00e1c|c\u1ee7a|c\u00f3|\u0111\u0103ng|\u0111\u00e2y|ho\u1eb7c|kh\u1ea9u|k\u00fd|m\u1ed9t|ng\u00e0y|l\u00e0|trong|cho)\b/ig,6],ja:[/[\u3041-\u30ff]/g,10],ko:[/[\uAC00-\uD7A3\u1100-\u11FF\u3131-\u318E\uFFA1-\uFFDC]/g,10],th:[/[\u0E00-\u0E7F]/g,10],zh_CN:[/[\u4e00-\u9fb4]/g,1,/[\u7684\u662f\u8fd9\u6709\u5728\u4e0d\u4e86\u6765\u4e2a\u5230\u4e3a\u548c\u9053\u4e5f\u65f6\u5f97\u5c31\u90a3\u8981\u4ee5\u7740\u53bb\u4e4b\u8fc7\u5bb6\u5bf9\u53ef\u91cc\u540e\u4e48\u591a\u800c\u80fd\u90fd\u7136\u6ca1\u8d77\u8fd8]/g,7],ru:[/[\u0410-\u042f\u0430-\u044f\u0401\u0451]/g,3],ar:[/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/g,1]}
for(var A in z)if(z.hasOwnProperty(A))y.push(A)
function B(G,H){var I=H.match(G)
return I?I.length:0}
function C(G,H,I,J){return Math.pow(B(G,H)/I,1/J)}
function D(G){var H=(1-G[0]),I
for(I=1;I<G.length;I++)H*=(1-G[I])
return 1-H}
function E(G,H,I){if(!I)I=B(/ /g,H)
var J=H.length,K,L,M,N,O=[]
for(var P=0;P<z[G].length;P+=2){K=z[G][P]
L=z[G][P+1]
M=(K.toString().substr(1,2)=='\\\\b')?I:J
N=C(K,H,M,L)
O.push(N)}
if(G=='en')O.push(0.6/H.length)
return D(O)}
function F(G,H){var I=document.body.getAttribute('lang')||document.documentElement.getAttribute('lang')
if(I){return I}
if(!G)G=y
if(!H)H=document.body.innerHTML.replace(/\s+/g,' ').replace(/<script[^>]*?>.*?<\/script>/gi,' ').replace(/<style[^>]*?>.*?<\/style>/gi,' ').replace(/<!--.*?-->/g,' ').replace(/<\/?[^>]+?>/g,' ').replace(/[-_a-z0-9.@]+[.@][-_a-z0-9.@]+/gi,'').replace(/[\s\d!'#$%&'()*+,-.\/:;<=>?@^_{|}~\[\]\/]+/g,' ')
H=H.replace(/\s+/g,' ')
var J=B(/ +/g,H),K=[],L,M
for(L=0;L<G.length;L++)K.push([G[L],E(G[L],H,J)])
K.sort(function(N,O){return O[1]-N[1]})
M=K[0][0]
M.scores=K
window.__$z_results=J+' '+H.length+' '+(H.length/J)+'\n'+K.join('\n')
window.__$z_innerText=H
return M}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_language_Detect"].join('')
x.prototype.__jx__fqname="jx_language_Detect"}
return x})()
b.__$$__meshim_config_geo_WidgetMediatorsAccessDefinition=(function(){var x={CLUSTERS:{US:['us08','us10','us12','us14','us16','us18','us20','us22','us24','us26','us28'],DE:['de04','de06','de08','de10','de12','ie02','ie04','ie06','ie08'],SG:['sg06','sg08','sg10','sg12','sg14','sg16'],JP:['jp02','jp04'],AU:['au02'],BR:['br02','br04','br06']},FALLBACKS:{US:['DE'],DE:['US'],SG:['US'],JP:['US'],AU:['SG','US'],BR:['US']},NEAR_MAP:{AL:'DE',AD:'DE',AM:'DE',AT:'DE',BY:'DE',BE:'DE',BA:'DE',BG:'DE',CH:'DE',CY:'DE',CZ:'DE',DE:'DE',DK:'DE',EE:'DE',ES:'DE',EU:'DE',FO:'DE',FI:'DE',FR:'DE',GB:'DE',GE:'DE',GI:'DE',GR:'DE',HU:'DE',HR:'DE',IE:'DE',IM:'DE',IS:'DE',IT:'DE',LT:'DE',LU:'DE',LV:'DE',MC:'DE',MK:'DE',MT:'DE',NO:'DE',NL:'DE',PO:'DE',PT:'DE',RO:'DE',SE:'DE',SI:'DE',SK:'DE',SM:'DE',TR:'DE',UA:'DE',VA:'DE',ZA:'DE',AP:'SG',BD:'SG',BN:'SG',CN:'SG',ID:'SG',IN:'SG',LA:'SG',KH:'SG',LK:'SG',MM:'SG',MY:'SG',SG:'SG',PK:'SG',TH:'SG',VN:'SG',AU:'AU',NZ:'AU',HK:'JP',KR:'JP',JP:'JP',PH:'JP',RU:'JP',TW:'JP',AR:'BR',BO:'BR',BR:'BR',CL:'BR',PE:'BR',PY:'BR',UY:'BR',DEFAULT:'US'}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_config_geo_WidgetMediatorsAccessDefinition"].join('')
x.prototype.__jx__fqname="meshim_config_geo_WidgetMediatorsAccessDefinition"}
return x})()
b.__$$__meshim_common_QueryString=(function(){var x=/^(1|on|true)$/i,y={'boolean':!1,'integer':0,'float':0.0,'string':''},z=null
function A(D){if(this instanceof A){if(D){return A.parseQuery(D)}
else{this.store={}}}
else{if(!z)A._initSingleton(window)
return z}}
A._initSingleton=function(D){z=new A(D.location.search)}
A.buildQuery=function(D){var E=[]
for(var F in D)if(D.hasOwnProperty(F)){E.push(window.encodeURIComponent(F)+'='+window.encodeURIComponent(D[F]+''))}
return E.join('&')}
A.parseQuery=function(D){var E=new A()
D=D.replace(/^\?|\/+$/g,'')
var F,G,H=D.split('&')
for(var I=0,J=H.length;I<J;I++){var K=H[I]
if(!K.length)continue
var L=K.indexOf('=')
if(L<=-1){F=K
G='1'}
else{F=K.slice(0,L)
G=K.slice(L+1)}
E.add(window.decodeURIComponent(F),window.decodeURIComponent(G))}
return E}
var B=A.prototype
B.add=function(D,E){if(!this.has(D))this.store[D]=[E]
else this.store[D].push(E)}
B.has=function(D){return (D in this.store)}
B.getLast=function(D,E,F){if(!this.has(D))return C(a,E,F)
var G=this.store[D]
return C(G[G.length-1],E,F)}
B.getFirst=function(D,E,F){return this.getAt(D,0,E,F)}
B.getAt=function(D,E,F,G){return C(this.has(D)?this.store[D][E]:a,F,G)}
B.getRaw=function(D){if(!this.has(D))return a
else return this.store[D].concat()}
B.get=B.getLast
B.toString=function(){return A.buildQuery(this.store)}
function C(D,E,F){if(E===a&&F===a)return D
if(E===a)E='string'
if(!(E in y))throw ('invalid type requested')
if(D===a){if(F!==a)return F
return y[E]}
if(E==='boolean')return x.test(D)
if(E==='integer')return parseInt(D,10)
if(E==='float')return parseFloat(D)
return D}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_common_QueryString"].join('')
A.prototype.__jx__fqname="meshim_common_QueryString"}
return A})()
b.__$$__meshim_widget_controllers_DefaultDataNode=(function(){var x={"livechat":{"timestamp$int":+new Date(),"settings":{"behavior":{"do_not_display$bool":!1},"theme":{"name$string":"simple","message_type$string":"bubble_avatar","colors":{"placeholder$string":"_"},"chat_button":{"position$string":"br","position_mobile$string":"br"},"chat_window":{"position$string":"br","size$string":"medium","hide_profile_card$bool":!1,"use_banner$bool":!0,"title_bar":{"hide_minimize$bool":!1,"hide_popout$bool":!1}},"branding":{"type$string":"icon_font_zopim"}},"greetings":{"online$string":v(2),"offline$string":v(3)},"banner":{"enabled$bool":!0,"layout$string":"image_right","text$string":v(2),"image_path$string":"","image_data$string":""},"chat_button":{"hide_when_offline$bool":!1},"chat_window":{"title_bar":{"title$string":v(4),"status_messages":{"online$string":v(5),"away$string":v(6),"offline$string":v(7)}}},"login":{"allowed_types":{"email$bool":!0,"facebook$bool":!0,"twitter$bool":!1,"google$bool":!0},"phone_display$bool":!1,"restrict_profile$bool":!1},"concierge":{"display_name$string":v(8),"title$string":v(9),"avatar_path$string":"","avatar_data$string":"","greeting":{"enabled$bool":!1,"message$string":v(10)}},"branding":{"hide_branding$bool":!1,"hide_favicon$bool":!1,"custom_favicon_path$string":""},"language":{"language$string":"--"},"cookie_law":{"enabled$bool":!1},"sound":{"disabled$bool":!1},"popout":{"enabled$bool":!0},"rating":{"enabled$bool":!1},"end_chat_menu":{"enabled$bool":!0,"message$string":""},"emoticons":{"enabled$bool":!1},"bubble":{"enabled$bool":!0,"title$string":v(11),"text$string":v(12)},"forms":{"pre_chat_form":{"required$bool":!1,"profile_required$bool":!1,"message$string":"","form":{"0":{"name$string":"name","required$bool":0},"1":{"name$string":"email","required$bool":0},"2":{"label$string":v(13),"name$string":"department","required$bool":0,"type$string":"department"},"3":{"label$string":v(14),"name$string":"message","required$bool":0,"type$string":"textarea"},"4":{"label$string":v(15),"name$string":"phone","required$bool":0,"type$string":"text","hidden$bool":!0}}},"offline_form":{"message$string":v(16),"message_disabled$string":v(17),"post_submit_message$string":v(18),"profile_required$bool":!0,"form":{"0":{"name$string":"name","required$bool":1},"1":{"name$string":"email","required$bool":1},"2":{"label$string":v(14),"name$string":"message","required$bool":1,"type$string":"textarea"},"3":{"label$string":v(15),"name$string":"phone","required$bool":0,"type$string":"text","hidden$bool":!0}}},"post_chat_form":{"header$string":v(19),"message$string":v(20),"comments_enabled$bool":!0,"comments_messages":{"good":{"message$string":v(21),"placeholder$string":v(22)},"bad":{"message$string":v(23),"placeholder$string":v(24)}}},"card_form":{}}}}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DefaultDataNode"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_DefaultDataNode"}
return x})()
b.__$$__meshim_common_FileUtil=(function(){var x={}
x.prettySize=(function(){var y=1000,z=1024,A='B',B='iB',C=['','K','M','G','T','P'],D=[0,1,2,2,2,2]
return function E(F,G){F=Math.max(parseInt(F,10)||0,0)
G=G||{}
var H=G.base2?z:y,I
for(var J=0,K=C.length;J<K;J++){I=Math.pow(H,J)
if(F<(I*H)||C[J+1]===a){return (F/I).toFixed(D[J])+' '+C[J]+(G.suffixBase2?B:A)}}}})()
x.prettyType=(function(){var y=/^(x-|vnd\.)/i
return function z(A,B,C){C=C||window.Infinity
var D=A.split('/')[1]
D=D&&D.replace(y,'')
if(D&&D.length<C){return D.toLowerCase()}
D=B.split('.').pop()
return (D||'').toLowerCase()}})()
x.isValidType=(function(){var y=/^(application\/(vnd.|x-)?pdf|image\/(p?jpeg|gif|png)|text\/plain)$/i,z=/\.(pdf|jpe?g|gif|png|txt)$/i
return function(A,B){return (A&&y.test(A))||(B&&z.test(B))}})()
x.prettyError=(function(){var y='TOO_LARGE',z='ILLEGAL_TYPE',A='FILE_UPLOADS_TEMPORARILY_DISABLED',B=v(76),C=v(77),D=v(78),E=v(79),F
return function(G,H){switch(G){case y:F=B.replace('<size>',x.prettySize(H||5000000))
break
case z:F=C
break
case A:F=D
break
default:F=E
break}
return F}})()
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_FileUtil"].join('')
x.prototype.__jx__fqname="meshim_common_FileUtil"}
return x})()
b.__$$__meshim_common_Sanitize=(function(){var x={html:function(y){return y&&y.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_Sanitize"].join('')
x.prototype.__jx__fqname="meshim_common_Sanitize"}
return x})()
b.__$$__meshim_common_ChainedValueDataNode=(function(){var x=b.__$$__jx_data_DataNode
function y(){var B=[].slice.call(arguments)
if(B.length<1)throw 'Invalid chain: <empty>'
var C=null
if(typeof (B[B.length-1])==='string')C=B.pop()
x.call(this,'chained$value')
this._chain=B
this._default_primitive=C
this._leafNodeValueCheck=A(this._leafNodeValueCheck,this)}
var z=y.prototype=e(x.prototype)
z.bindValue=function(){if(this.listeners_value.length===0)for(var B=this._chain.length;B--;)this._chain[B].bindValue(this._leafNodeValueCheck)
x.prototype.bindValue.apply(this,arguments)}
z.unbindValue=function(){x.prototype.unbindValue.apply(this,arguments)
if(this.listeners_value.length===0)for(var B=this._chain.length;B--;)this._chain[B].unbindValue(this._leafNodeValueCheck)}
z.getChainedValue=function(){for(var B=0,C=this._chain.length;B<C;B++){var D=this._chain[B].getValue()
if(D)return D}
return this._default_primitive}
z._leafNodeValueCheck=function(){this.update(this.getChainedValue())}
function A(B,C){return function(){B.apply(C,arguments)}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_ChainedValueDataNode"].join('')
y.prototype.__jx__fqname="meshim_common_ChainedValueDataNode"}
return y})()
b.__$$__meshim_widget_controllers_DOMStorage=(function(){var x=b.__$$__jx_data_JSON,y={},z=window,A=z.document,B='localStorage',C='__storejs__',D
y.disabled=!1
y.set=function(){}
y.get=function(){}
y.remove=function(){}
y.clear=function(){}
y.transact=function(L,M,N){var O=y.get(L)
if(N==null){N=M
M=null}
if(typeof O=='undefined'){O=M||{}}
N(O)
y.set(L,O)}
y.getAll=function(){}
y.serialize=function(L){return x.stringify(L)}
y.deserialize=function(L){if(typeof L!='string'){return a}
try {return x.parse(L)}catch(M){return L||a}}
function E(){try {return (B in z&&z[B])}catch(L){return !1}}
if(E()){D=z[B]
y.set=function(L,M){if(M===a){return y.remove(L)}
D.setItem(L,y.serialize(M))
return M}
y.get=function(L){return y.deserialize(D.getItem(L))}
y.remove=function(L){D.removeItem(L)}
y.clear=function(){D.clear()}
y.getAll=function(){var L={}
for(var M=0;M<D.length;++M){var N=D.key(M)
L[N]=y.get(N)}
return L}}
else if(A.documentElement.addBehavior){var F,G
try {G=new window.ActiveXObject('htmlfile')
G.open()
G.write('<s'+'cript>document.w=window</s'+'cript><iframe src="/favicon.ico"></frame>')
G.close()
F=G.w.frames[0].document
D=F.createElement('div')}catch(L){D=A.createElement('div')
F=A.body}
function H(L){return function(){try {var M=Array.prototype.slice.call(arguments,0)
M.unshift(D)
F.appendChild(D)
D.addBehavior('#default#userData')
D.load(B)
var N=L.apply(y,M)
F.removeChild(D)
return N}catch(O){;}}}
var I=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")
function J(L){return L.replace(I,'___')}
y.set=H(function(L,M,N){M=J(M)
if(N===a){return y.remove(M)}
L.setAttribute(M,y.serialize(N))
L.save(B)
return N})
y.get=H(function(L,M){M=J(M)
return y.deserialize(L.getAttribute(M))})
y.remove=H(function(L,M){M=J(M)
L.removeAttribute(M)
L.save(B)})
y.clear=H(function(L){var M=L.XMLDocument.documentElement.attributes
L.load(B)
for(var N=0,O;O=M[N];N++){L.removeAttribute(O.name)}
L.save(B)})
y.getAll=H(function(L){var M=L.XMLDocument.documentElement.attributes,N={}
for(var O=0,P;P=M[O];++O){var Q=J(P.name)
N[P.name]=y.deserialize(L.getAttribute(Q))}
return N})}
try {y.set(C,C)
if(y.get(C)!=C){y.disabled=!0}
y.remove(C)}catch(L){y.disabled=!0}
y.enabled=!y.disabled
var K=y
if((typeof K==='function')&&K.prototype&&!K.__jx__no_fqname){K.prototype.__jx__fqname_chain=[(K.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DOMStorage"].join('')
K.prototype.__jx__fqname="meshim_widget_controllers_DOMStorage"}
return K})()
b.__$$__meshim_widget_controllers_Cookie=(function(){var x=b.__$$__jx_data_JSON,y={set:F,get:D,getJSONCookie:E,setJSONCookie:G,remove:H},z=window.encodeURIComponent,A=window.decodeURIComponent
function B(I){if(typeof I!='string'||I==='')return !1
return !0}
function C(){var I=document.cookie,J={},K,L,M,N,O
if(typeof I!=='string'||I==='')return {}
I=I.split(/;\s/g)
for(K=0,L=I.length;K<L;K++){try {M=I[K].match(/([^=]+)=/i)
if(M instanceof Array){N=A(M[1])
O=A(I[K].substr(M[1].length+1))}
else{N=A(M)
O=""}
J[N]=O}catch(P){;}
;}
return J}
function D(I){if(!B(I))return null
var J=C()
if(J[I])return J[I]
else return null}
function E(I){var J=D(I),K={}
try {K=x.parse(J)}catch(L){;}
if(!K||typeof K!='object')return {}
else return K}
function F(I,J,K){K=K||{}
var L=z(I)+'='+z(J)
if('ttl' in K){var M=new Date(),N=K.ttl*24*60*60*1000
M.setTime(M.getTime()+N)
L+='; expires='+M.toGMTString()}
if('path' in K)L+='; path='+K.path
if('domain' in K)L+='; domain='+K.domain
if(K.secure)L+='; secure'
document.cookie=L}
function G(I,J,K){if(typeof J!='object')J=={}
F(I,x.stringify(J),K)}
function H(I,J){J=J||{}
J.ttl=-1
F(I,"",J)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_Cookie"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_Cookie"}
return y})()
b.__$$__meshim_common_Graphic=(function(){var x={parseViewBox:A,parseShadow:B,detectedGraphicType:C(),getGradColors:D,parseCanvasData:I,CanvasData:J,generateVmlLinearGradient:F,generateSvgLinearGradient:G,generateCanvasGradient:Q,generate_drawing_function:H,generateRectPath:R,createVMLNode:z},y=b.__$$__meshim_common_Color
function z(V,W){if(!V._vmlstyled){var X=V.createElement('style')
X.setAttribute("type","text/css")
X.styleSheet.cssText="v\\:*{behavior:url(#default#VML); display: inline-block;} .vml{behavior:url(#default#VML); display: inline-block;}"
V.getElementsByTagName('head')[0].appendChild(X)
X=null
V._vmlstyled=!0}
return V.createElement('<'+W+' xmlns="urn:schemas-microsoft.com:vml">')}
function A(V){var W=V.split(/\s+/)
if(W.length!==4)throw ('bad viewBox: '+V)
for(var X=0;X<4;X++){W[X]=parseInt(W[X],10)
if(isNaN(W[X]))throw ('bad viewBox: '+V)}
return {x:W[0],y:W[1],width:W[2],height:W[3]}}
function B(V){var W=V.split(' ')
return {offsetX:parseInt(W[0],10),offsetY:parseInt(W[1],10),blurRadius:parseInt(W[2],10),color:W[3],opacity:parseFloat(W[4]),rgba:'rgba('+y(W[3]).toArray().join(',')+','+W[4]+')'}}
function C(){var V=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),W=document.createElement('canvas').getContext
if(W)return 'canvas'
else if(document.createElementNS&&V)return 'svg'
else if(q.isIE)return 'vml'
else return 'none'}
function D(V){var W=/from\(([^)]+\){0,1})\)/.exec(V),X=/to\(([^)]+\){0,1})\)/.exec(V),Y=[]
if(W)Y.push({stop:'0%',color:new y(W[1])})
V.replace(/color-stop\(([^)]+\){0,1})\)/g,function(Z,$$){$$=E($$)
Y.push({stop:$$.substring(0,$$.indexOf(' ')),color:new y($$.substring($$.indexOf(' ')))})})
if(X)Y.push({stop:'100%',color:new y(X[1])})
return Y}
function E(V){return V.replace(/[,\s]+/g,' ').trim()}
function F(V,W){W=E(W)
var X=W.split(' '),Y,Z,$$,$_,$a=[]
Y=X.shift()
switch(X[0]){case 'left':X.shift()
Z='270'
break
case 'top':X.shift()
Z='180'
break
case 'right':X.shift()
Z='90'
break
case 'bottom':X.shift()
Z='0'
break
default:Z=$e.apply(null,X.splice(0,4))
break}
$$=D(W)
for(var $b=0,$c=$$.length;$b<$c;$b++){$_=$$[$b]
$a.push($_.stop+' '+$_.color.toStrRGB())}
var $d=x.createVMLNode(V,'fill')
$d.className='vml'
$d.setAttribute('on','true')
$d.setAttribute('type','gradient')
$d.setAttribute('angle',Z)
$d.setAttribute('colors',$a.join(','))
$d.setAttribute('method','sigma')
if($_&&$_.color.alpha!==1){$d.setAttribute('opacity',$_.color.alpha)}
function $e($f,$g,$h,$i){for(var $j=0;$j<arguments.length;$j++)arguments[$j]=parseFloat(arguments[$j])
var $k=($i-$g)/($h-$f)
return Math.round(270-Math.atan($k)*180/Math.PI)}
return $d}
function G(V,W){W=E(W)
var X=W.split(' '),Y,Z
Y=X.shift()
switch(X[0]){case 'left':X.shift()
Z='0% 0% 100% 0%'.split(' ')
break
case 'top':X.shift()
Z='0% 0% 0% 100%'.split(' ')
break
case 'right':X.shift()
Z='100% 0% 0% 0%'.split(' ')
break
case 'bottom':X.shift()
Z='0% 100% 0% 0%'.split(' ')
break
default:Z=X.splice(0,4)}
var $$=V.createElementNS('http://www.w3.org/2000/svg','linearGradient'),$_='grad_'+new Date().getTime()+Math.round(Math.random()*1001)
$$.setAttribute('id',$_)
$$.setAttribute('x1',Z[0])
$$.setAttribute('y1',Z[1])
$$.setAttribute('x2',Z[2])
$$.setAttribute('y2',Z[3])
$$.setAttribute('gradientUnits','objectBoundingBox')
var $a=D(W),$b,$c
for(var $d=0;$d<$a.length;$d++){$b=$a[$d].split(' ')
$c=V.createElementNS('http://www.w3.org/2000/svg','stop')
$c.setAttribute('offset',$b[0])
$c.setAttribute('stop-color',$b[1])
$$.appendChild($c)}
return $$}
function H(V){V=V.replace(/[A-Za-z]/g,' $& ').replace(/,/g,' ').replace(/-/g,' -').replace(/\s+/g,' ').trim()
var W=V.split(' '),X=[0,0],Y='ctx.beginPath();',Z={M:'moveTo',L:'lineTo',C:'bezierCurveTo',Z:'closePath'}
for(var $$=0,$_=W.length;$$<$_;$$++){if(!/^[A-Za-z]/.test(W[$$])){W[$$]=parseFloat(W[$$])
if(isNaN(W[$$]))throw 'Bad path after '+W.slice(0,$$).join(' ')}}
var $a='',$b=[],$c={x:[],y:[]}
while(W.length){if(/^[A-Za-z]/.test(W[0])){$a=W.shift()}
switch($a){case ('M'):$b=W.splice(0,2)
$g($b)
Y+=$f('M',$b)
X=$b
break
case ('m'):$b=$e(W.splice(0,2))
Y+=$f('M',$b)
X=$b
break
case ('Z'):case ('z'):Y+=$f('Z',[])
break
case ('l'):$b=$e(W.splice(0,2))
Y+=$f('L',$b)
X=$b
break
case ('L'):$b=W.splice(0,2)
$g($b)
Y+=$f('L',$b)
X=$b
break
case ('c'):$b=$e(W.splice(0,6))
Y+=$f('C',$b)
X=[$b[4],$b[5]]
break
default:throw ("unknown canvas' command: "+$a)}}
var $d=new Function('ctx',Y)
$d.bBox={minX:Math.min.apply(null,$c.x),minY:Math.min.apply(null,$c.y),maxX:Math.max.apply(null,$c.x),maxY:Math.max.apply(null,$c.y)}
return $d
function $e($j){for(var $k=0,$l=$j.length;$k<$l;$k++)$j[$k]=$j[$k]+($k%2?X[1]:X[0])
$g($j)
return $j}
function $f($j,$k){var $l='ctx.'+Z[$j]+'('+$k.join(',')+');'
return $l}
function $g($j){if($j.length==2){$c.x.push($j[0])
$c.y.push($j[1])}
else if($j.length==6){var $k=$h(X.concat($j))
$c.x.push($k.minX,$k.maxX)
$c.y.push($k.minY,$k.maxY)}
else{throw ('problem with updateBBox')}}
function $h($j){var $k=$j[0],$l=$j[1],$m=$j[2],$n=$j[3],$o=$j[4],$p=$j[5],$q=$j[6],$r=$j[7],$s=[$k,$q].concat($i($k,$m,$o,$q)),$t=[$l,$r].concat($i($l,$n,$p,$r))
return {minX:Math.min.apply(null,$s),minY:Math.min.apply(null,$t),maxX:Math.max.apply(null,$s),maxY:Math.max.apply(null,$t)}}
function $i($j,$k,$l,$m){var $n=[],$o=[],$p,$q,$r
if(($j-3*$k+3*$l-$m)!==0){$q=(Math.sqrt(-$j*$l+$j*$m+$k*$k-$k*$l-$k*$m+$l*$l)-$j+2*$k-$l)/(-$j+3*$k-3*$l+$m)
$r=(-Math.sqrt(-$j*$l+$j*$m+$k*$k-$k*$l-$k*$m+$l*$l)-$j+2*$k-$l)/(-$j+3*$k-3*$l+$m)
$n.push($q,$r)}
else if(($j-3*$k+3*$l-$m)===0&&($j-2*$k+$l)!==0){$p=($j-$k)/(2*($j-2*$k+$l))
$n.push($p)}
for(var $s=0;$s<$n.length;$s++){$p=$n[$s]
if($p<0||$p>1)continue
$o.push(Math.pow(1-$p,3)*$j+3*(1-$p)*(1-$p)*$p*$k+3*(1-$p)*$p*$p*$l+$p*$p*$p*$m)}
return $o}}
function I(V){var W=new J(V)
r.extend(W)
X(W,'ignore-id')
function X(Y,Z){Y=new Y.constructor(Y,W)
if(Y.id&&!Z)w.set(Y.id,Y)
if(Y.attributes)Y.setAttributes(Y.attributes)
if(Y.childrens)for(var $$=0,$_=Y.childrens.length;$$<$_;$$++)Y.childrens[$$]=X(Y.childrens[$$])
return Y}
return W}
function J(V,W){if(!V)V={}
this.id=V.id
if(W)this.root=W
this.attributes=V.attributes
this.childrens=V.childrens}
J.prototype.setAttribute=function(V,W){this.attributes[V]=O(V,W)
this.refresh()
return this}
J.prototype.setAttributes=function(V){for(var W in V)if(V.hasOwnProperty(W)){var X='set'+N(W)
if(typeof this[X]=='function'){this[X](V[W])}}}
J.prototype.refresh=function(){this.root?this.root.fire('update'):this.fire('update')
return this}
J.prototype.getAttribute=function(V){return this.attributes[V]}
J.prototype.destroy=function(){if(this.id)w.unset(this)
this.root=null
var V=this.childrens
if(V){for(var W=0,X=V.length;W<X;W++){if(V[W] instanceof J)V[W].destroy()}}}
var K='opacity fill stroke strokeWidth d path shadow viewBox'.split(' ')
for(var L=0;L<K.length;L++){var M=K[L]
J.prototype['set'+N(M)]=(function(V){return function(W){return this.setAttribute(V,W)}})(M)}
function N(V){return V.replace(/^\w/,function(W){return W.toUpperCase()})}
function O(V,W){switch(V){case 'viewBox':return A(W)
case 'path':return H(W)
case 'fill':return P(W)
case 'shadow':return B(W)
default:return W}}
function P(V){V=E(V)
if(/linear/.test(V))return function(W,X){return Q(V,W,X)}
else return function(){return V}}
function Q(V,W,X){V=V.replace(/,/g,' ').replace(/\s+/g,' ')
var Y=V.split(' '),Z,$$
$$=Y.shift()
switch(Y.shift()){case 'left':Z=W.createLinearGradient(X.minX,X.minY,X.maxX,X.minY)
break
case 'top':Z=W.createLinearGradient(X.minX,X.minY,X.minX,X.maxY)
break
case 'right':Z=W.createLinearGradient(X.maxX,X.minY,X.minX,X.minY)
break
case 'bottom':Z=W.createLinearGradient(X.minX,X.maxY,X.minX,X.minY)
break}
var $_=D(V),$a
for(var $b=0;$b<$_.length;$b++){$a=$_[$b]
if($a.stop.indexOf('%')>-1)$a.stop=parseFloat($a.stop)/100
else $a.stop=parseFloat($a.stop)
Z.addColorStop($a.stop,$a.color.toStrRGBA())}
return Z}
function R(V){var W=S(V)
if(V.border){var X={},Y=V.border
for(var Z in V)if(V.hasOwnProperty(Z))X[Z]=V[Z]
X.x+=Y
X.y+=Y
X.width-=2*Y
X.height-=2*Y
if(X.rx)X.rx=Math.max(X.rx-Y,1)
if(X.ry)X.ry=Math.max(X.ry-Y,1)
W+=S(X,'CCW')}
return W}
function S(V,W){var X=V.rx,Y=V.ry,Z=V.width,$$=V.height,$_=V.x,$a=V.y,$b=Math.round($a+$$/2),$c=''
if(!X&&!Y){if(W)$$=-$$
$c=U('M',$_,$b)+U('l',0,W?($a-$$-$b):($a-$b))+U('l',Z,0)+U('l',0,$$)+U('l',-Z,0)+'z'}
else{var $d=0.5522848*X,$e=0.5522848*Y,$f=Z-2*X,$g=$$-2*Y
if(W)$c=U('M',$_+Z,$a+Y)+(V.corner2?T(-X,-Y,$d,$e,1):U('l',0,-Y,-X,0))+U('l',-$f,0)+(V.corner1?T(-X,Y,$d,$e,1):U('l',-X,0,0,Y))+U('l',0,$g)+(V.corner4?T(X,Y,$d,$e,1):U('l',0,Y,X,0))+U('l',$f,0)+(V.corner3?T(X,-Y,$d,$e,1):U('l',X,0,0,-Y))+'z'
else $c=U('M',$_,$a+Y)+(V.corner1?T(X,-Y,$d,$e):U('l',0,-Y,X,0))+U('l',$f,0)+(V.corner2?T(X,Y,$d,$e):U('l',X,0,0,Y))+U('l',0,$g)+(V.corner3?T(-X,Y,$d,$e):U('l',0,Y,-X,0))+U('l',-$f,0)+(V.corner4?T(-X,-Y,$d,$e):U('l',-X,0,0,-Y))+'z'}
return $c}
function T(V,W,X,Y,Z){var $$=V>0?1:-1,$_=W>0?1:-1,$a=Z?-$$*$_:$$*$_,$b=($a==1)?$$*X:0,$c=($a==1)?0:$_*Y,$d=($a==1)?V:V-$$*X,$e=($a==1)?W-$_*Y:W
return U('c',$b,$c,$d,$e,V,W)}
function U(V){var W=' ',X=Array.prototype.slice.apply(arguments)
if(typeof X[0]=='string'&&/^[A-Za-z]$/.test(X[0])){W+=V
X.shift()}
for(var Y=0,Z=X.length;Y<Z;Y++)W+=Math.round(X[Y])+' '
return W}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_Graphic"].join('')
x.prototype.__jx__fqname="meshim_common_Graphic"}
return x})()
b.__$$__meshim_common_GeoAccess=(function(){var x=b.__$$__meshim_common_ArrayUtils,y=/^([a-z][a-z0-9_-]*)(:\d+)?$/i
function z(B,C,D){this.CLUSTERS=B.CLUSTERS
this.WEIGHTS=B.WEIGHTS
this.NEAR_MAP=B.NEAR_MAP
this.FALLBACKS=B.FALLBACKS
this.geo_code=C||'geo'
this.cluster_hosts=[]
this.priority_hosts=[]
this.host_list=[]
this.host_index=0
this.addPriorityHosts(D)
this.init()}
var A=z.prototype
A.init=function B(){var C=(this.geo_code&&(this.geo_code in this.NEAR_MAP))?this.NEAR_MAP[this.geo_code]:this.NEAR_MAP.DEFAULT
if(!C){throw 'Error: no cluster code found for '+this.geo_code}
var D,E
if(C in this.CLUSTERS){D=this.CLUSTERS[C]
E=this.getWeights(C)
this.cluster_hosts=this.cluster_hosts.concat(x.shuffle(D,E))}
else if(this.priority_hosts.length<=0){throw 'Error: '+C+' has no cluster definition'}
else;
if(C in this.FALLBACKS){var F=this.FALLBACKS[C]
for(var G=0,H=F.length;G<H;G++){var I=F[G]
if(!(I in this.CLUSTERS))continue
D=this.CLUSTERS[I]
E=this.getWeights(I)
this.cluster_hosts=this.cluster_hosts.concat(x.shuffle(D,E))}}
this._makeHostList()}
A.getWeights=function B(C){if(!(C in this.CLUSTERS))return []
var D=this.CLUSTERS[C],E=D.length,F=new Array(E),G
if(this.WEIGHTS&&this.WEIGHTS[C]){var H=this.WEIGHTS[C]
for(G=E;G--;){var I=D[G]
F[G]=j(H[I])?H[I]:1}}
else{for(G=E;G--;){F[G]=1}}
return F}
A.addPriorityHosts=function B(C){if(!g(C))C=[C]
var D=[]
for(var E=0,F=C.length;E<F;E++){var G=C[E]
if(G&&y.test(G))D.push(G)}
this.priority_hosts=D.concat(this.priority_hosts)
this._makeHostList()}
A._makeHostList=function B(){this.host_list=this.priority_hosts.concat(this.cluster_hosts)
this.host_index=0}
A.getHostList=function B(){return this.host_list}
A.getNextHost=function B(){if(this.host_index>=this.host_list.length)return ''
return this.host_list[this.host_index++]}
A.hasNext=function B(){return (this.host_index<this.host_list.length)}
A.rewind=function B(){this.host_index=0}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_GeoAccess"].join('')
z.prototype.__jx__fqname="meshim_common_GeoAccess"}
return z})()
b.__$$__jx_controls_List=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__div,null,null,[[b.__$$__div,"template",null,[[b.__$$__div,null,null,[],{}]],{"id":"template","container":"default","display":"none"}],[b.__$$__div,"content",null,[],{"id":"content"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__template'),H=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var I=(function(){var K=b.__$$__jx_data_SetDataNode
F.setDataNode=T
F.setRenderer=function($m){S=$m}
F.getID=Z
F.getNextID=X
F.getPrevID=Y
F.getRowIDs=$$
F.clearList=U
F.select=$b
F.deselect=$c
F.setSort=$f
var L,M={},N={},O={},P=[],Q=0,R=!1,S=function($m){if(G.lastChild.__jx__native){var $n=G.lastChild.cloneNode(!0)
w.extend($n,!0)
return $n}
return G.lastChild.__jx__constructor($m)}
function T($m){if(L)F.autounbind(L,'keys',V)
L=$m
U()
F.autobind(L,'keys',V)}
function U(){H.empty()
M={}
P=[]
if(Q){Q=0
F.fire('jx:list:length',Q)}}
function V($m,$n){var $o=($m.length+$n.length)>2
if($o)F.removeChild(H)
var $p=Q,$q,$r,$s,$t
for($r=0;$r<$m.length;$r++){$q=$m[$r]
if($q in M)continue
var $u=S(H),$v=L.$($q)
M[$q]=$u
Q++
K.applySetDataNode($u)
$s=$d?$h($q):$q
$t=$k($s,$u)
$u.setAttribute('jx:list:rowID',$q)
$u.setDataNode($v)
W($t)}
for($r=0;$r<$n.length;$r++){$q=$n[$r]
if(!($q in M))continue
$s=$d?$h($q,!0):$q
$t=$j($s)
delete N[$s]
if(M[$q]===$_)$_=null
M[$q].destroy()
delete M[$q]
W($t)
Q--}
if($o)F.appendChild(H)
if($p!=Q)F.fire('jx:list:length',Q)
if($m.length)F.fire('jx:list:added',$m)}
function W($m){if($m<0||!(P[$m]))return
var $n=P[$m],$o=M[$n],$p,$q
if(!$o)return
if(P[$m+1]){$o.setAttribute('jx:list:nextID',P[$m+1])
$p=M[P[$m+1]]
$p.setAttribute('jx:list:prevID',$n)
$o.fire('update.neighbour',{next:P[$m+1]})
$p.fire('update.neighbour',{prev:$n})}
else{$o.removeAttribute('jx:list:nextID')
$o.fire('update.neighbour',{next:null})}
if(P[$m-1]){$o.setAttribute('jx:list:prevID',P[$m-1])
$q=M[P[$m-1]]
$q.setAttribute('jx:list:nextID',$n)
$o.fire('update.neighbour',{prev:P[$m-1]})
$q.fire('update.neighbour',{next:$n})}
else{$o.removeAttribute('jx:list:prevID')
$o.fire('update.neighbour',{prev:null})}}
function X($m){while($m.parentNode&&$m!=F){var $n=$m.getAttribute('jx:list:nextID')
if($n)return $n
$m=$m.parentNode}}
function Y($m){while($m.parentNode&&$m!=F){var $n=$m.getAttribute('jx:list:prevID')
if($n)return $n
$m=$m.parentNode}}
function Z($m){while($m.parentNode&&$m!=F){var $n=$m.getAttribute('jx:list:rowID')
if($n)return $n
$m=$m.parentNode}}
function $$(){var $m=[],$n,$o
for($n in M)if(M.hasOwnProperty($n)){$o=M[$n].getAttribute('jx:list:rowID')
if($o)$m.push($o)}
return $m}
var $_=null
function $a($m){$b($m.target)}
function $b($m){var $n,$o
if(i($m)){$o=$m
$n=M[$o]}
else if(typeof $m=='number'){$n=H.childNodes[$m]
if($n)$o=$n.getAttribute('jx:list:rowID')}
else{$n=$m
while($n.parentNode&&$n!=H){$o=$n.getAttribute('jx:list:rowID')
if($o){$n.jx_wrapper&&($n=$n.jx_wrapper)
break}
$n=$n.parentNode}}
if(!$n||$n==$_)return
$c()
$_=$n.jx_wrapper||$n
$_.addClass('active')
$_.fire('jx:list:selected')
F.fire('jx:list:select',$o)}
function $c(){$_&&$_.removeClass('active')
$_&&$_.fire('jx:list:deselected')
$_=null}
var $d,$e
function $f($m,$n){if($d!=$m||$e!=$n){$e=$n
$d=$m
if($d){if(!R){F.autobind(L,'value',$i)
R=!0}}
else{if(R){F.autounbind(L,'value',$i)
R=!1}
$e=!1}
N={}
O={}
if(Q>1)$g()}}
function $g(){var $m,$n,$o
H.innerHTML=""
P=[]
for($n in M)if(M.hasOwnProperty($n)){$m=$d?$h($n):$n
$o=$k($m,M[$n])
O[$n]=$m
N[$m]=$n
W($o)}}
function $h($m,$n){return $n?O[$m]:(L.$($m).getValue($d)+'\0'+$m).replace(/ /g,'').toLowerCase()}
function $i($m){if(!$d)return
var $n,$o,$p,$q,$r,$s
for($p in $m)if($m.hasOwnProperty($p)){$o=$m[$p]
if(O[$p]&&$o&&$o[$d]){$n=M[$p]
H.removeChild($n)
$r=O[$p]
$q=$h($p)
delete N[$r]
$s=$j($r)
W($s)
N[$q]=$p
O[$p]=$q
$s=$k($q,$n,$o[$d])
W($s)}}}
function $j($m){var $n=$l(P,$m)
if($n<0){console.log('Could not find '+$m+' in List')
return $n}
P.splice($n,1)
return $n}
function $k($m,$n){var $o=(-$l(P,$m)>>0)-1
if($o<0)if(typeof console!='undefined'&&'log' in console)console.log($m+' is already in List')
P.splice($o,0,$m)
$e&&($o=P.length-$o-1)
H.insertBefore($n.dom||$n,H.childNodes[$o]||null)
return $o}
function $l($m,$n){var $o=$m.length,$p=0,$q=$o-1,$r,$s
while($p<=$q){$r=($p+$q)/2>>0
$s=$m[$r]
if($s<$n)$p=$r+1
else if($s>$n)$q=$r-1
else return $r}
return -($p+1)}
H.on('click',$a)})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__jx_controls_List
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_controls_List"].join('')
x.prototype.__jx__fqname="jx_controls_List"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_utils_Color=(function(){var x=b.__$$__meshim_common_Chroma,y={white:"#FFF",black:"#000",grey:"#808080"}
y.clampLuminance=function(A,B,C){A=y.getChromaObj(A)
if(!A)return
if(B<0)B=0
if(C>1)C=1
var D=A.luminance(),E=D<B?B:D>C?C:D
return D===E?A:y.getColorAtLuminance(A,E)}
y.lighten=function(A,B,C){return x.interpolate(A,y.white,B,C||'rgb')}
y.darken=function(A,B,C){return x.interpolate(A,y.black,B,C||'rgb')}
var z=100
y.getColorAtLuminance=function(A,B){if(B<0||B>1)return
A=y.getChromaObj(A)
if(!A)return
var C=0
if(A.luminance()>=B){for(;;){C++
if(A.luminance()<=(B+0.05)||C>=z)return A
A=y.darken(A,0.05)}}
else{for(;;){C++
if(A.luminance()>=(B-0.05)||C>=z)return A
A=y.lighten(A,0.05)}}}
y.getColorAtContrast=function(A,B,C){if(C<1)return
A=y.getChromaObj(A)
B=y.getChromaObj(B)
if(!A||!B)return
var D=0
if(x.contrast(A,B)>=C){for(;;){D++
if(x.contrast(A,B)<=(C+0.5)||D>=z)return B
if(B.luminance()>=A.luminance()){B=y.darken(B,0.05)}
else{B=y.lighten(B,0.05)}}}
else{var E=x.contrast(A,y.white),F=x.contrast(A,y.black)
for(;;){D++
if(x.contrast(A,B)>=(C-0.5)||D>=z)return B
if(B.luminance()>=A.luminance()){if(E>=(C-0.5)){B=y.lighten(B,0.05)}
else if(F>=(C-0.5)){B=y.darken(B,0.05)}
else{return E>F?y.getChromaObj(y.white):y.getChromaObj(y.black)}}
else{if(F>=(C-0.5)){B=y.darken(B,0.05)}
else if(E>=(C-0.5)){B=y.lighten(B,0.05)}
else{return E>F?y.getChromaObj(y.white):y.getChromaObj(y.black)}}}}}
y.getContrastColor=function(A,B,C,D,E,F,G){A=y.getChromaObj(A)
B=y.getChromaObj(B)
C=y.getChromaObj(C)
if(!A||!B||!C)return
var H=A.luminance()
if(E==='bright'){if(H<D){return B}
else{return y.getColorAtContrast(A,C,G?G:2.5)}}
else if(E==='dark'){if(H>D){return C}
else{return y.getColorAtContrast(A,B,F?F:4.5)}}}
y.isHexColor=function(A){if(typeof A=='string'&&/^#[0-9A-F]{3}([0-9A-F]{3})?$/i.test(A)){return !0}
else{return !1}}
y.getChromaObj=function(A){if(y.isHexColor(A)){return x.hex(A)}
else if(A instanceof x.constructor){return A}
else{return !1}}
y.rgbaColor=function(A,B){A=y.getChromaObj(A)
if(!A)return
if(typeof B=='undefined'){B=1}
else{B=parseFloat(B)
if(isNaN(B)||B>1)B=1
if(B<0)B=0}
return 'rgba('+y.toRGB(A).join(',')+','+B+')'}
y.toRGB=function(A){A=y.getChromaObj(A)
if(!A)return
var B=A.rgb()
B[0]=parseInt(B[0],10)
B[1]=parseInt(B[1],10)
B[2]=parseInt(B[2],10)
return B}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Color"].join('')
y.prototype.__jx__fqname="meshim_widget_utils_Color"}
return y})()
b.__$$__jx_ui_HTMLElement=(function(){var x=b.__$$__jx_ui_HTMLEvent
if(q.isIE)document.execCommand('BackgroundImageCache',!1,!0)
var y='background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor min-height min-width max-height max-width'.split(' '),z='title checked href media name src target'.split(' '),A=q.bugs.ie.cssFixed
function B(J){return (function(K){try {this.dom.style[J]=K}catch(L){;}
return this})}
function C(J){return (function(K){this.dom.setAttribute(J,K)
return this})}
function D(J){return (i(J)&&J.substr(J.length-1)=='%')?parseInt(J,10)+'%':parseInt(J,10)}
function E(){if(E.alreadyHacked)return
E.alreadyHacked=1
if(q.isStrict){document.body.parentNode.style.background='#fff url(https://) fixed'
document.body.className=document.body.className}
else{if(document.body.currentStyle.backgroundAttachment!='fixed'){if(document.body.currentStyle.backgroundImage!='none'){var J=document.createElement('div'),K=J.style,L=document.body.currentStyle,M=!1,N=0,O,P
K.backgroundAttachment=L.backgroundAttachment
K.backgroundColor=L.backgroundColor
K.backgroundImage=L.backgroundImage
K.backgroundPositionX=L.backgroundPositionX
K.backgroundPositionY=L.backgroundPositionY
K.backgroundRepeat=L.backgroundRepeat
K.position='absolute'
K.zIndex=-1
K.top=K.left=0
K.width='100%'
document.body.insertBefore(J,document.body.firstChild)
var Q=function(){if(!M&&N){O+=document.body.clientWidth-N
K.width=O+'px'
N=document.body.clientWidth}
if(P)return
P=setTimeout(function(){K.width=0
document.body.className=document.body.className
O=Math.max(document.body.scrollWidth,document.body.clientWidth)
K.width=O+'px'
N=document.body.clientWidth
M=document.body.scrollWidth>document.body.clientWidth
P=null},0)}
setTimeout(Q,0)
K.setExpression('height','document.body.scrollHeight+"px"')
Q()}
document.body.style.backgroundImage='url(https://)'
document.body.style.backgroundAttachment='fixed'}}}
function F(J){J=J.split(/[^a-zA-Z0-9]/)
for(var K=1;K<J.length;K++)if(J[K].length)J[K]=J[K].substr(0,1).toUpperCase()+J[K].substr(1)
return J.join('')}
function G(J){while(J.defaultPlacement)J=J.defaultPlacement
return J}
function H(J,K,L,M,N){if(!(this instanceof H))return new H(J,K,L,M,N)
if(!J){return}
if(!N){N={}}
this.jx_id=K=K||w.generateID()
this._top=this._bottom=this._left=this._right=this._width=this._height=NaN
this._position=null
this.pos=''
this.offsetx=0
this.offsety=0
this._snaps=[0,0,0,0]
this.useDisplay=!1
this.doc=this.ownerDocument=J.ownerDocument
this.parentNode=J
this.attributes=N
this.tagName=N.tagName
this.isNew=!0
this.dom=this.doc.createElement(this.tagName)
this.dom.jx_wrapper=this
this.style=this.dom.style
this.children=[]
this._autobinds=[]
x.call(this)
M&&this.addChildren(M)
J.appendChild(J instanceof H?this:this.dom)
this.setStyle(L)
this.setAttributes(N)
this.__jx__fqname&&this.addClass(this.__jx__fqname)
K&&w.set(K,this)}
H.prototype=e(x.prototype)
H.prototype.addChildren=function(J){var K=J&&J.length
if(!J||!K)return
var L=G(this),M,N=L.ownerDocument,O
for(var P=0;P<K;P++){M=J[P]
if(g(M))L.appendChild(M)
else{O=N.createTextNode(M)
L.appendChild(O)
if(typeof M.bind=='function')M.bind(O)}}}
H.prototype.appendChild=function(J){if(g(J)){return J[0](this,J[1],J[2],J[3],J[4])}
if(f(J,this.children)==-1&&J.nodeType!=3)this.children.push(J)
if(J.parentNode&&J.parentNode!=this)J.parentNode.removeChild(J.parentNode instanceof H?J:(J.dom||J))
J.dom&&(J.parentNode=this)
this.dom.appendChild(J.dom||J)
return J}
H.prototype.removeChild=function(J){try {if(J.dom){this.dom.removeChild(J.dom)
J.parentNode=null}
else this.dom.removeChild(J)
var K=f(J,this.children)
if(K!=-1)return this.children.splice(K,1)}catch(L){;}}
H.prototype.insertBefore=function(J,K){var L=f(K,this.children)
if(K&&L==-1){K=null}
if(J.parentNode){var M=f(J,this.children)
if(M!=-1){this.children.splice(M,1)
if(L>M)L--}
else{J.parentNode.removeChild(J)}}
J.dom&&(J.parentNode=this)
if(!K)this.children.push(J)
else this.children.splice(L,0,J)
this.dom.insertBefore(J.dom||J,K?(K.dom||K):null)}
H.prototype.insertAfter=function(J,K){this.insertBefore(J,K&&K.getNextSibling())}
H.prototype.prependTo=function(){}
H.prototype.cloneNode=function(J){return this.dom.cloneNode(J)}
H.prototype.getNextSibling=function(){return this.dom.nextSibling&&this.dom.nextSibling.jx_wrapper}
H.prototype.getPreviousSibling=function(){return this.dom.previousSibling&&this.dom.previousSibling.jx_wrapper}
H.prototype.getFirstChild=function(){return this.dom.firstChild&&this.dom.firstChild.jx_wrapper}
H.prototype.getLastChild=function(){return this.dom.lastChild&&this.dom.lastChild.jx_wrapper}
H.prototype.getText=function(){return this.dom.innerText||this.dom.textContent||''}
H.prototype.setText=function(J){if(!this.dom)return
v&&v.unbind&&v.unbind(this.dom)
if(J&&typeof J.bind=='function')J.bind(this.dom)
if(typeof document.body.textContent!='undefined')this.dom.textContent=J
else this.dom.innerText=J
return this}
H.prototype.getHTML=function(){return this.dom.innerHTML}
H.prototype.setHTML=function(J){this.dom.innerHTML=J
return this}
H.prototype.destroy=function(){if(this._destructors){for(var J=this._destructors,K=J.length,L=0;L<K;L++)J[L].call(this)}
this._autobinds&&this.autounbind()
this.dom.jx_wrapper=null
typeof this.empty=='function'&&this.empty()
this.parentNode&&this.parentNode.removeChild(this.parentNode instanceof H?this:this.dom)
this.parentNode=null
w.unset(this)}
H.prototype.empty=function(){var J
while(this.children.length){J=this.children.pop()
if(typeof J.destroy=='function')J.destroy()
else if(J.nodeType==1)w.proto.destroy.call(J)}}
H.prototype.onDestruction=function(J){(this._destructors||(this._destructors=[])).push(J)}
H.prototype.getClassName=H.prototype.getClass=function(){return this.dom.className}
H.prototype.setClassName=H.prototype.setClass=function(J,K){this.dom.className=(K?J:this.__jx__fqname+' '+J)+(this._pseudo?' '+this._pseudo:'')
return this}
H.prototype.setAddClass=H.prototype.addClass=function(J){if(!J)return this
if(this.dom.className){if(!this.hasClass(J)){this.dom.className+=' '+J}}
else{this.dom.className=J}
return this}
H.prototype.removeClass=function(J){if(!J||!this.dom.className||!this.hasClass(J))return this
this.dom.className=(' '+this.dom.className+' ').replace(' '+J+' ',' ').slice(1,-1)
return this}
H.prototype.hasClass=function(J){return !!J&&!!this.dom.className&&(' '+this.dom.className+' ').indexOf(' '+J+' ')!=-1}
H.prototype.autobind=function(J,K,L){if(!this._autobinds){return}
this._autobinds.push([J,K,L])
J.on(K,L)}
H.prototype.autounbind=function(J,K,L){if(!this._autobinds){return}
var M=this._autobinds,N,O
if(J&&K&&L){for(N=M.length-1;N>=0;N--){O=M[N]
if(O[0]==J&&O[1]==K&&O[2]==L){M.splice(N,1)
O[0].un(O[1],O[2])
return}}
return}
if(!J&&!K&&!L){if(!M)return
for(N=M.length-1;N>=0;N--){O=M[N]
O[0].un(O[1],O[2])}
delete this._autobinds
return}}
H.prototype.getAttribute=function(J){return this.dom.getAttribute(J)||this.dom[J]}
H.prototype.setAttribute=function(J,K){this.dom.setAttribute(J,K)
return this}
H.prototype.removeAttribute=function(J){this.dom.removeAttribute(J)
return this}
H.prototype.setAttributes=function(J){var K,L
for(L in J)if(J.hasOwnProperty(L)){K='set'+L.substr(0,1).toUpperCase()+L.substr(1)
if(typeof this[K]=='function')this[K](J[L])}
return this}
H.prototype.getStyle=function(J){return this.dom.style[F(J)]}
H.prototype.getComputedStyle=function(J){J=J&&F(J)
var K
if(window.getComputedStyle)K=window.getComputedStyle(this.dom,null)
else if(this.dom.currentStyle)K=this.dom.currentStyle
else return
return J?K[J]:K}
H.prototype.setStyle=function(J){var K,L
if(arguments.length==1&&i(J)){if(!J)return this
J=J.split(';')
for(K=0;K<J.length;K++){if(J[K].match(/^\s*$/))continue
L=J[K].match(/\s*([^:]+):\s*(.*?)\s*$/)
if(!L&&J[K].length){continue}
this.setOneStyle(L[1],L[2])}}
else if(arguments.length==1&&typeof (J)=='object'){for(var M in J)if(J.hasOwnProperty(M))this.setOneStyle(M,J[M])}
else if(arguments.length>1){for(K=0;K<arguments.length;K+=2)this.setOneStyle(arguments[K],arguments[K+1])}
return this}
H.prototype.setOneStyle=function(J,K){var L=F('set-'+J)
if(typeof this[L]=='function')this[L](K)
else this.setCSSStyle(J,K)
return this}
H.prototype.setCSSStyle=function(J,K){try {this.dom.style[F(J)]=K}catch(L){;}
return this}
H.prototype.getScrollWidth=function(){return this.dom.scrollWidth}
H.prototype.getScrollHeight=function(){return this.dom.scrollHeight}
H.prototype.getClientWidth=function(){return this.dom.clientWidth}
H.prototype.getClientHeight=function(){return this.dom.clientHeight}
H.prototype.getTop=function(){return this.dom.offsetTop}
H.prototype.getLeft=function(){return this.dom.offsetLeft}
H.prototype.getWidth=function(){return this.dom.offsetWidth}
H.prototype.getHeight=function(){return this.dom.offsetHeight}
H.prototype.setTop=function(J){this._top=D(J)
this.solveConstraints()
return this}
H.prototype.setLeft=function(J){this._left=D(J)
this.solveConstraints()
return this}
H.prototype.setBottom=function(J){this._bottom=D(J)
this.solveConstraints()
return this}
H.prototype.setRight=function(J){this._right=D(J)
this.solveConstraints()
return this}
H.prototype.setWidth=function(J){this._width=D(J)
this.solveConstraints()
return this}
H.prototype.setHeight=function(J){this._height=D(J)
this.solveConstraints()
return this}
H.prototype.getScrollLeft=function(){return this.dom.scrollLeft}
H.prototype.setScrollLeft=function(J){this.dom.scrollLeft=J
return this}
H.prototype.getScrollTop=function(){return this.dom.scrollTop}
H.prototype.setScrollTop=function(J){this.dom.scrollTop=J
return this}
H.prototype.setFloat=function(J){var K=this
if(v&&v.onLanguage&&!this._onLanguageFloat){v.onLanguage&&v.onLanguage(L)
this.onDestruction(function(){v.unLanguage&&v.unLanguage(L)})
this._onLanguageFloat=!0}
L()
function L(){var M=(v&&v.flip)?v.flip(J):J
if(q.isIE)K.dom.style.styleFloat=M
else K.dom.style.cssFloat=M}
return this}
H.prototype.solveConstraints=function(){if(!isNaN(this._top)&&!isNaN(this._height))this._bottom=NaN
if(!isNaN(this._left)&&!isNaN(this._width))this._right=NaN;(this._width<0)&&(this._width=0);(this._height<0)&&(this._height=0)
this.applyConstraints()}
H.prototype.applyConstraints=function(){var J=this.dom.style,K=this
if(!w.hasParentNode(this.dom))return
if(q.bugs.ie.cssFixed&&this._position=='fixed'){l(function(){K.dom&&K.hackFixed()})
return}
if(q.bugs.ie.cssBottomRight&&((!isNaN(this._left)&&!isNaN(this._right))||(!isNaN(this._top)&&!isNaN(this._bottom)))){if(this.appendToParent)this.appendToParent(!0)
E()
var L=isNaN(this._left)?'':this._left,M=isNaN(this._right)?'':this._right,N=isNaN(this._width)?'':this._width,O,P=isNaN(this._top)?'':this._top,Q=isNaN(this._bottom)?'':this._bottom,R=isNaN(this._height)?'':this._height,S,T=this.dom.ownerDocument.compatMode=='BackCompat'
if(this._position=='fixed'&&this.dom.ownerDocument==document){if(T){S='document.body.clientHeight'
O='document.body.clientWidth'}
else{S='document.documentElement.clientHeight'
O='document.documentElement.clientWidth'}}
else{S='this.offsetParent.clientHeight'
O='this.offsetParent.clientWidth'}
if(q.isIE6){if(!isNaN(this._left)&&!isNaN(this._right)){M=''
N=[O,this._left,this._right].join('-')}
if(!isNaN(this._top)&&!isNaN(this._bottom)){Q=''
R=[S,this._top,this._bottom].join(' - ')}}
var U=function(X,Y){J[X]=''
J.removeExpression(X)
if(typeof (Y)=='number')J[X]=Y+'px'
else if(i(Y)&&Y.substr(Y.length-1)=='%')J[X]=Y
else if(i(Y)&&Y.length)J.setExpression(X,Y)}
U('left',L)
U('right',M)
U('width',N)
U('top',P)
U('bottom',Q)
U('height',R)}
W()
V()
function V(){J.top=i(K._top)?K._top:isNaN(K._top)?'':K._top+'px'
J.bottom=i(K._bottom)?K._bottom:isNaN(K._bottom)?'':K._bottom+'px'
if(K._height!=K.__height){J.height=i(K._height)?K._height:isNaN(K._height)?'':K._height+'px'
K.__height=K._height}}
function W(){J.left=i(K._left)?K._left:isNaN(K._left)?'':K._left+'px'
J.right=i(K._right)?K._right:isNaN(K._right)?'':K._right+'px'
if(K._width!=K.__width){J.width=i(K._width)?K._width:isNaN(K._width)?'':K._width+'px'
K.__width=K._width}}}
H.prototype.hackFixed=function(){var J=this.dom.style
E()
if(this.appendToParent)this.appendToParent(!0)
if(this._bottom<0)this._bottom=0
if(this._right<0)this._right=0
p.ok(isNaN(this._left)!=isNaN(this._right),'One and only one of left/right must be set')
p.ok(isNaN(this._top)!=isNaN(this._bottom),'One and only one of top/bottom must be set')
p.ok(!isNaN(this._width),'Width must be set')
p.ok(!isNaN(this._height),'Height must be set')
p.ok(this.ownerDocument==document,'Fixed element must be top level element')
if(this._height!=this.__height){J.height=this._height+'px'
this.__height=this._height}
if(this._width!=this.__width){J.width=this._width+'px'
this.__width=this._width}
var K=this.getHeight(),L=this.getWidth(),M,N,O,P
if(q.isQuirks){P='document.body.clientHeight'
O='document.body.clientWidth'
M='(dummye34cf6=document.body.scrollLeft)+'
N='(dummye34cf6=document.body.scrollTop )+'}
else{P='document.documentElement.clientHeight'
O='document.documentElement.clientWidth'
M='(dummye34cf6=document.documentElement.scrollLeft)+'
N='(dummye34cf6=document.documentElement.scrollTop )+'}
if(!isNaN(this._left))M+=this._left
else if(i(this._left))M+=parseInt(this._left,10)/100*(q.isQuirks?document.body:document.documentElement).clientWidth
else M+=O+'-'+(L+this._right)
if(!isNaN(this._top))N+=this._top
else if(i(this._top))N+=parseInt(this._top,10)/100*(q.isQuirks?document.body:document.documentElement).clientHeight
else N+=P+'-'+(K+this._bottom)
if(q.isIE6&&document.body.currentStyle.direction=='rtl'){if(q.isQuirks)M+='-(document.body.scrollWidth-document.body.clientWidth)'
else M+='-(document.documentElement.scrollWidth-document.documentElement.clientWidth)'}
J.setExpression('left',M+'+"px"')
J.setExpression('top',N+'+"px"')}
H.prototype.dock=function(J,K,L){this.pos=J
if(j(K))this.offsetx=K
if(j(L))this.offsety=L
this.doDock()
this.on('jx:resize',this.doDock)}
H.prototype.doDock=function(){var J=isNaN(this._width)?this.dom.offsetWidth:this._width,K=isNaN(this._height)?this.dom.offsetHeight:this._height,L,M,N,O,P,Q,R
L=M=N=O=NaN
P=Q=R=0
switch(this.pos.charAt(0)){case 't':L=0
break
case 'm':L='50%'
break
case 'b':M=0
break}
switch(this.pos.charAt(1)){case 'l':N=0
break
case 'c':N='50%'
break
case 'r':O=0
break}
if(L=='50%')P=-(K/2)
if(N=='50%')Q=-(J/2)
if(this.offsety>=0||!isNaN(L)||typeof (L)=="string")P+=this.offsety
else R=-this.offsety
Q+=this.offsetx
this.setMargin([P+'px',0,R+'px',Q+'px'].join(' ')).setTop(L).setBottom(M).setLeft(N).setRight(O)}
H.prototype.setBounds=function(J){if(!g(J)){J=J.split(' ')
J[0]=parseInt(J[0],10)
J[1]=parseInt(J[1],10)
J[2]=parseInt(J[2],10)
J[3]=parseInt(J[3],10)}
if(A){J[1]=Math.max(0,J[1])
J[2]=Math.max(0,J[2])}
this._bounds=J
return this}
H.prototype.setSnaps=function(J){if(!g(J)){J=J.split(' ')
J[0]=parseInt(J[0],10)
J[1]=parseInt(J[1],10)
J[2]=parseInt(J[2],10)
J[3]=parseInt(J[3],10)}
this._snaps=[Math.max(0,J[0]),Math.max(0,J[1]),Math.max(0,J[2]),Math.max(0,J[3])]
return this}
H.prototype.applyBounds=function(){if(!this._bounds)return
if(this._left<this._bounds[3]+this._snaps[3])this._left=this._bounds[3]
if(this._right<this._bounds[1]+this._snaps[1])this._right=this._bounds[1]
if(this._top<this._bounds[0]+this._snaps[0])this._top=this._bounds[0]
if(this._bottom<this._bounds[2]+this._snaps[2])this._bottom=this._bounds[2]
var J=q.isQuirks?document.body:document.documentElement,K=isNaN(this._width)?this.dom.offsetWidth:this._width,L=J.clientWidth-K,M=J.clientHeight-this.dom.offsetHeight
if(L-this._left<=this._bounds[1]+this._snaps[1])this._left=L-this._bounds[1]
if(L-this._right<=this._bounds[3]+this._snaps[3])this._right=L-this._bounds[3]
if(M-this._top<=this._bounds[2]+this._snaps[2])this._top=M-this._bounds[2]
if(M-this._bottom<=this._bounds[0]+this._snaps[0])this._bottom=M-this._bounds[0]}
H.prototype.moveTo=function(J,K){this._bottom=this._right=NaN
this._top=K
this._left=J
this.applyBounds()
this.applyConstraints()
return this}
H.prototype.move=function(J,K){if(isNaN(this._left)&&isNaN(this._right))this._left=0
if(isNaN(this._top)&&isNaN(this._bottom))this._top=0
if(!isNaN(this._left))this._left+=J
if(!isNaN(this._right))this._right-=J
if(!isNaN(this._top))this._top+=K
if(!isNaN(this._bottom))this._bottom-=K
this.applyBounds()
this.applyConstraints()}
H.prototype.resizeBy=function(J,K,L,M){if(J){if(isNaN(this._width))this._width=this.dom.offsetWidth
this._width=Math.max(L||0,this._width+J)}
if(K){if(isNaN(this._height))this._height=this.dom.offsetHeight
this._height=Math.max(M||0,this._height+K)}
this.applyBounds()
this.applyConstraints()
this.fire('jx:resize')
return this}
H.prototype.setVisible=function(J){if(J=='none'||J=='block')this.useDisplay=!0
if(J=='none'||J=='hidden'||J=='false'||!J)this.hide()
else this.show()
return this}
H.prototype.isVisible=function(){var J=this.dom.style
if(this.useDisplay)return J.display!='none'
else return J.visibility=='visible'}
H.prototype.show=function(){var J=this.dom.style
if(this.useDisplay){if(J.display!=(this._initialDisplay||'block')){J.display=this._initialDisplay||'block'
this.fire('show')}}
else{if(J.visibility!='visible'){J.visibility='visible'
this.fire('show')}}
return this}
H.prototype.hide=function(){var J=this.dom.style
if(this.useDisplay){if(J.display!='none'){this._initialDisplay=(J.display!='none')&&J.display
J.display='none'
this.fire('hide')}}
else{if(J.visibility!='hidden'){J.visibility='hidden'
this.fire('hide')}}
return this}
H.prototype.toggle=function(){return this.isVisible()?this.hide():this.show()}
H.prototype.getXY=function(){var J,K,L=this.dom.offsetParent
J=this.dom.offsetLeft
K=this.dom.offsetTop
while(L){J+=L.offsetLeft
K+=L.offsetTop
L=L.offsetParent}
return [J,K]}
H.prototype.getFixedXY=function(){var J,K,L=this.dom,M=this.dom.ownerDocument,N=M.documentElement,O=M.defaultView||L.parentWindow||!1,P={top:0,left:0},Q=N.clientTop||0,R=N.clientLeft||0,S=O.pageYOffset||N.scrollTop,T=O.pageXOffset||N.scrollLeft
if('getBoundingClientRect' in L)P=L.getBoundingClientRect()
K=P.top+S-Q
J=P.left+T-R
return [J,K]}
H.prototype.setOpacity=function(J){J=Math.max(Math.min(J,1),0)
if(q.isIE<9)this.dom.style.filter=(this.dom.style.filter||'').replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi,'')+(J>=1?'':'progid:DXImageTransform.Microsoft.Alpha(opacity='+J*100+'), ')
else this.dom.style.opacity=J
return this}
H.prototype.setPosition=function(J){switch(J){case 'static':case 'relative':case 'absolute':case 'fixed':this._position=J}
if(this._position!==null)this.setCSSStyle('position',(A&&this._position=='fixed')?'absolute':this._position)
return this}
H.prototype.setBackgroundImage=function(J){var K=J
if(K&&q.isIE)this.dom.style.filter+='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+K+'",sizingMethod="scale"), '
else this.dom.style.backgroundImage='url("'+J+'")'
return this}
H.prototype.setRotation=function(J){if(q.isFF)this.dom.style.MozTransform=J?'rotate('+J+'deg)':''
else if(q.isSafari)this.dom.style.WebkitTransform=J?'rotate('+J+'deg)':''
else if(q.isIE){this.dom.style.filter=J?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(J/90)+')':''
if(q.isIE8&&J){var K=this.parentNode.getElementsByTagName('iframe')
if(q.isIE8&&K.length){K[0].style.filter=J?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(J/90)+')':''
this.dom.style.overflow='visible'}}}
return this}
H.prototype.appendToParent=function(J){if(!w.hasParentNode(this.dom))this.parentNode.appendChild(this.parentNode instanceof H?this:this.dom)
if(this.parentNode==document.body&&(this.style.position=='absolute'||this.style.position=='fixed')){this.parentNode.insertBefore(this.dom,this.parentNode.firstChild)}
if(J&&!this.inDOM){this.parentNode.appendToParent&&this.parentNode.appendToParent(J)
this.inDOM=!0}}
H.prototype.focus=function(){try {this.dom.focus()}catch(J){;}
;
return this}
H.prototype.blur=function(){try {this.dom.blur()}catch(J){;}
;
return this}
H.prototype.click=function(){this.dom.click&&this.dom.click()
return this}
H.prototype.validate=function(J){var K=!0
for(var L=0,M=this.children.length;L<M;L++){var N=this.children[L]
if(N instanceof H&&typeof N.validate=='function')if(!N.validate(J?K:!1))K=!1}
return K}
H.prototype.getSelectable=function(){return this.selectable}
H.prototype.setSelectable=function(J){function K(){return !1}
if(n(J)){this.selectable=!0
this.setStyle('user-select','text')
q.isFF&&this.setStyle('-moz-user-select','text')
q.isWebKit&&this.setStyle('-webkit-user-select','text')
q.isIE>9&&this.setStyle('-ms-user-select','text');(q.isIE<10||q.isOpera)&&this.un('selectstart',K)}
else{this.selectable=!1
this.setStyle('user-select','none')
q.isFF&&this.setStyle('-moz-user-select','none')
q.isWebKit&&this.setStyle('-webkit-user-select','none')
q.isIE>9&&this.setStyle('-ms-user-select','none');(q.isIE<10||q.isOpera)&&this.on('selectstart',K)}
return this}
H.prototype.getDisabled=function(){return this.dom.disabled}
H.prototype.setDisabled=function(J){J=n(J)
for(var K=0,L=this.children.length;K<L;K++)if(this.children[K] instanceof H)this.children[K].setDisabled(J)
this[J?'addClass':'removeClass']('disabled')
this.dom.disabled=J
return this}
H.prototype.getReadOnly=function(){return this.dom.readOnly}
H.prototype.setReadOnly=function(J){J=n(J)
for(var K=0,L=this.children.length;K<L;K++)if(this.children[K] instanceof H)this.children[K].setReadOnly(J)
this.dom.readOnly=J
return this}
H.prototype.getValue=function(){return this.dom.value}
H.prototype.setValue=function(J){this.dom.value=k(J,'allowNull')?'':J
return this}
H.prototype.getType=function(){return this.getAttribute('type')}
H.prototype.setType=function(J){try {this.dom.setAttribute('type',J)}catch(K){;}
return this}
H.prototype.getName=function(){return this.getAttribute('name')}
H.prototype.setName=function(J){return this.setAttribute('name',J)}
H.prototype.getTabIndex=H.prototype.getTabindex=function(){try {return this.dom.tabIndex}catch(J){;}}
H.prototype.setTabIndex=H.prototype.setTabindex=function(J){try {this.dom.tabIndex=J}catch(K){;}
return this}
H.prototype.setPlacement=function(J){if(!J||!this.parentNode||!(this.parentNode instanceof H))return
var K=this.parentNode.getContainer(J)
if(!K)return
if(n(this.attributes.discardPlacement)){while(this.children.length)K.appendChild(this.children[0])
this.destroy()
return}
K.appendChild(K instanceof H?this:this.dom)
return this}
H.prototype.setContainer=function(J){this.attributes.container=J
return this}
H.prototype.getContainer=function(J){if(!J)return
if(this.attributes.container==J)return this
var K,L=this.children.length
for(var M=0;M<L;M++)if(typeof this.children[M].getContainer=='function'){K=this.children[M].getContainer(J)
if(K)return K}
return}
H.prototype.getPseudo=function(){return this._pseudo}
H.prototype.setPseudo=function(J){if(this._pseudo)this.removeClass(J)
this._pseudo=J
if(this._pseudo)this.addClass(J)
return this}
H.prototype.setUseDisplay=function(J){this.useDisplay=n(J)
return this}
H.prototype.getElement=function(J){return w.get(this.jx_id+'__'+J)}
H.prototype.setLabel=function(J){this.label=J
return this}
H.prototype.getLabel=function(){return this.label||''}
for(var I=0;I<y.length;I++)H.prototype[F('set-'+y[I])]=B(F(y[I]))
for(I=0;I<z.length;I++)H.prototype[F('set-'+z[I])]=C(F(z[I]))
H.__jx__no_fqname=!0
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","jx_ui_HTMLElement"].join('')
H.prototype.__jx__fqname="jx_ui_HTMLElement"}
return H})()
b.__$$__jx_io_Socket=(function(){var x=b.__$$__jx_data_JSON,y=b.__$$__jx_io_socket_ChunkedXHR,z=b.__$$__jx_io_socket_StreamingPostMessage,A=b.__$$__jx_io_socket_StreamingHTMLFile,B=b.__$$__jx_io_socket_WebSocket,C=b.__$$__jx_io_socket_XDomainDynScript,D=B||y||z||A||C,E=C,F=45000,G={INITIAL_RTT:1000,RECONNECT_DELAY_MS:30000,FAST_RECONNECT_MS:100,FLUSH_DELAY_MS:75,MAX_BLOCKING_TIME_MS:40}
function H(U,V,W,X){if(!D)throw 'No available transports'
this.provider=D
this.options=X=X||{}
for(var Y in G)if(G.hasOwnProperty(Y))if(!(Y in X))X[Y]=G[Y]
r.extend(this)
this.id=W||H.generateID()
this.host=U
this.ns=V
this.path='/'+['s',this.ns,this.provider.protocol,this.id].join('/')
this.url=this.host+this.path+'/'
this.status='connecting'
this.connected=!1
this.quality=0
this.rtt=X.INITIAL_RTT
this.clock_skew=0
this.connect_attempts=0
this.connections=0
this.disconnects=0
this.sent_bytes=0
this.recv_bytes=0
this.sent_messages=0
this.recv_messages=0
this.sent_frames=0
this.recv_frames=0
this.lost_frames=0
this.ooo_frames=0
this.remote_seq=0
this.local_seq=0
this.timeout_server=0
this.timeout_response_soft=0
this.timeout_response_hard=0
this.bytes_at_connect=-1
this.time_last_alive=-1
this.time_last_open=-1
this.starttime=+new Date()
this.uptime=0
this.connected_time=new R()
this.idle_time=new R()
this.last_frame_time=0
this.raw_clock_skew=0
this.smooth_skewed_transit_time_in=0
this.remote_smooth_skewed_transit_time_out=0
this.drained=!0
this.buffer=[]
this.glitch_timer=this.reconnect_timer=null
this.reconnect_delay=X.RECONNECT_DELAY_MS*(Math.random()*0.2+0.8)
this.keep_alive_interval=15000
this.data_packet_queue=new S(this)
this.connect()
var Z=this
r.window.on('offline',function(){Z.onoffline()})
r.window.on('online',function(){Z.ononline()})}
H.available=function(){return !!D}
H.generateID=function(){return P(16)}
H.prototype.connect=function(U){this.debug('connect('+(U&&'glitch'||'')+')')
if(this.reconnect_timer)return
var V=this,W=this.options
if(!this.connections)this.provider=this.connect_attempts&1?E:D
this.response_timer=clearTimeout(this.response_timer)
this.timeout_timer=clearTimeout(this.timeout_timer)
if(this.socket){this.socket.onclose=this.socket.ondrain=this.socket.onerror=this.socket.onmessage=this.socket.onopen=null
this.socket.abort('connect')
this.socket=null}
this.connected=!1
if(U){this.reconnect_delay=W.RECONNECT_DELAY_MS*(Math.random()*0.2+0.9)
this.glitch_timer=setTimeout(function(){V.quality=0
V.glitch_timer=setTimeout(function(){V.status='reconnecting'
V.fire_break()},Q(V.rtt*3,1000,5000))},Q(this.rtt*3,1000,5000))}
this.debug('reconnect_delay: '+this.reconnect_delay)
clearTimeout(this.reconnect_timer)
this.reconnect_timer=setTimeout(function(){V.reconnect_timer=null
V.reconnect_delay=Math.min(V.reconnect_delay*1.4+1000,60000)
V.reconnect_delay*=Math.random()*0.2+0.9
V.connect()},this.reconnect_delay)
this.path='/'+['s',this.ns,this.provider.protocol,this.id].join('/')
this.url=this.host+this.path+'/'
this.debug('connecting: '+this.url)
this.socket=new this.provider(this.url)
this.transport=this.provider.protocol
this.connect_attempts++
this.socket.onopen=function(){V.glitch_timer=clearTimeout(V.glitch_timer)
V.reconnect_timer=clearTimeout(V.reconnect_timer)
V.connections++
V.drained=!0
V.connected=!0
V.time_last_open=V.time_last_alive=+new Date()
if(V.uptime>=0)V.uptime-=V.time_last_open
if(V.connections==1)V.fire('open')
else V.fire_resume()
V.status='connected'
V.flush()
V.keep_alive()
V.debug('connected')
if(V.bytes_at_connect==-1)setTimeout(function(){V.bytes_at_connect=V.recv_bytes},50)}
this.socket.onmessage=function(X,Y){V.onmessage(X,Y)}
this.socket.onclose=function(X){V._onclose(X)}
this.socket.ondrain=function(X){V._ondrain(X)}
this.socket.onerror=function(X){V._onerror(X)}}
H.prototype.reconnect=function(){this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.broken_reason='FORCED_RECONNECT'
this.connect()}
H.prototype.send=function(U,V){if(this.status=='disconnected')return
if(this.buffer[0]=='null')this.buffer=[]
this.buffer.push(x.stringify(U))
this.schedule_flush()
V&&this.response_timeout()}
H.prototype.close=function(U){this.debug('close()')
this.flush_scheduled=clearTimeout(this.flush_scheduled)
this.keep_alive_timer=clearTimeout(this.keep_alive_timer)
this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.response_timer=clearTimeout(this.response_timer)
this.timeout_timer=clearTimeout(this.timeout_timer)
if(!this.broken_reason)this.broken_reason='CLOSE'
this.fire_break()
this.status=U?'reconnecting':'disconnected'
this.connected=!1
this.quality=0
if(!this.socket)return
this.socket.onclose=this.socket.ondrain=this.socket.onerror=this.socket.onmessage=this.socket.onopen=null
this.socket.abort('close')
this.socket=null}
H.prototype.hibernate=function(){}
H.prototype.onoffline=function(){this.broken_reason='OFFLINE'
this.debug('onoffline')
this.close(!0)}
H.prototype.ononline=function(){this.debug('ononline')
if(!this.connected){this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.connect()}}
H.prototype.schedule_flush=function(){if(this.flush_scheduled||!this.drained||!this.connected)return
var U=this,V=this.options
this.flush_scheduled=setTimeout(function(){U.flush()},V.FLUSH_DELAY_MS)}
H.prototype.flush=function(){if(!this.buffer.length||!this.drained||!this.connected)return
var U=this.buffer
this.sent_messages+=U.length
this.sent_frames++
U=this.generate_frame(U.join('\n'))
this.drained=this.socket.send(U)
this.sent_bytes+=U.length
this.flush_scheduled=!1
this.buffer=[]
this.keep_alive()
this.time_last_alive=+new Date()}
H.prototype.keep_alive=function(){clearTimeout(this.keep_alive_timer)
var U=this
this.keep_alive_timer=setTimeout(function(){U.debug('pong!')
U.send(null)},this.keep_alive_interval)}
H.prototype.response_timeout=function(){if(this.response_timer)return
var U=this,V=Q(this.rtt*4+this.options.FLUSH_DELAY_MS,2000,20000)
this.response_timer=setTimeout(function(){U.timeout_response_soft++
U.debug('response timeout, '+V+'ms')
U.fire_break('SOFT_RESPONSE_TIMEOUT')
U.response_timer=setTimeout(function(){U.timeout_response_hard++
U.debug('response timeout - reconnecting')
U.broken_reason='HARD_RESPONSE_TIMEOUT'
U.connect(!0)},V*2)},V)}
H.prototype.reset_server_timeout=function(){clearTimeout(this.timeout_timer)
var U=this,V=this.keep_alive_interval*4+Q(U.rtt*4,2000,20000)
this.timeout_timer=setTimeout(function(){U.timeout_server++
U.debug('server '+V+'ms timeout, reconnecting')
U.broken_reason='SERVER_TIMEOUT'
U.connect(!0)},V)}
H.prototype.fire_break=function(U){this.broken||this.fire('break',U||this.broken_reason)
this.broken=!0
this.broken_reason=''
if(this.uptime<0)this.uptime+=+new Date()}
H.prototype.fire_resume=function(){this.broken_reason=''
this.broken&&this.fire('resume')
this.broken=!1
if(this.uptime>=0)this.uptime-=+new Date()}
H.prototype.onmessage=function(U,V){this.recv_bytes+=U.length
U=U.split('\n')
if(U.length<6){this.debug('Bad data: '+U.join('\n'))
return}
var W=+new Date(),X=+U[0],Y=+U[1],Z=+U[2],$$=+U[3],$_=U[4]
this.calculate_clocks(V||+new Date(),X,Y)
this.reset_server_timeout()
$$
switch($_){case 'a':this.broken_reason='ABORT'
this.close()
break
case 'd':this.response_timer=clearTimeout(this.response_timer)
this.fire_resume()
this.check_sequence(Z)
this.data_packet_queue.queueFrame(U,5,W)
break
case 'e':this.debug('server: Are you still there?')
this.send(null)
break
case 'n':this.remote_seq=Z
this.keep_alive_interval=+U[5]||15000
this.debug('keep_alive is '+this.keep_alive_interval+'ms')
if(this.connections>1)this.fire('reopen')
break
case 'p':this.debug('ping!')
break}}
H.prototype._onclose=function(U){var V=this,W=this.options
if(this.connections==0&&this.disconnects==0)this.fire('close')
this.debug('_onclose')
this.disconnects++
this.broken_reason='HANGUP'
if(this.connected)this.reconnect_timer=setTimeout(function(){V.reconnect_timer=null
V.connect(!0)},W.FAST_RECONNECT_MS)
else if(!this.connections&&this.connect_attempts==1){clearTimeout(this.reconnect_timer)
this.reconnect_timer=setTimeout(function(){V.reconnect_timer=null
V.connect()},0)}
this.connected=!1
clearTimeout(this.keep_alive_timer)
if(this.time_last_alive>0)this.idle_time.add(+new Date()-this.time_last_alive)
if(this.time_last_open>0)this.connected_time.add(+new Date()-this.time_last_open)
this.time_last_alive=this.time_last_open=-1
if(this.uptime<0)this.uptime+=+new Date()}
H.prototype._ondrain=function(){this.drained=!0
this.flush()}
H.prototype._onerror=function(U){this.debug('_error')
this.fire('error',U)}
H.prototype.generate_frame=function(U,V){return [+new Date(),this.smooth_skewed_transit_time_in,(++this.local_seq),this.remote_seq,V||'d',U].join('\n')}
var I=0.1,J=50,K=1000,L=Math.pow(J,I),M=Math.pow(K,I)-L
H.prototype.calculate_clocks=function(U,V,W){var X=U-V,Y=U-this.last_frame_time,Z=1/(Y/F+1)
if(this.smooth_skewed_transit_time_in)this.smooth_skewed_transit_time_in=Z*this.smooth_skewed_transit_time_in+(1-Z)*X
else this.smooth_skewed_transit_time_in=X
this.remote_smooth_skewed_transit_time_out=W
if(this.smooth_skewed_transit_time_in&&this.remote_smooth_skewed_transit_time_out){this.rtt=this.smooth_skewed_transit_time_in+this.remote_smooth_skewed_transit_time_out
this.quality=~~(100*(1-(Math.pow(this.rtt,I)-L)/M))
this.quality=Math.min(100,Math.max(0,this.quality))
this.raw_clock_skew=X-this.rtt/2
if(this.clock_skew)this.clock_skew=0.9*this.clock_skew+0.1*this.raw_clock_skew
else this.clock_skew=this.raw_clock_skew}
this.time_last_alive=this.last_frame_time=U}
H.prototype.check_sequence=function(U){if(this.remote_seq+1==U)this.remote_seq=U
else if(this.remote_seq<U){var V=U-this.remote_seq+1
this.lost_frames+=V
this.fire('lost',V)
this.remote_seq=U}
else{this.ooo_frames++
this.fire('out_of_order')}}
D&&(H.prototype.transport=D.protocol)
H.prototype.debug=function(){}
var N="+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function O(){var U=N,V=new Date(),W=V.getUTCFullYear()-2000,X=V.getUTCMonth()+1,Y=V.getUTCDate(),Z=V.getUTCHours(),$$=V.getUTCMinutes(),$_=V.getUTCSeconds(),$a=V.getUTCMilliseconds()
return U[W]+U[X]+U[Y]+U[Z]+U[$$]+U[$_]+U[$a>>6]+U[$a&63]}
function P(U){var V='',W=N
while(U-->0)V+=W.charAt(Math.floor(Math.random()*W.length))
return V}
H.genDate=O
H.genID=P
function Q(U,V,W){return Math.min(W,Math.max(V,U))}
function R(){this.count=0
this.sum=0
this.sq_sum=0
this.mean=0
this.stddev=0}
R.prototype.add=function(U){this.count++
this.sum+=U
this.sq_sum+=U*U
this.mean=this.sum/this.count
this.stddev=Math.sqrt(this.sq_sum/this.count-this.mean*this.mean)}
function S(U){this.socket=U
this.queue=[]
this.curFrame=null
this.curIdx=0
this.processing=!1}
var T=S.prototype
T.queueFrame=function(U,V,W){this.queue.push({msgs:U,start_idx:V,receive_time:W})
this.process()}
T.process=function(){if(this.processing)return
this.processing=!0
this.work()}
T.work=function(){var U=(+new Date())+this.socket.options.MAX_BLOCKING_TIME_MS,V=!1,W,X,Y,Z=this.socket.recv_frames
for(var $$=0;$$<this.queue.length;$$++){W=this.queue[$$]
if(!('start_time' in W)){W.start_time=+new Date()
W.ticks=0
W.idx=W.start_idx}
W.ticks++
X=W.msgs
Y=X.length
while(W.idx<Y){var $_=+new Date(),$a
if($_>U){V=!0
break}
this.socket.dispatch_delay=$_-W.receive_time
try {$a=x.parse(X[W.idx])
W.idx++}catch($b){this.socket.debug("Invalid json message: "+X[W.idx])
continue}
this.socket.fire('message',$a)
this.socket.recv_messages++}
if(W.idx>=Y){this.socket.recv_frames++}
if(V)break}
this.queue.splice(0,this.socket.recv_frames-Z)
if(this.queue.length){l(this.work,this)}
else{this.processing=!1}}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","jx_io_Socket"].join('')
H.prototype.__jx__fqname="jx_io_Socket"}
return H})()
b.__$$__meshim_common_Sounds=(function(){var x=b.__$$__meshim_common_sounds_AudioTag,y=b.__$$__meshim_common_sounds_FlashSound,z=b.__$$__meshim_common_sounds_BGSoundTag
function A(E){var F
this.url=E
F=new x(E)
if(F.dom)return F
F=new y(E)
if(F.dom)return F
F=new z(E)
if(F.dom)return F}
A.prototype.play=A.prototype.setVolume=A.prototype.setLoop=B
function B(){return this}
var C='/dashboard/sounds/'
function D(E){if(!/\/$/.test(E))E+='/'
this.repo_url=E||C
this.repo={}}
D.prototype.create=function(E,F,G,H){var I=new A(this.repo_url+F)
G&&I.setVolume(G)
H&&I.setLoop(H)
I.title=F
this.repo[E]=I
return this}
D.prototype.getSound=function(E){var F=this.repo[E]
if(F)return F
throw ('you have not created '+E+' sound yet')}
D.prototype.hasSound=function(E){try {this.getSound(E)
return !0}catch(F){return !1}}
D.prototype.setSrc=function(E,F){this.getSound(E).load(C+F)
return this}
D.prototype.getTitle=function(E){this.getSound(E).title}
D.prototype.play=function(E,F){this.getSound(E).play(parseInt(F,10)||0)
return this}
D.prototype.stop=function(E){this.getSound(E).stop()
return this}
D.prototype.setVolume=function(E,F){this.getSound(E).setVolume(F)
return this}
D.prototype.setLoop=function(E,F){this.getSound(E).setLoop(F)
return this}
D.prototype.getLoop=function(E){this.getSound(E).loop}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_common_Sounds"].join('')
D.prototype.__jx__fqname="meshim_common_Sounds"}
return D})()
b.__$$__jx_ui_html_p=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='p'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_p"].join('')
y.prototype.__jx__fqname="jx_ui_html_p"}
return y})()
b.__$$__meshim_common_GeoAccessFactory=(function(){var x=b.__$$__meshim_common_GeoAccess,y='VN'.toUpperCase(),z='US'.toUpperCase()
if(y.charAt(0)=='<')y='geo'
if(z.charAt(0)=='<')z='geo'
function A(C,D){this.clusters_config=C
this.countryCode=(y==='geo')?z:y
try {if(D.length<=0)throw 'SSI cluster definition not found'
if(D.charAt(0)=='<')throw 'SSI not processed'
this.clusters_config=JSON.parse(D)}catch(E){;}}
var B=A.prototype
B.getGeoCode=function C(){return this.countryCode}
B.getGeoAccess=function C(D){return new x(this.clusters_config,this.countryCode,D||[])}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_common_GeoAccessFactory"].join('')
A.prototype.__jx__fqname="meshim_common_GeoAccessFactory"}
return A})()
b.__$$__meshim_common_VmlShape=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F
F=D.createVMLNode(E,'shape')
F.className="vml"
F.style.width="100%"
F.style.height="100%"
F.stroked=!1
F.filled=!0
F.fillColor="#000000"
F.vectorType='vml'
var G=D.createVMLNode(E,'skew')
G.className='vml'
G.setAttribute('on','true')
G.setAttribute('matrix','1,0,0,1,0,0')
G.setAttribute('offset','-0.5,-0.5')
F.appendChild(G)
w.extend(F)
r.extend(F)
w.set(z,F)
var H=!1
F.appendToParent=function(K){if(!w.hasParentNode(F))w.appendChild(y,F)
if(K&&!H){if(y.appendToParent)y.appendToParent(!0)
H=!0}
if(F.vectorType=='vml'){F.style.width='100%'
F.style.height='100%'}}
F.moveRight=function(K){var L=parseInt(K,10)
if(isNaN(L))return F
F.style.left=(parseInt(F.style.left,10)||0)+L
var M=F.style.display
F.style.display='none'
F.style.display=M}
F.setLeft=F.moveRight
F.moveDown=function(K){var L=parseInt(K,10)
if(isNaN(L))return F
F.style.top=(parseInt(F.style.top,10)||0)+L
var M=F.style.display
F.style.display='none'
F.style.display=M}
F.setTop=F.moveDown
F.setPath=function(K){var L,M
K=K.replace(/c/g,'v').replace(/z/g,'x').replace(/m/g,'t').replace(/l/g,'r').replace(/L/g,'l')+'e'
M=F.getElementsByTagName('v:path')[0];(M)?L=M:L=D.createVMLNode(E,'path')
L.className='vml'
L.setAttribute('v',K)
F.appendChild(L)
return F}
F.setOpacity=function(K){var L=parseFloat(K),M=D.createVMLNode(E,'fill')
M.className='vml'
M.setAttribute('opacity',L)
M.setAttribute('o:opacity2',L)
F.appendChild(M)
return F}
F.setFill=function(K){var L=D.createVMLNode(E,'fill')
L.className='vml'
if(/linear/.test(K)){L=D.generateVmlLinearGradient(E,K)}
else{L=D.createVMLNode(E,'fill')
L.className='vml';(K=='none')?L.setAttribute('on','false'):L.setAttribute('on','true')
L.setAttribute('color',K)}
F.appendChild(L)
return F}
F.setStroke=function(K){var L=D.createVMLNode(E,'stroke')
L.className='vml';(K=='none')?L.setAttribute('on','false'):L.setAttribute('on','true')
L.setAttribute('color',K)
F.appendChild(L)
return F}
F.setStrokeWidth=function(K){var L=D.createVMLNode(E,'stroke')
L.className='vml'
K=parseInt(K,10)
L.setAttribute('on','true')
L.setAttribute('weight',K)
F.appendChild(L)
return F}
var I=1,J=1
F.resetTransform=function(){I=J=1
F.style.left=F.style.top=NaN
return F}
F.flipAlong=function(K){K=K.split('')
for(var L=0;L<K.length;L++)switch(K[L]){case 'x':I=-I
break
case 'y':J=-J
break}
var M=''
if(I==-1)M+='x'
if(J==-1)M+='y'
F.style.flip=M
return F}
F.setShadow=function(K){var L=D.createVMLNode(E,'shadow')
L.className='vml'
K=D.parseShadow(K)
L.setAttribute('on','true')
L.setAttribute('opacity',K.opacity)
L.setAttribute('color',K.color)
L.setAttribute('offset',K.offsetX+'px,'+K.offsetY+'px')
F.appendChild(L)
return F}
w.addChildren(F,B)
F.appendToParent()
F.setStyle(A)
F.setAttributes(C)
return F}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_VmlShape"].join('')
x.prototype.__jx__fqname="meshim_common_VmlShape"}
return x})()
b.__$$__meshim_widget_utils_Utils=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_Cookie,z='-webkit- -moz- -o- -ms- '.split(' '),A='webkit Moz O ms '.split(' '),B=['transition','MozTransition','OTransition','WebkitTransition'],C=['transitionend','transitionend','otransitionend','webkitTransitionEnd'],D=['animationend','animationend','oanimationend','webkitAnimationEnd'],E={contains:F(),onTransitionEnd:G(!0,C),unTransitionEnd:G(!1,C),onAnimationEnd:G(!0,D),unAnimationEnd:G(!1,D),css_prefixes:z,cssom_prefixes:A,isStyleSupported:H(),shallowExtend:I,fullyExtend:J,computedHeightBoxSizingBug:L,getComputedHeight:N,hoverFix:O,getEffectiveTLD:S,descendsObj:P,insertObj:Q,isDefaultName:U,getKeys:V,supportsDataURI:W,isIE:X(),hackTitleLocalization:Z,pad:$$,formatMinutesAsHours:$_,replaceFileHostname:$a}
function F(){var $b=document.documentElement
if($b.compareDocumentPosition)return function($c,$d){$c=$c.dom||$c
$d=$d.dom||$d
return !!($c.compareDocumentPosition($d)&16)}
else if($b.contains)return function($c,$d){$c=$c.dom||$c
$d=$d.dom||$d
var $e=$c.nodeType===9?$c.documentElement:$c,$f=$d.parentNode
return $c===$f||!!($f&&$f.nodeType===1&&$e.contains&&$e.contains($f))}
else return function($c,$d){$c=$c.dom||$c
$d=$d.dom||$d
while(($d=$d.parentNode)){if($d===$c)return !0}
return !1}}
function G($b,$c){var $d=document.createElement('div'),$e
for(var $f=0,$g=B.length;$f<$g;$f++){if($d.style[B[$f]]!==a){$e=$c[$f]
break}}
if(!$e){return function(){}}
if($b){return function($h,$i,$j){$h.autobind($i,$e,$j)}}
else{return function($h,$i,$j){if(!C)return
$h.autounbind($i,$e,$j)}}}
function H(){var $b=document.createElement('div'),$c=$b.style
function $d($e){var $f=$e.charAt(0).toUpperCase()+$e.slice(1),$g=($e+' '+A.join($f+' ')+$f).split(' ')
for(var $h=0;$h<$g.length;$h++){if($c[$g[$h]]!==a)return !0}
return !1}
return $d}
function I(){var $b=arguments.length,$c=1,$d=arguments[0]||{},$e,$f
for(;$c<$b;$c++){if(($e=arguments[$c])==null)continue
for($f in $e)if($e.hasOwnProperty($f))if($d!==$e[$f])$d[$f]=$e[$f]}
return $d}
function J($b,$c){for(var $d in $c)if($c.hasOwnProperty($d)){if($c[$d]&&$c[$d].constructor&&$c[$d].constructor===Object){$b[$d]=$b[$d]||{}
J($b[$d],$c[$d])}
else{$b[$d]=$c[$d]}}
return $b}
var K
function L(){if(K===a)try {K=M()}catch($b){;}
return K}
function M(){if(!window.getComputedStyle)return !1
var $b=document.createElement('div'),$c='border-box'
document.body.appendChild($b)
$b.style.height='10px'
$b.style.padding='5px'
$b.style.boxSizing=$c
$b.style.webkitBoxSizing=$c
$b.style.mozBoxSizing=$c
var $d=parseInt(window.getComputedStyle($b).height,10)
document.body.removeChild($b)
return $d!=10}
function N($b){var $c=$b.getComputedStyle()
if($c.height=='auto')return $b.getHeight()
var $d=parseInt($c.height,10)||0
if(E.computedHeightBoxSizingBug())$d+=(parseInt($c.paddingTop,10)||0)+(parseInt($c.paddingBottom,10)||0)+(parseInt($c.borderTopWidth,10)||0)+(parseInt($c.borderBottomWidth,10)||0)
return $d+'px'}
function O($b){if(!q.bugs.noBoxSizing)return
$b.on('mouseover',$c)
$b.on('mouseout',$d)
function $c(){this.addClass('hover')}
function $d(){this.removeClass('hover')}}
function P($b,$c){var $d=$c.split('.'),$e
while($d.length){$e=$d.shift()
if(!$b[$e])$b[$e]={}
$b=$b[$e]}
return $b}
function Q($b,$c,$d){$b=$b.split('.')
var $e=$b.pop()
if(!$e)return
for(var $f=0,$g=$b.length;$f<$g;$f++){if(!($b[$f] in $d)){$d[$b[$f]]={}}
$d=$d[$b[$f]]}
$d[$e]=$c}
var R=/^(com|net|mil|gov|edu|eu)$/
function S(){var $b='zte2095',$c=window.location.hostname.split('.'),$d=$c.length
if(R.test($c[$d-1])){return '.'+$c.splice($d-2,2).join('.')}
var $e='.'+$c[$d-1]
$c.pop()
while($c.length){$e='.'+$c.pop()+$e
var $f={domain:$e,path:'/'}
y.set($b,'1',$f)
if(y.get($b)=='1'){y.remove($b,$f)
break}}
return $e}
var T=/^Visitor [0-9]{3,}$/
function U($b){return T.test($b)}
function V($b){if(!$b||typeof $b!='object')return
var $c=[]
for(var $d in $b)if($b.hasOwnProperty($d)){$c.push($d)}
return $c}
function W($b){if(!window.Image){$b()
return}
try {var $c=new window.Image()
$c.onload=$c.onerror=function(){$b(!(this.width!=1||this.height!=1))}
$c.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}catch($d){$b()}}
function X(){return q.isIE||/Trident\//.test(window.navigator.userAgent)}
var Y=b.__$$__jx_ui_HTMLElement
function Z(){Z=function(){}
if(!(v&&v.onLanguage))return
Y.prototype.setTitle=function($b){var $c=this
if(v&&v.onLanguage&&!this._l10nTitleBound){this._l10nTitleBound=!0
v.onLanguage($d)
this.onDestruction($e)}
this._l10nTitleValue=$b
this.dom.title=this._l10nTitleValue||''
return this
function $d(){$c.setTitle($c._l10nTitleValue)}
function $e(){v.unLanguage($d)}}}
function $$($b,$c){$b=parseInt($b,10)
if(isNaN($b))$b=0
var $d=$b<0
$b=Math.abs($b).toString().split('')
var $e=Math.max($c-$b.length,0)
while($e--)$b.unshift('0')
if($d)$b.unshift('-')
return $b.join('')}
function $_($b){var $c=24
return [E.pad($d(Math[$b>0?'floor':'ceil']($b/60)),2),E.pad(Math.abs($b)%60,2)].join(':')
function $d($e){return $e-(Math[$e>0?'floor':'ceil']($e/$c)*$c)}}
function $a($b){return $b&&$b.replace(x.FILE_REPLACE_SOURCE,x.FILE_REPLACE_RESULT)}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Utils"].join('')
E.prototype.__jx__fqname="meshim_widget_utils_Utils"}
return E})()
b.__$$__jx_ui_html_div=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='div'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_div"].join('')
y.prototype.__jx__fqname="jx_ui_html_div"}
return y})()
b.__$$__jx_ui_html_td=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='td'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_td"].join('')
y.prototype.__jx__fqname="jx_ui_html_td"}
return y})()
b.__$$__jx_ui_html_tr=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='tr'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_tr"].join('')
y.prototype.__jx__fqname="jx_ui_html_tr"}
return y})()
b.__$$__meshim_common_SvgShape=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F
F=E.createElementNS("http://www.w3.org/2000/svg",'path')
F.vectorType='svg'
w.extend(F)
r.extend(F)
w.set(z,F)
var G=!1
F.appendToParent=function(O){if(!w.hasParentNode(F))w.appendChild(y,F)
if(O&&!G){if(y.appendToParent)y.appendToParent(!0)
G=!0}}
F.setClass=function(O){F.setAttribute('class',O)
return F}
F.addClass=function(O){F.setAttribute('class',F.getAttribute('class')+' '+O)
return F}
F.removeClass=function(O){var P=F.getAttribute('class'),Q=new RegExp('\\b'+O+'\\b','g')
P.replace(Q,'')
F.setAttribute('class',P)
return F}
F.setPath=function(O){F.setAttribute('d',O)
return F}
F.setOpacity=function(O){F.style.opacity=parseFloat(O)
return F}
F.setFill=function(O){if(/linear/.test(O)){L(O)}
else{F.setAttribute('fill',O)}
return F}
F.setStroke=function(O){F.setAttribute('stroke',O)
return F}
F.setStrokeWidth=function(O){F.setAttribute('stroke-width',O)
return F}
var H=[[1,0,0],[0,1,0],[0,0,1]]
function I(O,P){return [[O,0,0],[0,P,0],[0,0,1]]}
function J(O,P){return [[1,0,O],[0,1,P],[0,0,1]]}
function K(O){return [O[0][0],O[1][0],O[0][1],O[1][1],O[0][2],O[1][2]].join(' ')}
F.resetTransform=function(){F.setAttribute('transform','')
H=[[1,0,0],[0,1,0],[0,0,1]]
return F}
F.moveRight=function(O){var P=parseInt(O,10)
if(isNaN(P))return F
H=N(H,J(P,0))
F.setAttribute('transform','matrix('+K(H)+')')
return F}
F.setLeft=F.moveRight
F.moveDown=function(O){var P=parseInt(O,10)
if(isNaN(P))return F
H=N(H,J(0,P))
F.setAttribute('transform','matrix('+K(H)+')')
return F}
F.setTop=F.moveDown
F.flipAlong=function(O){O=O.split('')
for(var P=0;P<O.length;P++){var Q=F.getBBox()
switch(O[P]){case 'x':H=N(H,I(-1,1),J(-(2*Q.x+Q.width),0))
F.setAttribute('transform','matrix('+K(H)+')')
break
case 'y':H=N(H,I(1,-1),J(0,-(2*Q.y+Q.height)))
F.setAttribute('transform','matrix('+K(H)+')')
break}}
if(q.isWebkit){var R=F.getAttribute('filter')
F.setAttribute('filter','')
F.setAttribute('filter',R)}
return F}
F.setShadow=function(O){O=D.parseShadow(O)
var P,Q
if(q.isOpera)return
var R={'feOffset':{'result':'offset-out','in':'SourceGraphic','dx':O.offsetX,'dy':O.offsetY},'feColorMatrix':{'result':'matrix-out','in':'offset-out','type':'matrix','values':'0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0'},'feGaussianBlur':{'result':'blur-out','in':'matrix-out','stdDeviation':O.blurRadius/2},'feBlend':{'in':'SourceGraphic','in2':'blur-out','mode':'normal'}}
P=E.createElementNS('http://www.w3.org/2000/svg','filter'),Q='sha_'+new Date().getTime()
P.setAttribute('id',Q)
var S=M(R,'http://www.w3.org/2000/svg')
for(var T=0;T<S.length;T++)P.appendChild(S[T])
var U=E.createElementNS('http://www.w3.org/2000/svg','defs')
U.appendChild(P)
F.parentNode.appendChild(U)
F.setAttribute('filter','url(#'+Q+')')
return F}
function L(O){var P=D.generateSvgLinearGradient(E,O),Q=E.createElementNS('http://www.w3.org/2000/svg','defs')
Q.appendChild(P)
F.parentNode.appendChild(Q)
F.setAttribute('fill','url(#'+P.id+')')
return F}
function M(O,P){var Q=[],R,S
for(var T in O)if(O.hasOwnProperty(T)){(P)?R=E.createElementNS(P,T):R=E.createElement(T)
S=O[T]
for(var U in S)if(S.hasOwnProperty(U))R.setAttribute(U,S[U])
Q.push(R)}
return Q}
function N(){var O=[[1,0,0],[0,1,0],[0,0,1]]
for(var P=0;P<arguments.length;P++){var Q=[],R=arguments[P]
for(var S=0;S<3;S++){Q[S]=[]
for(var T=0;T<3;T++){var U=0
for(var V=0;V<3;V++){U+=O[S][V]*R[V][T]}
Q[S][T]=U}}
O=Q}
return O}
w.addChildren(F,B)
F.appendToParent()
F.setStyle(A)
F.setAttributes(C)
return F}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_SvgShape"].join('')
x.prototype.__jx__fqname="meshim_common_SvgShape"}
return x})()
b.__$$__jx_ui_html_a=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='a'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_a"].join('')
y.prototype.__jx__fqname="jx_ui_html_a"}
return y})()
b.__$$__jx_ui_html_tbody=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='tbody'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_tbody"].join('')
y.prototype.__jx__fqname="jx_ui_html_tbody"}
return y})()
b.__$$__meshim_widget_themes_Base=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_utils_Color,z={}
z._super=null
z.defaults={colors:{primary$string:'#000000',banner$string:'#000000',bubble$string:'#000000'}}
z.overrides={avatars:{concierge$string:x.IMAGES_URL+'/avatar_simple_agent.png',agent$string:x.IMAGES_URL+'/avatar_simple_agent.png',visitor$string:x.IMAGES_URL+'/avatar_simple_visitor.png'},chat_button:{display_status$bool:!1,use_bubble$bool:!1},chat_window:{hide_profile_card$bool:!1,use_banner$bool:!0}}
z.generate=function(){var A={fontFamily:"Verdana, Geneva, sans-serif",fontSizeXS:"10px",fontSizeS:"11px",fontSize:"12px",fontSizeL:"14px",fontSizeXL:"16px",fontSizeXXL:"18px",marginXS:"3px",marginS:"5px",margin:"10px",marginL:"15px",marginXL:"20px",paddingS:"3px",padding:"6px",paddingL:"8px",paddingXL:"10px",borderWidth:"1px",borderStyle:"solid",borderColor:y.black,radiusS:"3px",radius:"5px",headColor:y.white,headBg:y.black,headLowContrastColor:y.grey,contentColor:y.black,contentHeaderColor:y.black,contentBg:y.white,contentBlockBg:y.grey,contentBlockRadius:"$$radius",placeholderColor:y.grey,inputMenuBg:y.white,errorColor:"#CC0000",dividerColor:y.grey,inputColor:y.black,inputBg:"$$inputMenuBg",inputBorderWidth:"$$borderWidth",inputBorderStyle:"$$borderStyle",inputBorderColor:"$$borderColor",inputPadding:"$$padding",inputRadius:"$$radius",inputShadow:"",inputFocusColor:"",inputFocusBg:"",inputFocusBorderColor:"",inputFocusShadow:"",inputPlaceholderColor:"$$placeholderColor",inputPlaceholderFontStyle:"italic",inputInvalidColor:"",inputInvalidBg:"",inputInvalidBorderColor:"$$errorColor",inputInvalidShadow:"",buttonColor:y.white,buttonBg:y.black,buttonBorderWidth:"$$borderWidth",buttonBorderStyle:"$$borderStyle",buttonBorderColor:"",buttonPadding:"$$padding",buttonPaddingHorizontal:"$$paddingS",buttonRadius:"$$radiusS",buttonShadow:"",buttonFontWeight:"bold",buttonHoverColor:"",buttonHoverBg:"",buttonHoverBorderColor:"",buttonHoverShadow:"",buttonActiveColor:"",buttonActiveBg:"",buttonActiveBorderColor:"",buttonActiveShadow:"",buttonSecColor:y.white,buttonSecBg:y.grey,buttonSecBorderColor:"",buttonSecShadow:"",buttonSecHoverColor:"",buttonSecHoverBg:"",buttonSecHoverBorderColor:"",buttonSecHoverShadow:"",buttonSecActiveColor:"",buttonSecActiveBg:"",buttonSecActiveBorderColor:"",buttonSecActiveShadow:"",buttonShortPadding:"$$paddingS",formSubmittedBg:"$$contentBlockBg",formSubmittedRadius:"$$radius",formSubmittedBorderWidth:0,formSubmittedBorderStyle:"",formSubmittedBorderColor:"",errorMessageColor:"$$errorColor",errorMessageFontWeight:"bold",errorMessageFontStyle:"italic",scrollableFrameInnerPaddingSmall:"$$margin",scrollableFrameInnerPaddingMedium:"$$marginXL",scrollableFrameInnerPaddingLarge:"$$marginXL",scrollableFrameTopHeight:"",scrollableFrameTopBackground:"",scrollableFrameTopBackgroundColor:"",scrollableFrameBottomHeight:"",scrollableFrameBottomBackground:"",scrollableFrameBottomBackgroundColor:"",toastColor:y.white,toastBg:y.black,toastPadding:"$$paddingXL",toastBorderWidth:"$$borderWidth",toastBorderStyle:"$$borderStyle",toastBorderColor:"$$borderColor",toastRadius:"$$radius",toastShadow:"",avatarBorderWidth:0,avatarBorderStyle:"$$borderStyle",avatarBorderColor:"$$borderColor",avatarRadius:"$$radiusS",avatarShadow:"",profileCardAvatarBorderWidth:"",profileCardAvatarBorderStyle:"",profileCardAvatarBorderColor:"",profileCardAvatarRadius:"",profileCardAvatarShadow:"",profileCardNameColor:y.black,profileCardTitleColor:y.grey,bottomHeight:"40px",bottomHeightBottomPadding:"50px",bottomBorderWidth:"",bottomBorderStyle:"$$borderStyle",bottomBorderColor:"$$borderColor",bottomNoteBorderWidth:0,bottomNoteBorderStyle:"$$borderStyle",bottomNoteBorderColor:"$$borderColor",brandingLinkColor:"$$actionBarColor",chatMotifHill:"",chatMotifBubble:"",facebook:"#3B5998",twitter:"#00ACEE",google:"#DD4B39",externalIconColor:"$$placeholderColor",authButtonColor:"",authButtonBg:"",authButtonBorderColor:"",authButtonShadow:"",authButtonHoverColor:"",authButtonHoverBg:"",authButtonHoverBorderColor:"",authButtonHoverShadow:"",authButtonActiveColor:"",authButtonActiveBg:"",authButtonActiveBorderColor:"",authButtonActiveShadow:"",chatButtonMinWidth:"180px",chatButtonMaxWidth:"300px",chatButtonHeight:"30px",chatButtonColor:"$$headColor",chatButtonBg:"$$headBg",chatButtonBorderWidth:"$$borderWidth",chatButtonBorderStyle:"$$borderStyle",chatButtonBorderColor:"$$dividerColor",chatButtonRadius:"$$radius",chatButtonShadow:"",chatButtonPadding:"$$paddingXL",chatButtonPaddingFavicon:"$$chatButtonPadding",chatButtonFontWeight:"bold",chatButtonStatusFontWeight:"bold",faviconWidth:"36px",faviconColor:"$$chatButtonColor",faviconOnlineColor:"",faviconOfflineColor:"",faviconBg:"$$chatButtonBg",faviconDotsColor:"",chatBubbleTitle:"",chatBubbleText:"",chatBubbleClose:"",windowMiniWidth:"240px",windowMiniHeight:"200px",windowSmallWidth:"240px",windowSmallHeight:"335px",windowMediumWidth:"290px",windowMediumHeight:"400px",windowLargeWidth:"350px",windowLargeHeight:"450px",windowColor:"$$contentColor",windowBg:"$$contentBg",windowPadding:"",windowRadius:"$$radius",windowShadow:"",windowContentBg:"$$contentBg",windowContentBorderWidth:"$$borderWidth",windowContentBorderStyle:"$$borderStyle",windowContentBorderColor:"$$dividerColor",menuColor:"$$contentColor",menuBg:"$$inputMenuBg",menuBorderWidth:"$$borderWidth",menuBorderStyle:"$$borderStyle",menuBorderColor:"$$dividerColor",menuRadius:"$$radius",menuShadow:"$$windowShadow",menuHeaderColor:"$$placeholderColor",menuItemPadding:"3px 20px",menuItemHoverBg:y.grey,titleBarHeight:"24px",titleBarPaddingBefore:"60px",titleBarPaddingAfter:"60px",titleBarFontSize:"$$fontSizeS",titleBarColor:"$$headLowContrastColor",titleBarBg:"$$headBg",titleBarBorderWidth:"",titleBarBorderStyle:"$$borderStyle",titleBarBorderColor:"$$borderColor",titleBarFontWeight:"bold",titleBarTextAlign:"center",actionBarWidth:"100%",actionBarHeight:"24px",actionBarColor:y.grey,actionBarBg:"$$windowContentBg",actionBarBorderWidth:"",actionBarBorderStyle:"$$borderStyle",actionBarBorderColor:"$$borderColor",actionBarPadding:"10px",actionBarHoverColor:"",chatPanelProfileCardContainerHeight:"50px",chatPanelProfileCardContainerBackground:"",chatPanelProfileCardContainerBorderWidth:"",chatPanelProfileCardContainerBorderStyle:"$$borderStyle",chatPanelProfileCardContainerBorderColor:"$$borderColor",chatPanelProfileCardAvatarBorderWidth:"",chatPanelProfileCardAvatarBorderStyle:"",chatPanelProfileCardAvatarBorderColor:"",chatPanelProfileCardAvatarRadius:"",chatPanelProfileCardAvatarShadow:"",chatLogMargin:"$$margin",chatLogVisitorNameColor:"$$contentHeaderColor",chatLogVisitorBubbleBg:"",chatLogVisitorBubbleBorderWidth:"$$borderWidth",chatLogVisitorBubbleBorderStyle:"$$borderStyle",chatLogVisitorBubbleBorderColor:"$$borderColor",chatLogAgentNameColor:"$$contentHeaderColor",chatLogAgentBubbleBg:"",chatLogAgentBubbleBorderWidth:"$$borderWidth",chatLogAgentBubbleBorderStyle:"$$borderStyle",chatLogAgentBubbleBorderColor:"$$borderColor",chatLogAvatarBorderWidth:"",chatLogAvatarBorderStyle:"",chatLogAvatarBorderColor:"",chatLogAvatarRadius:"",chatLogAvatarShadow:"",chatLogSystemMsgColor:"$$placeholderColor",chatLogSystemMsgBg:"",chatLogSystemMsgBorderWidth:0,chatLogSystemMsgBorderStyle:"$$borderStyle",chatLogSystemMsgBorderColor:"$$borderColor",chatLogSystemMsgPadding:"",chatLogFileProgressBg:"$$headBg",chatTextAreaBorderWidth:"",chatTextAreaBorderStyle:"$$borderStyle",chatTextAreaBorderColor:"$$borderColor",chatTextAreaPadding:"10px 10px 0",chatTextAreaInputFontSize:"",chatTextAreaInputMinHeight:"42px",chatTextAreaInputMaxHeight:"64px",chatTextAreaInputLineHeight:"",chatTextAreaInputColor:"",chatTextAreaInputBg:"",chatTextAreaInputBorderWidth:"",chatTextAreaInputBorderStyle:"",chatTextAreaInputBorderColor:"",chatTextAreaInputPadding:"",chatTextAreaInputRadius:"",chatTextAreaInputShadow:"",chatTextAreaInputFocusColor:"",chatTextAreaInputFocusBg:"",chatTextAreaInputFocusBorderColor:"",chatTextAreaInputFocusShadow:"",chatTextAreaSubmitMargin:"6px",chatTextAreaSubmitPadding:"5px 10px",chatTextAreaDropColor:"",chatTextAreaDropBg:"",chatTextAreaDropBorderWidth:"",chatTextAreaDropBorderStyle:"",chatTextAreaDropBorderColor:"",agentBubbleBg:"",visitorBubbleBg:"",badgeBg:"",badgeBorderWidth:"",badgeBorderStyle:"$$borderStyle",badgeBorderColor:"$$borderColor",badgeContentColor:"$$headColor",badgeContentBg:"",badgeContentBorderWidth:"$$borderWidth",badgeContentBorderStyle:"$$borderStyle",badgeContentBorderColor:"$$borderColor",badgeFormHeight:"36px",badgeFormBg:"",badgeFormBorderWidth:"$$borderWidth",badgeFormBorderStyle:"$$borderStyle",badgeFormBorderColor:"$$borderColor",badgeInputColor:"",badgeInputBorderWidth:"",badgeInputBorderStyle:"",badgeInputBorderColor:"",badgeInputPadding:"$$paddingXL",badgeInputRadius:"$$radius",badgeInputShadow:"",badgeInputFocusColor:"",badgeInputFocusBg:"",badgeInputFocusBorderColor:"",badgeInputFocusShadow:"",badgeInputPlaceholderColor:"",badgeIconColor:""},B={windowRadius:0},C={fontSizeXS:"12px",fontSizeS:"13px",fontSize:"14px",fontSizeL:"16px",fontSizeXL:"18px",fontSizeXXL:"20px",mobileMaxWidthS:"360px",mobileMaxWidth:"480px",mobileMaxWidthL:"640px",inputPadding:"$$paddingXL",buttonPadding:"$$paddingXL",menuItemPadding:"14px",titleBarHeight:"44px",actionBarWidth:"$$titleBarHeight",actionBarHeight:"$$titleBarHeight",menuRadius:0,brandingLinkColor:y.grey}
return {standard:A,popout:B,mobile:C}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Base"].join('')
z.prototype.__jx__fqname="meshim_widget_themes_Base"}
return z})()
b.__$$__jx_ui_html_img=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='img'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_img"].join('')
y.prototype.__jx__fqname="jx_ui_html_img"}
return y})()
b.__$$__jx_ui_Widget=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='div')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Widget"].join('')
y.prototype.__jx__fqname="jx_ui_Widget"}
return y})()
b.__$$__meshim_common_Canvas=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F,G,H,I=new D.parseCanvasData({type:'canvas',attributes:{},childrens:[]})
G=E.createElement('canvas')
G.width=0
G.height=0
G.vectorType='canvas'
if(G.getContext)H=G.getContext('2d')
w.extend(G)
r.extend(G)
w.set(z,G)
var J=!1
G.appendToParent=function(U){if(!w.hasParentNode(G))w.appendChild(y,G)
if(U&&!J){if(y.appendToParent)y.appendToParent(!0)
J=!0}}
G.setData=function(U){if(typeof I.destroy=='function')I.destroy()
I=new D.parseCanvasData(U)
L()
M()
I.on('update',M)}
function K(){if(F)window.clearInterval(F)
var U=Math.floor(Math.random()*201)-100
F=window.setTimeout(M,1000+U)}
function L(){if(F)window.clearTimeout(F)}
G.onDestruction(function(){L()
if(typeof I.destroy=='function')I.destroy()})
G.setViewBox=function(U){I.setAttribute('viewBox',U)
return G}
function M(){if(!I)return
if(!I.attributes.viewBox)return
S()
N()
O(I.childrens)}
function N(){var U=I.attributes.viewBox,V=I.attributes.canvasScale?parseFloat(I.attributes.canvasScale):1
if(G.width!=U.width)G.width=U.width*V
if(G.height!=U.height)G.height=U.height*V
H.scale(V,V)
H.transform(1,0,0,1,-U.x*V,-U.y*V)
if(q.isWebKit&&U.width*U.height>200*200)K()
else L()
P(I)}
function O(U){for(var V=0,W=U.length;V<W;V++){var X=U[V]
H.save()
if(X.childrens)O(X.childrens)
P(X)
H.restore()}}
function P(U){var V=U.attributes
Q()
if(V.left&&typeof U.translateX=='function')U.translateX(H,V.left)
if(V.top&&typeof U.translateY=='function')U.translateY(H,V.right)
if('opacity' in V)H.globalAlpha=V.opacity*H.globalAlpha
if(!V.path)return
if(V.stroke)H.strokeStyle=V.stroke
if(V.strokeWidth)H.lineWidth=V.strokeWidth
if(V.fill)H.fillStyle=V.fill(H,V.path.bBox)
if(V.shadow&&!q.isOpera){var W=V.shadow
H.shadowOffsetX=W.offsetX
H.shadowOffsetY=W.offsetY
H.shadowBlur=W.blurRadius
H.shadowColor=W.rgba}
V.path(H)
H.fill()
if(V.shadow)R()
H.stroke()}
function Q(){H.strokeStyle='rgba(0, 0, 0, 0)'
H.fillStyle='rgba(0, 0, 0, 1)'
H.lineWidth=0}
function R(){H.shadowOffsetX=0
H.shadowOffsetY=0
H.shadowBlur=0
H.shadowColor='#000'}
function S(){H.setTransform(1,0,0,1,0,0)
H.clearRect(0,0,G.width,G.height)}
G.setStyle(A)
G.setAttributes(C)
I={type:'canvas',attributes:C,childrens:T(B)}
function T(U){var V=[]
for(var W=0,X=U.length;W<X;W++){var Y=U[W]
V.push({constructor:Y[0],id:Y[1],attributes:Y[4],childrens:T(Y[3])})}
return V}
G.setData(I)
G.appendToParent()
return G}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_Canvas"].join('')
x.prototype.__jx__fqname="meshim_common_Canvas"}
return x})()
b.__$$__meshim_widget_utils_Mobile=(function(){var x={isMobileBrowser:y(),isMobileWhitelist:z(),isMobileTablet:C(),isIEMobile:I(),isChromeIOSMobile:O(),isSafariIOSMobile:N(),isChromeAndroidMobile:J(),isOperaAndroidMobile:M(),isNativeAndroidMobile:K(),isUCBrowserMobile:L(),hideVirtualKeyboard:E,isLandscape:D,hackFastButtons:H,getZoomLevel:P,getOffset:Q}
function y(){var R=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i,S=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,T=window.navigator.userAgent||window.navigator.vendor||window.opera,U=R.test(T)||S.test(T.substr(0,4))
return function(){return U}}
function z(){var R,S=[/(android [2-9])|(iemobile\/(?![5-9]))|(ucbrowser)|(Webkit.+Chrome)|(ipod|iphone|ipad).+applewebkit.+(CriOS|Version\/[5-9])/i]
for(var T=0,U=S.length;T<U;T++){if(S[T].test(window.navigator.userAgent)){R=!0
break}}
if(/android.+ucbrowser/i.test(window.navigator.userAgent)){R=!1}
if(!R);
return function(){return R}}
var A=640,B=320
function C(){var R,S=window.document.documentElement.clientWidth,T=window.document.documentElement.clientHeight
if(S>T){if(S<=A){R=!1}
else{R=!0}}
else{if(S<=B){R=!1}
else{R=!0}}
return function(){return R}}
function D(){return window.document.documentElement.clientWidth>window.document.documentElement.clientHeight}
function E(R){if(!R)return}
var F=b.__$$__jx_ui_HTMLElement,G
function H(){if(G)return
G=!0
var R=F.prototype.on,S=F.prototype.un
F.prototype.on=function($_){if($_=='click'&&(!this.allCallbacks['click']||!this.allCallbacks['click'].length)){this.dom.addEventListener('touchstart',T,!1)
this.dom.addEventListener('click',V,!1)}
return R.apply(this,arguments)}
F.prototype.un=function($_){var $a=S.apply(this,arguments)
if($_=='click'&&(!this.allCallbacks['click']||!this.allCallbacks['click'].length)){this.dom.removeEventListener('touchstart',T,!1)
this.dom.removeEventListener('click',V,!1)}
return $a}
G=!0
function T($_){if(this.jx_wrapper)return T.call(this.jx_wrapper,$_)
$_.stopPropagation()
this.dom.addEventListener('touchend',V,!1)
this.doc.body.addEventListener('touchmove',U,!1)
this.startX=$_.touches[0].clientX
this.startY=$_.touches[0].clientY}
function U($_){if(this.jx_wrapper)return U.call(this.jx_wrapper,$_)
if(Math.abs($_.touches[0].clientX-this.startX)>10||Math.abs($_.touches[0].clientY-this.startY)>10){W.call(this)}}
function V($_){if(this.jx_wrapper)return V.call(this.jx_wrapper,$_)
$_.stopPropagation()
W.call(this)
this.nativeHandlers['click']($_)
if($_.type=='touchend'&&!this.allowGhostClick){Y(this.startX,this.startY)}}
function W(){if(this.jx_wrapper)return W.call(this.jx_wrapper)
this.dom.removeEventListener('touchend',V,!1)
this.doc.body.removeEventListener('touchmove',U,!1)}
var X=[]
function Y($_,$a){X.push($_,$a)
window.setTimeout(Z,2500)}
function Z(){X.splice(0,2)}
function $$($_){for(var $a=0;$a<X.length;$a+=2){var $b=X[$a],$c=X[$a+1]
if(Math.abs($_.clientX-$b)<25&&Math.abs($_.clientY-$c)<25){$_.stopPropagation()
$_.preventDefault()}}}
window.document.addEventListener('click',$$,!0)}
function I(){var R=window.navigator.userAgent.toLowerCase()||'',S=/(iemobile|windows phone)/.test(R)
return S}
function J(){var R=window.navigator.userAgent.toLowerCase()||'',S=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',T=/google inc./.test(S)&&/chrome/.test(R)
return T}
function K(){var R=window.navigator.userAgent.toLowerCase()||'',S=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',T=/google inc./.test(S)&&(!/chrome/.test(R)||/samsung/.test(R))
return T}
function L(){var R=window.navigator.userAgent.toLowerCase()||'',S=/ucbrowser/.test(R)
return S}
function M(){var R=window.navigator.userAgent.toLowerCase()||'',S=/(opera|opr).*android|android.*(opera|opr)/i.test(R)
return S}
function N(){var R=window.navigator.userAgent.toLowerCase()||'',S=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',T=/apple computer, inc./.test(S)&&(!/crios/.test(R))
return T}
function O(){var R=window.navigator.userAgent.toLowerCase()||'',S=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',T=/apple computer, inc./.test(S)&&/crios/.test(R)
return T}
function P(){var R=1.2,S=640,T=window.document.documentElement.clientWidth,U=window.document.documentElement.clientHeight,V=(T/U)>R,W=window.screen.width,X=window.screen.height,Y=!1
if(V&&W<X){Y=!0
W=window.screen.height
X=window.screen.width}
var Z=window.innerWidth,$$=T/W
if(window.devicePixelRatio&&K()&&W>S){$$*=window.devicePixelRatio}
else if(I()){$$*=1.5}
var $_=(T/Z)/$$
$_=$_/R
$_=$_.toFixed(2)
return $_}
function Q(){var R=window,S=R.document.documentElement,T=R.document.body,U=null,V={top:0,left:0}
if(!h(S.getBoundingClientRect));
else if(h(R.getComputedStyle)){if(R.getComputedStyle(T).position=='relative'){U=T}
else if(R.getComputedStyle(S).position=='relative'){U=S}}
else if(T.currentStyle){if(T.currentStyle.position=='relative'){U=T}
else if(S.currentStyle.position=='relative'){U=S}}
else if(T.style.position=='relative'){U=T}
else if(S.style.position=='relative'){U=S}
if(U){var W=U.getBoundingClientRect()
V.top=W.top+R.pageYOffset-S.clientTop
V.left=W.left+R.pageXOffset-S.clientLeft}
return V}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Mobile"].join('')
x.prototype.__jx__fqname="meshim_widget_utils_Mobile"}
return x})()
b.__$$__jx_ui_html_span=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='span'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_span"].join('')
y.prototype.__jx__fqname="jx_ui_html_span"}
return y})()
b.__$$__meshim_common_VmlCanvas=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F,G,H,I,J
F=E.createElement('span')
F.style.display='inline-block'
F.style.overflow='hidden'
F.style.position='relative'
F.vectorType='vml'
G=D.createVMLNode(E,'group')
G.className='vml'
G.style.width="100px"
G.style.height="100px"
G.style.border="0px none"
G.style.padding="0px"
G.style.margin="0px"
G.style.position="absolute"
G.style.top="0px"
G.style.left="0px"
F.groupshape=G
H=D.createVMLNode(E,'shape')
H.className='vml'
H.stroked=!1
H.fill=!1
H.style.width="1px"
H.style.height="1px"
G.appendChild(H)
F.appendChild(G)
F.graphicType='vml'
F.defaultPlacement=G
w.extend(F)
r.extend(F)
w.set(z,F)
var K=!1
F.appendToParent=function(N){if(!w.hasParentNode(F))w.appendChild(y,F)
if(N&&!K){if(y.appendToParent)y.appendToParent(!0)
K=!0}}
F.setCanvasScale=function(N){N=parseFloat(N)
I=N
if(J)F.setViewBox(J)
return F}
F.setViewBox=function(N){J=N
N=D.parseViewBox(N)
var O=F.getElementsByTagName('*'),P=N.x+', '+N.y,Q='1, 1'
if(I)Q=(1/I)+','+(1/I)
G.coordorigin=P
for(var R=0,S=O.length;R<S;R++){var T=O[R].tagName
if(T!=='shape'&&T!=='group')continue
O[R].coordsize=Q}
H.style.left=N.x+'px'
H.style.right=N.y+'px'
return F}
var L=F.setWidth,M=F.setHeight
F.setWidth=function(N){if(typeof L==='function')L.call(F,N)
G.style.width='1px'
return F}
F.setHeight=function(N){if(typeof M==='function')M.call(F,N)
G.style.height='1px'
return F}
F.setStyle(A)
F.setAttributes(C)
w.addChildren(F,B)
F.appendToParent()
return F}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_VmlCanvas"].join('')
x.prototype.__jx__fqname="meshim_common_VmlCanvas"}
return x})()
b.__$$__jx_ui_html_table=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='table'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_table"].join('')
y.prototype.__jx__fqname="jx_ui_html_table"}
return y})()
b.__$$__meshim_widget_widgets_Toast=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Toast
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","zIndex":"1000","color":"$$toastColor","background":"$$toastBg","padding":"$$toastPadding","borderWidth":"$$toastBorderWidth","borderStyle":"$$toastBorderStyle","borderColor":"$$toastBorderColor","radius":"$$toastRadius","boxShadow":"$$toastShadow"},"&.mobile":{"position":"fixed"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Toast"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Toast"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_BorderOverlay=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"border_overlay"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_BorderOverlay
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","top, left":0,"width, height":"100%","borderRadius":"inherit"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_BorderOverlay"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_BorderOverlay"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_menu_Header=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Header
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"marginBottom":"$$margin","color":"$$menuHeaderColor"},"&.item":{"margin":"$$menuItemPadding"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Header"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_Header"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_form_Field=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.validate=function(z){var A=x.prototype.validate.call(this,z)
A?this.removeClass('invalid'):this.addClass('invalid')
return A}
y.prototype.setRequired=function(z){z=n(z)
this.label_required&&this.label_required.setText(z?' *':'')
this.input&&this.input.setRequired(z)
!z&&this.input&&this.input.hideErrorMessage()
return this}
y.prototype.destroy=function(){this.label=this.label_name=this.label_required=this.input=this.error_message=null
return x.prototype.destroy.call(this)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_Field"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_form_Field"}
return y})()
b.__$$__jx_ui_Application=(function(){var x=b.__$$__jx_ui_Widget
function y(A,B,C,D,E){if(!(this instanceof y))return new y(A,B,C,D,E)
if(!E)E={}
E.tagName||(E.tagName='div')
E.position||(E.position='absolute')
E.visible||(E.visible='hidden')
E.margin||(E.margin='0')
E.padding||(E.padding='0')
E.border||(E.border='0')
E.height||(E.height='0')
E.width||(E.width='0')
x.call(this,A,B,C,D,E)}
y.prototype=e(x.prototype)
y.prototype.setDesktop=function(A){if(!n(A))return
var B=document.getElementsByTagName('head')[0]
B.appendChild(z('viewport','user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1'))
if(q.isIOS){B.appendChild(z('apple-mobile-web-app-capable','yes'))
B.appendChild(z('apple-mobile-web-app-status-bar-style','black-translucent'))}}
function z(A,B){var C=document.createElement('meta')
C.name=A
C.content=B
return C}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Application"].join('')
y.prototype.__jx__fqname="jx_ui_Application"}
return y})()
b.__$$__meshim_widget_widgets_Body=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)}
y.__jx__jcss={"**self":{"lineHeight":"1.2","marginBottom":"$$marginL"},"&.short":{"marginBottom":"0"}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Body"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Body"}
return y})()
b.__$$__jx_ui_Image=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='img')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.getAlt=function(){return this.dom.alt}
y.prototype.setAlt=function(z){this.dom.alt=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Image"].join('')
y.prototype.__jx__fqname="jx_ui_Image"}
return y})()
b.__$$__jx_ui_Label=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='label')
x.call(this,z,A,B,C,D)
if(D.selectable==null)this.setSelectable(!1)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Label"].join('')
y.prototype.__jx__fqname="jx_ui_Label"}
return y})()
b.__$$__jx_ui_Localizer=(function(){var x=b.__$$__jx_ui_Widget
function y(A,B,C,D,E){if(!(this instanceof y))return new y(A,B,C,D,E)
if(!E)E={}
this.childConstructors=[]
this.childAttributes=[]
this.delimiter='@'
x.call(this,A,B,C,D,E)
var F=this
this._updateContent=function(){F.updateContent()}
v&&v.onLanguage&&v.onLanguage(this._updateContent)
this.onDestruction(function(){v&&v.unLanguage&&v.unLanguage(F._updateContent)})}
y.prototype=e(x.prototype)
y.prototype.appendChild=function(A){if(g(A)){this.childConstructors.push(A[0])
this.childAttributes.push(A[4])
this._localizer_appendchild_override||this.updateContent()}
else x.prototype.appendChild.call(this,A)}
y.prototype.updateContent=function(){this.setContent(this.getContent())}
y.prototype.getContent=function(){return this.content}
y.prototype.setContent=function(A){this.content=A
this.empty()
if(!A)return
A.toString&&(A=A.toString())
var B=A,C=B.length,D=0,E,F=this.delimiter,G=F.length,H=0
while(D<C&&D!=-1){E=B.indexOf(F,D)
if(E==-1){E=C}
if(E>D){this._localizer_appendchild_override=!0
x.prototype.appendChild.call(this,[x,null,null,[z(B.slice(D,E))],{tagName:'label',display:'inline'}])
this._localizer_appendchild_override=!1
D=E}
if(E==D&&E!=C){var I=B.indexOf(F,E+G)
if(I==-1)I=C
this._localizer_appendchild_override=!0
x.prototype.appendChild.call(this,[this.childConstructors[H]||x,null,null,[z(B.slice(D+G,I))],this.childAttributes[H]||{tagName:'label',display:'inline'}])
this._localizer_appendchild_override=!1
D=I+G
H++}}
return this}
y.prototype.setChildProperties=function(A,B,C){this.childConstructors[A]=B
this.childAttributes[A]=C}
y.prototype.clearChildProperties=function(){this.childConstructors.length=this.childAttributes.length=0}
y.prototype.getDelimiter=function(){return this.delimiter}
y.prototype.setDelimiter=function(A){this.delimiter=A
this.updateContent()
return this}
function z(A){return A.replace(/&#([0-9]{1,4});/g,function(B,C){return String.fromCharCode(C)})}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Localizer"].join('')
y.prototype.__jx__fqname="jx_ui_Localizer"}
return y})()
b.__$$__meshim_widget_widgets_ErrorMessage=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)}
y.__jx__jcss={"**self":{"marginTop":"$$marginS","marginBottom":"$$margin","color":"$$errorMessageColor","fontWeight":"$$errorMessageFontWeight","fontStyle":"$$errorMessageFontStyle"}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ErrorMessage"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_ErrorMessage"}
return y})()
b.__$$__jx_ui_FullFrame=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(q.bugs.noBoxSizing){var E=this.table=new x(z,null,null,null,{tagName:'table'}),F=this.tbody=new x(E,null,null,null,{tagName:'tbody'}),G=this.tr=new x(F,null,null,null,{tagName:'tr'}),H=this.td=new x(G,null,null,null,{tagName:'td'}),I=this
this.table.destroy=function(){I.destroy()}
this.table.empty=function(){I.empty()}
this.setPadding=function(J){this.td.setPadding(J)
return this}
this.show=function(){this.table&&this.table.show()
return this}
this.hide=function(){this.table&&this.table.hide()
return this}
x.call(this,H,A,B,C,D)
E.style.tableLayout='fixed',E.style.borderCollapse='collapse'
F.style.height=F.style.width=this.style.height=this.style.width='100%'
E.setTop(0).setLeft(0).setWidth('100%').setHeight('100%').setPosition('absolute').applyConstraints()
this.style.position='relative',this.style.overflow='auto'
E.defaultPlacement=this}
else{this.setPadding=function(J){if(!i(J))return this
J=J.split(' ')
J[0]=parseInt(J[0],10)
J[1]=parseInt(J[1],10)
J[2]=parseInt(J[2],10)
J[3]=parseInt(J[3],10)
if(isNaN(J[0])){J[3]=J[2]=J[1]=J[0]=0}
else if(isNaN(J[3])){if(isNaN(J[1])){J[3]=J[2]=J[1]=J[0]}
else if(isNaN(J[2])){J[3]=J[1]
J[2]=J[0]}
else{J[3]=J[1]}}
this.setTop(parseInt(J[0],10)).setRight(parseInt(J[1],10)).setBottom(parseInt(J[2],10)).setLeft(parseInt(J[3],10))
return this}
x.call(this,z,A,B,C,D)
this.setStyle({top:0,bottom:0,left:0,right:0,overflow:'auto',position:'absolute'})}
this.setStyle(B)
this.setAttributes(D)}
y.prototype=e(x.prototype)
y.prototype.destroy=function(){x.prototype.destroy.call(this)
if(this.table){x.prototype.empty.call(this.table)
this.table.empty=null
x.prototype.destroy.call(this.table)
this.table=this.tbody=this.tr=this.td=null}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_FullFrame"].join('')
y.prototype.__jx__fqname="jx_ui_FullFrame"}
return y})()
b.__$$__meshim_widget_widgets_Motif=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__jx_ui_Widget
F.setItems=function(J){J=J.split(',')
for(var K=0,L=J.length;K<L;K++)new I(F,null,null,null,{className:J[K]})}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Motif
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Motif"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Motif"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_Frame=(function(){var x=b.__$$__jx_ui_Widget,y=q.isQuirks,z=q.bugs.noBoxSizing,A=z?'block':'table'
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
if(!G)G={}
this.iframe_quirks=(C.ownerDocument!=document)
this.container=new x(C,null,null,null,{})
this.container.addClass('container')
var H=this
this.container.destroy=function(){H.destroy()}
this.container.empty=function(){H.empty()}
this.container_middle=new x(this.container,null,null,null,{})
this.container_middle.addClass('container_middle')
x.call(this,this.container_middle,D,E,F,G)
this.useDisplay=!0
if(z){this.container.setStyle('position','relative')
this.container_middle.setStyle('position','absolute')
this.setStyle('position','relative')
if(y||this.iframe_quirks)this.container_middle.setStyle('width','100%').setStyle('left',0)}
else{G.visible||this.container.setStyle('display','table')
this.container_middle.setStyle('display','table-cell').setStyle('width','100%')
this.setStyle('display','table')}
this.container.setStyle('overflow','hidden').setStyle('width','100%').setStyle('height','100%')
G.hAlign||this.setHAlign()
G.vAlign||this.setVAlign()}
B.prototype=e(x.prototype)
B.prototype.show=function(){if(this.container&&this.container.dom.style.display!=A){this.container.setVisible(A)
this.fire('show')}
return this}
B.prototype.hide=function(){if(this.container&&this.container.dom.style.display!='none'){this.container.setVisible('none')
this.fire('hide')}
return this}
B.prototype.isVisible=function(){return this.container&&this.container.dom.style.display==A}
B.prototype.setZIndex=function(C){this.container&&this.container.setZIndex(C)
return this}
B.prototype.destroy=function(){x.prototype.destroy.call(this)
if(this.container){x.prototype.empty.call(this.container)
this.container.empty=null
x.prototype.destroy.call(this.container)
this.container=this.container_middle=null}}
B.prototype.getHAlign=function(){return this.hAlign}
B.prototype.setHAlign=function(C){switch(C){case 'left':if(y||this.iframe_quirks){this.container_middle.setStyle('text-align','left')}
else if(z){this.setStyle('margin-left','0').setStyle('margin-right','auto')}
else{this.container_middle.setStyle('left','0%').setStyle('right','')}
this.hAlign=C
break
case 'right':if(y||this.iframe_quirks){this.container_middle.setStyle('text-align','right')}
else if(z){this.setStyle('margin-left','auto').setStyle('margin-right','0')}
else{this.container_middle.setStyle('left','').setStyle('right','0%')}
this.hAlign=C
break
default:if(y||this.iframe_quirks){this.container_middle.setStyle('text-align','center')}
else if(z){this.container_middle.setStyle('left','').setStyle('right','')}
this.setStyle('margin-left','auto').setStyle('margin-right','auto')
this.hAlign='center'}}
B.prototype.getVAlign=function(){return this.vAlign}
B.prototype.setVAlign=function(C){switch(C){case 'top':if(z){this.container_middle.setStyle('top','0%').setStyle('bottom','')
this.setStyle('top','')}
else{this.container_middle.setStyle('vertical-align','top')}
this.vAlign=C
break
case 'bottom':if(z){this.container_middle.setStyle('top','').setStyle('bottom','0%')
this.setStyle('top','')}
else{this.container_middle.setStyle('vertical-align','bottom')}
this.vAlign=C
break
default:if(z){this.container_middle.setStyle('top','50%').setStyle('bottom','')
this.setStyle('top','-50%')}
else{this.container_middle.setStyle('vertical-align','middle')}
this.vAlign='middle'}
return this}
B.prototype.getAlign=function(){return this.hAlign+' '+this.vAlign}
B.prototype.setAlign=function(C){if(typeof C!='string')return
C=C.replace(/^\s*|\s*$/,'').replace(/\s+/g,' ').split(' ')
this.setHAlign(C[0])
this.setVAlign(C[1])}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_ui_Frame"].join('')
B.prototype.__jx__fqname="jx_ui_Frame"}
return B})()
b.__$$__meshim_widget_controllers_StorageController=(function(){var x=b.__$$__meshim_widget_controllers_DOMStorage,y=b.__$$__meshim_widget_controllers_Cookie,z=b.__$$__meshim_widget_Config,A=b.__$$__meshim_widget_utils_Utils,B='__zlcstore',C='__zlcmid',D='__zlcprivacy',E
if(/\b(?:\d{1,3}\.){3}\d{1,3}/.test(document.location.hostname)){E=document.location.hostname}
else{E=A.getEffectiveTLD()}
var F=8*60*1000,G=z.ACCOUNT_KEY,H={init:I,DOM:{saveVariable:S,getVariable:T},Cookie:y,clearAll:N,setIdentity:K,getIdentity:J,getAllowCookieLaw:L,setAllowCookieLaw:M}
function I(){}
function J(){if(z.IS_POPOUT){return R('mid')}
var U=O()
if(U){return U}
return y.get(C)||''}
function K(U){y.set(C,U,{path:'/',ttl:365,domain:E})}
function L(){var U=P()
if(typeof U=='boolean')return U
var V=y.get(D)
V=parseInt(V,10)
if(V===0)return !1
else if(V===1)return !0
else return a}
function M(U){U=n(U)
if(U)U=1
else U=0
y.set(D,U,{path:'/',ttl:365,domain:E})}
function N(){y.remove(C,{path:'/',domain:E})
x.remove(B)}
function O(){var U=y.getJSONCookie('__zlcid')
y.remove('__zlcid',{path:'/'})
if(U['mID']){return U['mID']}
var V=Q('__zlcstore')
y.remove('__zlcstore',{path:'/',domain:E})
if(V&&V['mID']){return V['mID']}}
function P(){var U,V=Q('__zlcprivacy')
if(typeof V=='boolean'){U=V
M(V)}
return U}
function Q(U){var V=y.getJSONCookie(U)
return V[G]}
function R(U){var V=window.location.search.slice(1).split('&'),W
for(var X=0;X<V.length;X++){W=V[X].split('=')
if(W[0]==U){try {return window.decodeURIComponent(W[1]||'')}catch(Y){return ''}}}
return ''}
function S(U,V){var W=x.get(B)||{}
if(!W[G])W[G]={}
var X=W[G]
X[U]=V
X['timestamp']=+new Date()
x.set(B,W)}
function T(U){var V=x.get(B)||{}
if(!V[G])return {}
var W=V[G]
if(!W.timestamp)return W[U]||{}
var X=+new Date()
if(X-W.timestamp>F)return {}
else return W[U]}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_StorageController"].join('')
H.prototype.__jx__fqname="meshim_widget_controllers_StorageController"}
return H})()
b.__$$__meshim_widget_widgets_IconFont=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"selectable":"false","class":"icon_font"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I={'zopim':'&#xe000;','message':'&#x1f4ac;','tick':'&#x2714;','cross':'&#x2716;','popout':'&#x2197;','popin':'&#x2199;','minimize':'&#x2212;','plus':'&#x002b;','smiley':'&#x263a;','happy':'&#xe001;','happier':'&#xe002;','sad':'&#xe003;','sadder':'&#xe004;','brand':'&#xe005;','brand_suffix':'&#xe006;','brand_extended':'&#xe005;&#xe006;','avatar_placeholder':'&#xe007;','email':'&#x1f4e7;','facebook':'&#xe008;','twitter':'&#xe009;','google':'&#xe00a;','facebook_out':'&#xe00d;','twitter_out':'&#xe00c;','google_out':'&#xe00b;','badge_default':'&#xe00e;','warning_sign':'&#x26a0;','arrow_left':'&#x2190;','arrow_up':'&#x2191;','arrow_down':'&#x2193;','arrow_right':'&#x2192;','pencil':'&#x270e;','dustbin':'&#xe00f;','sound_on':'&#x1f50a;','sound_off':'&#x1f507;','send':'&#x000BB;','exclamation':'&#x0021;','brand_zendesk':'&#xe010;'}
F.setIcon=function(J){F.setHTML(I[J]||J||'')}
F.setFont=function(J){F.setFontFamily(J||'')}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_IconFont
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"fontFamily":"zopim, \"Segoe UI Symbol\", \"Arial Unicode MS\", \"Lucida Sans Unicode\", sans-serif","speak":"none","fontStyle":"normal","fontWeight":"normal","lineHeight":1,"WebkitFontSmoothing":"antialiased"},"&:focus":{"outline":"none"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_IconFont"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_IconFont"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_RatingButton=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_span,null,null,[[b.__$$__jx_ui_html_span,null,null,[],{"class":"default_value","container":"default_value"}],[b.__$$__jx_ui_html_span,null,null,[],{"class":"selected_value","container":"selected_value"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Utils
I.hoverFix(F)})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_RatingButton
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_span.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_span
x.__jx__jcss={"**self":{"width":"50%","display":"inline-block",".default_value":{"display":"inline","opacity":"0.8"},".selected_value":{"display":"none"}},"**self.hover, **self:hover, **self.active":{".default_value":{"display":"none"},".selected_value":{"display":"inline"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_RatingButton"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_RatingButton"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_themes_Simple=(function(){var x=b.__$$__meshim_common_Chroma,y=b.__$$__meshim_widget_utils_Color,z=b.__$$__meshim_widget_themes_Base,A={}
A._super=z
A.defaults={colors:{primary$string:'#555555',banner$string:'#EEEEEE',bubble$string:'#E59341'}}
A.generate=function(B){var C="#444",D="#666",E="#999",F="#AAA",G="#DDD",H="#EEE",I="#FBFBFB",J=x.hex(B['colors']['primary$string']),K=J.luminance(),L=x.hex(B['colors']['banner$string']||B['colors']['primary$string']),M=120/255,N=200/255
function O(Z){var $$={},$_=Z.luminance(),$a=Z.darken(10),$b=Z.lighten(10),$c=x.interpolate(Z,y.black,0.5,'rgb'),$d=x.interpolate(Z,y.black,0.7,'rgb')
$$.color=new x.ColorScale({colors:[y.white,y.white,$c.darken(10),$c,$c],positions:[0,M-0.001,M+0.001,N,1],mode:"rgb"}).get($_).hex()
$$.bg=new x.ColorScale({colors:[Z,Z,Z.darken(10)],positions:[0,N,1],mode:"rgb"}).get($_).hex()
$$.iconColor=new x.ColorScale({colors:[Z,Z,$d,$d.lighten(10)],positions:[0,M-0.001,M+0.001,1],mode:"rgb"}).get($_).hex()
$$.borderColor=new x.ColorScale({colors:[$a,$a,Z.darken(20)],positions:[0,N,1],mode:"rgb"}).get($_).hex()
$$.hoverBg=new x.ColorScale({colors:[$b,Z,Z.darken(5)],positions:[0,N,1],mode:"rgb"}).get($_).hex()
return $$}
var P=O(J),Q=O(J.lighten(15)),R=O(L),S=120/255,T=220/255
function U(Z,$$){var $_={},$a=Z.luminance(),$b=x.interpolate(Z,y.black,$$?0.7:0.5,'rgb'),$c=$$?x.color(y.white):x.interpolate(Z,y.white,0.5,'rgb')
$_.color=new x.ColorScale({colors:[$c,$c.lighten(50),$b,$b.lighten(10)],positions:[0,S-0.001,S+0.001,1],mode:"rgb"}).get($a).hex()
$_.bg=Z.hex()
return $_}
var V=U(J),W=U(L,!0),X={borderColor:G,headColor:V.color,headBg:J,contentColor:C,contentBlockBg:H,placeholderColor:F,inputColor:D,inputBorderColor:G,inputFocusBorderColor:y.clampLuminance(J,0.2,0.4).hex(),buttonColor:P.color,buttonBg:P.bg,buttonBorderColor:P.borderColor,buttonHoverBg:P.hoverBg,buttonShadow:"0px 1px 2px rgba(0,0,0,0.1), inset 0px 1px 0px rgba(255,255,255,0.25)",buttonSecColor:Q.color,buttonSecBg:Q.bg,buttonSecBorderColor:Q.borderColor,buttonSecHoverBg:Q.hoverBg,scrollableFrameTopHeight:"5px",scrollableFrameTopBackground:"gradient top rgba(0,0,0,0.05) rgba(0,0,0,0)",scrollableFrameTopBackgroundColor:"transparent",scrollableFrameBottomHeight:"5px",scrollableFrameBottomBackground:"gradient top rgba(0,0,0,0) rgba(0,0,0,0.05)",scrollableFrameBottomBackgroundColor:"transparent",toastBg:"rgba(153, 153, 153, 0.8)",toastBorderColor:E,toastShadow:"0px 1px 1px rgba(0,0,0,0.08), inset 0px 1px 0px rgba(255,255,255,0.16)",avatarBorderColor:G,profileCardAvatarBorderWidth:0,profileCardAvatarShadow:"0px 1px 2px rgba(0,0,0,0.2)",profileCardNameColor:y.clampLuminance(J,0,0.2).hex(),profileCardTitleColor:F,bottomBorderWidth:"1px 0 0",bottomBorderColor:H,chatMotifHill:H,chatMotifBubble:"#BBB",chatButtonColor:P.color,chatButtonBg:J.hex(),chatButtonBorderWidth:K>N?"":0,chatButtonBorderColor:K>N?G:"",faviconBg:new x.ColorScale({colors:[J.lighten(15),J.lighten(5),J.darken(5),J.darken(5)],positions:[0,0.05,0.0501,1],mode:"rgb"}).get(K).hex(),windowColor:D,windowPadding:"3px",windowShadow:"0px 0px 3px 2px rgba(0,0,0,0.1)",windowContentBorderWidth:"0 1px",windowContentBorderColor:G,menuBorderColor:G,menuItemHoverBg:H,titleBarColor:V.color,titleBarBg:V.bg,titleBarBorderWidth:K>T?'1px':0,titleBarBorderColor:K>T?G:'',titleBarIconsColor:'',actionBarColor:E,actionBarBorderWidth:"0 1px 1px 1px",actionBarBorderColor:G,actionBarHoverColor:D,chatPanelProfileCardContainerBorderWidth:"0 0 1px",chatPanelProfileCardContainerBorderColor:H,chatLogVisitorBubbleBg:I,chatLogVisitorBubbleBorderColor:H,chatLogAgentBubbleBg:x.interpolate(y.clampLuminance(J,0.4,0.8),y.white,0.8,'rgb').hex(),chatLogAgentBubbleBorderColor:x.interpolate(y.clampLuminance(J,0.4,0.8),y.white,0.4,'rgb').hex(),chatLogAvatarBorderWidth:"$$borderWidth",chatLogFileProgressBg:V.bg,chatTextAreaBorderWidth:"1px 0 0",chatTextAreaBorderColor:H,chatTextAreaInputShadow:"inset 0px 1px 3px rgba(0,0,0,0.1)",chatTextAreaInputFocusShadow:"inset 0px 1px 3px "+x.interpolate(y.clampLuminance(J,0.2,0.4),y.white,0.5,'rgb').hex(),chatTextAreaDropColor:C,chatTextAreaDropBg:H,chatTextAreaDropBorderWidth:"1px",chatTextAreaDropBorderStyle:"dashed",chatTextAreaDropBorderColor:C,badgeBorderWidth:0,badgeContentColor:W.color,badgeContentBg:W.bg,badgeContentBorderWidth:0,badgeFormBg:y.white,badgeFormBorderWidth:"1px 0",badgeFormBorderColor:G,badgeIconColor:R.iconColor},Y={authButtonColor:C,authButtonBg:"gradient top rgb(251,251,251) rgb(227,227,227)",authButtonBorderColor:G,authButtonHoverBg:"gradient top rgb(227,227,227) rgb(251,251,251)",bottomBorderWidth:0,menuBg:H,menuHeaderColor:E,menuItemHoverBg:G,actionBarColor:V.color,actionBarBg:J.darken(10).hex(),actionBarBorderWidth:0,actionBarHoverColor:V.color,chatPanelProfileCardContainerBorderColor:G,chatTextAreaBorderColor:G,chatTextAreaInputShadow:"none",chatTextAreaInputBorderWidth:0,chatTextAreaInputRadius:0,chatTextAreaInputFocusShadow:"none",brandingLinkColor:E}
return {standard:X,mobile:Y}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Simple"].join('')
A.prototype.__jx__fqname="meshim_widget_themes_Simple"}
return A})()
b.__$$__jx_ui_IFrame=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__jx_ui_HTMLEvent,z=b.__$$__jx_ui_HTMLElement
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
if(!F)F={}
F.tagName||(F.tagName='iframe')
this._top=this._bottom=this._left=this._right=this._width=this._height=NaN
this._position=null
this.pos=''
this.offsetx=0
this.offsety=0
this._snaps=[0,0,0,0]
this.useDisplay=!1
this.doc=this.ownerDocument=B.ownerDocument
this.parentNode=B
this.attributes=F
this.tagName=F.tagName
this.isNew=!0
this.dom=this.doc.createElement(this.tagName)
this.dom.jx_wrapper=this
this.style=this.dom.style
this.children=[]
this._autobinds=[]
y.call(this);(this.dom.seamless!==a)&&(this.dom.seamless=!0)
this.dom.allowTransparency='true'
this.dom.frameBorder='0'
this.style.backgroundColor='transparent'
this.style.verticalAlign='text-bottom'
this.style.visibility='hidden'
B.appendChild(B instanceof z?this:this.dom)
C&&w.set(C,this)
var G
if(q.bugs.noBoxSizing)G='<html><head><style>html,body{height:100%;width:100%;background:none} *{border:0;padding:0;margin:0;}</style></head><body onload="window.isLoaded=true"></body></html>'
else G='<!DOCTYPE html><html><head><style>html,body{height:100%;width:100%;} *{border:0;padding:0;margin:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}</style></head><body onload="window.isLoaded = true"></body></html>'
if(q.isSafari||q.isChrome)this.dom.src='javascript:void(document.write(\''+G+'\'), document.close())'
else this.dom.src='javascript:false'
this.appendToParent(!0)
var H=this.iwin=this.dom.contentWindow,I=this.idoc=r.extend(H.document)
if(!q.isSafari&&!q.isChrome){I.write(G)
I.close()}
this.ihead=I.getElementsByTagName('head')[0]
var J=this.ibody=r.extend(I.body)
v&&v.onLanguage&&v.onLanguage(K)
function K(O){J.parentNode.setAttribute('lang',O)
J.parentNode.setAttribute('dir',v.flip('ltr'))}
v&&v.language&&K(v.language)
J.style.position='relative'
J.parentNode.style.overflowY=J.style.overflowY='hidden'
var L,M
if(q.bugs.noBoxSizing){L=new x(J,null,null,null,{position:'relative',width:'100%',height:'100%',overflow:'hidden'})
L.applyConstraints()
L.setPadding=function(O){J.style.padding=O}}
else{L=new x(J,null,null,null,{position:'absolute',top:0,right:0,bottom:0,left:0,overflow:'hidden'})
L.applyConstraints()}
var N='Background BackgroundImage Border BorderColor BorderStyle BorderWidth Color Cursor FontFamily FontSize FontWeight LetterSpacing LineHeight Opacity Padding Selectable TextAlign'.split(' ')
while((M=N.pop()))this['set'+M]=(function(O){return function(P){L['set'+O](P)
return this}})(M)
this.defaultPlacement=L
this.addChildren(E)
this.style.visibility=''
this.setStyle(D)
this.setAttributes(F)
u.bindIFrame(this)}
A.prototype=e(x.prototype)
A.prototype.destroy=function(){u.unbindIFrame(this)
this.defaultPlacement&&this.defaultPlacement.destroy()
x.prototype.destroy.call(this)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_ui_IFrame"].join('')
A.prototype.__jx__fqname="jx_ui_IFrame"}
return A})()
b.__$$__meshim_common_GCanvas=(function(){var x=b.__$$__meshim_common_VmlCanvas,y=b.__$$__meshim_common_SvgCanvas,z=b.__$$__meshim_common_Canvas,A=b.__$$__meshim_common_Graphic,B,C=A.detectedGraphicType
switch(C){case 'canvas':B=z
break
case 'vml':B=x
break
case 'svg':B=y
break
case 'div':B=D
break}
function D(E,F,G,H,I){F=F||w.generateID()
var J=E.ownerDocument,K
K=J.createElement('div')
w.extend(K)
r.extend(K)
w.set(F,K)
var L=!1
K.appendToParent=function(M){if(!w.hasParentNode(K))w.appendChild(E,K)
if(M&&!L){if(E.appendToParent)E.appendToParent(!0)
L=!0}}
K.setViewBox=function(){return}
K.setStyle(G)
K.setAttributes(I)
w.addChildren(K,H)
K.appendToParent()
return K}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_common_GCanvas"].join('')
B.prototype.__jx__fqname="meshim_common_GCanvas"}
return B})()
b.__$$__meshim_common_GShape=(function(){var x=b.__$$__meshim_common_VmlShape,y=b.__$$__meshim_common_SvgShape,z=b.__$$__meshim_common_Graphic,A,B=z.detectedGraphicType
switch(B){case 'canvas':A=z.CanvasData
break
case 'vml':A=x
break
case 'svg':A=y
break
case 'div':A=C
break}
function C(){return null}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_common_GShape"].join('')
A.prototype.__jx__fqname="meshim_common_GShape"}
return A})()
b.__$$__meshim_widget_widgets_profileCard_TitleHolder=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{"class":"titleHolder"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I
function J(L){F.setText(L||'')}
function K(L){if(I===L)return
I&&F.autounbind(I,'value',J)
I=L
I&&F.autobind(I,'value',J)}
F.setDataNode=K})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_profileCard_TitleHolder
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"whiteSpace":"inherit","overflow":"hidden","textOverflow":"ellipsis"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_profileCard_TitleHolder"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_profileCard_TitleHolder"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Emoticon=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)
this.on('focus',function(){this.addClass('focus')})
this.on('blur',function(){this.removeClass('focus')})}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Emoticon"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Emoticon"}
return y})()
b.__$$__meshim_widget_widgets_profileCard_MemberName=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=null
function J(L){F.setText(L||'')}
function K(L){if(I===L)return
I&&F.autounbind(I,'value',J)
I=L
I&&F.autobind(I,'value',J)}
F.setDataNode=K})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_profileCard_MemberName
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"whiteSpace":"inherit","overflow":"hidden","textOverflow":"ellipsis","fontWeight":"bold","height":"15px","lineHeight":"12px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_profileCard_MemberName"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_profileCard_MemberName"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_common_Sanitize,J=b.__$$__meshim_common_Regex,K=b.__$$__meshim_widget_utils_Mobile,L,M=/uploaded.+\n.+https?:\/\/v2uploads\.zopim\.(com|io)\//i,N=[{name:"email_test",rx:J.search.email,cb:function(U){var V=U[0],W=U[1],X=U[2]
if(!J.tld.test(X))return V
V=V.replace(W,'')
return {original:V,processed:W+'<a href="mailto:'+V+'">'+V+'</a>'}}},{name:"url_test",rx:J.search.url,cb:function(U){var V=U[0],W=U[1],X=U[2]
if(!J.tld.test(X))return V
V=V.replace(W,'')
return {original:V,processed:W+'<a href="//'+V+'" target="_blank">'+V+'</a>'}}},{name:"protocol_test",rx:J.search.hurl,cb:function(U){var V=U[0],W=U[1]
V=V.replace(W,'')
return {original:V,processed:W+'<a href="'+V+'" target="_blank">'+V+'</a>'}}},{name:"tel_test",rx:/(?:(?:\+?\d{1,3}|\(\d{1,3}\))([-.\s])?)?\d{3,10}(?:([-.\s])\d{3,10})?/gi,cb:function(U){var V=U[0],W=U[1],X=U[2],Y=V.replace(W,'').replace(X,'')
return {original:V,processed:(K.isMobileBrowser()?'<a href="tel:':'<a href="callto:')+Y+'">'+V+'</a>'}}}]
function O(){F.setDataNode=P
F.formatChatMessage=R}
function P(U){if(L)F.autounbind(L,'value',Q)
L=U.$('msg$string')
F.autobind(L,'value',Q)}
function Q(U){U=U||''
if(M.test(U)){return}
U=R(U)
F.setHTML(U)}
function R(U){if(!U)return ''
U=I.html(U)
if(U.onTranslate)U=U.toString()
var V=[U]
for(var W=0;W<N.length;W++){S(V,N[W])}
return T(V)}
function S(U,V){for(var W=U.length;W-->0;){var X=U[W]
if(typeof X==="object")continue
var Y=0,Z=[],$$
while($$=V.rx.exec(X)){var $_=V.cb($$)
if(typeof $_==="object"){if($$.index>Y)Z.push(X.substring(Y,$$.index))
Z.push($_)
Y=$$.index+$$[0].length}}
if(Z.length){Z.push(X.substring(Y))
U.splice.apply(U,[W,1].concat(Z))}}}
function T(U){var V=""
for(var W=0;W<U.length;W++){if(typeof U[W]==="string")V+=U[W]
else V+=U[W].processed}
return V.replace(/\n/g,'<br>')}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"display":"inline"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatMessage"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatMessage"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_ViewStack=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)
this.index=a
this.length=0
this.currentChild=null
var E=this
this._onChildHide=function(){switch(E.onChildHide){case 'next':E.next(!0)
break
case 'prev':E.prev(!0)
break
case 'first':E.first(!0)
break
case 'last':E.last(!0)
break
default:var F=parseInt(E.onChildHide,10)
if(isNaN(F))break
E.setIndex(F,!0)}}
this.onDestruction(function(){E.currentChild=null})}
y.prototype=e(x.prototype)
y.prototype.addChildren=function(z){var A=z&&z.length
if(!z||!A)return
for(var B=0;B<A;B++)if(g(z[B]))this.appendChild(z[B])
else ;}
y.prototype.appendChild=function(z){if(g(z)){this.children.push(z)}
else if(z.dom){x.prototype.appendChild.call(this,z)
z.setVisible('none')}
else{this.dom.appendChild(z)}
return z}
y.prototype.removeChild=function(z){try {if(g(z));
else if(z.dom){this.dom.removeChild(z.dom)
z.parentNode=null}
else{this.dom.removeChild(z)}
var A=f(z,this.children)
if(A!=-1)this.children.splice(A,1)}catch(B){;}}
y.prototype.setIndex=function(z,A){z=parseInt(z,10)
if(!this.validIndex(z)||z==this.index)return
var B=this.currentChild,C
if(!A&&(B?B.fire('beforeIndexChange',z):1)+this.fire('beforeIndexChange',z)<2){return !1}
if(B){this.autounbind(B,'hide',this._onChildHide)
B.setVisible('none')}
this.fire('indexChanging',z)
if(z==-1){this.currentChild=null
this.index=z
this.fire('indexChange',z)
return !0}
B=this.children[z]
if(g(B)){B=this.instantiateChild(B)
C=!0}
B.setVisible('block')
this.autobind(B,'hide',this._onChildHide)
this.currentChild=B
this.index=z
C&&this.fire('instantiate',z)
this.fire('indexChange',z)
return !0}
y.prototype.instantiateChild=function(z){if(!g(z)){return}
var A=f(z,this.children)
if(A==-1){return}
z=new z[0](this,z[1],z[2],z[3],z[4])
this.children[A]=z
this.children.pop()
return z}
y.prototype.validIndex=function(z){return (z!=null)&&(z<this.getLength())&&(z>=-1)}
y.prototype.next=function(z){return k(this.index,!0)?this.setIndex(0,z):this.setIndex(this.index+1,z)}
y.prototype.prev=function(z){return k(this.index,!0)?this.setIndex(this.getLength()-1,z):this.setIndex(Math.max(this.index-1,0),z)}
y.prototype.first=function(z){return this.setIndex(0,z)}
y.prototype.last=function(z){return this.setIndex(this.getLength()-1,z)}
y.prototype.getName=function(){return this.currentChild&&this.currentChild.getName()}
y.prototype.setName=function(z){if(!z)return this.setIndex(-1)
for(var A=0,B=this.children.length;A<B;A++){if(g(this.children[A])){if(this.children[A][4]&&this.children[A][4].name===z){return this.setIndex(A)}}
else{if(this.children[A].getName&&this.children[A].getName()===z){return this.setIndex(A)}}}}
y.prototype.isFirst=function(){return this.index<=0}
y.prototype.isLast=function(){return this.index>=this.getLength()-1}
y.prototype.getLength=function(){return this.children.length}
y.prototype.getChildren=function(){return this.children}
y.prototype.getCurrentChild=function(){return this.currentChild}
y.prototype.getIndex=function(){return this.index}
y.prototype.getOnChildHide=function(){return this.onChildHide}
y.prototype.setOnChildHide=function(z){this.onChildHide=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_ViewStack"].join('')
y.prototype.__jx__fqname="jx_ui_ViewStack"}
return y})()
b.__$$__jx_ui_Form=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='form')
x.call(this,z,A,B,C,D)
this.on('submit',function(E){if(!this.validate()){E.preventDefault()
return}})
this.on('reset',function(E){E.preventDefault()
this.reset()})}
y.prototype=e(x.prototype)
y.prototype.submit=function(){this.dom.submit()
return this}
y.prototype.reset=function(){var z=this.getElements()
for(var A=0;A<z.length;A++)z[A].reset&&z[A].reset()
return this}
y.prototype.getElements=function(){var z=[]
for(var A=0,B=this.dom.elements.length;A<B;A++)z.push(this.dom.elements[A].jx_wrapper||this.dom.elements[A])
return z}
y.prototype.getAutocomplete=y.prototype.getAutoComplete=function(){return this.dom.autocomplete}
y.prototype.setAutocomplete=y.prototype.setAutoComplete=function(z){if(this.dom.autocomplete===a)return this
if(z==='on'||z==='off'){this.dom.autocomplete=z
return this}
z=n(z)
this.dom.autocomplete=z?'on':'off'
return this}
y.prototype.getNoValidate=function(){return this.dom.noValidate}
y.prototype.setNoValidate=function(z){this.dom.noValidate=n(z)
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Form"].join('')
y.prototype.__jx__fqname="jx_ui_Form"}
return y})()
b.__$$__jx_ui_StyleSheet=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
var E=z.ownerDocument
if(!D)D={}
D.tagName||(D.tagName='style')
x.call(this,E.getElementsByTagName('head')[0],A,B,null,D)
this.dom.type='text/css'
this.addChildren(C)}
y.prototype=e(x.prototype)
y.prototype.getText=function(){return this.dom.styleSheet?this.dom.styleSheet.cssText:x.prototype.getText.call(this)}
y.prototype.addChildren=function(z){if(!z||!z.length)return
if('styleSheet' in this.dom){if(!this.dom.styleSheet){this.destroy()
return}
this.dom.styleSheet.cssText+=z.join('')}
else x.prototype.addChildren.call(this,[z.join('')])}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_StyleSheet"].join('')
y.prototype.__jx__fqname="jx_ui_StyleSheet"}
return y})()
b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"dot"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","display":"inline-block","width, height":"14px","margin":"0 2px",".dot":{"position":"absolute","top, left":"4px","width, height":"6px","borderRadius":"3px","background":"$$toastColor","transition":"0.2s all"},"&.large .dot":{"top, left":"0","width, height":"14px","borderRadius":"7px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_disconnected_image_Dot"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_disconnected_image_Dot"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"start",null,[],{"id":"start"}],[b.__$$__jx_ui_Label,null,null,[],{"text":" "}],[b.__$$__jx_ui_Label,null,null,[v(146)],{}],[b.__$$__jx_ui_Label,null,null,[],{"text":" "}],[b.__$$__jx_ui_Label,"end",null,[],{"id":"end"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__start'),H=w.get(z+'__end')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){F.setStart=function(K){G.setText(K)}
F.setEnd=function(K){H.setText(K)}})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_GoodRatingButton=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ratingBar_RatingButton,null,null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"happy","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[v(141)],{"class":"description"}]],{"placement":"default_value","discardPlacement":"true"}],[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"happier","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[v(141)],{"class":"description"}]],{"placement":"selected_value","discardPlacement":"true"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_GoodRatingButton
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ratingBar_RatingButton.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ratingBar_RatingButton
x.__jx__jcss={"**self":{".description":{"marginLeft":"5px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_GoodRatingButton"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_GoodRatingButton"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_BadRatingButton=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ratingBar_RatingButton,null,null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"sad","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[v(142)],{"class":"description"}]],{"placement":"default_value","discardPlacement":"true"}],[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"sadder","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[v(142)],{"class":"description"}]],{"placement":"selected_value","discardPlacement":"true"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_BadRatingButton
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ratingBar_RatingButton.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ratingBar_RatingButton
x.__jx__jcss={"**self":{".description":{"marginLeft":"5px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_BadRatingButton"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_BadRatingButton"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ViewStack=(function(){var x=b.__$$__jx_ui_ViewStack,y=x
x=function(z,A,B,C,D){if(!(this instanceof x))return new x(z,A,B,C,D)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
if(!D)D={}
y.call(this,z,A,B,C,D)}
x.__jx__jcss={"**self":{"width, height":"100%","overflow":"hidden"}}
x.prototype=e(y.prototype)
x.prototype.__jx__super=y
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ViewStack"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ViewStack"}
return x})()
b.__$$__meshim_widget_themes_Zendesk=(function(){var x=b.__$$__meshim_widget_utils_Color,y=b.__$$__meshim_widget_themes_Simple,z={}
z._super=y
z.defaults={colors:{primary$string:'#85ae19'},branding:{type$string:'icon_font_zendesk'}}
z.overrides={chat_window:{hide_profile_card$bool:!0,use_banner$bool:!1,title_bar:{hide_minimize$bool:!0,hide_popout$bool:!0}}}
z.generate=function(){var A='#444',B="#AAA",C='#DDD',D={fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',headColor:A,headBg:x.white,titleBarHeight:'44px',titleBarPaddingBefore:'20px',titleBarPaddingAfter:'60px',titleBarFontSize:'$$fontSizeL',titleBarColor:A,titleBarBg:x.white,titleBarBorderWidth:'1px 1px 0',titleBarBorderColor:C,titleBarTextAlign:' ',titleBarIconsColor:B,actionBarHeight:"44px",actionBarPadding:"$$marginXL",chatLogMargin:"$$marginXL",chatLogAvatarRadius:"50%",chatLogFileProgressBg:C,chatTextAreaBorderWidth:0,chatTextAreaPadding:"20px 20px 0",chatTextAreaInputFontSize:"15px",chatTextAreaInputMinHeight:"60px",chatTextAreaInputMaxHeight:"60px",chatTextAreaInputLineHeight:"1.5",chatTextAreaInputPadding:"8px",chatTextAreaInputShadow:'none',chatTextAreaInputFocusShadow:'none'},E={}
return {standard:D,mobile:E}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Zendesk"].join('')
z.prototype.__jx__fqname="meshim_widget_themes_Zendesk"}
return z})()
b.__$$__meshim_widget_widgets_FontLoader=(function(){var x=b.__$$__jx_ui_StyleSheet,y=b.__$$__meshim_widget_Config,z=['eot','woff','ttf','svg'],A=['eot','svg','woff','ttf'],B={eot:"src:url(@@DATA@@);src:url(@@DATA_SPECIAL@@)format('embedded-opentype')",woff:"url(@@DATA@@)format('woff')",ttf:"url(@@DATA@@)format('truetype')",svg:"url(@@DATA@@)format('svg')"},C={eot:'application/vnd.ms-fontobject',woff:'application/font-woff',ttf:'font/ttf',svg:'font/svg'},D="@font-face{font-family:'@@NAME@@';@@FORMATS@@;font-weight:normal;font-style:normal;}",E="data:@@MIME@@;base64,@@B64DATA@@ ",F="'@@FONTS_URL@@/@@NAME@@.@@FORMAT@@'",G="'@@FONTS_URL@@/@@NAME@@.@@FORMAT@@?#iefix'"
function H(I,J,K,L,M){if(!(this instanceof H))return new H(I,J,K,L,M)
x.call(this,I,J,K,L,M)}
H.prototype=e(x.prototype)
H.prototype.setFont=function(I){var J,K=[],L,M,N=z,O=this.getBase64()
if(q.isIE<=8||q.isQuirks||(window.document.documentMode&&window.document.documentMode<=8)){O={}}
if(q.isChrome&&q.isWindows){N=A}
for(var P=0,Q=N.length;P<Q;P++){M=N[P]
L=B[M]
K.push(L.replace(/@@DATA@@/g,O[M]?E:F).replace(/@@DATA_SPECIAL@@/g,O[M]?E:G).replace(/@@FONTS_URL@@/g,y.FONTS_URL).replace(/@@FORMAT@@/g,M).replace(/@@MIME@@/g,C[M]).replace(/@@B64DATA@@/g,O[M]))}
J=D.replace(/@@FORMATS@@/g,K.join(',')).replace(/@@NAME@@/g,I)
var R=this
l(function(){if(!R.dom)return
R.addChildren([J])})
return this}
H.prototype.getBase64=function(){return this.base64||{}}
H.prototype.setBase64=function(I){this.base64=I}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FontLoader"].join('')
H.prototype.__jx__fqname="meshim_widget_widgets_FontLoader"}
return H})()
b.__$$__meshim_widget_themes_Classic=(function(){var x=b.__$$__meshim_common_Chroma,y=b.__$$__meshim_widget_utils_Color,z=b.__$$__meshim_widget_themes_Simple,A={}
A._super=z
A.defaults={colors:{bubble$string:"#e59341"}}
A.overrides={chat_button:{display_status$bool:!0,use_bubble$bool:!0},chat_window:{hide_profile_card$bool:!0,use_banner$bool:!1},message_type$string:"basic"}
A.generate=function(B){var C=y.clampLuminance(x.hex(B['colors']['primary$string']),0,0.8),D=y.clampLuminance(x.hex(B['colors']['bubble$string']),0,0.8),E=y.clampLuminance(y.darken(C,0.2,'rgb'),0,0.8),F=y.clampLuminance(y.lighten(C,0.2,'rgb'),0,0.8),G="gradient top "+y.rgbaColor(C,1)+" "+y.rgbaColor(E,1),H=y.clampLuminance(y.darken(D,0.2,'rgb'),0,0.8),I=y.clampLuminance(y.lighten(D,0.2,'rgb'),0,0.8),J=y.getColorAtContrast(C,y.white,5),K=y.getContrastColor(D,y.white,y.black,0.7,'bright',3,5)
C=C.hex()
D=D.hex()
E=E.hex()
F=F.hex()
H=H.hex()
I=I.hex()
J=J.hex()
K=K.hex()
var L="#DDD",M="#666",N="#f7f7f7",O={contentBg:N,actionBarBg:N,actionBarBorderColor:L,titleBarBg:G,titleBarBorderWidth:0,inputRadius:0,inputBorderColor:L,inputFocusBorderColor:I,inputFocusShadow:"none",chatTextAreaInputFocusShadow:"none",windowContentBorderColor:L,menuRadius:0,menuBorderColor:L,buttonColor:K,buttonBg:D,buttonHoverBg:D,buttonBorderColor:H,buttonSecBg:I,buttonSecHoverBg:I,buttonSecBorderColor:D,formSubmittedBg:y.white,formSubmittedRadius:"0px",formSubmittedBorderWidth:"1px",chatLogVisitorNameColor:M,chatLogAgentNameColor:H,chatLogSystemMsgBg:y.white,chatLogSystemMsgBorderWidth:"1px",chatLogSystemMsgPadding:"5px 0",chatLogSystemMsgBorderColor:L,chatLogFileProgressBg:G,chatButtonMinWidth:"190px",chatButtonBg:G,chatButtonShadow:"inset 0 1px 0px 0 rgba(0,0,0,0.4), inset 0 2px 0px 0 rgba(255,255,255,0.7)",chatButtonFontWeight:"normal",chatButtonStatusFontWeight:"bold",chatButtonPaddingFavicon:0,chatButtonBorderWidth:0,faviconBg:"transparent",faviconColor:D.toUpperCase()==C.toUpperCase()?'$$chatButtonColor':D,faviconDotsColor:C,chatBubbleTitleColor:K,chatBubbleTextColor:K,chatBubbleCloseColor:K,chatBubbleCloseShadow:"0px -1px 0px #999",chatBubbleCloseHoverBg:"rgba(0, 0, 0, 0.1)"},P={actionBarColor:J,actionBarBg:"transparent",actionBarBorderColor:"transparent"}
return {standard:O,mobile:P}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Classic"].join('')
A.prototype.__jx__fqname="meshim_widget_themes_Classic"}
return A})()
b.__$$__jx_ui_Input=(function(){var x=b.__$$__jx_ui_Label,y=b.__$$__jx_ui_Widget,z=b.__$$__jx_ui_Form,A=b.__$$__jx_ui_HTMLElement,B=/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z0-9][a-z0-9-]*[a-z0-9])$/i,C=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,D={required:1,pattern:2,maxlength:4,min:8,max:16,step:32},E={button:1,checkbox:1,email:7,hidden:0,number:57,password:3,radio:1,range:25,reset:0,search:7,select:1,submit:0,tel:7,text:63,textarea:1,url:7}
function F(H,I,J,K,L){if(!(this instanceof F))return new F(H,I,J,K,L)
if(!L)L={}
L.tagName||(L.tagName='input')
y.call(this,H,I,J,K,L)
if(q.engineIE<=8&&L.type&&L.tagName&&L.tagName.toLowerCase()=='input'){var M=this.parentNode
this.parentNode.removeChild(this.parentNode instanceof A?this:this.dom)
this.dom=H.doc.createElement('<'+L.tagName+' type="'+L.type+'" name="'+(L.name||'')+'"/>')
this.dom.jx_wrapper=this
this.style=this.dom.style
M.appendChild(M instanceof A?this:this.dom)
this.setStyle(J)
this.setAttributes(L)
this.addClass(this.__jx__fqname)}
L.initialValue&&this.setValue(L.initialValue)
this.setAttribute('id',this.jx_id)
L.label&&this.setLabel(L.label)
L.errorMessage&&this.setErrorMessage(L.errorMessage)
this.on('blur',function(){this.onAutoValidate()})}
F.prototype=e(y.prototype)
F.prototype.getLabel=function(){return this.label&&this.label.getText()}
F.prototype.setLabel=function(H){H&&this.createLabel(H)
this.label&&this.label.setText(H)
return this}
F.prototype.createLabel=function(H){if(this.label instanceof A)return this
if(!this.dom.parentNode)return this
this.label=new x(this.parentNode,null,null,null,{tagName:'label'})
if(this.getNextSibling()!=this.label)this.parentNode.insertBefore(this.label,this.getNextSibling())
this.label.setAttribute('for',this.jx_id||'')
this.label.addClass('label')
this.label.addClass(this.attributes.type||this.getInputType()||'')
this.label.setText(H||this.attributes.label||'')
this.defaultLabel=!0
return this}
F.prototype.getLabelElement=function(){return this.label}
F.prototype.setLabelElement=function(H){if(!(H instanceof A))return this
if(this.defaultLabel)this.label.destroy()
this.label=H
this.label.setAttribute('for',this.jx_id||'')
this.defaultLabel=!1
return this}
F.prototype.getErrorMessage=function(){return this.errorMessage&&this.errorMessage.getText()}
F.prototype.setErrorMessage=function(H){H&&this.createErrorMessage(H)
this.errorMessage&&this.errorMessage.setText(H)
return this}
F.prototype.showErrorMessage=function(){this.errorMessage&&this.errorMessage.setVisible(!0).setDisplay('')
return this}
F.prototype.hideErrorMessage=function(){this.errorMessage&&this.errorMessage.setVisible(!1)
return this}
F.prototype.createErrorMessage=function(H){if(this.errorMessage instanceof A)return this
if(!this.dom.parentNode)return this
this.errorMessage=new x(this.parentNode,null,null,null,{tagName:'label'})
if((this.label?this.label.getNextSibling():this.getNextSibling())!=this.errorMessage)this.parentNode.insertBefore(this.errorMessage,this.label?this.label.getNextSibling():this.getNextSibling())
this.errorMessage.setAttribute('for',this.jx_id||'')
this.errorMessage.addClass('error_message')
this.errorMessage.addClass(this.attributes.type||this.getInputType()||'')
this.setErrorMessage(H||this.attributes.errorMessage||'')
this.hideErrorMessage()
this.defaultErrorMessage=!0
return this}
F.prototype.getErrorMessageElement=function(){return this.errorMessage}
F.prototype.setErrorMessageElement=function(H){if(!(H instanceof A))return this
if(this.defaultErrorMessage)this.errorMessage.destroy()
this.errorMessage=H
this.errorMessage.setAttribute('for',this.jx_id||'')
this.defaultErrorMessage=!1
return this}
F.prototype.validate=function(H){var I=this.getInputType(),J=this.getValue(),K=E[I],L=this.dom,M=(!(K&D.required)||(!L.required||(J||'').trim()!==''&&J!=null))&&(!(K&D.pattern)||(!L.pattern||new RegExp(L.pattern).test(J)))&&(!(K&D.maxlength)||(!(L.maxLength&&L.maxLength>=0)||J.length<=L.maxLength))&&(!(K&D.min)||(!L.min||parseFloat(J)>=parseFloat(L.min)))&&(!(K&D.max)||(!L.max||parseFloat(J)<=parseFloat(L.max)))&&((I!='email')||(L.required?B.test(J):(J===''||B.test(J))))&&((I!='url')||(L.required?C.test(J):(J===''||C.test(J))))
!M&&H&&this.focus()
this.setValidity(M)
return M}
F.prototype.getValidity=function(){return this.validity}
F.prototype.setValidity=function(H){this.validity=n(H)
this.validity?(this.hideErrorMessage(),this.addClass('valid'),this.removeClass('invalid')):(this.showErrorMessage(),this.removeClass('valid'),this.addClass('invalid'))
return this}
F.prototype.getAutoValidate=function(){return this.autoValidate}
F.prototype.setAutoValidate=function(H){this.autoValidate=n(H)
return this}
F.prototype.onAutoValidate=function(){if(!this.autoValidate||this.getDisabled()||this.getReadOnly())return
return this.validate()}
F.prototype.reset=function(){var H=this.getType()
if(H=='submit'||H=='reset')return this
this.setValue(this.getInitialValue()||'').setValidity(!0)
return this}
var G='textarea button select'.split(' ')
F.prototype.getInputType=function(){if(f(this.tagName,G)!=-1)return this.tagName
return this.getType()}
F.prototype.getType=function(){return this.validationType||y.prototype.getType.call(this)}
F.prototype.setType=function(H){this.validationType=H
y.prototype.setType.call(this,H)}
F.prototype.getInitialValue=function(){return q.engineIE<=8?this._initialValue:this.dom.getAttribute('value')}
F.prototype.setInitialValue=function(H){if(q.engineIE<=8)this._initialValue=H&&(H.toString?H.toString():H)
else this.setAttribute('value',H)
return this}
F.prototype.getRequired=function(){return this.dom.required}
F.prototype.setRequired=function(H){this.dom.required=n(H)
return this}
F.prototype.getPattern=function(){return this.dom.pattern}
F.prototype.setPattern=function(H){this.dom.pattern=H
return this}
F.prototype.getMin=function(){return this.dom.min}
F.prototype.setMin=function(H){this.dom.min=H
return this}
F.prototype.getMax=function(){return this.dom.max}
F.prototype.setMax=function(H){this.dom.max=H
return this}
F.prototype.getMaxLength=function(){return this.dom.maxLength}
F.prototype.setMaxLength=function(H){this.dom.maxLength=parseInt(H,10)
return this}
F.prototype.getStep=function(){return this.dom.step}
F.prototype.setStep=function(H){this.dom.step=H
return this}
F.prototype.getMultiple=function(){return this.dom.multiple}
F.prototype.setMultiple=function(H){this.dom.multiple=n(H)
return this}
F.prototype.getAutocomplete=F.prototype.getAutoComplete=z.prototype.getAutocomplete
F.prototype.setAutocomplete=F.prototype.setAutoComplete=z.prototype.setAutocomplete
F.prototype.select=function(){this.dom.select&&this.dom.select()
return this}
F.prototype.getForm=function(){return this.dom.form&&(this.dom.form.jx_wrapper||this.dom.form)}
if((typeof F==='function')&&F.prototype&&!F.__jx__no_fqname){F.prototype.__jx__fqname_chain=[(F.prototype.__jx__fqname_chain||"")," ","jx_ui_Input"].join('')
F.prototype.__jx__fqname="jx_ui_Input"}
return F})()
b.__$$__meshim_widget_widgets_motif_Chat=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Motif,null,null,[],{"items":"hill, bubble b1, bubble b2, bubble b3, bubble b4, bubble b5"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){if(q.isOpera){I('b3')
I('b4')
I('b5')}
if(q.isIE8){F.setDisplay('none')}
function I(J){var K=F.dom.getElementsByClassName(J)[0]
if(!K)return
K.style.OTransform='none'
K.style.transform='none'}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_motif_Chat
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Motif.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Motif
x.__jx__jcss={"**self":{"width":"100%","height":"50px","fontFamily":"zopim, \"Segoe UI Symbol\", \"Arial Unicode MS\", \"Lucida Sans Unicode\", sans-serif","*display":"none"},"*":{"position":"absolute"},".hill":{"width":"95%","height":"20px","bottom":0,"left":"2.5%","borderTopLeftRadius":"50% 100%","borderTopRightRadius":"50% 100%","background":"$$chatMotifHill"},".bubble":{"top":0,"color":"$$chatMotifBubble","&:before":{"content":"'\\1f4ac'"}},".b1":{"fontSize":"24px","top":"12px","left":"10%","opacity":0.4},".b2":{"fontSize":"16px","top":"16px","left":"21%"},".b3":{"fontSize":"16px","top":"13px","right":"33.5%","opacity":0.4},".b4":{"fontSize":"16px","top":"14px","right":"26%"},".b5":{"fontSize":"35px","top":0,"right":"11%","opacity":0.2},".b3, .b4, .b5":{"transform":"scale(-1, 1)"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_motif_Chat"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_motif_Chat"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_DataController=(function(){var x=b.__$$__jx_data_DataNode,y=b.__$$__meshim_widget_Config,z=b.__$$__meshim_widget_controllers_DefaultDataNode,A=b.__$$__meshim_widget_controllers_StorageController,B=b.__$$__meshim_widget_utils_Utils,C=b.__$$__meshim_widget_utils_Mobile,D={'chatting':'livechat.channel.chatting$bool','account_status':'livechat.account.status$string','settings':'livechat.settings','ui':'livechat.ui','notification':'livechat.profile.notification','departments':'livechat.departments'},E=['livechat.settings.cached$bool','livechat.ui.chat_window.menu_stack_name$string','livechat.ui.chat_window.pre_chat_form.submitted$bool','livechat.ui.post_chat_form.stack_index$int','livechat.ui.offline_form.stack_index$int','livechat.ui.theme_reload$bool','livechat.ui.theme_loaded$bool','livechat.ui.popout$bool','livechat.ui.mobile$bool','livechat.ui.chat_window.chat_panel.file_toast.error$string'],F,G,H=0,I
function J($$,$_,$a){X.root=F=$$ instanceof x?$$:new x('root')
I=$a
if(!y.ACCOUNT_KEY&&!$_)return
if($_){G=$_
F.$$('livechat.ui.mockup$bool').update(!0)}
if(C.isMobileBrowser()){F.$$('livechat.ui.mobile$bool').update(!0)
if(C.isMobileWhitelist()){F.$$('livechat.ui.mobile_whitelist$bool').update(!0)}
if(C.isMobileTablet()){F.$$('livechat.ui.tablet$bool').update(!0)}}
if(window.$zopim_popout){F.$$('livechat.ui.popout$bool').update(!0)}
else if(!$_){u.setIFrameOnly(!0)}
var $b=Z(z),$c
if(!G){for(var $d in D)if(D.hasOwnProperty($d)){var $e=A.DOM.getVariable($d)
if($d=='settings'&&$e&&B.getKeys($e).length){F.update({livechat:{settings:{cached$bool:!0}}})}
if(typeof $e=='object'){$c=B.getKeys($e)
if($c&&$c.length)B.fullyExtend(B.descendsObj($b,D[$d]),$e)}
else{B.insertObj(D[$d],$e,$b)}}}
F.update($b)
if(!G){r.window.on('unload',function(){if(!K.canStoreCookie())return
for(var $g=0,$h=E.length;$g<$h;$g++){F.$$(E[$g]).update(null)}
for(var $i in D)if(D.hasOwnProperty($i)){if($i=='settings'){A.DOM.saveVariable($i,I.getServerSettings())
continue}
A.DOM.saveVariable($i,F.$$(D[$i]).getValue())}})}
var $f=A.getAllowCookieLaw()
if(typeof $f=='boolean')F.$$('livechat.profile').update({allow_cookies$bool:$f})
F.$$('livechat.settings.package').on('value',function($g){if(!$g)return
if('color_customization_enabled$int' in $g){if($g['color_customization_enabled$int'])H=1}
if('widget_customization_enabled$int' in $g){if($g['widget_customization_enabled$int'])H=2}})
X.fire('init')}
var K={sendChatMsg:L,sendFile:M,updateProfile:N,clearAll:O,reconnect:Q,canStoreCookie:P,doExternalLogin:T,doExternalLogout:U,endChat:V,getLimit:W}
function L($$,$_){var $a=$_||I.getServerTime().toFixed(0)
F.$('livechat').$('channel').$('log').$($a).write({'timestamp$int':$a,'nick$string':F.$('livechat').$('profile').$('nick$string').getValue()||'','display_name$string':F.$('livechat').$('profile').$('display_name$string').getValue()||'','type$string':'chat.msg','msg$string':$$.msg||'','department_id$int':$$.department,'unverified$bool':!0,'__client$bool':!0})}
function M($$){var $_=I.getServerTime().toFixed(0)
F.$('livechat').$('channel').$('log').$($_).write({'timestamp$int':$_,'nick$string':F.$('livechat').$('profile').$('nick$string').getValue()||'','display_name$string':F.$('livechat').$('profile').$('display_name$string').getValue()||'','type$string':'chat.file.upload','file_name$string':$$.file_name||'','file_type$string':$$.file_type||'','file_size$int':$$.file_size||0,'unverified$bool':!0,'__client$bool':!0})
return $_}
function N($$){if(!$$)return
var $_={}
if('name' in $$)$_.display_name$string=$$.name+''
if('email' in $$)$_.email$string=$$.email+''
if('phone' in $$)$_.phone$string=$$.phone+''
F.$$('livechat.profile').write($_)
return !0}
function O(){A.clearAll()
F.$$('livechat.channel').update(null)
F.$$('profile').update(null)}
function P(){var $$=F.$$('livechat.settings.cookie_law.enabled$bool').getValue(),$_=F.$$('livechat.profile.allow_cookies$bool').getValue()
if($$&&$_===!1)return !1
else return !0}
function Q(){F.$$('connection').update({reconnect$bool:!0})}
var R='zlivechatexternallogin_',S='width=500,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no'
function T($$){if(G)return
var $_=F.$$('livechat.account.key$string').getValue(),$a=F.$$('livechat.profile.mid$string').getValue()
if(!$$||!$_||!$a)return
window.open(y.AUTH_URL.replace('$NAME',$$).replace('$KEY',$_).replace('$MID',$a),R+$_,F.$$('livechat.ui.mobile$bool').getValue()?'':S)}
function U(){if(F.$$('livechat.profile.auth.type$string').getValue()){F.$$('livechat.profile.auth').write({'type$string':null})
F.$$('livechat.profile').update({'display_name$string':'','email$string':''})}
else{F.$$('livechat.profile').write({'display_name$string':'','email$string':''})}}
function V(){F.$$('livechat.channel').write({'chatting$bool':!1})}
function W(){if(F.$$('livechat.ui.mockup$bool').getValue()){return 100}
return H}
var X=r.extend({init:J,root:F,livechat:K}),Y='toString'
function Z($$){if(typeof ($$)!='object'||!$$)return $$
var $_={}
for(var $a in $$)if($$.hasOwnProperty($a))$_[$a]=Z($$[$a])
if($$.hasOwnProperty(Y))$_[Y]=Z($$[Y])
return $_}
if((typeof X==='function')&&X.prototype&&!X.__jx__no_fqname){X.prototype.__jx__fqname_chain=[(X.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DataController"].join('')
X.prototype.__jx__fqname="meshim_widget_controllers_DataController"}
return X})()
b.__$$__meshim_widget_components_chatButton_BubbleVector=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_common_GCanvas,null,null,[[b.__$$__meshim_common_GShape,"content",null,[],{"id":"content","fill":"linear, top, from(#E0741B), to(#E0981B)","stroke":"#c2c2c2"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=8,K=8,L=8,M=12,N=19,O=2,P=[['tl','M',0,K],['cs',J,-K,0],['tr','L',-J,0],['cs',J,K,0],['br','L',0,-K-L],['cs',-J,K,0],['bl','L',J+N+M,-L],['bl','L',J+N+M/2,0],['bl','L',J+N,-L],['bl','L',J,-L],['cs',-J,-K,0],['z']]
function Q(){G.setStrokeWidth(O)
F.setDimension=V
F.setFill=function(W){G.setFill(W)}}
function R(W,X){var Y=/^t[lr]|b[lr]$/,Z={'tl':[W.x,W.y],'tr':[W.x+W.width,W.y],'br':[W.x+W.width,W.y+W.height],'bl':[W.x,W.y+W.height]}
X=X.slice()
for(var $$=0;$$<X.length;$$++){var $_=X[$$],$a=$_[0]
if(Y.test($a))X[$$]=S(Z[$a],$_)}
return X}
function S(W,X){var Y=W[0],Z=W[1],$$=[]
X=X.slice()
X.shift()
$$.push(X.shift())
while(X.length>1){var $_=X.splice(0,2)
$$.push(Y+$_[0])
$$.push(Z+$_[1])}
return $$}
function T(W){var X='',Y={"cs":U}
for(var Z=0,$$=W.length;Z<$$;Z++){var $_=W[Z],$a=$_[0]
if(Y[$a]){$_=Y[$a].apply(null,$_.slice(1))}
X+=' '+$_.join(' ')}
return X}
function U(W,X,Y){var Z=W,$$=X,$_=Math.round(0.5522848*Z),$a=Math.round(0.5522848*$$),$b=Y?-Z*$$:Z*$$
if($b>0)return ['c',$_,0,Z,$$-$a,Z,$$]
else return ['c',0,$a,Z-$_,$$,Z,$$]}
function V(W,X){var Y={x:O-1,y:O-1,width:W-2*O+2,height:X-2*O-3},Z=T(R(Y,P))
F.setWidth(W+'px').setHeight(X+'px').setViewBox('0 0 '+W+' '+X)
G.setPath(Z)
return F}
Q()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_BubbleVector
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_common_GCanvas.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_common_GCanvas
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_BubbleVector"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_BubbleVector"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_FloatingFrame=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__jx_ui_IFrame,z=b.__$$__jx_ui_FullFrame,A=16000000,B;(function E(){var F=['','WebKit'],G='MutationObserver'
for(var H=0;H<F.length;H++)if((F[H]+G) in window)B=window[F[H]+G]})()
function C(E,F,G,H,I){if(!(this instanceof C))return new C(E,F,G,H,I)
var J=this
this._onAutoResize=function(){J.onAutoResize()}
x.call(this,E,F,G,null,I)
x.prototype.setMargin.call(this,'0')
x.prototype.setPadding.call(this,'0')
x.prototype.setBorder.call(this,'0')
x.prototype.setBackground.call(this,'transparent')
x.prototype.setOverflow.call(this,'hidden')
x.prototype.setPosition.call(this,'fixed')
this.appendToParent()
this.iframe=new y(this,null,null,null,{tagName:'iframe',position:'relative',width:'100%',height:'100%',border:'0',margin:'0',padding:'0',background:'transparent',overflow:'hidden'})
this.iwin=this.iframe.iwin
this.idoc=this.iframe.idoc
this.ibody=this.iframe.ibody
this.ihead=this.iframe.ihead
this.content=new z(this.iframe.defaultPlacement)
this.content.setOverflow('hidden')
this.wrapper=new x(this.content,null,null,null,{display:'inline-block'})
this.wrapper.__jx__fqname=this.__jx__fqname
this.wrapper.__jx__fqname_chain=this.__jx__fqname_chain
if(q.bugs.noBoxSizing){this.wrapper.style.display='inline'
this.wrapper.style.zoom='1'}
this.setAttributes(I)
this.defaultPlacement=this.wrapper
this.addChildren(H)
if(q.isIE<9){this.on('hide',function(){J.iframe.setDisplay('none')})
this.on('show',function(){J.iframe.setDisplay('block')})}
this.raise()}
C.prototype=e(x.prototype)
C.prototype.fire=function(E,F){x.prototype.fire.call(this,E,F)
this.iframe&&this.iframe.fire(E,F)
this.wrapper&&this.wrapper.fire(E,F)}
C.prototype.on=function(E,F){if(E=='init')x.prototype.on.call(this,E,F)
else this.wrapper&&this.wrapper.on(E,F)}
C.prototype.raise=function(E){E=parseInt(E,10)||1
this.setZIndex(A+=E)}
C.prototype.normalize=function(){var E=this.getXY()
this.moveTo(E[0],E[1]).setMargin(0)}
C.prototype.getXY=function(){var E=this.dom.offsetLeft,F=this.dom.offsetTop
if(q.isIE){if(q.isStrict){if(q.isIE6){E-=document.documentElement.scrollLeft
F-=document.documentElement.scrollTop}}
else{E-=document.body.scrollLeft
F-=document.body.scrollTop}}
else if(q.isSafari){var G=w.getStyles(this.iframe.offsetParent)
E+=parseInt(G.borderLeftWidth,10)
F+=parseInt(G.borderTopWidth,10)}
return [E,F]}
C.prototype.fitToContents=function E(F,G,H){F=F||this
var I=0,J=0
while(F.defaultPlacement)F=F.defaultPlacement
F.dom&&(F=F.dom)
J=F.scrollWidth-F.clientWidth
I=F.scrollHeight-F.clientHeight
this.resizeBy(J,I,H||0,G||0)}
C.prototype.destroy=function(){this.setAutoResize(!1)
x.prototype.destroy.call(this)
this.iframe=this.iwin=this.idoc=this.ibody=this.ihead=this.content=null}
C.prototype.setBackground=function(E){return this.iframe&&this.iframe.setBackground(E)}
C.prototype.setBackgroundImage=function(E){return this.iframe&&this.iframe.setBackgroundImage(E)}
C.prototype.setBorder=function(E){return this.iframe&&this.iframe.setBorder(E)}
C.prototype.setBorderColor=function(E){return this.iframe&&this.iframe.setBorderColor(E)}
C.prototype.setBorderStyle=function(E){return this.iframe&&this.iframe.setBorderStyle(E)}
C.prototype.setBorderWidth=function(E){return this.iframe&&this.iframe.setBorderWidth(E)}
C.prototype.setCursor=function(E){return this.iframe&&this.iframe.setCursor(E)}
C.prototype.setOpacity=function(E){return this.iframe&&this.iframe.setOpacity(E)}
C.prototype.setSelectable=function(E){return this.iframe&&this.iframe.setSelectable(E)}
C.prototype.setColor=function(E){return this.content&&this.content.setColor(E)}
C.prototype.setPadding=function(E){return this.content&&this.content.setPadding(E)}
C.prototype.setFontFamily=function(E){return this.content&&this.content.setFontFamily(E)}
C.prototype.setFontSize=function(E){return this.content&&this.content.setFontSize(E)}
C.prototype.setFontWeight=function(E){return this.content&&this.content.setFontWeight(E)}
C.prototype.setTextAlign=function(E){return this.content&&this.content.setTextAlign(E)}
C.prototype.setLetterSpacing=function(E){return this.content&&this.content.setLetterSpacing(E)}
C.prototype.setLineHeight=function(E){return this.content&&this.content.setLineHeight(E)}
C.prototype.setOverflow=function(E){return this.content&&this.content.setOverflow(E)}
var D=200
C.prototype.getAutoResize=function(){return this.autoResize}
C.prototype.setAutoResize=function(E){E=n(E)
this.autoResize=E
if(!this.wrapper)return
var F=this
if(this.autoResize){if(B){this._autoResizer=new B(function(){F.onAutoResize()})
this._autoResizer.observe(this.wrapper.dom,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}
else{if(this._autoResizer)window.clearInterval(this._autoResizer)
this._autoResizer=window.setInterval(this._onAutoResize,D)}
this.onAutoResize()}
else if(this._autoResizer){if(B){this._autoResizer.disconnect()
this._autoResizer=null}
else{window.clearInterval(this._autoResizer)
this._autoResizer=null}}
return this}
C.prototype.onAutoResize=function(){if(q.bugs.noBoxSizing){this.style.width='10px'
this.style.height='10px'}
var E=this.wrapper.getWidth(),F=this.wrapper.getHeight()
this.setWidth(E)
this.setHeight(F)
if(q.bugs.noBoxSizing){this.style.width=E+'px'
this.style.height=F+'px'
this.iframe.dom.className=this.iframe.dom.className}}
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","jx_ui_FloatingFrame"].join('')
C.prototype.__jx__fqname="jx_ui_FloatingFrame"}
return C})()
b.__$$__meshim_widget_widgets_iconFont_Auth=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_Auth
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
x.__jx__jcss={"&:hover, &:focus":{"&.facebook":{"color":"$$facebook"},"&.twitter":{"color":"$$twitter"},"&.google":{"color":"$$google"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_Auth"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_iconFont_Auth"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_EmoticonPicker=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_Emoticon,J=b.__$$__jx_ui_Widget,K={'ambivalent':':|','angry':':(','blush':':?','confused':':?','crazy':':?','crying':':?','frown':':?','gasp':':?'},L=6,M,N,O=[]
F.setDataNode=function(R,S){if(M)F.autounbind(M,'value',P)
M=R
N=S
if(M)F.autobind(M,'value',P)}
function P(R){F.setDisplay(R?'':'none')}
function Q(){var R,S=0
for(var T in K)if(K.hasOwnProperty(T)){R=new I(F,null,null,null,{className:'meshim_widget_widgets_Emoticon '+T,title:T,value:K[T],tabIndex:0})
R.setAttribute('data-index',S)
O.push(R)
if((++S)%L==0)new J(F,null,null,null,{tagName:'br'})}
F.on('click',function(U){var V=U.target.jx_wrapper
if(V==F)return
while(V.parentNode!==F)V=V.parentNode
var W=V.getValue()
if(W){N&&N.update(V.getValue())
M&&M.update(!1)}})
F.on('keydown',function(U){var V
U.target.jx_wrapper
switch(U.keyCode){case 13:V=U.target.jx_wrapper.getValue()
if(V){N&&N.update(U.target.jx_wrapper.getValue())
M&&M.update(!1)}
break
case 27:M&&M.update(!1)
break
case 9:return
case 38:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)-L]
V&&V.focus()
break
case 40:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)+L]
V&&V.focus()
break
case 37:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)-1]
V&&V.focus()
break
case 39:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)+1]
V&&V.focus()
break
default:return}
U.preventDefault()})}
Q()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_EmoticonPicker
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".meshim_widget_widgets_Emoticon":{"&:focus":{"outline":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_EmoticonPicker"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_EmoticonPicker"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Card=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_widgets_IconFont,z=b.__$$__meshim_widget_utils_Utils,A='minimize',B='plus'
function C(D,E,F,G,H){if(!(this instanceof C))return new C(D,E,F,G,H)
if(!H)H={}
this.$node
this.nodeValue
var I=this
this._update=function(J){I.update(J)}
this.minimized
x.call(this,D,E,F,null,H)
if(!C.__jx__jcss_generated){u.generate(this,C.prototype.__jx__fqname,C.__jx__jcss,null,C)
C.__jx__jcss_generated=!0}
this.toggle_button=new y(this,null,null,null,{icon:H.MinimizeIcon||A,addClass:'toggle_button',tabIndex:'0'})
this.defaultPlacement=this.container=new x(this,null,null,null,{addClass:'card_container'})
this.addChildren(G)
z.hoverFix(this)
z.onTransitionEnd(this,this,function(J){J.stopPropagation()
if(J.target.jx_wrapper!=I)return
if(I.minimized)return
I.scrollIntoView()})
z.onTransitionEnd(this,this.toggle_button,function(J){J.stopPropagation()})
this.on('click',function(J){if(J.target.jx_wrapper!=this.toggle_button&&!this.minimized)return
I.onClick()})}
C.__jx__jcss={"**self":{"position":"relative","overflow":"hidden","width":"100%","padding":"10px","*zoom":1,"transition":"height 0.3s, max-height 0.3s, background 0.3s","maxHeight":"2000px","&":"$$card","&.minimized":{"&":"$$cardMinimized","&, *":{"cursor":"pointer"},".toggle_button":{"opacity":1},"&:hover":{"&":"$$cardMinimizedHover",".toggle_button":{"color":"$$cardToggleHoverColor"}}},"&.hover, &:hover":{".toggle_button":{"opacity":1}}},".card_container":{"*overflow":"hidden","*width":"100%"},".toggle_button":{"float":"right","cursor":"pointer","marginLeft":"8px","fontSize":"10px","padding":"4px 0","opacity":0,"transition":"opacity 0.2s, color 0.2s","color":"$$cardToggleColor","&:hover":{"color":"$$cardToggleHoverColor"}}}
C.prototype=e(x.prototype)
C.prototype.setMinimizeIcon=function(D){this.toggle_button&&this.toggle_button.setIcon(D)}
C.prototype.setDataNode=function(D){if(this.$node==D)return
if(this.$node)this.autounbind(this.$node,'value',this._update)
this.$node=D
if(this.$node)this.autobind(this.$node,'value',this._update)}
C.prototype.update=function(D){this.nodeValue=this.$node.getValue()
if(D){if('minimized$bool' in D)this.minimized=D['minimized$bool']}
if(this.minimized){this.addClass('minimized')
this.setMinimizeIcon(B)}
else{this.removeClass('minimized')
this.setMinimizeIcon(A)}}
C.prototype.scrollIntoView=function(){if(!this.dom)return
if(this.minimized)return
var D=this.dom.offsetParent,E=D.clientHeight,F=D.scrollTop,G=this.dom.scrollHeight,H=this.dom.offsetTop
if((F<H)&&((F+E)>(G+H))){return}
else{var I=Math.max((E-G)/2,0)
I=Math.max(H-I,0).toFixed(0)
D.scrollTop=I}}
C.prototype.onClick=function(){this.$node&&this.$node.update({'minimized$bool':!this.minimized})
var D=this
l(function(){D.scrollIntoView()})}
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Card"].join('')
C.prototype.__jx__fqname="meshim_widget_widgets_Card"}
return C})()
b.__$$__meshim_widget_widgets_toast_disconnected_Image=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot,J=100,K='large',L=6,M=-1,N=1,O=!1,P,Q,R,S=[]
for(var T=0;T<L;T++){S[T]=new I(F)}
F.play=function(){if(P)return F
U()
P=window.setInterval(U,J)
return F}
F.stop=function(){if(!P)return F
window.clearInterval(P)
P=null
return F}
F.reset=function(){S[R]&&S[R].removeClass(K)
R=M
Q=O
return F}
F.reset()
function U(){S[R]&&S[R].removeClass(K)
if(R<(0-N)||R>=(L+N))Q=!Q
Q?R++:R--
S[R]&&S[R].addClass(K)}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_disconnected_Image
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_disconnected_Image"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_disconnected_Image"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_FileUploader=(function(){var x=b.__$$__jx_ui_Form
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
x.call(this,z,A,B,C,D)
this.setAttribute('method','post')
this.setAttribute('enctype','multipart/form-data')}
y.prototype=e(x.prototype)
y.prototype.submit=function(){if(!this.path)return
this.setAttribute('action',this.path)
var z='_widget_fileuploader_'+(+new Date()),A
if(q.bugs.noBoxSizing){A=this.doc.createElement('<iframe name="'+z+'">')}
else{A=this.doc.createElement('iframe')
A.setAttribute('name',z)}
A.setAttribute('id',z)
A.style.display='none'
this.dom.target=z
this.appendChild(A)
x.prototype.submit.call(this)}
y.prototype.setPath=function(z){this.path=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FileUploader"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_FileUploader"}
return y})()
b.__$$__meshim_widget_widgets_Header=(function(){var x=b.__$$__meshim_widget_widgets_Body
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)}
y.__jx__jcss={"**self":{"fontWeight":"bold"}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Header"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Header"}
return y})()
b.__$$__meshim_widget_widgets_AbsolutePaddingContainer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('theme_loaded$bool'),K,L
F.setAbsPaddingTop=function(P){K=P
M()}
function M(){var P=u.getVariable(K)
F.setStyle('padding-top',(K&&P)||'')}
F.setAbsPaddingBottom=function(P){L=P
N()}
function N(){var P=u.getVariable(L)
F.setStyle('padding-bottom',(L&&P)||'')}
function O(){F.autobind(J,'value',function(P){if(!P)return
M()
N()})
F.updatePaddingTop=M
F.updatePaddingBottom=N}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_AbsolutePaddingContainer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","*overflow":"visible","width":"100%","height":"100%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AbsolutePaddingContainer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_AbsolutePaddingContainer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_Branding=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"brand_extended"}]],{"selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('settings').$('branding').$('hide_branding$bool')
function K(){F.autobind(J,'value',function(L){F.setVisibility(L?'hidden':'')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_Branding
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"display":"inline-block","lineHeight":1.3,"letterSpacing":"1px","fontSize":"11px","&:focus":{"outline":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_Branding"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_Branding"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_utils_Strings=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_DefaultDataNode,z=b.__$$__meshim_widget_utils_Utils,A=b.__$$__jx_data_DataNode,B={get:function(C){if(!C)return ''
var D,E
if(C instanceof A){D=C.getValue()
E=z.descendsObj(y,C.path().slice(1).join('.'))}
else{D=x.root.$$(C).getValue()
E=z.descendsObj(y,C)}
if((D&&D.toString(1))==(E&&E.toString(1)))return E
return D||''},status:{online:v(37),away:v(38),offline:v(39)},error_message:{'text':v(40),'email':v(41),'textarea':v(40),'select':v(42),'radio':v(42),'checkbox':v(43),'checkbox_multiple':v(44),'department':v(45),'default':v(46)},placeholder:{'phone':v(47)},end_chat_menu_message:v(48),external_login:{'facebook':v(49),'twitter':v(50),'google':v(51)},chat_log:{'chat.memberjoin':v(52),'chat.memberleave':v(53),'chat.changename':v(54),'chat.visitorjoin':v(55),'chat.visitorleave':v(56)},chat_button:{'unread_one':v(57),'unread_many':v(58),'unread_mobile':v(59),mobile_greeting:{'online':v(60),'offline':v(14)}},connection_status:{'reconnecting':v(61),'idle_disconnect':v(62),'disconnected':v(61),'resuming':v(63),'fast_init':v(64)},cookie_law:{'disabled':v(65),'disabled_mobile':v(66)},popout_title:v(67),profile:{'unlink':v(68)},system_msg:{'queue':v(69)},branding:{'title':v(70),'title_zendesk':v(71)},pre_chat_offline_form:{'button_message':v(72),'button_chat':v(73),'department_any':v(74),'department_any_required':v(13),'button_disabled':v(36),operating_hours:{'closed':v(75)}},file_upload:{'error':{'size':v(76),'type':v(77),'disabled':v(78),'default':v(79)}},datetime:{days:[v(80),v(81),v(82),v(83),v(84),v(85),v(86)],'weekday':v(87),'weekend':v(88),'everyday':v(89),'all_day':v(90)}}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Strings"].join('')
B.prototype.__jx__fqname="meshim_widget_utils_Strings"}
return B})()
b.__$$__meshim_widget_widgets_CookieLawNotice=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_Localizer,"localizer",null,[[b.__$$__jx_ui_html_a,null,null,[],{"class":"cookie_link"}]],{"id":"localizer","content":v(145)}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__localizer')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$$('livechat.ui.chat_window')
function L(){G.on('click',function(M){if(M.target.jx_wrapper.hasClass('cookie_link')){K.update({'main_stack_name$string':'cookie_form'})}})}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_CookieLawNotice
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={".cookie_link":{"textDecoration":"underline","cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_CookieLawNotice"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_CookieLawNotice"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_TextField=(function(){var x=b.__$$__jx_ui_Input,y=b.__$$__jx_core_ObjectUtil,z={tagName:"input",autoValidate:!0}
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
F=y.extend({},z,F)
if(F.tagName=='input'&&!F.type)F.type='text'
x.call(this,B,C,D,E,F)
if(!this.getValue())this.showPlaceholder()
this.on('blur',this.handlePlaceholderBlur)
this.on('focus',this.handlePlaceholderFocus)
this.on('click',this.handleAutoSelect)
var G=this
this._handlePlaceholder=function(){G.setPlaceholder(G.getPlaceholder())}
v&&v.onLanguage&&v.onLanguage(this._handlePlaceholder)}
A.prototype=e(x.prototype)
A.prototype.getPlaceholder=function(){return this.internalPlaceholder||''}
A.prototype.setPlaceholder=function(B){if(!('placeholder' in this.dom))this.emulatePlaceholder=!0
this.internalPlaceholder=B
this.emulatePlaceholder||(this.dom.placeholder=B)
this.placeholderActive&&this.showPlaceholder()
return this}
A.prototype.handlePlaceholderFocus=function(){if(this.placeholderActive)this.hidePlaceholder()}
A.prototype.handlePlaceholderBlur=function(){if(!this.getValue())this.showPlaceholder()}
A.prototype.showPlaceholder=function(){this.addClass('placeholder')
this.placeholderActive=!0
var B=this
if(this.emulatePlaceholder){this._setValueOverride=!0
this.setValue(this.getPlaceholder())
this._setValueOverride=!1
if(this.getType()=='password'){this.realTypePassword=!0
if(q.engineIE<9){if(!this.fakePlaceholderPasswordIE){var C={'class':this.getClass(),type:'text',visible:'none',value:this.getPlaceholder(),autoValidate:!1,tabIndex:this.attributes.tabIndex}
this.fakePlaceholderPasswordIE=new x(this.parentNode,null,null,null,C)
this.parentNode.insertAfter(this.fakePlaceholderPasswordIE,this)
this.autobind(this.fakePlaceholderPasswordIE,'focus',function(){B.hidePlaceholder()})}
this.getComputedStyle('display')!='none'&&(this.originalDisplay=this.getComputedStyle('display'))
this.fakePlaceholderPasswordIE.show().setOneStyle('display',this.originalDisplay).setClass(this.getClass())
this.setVisible('none')}
else this.setType('text',!0)}}}
A.prototype.hidePlaceholder=function(){this.removeClass('placeholder')
this.placeholderActive=!1
if(this.emulatePlaceholder){this._setValueOverride=!0
this.setValue('')
this._setValueOverride=!1
if(this.realTypePassword){this.realTypePassword=!1
if(q.engineIE<9){if(this.fakePlaceholderPasswordIE instanceof x)this.setVisible('block').setOneStyle('display',this.originalDisplay)
this.fakePlaceholderPasswordIE.setVisible('none')
this.focus()}
else this.setType('password',!0)}}}
A.prototype.setValue=function(B){var C=(B===0||!!B)
if(!this._setValueOverride)C&&this.hidePlaceholder()
x.prototype.setValue.call(this,B)
if(!this._setValueOverride){try {if(this.doc.activeElement.jx_wrapper!=this){C||this.showPlaceholder()}}catch(D){;}}
return this}
A.prototype.getValue=function(){if(this.placeholderActive&&this.emulatePlaceholder)return ""
return x.prototype.getValue.call(this)}
A.prototype.setAutocomplete=A.prototype.setAutoComplete=function(B){if(!('autocomplete' in this.dom))return this
if(B=='on'||B=='off'){this.dom.autocomplete=B
return this}
B=n(B)
this.dom.autocomplete=B?'on':'off'
return this}
A.prototype.getAutocomplete=A.prototype.getAutoComplete=function(){return this.dom.autocomplete}
A.prototype.getAutoSelect=function(){return this.autoSelect}
A.prototype.setAutoSelect=function(B){this.autoSelect=n(B)
return this}
A.prototype.handleAutoSelect=function(){if(!this.autoSelect)return
this.dom.select()}
A.prototype.destroy=function(){v&&v.unLanguage&&v.unLanguage(this._updatePlaceholder)
this.un('blur',this.handlePlaceholderBlur)
this.un('focus',this.handlePlaceholderFocus)
this.un('click',this.handleAutoSelect)
if(this.fakePlaceholderPasswordIE instanceof x){this.fakePlaceholderPasswordIE.destroy()
this.fakePlaceholderPasswordIE=null}
x.prototype.destroy.call(this)}
A.prototype.reset=function(){x.prototype.reset.call(this)
this.handlePlaceholderBlur()
return this}
A.prototype.insertAtCaret=function(B){if(!B)return
if(this.placeholderActive)this.hidePlaceholder()
if(this.dom.selectionStart!==a&&q.engineIE!=9){var C=this.dom.selectionStart,D=this.dom.selectionEnd,E=this.getScrollTop(),F=this.getValue()
this.setValue(F.substring(0,C)+B+F.substring(D,F.length))
this.focus()
this.dom.selectionStart=this.dom.selectionEnd=C+B.length
this.setScrollTop(E)}
else if(document.selection){this.focus()
var G=document.selection.createRange()
G.text=B
this.focus()}
else{this.setValue(this.getValue()+B)
this.focus()}}
A.prototype.getCaret=function(){var B=0
if(this.dom.selectionStart!==a){B=this.dom.selectionStart}
else if(document.selection){this.focus()
var C=document.selection.createRange()
C.moveStart('character',-this.getValue().length)
B=C.text.length}
return B}
A.prototype.setCaret=function(B){if(this.dom.selectionStart!==a){this.dom.selectionStart=B
this.dom.selectionEnd=B
this.focus()}
else if(document.selection){this.focus()
var C=document.selection.createRange()
C.moveStart('character',-this.getValue().length)
C.moveEnd('character',-this.getValue().length)
C.moveStart('character',B)
C.moveEnd('character',0)
C.select()}
return this}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_ui_TextField"].join('')
A.prototype.__jx__fqname="jx_ui_TextField"}
return A})()
b.__$$__meshim_widget_widgets_form_InputMultiple=(function(){var x=b.__$$__jx_ui_Label,y=b.__$$__jx_ui_Input
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!E)E={}
E.tagName='div'
this.options=[]
this.labels=[]
y.call(this,A,B,C,D,E)
this.on('click',function(){this.validate()})}
z.prototype=e(y.prototype)
z.prototype.getRequired=function(){return this.required}
z.prototype.setRequired=function(A){this.required=n(A)
return this}
z.prototype.setReadOnly=function(A){this.readOnly=n(A)
return y.prototype.setReadOnly.call(this,A)}
z.prototype.setOptions=function(A,B){this.empty()
this.options.length=this.labels.length=0
var C=this.getName(),D,E
for(var F in A)if(A.hasOwnProperty(F)){D=new this.optionConstructor(this,null,null,null,{name:C,value:A[F]['value$string'],checked:A[F]['checked$bool'],initialChecked:A[F]['checked$bool'],disabled:this.readOnly,display:(this.readOnly&&!A[F]['checked$bool'])?'none':'',className:'input_input_'+this.inputSuffix});(D.container||D).addClass('input')
E=new x(this,null,null,[A[F]['label$string']||A[F]['value$string']],{className:'option_label',display:(this.readOnly&&!A[F]['checked$bool'])?'none':''})
if(B)D.setChecked(A[F]['checked_user$bool'])
D.setLabelElement(E)
this.options.push(D)
this.labels.push(E)}
return this}
z.prototype.getOptions=function(A){var B={},C=A?'checked_user$bool':'checked$bool'
for(var D=0,E=this.options.length;D<E;D++){B[D]={}
B[D][C]=this.options[D].getChecked()}
return B}
z.prototype.focus=function(){this.options[0]&&this.options[0].focus()
return this}
z.prototype.validate=function(A){if(this.required){for(var B=0,C=this.options.length;B<C;B++)if(this.options[B].getChecked()){this.hideErrorMessage()
return !0}
A&&this.options[0]&&this.options[0].focus()
this.showErrorMessage()
return !1}
else{this.hideErrorMessage()
return !0}}
z.prototype.reset=function(){for(var A=0,B=this.options.length;A<B;A++){this.options[A].reset()}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_InputMultiple"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_form_InputMultiple"}
return z})()
b.__$$__jx_ui_Option=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='option')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.getLabel=function(){return this.dom.label}
y.prototype.setLabel=function(z){this.dom.label=z
return this}
y.prototype.getSelected=function(){return this.dom.defaultSelected}
y.prototype.setSelected=function(z){this.dom.defaultSelected=n(z)
return this}
y.prototype.getPlaceholder=function(){return this.placeholder}
y.prototype.setPlaceholder=function(z){this.placeholder=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Option"].join('')
y.prototype.__jx__fqname="jx_ui_Option"}
return y})()
b.__$$__meshim_widget_widgets_ImagePreloader=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_utils_Utils
function z(A,A,A,A,B){if(!(this instanceof z))return new z(A,A,A,A,B)
B&&B.path&&this.setPath(B.path)
var C=this
this._update=function(D){C.update(D)}}
z.prototype.setDataNode=function(A){if(A==this.node)return
if(this.node)this.node.unbindValue(this._update)
this.node=A
if(this.node)this.node.bindValue(this._update)
return this}
z.prototype.setPath=function(A){return this.setDataNode(x.root.$$(A))}
z.prototype.update=function(A){if(!window.Image||!A||A==this.last_image)return
this.last_image=A
var B=new window.Image()
B.src=y.replaceFileHostname(this.last_image.toString())}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ImagePreloader"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_ImagePreloader"}
return z})()
b.__$$__meshim_widget_utils_BindClass=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y={}
function z(){var E=x.root
y.mobile=C(E.$('livechat').$('ui').$('mobile$bool'))
y.popout=C(E.$('livechat').$('ui').$('popout$bool'))
y.mockup=C(E.$('livechat').$('ui').$('mockup$bool'))
y.tablet=C(E.$('livechat').$('ui').$('tablet$bool'))
y.rtl=function(F){if(v&&v.onLanguage){v.onLanguage(H)
H()
F.onDestruction(G)}
else{F.addClass('ltr')}
function G(){v.unLanguage(H)}
function H(){if(v.rtl()){F.addClass('rtl')
F.removeClass('ltr')}
else{F.addClass('ltr')
F.removeClass('rtl')}}}
y.windowPosition=A(E.$('livechat').$('settings').$('theme').$('chat_window').$('position$string'))
y.windowPositionMobile=A(E.$('livechat').$('settings').$('theme').$('chat_window').$('position_mobile$string'))
y.windowSize=A(E.$('livechat').$('settings').$('theme').$('chat_window').$('size$string'))
y.buttonPosition=A(E.$('livechat').$('settings').$('theme').$('chat_button').$('position$string'))}
x.on('init',z)
function A(E,F){F=F||''
return function(G,H,I){H=H||''
G.autobind(E,'value',B(G,F+H,I))}}
function B(E,F,G){var H
return function I(J){if(H==J)return
if(H)E.removeClass(F+H)
H=J
if(H)E.addClass(F+H)
if(typeof G=='function')G(H)}}
function C(E,F){F=F||E.name.split('$')[0]
return function(G,H){G.autobind(E,'value',D(G,F,H))}}
function D(E,F,G){return function H(I){E[I?'addClass':'removeClass'](F)
if(typeof G=='function')G(I)}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_BindClass"].join('')
y.prototype.__jx__fqname="meshim_widget_utils_BindClass"}
return y})()
b.__$$__meshim_widget_widgets_fontLoader_ZopimFont=(function(){var x={eot:'0R0AABEdAAACAAIABAAAAAIABQMAAAAAAAABAJABAAAEAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAqWINmwAAAAAAAAAAAAAAAAAAAAAAAAoAegBvAHAAaQBtAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAaAHoAbwBwAGkAbQAgAFIAZQBnAHUAbABhAHIAAAAAAEJTR1AAAAAAAAAAAAAAAAAAAAAAAwA8KAAW7wAW8wAQFBLN6YrIYNhXyWhLcUp/eCJVOnIsL5Y0XJvcFQ4MbGnS29PxiMqaDwadQMdMRk20HbaAFMOrFDPqK4wOs9zJcitySzAK14NfkGZann0FkKb+zYpnpGV9VDgy3UmtojINws0cd+OrwNB6of79n0ZjE46oCO18ty6o1VBg9DdxBAIDx54qK5vyu1gE6FCisUW0z6sVtxzN3/nRWVXBMw3pWjM4W8fQk96SHg1jUXOMIbMq5e6JT6AF0iKVRYbPK2A86PtGBKDgng/eBuVioaQqbNz6mIGtdIIASyxwQL6RWYoPHYi8m43h8+xfiY8gpmtzVFCIMTIqZfaXWX90/t99FBo7ii/KI4pBdDPC7zsFwy0uehn3ZLXz4IXHLA7ewmW5oH6SqJWpWokYI8CwVYfe7ALjO52LhHajtDgzcycswpYxOTtjLU1oSL3UZuVyCgQRq9ELCiDVgQglE0BIPBvYX3QvCKzESvOZReNc3EGzoiGRMaw2QCFaoBAJJbYtk46hQTULNooSaZ+XDxpaMuPLLSi0PKVgMg5kAU2OTsoBiIehWB4HhCLlYIZcuN+AlfN+EAEbAWDDHzyBoXwbR4AJFQOk7oJyAD19/mgCKnR7OAMbSwlpYSPHq+SX6hu4gt50cmGlSyyGTAgod2g8/IhzqUzORAUIEimVB6+JT+g4jCjFSVskgpWAUSqcogA0nMcCabSBYHsx2TFvzuvDEsnJaQioYHoOiWQTKOLk0khS6IWIVGDs9U1rbFYkLSD9aUqGF4czmhpWRTn9ci1kutJriZk2yUBg95bgxw/FloBXbiGDrfYlo+FsQlsBBMnSaWZRZG1b1FDWXVVpl3qLN4KPXN6kx+N/lbnTBWbyTu1xwdx3hJu6yAiDdbxtW/Gzd6WqKJyHAjpfp1d9Avu9pQ5YNBCh3bof9N8Z6BEiQ2X9cFskVID53y5I4kjrOsN1K+OSIP8pkNJ3RH4lm3MFINHBIWZhfmxAbp4Bks+ZKvfwrq6aMzumRjk3AL4F/Tf6XQqxAyuzRmRQNgpnNiAyoR+maww1YwUfCtui23wHPGyCNAgmJiTAqBAJZYSJm+zg6YKIQxoneefXajbyAmGAwwBpCfGJiPXCgIt5Wjwr8rBIA2CvTlbSDlGoCZjjsFwW7ocYeZju/jTCblaMkyzITRtJgHiM5NYq0nhcx+TZi0KpVrt+65snSxuJHQyymji+RMmQRgwJj5clFcO5vKGt9uEfiyeoZOkW6VLDSXfbrRsQ4xEgi/UDllNoxS9iPAdokL8WGWytERx6hAHnnGtOTztpvfPjwywU9QIkZ4r7JkShv0xOstTpoMk/o5mB8MSsdRYJhXLF6NCxJ+8C1EBoKBAcnhbfotkx3hNaTsfXtjIX7KlWlKUmr1CxY9vT+w+2J/EVIRgoQgOwl88r2NncovosbgTlIlOdHMRWzIhlBW6LTrNL/BNe6HGZa24ne1rscBVi0NnCsWhICfDk1dk75k5LkqFY+uURfp6FKW1KfAUVyhHAI+EYIB5pWxItaK71vSkx6MA8eAJ/AW7eKuYv0xQw1vsWQBwHEd7A3QBgVfLyCZZAOw1KIA37i1AXOU0IJWPqiokAmmv1gWsHxllKi2AHz5NQha8u9GgqBQG1VvI4QI0M2WEaz4OBMjnEklU5wg9OYoHT3PEaIYWERFeujs00IBBsAQUAbZZrTcCVjVsMYyIhrIBLTT1Gsk7InHNOmclFmkqiI3FjZ3b1+sR/wdbDgZUAVo6ImGkuocw3ei+MyieY/9wk25ILi2CobOd/pkIG+DJfXxPtAJW6hEUqUTiO72r/z7bwKz6y0Za0/38przDIrBYw+Op8YfcRMx7+wpOyEVR+T7V3HIh9guPMtyRfCR+oQBC9Qyw4ZIz1jBTXSdcQ6/6X1flzRlVVlHNUPZ1hdjYUibPBYivQoFZTUJkCNYx6BUfcYGDst7knEv2TAuV+qBSKMNXMfrRKM/0tFyXN2CECJtBhGF4VMi/hEdafYYXBAZwQslTwQHIOBmdKs/oIotiYgE8VoHiKoi1X+9yfABR8KJIcdj8CDMcePBoJJEeWG2kZj+zj81wo0dFYKj3y7mRjSinMN6MWfzRrCJ8ppH9DJguSCs5taD6mwzlABkY/zSAMthfzy+2bCg7kI/vkHi9yyDaVrZ87WAfh+LCS7w6NNgViXFF3qE58XBFqUtSPr7XADjMpVBtvBBK/Vkv9fbAjmy6/TjCq5j7z/C7C6dHVmP59RH92WweQdSGfhEwKDp/lgfLTtLF4cqg8oWtyUyFB4SKGC69SkMQAf5Pu2SkpLMTk7IAfxqYgK9AccS6fejngDRb0E2hEFNhSkBmDMawzxBRnB3Zqedgq0BlzHMypSAEqyaJ+WT2Nwa/TRc60yoXbJ9SIokR1GiDlTpB6QIWj9iVfCwCU775ZRbnAu11QlbfsjnhsZFkwiccHd6E2wOf4+LDWtML8cd3w9ebOa6gvbRASr4tYknrSoeZ6wzgNwL5SROBmCD3wKlnbeFPpesEnXI2McvLKSgmxfJEUFspj/NgK/ChJnXDgtGDciSrC4sv0BfuKiBlNknCXiySPBE9aW5yAGF32BjDAe5ItEQhGtAYMSMgHj4WcTGtRMEfyjjqdN4blNWsnEoGMiwmDTwM5O1JBO9lhRtfqqjmlKmypCdqCXUGg7QjSIMyzjAkJ4zoD9o6Ch9jiiJP0BQW15fucR2sxymk2EBtDjcHPi6iMwNkIF5auBG8nWDfVSIplJ/E9RN1s7TbaF8NINP2xZWZth4dFf6nHURoRQH9J+AiGKQCA1QryE3qi7qZbwyyHquXkSQ2xy6CxnDLKjlb/QD/TxSLmPI0lBBgqMSJXyLiDHBd3T0CMKGFLav8BHbiDhwbhue/Y8QeuW7fyDBYwmB8K3BU/qa2jGCYN6xVTIkf7GBhm92aLuocbj1hLP0DEot3RyvnOOQ83vgI0B/mI7niocgX4PYfhQpNYyyrM2xs+YExF0kM/LLPY8j0WBgNH4m/idAdZYs+XWOSOVrVxhSGZOlowKW8WIGZBZuKPGDKOAR4qhXDwH4I+e2RO6YyUniCRYDv6tRPsqOWlNHK0sJwPLvr5sclXp85lUmvO8Zb0XAXSba/B8Bv0njCbWkKLE0wu4Kcbw7RfSibF+dRo8TzTKyWRGhgKk1VsHIoslclWrr6DclEnksou21H71s2DUMQ4cj5+AWzgWHd5GV+hqgCv5neoSDZupZ4pNjuDAfrD/kN+JkiP2j7SnQIS28PNE+j9EO/oeBJjzSkQP/6LbT5i2IWqVqMp42S+jgwem54pVUq4cXD5mcU4mzWIv/BNtxPdKIoXRLjLIx/onEv0Eo9zkT9qDz/k2xkLUxKidXO6hOjbHmYitJA6RWM9lBGGpWu2n4acqMqIeOFAUlvNziHBLrOFAfuC5eJo3UlUzrcpjz+PUDtJXLYFRziOZy4iQfwL+aXo0QZOat5kA38J+s9gsCXVvYB0u7dRskEHAO8ZldyggIumPWcsS0HpW+OLstJNQAylA4xrcyapX0xUg9YvOTPR50j/xyk0AFlKyX2fVhbykftBi4eQXIN0O6HLeAnCSLVYTIwYVsi9vp6Z8pQA+9LOansJuRRkhDDFHQW350YOdi0oEapu1ietewAdyJih0uAmWF/yyVlq99UAoLwIfYCGk0WzyESXjYDX67CD6x2iwkImQceGFtKfQ7cEKUg6sGWXBrYeAmM3CXtUoCEJ7q8QMmTf8HU4OiZPPEk8wLhIqMLeaGGz5Hxp6RcovYDeBZc9w2XrM8vHihsDt7Lb5pDJKk0ma1iLDjMJ+Kl88mzdGPogEzGLtA4BRa4/Z9TKsFvSF+LaLlVoIJAzGPDzlBiqetCNKIzrt6rIH3ssra43YkN9OCMOTbhf0oS4aC6UIoeNTMpMh5DKpIm03DGQRYcPE7YQ7XRk+j7bc5Y/S5dGuQ5i0Oxk5ZEWY08IRDwWZLJ9sp+pPCqtiwfSQ/zYsy61q6K4V7QPENAMHmROgAU0akiLtlEc0l9jq6MbSqDxG9KJcXGdZZjilBH9rfx2bEhCySPpQW3NMQniZVGvfHILIbuKekCgFeqmNnGEj8DFXNQfleG584uYnHGl5xuwbMYEWgkToPPgOPS4fA9UFHNbuOJV59XhAu+4yl1SWjQEisZ1zAD/eLw/rUCA0j+5i+nCBDnz9lSA0wkVmGVVFV1FZRdVuEPVBTslKNfnJj8Rlc8+8LQn5iOIsJR2A/OdOjle1tRRSCfCZAiwtFLv21r5e4kmusAo7PdAykduqO+3iCtHJpGw2hwj8LDRUgkME6Wzks1IHlwEfGJ0c+9oTNFk03FsKZAl5b1GcNnynRIFFQ4/AJRFIVkgJZfv0CtTx1HHo5c4BcFGFRHlVAlaLO2zBghbn5ioBktTACPuPGqUe3VCPsA0q1BOscEJMco4p4ObwzTZeDl/Lg52AaxmVObucbKnPHfBY9Ah8CxubECtj6p5syQDKaIlQjRjii7L+ULB0+rw86hjb4gP6X/4qkpXNHoblGQaaH13hyvV5kMqkRRMQU8zpH53TiuYeRoYDtdBttTw17eC2zeNNU2Rn0imxr2LbflpKixifwiwpDFHriMgFA4BknIwpDYdygjAlOj7G3/7YSi0WVpmWgLPyQlUFnu15AUDfUl5VyxRVShc0tcTa+xzEFaR2iOhcKFG0blAN6QihDcW8f3d5iWX7wqCvt9O5tI1P7lIqKAayWsemZXsjitQ0Z4ECCxjO1GGs9DxkN6buEF/xNxMvPgeRk9aYiyOcvaqEBHigScxUil8CGAsar6uo20rMzBIDdQlVporVmDmFWmiR0wGdFyuGHeIFKEAuJNFnqBZmhMUHPFCIDohOGv5xTDz4hjDekCCj+YjWQaK4jNQFH0GJE7NLRP0YVcZSujBXrnfong5dC/dnNnYur4tehnGpNQcI+yg3SCSDHQg6UaZPKkC3KjH2bJiSNeZ9snF66mQS3aLzkraTqGgGPFDerCRifsANDaWB2ltjqb5FEn6AYxg2SAYcHK1ITFzya8qOYSVmgIzUkvh9RCW5BNE6IwWJzNf6Dx87jE7XJz/B8ezN/FsNQM6yCssmnjDnIglefvkAVKlTkw+LBAe7JZHIwf7We5dKGAfQFxgwk40OBpvr9KO+I9lMFdP5ETQbDGULPGTFZKwnhH2BSkVJ6jljNIkQyfBV3GiT3dMrpXc4QTzoNg5GGpwskCLmCKCS/4vmyB/KT+Io37i9zNBt3O7eRqbmhkitRyeaxOHQtmVYaVuRyRnpIEB3xJwkwb1HAduOq3K/gu1gSdKUy6QCZ5zolD+3aaxha3gI7PpDiAevc3CppxpRMZ4XhNCyuTg1OBSyONMPNTdR8RCwTeBRaAuFyM8iAjD5mcdK1wHwCJ8CK70K+KMnG3qyjT83nCuUpB9hXqs758nDU/hUD2qvNah/hAP0kxHwoxzBRrJCOErH2ahsIrFeF6A7XlBAizQMBNFE3cOUg9b/O33Qkan7svZDhwmQ0CD5xILR1zljFG1gqRVJeZW1NJluRgg7MBOiIR5s6DWDf7hPRo9tjdNbLZB6kd8o+jGJEahJLtBhUQyBp8icqMxcNEglnorGmjx9RN8imKOc75r8KTiqtOSZSZDAi8abFsRGkZE0kT80BT6Yas2Bsgi7IqqibuBQRryQX5IwuRYZE1bpDBp0LIxBDRPpsowVpBHWT8lHhQstBIMGLS5ScdLBqAb0KIgN2TC5cjJ2IhMdzEFYcRwl5F4w2OQdG+82GWjRm+Jtui6S9SDQMZHxVhq6QUMLgaCffXwyAtkiVnQ/VEg5KBCVJM/Dj1OYiHkPgw9cyRO+UoGBi3OdAOdQq+eVOEcCRbC2kRK0lYGhF/ME9WU0mujGwlyRoaXfebwgZhY8etLeVUu0d9qJWs7/NdKrEdUyS7bhTzAfCFpdrlTLlvfkK4itCj+nJBGhyoAaWGmIUrgcmvOjF9TuBAGKvAMA/0r17tBkaIt7MF8PGEeFegbHfwPCC7C4GlxbB/YAx3LydCMEO8aWDOHh9OnxS5U3Z2hjkXOyY716d1lbv7bUHMfEAHkEJbVMQXAM8d5PNHYZqY7M+l/iazbwVEkQoRYVtqpZG6WtoVKVZ6HA6gHPTD8gH92EBAOvgC2yUG8tdEIcvmEmzwOZXNmLXZAkfEe+TdlWFRFHKv/0bLTnz5BLdSBZTjOCAnb9YGmwmnsCV5gp/L1tYXNJPrDbMFgGszoE3b4yvXPmfXhG3YptUcuuEWUmraiNtc/AbevFRO+e9z/iaV2RkIltlwqMPFfzhAh11RbxZ4nFrdCBGzuBradlwGatEZISF88wUAEevaUxjN7iCP8Ri2ZN4nebS28Zwk3QRPh0yimEB8OgzRlzSznoewWltdlzivzodYl4K+YZH0uMSI5ToIyX7hEReSJtAAJTWqT2MctE85AS4ugJBU6nPT++z7+/RYH0bvAPsEuTpxaVb2X3BTLOwmwEP6q4YOs+r3d1xWDnlg6DFYfLNyf6R5Cw+wA1pCCRrrXeHCZRBkZvjiCrhAzeSXKsLnmo5OFuD8GBkHNDmNa3NIOZ+JC6CFecFVl7Ys12KXAjSfwgnHS83DxuJLi6gEbkZoM41c8BnUbTF1l8IFTGDP+yhSHq1z97uYtYCqKvyT4erRF5dCNGKAKtozPYStPsh6AonoI7e0IEsl6FGag0hpbodbYVjRd0DA0mh28BbG4vAzHxetstFr9KvGEsk6Xh/zsoorlurOmJkAR5vL/8PDgY87Yq/YQThgkw6i4+wwar8fok4DdDRM2bUwHvvPZu34TnMOkQ2hY+Al/sx1Obedk2pBmAOd1JdB2nBIPqOnHw0C3lAFQdceBcV+/GKU8wovWzXU0vaJfsUX0eyk6+C4c5rJk0wezOO9edVNmhlPmCovM5iX5uM6WFC+punEDq+wFKXA4/n34a81SuA9725cieWLpJCK1FJZJ1hDrcnCTzIX68vCmrtH8WgI3jWDEK83EJiCzoJalUswKgJcCk8Q3NxMhjEPWTQ4B17ExxNBKsh9Zs5Fte43GZX+dlpWJJ2zeW1+dhSiSxIBWi4tMxQu5vBfmCciOsAf8DRbKQSFcPrstXUB1pH4xKHWksaYAWL/yhbvchap60oripLZNo+TAQF9Vh4j4xhHGTBcceF6l1v+XOZeqUoIuxsyH0+0m4firL7XtsOQZZZ6tV6EgVEsqjyArO9tIrkZ3e1SNiHCMjOECaDieSusisOyH+WQfQSoUbogqjxN4S5FSMk5EKQP5vEuHI8Jh6ZtOBkpx0I6OItpE5iVBhShEDRGIPGdr+Jgf9vVXBimBp58AQTZQQr+F6dpbjy54hQWfhoN7HwHufYfuzUICPWZGrBIO/cCjeEWxrAJWvGkfaaLqSme0iv87Rix8OIoC7NNMGJpklU4awqjHZPbwT67zPJ4FOAWTk8Upj9UZaZGyzYh74brTkJkEyUUL5JVqVNzft5USRf1T1J1Wph+gp5akqGzCLw0zCkxrfYvlvLdnamQV2dsZpeDyGkj0PPY/p5HB7BJq4/BIx9Mv6IGL5lE4qwtiaOShDCv1afDIFgn4+McEBTYJGLAEOUPyJ5OxDAp1/GNdvjEZYwloAInQYoZeCLCMbIiChmKx1tuoyjG9WCoIoEAIi5Up6gFoLYqlkWWpT1Guo0VRULITtBMPGKpRCriD8LXWz2Gl2Zn8fAkViwrwuF22clwo5qycYFz808nhrpqBaou35aMdU01FwfNnw9mPJV6ATYag3mK59CtLYwvEebDP1JdjK1wvrloAAAAAAAAEXQj0yIpGha8CKTiOEw1EiBYP0v+STpE8qnwdqEs8Pyo/IignGiKSU6O03WG/Uc1D4gR5uTtLMmDEWEiNw303W4uoU1yqg2dJUZWICXXdZLzanaTGC2b5rKS3JQjZnopldoa+XTV5MN1nOwMb9Eeipe0mR+vmKFYbRLajdIx3Dj03eKCKHMsHGbxThLvUjluy+DWlapiZHgLDYUMWiI24B5xKPAAWHHHgs+d6CTFzLc8jMNZ9pAcBPdH6VbEXVEggOqN/1iEz3BWltPa22YXU+gpML2cMhBwnXV034YgS1HD5xDEf4qVAWKA/F+VHc/Pzj6u/5mw0mM6hShDT6ZKiYl+F63f67FLHEkvwHH98p/4UgOFdyu0LEqwNOn4OJFnXEerlFlxRVoI1mFcMofXirHLQ0x5Ua0KDmQVxOWULiVJIKVwXgh1FPNJ4YGjiOvzRxG2S7GZ2kKehPjFxkP42Hw4WKyCCRH1oTBs8RFBKycmqUBpBZRDjyRSxS5yKqCOD6EKuwbuQWkFWFwoGA33rIZAccERbvCbIQ+ybeWOiHnQK8oAgHQZBqvuwStVgj0CNFry/RRF23nAckLrVDFSrpg4SAnrkeDlHD2p49I2CU/nHrxNSQ6hFCpepIHBX0zYKxzFL2DqafJBbfhXOYFU9FGJOJEaKSLCnngT6RqbYWO0aRLWDCOMr7eCSA4nWEnFQ8aZ4KKTSoZ4zQakSnzZBfW2kR5AwmTSavQ9kgo1NPx3Aw7ggNJJM5HNqfTsViDzgGoduHjAsJbnFVQ2Or6z4zMigA9vGU++4svGBpNGGXzYDuZxnQIUo6nwESpl4lS2g33jk1psgkEAhxyIJpDEeJr5iQEVWpHAMK4y/WScPnB8soHG9uBastc/eqLtLEcxhyYExSU1uQ5vt0SSRss3Zangkws3CPlIQSQglmECRBMTgs0onIyk4KM2Ak4E2QSsx6DgM0BkzeMLIRVs6A6YAoH6UMlP1ILYGUVrChJZbYpXGGNHwFgpQ3e9qKF6Y1jt8R3DxvYfIl7+EV8YRMc+BLhvMHXIzwz9q+IEIA6ojUojpoUf4rZGcMStgCsNIZFsyxoqBhfv5OuyFw8zXwwHGAOB6OUc8U8uqNKFDOozsyV7R5CZ9Oj3kghRpVj+AZRPiKDHaA1MkQSAsD9v7M3nLwDH2A6dbIv4YBAxOaVnwKb7DUrcRL28e/nBA50XJqQOLS7kjxI6Bu6YqFPZJA+RwQvY4kLI6IZnNAaV6U5RnaGvPp8fwG6pQ5q2GhDwY8BAM8HNoLHxihJLMWXN1WfKy/qQCs4f9oK+PFVlA6e5eo2MCCSNEEMBElhJHDne5hb2lhZguSCuZxPXBgbsiJrhE4xhIR3VBt+e6JRU8hhSS0hQlEZJhMd4mFVZ8EXUAYJBQ0FsU+IIQsF+Wx95zRqXkQHeSN89ASycQRLK4KBgCppUC4L9bNOXkY/dCZ/AfyUHAIPFnJbMrZzF4E0S9EQxRAK0gZpsjSNfHTybytVSgPEUGgsxN17yNuGsoLPQI2CXs3jEmNn9Kh3bqwr9KWUK4kGVNijj7hmIPWXjW27kXluB138A5pBgi0MtF4cejTk6QNdTgQMVPdxgxxBZV/l0m0BIopQlUknB6TRVtXimbKQgpEbsnS67grIkngyp7FmWfFZS4USdPCiGBQqE9fCt66ccO8CilzMZlyPGG2XIpjfQ8cmntmkXfPAK0ATEPFSHjm4wn/hcpBdy4oqUfEwDwpMAXe/CUYMBxSqoyDtZxZlsIlfCdyX6Aa9kD0hHXjJ2QnWrz0kKZ4Lpq8sSR4WoLOtHTnjTcz1uh6eskqTRqch1GE5aruq37RA5STkdj+VCpJYPoSwnhLCpH8N19PMM+8lRK5dIWwskgaQ03y7KDkuiqYzkKIUWFCWxoPLPeoVSCJMbHDLHwEIOR09vDrYWMhrJsJRLTVQdB3bru2+JPJkB7/rAqfgMkrAMAETtv22VSTsNdjKmnt3LC2Uh3trRIwD1kzCtKcfNxQmnhHuxRKLeuRwqnTSOTqszowDieM4X7X0wG3oyXmGCX8pngSaoY+WgTMfcsVkvxy90gMA==',woff:'d09GRgABAAAAACGMABEAAAAAL2wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABwAAAAcbC1Ri0dERUYAAAGcAAAAHQAAACAAYgAET1MvMgAAAbwAAABEAAAAVlZXYeJjbWFwAAACAAAAASgAAALyeE9SiWN2dCAAAAMoAAAACAAAAAgAXACEZnBnbQAAAzAAAAGxAAACZVO0L6dnYXNwAAAE5AAAAAgAAAAI//8AA2dseWYAAATsAAAZQgAAIlhJ+SKNaGVhZAAAHjAAAAAxAAAANhCYgjBoaGVhAAAeZAAAAB4AAAAkFWEQo2htdHgAAB6EAAAAaAAAAM60fAYDbG9jYQAAHuwAAABYAAAAbHW6f2xtYXhwAAAfRAAAACAAAAAgAWIDDW5hbWUAAB9kAAABAgAAAc4ihUqFcG9zdAAAIGgAAADpAAACN8T4JS1wcmVwAAAhVAAAAC4AAAAusPIrFHdlYmYAACGEAAAABgAAAAbuq1PRAAAAAQAAAADMPaLPAAAAAM/4D5EAAAAAz/efKnjaY2BkYGDgA2IJBhBgYmAEQhMgZgHzGAAGhgBnAAAAeNpjYGTexziBgZWBhamKaTcDA0MPhGa8z2DIyMTAwMTAysyAFQSkuaYwODAo/v/PHPQ/i4GB+QUjK1CYESQHAP18C+d42s2Qv07CUBTGvwsFYmMQK6n/8ZaEdsCE+GfiEXwJXsREE1+AhIGwMTq4OfIaLtehFBYXR9hI6td7rgtxME6e5He/09PT23M+ABUAZXJJfPIGxRPqk1Vl62VX9/BMjaGZVZlF6GKmfd3Tg2gUjaNJO+hs4n48TepJMwmzRp4XN7k+2L7hD30o+vJlbvK7rDpfzl/Tp/QxfUhr7y2zMPdmz/hmR2uZ6xexa+c/ck/h1tvIUezcdXhk5qAfmqKLnbml7gnYpw4EBLxiSEbMD6hjAYfUiQD+vx0IOAY6GwEntLAv4JQ6FXAGJHUB59SmgBY1FHABZJSsUQwItXqxAFfUDwtwDbWuWYAbqm8BbukJ9/k2UZV4lLa8Uc4XCQ//OCp//O4L6hhLYwAAADsAXABJeNpdUbtOW0EQ3Q0PA4HE2CA52hSzmZDGe6EFCcTVjWJkO4XlCGk3cpGLcQEfQIFEDdqvGaChpEibBiEXSHxCPiESM2uIojQ7O7NzzpkzS8qRqnfpa89T5ySQwt0GzTb9Tki1swD3pOvrjYy0gwdabGb0ynX7/gsGm9GUO2oA5T1vKQ8ZTTuBWrSn/tH8Cob7/B/zOxi0NNP01DoJ6SEE5ptxS4PvGc26yw/6gtXhYjAwpJim4i4/plL+tzTnasuwtZHRvIMzEfnJNEBTa20Emv7UIdXzcRRLkMumsTaYmLL+JBPBhcl0VVO1zPjawV2ys+hggyrNgQfYw1Z5DB4ODyYU0rckyiwNEfZiq8QIEZMcCjnl3Mn+pED5SBLGvElKO+OGtQbGkdfAoDZPs/88m01tbx3C+FkcwXe/GUs6+MiG2hgRYjtiKYAJREJGVfmGGs+9LAbkUvvPQJSA5fGPf50ItO7YRDyXtXUOMVYIen7b3PLLirtWuc6LQndvqmqo0inN+17OvscDnh4Lw0FjwZvP+/5Kgfo8LK40aA4EQ3o3ev+iteqIq7wXPrIn07+xWgAAAAAAAAH//wACeNqNeQ10HHd179yZ3Zn90u7M7s7M7mq/PyWttCvNfmmtD8uyJMuWJcuyLct24vg7iRM7dmPHsZ00JI4DATskOUBC8gAnJA0POO1/5DSG4LwYB3og7RrCKyrkQGlf+4DTAoW+c+jhxBq/+5+VjUnbtCvtzv9j5j937v3d3733Pwww+OHe4X7OcAzTk5AS3DtXi2bPxQS5b3F/zXiYABNmqgzhikRtEF+RBBtAIkXCLGCLiBoJinoY8sSvEaGhRyGvBxnJS1x1prunFgU1MQg1qQC5hBsEplzVFD8vZDmpJLnYlSX2r0orWTwulvEIH6pMV6ttbZWLT2mjAKManQXA2ZPrK5X1FQBwwuPGMRQZ5b5moNzfYZwMIyVwtUQlIaWkBHz4Lfiwcfwt4zicxm+zR8/nGJV7g/seY2WYmh18LcBxr18d+wx8wrhbhR/APxi7xzR63mVc14PrKgzj5VVQtNoglLM5O1TLuQKkeAHeggh8JLou6nG7Pcb/gsFwWEz7s1HjQVZcFzWOhcOedDbtgWFYHp2KejwQMR5k4No15gfcd7kM42cYtlyDQVAhCoIbUkm6OJ/ERR+NTsXgI2GIeFI+f9ptvGFcjk6BioOnIhA1jkeno278wErjcsTUwZsoqwtlxTVr5So+VgGqGsrsF3BBlPZNT/Nk6DfXiBj3o9huz05fakm8fpQNVzXuj+A9maZemXdRrzm6pug3nx9lpU+e5AV6g/9ETPanU1HjgXAYHjcf2tPUDDTXPMoc4rZxt1JbIRgQClIO3JA7bIvDff/EVheMT8bXxP90Jg47f7R48V+Mj8Wt8aXrDnO3cNvpdTVJpTpTUP/q0b+B/fG18ag9bnz0nw+zI7+CI3FrLD6TMD73o+YzwGnuHXYcbe5lCFMkHCLWUtStkEdMUqRQlMPpt5rPe+PTwyA68qjTP0EP8DNtOLCMWcn8JUNcRRJtkEqR1BtksEi6S2S4QfIaCRSJF9ceMb1BbhBZ1DvQFQoNUhD1fmwNNciQqLdiy9PQR/FQDb2+/Mu/e5yR8w43sYiEu6Sn4HckfYk5z1lS6QJ+4EaLDIVA75Alr25T6nVSkM47EnEtrdZJv1ePenFoSCK9ddLq1UPhep3RK1HJOx9JZOs4VZdIrk4GvUSr64Fh9MhgvbvH51dUjlcVbTkoKtoC/dINtIGOiv6ZzGU9UKuiuavUU2U/nxSi5nwiWfUrWrWcTSXzxc4QiDbR9vr4xMVFq/XqGxev1iw/fOmldy2Wd18aH/W0POVnbR35HyS1VEoTHJPV6qTD+Bfr15OlZDIYZPOrP7rsGuOzW/hHgyxe/cZ7Vut7b7z0LodrfP5da6vVvu9tl7188qh5evJAeRhgRflyKZEoJU26Yhxoo29ytyMu/MhOcWYeyQsJqEE8RRJAKxSJHa0SLOoh0+JZhZJQDrJJASwmAwl8kitxKY+2lv3NRDljfCS3r914HM5FahGPpxI5JK2b2wKwZZg9OzS0eK9QDUdKHhH+0fhe8/7MtUXuG9xfMCzDMyLDyBlA38vVVNNR0KfhNuOqBiy8+0/tP3dNT7bWQ/1rua3AdRvX4Fc/z/3M+olbW1Ww1pr4ex79bZIJIt9ka1UlBtdxznuok2SLLFjt4ehc+lvwP9Jb4zFr2ui28lapS00GOd74N/jVbDRsS+FsyhpNbE0bRStnE51WS8BqBZvpD7ejH+3njjIxhqmWl+OaZSS1GNTojfwe+oNCF6nkudsjCwuRSGw6trAQm45Hmr31Zi/2p83RGJLR97+PP7H39W/i5W8zbowa8y3ULlzj+hHQQLrY9MIyE8dH5ZUaL/BxBhLw9FMW47fsmwu+E08ZB42fwE++B4GzFuP/Ok/5XrzvDKio9wKT415BvpOZFPrmETMmuRtoaFIskXiDtGlANNMXpcZ5RWJseRJuEEnU0+h5nQ3SKRI+viARZ4M4i4Rv6CWMVmEF/Uv0ocekJeKuk06vbndRZ3JzOMFacCIozdt8fnQqdKCmO5SzSIfoMAVq8SS/NFox3UmwVpoOJZsnFKzvXbx41RrKBMDy7Wef+bYFgplgBXqymR6AnkwGgXInaJmsBqBlsXfmmbctlref8QWC3j96luOeuRdb8KEMnc5sWTpsubnbxGQB9f4Kd4VxoEdkme4ln7A1iLtI0iVKThHUTq5InFQ7VClBVEqiobeZ9lh6glzCL/w3HgauPg4f8AjPfekXVv43Xwojfg83B+eaAs9dP2aXBKc2fdSUG/MNJoc9alO0T6ZIxBIlXQWlbiuSlgXiw+xDpC5Nkg293ZQaOamU0KoVpKVE8vdyo22o2CVNuS520MclfMGQ9+pPfAEUJ0vlXoti39UU2BT+ciYY9PmC7Irryi2VqKbp7816NjF4ZQmD+xliK1LJ/gMMWhGD1iUMWm/GoPh7DIo3YZDjmxj0mRh0tFAM+mw44fVT5NUo/9aaxogCPnSWRft8oLEQaIi5Zz75VxYIZEJW4/WL73X/p1ab9QUCvueuWKzvPEdbb4LFar3G2j7YfjZm9prHleR+ytiRi1NMmRlmZphZ5jjzr8w8zufnN+89VCqVMDWc91JABhvzbfSIgZEr6vuP4pSloc/t0DQaDVuoZm4pISyBnCgSxwJREAGiHjEDKPE0tZhp6FoFL8g0Y6ypVH0zto43yBaNHBf1w9g51CCHRH0ftvY29JOo5Agqeb7FhWGzrvdnUK9t3dja3Cl5z69cvWEjhlX98HGMk7fUySGJbK+TfV6yH20gYDp7HrLNM7gh7HhkpZ9GYYv0Gq/VN81u3Y697h61AphbyJCQfUvRE5O7ql9ValoNzZXD2ClASVJK2M2VzW4l5auUqyV6skDPBjRyrVrjs8vZHFKMryalQCrJeIZaVTVVkTHHpTEYSVO93pSlWZCM9+AvjP8H3uFz7517/tRjnzoTTs3sb3VCKD2zOgu/fmzryqOjg+z46qObq489tjU9PtPVNRWdgc/te7LUya8dAWU1W3py3/7Tp8F5auP2LUNb7tgzNP7oYLVt1G2H0/21yjS3E7bfd5vx4v0QevCVVx489eK57z7b0QdbUqXJjv7q4oMQym/feOK+qckNG4xPnUkMz6ye7uqss4+s2qN1LOMLlsBaVttz9eQq+MVigy2NTC6rQVd1p3EGhmrjnSm/yyC0NV4zLjE0D5u99htbC2dBVuhi1iKi7oGHmfkQhU66NK/i8bwyOrE/rZbQh8huzRwi0w0yopFqUXe0I7AGGjoX17T5gaojf35ooNWeJwMimUOM6fwtOL+5MS/Ut2saeuwh02NbGqSlyTBdDRLWSJeoZ7CTbpC0qBexNdUgU6K+AcGkbUQArmiQFaJ+ECcQdjsaZJs2v+MgvdeO7fb8/MEdtHlwsz1v4hEzP/6FS3M08yNKwU38l3Qv+zviu/Q6v+HSNB22EA3Hey5Z9I3c79xk0yWE/nlZ8fvy8/gb/2j8oyneLXnrzAWvz9+jbdwkF5Y+8Bod2SQrS30zcQy1IMYFJBV9qoit+jKklw2SXp3A4wovGa+Tg5I+MkppRpxG1yisW09dY3MIEd45NL6PInxO+nO7M9JRWWYC3JetIvWoQg6xzKsYuzGNpGkjn7UiSJF6qoqAqKxmaWiU0uXqckBqFhCtOZxEkEv0aix4cBodw8xAKwKfqZQqJbkkp+SlJQWEdy5bQ1zfdbxwl9Xa3ZmaW86y/bekOrs564HOP97HWvZZdtUOTHP7oG159xwHP5ybfTafH3zcauWfGN+yhQ0HrYWhVu7g+GQglStt5852wNOrbz93jg10BRMpa3s2PpdKAchPnwIQYYvVAjCz66451mLdin14/CTHX2UjLJw6a/wjhG6ZBVZmjamJlyesnrZCHlwwxars3C2GoarctFfl0hx8f6YL2CCcc1u+c+vnP3/rL8eXsSy3ReCB7ew6ApYbudHfMuM0N6LsiDkIkNVFfQ1GM52nZfMwqlnOmjyP2WS5CKgt5HZUeE2pYuJmKhlDG2V5hVpDoNmsUjNrSVpOUt0pqhkjBBD83pkDd8c4FGSZnHQBy4LKtgBw6basRXapq4Jpt0sO5VzAWXC8FVhLMCRrLMcCH7zr4EZJFoEVjrUqK3zyWi6ghno0d9AndBYsaN/4pq7VLsyonU4ub8XY41wbUKZlyQr8nODzilpvWHXZ1sq+IbX1mIBPy96o2T0Y6WWGKEUSLGEgpAF+KaBX3rdhAAgN1IYWAyGX5FV/RS4JKYQYjJbZH5XHAMbKi+nyKMCXT7CTt7UFQ9xMUoGz/GMn7qejeNaP6XGsZGw6cc/KnaiH4xBtFWDrceNpOPiHMg2jXZpZEwYnb5GmTN1FU7yVReJZwOCuj6Dnxz2S91WX6M3m0CcY3YsBgSyvE1kiYp10e0lf/d8/hg85v0qLLcS3eaQnFFhqxOxSyEbSF+jXT2M3BoL3PeBCS0vbeCRbdzqcdq+AkICoqEbA03FsjIOh7kCHiDdKJ2NqAl56vnvufU+/iBhWIJ9kAVj7QDsrCCD2DARKg5aWlu7lLPhEm69NsbakVJtw3zf4EGO5oRcfk0T2vZ35ypJuBktIk/MtHOW2ljF7/tWYyo215EmsQdqLZKJENqDC7iiS5ILOpJAjQw0SapLneIMs08i4qPdhB+vnKU2/E/UZSqI+Y5kNc7sp4RSlIadgcaiRfGe5ftsOOjTuJYN1fbgPaaljbNUaU+stmJsTf52oki7TYjfm1Su9eGyXhhyRZCpTXjk5tW23SVqmLTD+Ui9K5ZppO00OsV+mCsejZHqbmhBSzTLYjWE4Btj284JpxpScqqSaLFVZMinSHzqg6aTIZxwqG6asHLtvxs57XVuKUl0tP5YXA2CzqkrPVITjucEH69A5vTlcZ9mRgicQcJW1bRzWecvQzBcGX3tt8MJ1Y/fCzLZWrNUlmJsLVzIOas0Wm72yvhfA7rFGI+szdn9n3Bd0oUFjIdjKOTgtAwP5taOTtyXdyWLE0Zbdu1rOihQDmQsXBi5cONlEwjNTz/Ig+tWyuPHLPAS6sAa1XLuG9ew73Cx6ZY1ZyaxjDi3ZutIg+SKmW6SvSPwluv2HOTOZNmNlG6a6oq4B5TB9PdqxzUyTgqFWajMNzWj3uFR/OhOr1JfTId47L0rUWIzeh9nXa/bwirE1E1OmjXLXq6pcgTW5D1ulGlUzTmg1XsZYkWpuVJjcpsgKNRzGoxLt8akCZKhtSmgltBVYnvujhx6D9oq/yMmxRDt0dmzqM35762MW9u5bW5wtfrFw+Ont7KF1qWhHr90CW++c2lGzLatUZhy2Ov7Cd86OnTkzdvbTq2eAOzxRn057etpiwdB4vrqbS7OHpmcOsKC0Klk3d7jYN4VGaS3E3S39kwDr2dbROe6W0dGt3PbSmTOrzpxB3negfr/N2TA7zjHzGtUs25hnNepCbMKeB1Ip6lUaAlgNYd1Dk/0bhFG6iTAQayZl1MxoipSBCqIQVmSesRbAoQZGHyit2O33+tzRlpGNwNZa23oguOa7J63AHtyYX926cpkrH++vtvUBGP/H+PXGT89ynW3sRL/FYvHcOc65XNC6qVzLb71bkAMb7mETYXci2euzBfrzLtcV4wtOKNAa/9fXDPZvuTcYlZlg5hX6PAwWQSUCWFdqzdKa2BEpgSJRFgirUSp1a5jE0CeWvZiH2bV5RaY9hcH0KNgsQW/ierT1Da7/9VNw+8lSMgm78wr7BeGFP4fvP/no7AMsxz0HkE062DueNNrhb5iWJc6aQS0XEclDzCSzm7mTuY85xTzJfIb5KnMZHAwpm6LubJCt2vzOMpVh53KUCCE+0SBHi+RAg1zUyMNF8nyJnGiQT2jkhEgKtDAZaZCPF8lrJfLhBnlRI3k6hrnhTBHJD8hbRZJbwJRQ7+6lqaGod9FKVSPrGmSdqH8NO282yJvNQkVt6N9Al+lagWmXJb2KMtg6Se8fxOPXvEM+3hcrV7bt2bf/8LEHH/3YU89+7s++Qj3oTWn+f35xKz15s/f8y1+Yf9WkwqMTuMj41y/T8QPS+RWrXn+TFiqFEaTVtrte+eJ52sufwAxw/qtmgak/+hVaT9JcrGTuBFZrFVqSLGdLS5VkAVLU92R0OQGx1gdyKslimZKQE8lsudoH6I3JHG3Q3fw85ig1GsUSS5VnSqCLoE9Si8qCeWWzHEr84VX9cNOM0pyRzakqAqGq0G0wmgrSveyaybVZmt1c35pkZ1cOv2p1WHI8uFwOC297dcfaO1moFcIjSePKxH6uNnk/NxYaSdf2FG0Y8nYY5wT8vOz0XqbHPYLNhj/Cj9nt49AzPAMwNbbnRfAI/rEdc4qXcwjgEBwOwfgt/d1ts9ttu2nrxuhn7Hg5NvcIX7byfKLk8cdbvDarg+MEK+sK+njBmRQFl1N0OERYObqX+yTHRSy2uzmw8E+wBzY90bdZ8fnYzaN5mB7fIiuq8YbbkdztdkjSft5ub3E4Op4Yuo1lt44+MbSDe2CPgMnYduPeQ7BPggstDrsgOO7E+2Nri9vpxN4UXiII9g0tLs7lkON5m1tyYrLnEoJ+t8fmBp57weN02GxOrK/6kJM+xX2LiWN91cuMYtV+lpm3UV9e2SDTWrOJpfVAkfQ2dF8UMd0r0tDPZdZgyUT3OEKI+g1FYl3Aep1ENJIQaRZHChrdJq+L+hB2xhqkqpExUZ9qviJyNfSNiPz2BBJdyNyk1ur6GM2hSohlbQBhCiKFpxcpvyTxza1bqWS+hElVqtlcHpAcZIH3Sc0dHsmNSPIh/tQSIkZOcThOSw0/jRC1m0/qiyjABnrYvT0BpO9IWD3AtvZ847LWyh5UHsWq3R8HNtURvovr4P4Bvy9WIN6eSMhybAHishwHSLbH2Hc647B4wVK14D+7GpJdrXDaOs7z49bTAItPwA+U1lbFaFNTKfZjI1EnyzpiI4tPwg+VSEQxckoUIOK7fhKOYV4s01pXOsb9nBGZFLOMWYP17hRG4Z3MEeZx5gzzMvNNpsH8DBhwQh5KsA8+zDDX933wS/cR3ODzqwqGymylXG3u6qOGSmYZgHGiQiMroM9Sf/LxavNi09NzvFrrqfkwrsgCOqB5OvXeJEeDLf0T/OZrKuqDZjQyrywC9XQFf3xqltoq0bSQj27G5RJJ3q/0AZeh4Rs9uVKmFQxdhmZPWuqmNw9onGTK3NCqUdGjEAFzo+v6jlZzBTkKg1CRzG1XTKqRmBTzZJm+TLxxl+z771L5w7v48T6l5mgB1yshwZSWLmy+4GqWTc2XcllKPdamYDVVMbOSIqUhcyPHA5K5zzhrK3fE1ndBb/vghBqszdXtA2OJhKM1oGZthbXB+L2O3l2ZWK/XFy50td3aLXAJrw8egqA6USiuViprZO/q9qiX49zPpeMgiVximS8LkEtadq30r0jnCmMr42CPjKbjyeqGk16pczabL9miM90OPhngoOMOh/VCQIK8pKjilV85QrLxrldVvVd+AV9kH9lV3Rl321p8bnvrcLZ3lRU8PXaPH9gTO3c9tNc+tHdYgBX/Bq0dYXyqai2cx/Lvvrm5oxz8kj22q7hGxqlIpKMVfGuLe47uXNU/MDY2MAgPsI/srO6KI5u4fW5HaDhXw5XFbodHpgv/8V7b0L4VNnbF3wUys9ltu2DTWG8BCm0DFcHW4rdy0Bpd1bNmBwtDQxO9LDuYTQxGHHbZaYEfQQjvpf2Jx+9TwfnCWS+A0y17nO+gGCFgP65tTraX7fbeEUfG4uw1DuWScdaWyXTOpIIDSe9QYRAuQ3uGTcRTbvuyO9sxX8gUu8uLv+ytlsZ9/lU98mTRXkz3ncciuOsv23ZoogVikcGp3h3pxVlHPuYBSA8Op5Kiz+Ye+AwbjiS3admqi+PaV7V6xO4ZKHLsYj0RAFBTCkDAJfqCEEgEjJ8+vesRtj3lkVzI8uAIRWG4BKJnz4Ms+3Bfz7L+4o/lcFh+u0Lfc1fepu0r2+4FuHdbYO9DbFtalcPQKrNr5daw31hMdbAPnbt/moV1g4PrWPbsf7H011SPrMJkb2+fIgUKfghxbpcgBLE6HaoXBuVgVAkHfRIPINsycjjiP5K7iAsFfF7XV+9xy5JLtL8Au6lIzI13N/+b+zp992tmB3KNZgTl3PWaR/j04cTf/dmR5zmWe/6IMXPkOQ5+ceiT7M9+xj13RBI/jX1s0JqaOY152E5GYgL0DaynaO5z3HgfF8SMw3yxbPKykMBEwQ5ZIZEEGb7k7fDCl2SWvWNy8bNTd9wDx+BYPLP42Sz0wz2FnPFZjwd25QrGU1O3s+zt7D7jW9DrBvOeT3JXsIaJMX2m9LUkJTNZNas09FWB9wCSRSpZwhzC4qd5j0pfaFKXRlrxAN1v9WPuaV1h5ZwDlWpbJpMqAhRTmUxbrTzg5HCCjUXbxYc/JLbFPA8/7Im1ez70sNgexTZ8vu7nuDwm04VsnGeft8YzhfY8DrD+3r83z/DgldfP9pirLL1LZM6irrai3D1Ye/3XkitqsyDI8iqGO6Qqhafn4WnXR3If/AQwan/I4TjlEEZE6zqeX2d9AIY973jwX1jldb3kxP8PfJpVtkMHDt4LLEo5OL56+OyonXvpm998meMCg/DIx5/8CH2l+f8BlnKRowAAeNpjYGRgYADi2bxJK+P5bb4yyDO/AIownP8+XwtG////n1+wHCzOwcAEEgUAdgMOBgAAAHjaY2BkYGB+8e83A4Ng2X8gECxnAIqgACMAyEQIJAAAeNpjfsEABoy+DAzMLxh4gBhEMzN+AdMMcBooz/ALiJdBcS0QnwBicyj9C6zuEPOL//+B9H6oOaVQzMAI4WsDMRdUDoTTobQeMuZRYgjj4GEIQ1IHxWCzQfo/QMWsBcsg6iAAAEBYMgl42mNgYOABwxiGEoYOPHALwz1GDkYjRj/GLMYGxg6mKKZZTAeYPjFrMIcxP2FxYJnBqsDmw76Nw4yjgZOHi4lrE7cUdxrPH95DAmwCWgIpAgcEdQDfUhgFAAEAAAA1AYgAFQAAAAAAAgABAAIAFgAAAQABgQAAAAB42mWPvU4CQRSFvxU0ERJiYSyspjA2JsuKmJgtLSChtMDGZpEF1yCSFY1aWvpk+gY8jeHs7IUYyGQm3z333J8B6nxTIajuA8e6JQfUFJW8Q4MT4woHtIyrclwb73LEnfGePLlxjT5fxnVOWRj/yP9n/EsUHJLxRMKYlCYvvInOeJc24ZNnZj5/o+yYV2mJJoykT5lzwbnu1T+f23D2FeXqmvkKJ39ItFXflWvqnYnUlKGcAz70lvu0pM5V5XRz1RZzOtYj1aSJ2GmDIvco5V56yIOvmhHrX831zJU/lKvodCtlsM6uNuyoV6ao53/itMGl3kjZmLZOLIq8XmjtJYfHQDgAAHjabZHHTgQxEETnLWF2yTmHJWewe8azu0eENL8CSAhx4cDfgzRdPmHJeu12l7tsF72iG4Pi/5H+JkWPHlNMM8MsJX0GzDHPAossscwKq6yxzgabbLHNDrvssc8BhxxxzJATTjnjnAsuueKaG265454HHnkiEDGq/uvHz9fbsEqlB0rU5ffnu4UQnNFpzsqpuuRsnCPn2DlxPne0tmNqvaGps9UKkoLGzUUloic6M6l98fU4F+gawXcmnohBgflO7dQLqNlIhZJalspqlNUoq7FRseSWPeVzTOayS6libipVlT/EfgHn/IKvAAAAuAH/hbABjQBLsAhQWLEBAY5ZsUYGK1ghsBBZS7AUUlghsIBZHbAGK1xYWbAUKwAAAAFT0e6qAAA='},y=b.__$$__meshim_widget_widgets_FontLoader
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
y.call(this,A,B,C,D,E)
this.setBase64(x)
this.setFont('zopim')}
z.prototype=e(y.prototype)
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_fontLoader_ZopimFont"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_fontLoader_ZopimFont"}
return z})()
b.__$$__jx_ui_Button=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='button')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Button"].join('')
y.prototype.__jx__fqname="jx_ui_Button"}
return y})()
b.__$$__jx_ui_DraggableFrame=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_FloatingFrame,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__jx_ui_Application,J=b.__$$__jx_ui_Widget,K=F.iwin,L=F.idoc,M
F.on('mousedown',F.raise)
L.onmousedown=$_
var N=0,O
F.__jx__constructor.prototype.setResizableNode=function($e){$e&&$e.dom&&($e=$e.dom)
if(O)O.onmousedown=null
if($e){$e.onmousedown=function($f){if(N===0){N=1
setTimeout(function(){N=0},300)
$_($f,!0)}
else{F.fitToContents(F,1000,1000)}}
O=$e}}
F.__jx__constructor.prototype.getDraggableNode=function(){return M}
F.__jx__constructor.prototype.setDraggableNode=function($e){$e&&$e.dom&&($e=$e.dom)
if($e){F.setBounds([0,0,0,0])
M=$e
L.onmousedown=null
$e.onmousedown=$_
$e.style.cursor='move'
if(q.isIE<9){$e.style.backgroundImage='url("'+I.assetsURL+'/jxml/images/blank.png")'}}
else{if(M){M.onmousedown=null
M.style.cursor='default'
M=null}
L.onmousedown=null}}
var P,Q,R,S,T,U,V,W=!1,X,Y,Z
function $$($e){return new J($e,null,null,null,{position:'absolute',top:0,left:0,width:'100%',height:'100%',margin:0,padding:0})}
function $_($e,$f){if($e&&$e.button)return
F.raise($e,2)
if(!X)X=$$(document.body)
X.style.zIndex=F.style.zIndex-1
X.style.display='block'
W=!1
if(!$e)$e=K.event
if(!$e)return
S=$e.clientX
T=$e.clientY
U=F.getWidth()
V=F.getHeight()
P=$f
Y=document.onmousemove
Z=document.onmouseup
L.onmousemove=$a
document.onmousemove=$b
L.onmouseup=document.onmouseup=$c
L.onselectstart=function(){return !1}
$e.preventDefault&&$e.preventDefault()
F.fire('jx:activate')
return !1}
function $a($e){if(!W){F.fire('startdrag')
W=!0}
if(!$e)$e=window.event
if(!$e)$e=K.event
if(q.isIE<9&&!$e.button){$c()
return}
Q=$e.clientX-S
R=$e.clientY-T
if(P){F.setWidth(U+Q).setHeight(V+R)}
else{F.move(Q,R)
F.fire('jx:drag')
l.tick()}
return !1}
function $b($e){if(!W){F.fire('startdrag')
W=!0}
if(!$e)$e=window.event
if(!$e)$e=K.event
if(q.isIE<9&&!$e.button){$c()
return}
Q=$e.clientX-S
R=$e.clientY-T
if(q.isIE){Q-=$d(document.body.currentStyle.borderLeftWidth)
R-=$d(document.body.currentStyle.borderTopWidth)}
if(P){F.setWidth(U+Q-F.offsetLeft)
F.setHeight(V+R-F.offsetTop)}
else{F.moveTo(Q,R)}
F.fire('jx:drag')
return !1}
function $c(){X.style.display='none'
document.onmousemove=Y
document.onmouseup=Z
L.onmousemove=null
L.onmouseup=null
L.onselectstart=null
if(W){F.fire('enddrag')
W=!1}}
function $d($e){return parseInt($e,10)||0}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__jx_ui_DraggableFrame
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_FloatingFrame.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_FloatingFrame
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_DraggableFrame"].join('')
x.prototype.__jx__fqname="jx_ui_DraggableFrame"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_Themes=(function(){var x=b.__$$__meshim_widget_themes_Base,y=b.__$$__meshim_widget_themes_Simple,z=b.__$$__meshim_widget_themes_Classic,A=b.__$$__meshim_widget_themes_Zendesk,B={'base':x,'simple':y,'classic':z,'zendesk':A}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_Themes"].join('')
B.prototype.__jx__fqname="meshim_widget_Themes"}
return B})()
b.__$$__meshim_widget_controllers_liveChatAPI_Debug=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y={}
y.init=function(){var z=x.root,A=q.isIE||q.isNewIE
y.connection=function(){window.console&&console.log(A?JSON.stringify(z.$('connection').getValue()):z.$('connection').getValue())}
y.livechat=function(){window.console&&console.log(A?JSON.stringify(z.$('livechat').getValue()):z.$('livechat').getValue())}
y.all=function(){window.console&&console.log(A?JSON.stringify(z.getValue()):z.getValue())}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Debug"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Debug"}
return y})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"exclamation","title":v(149)}],[b.__$$__jx_ui_Widget,null,null,[v(150)],{"class":"resend"}]],{"display":"none"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_Config,J=b.__$$__meshim_widget_controllers_DataController,K,L
function M(){F.setDataNode=N
F.on('click',P)}
function N(R){if(R==K)return
if(K){F.autounbind(K,'value',O)}
K=R
if(K){F.autobind(K,'value',O)}}
function O(R){if(!R)return
if(R.failed$bool)Q()
if('unverified$bool' in R){window.clearTimeout(L)
if(R.unverified$bool){L=window.setTimeout(Q,I.RESEND_MSG_TIMEOUT)}}}
function P(R){if(R&&h(R.stopPropagation)){R.stopPropagation()}
J.livechat.sendChatMsg({msg:K.getValue('msg$string')},K.name)
F.setDisplay('none')}
function Q(){F.setDisplay('')}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{".resend":{"textDecoration":"underline"},".icon_font":{"position":"relative","top":"2px","marginRight":"3px"}},"**self, .icon_font, .resend":{"color":"$$errorColor","display":"inline-block","*display":"inline","*zoom":"1","cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ResendChatMessage"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ResendChatMessage"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_common_Sanitize,J=b.__$$__meshim_widget_controllers_DataController,K,L
function M(){F.setDataNode=N}
function N(S){if(K)F.autounbind(K,'value',O)
K=S.$('options$string')
F.autobind(K,'value',O)}
function O(S){S=S||''
S=P(S)
if(S){F.setHTML(S)
Q()}}
function P(S){if(!S)return ''
var T=S.split('/'),U='<form>',V
for(var W=0,X=T.length;W<X;W++){V=I.html(T[W])
U+='<input type="radio" name="option" value="'+V+'">'+V+'</br>'}
U+='</form>'
return U}
function Q(){var S=F.dom.getElementsByTagName('input')
for(var T=0,U=S.length;T<U;T++){S[T].onclick=function(){if(this.value!==L)R(this.value)}}}
function R(S){if(!S)return
J.livechat.sendChatMsg({msg:S})
L=S}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatOption"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatOption"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_utils_Utils,z,A,B=[],C,D=[],E=[],F=[],G,H={},I={init:J,callNow:S,handleDelayed:Q,callOnReattached:O,callOnRegistered:P,isHexColor:V,getCallbackCaller:T,saveAPISettings:W}
function J(){z=x.root
z.$$('connection.status$string').bindValue(K)
z.$$('connection.message$string').bindValue(L)
G=z.$$('tmp.api_settings')}
function K(X){if(X=='reattached'){M()}
else if(X=='registered'||X=='cookie_law'){N()}}
function L(X){if(X=='fast_init'){M(!0)
N(!0)}}
function M(X){Q(B)
if(!X)B.length=0
if(A){Q(F)}
A=!0}
function N(X){Q(D)
if(!X)D.length=0
if(C){Q(E)}
C=!0}
function O(X,Y){if(A)S(X)
else B.push(X)
if(Y)F.push(X)}
function P(X,Y){if(C)S(X)
else D.push(X)
if(Y)E.push(X)}
function Q(X){if(!X||!g(X))return
for(var Y=0;Y<X.length;Y++)S(X[Y])}
var R=Array.prototype.slice
function S(X){var Y=R.call(arguments,1)
try {X.apply(null,Y)}catch(Z){if(!window.console)return
if(!h(window.console.log))return
var $$='Error in LiveChatAPI call',$_=[]
if(Z.name)$_.push(Z.name)
if(Z.message)$_.push(Z.message)
if($_.length)$$+=': '+$_.join(' - ')
window.console.log($$)
if(h(window.console.dir))window.console.dir(Z)
window.console.log(X.toString())}}
function T(X){return (new Function('callback','return function() {'+'var args = Array.prototype.slice.call(arguments);'+'setTimeout(function() { '+'callback.apply(null, args);'+'}, 0);'+'}'))(X)}
var U=/^#[0-9A-F]{6}$/i
function V(X){return U.test(X)}
function W(X){y.fullyExtend(H,X)
G&&G.update(H)}
if((typeof I==='function')&&I.prototype&&!I.__jx__no_fqname){I.prototype.__jx__fqname_chain=[(I.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_APIHelper"].join('')
I.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_APIHelper"}
return I})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_div,"file_progress_container",null,[[b.__$$__jx_ui_html_p,"progress_text",null,[],{"id":"progress_text","class":"progress_text"}],[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_img,"progress_bar",null,[],{"id":"progress_bar","class":"progress_bar"}]],{"class":"progress_container"}]],{"id":"file_progress_container"}],[b.__$$__jx_ui_html_div,"file_details_container",null,[[b.__$$__jx_ui_html_a,"a_thumb",null,[[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_img,"file_image",null,[],{"id":"file_image","class":"file_image"}],[b.__$$__jx_ui_html_p,"file_other_type",null,[],{"id":"file_other_type","class":"file_other_type"}]],{"class":"file_image_container"}]],{"id":"a_thumb","target":"_blank"}],[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_a,"a_name",null,[[b.__$$__jx_ui_html_p,"file_name",null,[],{"id":"file_name","class":"file_name"}]],{"id":"a_name","target":"_blank"}],[b.__$$__jx_ui_html_p,"file_size",null,[],{"id":"file_size","class":"file_size"}]],{"class":"file_info_container"}]],{"id":"file_details_container","class":"file_details_container","visible":"none"}],[b.__$$__jx_ui_html_div,"file_status",null,[],{"id":"file_status","class":"file_status"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__file_progress_container'),H=w.get(z+'__progress_text'),I=w.get(z+'__progress_bar'),J=w.get(z+'__file_details_container'),K=w.get(z+'__a_thumb'),L=w.get(z+'__file_image'),M=w.get(z+'__file_other_type'),N=w.get(z+'__a_name'),O=w.get(z+'__file_name'),P=w.get(z+'__file_size'),Q=w.get(z+'__file_status')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var R=(function(){var T=b.__$$__meshim_common_FileUtil,U=b.__$$__meshim_widget_Config,V=b.__$$__meshim_widget_controllers_DataController,W=b.__$$__meshim_widget_utils_Utils,X,Y=V.root.$$('livechat.ui.chat_window'),Z='file_name$string',$$='file_type$string',$_='file_url$string',$a='thumbnail_url$string',$b='s3_progress$int',$c='file_size$int',$d='msg$string',$e='status$string',$f='error$string',$g=v(151),$h=v(152),$i=/image/i,$j=/uploaded: (.+)\nURL: (.+)\nType: (.+)\nSize: (.+)(\nThumb: (.+))?/i,$k=100,$l
function $m(){F.setDisplay('none')
I.setSrc(U.IMAGES_URL+'/loadingbar.gif')}
F.setDataNode=function($s){if(X)F.autounbind(X,'value',$n)
X=$s
if(X)F.autobind(X,'value',$n)}
function $n($s){if(!$s)return
var $t
if($d in $s){$j.lastIndex=0
var $u=$j.exec($s[$d])
if(!$u)return
$s[Z]=$u[1]
$s[$_]=$u[2]
$s[$$]=$u[3]
$s[$c]=$u[4]
$s[$a]=$u[6]
$s[$e]='ok'
$s[$b]=100
if($o($s)){if($p($s)){$q($s)
$r($s)}}
$t=!0
Y.update({'file_upload_scroll$bool':!0})}
if(Z in $s||$f in $s){F.setDisplay('')}
if($t)return
if($o()){if($p()){$q()
$r()}}
Y.update({'file_upload_scroll$bool':!0})}
function $o($s){$s=$s||X.getValue()
if($e in $s){var $t=$s[$e].toLowerCase()=='ok'
G.setDisplay('none')
if($t){J.setDisplay('')
Q.removeClass('fail')
if(!(Z in $s))return !0
var $u=($s[Z].length>15)?$s[Z].substring(0,12)+'...':$s[Z]
Q.setText($h.replace('<file_name>',$u)).setDisplay('')
return !0}
else{J.setDisplay('none')
Q.addClass('fail')
if(!($f in $s))return !0
Q.setText(T.prettyError($s[$f])).setDisplay('')
return !1}}
else{return !0}}
function $p($s){$s=$s||X.getValue()
if(!($b in $s)||!(Z in $s))return !1
var $t=$s[$b]<$k,$u=($s[Z].length>15)?$s[Z].substring(0,12)+'...':$s[Z]
H.setText(($t?$g:$h).replace('<file_name>',$u))
G.setDisplay($t?'':'none')
J.setDisplay($t?'none':'')
Q.setDisplay($t?'none':'')
return $t?!1:!0}
function $q($s){$s=$s||X.getValue()
if(!($_ in $s)||!($$ in $s))return !1
if($i.test($s[$$])){L.setSrc(W.replaceFileHostname($s[$a]||$s[$_]||'')).setDisplay('')
M.setText('').setDisplay('none')}
else{L.setSrc('').setDisplay('none')
M.setText(T.prettyType($s[$$],$s[Z],5).toUpperCase()).setDisplay('table-cell')}}
function $r($s){$s=$s||X.getValue()
if(!(Z in $s)||!($$ in $s)||!($_ in $s))return !1
$s[$_]=W.replaceFileHostname($s[$_])
K.setHref($s[$_])
N.setHref($s[$_])
$l=$s[$_]
O.setText($s[Z])
P.setText(T.prettySize($s[$c],{base2:!0}))}
$m()})()
for(var S in R)if(R.hasOwnProperty(S))F[S]=R[S]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"width":"100%","a":{"verticalAlign":"middle","color":"inherit","textDecoration":"none","cursor":"pointer"}},".progress_text":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","fontStyle":"italic"},".progress_container":{"position":"relative","height":"8px","marginTop":"3px","borderRadius":"5px","background":"$$chatLogFileProgressBg","overflow":"hidden",".progress_bar":{"position":"absolute","top":"0px","left":"0px","height":"100%"}},".file_details_container":{"overflow":"hidden","marginTop":"5px"},".file_image_container":{"float":"left","display":"table","margin":"0 10px 2px 2px","width":"50px","height":"40px","borderWidth":"1px","borderStyle":"solid","borderColor":"$$chatLogSystemMsgColor","textAlign":"center","background":"$$chatTextAreaBorderColor",".file_image":{"width":"100%","height":"100%"},".file_other_type":{"display":"table-cell","verticalAlign":"middle","fontSize":"$$fontSizeL","fontWeight":"bold","color":"$$chatLogSystemMsgColor","maxWidth":"50px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}},".file_info_container":{"float":"left","padding":"0px",".file_name":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","fontStyle":"italic","textDecoration":"underline"},".file_size":{"marginTop":"2px","fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor"}},".file_status":{"marginTop":"5px","textAlign":"center","fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","&.fail":{"color":"$$errorMessageColor"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatFile"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatFile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_card_TextCard=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_widgets_Card
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
y.call(this,A,B,C,D,E)
if(!z.__jx__jcss_generated){u.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
this.message=new x(this.defaultPlacement,null,null,null,{addClass:'message'})}
z.prototype=e(y.prototype)
z.__jx__jcss={"&.minimized":{".message":{"overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","*height":"1.2em"}},".button_yes":{"marginTop":"10px"}}
z.prototype.__jx__super=y
z.prototype.update=function(A){y.prototype.update.call(this,A)
if(!A)return
if('message$string' in A)this.message.setText(A['message$string']||'')}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_TextCard"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_card_TextCard"}
return z})()
b.__$$__jx_ui_Select=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
this.navStack=null
if(!D)D={}
D.tagName||(D.tagName='select')
x.call(this,z,A,B,C,D)
this.addClass('select')
this.onDestruction(function(){this.navStack=null})}
y.prototype=e(x.prototype)
y.prototype.getSelectedIndex=function(){return this.dom.selectedIndex}
y.prototype.setSelectedIndex=function(z){this.dom.selectedIndex=z
return this}
y.prototype.getOptions=function(){var z=[],A=this.dom.options.length
for(var B=0;B<A;B++)z.push(this.dom.options[B].jx_wrapper)
return z}
y.prototype.setValue=function(z){this.setSelectedIndex(-1)
return x.prototype.setValue.call(this,z)}
y.prototype.reset=function(){var z=this.getOptions()
for(var A=0,B=z.length;A<B;A++){if(z[A].getSelected()){this.setSelectedIndex(A)
return this}}
this.setSelectedIndex(0)
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Select"].join('')
y.prototype.__jx__fqname="jx_ui_Select"}
return y})()
b.__$$__meshim_widget_controllers_ErrorHandler=(function(){var x=b.__$$__meshim_common_System,y=b.__$$__jx_core_ObjectUtil,z=b.__$$__meshim_widget_controllers_DataController,A=b.__$$__jx_data_JSON,B=b.__$$__jx_io_Form,C,D={init:H,post:M,bind:I},E,F=['zopim'],G={}
function H(N){E=z.root.$('livechat').$('account').$('key$string')
C=N
if(f(E.getValue(),F)==-1)return
r.on('error',K)
r.window.on('error',J)
r.window.on('unload',function(){r.window.un('error',J)})}
function I(N){if(!N)return
N.onerror=K}
function J(N,O,P){L(N,O,P)
return !1}
function K(N,O,P){L(N,O,P)
return !0}
function L(N,O,P){if(!N)return
O=O||''
P=P||''
if((q.isIE||q.isNewIE)&&!(/^en/i.test(window.navigator.language||window.navigator.browserLanguage)))return
N=N.stack?[N.toString(),N.stack].join('\n'):N.toString()
var Q=[N,O,P].join(' ')
if(G[Q])return
G[Q]=!0
M(N,{script:O,line:P})}
function M(N,O){if(!N)return
if(!C)return
var P=C.getHost()
if(!P)return
O=y.extend({},O,{system:A.stringify(x.info),connection:A.stringify(C.getConnectionStats())})
O.error=N
B.post('https://'+P+'/client/widget/errors',{params:O})}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ErrorHandler"].join('')
D.prototype.__jx__fqname="meshim_widget_controllers_ErrorHandler"}
return D})()
b.__$$__meshim_widget_controllers_LanguageController=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_common_QueryString,z=b.__$$__jx_language_Detect,A={}
A.init=function(){var B=x.root.$('livechat').$('ui').$('mockup$bool'),C=x.root.$('livechat').$('ui').$('popout$bool'),D=x.root.$('livechat').$('settings').$('language').$('language$string')
D.bindValue(function(E){if(B.getValue()||!(v&&v.update)){return}
if(C.getValue()){var F=y().get('lang')
F&&(E=F)}
if(E==='--'||!E){E=z.guess()
D.update(E)
return}
v.update(E)})}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_LanguageController"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_LanguageController"}
return A})()
b.__$$__meshim_widget_widgets_gravatar_GravatarImage=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_img,"img",null,[],{"id":"img","class":"img"}],[b.__$$__meshim_widget_widgets_IconFont,"auth_type",null,[],{"id":"auth_type","addClass":"auth_type"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__img'),H=w.get(z+'__auth_type')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_Config,L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Utils,N=L.root.$('livechat').$('settings').$('theme').$('name$string'),O=L.root.$('livechat').$('settings').$('concierge').$('avatar_path$string'),P=L.root.$('livechat').$('settings').$('theme').$('avatars$string'),Q='',R='',S='',T='',U='',V='',W,X,Y,Z
F.setDataNode=$_
function $$(){F.autobind(N,'value',function($f){if(Y&&$f!=Y){$b()}})}
function $_($f){$a()
if(W){F.autounbind(W,'value',$b)}
W=$f
Z=!1
if(W){F.autobind(W,'value',$b)}}
function $a(){Q=R=S=T=''}
function $b(){if(!W)return
if(Z)return
switch(W.name){case 'profile':X='visitor'
break
case 'concierge':X='concierge'
break
default:X='agent'}
var $f=W.getValue()
if(!$f){H.setDisplay('none')
S=K.AVATARS.AGENT
$d()
return}
if($f['nick$string'])U=$f['nick$string']
if($f['display_name$string']&&!M.isDefaultName($f['display_name$string']))$c($f['display_name$string'])
if($f['email$string']){R=$f['email$string']}
if($f['auth']&&$f['auth']['avatar$string']){S=$f['auth']['avatar$string']}
else if($f['avatar_data$string']){S=$f['avatar_data$string']}
else if($f['avatar_path$string']){S=$f['avatar_path$string']
if(X=='agent')Z=!0}
else{S=''}
if(X=='agent'&&!S){S=O.getValue()}
if($f['auth']&&('type$string' in $f['auth'])){if(V)H.removeClass(V)
V=$f['auth']['type$string']||''
if(V)H.addClass(V)
H.setIcon(V)}
H.setDisplay(V?'':'none')
$d()}
function $c($f){if($f&&$f!=Q){F.setTitle($f)
Q=$f}}
function $d(){var $f=S||$e()
if($f&&$f!=T){G.setSrc(M.replaceFileHostname($f))
T=$f}}
function $e(){var $f=N.getValue(),$g=P.getValue()||{}
Y=$f
var $h
switch(X){case 'visitor':$h=$g.visitor$string||K.AVATARS.VISITOR
break
case 'concierge':$h=$g.concierge$string||K.AVATARS.CONCIERGE
break
case 'agent':$h=O.getValue()||$g.agent$string||K.AVATARS.AGENT
break}
return $h||K.AVATARS.DEFAULT}
$$()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarImage
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"},".img":{"width, height":"100%"},".auth_type":{"position":"absolute","bottom, left":0,"background":"#FFF","fontSize, width, height":"12px","line-height":"16px","overflow":"hidden","borderRadius":"2px","&.facebook":{"color":"$$facebook"},"&.twitter":{"color":"$$twitter"},"&.google":{"color":"$$google"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarImage"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarImage"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_Tracker=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y={init:C},z,A=1,B=20*1000
function C(){z=x.root.$$('livechat.profile')
r.document.on('mousemove',D)
r.window.on('click',D)
r.window.on('scroll',D)
r.window.on('keypress',D)
E()}
function D(){A++}
function E(){if(A)z.write({"active$int":+new Date()})
A=0
window.setTimeout(E,B)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_Tracker"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_Tracker"}
return y})()
b.__$$__meshim_widget_controllers_SoundController=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_common_Sounds,A=x.SOUNDS_URL,B={new_message:"triad_gbd"},C,D,E,F,G,H,I
function J(){C=y.root.$$('livechat.settings.sound.disabled$bool')
D=y.root.$$('livechat.profile.notification.sound$bool')
E=y.root.$$('connection.reattached_timestamp$int')
G=y.root.$$('livechat.ui.sounds')
I=y.root.$('livechat').$('ui').$('mobile$bool')
if(I.getValue()){D.update(!1)}
r.runAfterFirstChildReady(function(){if(H)return
H=new z(A)
G.bindValue(K)})}
function K(N){if(!N)return
if(!L())return
F=E.getValue()||0
if(F===0)return
for(var O in N)if(N.hasOwnProperty(O)){if(!N[O]||N[O]<F)continue
O=O.substring(0,O.indexOf('$'))
if(!H.hasSound(O))H.create(O,B[O])
H.play(O,1)}}
function L(){var N=C.getValue(),O=D.getValue()
if(typeof O==="boolean")return O
if(typeof N=="boolean")return !N
return !0}
var M={init:J,isSoundEnabled:L,play:function(){}}
if((typeof M==='function')&&M.prototype&&!M.__jx__no_fqname){M.prototype.__jx__fqname_chain=[(M.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_SoundController"].join('')
M.prototype.__jx__fqname="meshim_widget_controllers_SoundController"}
return M})()
b.__$$__meshim_widget_controllers_ProfileListener=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_utils_Utils,z={init:L},A,B,C,D,E,F,G,H,I,J,K
function L(){A=x.root.$('livechat').$('profile')
B=A.$('display_name$string')
D=A.$('email$string')
F=A.$('auth').$('type$string')
H=A.$('logged_in$bool')
B.on('value',function(O){C=O
M()})
D.on('value',function(O){E=O
M()})
F.on('value',function(O){G=O
M()})
I=x.root.$('livechat').$('settings')
J=I.$('login').$('allowed_types')
K=I.$('login').$('allowed_types_count$int')
J.on('value',function(){var O=J.getValue(),P=0
for(var Q in O)if(O.hasOwnProperty(Q)){if(Q=='email$bool')continue
if(O[Q])P++}
if(P==K.getValue())return
K.update(P)})}
function M(){H.update(N())}
function N(){if(G){return !0}
if(E&&E.trim()){return !0}
if(C&&C.trim()&&!y.isDefaultName(C)){return !0}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ProfileListener"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_ProfileListener"}
return z})()
b.__$$__meshim_widget_controllers_PopoutController=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_utils_Mobile,A={}
A.init=function B(){var C=y.root,D=C.$$('livechat.ui.popout$bool'),E=C.$$('livechat.ui.mobile$bool'),F=C.$$('livechat.ui.mockup$bool'),G=C.$$('livechat.account.key$string'),H=C.$$('livechat.profile.mid$string'),I=C.$$('livechat.settings.language.language$string'),J,K=E.getValue()?'dialog=no,fullscreen=yes':'width=400,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no'
A.openPopout=function L(M){if(q.bugs.noBoxSizing)return
var N=G.getValue()||x.ACCOUNT_KEY,O=E.getValue()
if(F.getValue()||D.getValue())return
if(!N)return
if(z.isIEMobile)return
var P=A.getPopoutURL()
if((J&&!J.closed&&J.focus)){if((!O&&q.isChrome)||z.isNativeAndroidMobile||z.isSafariIOSMobile){J.focus()}
else{J.close()
J=window.open(P,x.POPOUT_WINDOW_PREFIX+N+new Date(),K)
if(!J||J.closed){return}}
return !0}
else if(O||M){try {J=window.open(P,x.POPOUT_WINDOW_PREFIX+N,K)}catch(Q){;}
if(!J||J.closed){return}
try {J.focus()}catch(Q){;}
return !0}}
A.getPopoutURL=function L(){return [x.POPOUT_URL,'?key=',G.getValue()||x.ACCOUNT_KEY,'&mid=',H.getValue(),'&lang=',I.getValue(),'&hostname=',window.location.hostname].join('')}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_PopoutController"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_PopoutController"}
return A})()
b.__$$__meshim_widget_controllers_CookieLaw=(function(){var x=b.__$$__meshim_widget_controllers_StorageController,y=b.__$$__meshim_widget_controllers_DataController,z,A,B,C,D,E={init:F,enableCookieLaw:G,setUserChoice:H,isCookieDenied:L,setDefaultImplicitConsent:M}
function F(){z=y.root
A=z.$$('livechat.settings.cookie_law')
B=A.$('enabled$bool')
C=z.$$('livechat.profile')
D=C.$('allow_cookies$bool')
var N=x.getAllowCookieLaw()
if(typeof N=='boolean')C.write({'allow_cookies$bool':N})}
function G(){var N=z.$$('connection.status$string').getValue()
if(N){window.console&&window.console.log&&window.console.log('Zopim livechat: Cookie Law mode must be enabled '+'immediately after embedding script')
return}
A.write({'enabled$bool':!0})}
function H(N){N=n(N)
var O=J(),P=K()
if(N===O)return
x.setAllowCookieLaw(N)
C.write({'allow_cookies$bool':N})
var Q=I()
if(!Q)return
if(N===!1){y.livechat.clearAll()}
if(N!==P){y.livechat.reconnect()}}
function I(){var N=B.getValue()
return !!N}
function J(){return D.getValue()}
function K(){var N=J()
if(typeof N!=='boolean')return !0
else return N}
function L(){var N=I(),O=K()
return N&&(O===!1)}
function M(){var N=J()
if(typeof N!=='boolean')H(!1)}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_CookieLaw"].join('')
E.prototype.__jx__fqname="meshim_widget_controllers_CookieLaw"}
return E})()
b.__$$__meshim_widget_controllers_ChatLogListener=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y={init:T},z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S
function T(){z=x.root.$('livechat')
A=z.$('ui')
B=z.$('channel').$('log')
D=A.$('chat_button').$('unread_count$int')
F=z.$('profile').$('nick$string')
H=A.$('chat_window').$('display$bool')
J=A.$('chat_window').$('main_stack_name$string')
L=x.root.$$('connection.registered_timestamp$int')
N=x.root.$('connection').$('status$string')
P=A.$('mobile$bool')
R=A.$('popout$bool')
Q=P.getValue()
S=R.getValue()
N.on('value',function(V){O=V})
D.on('value',function(V){E=V})
F.on('value',function(V){G=V})
L.on('value',function(V){M=V})
H.on('value',function(V){I=V
U()})
J.on('value',function(V){K=V
U()})
B.on('value',function(V){C=V})
B.on('keys',U)}
function U(V){if(O!='registered'&&O!='reattached')return
if(I&&K=='chat_panel'&&!Q&&!S){l(function(){D.update(0)})
return}
if(!V||!V.length)return
if(!G)return
var W=0,X
for(var Y=0,Z=V.length;Y<Z;Y++){X=C[V[Y]]
if(!X)continue
if((X['nick$string']!=G)&&(X['timestamp$int']>M)&&(X['type$string']=='chat.msg')&&(K!='chat_panel'||!I||(Q&&!S))){W++}}
D.update((E||0)+W)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ChatLogListener"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_ChatLogListener"}
return y})()
b.__$$__meshim_widget_widgets_Favicon=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Image,"image",null,[],{"id":"image","addClass":"custom_icon"}],[b.__$$__meshim_widget_widgets_IconFont,"icon",null,[],{"id":"icon","addClass":"default_icon"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"dots",null,[],{"id":"dots","addClass":"dots","selectable":"false"}]],{"addClass":"dots_container"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image'),H=w.get(z+'__icon'),I=w.get(z+'__dots')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=1000,N=3,O=L.root.$('livechat').$('account'),P=L.root.$('livechat').$('settings').$('branding'),Q=O.$('status$string'),R,S=P.$('hide_favicon$bool'),T,U=P.$('custom_favicon_path$string'),V,W=L.root.$('livechat').$('ui').$('chat_button').$('unread_count$int'),X,Y,Z,$$
function $_(){if(Y)try {Y.abort()}catch($h){;}
Y=null
if(!T){$e(!0)}
else{if(V){G.setSrc(V)
$e(!1)
return}
var $d=$f()
if($d){G.setSrc($d)
$e(!1)
return}
Y=$g(function($h){if($h){G.setSrc($h)
$e(!1)}
else{$e(!0)}})}
function $e($h){Z=!$h
if($h){G.setDisplay('none')
H.setDisplay('')}
else{G.setDisplay('')
H.setDisplay('none')}
$b()}
function $f(){var $h=window.document.getElementsByTagName('head')[0],$i=$h.getElementsByTagName('link')
for(var $j=0,$k=$i.length;$j<$k;$j++)if($i[$j].rel=='icon'||$i[$j].rel=='shortcut icon')return $i[$j].href}
function $g($h){var $i,$j=window.location.protocol+'//'+window.location.host+'/favicon.ico'
try {if(window.ActiveXObject){$i=new window.ActiveXObject("Msxml2.XMLHTTP")
if(!$i)$i=new window.ActiveXObject("Microsoft.XMLHTTP")}}catch($k){;}
if(!$i&&typeof window.XMLHttpRequest!='undefined')$i=new window.XMLHttpRequest()
if($i){$i.onreadystatechange=function(){if($i.readyState===4){if($i.status===200||($i.status>=300&&$i.status<400))$h($j)
else $h()}}
$i.open('HEAD',$j,!0)
$i.send(null)}
return $i}}
function $a(){F.autobind(S,'value',function($d){T=$d
$_()})
F.autobind(U,'value',function($d){V=$d
$_()})
F.autobind(Q,'value',function($d){if($d==R)return
R=$d
$b()})
F.autobind(W,'value',function($d){if($d==X)return
X=$d
$b()})}
function $b(){if(R=='offline'&&!X){H.setIcon('email')
H.removeClass('default_icon_online')
H.addClass('default_icon_offline')}
else{H.setIcon('message')
H.removeClass('default_icon_offline')
H.addClass('default_icon_online')}
if(X&&!Z){if(!$$){$c()
$$=window.setInterval($c,M)}
I.setDisplay('')}
else{if($$){window.clearInterval($$)
$$=null}
I.setDisplay('none')}}
function $c(){var $d=I.getText()
I.setText($d.length==N?'':($d+'.'))}
$a()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Favicon
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".custom_icon":{"width, height":"16px"},".default_icon":{"fontSize":"16px","width":"16px","display":"inline-block","&.default_icon_online":{"lineHeight":"20px","verticalAlign":"top","color":"$$faviconOnlineColor"},"&.default_icon_offline":{"lineHeight":"18px","verticalAlign":"top","color":"$$faviconOfflineColor"}},".dots_container":{"fontFamily":"Arial","position":"absolute","width":"100%","textAlign":"center","fontSize":"20px","letterSpacing":"-2px","top":"-3px","left":"-1px","lineHeight":"24px"},".dots":{"display":"inline-block","width":"12px","lineHeight":"22px","textAlign":"left","color":["$$chatButtonBg","$$faviconBg","$$faviconDotsColor"],"background":"transparent"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Favicon"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Favicon"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_CheckBox=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='input')
D.type||(D.type='checkbox')
x.call(this,z,A,B,C,D)
this.on('click',function(){this.onAutoValidate()})
if(q.engineIE<9)this.on('click',function(){this.fire('change')})}
y.prototype=e(x.prototype)
y.prototype.getChecked=function(){return this.dom.checked}
y.prototype.setChecked=function(z){this.dom.checked=n(z)
return this}
y.prototype.toggleChecked=function(){this.setChecked(!this.getChecked())
return this}
y.prototype.getInitialChecked=function(){return q.engineIE<=8?this._initialChecked:this.dom.getAttribute('checked')}
y.prototype.setInitialChecked=function(z){if(q.engineIE<=8)this._initialChecked=z
else this.setAttribute('checked',z)
return this}
y.prototype.reset=function(){this.setChecked(this.getInitialChecked()).setValidity(!0)
x.prototype.reset.call(this)}
y.prototype.validate=function(z){var A=!this.dom.required||this.getChecked()
!A&&z&&this.focus()
this.setValidity(A)
return A}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_CheckBox"].join('')
y.prototype.__jx__fqname="jx_ui_CheckBox"}
return y})()
b.__$$__meshim_widget_widgets_menu_Section=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Section
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"padding":"5px 0","borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor","*borderTop":"none","*zoom":1,"*position":"relative"},"&:first-child":{"borderTop":"none"},"&.flow":{"padding":"0","margin":"10px"},"&.mobile":{"padding":"0","borderTop":"none"},"&.border_top":{"borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Section"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_Section"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_EmailField=(function(){var x=b.__$$__jx_ui_TextField
function y(A,B,C,D,E){if(!(this instanceof y))return new y(A,B,C,D,E)
if(!E)E={}
E.tagName||(E.tagName='input')
E.type||(E.type='email')
x.call(this,A,B,C,D,E)}
y.prototype=e(x.prototype)
var z=x.prototype.getValue
y.prototype.getValue=function(){return (z.call(this)||'').trim()}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_EmailField"].join('')
y.prototype.__jx__fqname="jx_ui_EmailField"}
return y})()
b.__$$__meshim_widget_widgets_menu_IconFont=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass,J={'true':'tick','false':'cross'},K=F.setIcon
F.setIcon=function(M,N){if(!N)M=n(M).toString()
return K.call(F,J[M]||M)}
function L(){I.rtl(F)}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_IconFont
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
x.__jx__jcss={"**self":{"float":"right","lineHeight":1,"position":"relative","top":"3px","verticalAlign":"middle","&.rtl":{"float":"left"}},"&.left":{"float":"left","&.rtl":{"float":"right"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_IconFont"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_IconFont"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_menu_Item=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Button,null,null,[],{"type":"button"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)
I.rtl(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Item
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Button
x.__jx__jcss={"**self":{"background":"transparent","border":"none","position":"relative","width":"100%","overflow":"hidden","*zoom":1,"textAlign":"left","padding":"$$menuItemPadding","*":{"cursor":"pointer"}},"&.rtl":{"textAlign":"right"},"&:hover":{"background":"$$menuItemHoverBg"},"&.mobile":{"borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Item"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_Item"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,"tr",null,[[b.__$$__jx_ui_html_td,"text_cell",null,[[b.__$$__jx_ui_Widget,"text",null,[],{"id":"text"}]],{"id":"text_cell","class":"text_cell"}],[b.__$$__jx_ui_html_td,"image_cell",null,[[b.__$$__jx_ui_Widget,"image_container",null,[[b.__$$__jx_ui_Widget,"image",null,[],{"id":"image","tagName":"img","addClass":"banner_image"}]],{"id":"image_container","addClass":"banner_image_container"}],[b.__$$__meshim_widget_widgets_IconFont,"icon",null,[],{"id":"icon","icon":"badge_default","addClass":"banner_icon"}]],{"id":"image_cell","class":"image_cell"}]],{"id":"tr"}]],{}]],{"class":"banner_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__tr'),H=w.get(z+'__text_cell'),I=w.get(z+'__text'),J=w.get(z+'__image_cell'),K=w.get(z+'__image_container'),L=w.get(z+'__image'),M=w.get(z+'__icon')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var N=(function(){var P=b.__$$__meshim_widget_controllers_DataController,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_Strings,S=P.root,T=S.$('livechat').$('settings').$('banner'),U=T.$('layout$string'),V,W=T.$('text$string'),X=T.$('image_path$string'),Y,Z=T.$('image_data$string'),$$,$_=S.$('livechat').$('ui').$('mockup$bool').getValue(),$a=S.$('livechat').$('ui').$('chat_window').$('display$bool'),$b,$c=S.$('livechat').$('ui').$('chat_window').$('main_stack_name$string'),$d,$e=100
function $f(){if(q.bugs.noBoxSizing){L.dom.onload=$h
F.autobind($a,'value',function($j){$b=$j
$h()})
F.autobind($c,'value',function($j){$d=$j
$h()})}
function $h(){if(!$b)return
if($d!='new_chat_form')return
if(!q.bugs.noBoxSizing)return
L.setWidth('')
L.setHeight('')
l($i,F,!0)}
function $i(){var $j=parseInt(L.getWidth()||L.dom.width,10),$k=parseInt(L.getHeight()||L.dom.height,10)
if(!$j||!$k)return
var $l=$j>$k,$m,$n,$o
$m=$l?$j:$k
$n=$l?$k:$j
if($m>$e){$o=$m/$e
$m=$m/$o
$n=$n/$o
L.setWidth($l?$m:$n)
L.setHeight($l?$n:$m)}
F.dom.className=F.dom.className}
F.autobind(U,'value',function($j){if(V)F.removeClass(V)
V=$j
if(!P.livechat.getLimit()&&V=='image_only'){V='image_right'}
if(V)F.addClass(V)
$g()})
F.autobind(W,'value',function(){I.setText(R.get(W))})
F.autobind(X,'value',function($j){Y=$j
$g()})
if($_){Q.supportsDataURI(function($j){if(!$j)return
F.autobind(Z,'value',function($k){$$=$k
$g()})})}}
function $g(){F.setStyle('background','')
var $h=Q.replaceFileHostname($$||Y||'')
switch(V){case 'image_right':L.setSrc($h)
G.insertBefore(H,J)
break
case 'image_left':L.setSrc($h)
G.insertBefore(J,H)
break
case 'image_only':F.setStyle('background','url('+$h+') center center no-repeat')
break
default:F.setStyle('background','')
break}
if($h){K.setDisplay('')
M.setDisplay('none')}
else{K.setDisplay('none')
M.setDisplay('')}}
$f()})()
for(var O in N)if(N.hasOwnProperty(O))F[O]=N[O]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{".banner_table":{"width":"100%","height":"100%","tableLayout":"fixed","direction":"ltr","color":"$$badgeContentColor"},".text_cell, .image_cell":{"verticalAlign":"middle"},".text_cell":{"wordWrap":"break-word","whiteSpace":"pre-wrap"},".image_cell":{"width":"100px","textAlign":"center"},".banner_image_wrapper":{"width":"100px"},".banner_image":{"maxWidth":"100px","maxHeight":"100px","verticalAlign":"top","border":"none"},".banner_icon":{"width":"100px","fontSize":"90px","marginTop":"10px","marginLeft":"5px","textAlign":"center"}},"&.image_right":{".text_cell":{"paddingRight":"3px"},".image_cell":{}},"&.image_left":{".text_cell":{"paddingLeft":"3px"},".image_cell":{}},"&.image_only":{".text_cell":{"display":"none"},".image_cell":{"display":"none"}},"&.text_only":{".text_cell":{"fontSize":"26px","textAlign":"center","width":"100%"},".image_cell":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_Banner"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_Banner"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_branding_Link=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_a,null,null,[],{"target":"_blank"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_utils_BindClass,K=I.root.$('livechat'),L=K.$('ui').$('mobile$bool')
function M(){J.mobile(F)
if(L.getValue()){F.on('click',function(N){N.preventDefault()
window.open(F.getAttribute('href'))})}}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_branding_Link
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_a.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_a
x.__jx__jcss={"**self":{"color":"inherit","textDecoration":"inherit"},"&.mobile":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_branding_Link"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_branding_Link"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_RadioButton=(function(){var x=b.__$$__jx_ui_CheckBox,y=b.__$$__jx_ui_HTMLElement
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!E)E={}
E.tagName||(E.tagName='input')
E.type||(E.type='radio')
x.call(this,A,B,C,D,E)
if(q.bugs.noBoxSizing){this.parentNode.removeChild(A instanceof y?this:this.dom)
this.dom=A.doc.createElement('<'+E.tagName+' type="'+E.type+'" name="'+(E.name||'')+'"/>')
this.dom.jx_wrapper=this
this.style=this.dom.style
this.parentNode.appendChild(A instanceof y?this:this.dom)
this.setStyle(C)
this.setAttributes(E)
this.addClass(this.__jx__fqname)}}
z.prototype=e(x.prototype)
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_ui_RadioButton"].join('')
z.prototype.__jx__fqname="jx_ui_RadioButton"}
return z})()
b.__$$__jx_ui_PrettySelect=(function(){var x=b.__$$__jx_ui_Select,y=b.__$$__jx_ui_Widget
function z(B,C,D,E,F){if(!(this instanceof z))return new z(B,C,D,E,F)
if(!F)F={}
F.tagName=null
F.position='relative'
if(q.bugs.noBoxSizing){x.call(this,B,C,D,E,F)
this.addClass('select_ie6')
return}
this.container=new y(B,null,null,null,F)
this.container.addClass('select_container')
this.container.removeAttribute('tabindex')
var G=this
this.container.destroy=function(){G.destroy()}
this.container.empty=function(){G.empty()}
this.button=new y(this.container,null,null,null,{})
this.button.addClass('select_button')
this.placeholder=new y(this.container,null,null,null,{})
this.placeholder.addClass('select_placeholder')
F.tagName='select'
F.opacity='0'
F.position='absolute'
F.width='100%'
F.height='100%'
F.top='0'
F.left='0'
F.margin=F.marginLeft=F.marginRight=F.marginTop=F.marginBottom='0'
if(q.engineIE<9)F.filter='alpha(opacity=0)'
x.call(this,this.container,C,D,E,F)
if(q.isIE)l(function(){G.dom&&G.updatePlaceholder()})
else this.updatePlaceholder()
this.on('change',function(){this.updatePlaceholder()})
this.on('keyup',function(){this.updatePlaceholder()})
this.on('focus',function(){this.container.addClass('focus')})
this.on('blur',function(){this.container.removeClass('focus')})
this._updatePlaceholder=function(){G.updatePlaceholder()}
v&&v.onLanguage&&v.onLanguage(this._updatePlaceholder)}
z.prototype=e(x.prototype)
z.prototype.appendChild=function(B){var C=!this.getOptions().length
x.prototype.appendChild.call(this,B)
if(C&&this.getOptions().length){this.setSelectedIndex(0)
var D=this
l(function(){D.dom&&D.updatePlaceholder()})}}
z.prototype.getPrefix=function(){return this.prefix}
z.prototype.setPrefix=function(B){this.prefix=B
return this}
var A=' '
z.prototype.getPrefixSeparator=function(){return this.prefixSeparator}
z.prototype.setPrefixSeparator=function(B){this.prefixSeparator=B
return this}
z.prototype.updatePlaceholder=function(){if(!this.container||!this.dom)return this
var B=this.getSelectedIndex()
if(B<0&&this.prompt){this.placeholder.setText(this.prompt)
return this}
var C=this.getOptions()[B],D=''
if(this.prefix){D+=this.prefix+((this.prefixSeparator||this.prefixSeparator==='')?this.prefixSeparator:A)}
if(C){D+=(typeof C.getPlaceholder=='function'&&C.getPlaceholder())||(typeof C.getLabel=='function'&&C.getLabel())||C.getText()}
this.placeholder.setText(D)
return this}
z.prototype.getPrompt=function(){return this.prompt}
z.prototype.setPrompt=function(B){this.prompt=B
this.setSelectedIndex(-1)
return this}
z.prototype.setValue=function(B){x.prototype.setValue.call(this,B)
this.updatePlaceholder()
return this}
z.prototype.setSelectedIndex=function(B){x.prototype.setSelectedIndex.call(this,B)
this.updatePlaceholder()
return this}
z.prototype.show=function(){this.container?this.container.show():x.prototype.show.call(this)}
z.prototype.hide=function(){this.container?this.container.hide():x.prototype.hide.call(this)}
z.prototype.setDisabled=function(B){this.container&&(n(B)?this.container.addClass('disabled'):this.container.removeClass('disabled'))
return x.prototype.setDisabled.call(this,B)}
z.prototype.createLabel=function(B){this.container&&(this.parentNode=this.container.parentNode)
x.prototype.createLabel.call(this,B)
this.container&&(this.parentNode=this.container)}
z.prototype.createErrorMessage=function(B){this.container&&(this.parentNode=this.container.parentNode)
x.prototype.createErrorMessage.call(this,B)
this.container&&(this.parentNode=this.container)}
z.prototype.destroy=function(){v&&v.unLanguage&&v.unLanguage(this._updatePlaceholder)
x.prototype.destroy.call(this)
if(this.container){x.prototype.empty.call(this.container)
this.container.empty=null
x.prototype.destroy.call(this.container)
this.container=this.button=this.placeholder=null}}
z.prototype.empty=function(){x.prototype.empty.call(this)
this.updatePlaceholder()}
z.prototype.reset=function(){if(!this.container)return x.prototype.reset.call(this)
var B=this.getOptions()
for(var C=0,D=B.length;C<D;C++){if(B[C].getSelected()){this.setSelectedIndex(C)
this.updatePlaceholder()
return this}}
this.setSelectedIndex(-1)
this.updatePlaceholder()
return this}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_ui_PrettySelect"].join('')
z.prototype.__jx__fqname="jx_ui_PrettySelect"}
return z})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"$$defaultplacement$$",null,[],{"class":"arrow_content","container":"default","position":"relative","id":"$$defaultplacement$$"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"arrow arrow_border"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"arrow arrow_background"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__$$defaultplacement$$')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
function K(){F.setArrowPointing=function(L){F.removeClass('left').removeClass('right')
F.addClass(L)}
J.rtl(F)}
K()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","border":"1px solid #000000","background":"#ffffff",".arrow":{"position":"absolute","border":"0px solid transparent","height":0,"width":0,"fontSize":0,"lineHeight":0,"pointerEvents":"none"},".arrow_border":{"borderWidth":"8px","marginTop":"8px"},".arrow_background":{"borderWidth":"7px","marginTop":"9px"},"&.ltr.left, &.rtl.right":{".arrow":{"right":"100%","top":0,"borderLeftColor":"transparent !important","borderTopColor":"transparent !important","borderBottomColor":"transparent !important"}},"&.rtl.left, &.ltr.right":{".arrow":{"left":"100%","top":0,"borderRightColor":"transparent !important","borderTopColor":"transparent !important","borderBottomColor":"transparent !important"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ArrowBubble"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ArrowBubble"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_ConnectionController=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_CookieLaw,z=b.__$$__meshim_widget_controllers_DataController,A=b.__$$__meshim_widget_controllers_StorageController,B=b.__$$__meshim_widget_utils_Utils,C=b.__$$__jx_data_DataNode,D=b.__$$__jx_io_Socket,E=b.__$$__meshim_config_geo_WidgetMediatorsAccessDefinition,F=b.__$$__meshim_common_GeoAccessFactory,G={FLUSH_DELAY_MS:0,RECONNECT_DELAY_MS:10000},H=2000,I='.zopim.com',J=new F(E,'{"CLUSTERS":{"US":["us08","us10","us12","us14","us16","us18","us20","us22","us24","us26","us28"],"DE":["de04","de06","de08","de10","de12","ie02","ie04","ie06","ie08"],"SG":["sg06","sg08","sg10","sg12","sg14","sg16"],"JP":["jp02","jp04"],"AU":["au02"],"BR":["br02","br04","br06"]},"FALLBACKS":{"US":["DE"],"DE":["US"],"SG":["US"],"JP":["US"],"AU":["SG","US"],"BR":["US"]},"NEAR_MAP":{"AL":"DE","AD":"DE","AM":"DE","AT":"DE","BY":"DE","BE":"DE","BA":"DE","BG":"DE","CH":"DE","CY":"DE","CZ":"DE","DE":"DE","DK":"DE","EE":"DE","ES":"DE","EU":"DE","FO":"DE","FI":"DE","FR":"DE","GB":"DE","GE":"DE","GI":"DE","GR":"DE","HU":"DE","HR":"DE","IE":"DE","IM":"DE","IS":"DE","IT":"DE","LT":"DE","LU":"DE","LV":"DE","MC":"DE","MK":"DE","MT":"DE","NO":"DE","NL":"DE","PO":"DE","PT":"DE","RO":"DE","SE":"DE","SI":"DE","SK":"DE","SM":"DE","TR":"DE","UA":"DE","VA":"DE","ZA":"DE","AP":"SG","BD":"SG","BN":"SG","CN":"SG","ID":"SG","IN":"SG","LA":"SG","KH":"SG","LK":"SG","MM":"SG","MY":"SG","SG":"SG","PK":"SG","TH":"SG","VN":"SG","AU":"AU","NZ":"AU","HK":"JP","KR":"JP","JP":"JP","PH":"JP","RU":"JP","TW":"JP","AR":"BR","BO":"BR","BR":"BR","CL":"BR","PE":"BR","PY":"BR","UY":"BR","DEFAULT":"US"}}'),K=[],L='',M=!1,N=[],O,P,Q,R,S,T,U
function V(){O=z.root
P=O.$$('connection')
R=O.$$('livechat.ui.mockup$bool').getValue()
if(R){P.$('status$string').update('reattached')
return}
O.$('livechat').$('profile').bindValue(function($o){if(!$o)return
if(y.isCookieDenied())return
if(x.IS_POPOUT)return
$o.mid$string&&A.setIdentity($o.mid$string)})
P.$('status$string').bindValue(function($o){M=($o=='reattached')
M&&$k()
if($o=='idle_disconnect')Q&&Q.close()
$f()})
P.$('socket_status$string').bindValue($f)
S=O.$$('tmp.api_settings')
S.bindValue(function(){T=S.getValue()})
O.bindWrite($k)
Z()
O.$$('connection.reconnect$bool').bindValue(X)}
function W(){Q&&Q.close()
Q=null
Z()}
function X($o){if($o)W()}
function Y($o){var $p=$o.split(':'),$q=$p[0],$r=$p[1],$s=new D($q+I+($r?':'+$r:''),'W',null,G)
$s.on('open',function(){$_($o,$s)})
return $s}
function Z(){try {U=J.getGeoAccess()}catch($o){window.console&&window.console.log('Unable to compute host list')
return}
$$(H)}
function $$($o){if(Q)return
var $p=U.getNextHost()
if(!$p)return
var $q=Y($p)
K.push($q)
if(!U.hasNext())return
var $r=setTimeout($s,$o)
$q.on('close',$s)
function $s(){clearTimeout($r)
$q.un('close',$s)
$$($o)}}
function $_($o,$p){P.update({'socket_status$string':null})
L=$o
if(R)return
if(Q){$p.close()
return}
Q=$p
Q.on('break',$b)
Q.on('message',$a)
Q.on('reopen',$d)
Q.on('resume',$c)
$e()}
function $a($o){if(!$o)return
var $p=O
if('update' in $o){if(/^livechat.settings/.test($o.path)){var $q=$o.path.split('.')
$q.splice(0,2)
$q=$q.join('.')
B.fullyExtend($o.update,T);($q?$l.descend($q):$l).update($o.update)}
$o.path&&($p=$p.descend($o.path))
$p.update($o.update)}}
function $b(){P.update({'socket_status$string':'break'})}
function $c(){P.update({'socket_status$string':'resume'})}
function $d(){P.update({'socket_status$string':'reconnect'})
M=!1
$e()}
function $e(){if(!Q)Z()
var $o=A.getIdentity(),$p=y.isCookieDenied()
if(!x.ACCOUNT_KEY)return
var $q={"__type":"register","accountKey":x.ACCOUNT_KEY,"mID":$o,"ua":window.navigator.userAgent,"cookie_law":$p}
if(O.$$('livechat.ui.popout$bool').getValue()){$q.popout=!0}
else{$q.title=document.title
$q.url=window.location.href
$q.ref=window.document.referrer}
Q.send($q)}
function $f(){var $o=P.getValue('status$string'),$p=P.getValue('socket_status$string')
window.clearTimeout($g.timer)
if($o=='error'){$g.timer=window.setTimeout($g,5*1000)
return}
if($p=='break'){if($o=='idle_disconnect'){P.update({message$string:'idle_disconnect'})}
else{P.update({message$string:'reconnecting'})
$g.timer=window.setTimeout($g,60*1000)}}
else if($p===null&&$o=='registered'){P.update({message$string:'resuming'})}
else if(($p===null||$p=='resume')&&$o=='connected'){P.update({message$string:'disconnected'})}
else if(k($o)&&k($p)){P.update({message$string:'fast_init'})}
else{P.update({message$string:null})}}
function $g(){P.update({message$string:'disconnected'})}
function $h(){var $o=Q
if(!$o)return {status:'not connected'}
return {connect_attempts:$o.connect_attempts,connections:$o.connections,disconnects:$o.disconnects,timeout_server:$o.timeout_server,timeout_response_soft:$o.timeout_response_soft,timeout_response_hard:$o.timeout_response_hard,sent_bytes:$o.sent_bytes,recv_bytes:$o.recv_bytes,sent_messages:$o.sent_messages,recv_messages:$o.recv_messages,sent_frames:$o.sent_frames,recv_frames:$o.recv_frames,lost_frames:$o.lost_frames,ooo_frames:$o.ooo_frames,bytes_at_connect:$o.bytes_at_connect,rtt:$o.rtt,clock_skew:$o.clock_skew,reconnect_delay:$o.reconnect_delay,quality:$o.quality,host:$o.host,status:$o.status,zone:window.__$__GEO,last_frame_time:$o.last_frame_time,local_time:+new Date()}}
function $i(){return L+I}
function $j(){return +new Date()-(Q?Q.clock_skew:0)}
function $k($o){$o&&N.push($o)
if(Q&&M){while(N.length){Q.send(N.shift())}}}
var $l=new C('server_settings')
function $m(){return $l.getValue()}
var $n={init:V,reconnect:W,getConnectionStats:$h,getHost:$i,getServerTime:$j,getServerSettings:$m}
if((typeof $n==='function')&&$n.prototype&&!$n.__jx__no_fqname){$n.prototype.__jx__fqname_chain=[($n.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ConnectionController"].join('')
$n.prototype.__jx__fqname="meshim_widget_controllers_ConnectionController"}
return $n})()
b.__$$__meshim_widget_controllers_UIController=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_PopoutController,z=b.__$$__meshim_widget_utils_Utils,A=b.__$$__meshim_widget_utils_Mobile,B={UNDEFINED:'undefined',NONE:'none',BUTTON:'button',BANNER:'banner',WINDOW:'window'},C={NEW_CHAT_FORM:'new_chat_form',PRE_CHAT_OFFLINE_FORM:'pre_chat_offline_form',CHAT_PANEL:'chat_panel',POST_CHAT_FORM:'post_chat_form',COOKIE_FORM:'cookie_form',CARD_FORM:'card_form',AGENT_LIST:'agent_list',ABOUT_PANEL:'about_panel'},D={ONLINE:'online',AWAY:'away',OFFLINE:'offline'},E=r.extend({init:F})
function F(){var G=x.root,H=G.$('livechat'),I=H.$('settings'),J=I.$('theme'),K=H.$('ui'),L=K.$('chat_window'),M=K.$('chat_button'),N=K.$('popout$bool').getValue(),O=K.$('mobile$bool').getValue(),P=K.$('mockup$bool').getValue()
if(O&&N){A.hackFastButtons()}
z.hackTitleLocalization()
var Q,R=G.$('connection').$('message$string'),S
R.bindValue(function($3){if($3==S)return
S=$3
$H()})
var T=G.$('connection').$('status$string'),U,V,W=[]
T.bindValue(function($3){if($3==U)return
U=$3
$a()
$H()
if(U=='reattached'||U=='cookie_law'){$V(W)
W=[]
V=U}})
var X=H.$('account').$('status$string'),Y
X.bindValue(function($3){if($3==Y)return
Y=$3
$J()
$H()})
var Z=H.$('channel').$('chatting$bool'),$$,$_=K.$('chat_window').$('pre_chat_form').$('submitted$bool')
Z.bindValue(function($3){if($3==$$)return
$$=$3
$a()
$H()})
function $a(){if($$&&U=='reattached'){$_.update(!0)}}
var $b=I.$('behavior').$('do_not_display$bool'),$c
$b.bindValue(function($3){if($3==$c)return
$c=$3
$H()})
var $d=I.$('banner').$('enabled$bool'),$e
$d.bindValue(function($3){if($3==$e)return
$e=$3
$H()})
var $f=I.$('bubble').$('enabled$bool'),$g
$f.bindValue(function($3){if($3==$g)return
$g=$3
$H()})
var $h=I.$('chat_button').$('hide_when_offline$bool'),$i
$h.bindValue(function($3){if($3==$i)return
$i=$3
$H()})
var $j=L.$('user_hidden$bool'),$k
$j.bindValue(function($3){if($3==$k)return
$k=$3
$H()})
var $l=L.$('user_hidden_banner$bool'),$m
$l.bindValue(function($3){if($3==$m)return
$m=$3
$H()})
var $n=L.$('user_hidden_bubble$bool'),$o
$n.bindValue(function($3){if($3==$o)return
$o=$3
$J()})
var $p=H.$('settings').$('forms').$('pre_chat_form').$('required$bool'),$q
$p.bindValue($r)
$_.bindValue($r)
function $r(){var $3=$p.getValue(),$4=$_.getValue(),$5=$3&&!$4
if($5==$q)return
$q=$5
$H()}
var $s,$t,$u=M.$('display$bool'),$v=L.$('display$bool'),$w=L.$('main_stack_name$string')
$u.bindValue($x)
$v.bindValue($x)
$w.bindValue($x)
function $x(){var $3=$u.getValue(),$4=$v.getValue(),$5=$w.getValue(),$6,$7
if(k($3)&&k($4)){$6=B.UNDEFINED}
else if(!$3&&!$4){$6=B.NONE}
else if($3&&!$4){$6=B.BUTTON}
else if(!$3&&$4){if($5==C.NEW_CHAT_FORM){$6=B.BANNER}
else{$6=B.WINDOW}}
$7=$5
if($6==$s&&$7==$t)return
$s=$6
$t=$7
$H()}
var $y=M.$('bubble').$('display$bool'),$z
$y.bindValue(function($3){if($3==$z)return
$z=$3
$J()})
var $A=J.$('chat_button').$('use_bubble$bool'),$B
$A.bindValue(function($3){if($3==$B)return
$B=$3
$J()})
var $C=J.$('chat_window').$('use_banner$bool'),$D
$C.bindValue(function($3){if($3==$D)return
$D=$3
$H()})
var $E=H.$('agents')
X.bindValue($F)
$E.bindKeys($F)
function $F(){if(P)return
var $3=X.getValue(),$4=$E.getKeys().length,$5=Z.getValue()
if($5&&!$4&&$3=='offline'){x.livechat.endChat()}}
Q=!0
var $G
function $H(){if(!Q){return}
if($K){return}
if($T){return}
if($R){return}
if($G){return}
$G=!0
if(Y=='banned'){if(N){$N(B.WINDOW)
$O([C.PRE_CHAT_OFFLINE_FORM])}
else{$N(B.UNDEFINED)}}
else if($S.api_display&&$S.api_stack);
else if($c&&!N&&!$S.api_display&&!$$&&$s==B.UNDEFINED);
else if(O&&!N){if($S.api_display);
else{if($s==B.NONE);
else{if($c||(Y=='offline'&&$i)){$N(B.UNDEFINED)}
else{$N(B.BUTTON)}}}}
else if(U=='cookie_law'){if($S.api_display);
else if($s==B.NONE);
else{if(N){$N(B.WINDOW)}
else{if($s==B.UNDEFINED){$N(B.BUTTON)}
else;}}
$O([C.COOKIE_FORM])}
else if(U=='registered'||U=='reattached'||S=='fast_init'){if($$){if($S.api_display);
else{if($k){if(N){$N(B.WINDOW)}
else{if($s==B.UNDEFINED){$N(B.BUTTON)}
else;}}
else{$N(B.WINDOW)}}
$O([C.CHAT_PANEL,C.AGENT_LIST,C.CARD_FORM,C.ABOUT_PANEL])}
else if(Y==D.ONLINE||Y==D.AWAY){if($S.api_display){$3()}
else if(N||$s==B.WINDOW){if(N){$N(B.WINDOW)}
else;
$3()}
else if($s==B.NONE);
else if($e&&$D){switch($s){case B.UNDEFINED:if($m){$N(B.BUTTON)}
else{$N(B.BANNER)}
break
case B.BUTTON:if($m);
else{$N(B.BANNER)}
break
case B.BANNER:break}}
else{switch($s){case B.UNDEFINED:$N(B.BUTTON)
break
case B.BUTTON:break
case B.BANNER:$N(B.BUTTON)
break}}}
else if(Y=='offline'){if($S.api_display);
else if(N){$N(B.WINDOW)}
else if($s==B.NONE);
else if($i){$N(B.UNDEFINED)}
else{if($s==B.WINDOW);
else{$N(B.BUTTON)}}
$O([C.PRE_CHAT_OFFLINE_FORM])}}
$G=!1
function $3(){if($q){$O([C.PRE_CHAT_OFFLINE_FORM])}
else{$O([C.CHAT_PANEL,C.AGENT_LIST,C.CARD_FORM,C.POST_CHAT_FORM,C.ABOUT_PANEL])}}}
var $I
function $J(){if(!Q){return}
if($P){return}
if($T){return}
if($R){return}
if($I){return}
$I=!0
if(O||N){$Q(!1)}
else{if($B){if($S.api_bubble);
else{if($g){if(Y==D.ONLINE||Y==D.AWAY){if($o){$Q(!1)}
else{if(k($z)){$Q(!0)}
else;}}
else{$Q(a)}}
else{$Q(!1)}}}
else{$Q(a)}}
$I=!1}
var $K,$L,$M
function $N($3){$L=$v.getValue()
$K=!0
switch($3){case B.UNDEFINED:$u.update(a)
$v.update(a)
break
case B.NONE:$u.update(!1)
$v.update(!1)
break
case B.BUTTON:$u.update(!0)
$v.update(!1)
break
case B.BANNER:if($w.getValue()!=C.NEW_CHAT_FORM){$M=$w.getValue()
$w.update(C.NEW_CHAT_FORM)}
$u.update(!1)
$v.update(!0)
break
case B.WINDOW:if($w.getValue()==C.NEW_CHAT_FORM){$O($M?[$M]:[C.PRE_CHAT_OFFLINE_FORM,C.CHAT_PANEL,C.POST_CHAT_FORM,C.COOKIE_FORM,C.CARD_FORM,C.AGENT_LIST])
$M=null}
$u.update(!1)
$v.update(!0)
break}
if(!$T){if($L&&$3!=B.WINDOW){E.fire('API:window:hide')}
else if(!$L&&$3==B.WINDOW){E.fire('API:window:show')}}
$K=!1}
function $O($3){if(!$3||!$3.length)return
if(f($t,$3)==-1){$w.update($3[0])}}
var $P
function $Q($3){$P=!0
$y.update($3)
$P=!1}
var $R
E.userShowBadgeOrWindow=function(){if(O)return
$R=!0
var $3=$w.getValue()
if($e&&$3==C.NEW_CHAT_FORM&&$D){$N(B.BANNER)}
else{$N(B.WINDOW)}
$S.api_display=!1
$S.api_stack=!1
$R=!1
$H()}
E.userShowWindow=function(){if(O||$s==B.WINDOW)return
$R=!0
$N(B.WINDOW)
$S.api_display=!1
$S.api_stack=!1
$R=!1
$H()}
E.userHideWindow=function(){if(O||$s==B.BUTTON)return
$R=!0
E.setWindowUserHidden()
if($c){$N(B.NONE)}
else{$N(B.BUTTON)}
$S.api_display=!1
$S.api_stack=!1
$R=!1
$H()}
E.userHideBanner=function(){if(O||$s==B.BUTTON)return
$R=!0
E.setBannerUserHidden()
if($c){$N(B.NONE)}
else{$N(B.BUTTON)}
$S.api_display=!1
$S.api_stack=!1
$R=!1
$H()}
E.userHideBubble=function(){if(O)return
$R=!0
E.setBubbleUserHidden()
$Q(!1)
$S.api_bubble=!1
$R=!1
$J()}
var $S={api_display:!1,api_stack:!1},$T
E.showWindow=function(){$U(function(){if(O){y.openPopout(!0)}
else{$T=!0
$N(B.WINDOW)
$S.api_display=B.WINDOW
$T=!1
$H()}})}
E.hideWindow=function(){if(O)return
$U(function(){$T=!0
if($c){$N(B.NONE)
$S.api_display=B.NONE}
else{$N(B.BUTTON)
$S.api_display=B.BUTTON}
$T=!1
$H()})}
E.toggleWindow=function(){if(O)return
$U(function(){if($s==B.WINDOW)E.hideWindow()
else E.showWindow()})}
E.showBanner=function(){if(O||!$D)return
$U(function(){$T=!0
$N(B.BANNER)
$S.api_display=B.BANNER
$S.api_stack=B.BANNER
$T=!1
$H()})}
E.hideBanner=function(){if(O)return
$U(function(){$T=!0
if($c){$N(B.NONE)
$S.api_display=B.NONE}
else{$N(B.BUTTON)
$S.api_display=B.BUTTON}
$S.api_stack=!1
$T=!1
$H()})}
E.showButton=function(){$U(function(){$T=!0
$N(B.BUTTON)
$S.api_display=B.BUTTON
$T=!1
$H()})}
E.hideButton=function(){$U(function(){$T=!0
if(O){$S.api_display=B.NONE
$N(B.NONE)}
else{$S.api_display=B.WINDOW
$N(B.WINDOW)}
$T=!1
$H()})}
E.hideAll=function(){$U(function(){$T=!0
$N(B.NONE)
$S.api_display=B.NONE
$T=!1
$H()})}
E.showBubble=function(){if(O)return
$U(function(){$T=!0
$Q(!0)
$S.api_bubble=!0
$T=!1
$J()})}
E.hideBubble=function(){if(O)return
$U(function(){$T=!0
$Q(!1)
$S.api_bubble=!0
$T=!1
$J()})}
E.resetBubble=function(){if(O)return
$U(function(){$T=!0
E.resetBubbleUserHidden()
$Q(!0)
$S.api_bubble=!0
$T=!1
$J()})}
E.setWindowUserHidden=function(){$j.update(!0)}
E.setBannerUserHidden=function(){$l.update(!0)}
E.setBubbleUserHidden=function(){$n.update(!0)}
E.resetBubbleUserHidden=function(){$n.update(!1)}
E.setHideWhenOffline=function($3){$h.update($3)}
function $U($3){if(V)$W($3)
else W.push($3)}
function $V($3){if(!$3||!g($3))return
for(var $4=0;$4<$3.length;$4++)$W($3[$4])}
function $W($3){try {$3()}catch($4){if(!window.console)return
if(typeof window.console.log=='function'){window.console.log('Error in LiveChatAPI call: '+$4.name+' - '+$4.message)
if(typeof window.console.dir=='function')window.console.dir($4)
window.console.log($3.toString())}}}
var $X=L.$('menu_stack_name$string')
E.showMenu=function($3){$X.update($3)}
var $Y=L.$('profile_menu').$('index$int'),$Z=H.$('profile').$('logged_in$bool'),$0=H.$('profile').$('auth').$('type$string'),$1=I.$('login').$('allowed_types_count$int'),$2=H.$('settings').$('login').$('restrict_profile$bool')
E.showProfileMenu=function(){if($2.getValue())return
E.showMenu('profile_menu')
$Y.update($Z.getValue()?($0.getValue()?1:2):(O?2:($1.getValue()?0:2)))}
E.openPopout=function(){y.openPopout.apply(y,arguments)}}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_UIController"].join('')
E.prototype.__jx__fqname="meshim_widget_controllers_UIController"}
return E})()
b.__$$__meshim_widget_widgets_Controls=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Controls
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"marginTop":"10px"},"&.mobile":{"textAlign":"center"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Controls"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Controls"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Menu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)
I.tablet(F)
I.rtl(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Menu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","minWidth":"180px","maxWidth":"360px","zIndex":"100","bottom":"$$actionBarHeight","marginBottom":"-2px","left, right":"10px","color":"$$menuColor","background":"$$menuBg","borderWidth":"$$menuBorderWidth","borderStyle":"$$menuBorderStyle","borderColor":"$$menuBorderColor","borderRadius":"$$menuRadius","boxShadow":"$$menuShadow"},"&.rtl":{"left, right":"10px"},"&.mobile":{"left":"0","top":"$$titleBarHeight","bottom":"auto","width":"100%","maxWidth":"$$mobileMaxWidthS","&.tablet":{"maxWidth":"$$mobileMaxWidth"}},"&.mobile.rtl":{"right":0}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Menu"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Menu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_input_InvalidIcon=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"warning_sign"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
I.rtl(F)})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_input_InvalidIcon
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
x.__jx__jcss={"**self":{"position":"absolute","top":"12px","right":"10px","color":"red","fontSize":"$$fontSizeXL"},"&.rtl":{"right":"auto","left":"10px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_input_InvalidIcon"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_input_InvalidIcon"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_CookieLawAPI=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_CookieLaw,z={},A
z.init=function(){A=x.root}
function B(){y.enableCookieLaw()}
z.comply=B
function C(){y.setDefaultImplicitConsent()}
z.setDefaultImplicitConsent=C
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_CookieLawAPI"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_CookieLawAPI"}
return z})()
b.__$$__meshim_widget_widgets_toast_Disconnected=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Toast,null,null,[[b.__$$__jx_ui_Widget,"message",null,[],{"id":"message","addClass":"reconnecting_toast_text"}],[b.__$$__meshim_widget_widgets_toast_disconnected_Image,"img",null,[],{"id":"img","addClass":"reconnecting_toast_image"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__message'),H=w.get(z+'__img')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Strings,M=K.root.$('connection').$('message$string'),N,O=L.connection_status,P={'idle_disconnect':1}
function Q(){F.autobind(M,'value',function(R){N=R
if(!R){F.setDisplay('none')
H.stop().reset()
return}
if(P[R]){H.stop().reset()
F.addClass('toast_disconnected')}
else{H.play()
F.removeClass('toast_disconnected')}
G.setText(O[R]||v(61))
F.setDisplay('')})
F.on('click',function(R){R.preventDefault()
P[N]&&K.livechat.reconnect()})}
Q()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_Disconnected
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Toast.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Toast
x.__jx__jcss={"**self":{"top":"50%","left":"50%","width":"160px","marginTop":"-35px","marginLeft":"-80px","textAlign":"center","&.toast_disconnected":{"cursor":"pointer"}},".reconnecting_toast_text":{"marginBottom":"10px","fontWeight":"bold"},".reconnecting_toast_image":{"display":"inline-block","width":"110px","height":"14px","backgroundPosition":"center center","backgroundRepeat":"no-repeat"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_Disconnected"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_Disconnected"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Bottom=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"bottom"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)
I.windowSize(F,'bottom_')}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Bottom
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","bottom, left":0,"width":"100%","textAlign":"center","*overflow":"hidden","paddingTop":"$$margin","paddingBottom":0,"height":"$$bottomHeight","borderWidth":"$$bottomBorderWidth","borderStyle":"$$bottomBorderStyle","borderColor":"$$bottomBorderColor","&.bottom_padding_bottom":{"paddingBottom":"$$margin","height":"$$bottomHeightBottomPadding"},"&.bottom_small":{"paddingLeft, paddingRight":"10px"},"&.bottom_medium":{"paddingLeft, paddingRight":"20px"},"&.bottom_large":{"paddingLeft, paddingRight":"50px"}},"&.note":{"height":"auto","fontSize":"$$fontSizeXS","padding":"$$margin","borderWidth":"$$bottomNoteBorderWidth","borderStyle":"$$bottomNoteBorderStyle","borderColor":"$$bottomNoteBorderColor"},"&.padding_bottom":{"height":"$$bottomHeightBottomPadding"},"&.mobile":{"position":"relative","padding":"$$margin","height":"auto"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Bottom"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Bottom"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatButton_Button=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Favicon,null,null,[],{"addClass":"favicon"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"status_text_wrapper",null,[[b.__$$__jx_ui_Label,"status_text",null,[],{"id":"status_text"}],[b.__$$__jx_ui_Label,null,null,[],{"text":" - "}]],{"addClass":"status","id":"status_text_wrapper"}],[b.__$$__jx_ui_Label,"greeting",null,[],{"id":"greeting","addClass":"greeting"}]],{"addClass":"blinds blinds_top"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"unread",null,[],{"id":"unread","addClass":"unread","text":"XX new messages"}]],{"addClass":"blinds blinds_bottom"}]],{"addClass":"button_text"}],[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}]],{"visibility":"hidden"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__status_text_wrapper'),H=w.get(z+'__status_text'),I=w.get(z+'__greeting'),J=w.get(z+'__unread')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_utils_BindClass,O=b.__$$__meshim_widget_utils_Strings,P=M.root.$('livechat'),Q=P.$('ui'),R=Q.$('chat_button'),S=R.$('display$bool'),T,U=R.$('unread_count$int'),V=0,W=P.$('account').$('status$string'),X,Y=P.$('settings').$('theme').$('chat_button').$('display_status$bool'),Z=-1,$$=P.$('settings').$('greetings'),$_=$$.$('online$string'),$a,$b=$$.$('offline$string'),$c,$d=P.$('settings').$('cookie_law').$('enabled$bool'),$e,$f=P.$('profile').$('allow_cookies$bool'),$g,$h=R.$('button_width$int'),$i=R.$('button_height$int'),$j=Q.$('theme_loaded$bool'),$k=Q.$('mobile$bool').getValue(),$l,$m
function $n(){N.rtl(F)
N.mobile(F)
if($k){J.setText('')}
F.autobind(S,'value',function($u){if(T===$u)return
T=$u
$t()})
F.autobind(U,'value',function($u){if(V===$u)return
V=$u
$t($r)})
F.autobind($_,'value',function($u){$a=$u
$t($q)})
F.autobind($b,'value',function($u){$c=$u
$t($q)})
F.autobind($f,'value',function($u){$g=$u
$t($q)})
F.autobind($d,'value',function($u){$e=$u
$t($q)})
function $q(){var $u
if($e&&(typeof $g!='undefined')&&!$g){$u=O.cookie_law[$k?'disabled_mobile':'disabled']}
else if($k){$u=X=='offline'?O.chat_button.mobile_greeting.offline:O.chat_button.mobile_greeting.online}
else{$u=X=='offline'?O.get($b):O.get($_)}
if($l==$u)return
$l=$u
I.setText($u)}
function $r(){if(V){F.addClass('unread')
if($k){J.setText(O.chat_button.unread_mobile.replace('<number>',V))}
else{J.setText(O.chat_button[V==1?'unread_one':'unread_many'].replace('<number>',V))}}
else{F.removeClass('unread')}}
F.autobind($j,'value',$o)
if(v&&v.onLanguage){v.onLanguage($s)
F.onDestruction(function(){v.unLanguage($s)})}
function $s(){$t($r,$q)}
function $t(){for(var $u=0,$v=arguments.length;$u<$v;$u++){if(h(arguments[$u])){arguments[$u]()}}
$o()}
F.autobind(Y,'value',function($u){if(Z===$u)return
Z=$u
G.setDisplay($u?'':'none')
$t()})
F.autobind(W,'value',function($u){if(X===$u)return
X=$u
H.setText(O.status[X||'offline'])
$t($q)})}
function $o(){l($p,F,!0)}
function $p(){$h.update(parseInt(F.getWidth(),10)||u.getVariable('chatButtonMinWidth'))
$i.update(parseInt(u.getVariable('chatButtonHeight'),10))
if(!$m&&$l){F.setVisibility('')
$m=!0}}
$n()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_Button
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"margin":"0 auto","position":"absolute","bottom, left":0,"overflow":"hidden","minWidth, *width":"$$chatButtonMinWidth","maxWidth":"$$chatButtonMaxWidth","height":"$$chatButtonHeight","color":"$$chatButtonColor","background":"$$chatButtonBg","boxShadow":"$$chatButtonShadow","paddingLeft":"$$faviconWidth"},"&.mobile":{"position":"relative","bottom, left":"auto","minWidth":0},"&.rtl":{"paddingLeft":0,"paddingRight":"$$faviconWidth"},".border_overlay":{"borderWidth":"$$chatButtonBorderWidth","borderStyle":"$$chatButtonBorderStyle","borderColor":"$$chatButtonBorderColor"},"**self, **self *":{"cursor":"pointer"},"&.unread":{".button_text":{"bottom":"100%"}},".blinds":{"width, height":"100%","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},"&.mobile .blinds":{"textOverflow":"clip"},".favicon":{"position":"absolute","height":"100%","left":0,"verticalAlign":"text-top","textAlign":"center","paddingTop":"8px","width":"$$faviconWidth","background":"$$faviconBg","color":"$$faviconColor"},"&.rtl .favicon":{"left":"auto","right":0},".button_text":{"position":"relative","overflow":"hidden","textOverflow":"ellipsis","verticalAlign":"text-top","whiteSpace":"nowrap","width":"100%","transition":"bottom 0.3s ease-in-out","fontWeight":"$$chatButtonFontWeight","lineHeight":"$$chatButtonHeight","paddingLeft":"$$chatButtonPaddingFavicon","paddingRight":"$$chatButtonPadding",".status":{"fontWeight":"$$chatButtonStatusFontWeight"},".unread":{}},"&.mobile .button_text":{"textOverflow":"clip"},"&.rtl .button_text":{"paddingLeft":"$$chatButtonPadding","paddingRight":"$$chatButtonPaddingFavicon"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_Button"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_iconFont_Button=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Button,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"i",null,[],{"id":"i"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__i')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
J.mobile(F)
var K
F.setIcon=function(L){if(K)G.removeClass(K)
K=L
if(K)G.addClass(K)
return G.setIcon.apply(G,arguments)}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_Button
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Button
x.__jx__jcss={"**self":{"background":"transparent","border":"none","color":"inherit",".icon_font":{"display":"inline","lineHeight":"inherit","verticalAlign":"middle","fontSize":"$$fontSizeL"}},"&.mobile":{".icon_font":{"position":"relative","fontSize":"$$fontSizeXXL","&.pencil":{"top":"4px"},"&.cross":{"top":"5px"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_iconFont_Button"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_toast_File=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Toast,null,null,[[b.__$$__jx_ui_html_div,"message",null,[],{"id":"message"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__message')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_common_FileUtil,L=b.__$$__meshim_widget_Config,M=b.__$$__meshim_widget_utils_Utils,N=b.__$$__meshim_widget_utils_Strings,O=N.file_upload.error,P=K.prettySize(L.FILE_UPLOAD_MAX,{base2:!0}),Q=3100,R=M.isStyleSupported('transition')
if(q.isFF)R=!1
var S=J.root.$('livechat').$('ui').$('chat_window').$('chat_panel').$('file_toast').$('error$string'),T,U=J.root.$('livechat').$('ui').$('popout$bool')
function V(){M.onTransitionEnd(F,F,W)
U&&r.window.on('click',W)
F.onDestruction(function(){U&&r.window.un('click',W)})
F.autobind(S,'value',function(X){if(!X){W()
return}
if(X=='size'){G.setText(O[X].replace('<size>',P))}
else{G.setText(O[X]||O['default'])}
if(T)window.clearTimeout(T)
R&&F.removeClass('fade_out')
F.setDisplay('')
R&&l(function(){F.addClass('fade_out')})
T=window.setTimeout(W,Q)})}
function W(){F.setDisplay('none')}
V()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_File
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Toast.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Toast
x.__jx__jcss={"**self":{"top":"50%","left":"50%","width":"160px","height":"auto","marginTop":"-32px","marginLeft":"-80px","padding":"10px","textAlign":"center","fontWeight":"bold","transition":"opacity 0.5s linear 2.5s","opacity":1,"&":"$$fileToast","&.fade_out":{"opacity":0}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_File"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_File"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_TextArea=(function(){var x=b.__$$__jx_ui_TextField
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='textarea')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.setCols=function(z){this.dom.cols=z
return this}
y.prototype.getCols=function(){return this.dom.cols}
y.prototype.setRows=function(z){this.dom.rows=z
return this}
y.prototype.getRows=function(){return this.dom.rows}
y.prototype.setResize=function(z){if(!('resize' in this.style))return
this.style.resize=z}
y.prototype.getInitialValue=function(){return q.engineIE<=8?this._initialValue:this.getText()}
y.prototype.setInitialValue=function(z){if(q.engineIE<=8)this._initialValue=z&&(z.toString?z.toString():z)
else this.setText(z)
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_TextArea"].join('')
y.prototype.__jx__fqname="jx_ui_TextArea"}
return y})()
b.__$$__meshim_widget_widgets_ChatWindowContent=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_AbsolutePaddingContainer,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_utils_BindClass,K=I.root.$('livechat').$('ui').$('mobile$bool').getValue()
function L(){J.mobile(F)
J.tablet(F)}
var M=F.setAbsPaddingBottom
F.setAbsPaddingBottom=function(){if(K)return
M.apply(F,arguments)}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ChatWindowContent
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_AbsolutePaddingContainer.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_AbsolutePaddingContainer
x.__jx__jcss={"**self":{},"&.mobile":{"margin":"0 auto","height":"auto","border":"none","maxWidth":"$$mobileMaxWidthS"},"&.tablet":{"maxWidth":"$$mobileMaxWidth"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatWindowContent"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ChatWindowContent"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings,J
F.setDataNode=function(M){if(M==J)return
if(J)F.autounbind(J,'value',K)
J=M
if(J)F.autobind(J,'value',K)}
function K(M){if(!M)return
if('msg$string' in M){var N=M.msg$string,O=N.match(/There are currently ([0-9]+) visitor/)
if(O){N=I.system_msg.queue.replace('<number>',O[1])}
F.setText(N||'')}}
function L(){}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_GenericSystemMsg"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_GenericSystemMsg"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings,J=I.chat_log['chat.changename'],K
function L(){F.setDataNode=M}
function M(O){if(K)F.autounbind(K,'value',N)
K=O
F.autobind(K,'value',N)}
function N(){var O=K.getValue()
if(!O)return
var P=O['display_name$string'],Q=O['new_display_name$string'],R=''
if(P&&Q){R=J.replace('<old_name>',P).replace('<new_name>',Q)}
F.parentNode.setDisplay(R?'':'none')
F.setText(R)}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_NameChange"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_NameChange"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_utils_Strings,K=b.__$$__meshim_widget_controllers_GoogleAnalytics,L=J.chat_log,M,N=I.root.$$('connection.reattached_timestamp$int'),O
function P(){F.setDataNode=Q
N.on('value',function(S){O=S})}
function Q(S){if(M)F.autounbind(M,'value',R)
M=S.$('display_name$string')
F.autobind(M,'value',R)}
function R(S){var T=M.parentNode.getValue('nick$string')||''
T=T.split(':')[0]
var U=M.parentNode.getValue('type$string')
if(!T||!S){if(U==='chat.memberleave'&&T==='visitor');
else{F.parentNode.setDisplay('none')
return}}
F.parentNode.setDisplay('')
var V=M.parentNode.getValue('timestamp$int'),W=L[U]||''
W=W.replace('<name>',S)
if(T=='visitor'){if(U!='chat.memberleave'){W=J.chat_log['chat.visitorjoin']
F.parentNode.addClass('visitor_join')}
else{W=J.chat_log['chat.visitorleave']
F.parentNode.addClass('visitor_leave')}}
if(T=='agent'&&U=='chat.memberjoin'){if(O&&V>O){K.trackEvent('Served by Operator',S)}}
F.setText(W)}
P()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_MemberChange"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_MemberChange"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Theme=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B
z.init=function(C){A=C
B=x.root
z.setTheme=A.generateLimitedFunction('theme.setTheme',2,function(G){y.callOnRegistered(function(){y.saveAPISettings({theme:{name$string:G.toString()}})
B.$$('livechat.settings.theme.name$string').update(G.toString())},!0)})
function D(G,H){if(!G||!y.isHexColor(G))throw 'Invalid color. Must be in hexadecimal format ("#AABBCC")'
if(!H||!x.livechat.getLimit())H='primary'
var I={}
I[H]=G
E(I)}
z.setColor=D
function E(G){if(!G||typeof G!='object')throw 'Must pass an object containing the desired colors in hexadecimal format (#AABBCC)'
y.callOnRegistered(function(){var H,I={}
for(var J in G)if(G.hasOwnProperty(J)){H=J+'$string'
if(H=='badge$string'){H='banner$string'}
if(G[J]&&y.isHexColor(G[J])){I[H]=G[J]}}
y.saveAPISettings({theme:{colors:I}})
B.$$('livechat.settings.theme.colors').update(I)},!0)}
z.setColors=A.generateLimitedFunction('theme.setColors',1,E)
function F(){y.callOnRegistered(function(){B.$$('livechat.ui').update({'theme_reload$bool':!0})})}
z.reload=F}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Theme"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Theme"}
return z})()
b.__$$__meshim_widget_widgets_ScrollableFrame=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"inner",null,[[b.__$$__jx_ui_Widget,"inside",null,[],{"id":"inside","addClass":"scrollable_inside","container":"default"}]],{"id":"inner","addClass":"scrollable_inner"}],[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"scrollable_fixed_top"}],[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"scrollable_fixed_bottom"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__inner'),H=w.get(z+'__inside')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=H
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_BindClass,M=K.root.$('livechat').$('ui').$('theme_loaded$bool'),N=K.root.$$('livechat.ui.mobile$bool'),O
G.on('scroll',P)
function P(){if(O)window.clearTimeout(O)
O=window.setTimeout(Q,10)}
function Q(){if(O)window.clearTimeout(O)
O=null
if(!F.dom)return
F[(R()?'addClass':'removeClass')]('scroll_top')
F[(S()?'addClass':'removeClass')]('scroll_bottom')
F[(T()?'addClass':'removeClass')]('scrollable')}
function R(){return !G.getScrollTop()}
function S(){return G.getScrollTop()+G.getHeight()>=G.getScrollHeight()}
function T(){return G.getScrollHeight()>G.getHeight()}
function U(){F.autobind(M,'value',P)
P()
L.mobile(F)
L.popout(F)
L.windowSize(F,'sf_')
if(N.getValue()){F.addClass('mobile')}
if(v&&v.onLanguage){v.onLanguage(V)
V()
F.onDestruction(W)}
function V(){H.style.direction=v.rtl()?'rtl':'ltr'}
function W(){v.unLanguage(V)}}
F.updateScrollStyles=P
F.getScrollHeight=function(){return G.getScrollHeight()}
F.getScrollTop=function(){return G.getScrollTop()}
F.getHeight=function(){return G.getHeight()}
F.setScrollTop=function(V){return G.setScrollTop(V)}
U()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ScrollableFrame
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self, .scrollable_inner":{"position":"relative","width, height":"100%"},".scrollable_inner":{"overflowX":"hidden","overflowY":"auto","paddingBottom":"0 !important","direction":"ltr"},".scrollable_fixed_top, .scrollable_fixed_bottom":{"position":"absolute","left, right":0,"pointerEvents":"none"},".scrollable_fixed_top":{"top":0,"height":"$$scrollableFrameTopHeight","background":"$$scrollableFrameTopBackground","backgroundColor":"$$scrollableFrameTopBackgroundColor"},".scrollable_fixed_bottom":{"bottom":0,"height":"$$scrollableFrameBottomHeight","background":"$$scrollableFrameBottomBackground","backgroundColor":"$$scrollableFrameBottomBackgroundColor"},"&.scroll_top .scrollable_fixed_top":{"display":"none"},"&.scroll_bottom .scrollable_fixed_bottom":{"display":"none"},"&.scroll .scrollable_inner":{},"&.sf_small":{"padding":"$$scrollableFramePaddingSmall",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingSmall"}},"&.sf_medium":{"padding":"$$scrollableFramePaddingMedium",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingMedium"}},"&.sf_large":{"padding":"$$scrollableFramePaddingLarge",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingLarge"}},"&.popout":{"@media only screen and (max-width: 300px)":{"padding":"$$scrollableFramePaddingSmall",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingSmall"}},"@media only screen and (min-width: 300px) and (max-width: 500px)":{"padding":"$$scrollableFramePaddingMedium",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingMedium"}},"@media only screen and (min-width: 500px)":{"padding":"$$scrollableFramePaddingLarge",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingLarge"}}},"&.mobile":{"borderBottom":"none"},"&.popout.mobile":{".scrollable_inner":{"padding":"10px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ScrollableFrame"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ScrollableFrame"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,"days_el",null,[],{"id":"days_el","addClass":"short"}],[b.__$$__meshim_widget_widgets_Body,"periods_el",null,[],{"id":"periods_el"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__days_el'),H=w.get(z+'__periods_el')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_utils_Utils,L=b.__$$__meshim_widget_utils_Strings,M=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period,N=b.__$$__jx_ui_Label,O=b.__$$__jx_ui_Widget,P=7,Q=L.datetime.days,R=0,S=24*60
F.setData=function(V){if(!V||!V.days||!V.periods)return
G.empty()
var W=V.days
if(W.length==P){G.setText(L.datetime.everyday)}
else{W=T(U(W))
for(var X=0,Y=W.length;X<Y;X++){new N(G,null,null,null,{text:W[X]})}}
H.empty()
var Z=V.periods,$$
if(!V.enabled$bool){H.setText(L.pre_chat_offline_form.operating_hours.closed)}
else{for(var $_ in Z)if(Z.hasOwnProperty($_)){if(Z[$_].start$int===R&&Z[$_].end$int===S){$$=new O(H)
$$.setText(L.datetime.all_day)}
else{$$=new M(H)
$$.setStart(K.formatMinutesAsHours(Z[$_].start$int))
$$.setEnd(K.formatMinutesAsHours(Z[$_].end$int))}}}}
function T(V){for(var W=0,X=V.length;W<X;W++){if(!j(V[W]))continue
V[W]=Q[V[W]]}
return V}
function U(V){var W=[],X,Y,Z
for(var $$=0,$_=V.length;$$<$_;$$++){if(typeof V[$$]!='number')return V
X=V[$$]
Y=V[$$-1]
Z=V[$$+1]
if($$>V[$$])X+=P
if($$-1>V[$$-1])Y+=P
if($$+1>V[$$+1])Z+=P
if($$&&(Y==X-1)){if(($$==$_-1)||(Z!=X+1)){W.push(' — ',V[$$])}
else{continue}}
else{$$&&W.push(', ')
W.push(V[$$])}}
return W}})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Button=(function(){var x=b.__$$__jx_ui_Button,y=x,z=b.__$$__jx_ui_Widget,A=b.__$$__meshim_widget_controllers_DataController,B=b.__$$__meshim_widget_utils_BindClass
x=function(D,E,F,G,H){if(!(this instanceof x))return new x(D,E,F,G,H)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
if(!H)H={}
H.type||(H.type='button')
y.call(this,D,E,F,G,H)
B.mobile(this)
B.rtl(this)
var I=this
if(G&&G.length==1&&(typeof G[0]=='string'||G[0].bind)){if(v&&v.onLanguage){v.onLanguage(J)
this.onDestruction(function(){v.unLanguage(J)})}
this.autobind(A.root.$('livechat').$('ui').$('theme_loaded$bool'),'value',function(K){if(K)I.fixOverflowTitle()})}
function J(){I.fixOverflowTitle()}}
x.__jx__jcss={"**self":{"appearance":"none","width":"48%","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","color":"$$buttonColor","background":"$$buttonBg","paddingTop, paddingBottom":"$$buttonPadding","paddingLeft, paddingRight":"$$buttonPaddingHorizontal","borderWidth":"$$buttonBorderWidth","borderStyle":"$$buttonBorderStyle","borderColor":"$$buttonBorderColor","borderRadius":"$$buttonRadius","boxShadow":"$$buttonShadow","fontWeight":"$$buttonFontWeight","&:hover, &:focus":{"color":"$$buttonHoverColor","background":"$$buttonHoverBg","borderColor":"$$buttonHoverBorderColor","boxShadow":"$$buttonHoverShadow"},"&:active":{"color":"$$buttonActiveColor","background":"$$buttonActiveBg","borderColor":"$$buttonActiveBorderColor","boxShadow":"$$buttonActiveShadow"}},"&.secondary":{"margin":"0 0 0 4%","color":"$$buttonSecColor","background":"$$buttonSecBg","borderColor":"$$buttonSecBorderColor","boxShadow":"$$buttonSecShadow","&:hover, &:focus":{"color":"$$buttonSecHoverColor","background":"$$buttonSecHoverBg","borderColor":"$$buttonSecHoverBorderColor","boxShadow":"$$buttonSecHoverShadow"},"&:active":{"color":"$$buttonSecActiveColor","background":"$$buttonSecActiveBg","borderColor":"$$buttonSecActiveBorderColor","boxShadow":"$$buttonSecActiveShadow"}},"&.rtl.secondary":{"margin":"0 4% 0 0","*margin":"0 0 0 4%"},"&.fit":{"width":"auto","paddingLeft, paddingRight":"$$buttonPadding"},"&.wide":{"width":"100%"},"&.short":{"paddingTop, paddingBottom":"$$buttonShortPadding"},"&.short.mobile":{"paddingTop, paddingBottom":"$$buttonPadding"},"&.short.mobile.short_mobile":{"paddingTop, paddingBottom":"$$buttonShortPadding"}}
x.prototype=e(y.prototype)
var C=['fontFamily','fontSize','fontWeight','fontStyle']
x.prototype.fixOverflowTitle=function(){if(v.language=='en'){this.setTitle('')
return}
if(!x.dummy){x.dummy=new z(this.doc.body,null,null,null,{position:'absolute',visibility:'hidden'})}
var D=this.getText(),E=this.getComputedStyle()
for(var F=0,G=C.length;F<G;F++){x.dummy.style[C[F]]=E[C[F]]}
x.dummy.setText(D)
var H=x.dummy.getWidth(),I=parseInt(E.width,10)||0-(parseInt(E.paddingLeft,10)||0)-(parseInt(E.paddingRight,10)||0)-(parseInt(E.borderLeftWidth,10)||0)-(parseInt(E.borderRightWidth,10)||0)
this.setTitle(H>0&&I>0&&H>I?D:'')}
x.prototype.__jx__super=y
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Button"}
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Departments=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B,C,D
z.init=function(){A=x.root
B=A.$('livechat').$('departments')
C=A.$('livechat').$('profile').$('department_id$string')}
function E(){if(B){B.unbindKeys(F)
B.update({filter_enabled$bool:!1})}
D={}
var N=0,O
for(var P=0,Q=arguments.length;P<Q;P++){O=arguments[P]
if(typeof O!='number')O=M(O)
if(!O)continue
D[O]=!0
N++}
if(!N)return
B.update({filter_enabled$bool:!0})
B.bindKeys(F)}
function F(N){if(!N.length)return
var O={}
for(var P=0;P<N.length;P++){var Q=N[P]
if(Q=='filter_enabled$bool')continue
O[Q]={display$bool:Q in D}}
B.update(O)}
z.filter=E
function G(N){y.callOnRegistered(function(){H(N)})}
function H(N){if(typeof N!='number')N=M(N)
if(!N)return
var O=B.$(N).$('status$string').getValue()
if(!O||O=='offline'){window.console&&window.console.log('Zopim: Specified department is offline.')
return}
C.parentNode.write({department_id$string:N})}
z.setVisitorDepartment=G
function I(){y.callOnRegistered(J)}
function J(){C.parentNode.write({department_id$string:null})}
z.clearVisitorDepartment=I
function K(N){if(typeof N!='number')N=M(N)
if(!N)return
var O=B.$(N).getValue()
if(!O)return
return {id:N,name:O.name$string,status:O.status$string}}
z.getDepartment=K
function L(){var N=B.getValue(),O=[]
for(var P in N)if(N.hasOwnProperty(P)){O.push({id:parseInt(P,10),name:N[P].name$string,status:N[P].status$string})}
return O}
z.getAllDepartments=L
function M(N){N=N&&N.toString()
if(!N)return
var O=B.getValue()
for(var P in O)if(O.hasOwnProperty(P)){if(O[P].name$string==N){return parseInt(P,10)}}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Departments"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Departments"}
return z})()
b.__$$__jx_ui_ButtonBar=(function(){var x=b.__$$__jx_ui_Button,y=b.__$$__jx_ui_Widget,z=b.__$$__jx_ui_HTMLElement
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
this.navStack=null
y.call(this,B,C,D,E,F)
this.addClass('button_bar')
F.initialValue&&this.setValue(F.initialValue)
this.on('click',function(G){var H=G&&G.target&&G.target.jx_wrapper
if(!H||H===this)return
while(H.parentNode&&(H.parentNode!=this))H=H.parentNode
if(this.getDisabled()||H.getDisabled())return
var I=H.getValue()
if(I===''||I==null)return
this.setValue(I)
this.fire('change')})
this.onDestruction(function(){this.navStack=null})}
;
A.prototype=e(y.prototype)
A.prototype.appendChild=function(B){var C=this.children.length
if(g(B)){if(this.attributes&&!n(this.attributes['noMangle']))B[0]=x}
z.prototype.appendChild.call(this,B)
if(g(B)){this.children[C].addClass('option')
j(this.tabIndex)&&this.children[C].setTabIndex(this.tabIndex+C)}}
A.prototype.setNoMangle=function(B){this.attributes.noMangle=n(B)}
A.prototype.setValue=function(B){for(var C=0,D=this.children.length;C<D;C++){if(this.children[C].getValue()==B){this.dom.value=this.children[C].getValue()
this.children[C].addClass('active')}
else{this.children[C].removeClass('active')}}}
A.prototype.getInitialValue=function(){return this._initialValue}
A.prototype.setInitialValue=function(B){this._initialValue=B}
A.prototype.reset=function(){this.setValue(this.getInitialValue())}
A.prototype.setLabel=function(B,C){for(var D=0,E=this.children.length;D<E;D++)if(this.children[D].getValue()==B)this.children[D].setText(C)}
A.prototype.getTabIndex=function(){return this.tabIndex}
A.prototype.setTabIndex=function(B){this.tabIndex=parseInt(B,10)||0
for(var C=0,D=this.children.length;C<D;C++)this.children[C].setTabIndex(this.tabIndex+C)
return this}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_ui_ButtonBar"].join('')
A.prototype.__jx__fqname="jx_ui_ButtonBar"}
return A})()
b.__$$__meshim_widget_widgets_gravatar_GravatarFour=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image4",null,[],{"id":"image4","addClass":"avatar avatar4"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image3",null,[],{"id":"image3","addClass":"avatar avatar3"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarFour"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image4'),H=w.get(z+'__image3'),I=w.get(z+'__image2'),J=w.get(z+'__image1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){F.setImages=M
F.setNodes=N
function M(O){if(!(O instanceof Array))return
J.setSrc(O[0])
I.setSrc(O[1])
H.setSrc(O[2])
G.setSrc(O[3])}
function N(O){if(!(O instanceof Array))return
J.setDataNode(O[0])
I.setDataNode(O[1])
H.setDataNode(O[2])
G.setDataNode(O[3])}})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarFour
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden","lineHeight":"0px",".avatar":{"position":"absolute","width":"50%","height":"50%"},".avatar1":{"top":0,"left":0,"borderTop":"0px none","borderLeft":"0px none"},".avatar2":{"top":0,"right":0,"borderTop":"0px none","borderRight":"0px none","borderLeft":"0px none"},".avatar3":{"bottom":0,"left":0,"borderTop":"0px none","borderBottom":"0px none","borderLeft":"0px none"},".avatar4":{"bottom":0,"right":0,"border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarFour"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarFour"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_gravatar_GravatarThree=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image3",null,[],{"id":"image3","addClass":"avatar avatar3"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarThree"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image3'),H=w.get(z+'__image2'),I=w.get(z+'__image1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){F.setImages=L
F.setNodes=M
function L(N){if(!(N instanceof Array))return
I.setSrc(N[0])
H.setSrc(N[1])
G.setSrc(N[2])}
function M(N){if(!(N instanceof Array))return
I.setDataNode(N[0])
H.setDataNode(N[1])
G.setDataNode(N[2])}})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarThree
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden",".avatar1":{"position":"absolute","top":"0","left":"-33%","width":"100%","height":"100%","borderLeft":"0px none","borderTop":"0px none","borderBottom":"0px none"},".avatar2":{"position":"absolute","top":"0","right":"-8%","width":"50%","height":"50%","borderLeft":"0px none","borderTop":"0px none","borderRight":"0px none"},".avatar3":{"position":"absolute","bottom":"0","right":"-8%","width":"50%","height":"50%","border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarThree"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarThree"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_gravatar_GravatarTwo=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarTwo"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image2'),H=w.get(z+'__image1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){F.setImages=K
F.setNodes=L
function K(M){if(!(M instanceof Array))return
H.setSrc(M[0])
G.setSrc(M[1])}
function L(M){if(!(M instanceof Array))return
H.setDataNode(M[0])
G.setDataNode(M[1])}})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarTwo
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden",".avatar":{"width":"100%","height":"100%"},".avatar1":{"position":"absolute","top":"0","left":"-33%","borderTop":"0px none","borderLeft":"0px none","borderBottom":"0px none"},".avatar2":{"position":"absolute","top":"0","left":"33%","border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarTwo"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarTwo"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_gravatar_GravatarOne=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image",null,[],{"id":"image","addClass":"avatar"}]],{"class":"gravatarOne"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){F.setImages=J
F.setNodes=K
function J(L){if(!(L instanceof Array))return
G.setSrc(L[0])}
function K(L){if(!(L instanceof Array))return
G.setDataNode(L[0])}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarOne
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%",".avatar":{"width":"100%","height":"100%","border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarOne"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarOne"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Concierge=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B
z.init=function(D){A=D
B=x.root
z.setAvatar=A.generateLimitedFunction('concierge.setAvatar',1,function(G){G=G||''
C({"avatar_path$string":G})})
function E(G){G=G||''
C({"display_name$string":G})}
z.setName=E
function F(G){G=G||''
C({"title$string":G})}
z.setTitle=F}
function C(D){y.callOnRegistered(function(){y.saveAPISettings({concierge:D})
B.$$('livechat.settings.concierge').update(D)},!0)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Concierge"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Concierge"}
return z})()
b.__$$__meshim_widget_widgets_form_CheckBoxMultiple=(function(){var x=b.__$$__jx_ui_CheckBox,y=b.__$$__meshim_widget_widgets_form_InputMultiple
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
this.optionConstructor=x
this.inputSuffix='checkbox'
y.call(this,A,B,C,D,E)}
z.prototype=e(y.prototype)
z.prototype.setValue=function(A){var B=g(A)?A:A.split(','),C,D
for(var E=0,F=this.options.length;E<F;E++){C=!1
for(var G=0,H=B.length;G<H;G++){if(this.options[E].getValue()==B[G]){this.options[E].setChecked(!0);(this.options[E].container||this.options[E]).setDisplay('')
this.labels[E].setDisplay('').addClass('label_checked')
C=!0
break}}
if(C){D=E}
else{(this.options[E].container||this.options[E]).removeClass('last-checked')
this.labels[E].removeClass('last-checked')
this.options[E].setChecked(!1)
if(this.readOnly){(this.options[E].container||this.options[E]).setDisplay('none')
this.labels[E].setDisplay('none').removeClass('label_checked')}}}
if(D!=a){(this.options[D].container||this.options[D]).addClass('last-checked')
this.labels[D].addClass('last-checked')}}
z.prototype.getValue=function(){var A=[]
for(var B=0,C=this.options.length;B<C;B++)if(this.options[B].getChecked())A.push(this.options[B].getValue())
return A.join(',')}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_CheckBoxMultiple"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_form_CheckBoxMultiple"}
return z})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"text",null,[],{"id":"text","addClass":"text_name"}],[b.__$$__jx_ui_html_div,"change_name",null,[v(147),[b.__$$__jx_ui_html_span,"click_to_change",null,[[b.__$$__jx_ui_html_span,null,null,[" - "],{}],v(148)],{"id":"click_to_change"}]],{"id":"change_name"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__text'),H=w.get(z+'__change_name'),I=w.get(z+'__click_to_change')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_controllers_UIController,N=b.__$$__meshim_widget_utils_Utils,O,P='',Q='',R=L.root.$$('livechat.profile.display_name$string'),S=L.root.$$('connection.reattached_timestamp$int'),T=L.root.$$('livechat.ui.mobile$bool'),U=L.root.$('livechat').$('settings').$('login').$('restrict_profile$bool'),V='chat.file.update'
function W(){F.setDataNode=X
F.autobind(R,'value',$_)
F.autobind(U,'value',function($b){F.setStyle('cursor',$b?'auto':'')
I.setDisplay($b?'none':'')})}
function X($b){if(O)F.autounbind(O,'value',Y)
O=$b
F.autobind(O,'value',Y)}
function Y($b){if(!$b)return
if($b['type$string']==V)return
if($b['nick$string'])Z($b['nick$string'],$b['timestamp$int'])
if($b['display_name$string'])$$($b['display_name$string'])}
function Z($b,$c){if(!$b)return
P=$b.split(':')[0]
if(P=='visitor'&&Q)$$(Q)
if((P=='agent')&&S.getValue()&&($c>S.getValue())){L.root.$$('livechat.ui.sounds').update({'new_message$int':+new Date()})}
if(P=='visitor'&&!$a.bounded){F.addClass('cursor_pointer')
F.on('click',$a)
$a.bounded=!0}}
function $$($b){if(P=='visitor'){if(!Q){if(N.isDefaultName($b)){$b=''
H.setDisplay('')}
else{H.setDisplay('none')}
Q=$b}
G.setText(Q)}
else{G.setText($b)
H.setDisplay('none')}}
function $_($b){if(!$b||(typeof $b!='string')||(P&&P!='visitor'))return
if(N.isDefaultName($b)){$b=''
H.setDisplay('')}
else{H.setDisplay('none')}
Q=$b
G.setText(Q)}
function $a($b){if(T.getValue()){if(!N.isDefaultName(R.getValue()))return
else window.scrollTo(0,0)}
$b.stopPropagation()
M.showProfileMenu()}
W()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"&.cursor_pointer":{"cursor":"pointer"},".text_name":{"*display":"inline","wordWrap":"break-word"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatName"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatName"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Button=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_Theme,A=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,B={},C,D,E
B.init=function(N){C=N
D=x.root
E=D.$$('livechat.ui.mobile$bool').getValue()
B.setColor=C.generateDeprecatedFunction('button.setColor','$zopim.livechat.theme.setColor',function(){return z.setColor.apply(this,arguments)})
function O(P){P=n(P)
A.callOnRegistered(function(){y.setHideWhenOffline(P)},!0)}
B.setHideWhenOffline=C.generateLimitedFunction('button.setHideWhenOffline',1,O)}
function F(){A.callOnRegistered(function(){y.hideButton()})}
B.hide=F
function G(){A.callOnRegistered(function(){y.showButton()})}
B.show=G
function H(N){N=parseInt(N)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_button:{v_offset$int:N}}})
D.$$('livechat.settings.theme.chat_button').update({'v_offset$int':N})},!0)}
B.setOffsetBottom=B.setOffsetVertical=H
function I(N){N=parseInt(N)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_button:{v_offset_mobile$int:N}}})
D.$$('livechat.settings.theme.chat_button').update({'v_offset_mobile$int':N})},!0)}
B.setOffsetVerticalMobile=I
function J(N){N=parseInt(N)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_button:{h_offset$int:N}}})
D.$$('livechat.settings.theme.chat_button').update({'h_offset$int':N})},!0)}
B.setOffsetHorizontal=J
function K(N){N=parseInt(N)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_button:{h_offset_mobile$int:N}}})
D.$$('livechat.settings.theme.chat_button').update({'h_offset_mobile$int':N})},!0)}
B.setOffsetHorizontalMobile=K
function L(N){if(E)return
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_button:{position$string:N}}})
D.$$('livechat.settings.theme.chat_button.position$string').update(N)},!0)}
B.setPosition=L
function M(N){A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_button:{position_mobile$string:N}}})
D.$$('livechat.settings.theme.chat_button.position_mobile$string').update(N)},!0)}
B.setPositionMobile=M
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Button"].join('')
B.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Button"}
return B})()
b.__$$__meshim_widget_controllers_liveChatAPI_Bubble=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,A={},B,C
A.init=function(I){B=I
C=x.root
A.setColor=B.generateLimitedFunction('bubble.setColor',1,function J(K){return B.theme.setColor(K,'bubble')})}
function D(){z.callOnRegistered(function(){y.showBubble()})}
A.show=D
function E(){z.callOnRegistered(function(){y.hideBubble()})}
A.hide=E
function F(){z.callOnRegistered(function(){y.resetBubble()})}
A.reset=F
function G(I){if(!I||typeof I!='string')return
z.callOnRegistered(function(){z.saveAPISettings({bubble:{title$string:I}})
C.$$('livechat.settings.bubble').update({'title$string':I})},!0)}
A.setTitle=G
function H(I){if(!I||typeof I!='string')return
z.callOnRegistered(function(){z.saveAPISettings({bubble:{text$string:I}})
C.$$('livechat.settings.bubble').update({'text$string':I})},!0)}
A.setText=H
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Bubble"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Bubble"}
return A})()
b.__$$__meshim_widget_controllers_liveChatAPI_Badge=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,A={},B,C
A.init=function(E){B=E
C=x.root
A.setLayout=(function(){var I=['image_right','image_left','text_only','image_only'],J=I.join(', ')
return B.generateLimitedFunction('badge.setLayout',1,function(K){z.callOnRegistered(function(){if(!K||f(K,I)==-1){window.console&&console.log('Invalid layout. Valid layouts: '+J)
return}
D({"layout$string":K})},!0)})})()
A.setImage=B.generateLimitedFunction('badge.setImage',1,function(I){z.callOnRegistered(function(){I=I||''
D({"image_path$string":I})},!0)})
A.setColor=B.generateLimitedFunction('badge.setColor',1,function(I){return B.theme.setColor(I,'badge')})
function F(I){z.callOnRegistered(function(){I=I||''
D({"text$string":I})},!0)}
A.setText=F
function G(){z.callOnRegistered(function(){y.showBanner()})}
A.show=G
function H(){z.callOnRegistered(function(){y.hideBanner()})}
A.hide=B.generateLimitedFunction('badge.hide',1,H)}
function D(E){z.callOnRegistered(function(){z.saveAPISettings({banner:E})
C.$$('livechat.settings.banner').update(E)},!0)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Badge"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Badge"}
return A})()
b.__$$__meshim_widget_widgets_branding_Zopim=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_branding_Link,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"brand"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_common_QueryString,J=b.__$$__meshim_widget_Config,K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Strings,M=K.root.$('livechat'),N=M.$('ui').$('popout$bool'),O=M.$('account').$('key$string')
function P(){F.autobind(N,'value',R)
F.autobind(O,'value',R)
if(v&&v.onLanguage){v.onLanguage(Q)
F.onDestruction(function(){v.unLanguage(Q)})}
Q()}
function Q(){R(),F.setTitle(L.branding.title)}
function R(){var S={'utm_campaign':'Iref','utm_source':N.getValue()?I().get('hostname'):window.location.hostname,'utm_medium':'widget','utm_term':'new-widget','utm_content':O.getValue(),'iref':O.getValue(),'lang':v.language},T=I.buildQuery(S)
F.setHref([J.BRANDING_URL,'?',T].join(''))}
P()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_branding_Zopim
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_branding_Link.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_branding_Link
x.__jx__jcss={"**self":{"fontSize":"11px"},"&.mobile":{"fontSize":"12px"},".meshim_widget_widgets_IconFont":{"lineHeight":"inherit","paddingTop":"1px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_branding_Zopim"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_branding_Zopim"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_branding_Zendesk=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_branding_Link,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"brand_zendesk"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings
function J(){if(v&&v.onLanguage){v.onLanguage(K)
F.onDestruction(function(){v.unLanguage(K)})}
K()}
function K(){L()
F.setTitle(I.branding.title_zendesk)}
function L(){F.setHref('https://www.zendesk.com/lp/just-one-click?utm_source=chat&utm_medium=poweredbyzendesk&utm_campaign=image')}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_branding_Zendesk
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_branding_Link.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_branding_Link
x.__jx__jcss={"**self":{"fontSize":"14px"},"&.mobile":{},".meshim_widget_widgets_IconFont":{"lineHeight":"inherit","paddingTop":"1px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_branding_Zendesk"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_branding_Zendesk"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_card_EndChatCard=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_widgets_card_TextCard,z=b.__$$__meshim_widget_widgets_Button,A=b.__$$__meshim_widget_controllers_DataController
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
y.call(this,C,D,E,F,G)
if(!B.__jx__jcss_generated){u.generate(this,B.prototype.__jx__fqname,B.__jx__jcss,null,B)
B.__jx__jcss_generated=!0}
this.buttonsContainer=new x(this.defaultPlacement,null,null,null,{'addClass':'buttons_container'})
this.yes=new z(this.buttonsContainer,null,null,[v(153)],{addClass:'button_yes short'})
this.no=new z(this.buttonsContainer,null,null,[v(154)],{addClass:'button_no secondary short'})
var H=this
this.yes.on('click',function(){A.livechat.endChat()})
this.no.on('click',function(){H.$node&&H.$node.update({'minimized$bool':!0})})}
B.prototype=e(y.prototype)
B.__jx__jcss={".buttons_container":{"textAlign":"center"},"&.minimized":{".button_yes, .button_no":{"display":"none"}}}
B.prototype.__jx__super=y
B.prototype.update=function(C){y.prototype.update.call(this,C)}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_EndChatCard"].join('')
B.prototype.__jx__fqname="meshim_widget_widgets_card_EndChatCard"}
return B})()
b.__$$__meshim_widget_widgets_card_FormCard=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_widgets_card_TextCard,A=b.__$$__meshim_widget_widgets_Button
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
z.call(this,C,D,E,F,G)
if(!B.__jx__jcss_generated){u.generate(this,B.prototype.__jx__fqname,B.__jx__jcss,null,B)
B.__jx__jcss_generated=!0}
this.fields=new x(this.defaultPlacement,null,null,null,{tagName:'ul',addClass:'fields'})
this.yes=new A(this.defaultPlacement,null,null,[v(155)],{addClass:'button_yes short'})
var H=this
this.yes.on('click',function(){var I=y.root.$('livechat').$('settings').$('forms').$('card_form'),J=I.$('form')
I.$('profile_required$bool').update(H.nodeValue['profile_required$bool'])
J.update(null)
J.update(H.nodeValue['form'])
y.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string').update('card_form')})}
B.prototype=e(z.prototype)
B.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},"&.minimized":{".fields, .button_yes":{"display":"none"}},".fields":{"marginTop":"5px","paddingLeft":"20px","fontWeight":"bold"}}
B.prototype.__jx__super=z
B.prototype.update=function(C){z.prototype.update.call(this,C)
if(!C)return
if('form' in C){var D=this.$node.$('form').getValue(),E=this.$node.$('profile_required$bool').getValue()
this.fields.empty()
if(E){new x(this.fields,null,null,[v(156)],{tagName:'li'})}
for(var F in D)if(D.hasOwnProperty(F)){new x(this.fields,null,null,[D[F]['label$string']],{tagName:'li'})}}}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_FormCard"].join('')
B.prototype.__jx__fqname="meshim_widget_widgets_card_FormCard"}
return B})()
b.__$$__meshim_widget_widgets_TitleBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"title_text",null,[],{"id":"title_text","addClass":"title_text"}],[b.__$$__jx_ui_Label,"status_text",null,[],{"id":"status_text","addClass":"status_text","display":"none"}]],{"addClass":"title"}],[b.__$$__jx_ui_Widget,"icons",null,[[b.__$$__meshim_widget_widgets_IconFont,"popout_button",null,[],{"id":"popout_button","icon":"popout","title":v(136)}],[b.__$$__meshim_widget_widgets_IconFont,"minimize_button",null,[],{"id":"minimize_button","icon":"minimize","title":v(25),"addClass":"last_child"}]],{"id":"icons","addClass":"icons"}]],{"class":"title_bar","selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__title_text'),H=w.get(z+'__status_text'),I=w.get(z+'__icons'),J=w.get(z+'__popout_button'),K=w.get(z+'__minimize_button')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=b.__$$__meshim_widget_controllers_PopoutController,P=b.__$$__meshim_widget_controllers_UIController,Q=b.__$$__meshim_widget_utils_Strings,R=b.__$$__meshim_widget_utils_BindClass,S=N.root.$('livechat'),T=S.$('settings').$('chat_window').$('title_bar').$('title$string'),U=S.$('settings').$('chat_window').$('title_bar').$('status_messages'),V,W=S.$('settings').$('popout').$('enabled$bool'),X,Y,Z=S.$('ui').$('popout$bool'),$$,$_=S.$('account').$('status$string'),$a,$b=S.$('settings').$('theme').$('chat_window').$('title_bar').$('hide_minimize$bool'),$c,$d=S.$('settings').$('theme').$('chat_window').$('title_bar').$('hide_popout$bool'),$e
F.setHidePopout=function($j){Y=n($j)
$g()}
function $f(){R.mobile(F)
R.rtl(F)
R.windowPosition(F)
F.autobind(Z,'value',function($j){$$=$j
$g()
$h()
F[$j?'addClass':'removeClass']('title_bar_popout')})
F.autobind(T,'value',function(){G.setText(Q.get(T))})
F.autobind(U,'value',function(){V=U.getValue()
$i()})
F.autobind($_,'value',function($j){$a=$j
$i()})
F.autobind(W,'value',function($j){X=$j
$g()})
F.autobind($b,'value',function($j){$c=$j
$h()})
F.autobind($d,'value',function($j){$e=$j
$g()})
I.on('mousedown',function($j){$j.stopPropagation()})
J.on('click',function(){O.openPopout(!0)
P.userHideWindow()})
K.on('click',function(){P.userHideWindow()})}
function $g(){var $j=X&&!Y&&!$$&&!$e&&!q.bugs.noBoxSizing
J.setDisplay($j?'':'none')}
function $h(){var $j=$c||$$
K.setDisplay($j?'none':'')
if($j){J.addClass('last_child')}
else{J.removeClass('last_child')}}
function $i(){if(!V)return
H.setText(Q.get(U.$$($a+'$string')))}
$f()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_TitleBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","top, left":0,"width":"100%","overflow":"hidden","zIndex":10,"height":"$$titleBarHeight","color":"$$titleBarColor","background":"$$titleBarBg","&.title_bar_popout":{"cursor":"default"}},".border_overlay":{"borderWidth":"$$titleBarBorderWidth","borderStyle":"$$titleBarBorderStyle","borderColor":"$$titleBarBorderColor"},".title":{"whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","cursor":"inherit","textAlign":"$$titleBarTextAlign","fontSize":"$$titleBarFontSize","lineHeight":"$$titleBarHeight","fontWeight":"$$titleBarFontWeight",".title_text, .status_text":{"cursor":"inherit"},".title_text":{"display":["inline","$$titleBarTitleDisplay"]},".status_text":{"display":["none","$$titleBarStatusDisplay"]}},"&.ltr .title":{"paddingLeft":"$$titleBarPaddingBefore","paddingRight":"$$titleBarPaddingAfter"},"&.rtl .title":{"paddingLeft":"$$titleBarPaddingAfter","paddingRight":"$$titleBarPaddingBefore"},".icons":{"position":"absolute","cursor":"default","color":"$$titleBarIconsColor","fontSize":"$$fontSizeXS",".meshim_widget_widgets_IconFont":{"display":"inline-block","cursor":"pointer","textAlign":"center","paddingRight, paddingLeft":"6px","paddingTop":"2px","verticalAlign":"middle","lineHeight":"$$titleBarHeight","&:hover":{"&":"$$titleBarItemHover"}}},"&.ltr .icons":{"top, right":0,".meshim_widget_widgets_IconFont":{"&.last_child":{"paddingRight":"9px"}}},"&.rtl .icons":{"top, left":0,".meshim_widget_widgets_IconFont":{"&.last_child":{"paddingLeft":"9px"}}},"&.br, &.bm, &.bl":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"},"&.tr, &.tm, &.tl":{},"&.mobile":{"zIndex":101,"borderRadius":"0",".title":{"fontSize":"$$fontSizeXL"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TitleBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_TitleBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Localizer,"localizer",null,[[b.__$$__jx_ui_Label,null,null,[],{"addClass":"email"}]],{"id":"localizer","delimiter":"@@@@"}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__localizer')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_utils_Utils,L=3100,M=K.isStyleSupported('transition')
if(q.isFF)M=!1
var N=J.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),O,P=J.root.$('livechat').$('ui').$('chat_window').$('email_transcript_notification').$('last_sent_email$string'),Q
function R(){F.autobind(N,'value',function(T){O=T
if(Q)window.clearTimeout(Q)
if(T==F.getName()){M&&l(function(){F.addClass('fade_out')})
Q=window.setTimeout(S,L)}
else{M&&l(function(){F.removeClass('fade_out')})}})
F.autobind(P,'value',function(T){G.setContent(v(35).replace('<email>',T))})
K.onTransitionEnd(F,F,S)}
function S(){if(O=='email_transcript_notification')N.update('')}
R()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={"**self":{"transition":"opacity 0.5s linear 2.5s","opacity":1,"&.fade_out":{"opacity":0}},".email":{"fontWeight":"bold"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EmailTranscriptNotification"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_EmailTranscriptNotification"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Window=(function(){var x=b.__$$__meshim_widget_controllers_CookieLaw,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_controllers_UIController,A=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,B={},C,D
B.init=function(N){C=N
D=y.root
B.setColor=C.generateDeprecatedFunction('window.setColor','$zopim.livechat.theme.setColor',function(){return C.theme.setColor.apply(this,arguments)})
B.setSize=C.generateLimitedFunction('window.setSize',1,function(Q){if(!Q)return
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_window:{size$string:Q}}})
D.$$('livechat.settings.theme.chat_window').update({'size$string':Q})})})
function O(){A.callOnRegistered(function(){z.showWindow()})}
B.show=O
function P(){A.callOnRegistered(function(){z.hideWindow()})}
B.hide=P}
function E(N){if(typeof N!='function')return
z.on('API:window:show',function(){N()})}
B.onShow=E
function F(N){if(typeof N!='function')return
z.on('API:window:hide',function(){N()})}
B.onHide=F
function G(N){N=N&&N.toString()
A.callOnRegistered(function(){A.saveAPISettings({chat_window:{title_bar:{title$string:N}}})
D.$$('livechat.settings.chat_window.title_bar').update({'title$string':N})})}
B.setTitle=G
function H(){A.callOnRegistered(function(){z.toggleWindow()})}
B.toggle=H
function I(){return D.$$('livechat.ui.chat_window.display$bool').getValue()}
B.getDisplay=I
function J(N){N=parseInt(N)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_window:{v_offset$int:N}}})
D.$$('livechat.settings.theme.chat_window').update({'v_offset$int':N})},!0)}
B.setOffsetBottom=B.setOffsetVertical=J
function K(N){N=parseInt(N)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_window:{h_offset$int:N}}})
D.$$('livechat.settings.theme.chat_window').update({'h_offset$int':N})},!0)}
B.setOffsetHorizontal=K
function L(N){A.callOnRegistered(function(){A.saveAPISettings({theme:{chat_window:{position$string:N}}})
D.$$('livechat.settings.theme.chat_window.position$string').update(N)},!0)}
B.setPosition=L
function M(){A.callOnRegistered(function(){if(x.isCookieDenied()){if(window.confirm(v(0)+'\n\n'+v(1)+': https://www.zopim.com/privacy#cookie')){z.openPopout(!0)
x.setUserChoice(!0)}}
else{z.openPopout(!0)}})}
B.openPopout=M
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Window"].join('')
B.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Window"}
return B})()
b.__$$__meshim_widget_widgets_card_IntegrationCard=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_widgets_card_TextCard,z=b.__$$__meshim_widget_widgets_Button,A=v(157)
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
y.call(this,C,D,E,F,G)
if(!B.__jx__jcss_generated){u.generate(this,B.prototype.__jx__fqname,B.__jx__jcss,null,B)
B.__jx__jcss_generated=!0}
this.image=new x(this.defaultPlacement,null,null,null,{tagName:'img',addClass:'integration_image'})
this.defaultPlacement.insertBefore(this.image,this.message)
this.yes=new z(this.defaultPlacement,null,null,[A],{addClass:'button_yes short'})
var H=this
this.yes.on('click',function(){if(!H.url)return
window.open(H.url)})}
B.prototype=e(y.prototype)
B.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},".integration_image":{"maxHeight, *height":"40px","marginBottom":"5px"},"&.minimized":{".integration_image, .button_yes":{"display":"none"}}}
B.prototype.__jx__super=y
B.prototype.update=function(C){y.prototype.update.call(this,C)
if(!C)return
if('url$string' in C){this.url=C['url$string']
this.yes.setDisplay(this.url?'':'none')}
if('label$string' in C){this.yes.setText(C['label$string']||A)}
if('image_src$string' in C){this.image.setDisplay(C['image_src$string']?'':'none')
this.image.setSrc(C['image_src$string'])}}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_IntegrationCard"].join('')
B.prototype.__jx__fqname="meshim_widget_widgets_card_IntegrationCard"}
return B})()
b.__$$__meshim_widget_widgets_card_LoginCard=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_widgets_card_TextCard,z=b.__$$__meshim_widget_widgets_Button
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
y.call(this,B,C,D,E,F)
if(!A.__jx__jcss_generated){u.generate(this,A.prototype.__jx__fqname,A.__jx__jcss,null,A)
A.__jx__jcss_generated=!0}
this.yes=new z(this.defaultPlacement,null,null,['Sign In'],{addClass:'button_yes short'})
this.yes.on('click',function(G){G.stopPropagation()
x.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string').update('profile_menu')})}
A.prototype=e(y.prototype)
A.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},"&.minimized":{".button_yes":{"display":"none"}}}
A.prototype.__jx__super=y
A.prototype.update=function(B){y.prototype.update.call(this,B)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_LoginCard"].join('')
A.prototype.__jx__fqname="meshim_widget_widgets_card_LoginCard"}
return A})()
b.__$$__meshim_widget_widgets_Submit=(function(){var x=b.__$$__meshim_widget_widgets_Button
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
if(!D)D={}
D.tagName||(D.tagName='input')
D.type||(D.type='submit')
x.call(this,z,A,B,C,D)
this.setValue(this._value)
var E=this
this._setValue=function(){E.setValue(E._value)}
v&&v.onLanguage&&v.onLanguage(this._setValue)}
y.__jx__jcss={"**self":{}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
y.prototype.setValue=function(z){this._value=z
return x.prototype.setValue.call(this,z)}
y.prototype.destroy=function(){v&&v.unLanguage&&v.unLanguage(this._setValue)
x.prototype.destroy.call(this)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Submit"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Submit"}
return y})()
b.__$$__meshim_widget_widgets_card_OfflineFormCard=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_widgets_card_TextCard,z=b.__$$__meshim_widget_widgets_Button
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
y.call(this,B,C,D,E,F)
if(!A.__jx__jcss_generated){u.generate(this,A.prototype.__jx__fqname,A.__jx__jcss,null,A)
A.__jx__jcss_generated=!0}
this.yes=new z(this.defaultPlacement,null,null,[v(158)],{addClass:'button_yes short'})
this.yes.on('click',function(){x.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string').update('pre_chat_offline_form')})}
A.prototype=e(y.prototype)
A.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},"&.minimized":{".button_yes":{"display":"none"}}}
A.prototype.__jx__super=y
A.prototype.update=function(B){y.prototype.update.call(this,B)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_OfflineFormCard"].join('')
A.prototype.__jx__fqname="meshim_widget_widgets_card_OfflineFormCard"}
return A})()
b.__$$__meshim_widget_widgets_form_RadioButtonMultiple=(function(){var x=b.__$$__jx_ui_RadioButton,y=b.__$$__meshim_widget_widgets_form_InputMultiple
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
this.optionConstructor=x
this.inputSuffix='radio'
y.call(this,A,B,C,D,E)}
z.prototype=e(y.prototype)
z.prototype.setValue=function(A){for(var B=0,C=this.options.length;B<C;B++){if(this.options[B].getValue()==A){this.options[B].setChecked(!0);(this.options[B].container||this.options[B]).setDisplay('')
this.labels[B].setDisplay('').addClass('label_checked')}
else{this.options[B].setChecked(!1)
if(this.readOnly){(this.options[B].container||this.options[B]).setDisplay('none')
this.labels[B].setDisplay('none').removeClass('label_checked')}}}}
z.prototype.getValue=function(){for(var A=0,B=this.options.length;A<B;A++)if(this.options[A].getChecked())return this.options[A].getValue()}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_RadioButtonMultiple"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_form_RadioButtonMultiple"}
return z})()
b.__$$__meshim_widget_controllers_ThemeController=(function(){var x=b.__$$__jx_core_ObjectUtil,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_controllers_ConnectionController,A=b.__$$__meshim_widget_controllers_DefaultDataNode,B=b.__$$__meshim_widget_Themes,C=b.__$$__meshim_widget_themes_Overrides,D=b.__$$__meshim_widget_utils_Utils,E={},F={},G,H='standard',I='popout',J='mobile',K=20
E.init=function(){var L=y.root.$('livechat').$('settings').$('theme'),M=L.$('name$string'),N,O=y.root.$('livechat').$('ui'),P=O.$('theme_reload$bool'),Q=O.$('theme_loaded$bool'),R=y.root.$('connection').$('message$string'),S=y.root.$('connection').$('status$string')
G=y.root.$$('tmp.api_settings.theme')
var T=O.$('popout$bool').getValue(),U=O.$('mobile$bool').getValue(),V=O.$('mockup$bool').getValue()
if(!(U&&!T)){u.generateAll('no_reload')}
R.bindValue(W)
function W($_){if($_!='fast_init')return
Y()}
S.bindValue(X)
function X($_){if($_!='reattached'&&$_!='cookie_law')return
R.unbindValue(W)
S.unbindValue(X)
Y()}
function Y(){Z(!0)}
L.bindValue(function(){Z()})
M.bindValue(function(){Z()})
P.bindValue(function($_){$_&&Z(!0)})
function Z($_){var $a=L.getValue()
if(!$a||!$a['name$string'])return
if(N==$a['name$string']&&!$_)return
var $b=B[$a['name$string']]
if(!$b||!$b.generate)return
var $c=K,$d,$e=[],$f=[]
do {$e.push($b.defaults||{})
$f.push($b.overrides||{})} while($b._super&&($b=$b._super))

var $g=x.clone(A.livechat.settings.theme)
while($e.length){D.fullyExtend($g,$e.pop())}
var $h=z.getServerSettings()
$h=$h&&$h.theme
D.fullyExtend($g,$h||$a)
D.fullyExtend($g,G.getValue())
while($f.length){D.fullyExtend($g,$f.pop())}
$g['name$string']=$a['name$string']
if(T)D.fullyExtend($g,C.popout)
if(U)D.fullyExtend($g,C.mobile)
if(!y.livechat.getLimit()){$g.colors.banner$string=$g.colors.primary$string
if($b.defaults&&$b.defaults.colors&&$b.defaults.colors.primary$string){$g.colors.bubble$string=$b.defaults.colors.primary$string}}
N=$g['name$string']
var $i
if(x.equal($g,F)){$i=!0}
F=$g
L.update($g)
if($i)return
$b=B[N]
var $j=K
if(V){do {u.delPalette($j)} while($j--)
}
else{u.delPalettes()}
do {$d=$b.generate($g)
U&&$d[J]&&u.setPalette($d[J],'widget_mobile_'+$c,($c--))
T&&$d[I]&&u.setPalette($d[I],'widget_popout_'+$c,($c--))
u.setPalette($d[H],'widget_'+$c,($c--))} while($b._super&&($b=$b._super))

u.on('write',$$)
u.reload()}
function $$(){Q.update(!0)
u.un('write',$$)}}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ThemeController"].join('')
E.prototype.__jx__fqname="meshim_widget_controllers_ThemeController"}
return E})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_Button,null,null,[v(128)],{"addClass":"end_chat wide short"}],[b.__$$__jx_ui_Label,null,null,[v(128)],{"addClass":"end_chat_mobile"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat'),K=J.$('settings').$('end_chat_menu').$('enabled$bool'),L=J.$('ui').$('chat_window').$('menu_stack_name$string')
function M(){F.on('click',function(){L.update('end_chat_menu')})
F.autobind(K,'value',function(N){F.setDisplay(N?'':'none')})}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{"cursor":"default","&:hover":{"background":"transparent !important"},".end_chat":{"display":"block","textAlign":"center","cursor":"pointer"},".end_chat_mobile":{"display":"none"}},"&.mobile":{".end_chat":{"display":"none"},".end_chat_mobile":{"display":"block"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_EndChat"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_EndChat"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__jx_ui_Label,null,null,[v(127)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string')
function K(){F.on('click',function(){J.update('email_transcript_menu')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_EmailTranscript"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_EmailTranscript"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[[b.__$$__jx_ui_Label,null,null,[v(94)],{}],[b.__$$__jx_ui_Label,null,null,[],{"text":" "}],[b.__$$__jx_ui_Label,null,null,[[b.__$$__jx_ui_Label,null,null,[],{"text":"("}],[b.__$$__jx_ui_Label,null,null,[v(95)],{}],[b.__$$__jx_ui_Label,"timezone_container",null,[],{"id":"timezone_container"}],[b.__$$__jx_ui_Label,null,null,[],{"text":")"}]],{"addClass":"timezone_container"}]],{}],[b.__$$__jx_ui_Widget,"days",null,[],{"id":"days"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[v(92)],{"id":"back","addClass":"wide"}]],{}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__timezone_container'),H=w.get(z+'__days'),I=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Utils,N=b.__$$__meshim_widget_utils_Strings,O=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group,P=L.root.$('livechat').$('ui').$('chat_window').$('pre_chat_offline_form').$('stack_index$int'),Q=L.root.$('livechat').$('settings').$('operating_hours'),R=Q.$('enabled$bool'),S,T=Q.$('mode$string'),U,V=Q.$('timezone$int'),W,X=Q.$('schedule'),Y,Z=Q.$('display_notice$bool'),$$,$_={'weekday_weekend':[[1,N.datetime.weekday],[0,N.datetime.weekend]],'daily':[1,2,3,4,5,6,0]}
function $a(){F.autobind(R,'value',function($d){if(S==$d)return
S=$d
$b()})
F.autobind(T,'value',function($d){if(U==$d)return
U=$d
$b()})
F.autobind(V,'value',function($d){if(W==$d)return
W=$d
$b()})
F.autobind(X,'value',function($d){Y=$d
$b()})
F.autobind(Z,'value',function($d){if($$==$d)return
$$=$d
$b()})
I.on('click',function(){P.update(0)})}
function $b(){if(!S)return
if(!$$)return
if(!U||!$_[U])return
if(isNaN(W)||k(W,!0))return
if(!Y)return
G.setText([W<0?'':'+',M.formatMinutesAsHours(W)].join(''))
var $d=$_[U],$e=[],$f
for(var $g in $d)if($d.hasOwnProperty($g)){if(g($d[$g])){$e.push({enabled$bool:Y[$d[$g][0]].enabled$bool,periods:Y[$d[$g][0]].periods,days:[$d[$g][1]]})}
else{$f=!1
for(var $h=0,$i=$e.length;$h<$i;$h++){if($c($e[$h],Y[$d[$g]])){$e[$h].days.push($d[$g])
$f=!0
break}}
if(!$f){$e.push({enabled$bool:Y[$d[$g]].enabled$bool,periods:Y[$d[$g]].periods,days:[$d[$g]]})}}}
H.empty()
for(var $j=0,$k=$e.length;$j<$k;$j++){new O(H).setData($e[$j])}}
function $c($d,$e){if(!$d.enabled$bool&&!$e.enabled$bool)return !0
if($d.enabled$bool!=$e.enabled$bool)return
var $f=$d.periods,$g=$e.periods,$h=0,$i=0,$j
for($j in $f)if($f.hasOwnProperty($j)){if($f[$j].start$int!==($g[$j]&&$g[$j].start$int)||$f[$j].end$int!==($g[$j]&&$g[$j].end$int)){return}
else{$h++}}
for($j in $g)if($g.hasOwnProperty($j)){$i++}
if($h!=$i)return
return !0}
$a()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".timezone_container":{"fontWeight":"normal"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_FileUploader,"file_form",null,[[b.__$$__jx_ui_Input,"file_input",null,[],{"id":"file_input","name":"file[]","type":"file","multiple":"true","addClass":"file_input","tabIndex":"-1"}]],{"id":"file_form"}],[b.__$$__jx_ui_Label,null,null,[v(126)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__file_form'),H=w.get(z+'__file_input')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_Config,L=b.__$$__meshim_common_FileUtil,M=b.__$$__meshim_common_QueryString,N=b.__$$__meshim_widget_controllers_ConnectionController,O=b.__$$__meshim_widget_controllers_DataController,P=O.root.$('livechat'),Q=P.$$('profile.mid$string'),R=P.$$('profile.uid$string'),S=P.$('settings').$('package'),T,U=P.$('ui').$('chat_window').$('chat_panel').$('file_toast'),V=P.$('ui').$('chat_window').$('menu_stack_name$string')
function W(){F.on('click',function(){T&&H.click()})
H.on('change',function(){if(!T||!H.getValue())return
var Y=[],Z=[],$$=0,$_=H.dom.files
if($_){for(var $a=0,$b=$_.length;$a<$b;$a++){if(L.isValidType($_[$a].type)){Y.push($_[$a].name)
Z.push($_[$a].type)
$$+=$_[$a].size||0}
else{U.update({'error$string':'type'})
H.setValue('')
return}}
if($$>K.FILE_UPLOAD_MAX){U.update({'error$string':'size'})
H.setValue('')
return}
Y=Y.join(', ')
Z=Z.join(', ')}
else{$_=H.dom.value||''
if(!$_)return
Y=$_.substr($_.lastIndexOf('\\')+1)
Z=Y.substr(Y.lastIndexOf('.')+1)
if(!L.isValidType(!1,Y)){U.update({'error$string':'type'})
H.setValue('')
return}}
var $c=O.livechat.sendFile({file_name:Y,file_type:Z,file_size:$$}),$d={ts:$c,mid:Q.getValue(),uid:R.getValue()},$e='https://'+N.getHost()+K.FILE_UPLOAD_PATH+'?'+M.buildQuery($d)
G.setPath($e)
V.update('')
G.submit()
H.setValue('')})
var X
F.autobind(S,'value',function(Y){if(!Y)return
X=S.getValue()
if(X['color_customization_enabled$int']||X['widget_customization_enabled$int']){T=!0
F.setDisplay('')}
else{T=!1
F.setDisplay('none')}})}
W()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={".file_input":{"position":"absolute","top, right":0,"border":"solid transparent","borderWidth":"0 0 100px 1000px","opacity":"0.5","visibility":"hidden","zIndex":1}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_SendFile"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_SendFile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange,J=b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange,K=b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg,L,M,N
function O(){F.setDataNode=P
F.onDestruction(S)
v.onLanguage&&v.onLanguage(R)}
function P(T){if(L)F.autounbind(L,'value',Q)
L=T.$('type$string')
M=T
F.autobind(L,'value',Q)}
function Q(T){if(!T||N)return
switch(T){case 'chat.memberjoin':case 'chat.memberleave':N=new I(F)
break
case 'chat.changename':N=new J(F)
break
case 'chat.event':N=new K(F)
break}
if(N)N.setDataNode(M)}
function R(){if(N&&M)N.setDataNode(M)}
function S(){v.unLanguage&&v.unLanguage(R)}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","background":"$$chatLogSystemMsgBg","borderWidth":"$$chatLogSystemMsgBorderWidth","borderStyle":"$$chatLogSystemMsgBorderStyle","borderColor":"$$chatLogSystemMsgBorderColor","padding":"$$chatLogSystemMsgPadding","textAlign":"center"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_SystemLogRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_SystemLogRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Gravatar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_gravatar_GravatarOne,J=b.__$$__meshim_widget_widgets_gravatar_GravatarTwo,K=b.__$$__meshim_widget_widgets_gravatar_GravatarThree,L=b.__$$__meshim_widget_widgets_gravatar_GravatarFour,M=[I,J,K,L],N,O
function P(){F.setImages=W
F.setDataNode=R
F.setMemberNode=S
F.setGroupNode=T
F.setHideAuthType=Q}
function Q(Z){F[n(Z)?'addClass':'removeClass']('hide_auth_type')
return F}
function R(Z){F.autounbind()
if(Z.name=='agents')T(Z)
else S(Z)}
function S(Z){var $$=Y([Z])
$$.setNodes([Z])}
function T(Z){N&&F.autounbind(N,'keys',U)
N=Z
N&&F.autobind(N,'keys',U)}
function U(){var Z=N.getKeys(),$$=[]
for(var $_=0,$a=Math.min(3,Z.length);$_<$a;$_++){$$.push(N.$(Z[$_]))}
V($$)}
function V(Z){var $$=Y(Z)
$$&&$$.setNodes(Z)}
function W(Z){var $$=Y(Z)
$$&&$$.setImages(Z)}
var X
function Y(Z){if(!(Z instanceof Array)||!Z.length)return
var $$=Math.min(Z.length,4),$_=M[$$-1]
if($$!==X){F.empty()
O=new $_(F)
X=$$}
return O}
P()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Gravatar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"width":"60px","height":"60px","position":"relative","overflow":"hidden","borderWidth":"$$avatarBorderWidth","borderStyle":"$$avatarBorderStyle","borderColor":"$$avatarBorderColor","borderRadius":"$$avatarRadius","boxShadow":"$$avatarShadow",".avatar":{"background":"#FFF"},"&.hide_auth_type":{".auth_type":{"display":"none !important"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Gravatar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Gravatar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_About=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__jx_ui_Label,null,null,[v(125)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function K(){F.on('click',function(){J.update('about_panel')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_About
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_About"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_About"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_IconFont,"icon",null,[],{"id":"icon"}],[b.__$$__jx_ui_Label,null,null,[v(124)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__icon')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat'),L=K.$('profile'),M=L.$('allow_cookies$bool'),N=K.$('settings').$('cookie_law').$('enabled$bool'),O=K.$('ui').$('chat_window').$('main_stack_name$string')
function P(){F.on('click',function(){if(M.getValue())O.update('cookie_form')})
F.autobind(M,'value',function(R){G.setIcon(R)
Q()})
F.autobind(N,'value',Q)}
function Q(){if(N.getValue()&&M.getValue()){F.setDisplay('')}
else{F.setDisplay('none')}}
P()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Cookies"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Cookies"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_IconFont,"icon_sound",null,[],{"id":"icon_sound"}],[b.__$$__jx_ui_Label,null,null,[v(123)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__icon_sound')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_SoundController,L=J.root.$('livechat').$('profile'),M=L.$('notification').$('sound$bool')
function N(){F.on('click',function(){M.update(!K.isSoundEnabled())})
F.autobind(M,'value',function(){G.setIcon(K.isSoundEnabled()?'sound_on':'sound_off',!0)})}
N()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{},"&.mobile":{"display":"none"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Sound"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Sound"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ButtonBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_ButtonBar,null,null,[],{"selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ButtonBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_ButtonBar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_ButtonBar
x.__jx__jcss={".option":{"cursor":"pointer","display":"inline-block","textAlign":"center","&:first-child":{},"&:last-child":{},"&.active":{"cursor":"default"},"&:hover":{},"&.disabled":{"cursor":"default","&.active":{"cursor":"default"},"&:hover":{"cursor":"default"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ButtonBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ButtonBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatButton_BubbleRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatButton_BubbleVector,"bubble_vector",null,[],{"id":"bubble_vector","position":"absolute"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"close",null,[],{"id":"close","icon":"cross","addClass":"close","title":v(36)}],[b.__$$__jx_ui_Widget,"bubble_title_container",null,[],{"id":"bubble_title_container","class":"bubble_title"}],[b.__$$__jx_ui_Widget,"bubble_text_container",null,[],{"id":"bubble_text_container","class":"bubble_text"}]],{"class":"bubble_text_wrapper"}]],{"visibility":"hidden"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__bubble_vector'),H=w.get(z+'__close'),I=w.get(z+'__bubble_title_container'),J=w.get(z+'__bubble_text_container')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_controllers_UIController,O=b.__$$__meshim_widget_utils_BindClass,P=b.__$$__meshim_widget_utils_Strings,Q=b.__$$__meshim_common_Color,R=M.root.$('livechat'),S=R.$('settings'),T=R.$('ui'),U=T.$('chat_button'),V=U.$('display$bool'),W,X=U.$('bubble').$('display$bool'),Y,Z=T.$('theme_loaded$bool'),$$=S.$('bubble'),$_=$$.$('title$string'),$a,$b=$$.$('text$string'),$c,$d=S.$('theme').$('colors').$('bubble$string'),$e,$f,$g=U.$('button_width$int'),$h=U.$('bubble_height$int'),$i,$j
function $k(){O.rtl(F)
F.autobind(V,'value',function($n){if(W==$n)return
W=$n
$l()})
F.autobind(X,'value',function($n){if(Y==$n)return
Y=$n
$l()})
F.autobind($_,'value',function($n){if($a==$n)return
$a=$n
I.setText(P.get($_))
$l()})
F.autobind($b,'value',function($n){if($c==$n)return
$c=$n
J.setText(P.get($b))
J.setDisplay($n?'':'none')
$l()})
F.autobind($d,'value',function($n){if(!$n)return
if($e==$n)return
$e=$n})
F.autobind(Z,'value',function($n){if(!$n)return
if($f!=$e){$f=$e
var $o=new Q($f)
G.setFill('linear top '+'from('+$o.lighten(0.1).toRGB()+') '+'to('+$o.darken(0.2).toRGB()+') ')}
$l()})
F.autobind($g,'value',function($n){if(!$n)return
$l()})
H.on('click',function($n){$n.stopPropagation()
N.userHideBubble()})}
function $l(){if($i)return
$i=window.setTimeout($m,0)
if(q.isIE==8){F.setVisibility('')}}
function $m(){$i=null
if(!W||!Y){return}
var $n=$g.getValue()
if(!$n){return}
var $o=F.getHeight()
if(!$o){return}
G.setDimension($n,$o)
$h.update(F.getHeight())
if(!$j){F.setVisibility('')
$j=!0}}
$k()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_BubbleRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"},".bubble_text_wrapper":{"position":"relative","padding":"10px 12px 26px"},".bubble_title":{"position":"relative","zIndex":"1","fontSize":"$$fontSizeL","fontWeight":"bold","color":"$$chatBubbleTitleColor","whiteSpace":"pre-wrap"},".bubble_text":{"position":"relative","zIndex":"1","marginTop":"5px","fontSize":"12px","fontStyle":"italic","color":"$$chatBubbleTextColor","whiteSpace":"pre-wrap"},".close":{"float":"right","position":"relative","top":"-1px","left":"5px","padding":"6px 4px 2px","zIndex":"2","color":"$$chatBubbleCloseColor","textShadow":"$$chatBubbleCloseShadow","radius":"$$radius","&:hover":{"background":"$$chatBubbleCloseHoverBg"}},"&.rtl .close":{"float":"left","left":"auto","right":"5px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_BubbleRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_BubbleRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_EndChatMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Widget,"message",null,[],{"id":"message","addClass":"message"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Button,"end_chat",null,[v(31)],{"id":"end_chat","addClass":"short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary short"}]],{}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__message'),H=w.get(z+'__end_chat'),I=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Strings,N=L.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),O=L.root.$('livechat').$('settings').$('end_chat_menu').$('message$string')
function P(){F.autobind(O,'value',function(Q){G.setText(Q||M.end_chat_menu_message||'')})
H.on('click',function(){L.livechat.endChat()
F.hide()})
I.on('click',function(){N.update('')})}
P()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EndChatMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={".message":{"marginBottom":"10px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EndChatMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_EndChatMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__jx_ui_Label,"logged_out",null,[v(122)],{"id":"logged_out"}],[b.__$$__jx_ui_Label,"name",null,[],{"id":"name","addClass":"logged_in_name"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__logged_out'),H=w.get(z+'__name')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Utils,M=K.root.$('livechat'),N=M.$('profile'),O=N.$('logged_in$bool'),P,Q=N.$('display_name$string'),R,S=M.$('ui').$('chat_window').$('menu_stack_name$string'),T=M.$('settings').$('login').$('restrict_profile$bool')
function U(){F.on('click',function(W){W.stopPropagation()
S.update('profile_menu')})
F.autobind(O,'value',function(W){P=W
V()})
F.autobind(Q,'value',function(W){R=W||''
V()})
F.autobind(T,'value',function(W){F.setDisplay(W?'none':'')})
v&&v.onLanguage&&v.onLanguage(V)}
function V(){if(P){if(R&&!L.isDefaultName(R)){H.setText(v(120).replace('<name>',R))}
else{H.setText(v(121))}
G.setDisplay('none')
H.setDisplay('')}
else{G.setDisplay('')
H.setDisplay('none')}}
U()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{"display":"none"},"&.mobile":{"display":"block"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Profile"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Profile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Input=(function(){var x=b.__$$__jx_ui_Input,y=x,z=b.__$$__jx_ui_Widget,A=b.__$$__meshim_widget_controllers_DataController,B=b.__$$__meshim_widget_widgets_input_InvalidIcon,C=b.__$$__meshim_widget_utils_BindClass
x=function(D,E,F,G,H){if(!(this instanceof x))return new x(D,E,F,G,H)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,D,E,F,G,H)
x.__constructor.call(this)}
x.__constructor=function(){C.mobile(this)
C.rtl(this)
var D=A.root.$('livechat').$('ui').$('mobile$bool').getValue(),E=this
if(D&&this.hasClass('mobile_error_icon')){this.pContainer=new z(this.parentNode,null,null,null,{position:"relative"})
this.pContainer.appendChild(this)
this.invalidIcon=new B(this.pContainer)
this.on('blur',F)
F()}
function F(){l(G)}
function G(){E.invalidIcon.setDisplay(E.getValidity()?'none':'')}}
x.__jx__jcss={"**self":{"display":"block","appearance":"none","*overflow":"visible","width":"100%","color":"$$inputColor","background":"$$inputBg","padding":"$$inputPadding","borderWidth":"$$inputBorderWidth","borderStyle":"$$inputBorderStyle","borderColor":"$$inputBorderColor","borderRadius":"$$inputRadius","boxShadow":"$$inputShadow"},"&:focus, &.focus":{"color":"$$inputFocusColor","background":"$$inputFocusBg","borderColor":"$$inputFocusBorderColor","boxShadow":"$$inputFocusShadow","outline":"none"},"&::placeholder":{"color":"$$inputPlaceholderColor","fontStyle":"$$inputPlaceholderFontStyle"},"&.invalid":{"color":"$$inputInvalidColor","background":"$$inputInvalidBg","borderColor":"$$inputInvalidBorderColor","boxShadow":"$$inputInvalidShadow"},"&.invalid.mobile":{"paddingRight":"30px"},"&.invalid.rtl.mobile":{"paddingRight":"$$inputPadding","paddingLeft":"30px"},"&.unstyled":{"border":"none","background":"transparent","boxShadow":"none"},"&.standalone":{"marginTop":"10px","marginBottom":"5px"}}
x.prototype=e(y.prototype)
x.prototype.__jx__super=y
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Input"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Input"}
return x})()
b.__$$__meshim_widget_widgets_iconFont_AuthButton=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Button,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Auth,"i",null,[],{"id":"i","addClass":"if"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__i')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){F.setIcon=function(){G.setIcon.apply(G,arguments)}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_AuthButton
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Button
x.__jx__jcss={"**self":{"overflow":"hidden","paddingTop":"10px","paddingBottom":"6px","color":"$$authButtonColor","background":"$$authButtonBg","borderColor":"$$authButtonBorderColor","boxShadow":"$$authButtonShadow","&:hover, &:focus":{"color":"$$authButtonHoverColor","background":"$$authButtonHoverBg","borderColor":"$$authButtonHoverBorderColor","boxShadow":"$$authButtonHoverShadow"},"&:active":{"color":"$$authButtonActiveColor","background":"$$authButtonActiveBg","borderColor":"$$authButtonActiveBorderColor","boxShadow":"$$authButtonActiveShadow"}},"&.float":{"width":"30%","margin":"0 3% 0 0"},"&:hover, &:focus":{"&.facebook .icon_font":{"color":"$$facebook"},"&.twitter .icon_font":{"color":"$$twitter"},"&.google .icon_font":{"color":"$$google"}},"&.mobile":{".if":{"textAlign":"center","fontSize":"22px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_AuthButton"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_iconFont_AuthButton"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Login=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,"external_section",null,[[b.__$$__meshim_widget_widgets_menu_Header,null,null,[v(129)],{"addClass":"item"}],[b.__$$__jx_ui_Widget,"types",null,[],{"id":"types","addClass":"external_types"}]],{"id":"external_section"}],[b.__$$__meshim_widget_widgets_menu_Section,"email",null,[[b.__$$__meshim_widget_widgets_menu_Item,null,null,[v(130)],{}]],{"id":"email","addClass":"border_top"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__external_section'),H=w.get(z+'__types'),I=w.get(z+'__email')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_widgets_iconFont_Auth,N=b.__$$__meshim_widget_widgets_iconFont_AuthButton,O=b.__$$__meshim_widget_widgets_menu_Item,P=b.__$$__meshim_widget_utils_Strings,Q=b.__$$__meshim_widget_utils_BindClass,R=b.__$$__jx_ui_Label,S=L.root.$('livechat').$('settings').$('login').$('allowed_types'),T=L.root.$('livechat').$('ui').$('chat_window').$('profile_menu').$('index$int'),U=L.root.$$('livechat.ui.mobile$bool'),V,W={'facebook':null,'twitter':null,'google':null}
function X(){Q.mobile(F)
V=U.getValue()
for(var Z in W)if(W.hasOwnProperty(Z)){if(V){W[Z]=new N(H,null,null,null,{name:Z,addClass:'float '+Z,icon:Z+'_out'})}
else{W[Z]=new O(H,null,null,null,{name:Z})
new M(W[Z],null,null,null,{addClass:'menu_icon',icon:Z})
new R(W[Z],null,null,[P.external_login[Z]||Z],{addClass:'label'})}}
F.autobind(S,'value',Y)
H.on('click',function($$){var $_=$$.target.jx_wrapper
if($_==H)return
while($_.parentNode!=H)$_=$_.parentNode
var $a=$_.getName&&$_.getName()
$a&&L.livechat.doExternalLogin($a)})
I.on('click',function(){T.update(2)})}
function Y(){var Z=S.getValue()
if(!Z)return
V=U.getValue()
I.setDisplay(Z['email$bool']?'':'none')
var $$,$_
for(var $a in W)if(W.hasOwnProperty($a)){$_=Z[$a+'$bool']
W[$a].setDisplay($_?'':'none')
V&&$_&&W[$a].setDisplay('inline-block')
$_&&($$=!0)}
G.setDisplay($$?'':'none')}
X()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Login
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".meshim_widget_widgets_menu_Item":{".label":{"marginLeft":"10px"},"&:hover":{"&[name=facebook] .menu_icon":{"color":"$$facebook"},"&[name=twitter]  .menu_icon":{"color":"$$twitter"},"&[name=google]   .menu_icon":{"color":"$$google"}},"&[name=facebook] .menu_icon":{"top":"1px"},"&[name=google]   .menu_icon":{"top":"2px"}},".menu_icon":{"position":"relative","float":"left","fontSize":"$$fontSizeXL","color":"$$menuHeaderColor"},"&.mobile":{".external_types":{"margin":"$$menuItemPadding"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Login"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Login"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_LiveChatAPI=(function(){var x=b.__$$__meshim_common_Regex,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_controllers_UIController,A=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,B=b.__$$__meshim_widget_controllers_liveChatAPI_Badge,C=b.__$$__meshim_widget_controllers_liveChatAPI_Bubble,D=b.__$$__meshim_widget_controllers_liveChatAPI_Button,E=b.__$$__meshim_widget_controllers_liveChatAPI_Concierge,F=b.__$$__meshim_widget_controllers_liveChatAPI_CookieLawAPI,G=b.__$$__meshim_widget_controllers_liveChatAPI_Departments,H=b.__$$__meshim_widget_controllers_liveChatAPI_Theme,I=b.__$$__meshim_widget_controllers_liveChatAPI_Window,J=b.__$$__meshim_widget_controllers_liveChatAPI_Debug,K,L={badge:B,bubble:C,button:D,concierge:E,cookieLaw:F,departments:G,theme:H,window:I,debug:J,generateDeprecatedFunction:$v,generateLimitedFunction:$w,init:M,isChatting:Q,set:R,getName:N,getEmail:O,getPhone:P,setName:S,setEmail:T,setPhone:U,addTags:V,removeTags:W,setDisableSound:X,setLanguage:Y,setGreetings:Z,clearAll:$$,hideAll:$_,say:$a,setOnConnected:$b,setOnChatStart:$f,setOnChatEnd:$g,setOnFlashReady:$h,setOnStatus:$i,setOnUnreadMsgs:$j,endChat:$k,setNotes:$l,appendNotes:$m}
function M(){K=y.root
if(K.$$('livechat.ui.mockup$bool').getValue()){return}
A.init(this)
B.init(this)
C.init(this)
D.init(this)
E.init(this)
F.init(this)
G.init(this)
H.init(this)
I.init(this)
J.init(this)
$n()}
function N(){return K.getValue('livechat.profile.display_name$string')||''}
function O(){return K.getValue('livechat.profile.email$string')||''}
function P(){return K.getValue('livechat.profile.phone$string')||''}
function Q(){return K.getValue('livechat.channel.chatting$bool')||!1}
function R($y){if(typeof $y!='object')return
var $z,$A
for($A in $y)if($y.hasOwnProperty($A)){$z='set'+$x($A)
if(h(this[$z]))this[$z]($y[$A])}
return this}
function S($y){$y=$y&&$y.toString()
A.callOnReattached(function(){y.livechat.updateProfile({'name':$y})})}
function T($y){$y=$y&&$y.toString().trim()
if(!x.email.test($y)){window.console&&window.console.log('Zopim: setEmail(): the email provided is not valid: ['+$y+']')
return}
A.callOnReattached(function(){y.livechat.updateProfile({'email':$y})})}
function U($y){$y=$y&&$y.toString()
A.callOnReattached(function(){y.livechat.updateProfile({'phone':$y})})}
function V(){if(!arguments.length)return
var $y=arguments,$z=[]
for(var $A=0,$B=$y.length;$A<$B;$A++){$z.push($y[$A]+'')}
A.callOnReattached(function(){K.$$('livechat.channel.tags').write({'added$string':$z.join(',')})})}
function W(){if(!arguments.length)return
var $y=arguments,$z=[]
for(var $A=0,$B=$y.length;$A<$B;$A++){$z.push($y[$A]+'')}
A.callOnReattached(function(){K.$$('livechat.channel.tags').write({'removed$string':$z.join(',')})})}
function X($y){A.callOnRegistered(function(){if(typeof $y!='boolean')return
K.$$('livechat.profile.notification').update({'sound$bool':!$y})})}
function Y($y){A.callOnRegistered(function(){A.saveAPISettings({language:{language$string:$y}})
K.$$('livechat.settings.language').update({'language$string':$y})})}
function Z($y){if(!$y||(typeof $y!='object'))return
var $z,$A
for(var $B in $y)if($y.hasOwnProperty($B)){switch($B){case 'online':if(g($y[$B])){$z=$y[$B][0]||''}
else{$z=$y[$B]||''}
break
case 'offline':if(g($y[$B])){$A=$y[$B][0]||''}
else{$A=$y[$B]||''}
break
default:break}}
A.callOnReattached(function(){if($z){A.saveAPISettings({greetings:{online$string:$z}})
K.$$('livechat.settings.greetings').write({'online$string':$z})}
if($A){A.saveAPISettings({greetings:{offline$string:$A}})
K.$$('livechat.settings.greetings').write({'offline$string':$A})}},!0)}
function $$(){A.callOnReattached(function(){y.livechat.clearAll()
y.livechat.reconnect()})}
function $_(){A.callOnRegistered(function(){z.hideAll()})}
function $a($y){if(!$y||(typeof $y!='string'))return
y.livechat.sendChatMsg({msg:$y})
z.showWindow()}
function $b($y){if(!h($y))return
A.callOnReattached($y,!0)}
var $c={listening:!1,last_chatting_state:null,start_settled:!1,start_ready:!1}
r.extend($c)
function $d($y){var $z=$c.last_chatting_state,$A=n($y)
if($A===$c.last_chatting_state)return
$c.last_chatting_state=$A
if($A){if($c.start_ready)$c.fire('chat_start')}
else{if($z)$c.fire('chat_end')}}
function $e(){if(!$c.listening){$c.listening=!0
K.$$('livechat.channel.chatting$bool').bindValue($d)}}
function $f($y){if(!h($y))return
$c.on('chat_start',A.getCallbackCaller($y))
$e()
if(!$c.start_settled){$c.start_settled=!0
A.callOnReattached(function(){$c.last_chatting_state=n(K.$$('livechat.channel.chatting$bool').getValue())
$c.start_ready=!0})}}
function $g($y){if(!h($y))return
$c.on('chat_end',A.getCallbackCaller($y))
$e()}
function $h($y){if(!h($y))return
A.callOnRegistered($y,!0)}
function $i($y){if(!h($y))return
K.$$('livechat.account.status$string').bindValue(A.getCallbackCaller($y))}
function $j($y){if(!h($y))return
K.$$('livechat.ui.chat_button.unread_count$int').bindValue(A.getCallbackCaller($y))}
function $k(){y.livechat.endChat()}
function $l($y){if(typeof $y!='string')return
A.callOnReattached(function(){K.$$('livechat.profile').write({'notes$string':$y})})}
function $m($y){if(typeof $y!='string')return
A.callOnReattached(function(){K.$$('livechat.profile').write({'notes_append$string':$y})})}
function $n(){var $y=window.$zopim
window.$zopim=A.callNow
window.$zopim.livechat=L
A.handleDelayed($y&&$y._)}
var $o={global:'fire freeze setOnGreeting setStatus'.split(' '),bubble:'setImage'.split(' '),button:'setImage setTheme useFavicon'.split(' '),window:'getSettings setBg'.split(' '),cookieLaw:'showPrivacyPanel'.split(' '),unreadflag:'disable enable'.split(' ')}
for(var $p in $o)if($o.hasOwnProperty($p)){var $q=$o[$p],$r
if($p=='global'){$r=L}
else{if(!L[$p])L[$p]={}
$r=L[$p]}
for(var $s=0;$s<$q.length;$s++){var $t=$q[$s]
$r[$t]=$u($t)}}
function $u($y){return function(){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$y+'" is obsolete. Refer to http://api.zopim.com/ for the latest API documentation.')}}
function $v($y,$z,$A){return function(){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$y+'" is deprecated and may be removed in the future. '+($z?('Use "'+$z+'" instead.'):'Refer to http://api.zopim.com/ for the latest API documentation.'))
return $A.apply(this,arguments)}}
function $w($y,$z,$A){return function(){var $B=Array.prototype.slice.call(arguments,0)
A.callOnRegistered(function(){if(y.livechat.getLimit()<$z){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$y+'" is not included in your current package. Upgrade your package to enable this function.')
return}
return $A.apply(this,$B)})}}
function $x($y){$y+=''
return $y.charAt(0).toUpperCase()+$y.substring(1)}
if((typeof L==='function')&&L.prototype&&!L.__jx__no_fqname){L.prototype.__jx__fqname_chain=[(L.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_LiveChatAPI"].join('')
L.prototype.__jx__fqname="meshim_widget_controllers_LiveChatAPI"}
return L})()
b.__$$__meshim_widget_widgets_EmailField=(function(){var x=b.__$$__jx_ui_EmailField,y=x,z=b.__$$__meshim_widget_widgets_Input
x=function(A,B,C,D,E){if(!(this instanceof x))return new x(A,B,C,D,E)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,A,B,C,D,E)
z.__constructor.call(this)}
x.__jx__jcss={}
x.prototype=e(y.prototype)
x.prototype.__jx__super=z
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_EmailField"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_EmailField"}
return x})()
b.__$$__meshim_widget_components_chatWindow_SettingsMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_About,null,null,[],{}]],{}],[b.__$$__meshim_widget_widgets_menu_Section,"chat_actions",null,[[b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat,null,null,[],{}]],{"id":"chat_actions"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__chat_actions')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat'),L=K.$('channel').$('chatting$bool')
function M(){F.autobind(L,'value',function(N){G.setDisplay(N?'':'none')})}
M()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_SettingsMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_SettingsMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_SettingsMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[v(98)],{}],[b.__$$__meshim_widget_widgets_Body,null,null,[[b.__$$__jx_ui_Localizer,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"tagName":"a","href":"https://www.zopim.com/privacy#cookie","target":"_blank"}]],{"content":v(102)}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[v(103)],{"addClass":"note"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(104)}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary"}]],{"id":"form"}]],{}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_controllers_CookieLaw,M=K.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function N(){G.on('submit',function(O){O.preventDefault()
L.setUserChoice(!1)})
H.on('click',function(){M.update('chat_panel')})}
N()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_cookieForm_Decline"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_cookieForm_Decline"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[v(98)],{}],[b.__$$__meshim_widget_widgets_Body,null,null,[[b.__$$__jx_ui_Localizer,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"tagName":"a","href":"https://www.zopim.com/privacy#cookie","target":"_blank"}]],{"content":v(99)}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[v(100)],{"addClass":"note"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"addClass":"wide","value":v(101)}]],{"id":"form"}]],{}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_CookieLaw,L=J.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function M(){G.on('submit',function(N){N.preventDefault()
L.update('chat_panel')
K.setUserChoice(!0)})}
M()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_cookieForm_Accept"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_cookieForm_Accept"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__jx_ui_TextArea,"comments",null,[],{"id":"comments","addClass":"comments"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(28)}],[b.__$$__meshim_widget_widgets_Button,"skip",null,[v(97)],{"id":"skip","addClass":"secondary"}]],{"addClass":"padding_bottom"}]],{"id":"form"}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__message'),I=w.get(z+'__comments'),J=w.get(z+'__skip')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_utils_Strings,O=M.root.$('livechat'),P=O.$('settings').$('forms').$('post_chat_form'),Q=O.$('channel').$('rating$string'),R,S=M.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string'),T=P.$('comments_messages')
function U(){I.setLabelElement(H)
F.autobind(T,'value',function(){V()})
F.autobind(Q,'value',function(W){R=W
V()})
G.on('submit',function(W){W.preventDefault()
if(!F.validate())return
P.write({'comments_user$string':I.getValue().trim()})
S.update('chat_panel')})
J.on('click',function(){S.update('chat_panel')})}
function V(){H.setText(N.get(T.$$(R+'.message$string')))
I.setPlaceholder(N.get(T.$$(R+'.placeholder$string')))}
U()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".comments":{"width":"100%","height":"25%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_postChatForm_CommentsForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_postChatForm_CommentsForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_TextField=(function(){var x=b.__$$__jx_ui_TextField,y=x,z=b.__$$__meshim_widget_widgets_Input
x=function(A,B,C,D,E){if(!(this instanceof x))return new x(A,B,C,D,E)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,A,B,C,D,E)
z.__constructor.call(this)}
x.__jx__jcss={}
x.prototype=e(y.prototype)
x.prototype.__jx__super=z
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TextField"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_TextField"}
return x})()
b.__$$__meshim_widget_widgets_Branding=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_widgets_branding_Zopim,K=b.__$$__meshim_widget_widgets_branding_Zendesk,L={'icon_font_zopim':J,'icon_font_zendesk':K},M=I.root.$('livechat'),N=M.$('ui').$('mobile$bool'),O=M.$('settings').$('theme').$('branding').$('type$string'),P,Q=M.$('settings').$('branding').$('hide_branding$bool'),R,S
F.setHideOnMobile=function(X){R=n(X)
V()}
F.setHideOnDesktop=function(X){S=n(X)
V()}
function T(){F.autobind(O,'value',U)
F.autobind(N,'value',V)
F.autobind(Q,'value',W)}
function U(X){var Y=L[X]
if(!Y||(P instanceof Y))return
if(P)P.destroy()
P=new Y(F)}
function V(){var X=N.getValue()
if(X&&R){F.setDisplay('none')
return}
if(!X&&S){F.setDisplay('none')
return}
F.setDisplay('')}
function W(X){F.setVisibility(X?'hidden':'')}
T()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Branding
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"display":"inline-block","color":"$$brandingLinkColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Branding"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Branding"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_RatingBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_ButtonBar,"rating_options",null,[[b.__$$__meshim_widget_widgets_ratingBar_GoodRatingButton,null,null,[],{"value":"good","addClass":"rating_button"}],[b.__$$__meshim_widget_widgets_ratingBar_BadRatingButton,null,null,[],{"value":"bad","addClass":"rating_button"}]],{"noMangle":"true","id":"rating_options","addClass":"button_bar"}],[b.__$$__meshim_widget_widgets_ButtonBar,"rating_selected",null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"selected_rating",null,[],{"id":"selected_rating","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,"selected_description",null,[],{"id":"selected_description","class":"description"}]],{"width":"100%","value":"selected","class":"rating_button selected"}]],{"noMangle":"true","id":"rating_selected","display":"none","addClass":"button_bar"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__rating_options'),H=w.get(z+'__rating_selected'),I=w.get(z+'__selected_rating'),J=w.get(z+'__selected_description')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_utils_Utils,O=M.root.$$('livechat.ui.chat_button'),P=M.root.$$('livechat.ui.popout$bool'),Q=M.root.$('livechat').$('channel'),R=M.root.$('livechat').$('ui').$('chat_window').$('post_chat_form').$('stack_index$int'),S,T,U={'unrated':v(139),'rated':v(140)}
function V(){F.setDataNode=W
F.setDescription=X
F.on('mouseenter',$b)
F.on('mouseleave',$a)
G.on('change',Y)
if(v&&v.onLanguage){v.onLanguage(Z)
F.onDestruction(function(){v.unLanguage(Z)})}
Z()
W(Q.$('rating$string'))}
function W($d){if(S)F.autounbind(S,'value',$$)
S=$d
F.autobind(S,'value',$$)}
function X($d){$d=n($d)
if($d)F.addClass('allow_description')
else F.removeClass('allow_description')}
function Y(){if(P.getValue()){O.write({'unread_count$int':0})}
var $d=G.getValue()
if($d==T){G.setValue(null)
$d=null}
T=$d
$_($d)
S&&S.update($d)
R.update(1)
Z()}
function Z(){F.setTitle(T?U.rated:U.unrated)}
function $$($d){if(T===$d)return
T=$d
$_(T)
$a()
Z()}
function $_($d){G.setValue($d)
I.setIcon($d=='good'?'happier':'sadder')
J.setText($d=='good'?v(141):v(142))}
function $a(){T?$c():$b()}
function $b(){G.setDisplay('')
H.setDisplay('none')}
function $c(){G.setDisplay('none')
H.setDisplay('')}
F.on('mouseover',function($d){var $e=$d.relatedTarget||$d.fromElement
if(!$e||!N.contains(F,$e)){F.fire('mouseenter',$d)}})
F.on('mouseout',function($d){var $e=$d.relatedTarget||$d.toElement
if(!$e||!N.contains(F,$e)){F.fire('mouseleave',$d)}})
V()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_RatingBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative",".button_bar":{"width":"100%",".rating_button":{"borderColor":"inherit","borderWidth":"0px","padding":"7px 5px 3px","&":"$$ratingBarButton",".rating_icon":{"display":"inline","lineHeight":1.3},"&.hover, &.selected":{"&":"$$ratingBarButtonHighlight"},"&.active":{"&":"$$ratingBarButtonActive"},"&:last-child:not(:first-child)":{"borderLeft":"none"},"&:first-child":{"borderTopLeftRadius, borderBottomLeftRadius":"$$ratingBarBorderRadius"},"&:last-child":{"borderTopRightRadius, borderBottomRightRadius":"$$ratingBarBorderRadius"}},".description":{"display":"none","marginLeft":"5px","lineHeight":0.9,"verticalAlign":"top"}}},"**self.allow_description":{".description":{"display":"inline"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_RatingBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_RatingBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Gravatar,"gravatar",null,[],{"id":"gravatar","addClass":"profile_avatar"}]],{"class":"avatar_cell"}],[b.__$$__jx_ui_html_td,"content_cell",null,[[b.__$$__meshim_widget_widgets_profileCard_MemberName,"name_holder",null,[],{"id":"name_holder","addClass":"profile_name"}],[b.__$$__meshim_widget_widgets_profileCard_TitleHolder,"title_holder",null,[],{"id":"title_holder","addClass":"profile_title"}]],{"pseudo":"content_cell","id":"content_cell"}]],{}]],{}]],{"class":"profile_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__gravatar'),H=w.get(z+'__content_cell'),I=w.get(z+'__name_holder'),J=w.get(z+'__title_holder')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N,O,P
function Q(){P=M.root.$$('livechat.ui.mobile$bool')
G.on('click',function(){F.onGravatarClick&&F.onGravatarClick()})
H.on('click',function(){F.onContentClick&&F.onContentClick()})
if(P.getValue()){F.addClass('mobile')}
F.setDataNode=R
F.setTitleNode=S}
function R(T){G.setMemberNode(T)
if(T){N=T.$('display_name$string')
I.setDataNode(N)
O=T.$('title$string')
S(O)}
else{I.setDataNode(null)
S(null)}}
function S(T){O=T
J.setDataNode(O)}
Q()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"width":"100%","position":"relative",".profile_table":{"width":"100%","tableLayout":"fixed","fontSize":"100%","borderSpacing":"0px","borderCollapse":"collapse","td":{"padding":"0px"}},".profile_avatar":{"width":"32px","height":"32px","borderWidth":"$$profileCardAvatarBorderWidth","borderStyle":"$$profileCardAvatarBorderStyle","borderColor":"$$profileCardAvatarBorderColor","borderRadius":"$$profileCardAvatarRadius","boxShadow":"$$profileCardAvatarShadow"},".profile_name":{"fontWeight":"bold","color":"$$profileCardNameColor"},".profile_title":{"color":"$$profileCardTitleColor"},".profile_name, .profile_title":{"lineHeight":"1.2"}},"**self.mobile":{".profile_table":{"height":"100%"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_MultiProfilesCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Gravatar,"gravatar",null,[],{"id":"gravatar","pseudo":"profile_avatar"}]],{"pseudo":"avatar_cell"}],[b.__$$__jx_ui_html_td,"content_cell",null,[[b.__$$__meshim_widget_widgets_profileCard_MemberName,"agent0",null,[],{"id":"agent0"}],[b.__$$__meshim_widget_widgets_profileCard_MemberName,"agent1",null,[],{"id":"agent1"}]],{"pseudo":"content_cell","id":"content_cell"}]],{}]],{}]],{"class":"profile_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__gravatar'),H=w.get(z+'__content_cell'),I=w.get(z+'__agent0'),J=w.get(z+'__agent1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N,O
function P(){O=M.root.$$('livechat.ui.mobile$bool')
F.setDataNode=Q
G.on('click',function(){F.onGravatarClick&&F.onGravatarClick()})
H.on('click',function(){F.onContentClick&&F.onContentClick()})
if(O.getValue()){F.addClass('mobile')}}
function Q(S){if(N){if(N===S)return
F.autounbind(N,'keys',R)}
N=S
if(!N)return
G.setGroupNode(S)
F.autobind(N,'keys',R)}
function R(){var S=N.getKeys()
I.setDataNode(S.length<=0?null:N.$(S[0]).$('display_name$string'))
J.setDataNode(S.length<=1?null:N.$(S[1]).$('display_name$string'))}
P()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_MultiProfilesCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"width":"100%","position":"relative",".profile_table":{"width":"100%","tableLayout":"fixed","fontSize":"100%","borderSpacing":"0px","borderCollapse":"collapse","td":{"padding":"0px"}},".profile_avatar":{"width":"32px","height":"32px","&":"$$profileCardAvatar"},".profile_name":{"lineHeight":"1.2"}},"**self.mobile":{".profile_table":{"height":"100%"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_MultiProfilesCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_MultiProfilesCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat'),K=J.$('agents'),L=J.$('triggers').$('agents'),M=J.$('ui').$('chat_window'),N=[]
function O(){F.autobind(K,'value',P)
F.autobind(L,'value',P)
if(v&&v.onLanguage){v.onLanguage(P)
F.onDestruction(function(){v.unLanguage(P)})}}
function P(){var Q=K.getValue(),R=L.getValue()
N.length=0
var S
if(Q)for(S in Q)if(Q.hasOwnProperty(S))if(Q[S]['typing$bool'])N.push(Q[S]['display_name$string'])
if(R)for(S in R)if(R.hasOwnProperty(S))if(R[S]['typing$bool'])N.push(S)
if(N.length){F.setText((N.length==1?v(143):v(144)).replace('<name>',N.join(', ')))
F.setDisplay('')
M.update({'agent_typing$bool':!0})}
else{F.setDisplay('none')
M.update({'agent_typing$bool':!1})}}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer
x.__jx__jcss={"**self":{"width":"100%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_TypingRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_TypingRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName,"chat_name",null,[],{"id":"chat_name","addClass":"chat_name"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage,"chat_msg",null,[],{"id":"chat_msg","addClass":"chat_msg"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage,"resend",null,[],{"id":"resend","addClass":"resend_chat_msg"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption,"chat_option",null,[],{"id":"chat_option","addClass":"chat_option"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile,"chat_file",null,[],{"id":"chat_file","addClass":"chat_file"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__chat_name'),H=w.get(z+'__chat_msg'),I=w.get(z+'__resend'),J=w.get(z+'__chat_option'),K=w.get(z+'__chat_file')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){function N(){F.setDataNode=O}
function O(P){G.setDataNode(P)
H.setDataNode(P)
I.setDataNode(P)
J.setDataNode(P)
K.setDataNode(P)}
N()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"marginTop":"10px",".chat_name":{"fontWeight":"bold","&":"$$chatLogName"},"&.visitor .chat_name":{"color":"$$chatLogVisitorNameColor"},"&.agent .chat_name":{"color":"$$chatLogAgentNameColor"},".chat_msg":{"whiteSpace":"pre-wrap","wordWrap":"break-word","&":"$$chatLogMsg"},".resend_chat_msg":{"marginLeft":"6px"},".chat_option":{"input":{"margin":"2px 5px"}},".chat_file":{"marginTop, marginBottom":"5px","&":"$$chatLogFile"}},"**self.group_children":{"marginTop":"0px",".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BasicRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BasicRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_FakeInput=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_widgets_Input
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!z.__jx__jcss_generated){u.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
if(!E)E={}
E.tagName||(E.tagName='div')
x.call(this,A,B,C,D,E)
y.__constructor.call(this)}
z.__jx__jcss={}
z.prototype=e(x.prototype)
z.prototype.__jx__super=y
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FakeInput"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_FakeInput"}
return z})()
b.__$$__meshim_widget_widgets_Select=(function(){var x=b.__$$__jx_ui_PrettySelect,y=b.__$$__meshim_widget_widgets_Input,z=b.__$$__meshim_widget_widgets_IconFont,A=b.__$$__meshim_widget_utils_BindClass
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
if(!B.__jx__jcss_generated){u.generate(this,B.prototype.__jx__fqname,B.__jx__jcss,null,B)
B.__jx__jcss_generated=!0}
if(!G)G={}
G.tagName||(G.tagName='select')
x.call(this,C,D,E,F,G)
if(this.container){this.container.addClass(this.__jx__fqname)
this.iconFont=new z(this.container,null,null,null,{addClass:'select_icon',icon:'arrow_down'})
this.container.insertBefore(this.iconFont,this.container.getFirstChild())
A.mobile(this.container)
A.rtl(this.container)}
y.__constructor.call(this)}
B.__jx__jcss={"&.mobile.invalid, &.rtl.mobile.invalid":{"paddingRight, paddingLeft":"$$inputPadding"},".select_placeholder":{"overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},".select_icon":{"float":"right","marginTop":"3px"},"&.rtl .select_icon":{"float":"left"},"&.mobile":{".select_placeholder":{"lineHeight":"26px"},".select_icon":{"marginTop":"8px"}}}
B.prototype=e(x.prototype)
B.prototype.__jx__super=y
B.prototype.setValidity=function(C){if(this.container){C=n(C)
this.container[C?'removeClass':'addClass']('invalid')}
return x.prototype.setValidity.apply(this,arguments)}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Select"].join('')
B.prototype.__jx__fqname="meshim_widget_widgets_Select"}
return B})()
b.__$$__meshim_widget_components_chatButton_Bubble=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatButton_BubbleRenderer,null,null,[],{"addClass":"bubble_renderer"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_button'),K=J.$('bubble').$('display$bool'),L=-1
function M(){F.autobind(K,'value',function(N){if(L==N)return
L=N
F.setDisplay(L?'':'none')})}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_Bubble
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","width":"100%","top, left":0,"cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_Bubble"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_Bubble"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_PhoneField=(function(){var x=b.__$$__jx_ui_TextField,y=b.__$$__meshim_widget_widgets_Input
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!z.__jx__jcss_generated){u.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
if(!E)E={}
E.pattern||(E.pattern='(^$|[0-9]+)')
x.call(this,A,B,C,D,E)
y.__constructor.call(this)}
z.__jx__jcss={}
z.prototype=e(x.prototype)
z.prototype.__jx__super=y
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_PhoneField"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_PhoneField"}
return z})()
b.__$$__meshim_widget_widgets_chatLogRenderer_CardRenderer=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_widgets_card_EndChatCard,z=b.__$$__meshim_widget_widgets_card_FormCard,A=b.__$$__meshim_widget_widgets_card_IntegrationCard,B=b.__$$__meshim_widget_widgets_card_LoginCard,C=b.__$$__meshim_widget_widgets_card_OfflineFormCard,D=b.__$$__meshim_widget_widgets_card_TextCard,E={'end_chat':y,'form':z,'integration':A,'login':B,'offline_form':C,'text':D}
function F(G,H,I,J,K){if(!(this instanceof F))return new F(G,H,I,J,K)
x.call(this,G,H,I,J,K)
this.$node
this.instantiated
var L=this
this._createCard=function(M){L.createCard(M)}}
F.prototype=e(x.prototype)
F.prototype.setDataNode=function(G){if(this.$node==G)return
if(this.$node)this.autounbind(this.$node,'value',this._createCard)
this.$node=G
if(this.$node)this.autobind(this.$node,'value',this._createCard)}
F.prototype.createCard=function(G){if(this.instantiated)return
if(!('card' in G))return
var H=G['card']
if(!('type$string' in H))return
var I=E[H['type$string']]
if(!I)return
new I(this,null,null,null,{addClass:'card'}).setDataNode(this.$node.$('card'))
this.instantiated=!0}
if((typeof F==='function')&&F.prototype&&!F.__jx__no_fqname){F.prototype.__jx__fqname_chain=[(F.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_CardRenderer"].join('')
F.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_CardRenderer"}
return F})()
b.__$$__meshim_widget_widgets_TextArea=(function(){var x=b.__$$__jx_ui_TextArea,y=x,z=b.__$$__meshim_widget_widgets_Input
x=function(A,B,C,D,E){if(!(this instanceof x))return new x(A,B,C,D,E)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,A,B,C,D,E)
z.__constructor.call(this)}
x.__jx__jcss={}
x.prototype=e(y.prototype)
x.prototype.__jx__super=z
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TextArea"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_TextArea"}
return x})()
b.__$$__meshim_widget_widgets_Avatar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Gravatar,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=/^agent/gi,K=/^visitor/gi,L=/^agent:trigger$/
function M(){F.setMemberId=N}
function N(O){if(L.test(O)){F.setDataNode(I.root.$$('livechat.settings.concierge'))}
else if(J.test(O)){F.setDataNode(I.root.$$('livechat.agents').$(O))}
else if(K.test(O)){F.setDataNode(I.root.$$('livechat.profile'))}
else{F.setDataNode(I.root.$$('livechat.settings.concierge'))}
return F}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Avatar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Gravatar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Gravatar
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Avatar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Avatar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_menu_Header,"label",null,[v(32)],{"id":"label","addClass":"label","selectable":"false"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","addClass":"email mobile_error_icon","placeholder":v(33),"required":"true"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"error_message",null,[v(34)],{"id":"error_message","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(26),"class":"short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary short"}]],{}]],{"id":"form","noValidate":"true"}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__label'),I=w.get(z+'__email'),J=w.get(z+'__error_message'),K=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=N.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),P=N.root.$('livechat').$('ui').$('chat_window').$('email_transcript_notification').$('last_sent_email$string'),Q=N.root.$('livechat').$('channel')
function R(){I.setLabelElement(H).setErrorMessageElement(J).setValidity(!0)
G.on('submit',function(S){S.preventDefault()
if(!I.validate(!0))return
var T=I.getValue()
Q.write({'email_transcript$string':T})
P.update(T)
O.update('email_transcript_notification')
I.reset()})
K.on('click',function(){O.update('')})
F.autobind(O,'value',function(S){if(S==F.getName()){I.setValidity(!0)
I.focus()}})}
R()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EmailTranscriptMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_EmailTranscriptMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,"content",null,[],{"id":"content","class":"content"}]],{"addClass":"chat_bubble"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=/^agent/,K=/^visitor:/,L
function M(){F.setDataNode=N}
function N(P){if(!L){G.setDataNode(P)}
if(L)F.autounbind(L,'value',O)
L=P.$('nick$string')
F.autobind(L,'value',O)}
function O(P){if(!P)return
if(J.test(P)){F.setArrowPointing('left')
F.setFloat('left')}
else if(K.test(P)){F.setArrowPointing('right')
F.setFloat('right')}}
M()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble
x.__jx__jcss={"**self":{"maxWidth":"90%","clear":"both","padding":"5px 10px","margin":"0px 5px","radius":"4px",".arrow_border":{"top":"auto !important","bottom":"5px","marginTop":"0px","borderWidth":"6px"},".arrow_background":{"top":"auto !important","bottom":"6px","marginTop":"0px","borderWidth":"5px"},".content":{"marginTop":"0px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatBubble"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatBubble"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_form_Profile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"available_types_el",null,[[b.__$$__jx_ui_Label,"label_logged_out",null,[v(107),[b.__$$__jx_ui_Label,"label_logged_out_required",null,[],{"id":"label_logged_out_required"}]],{"id":"label_logged_out","addClass":"label label_logged_out"}],[b.__$$__jx_ui_Label,"label_logged_in",null,[v(108)],{"id":"label_logged_in","addClass":"label label_logged_in"}],[b.__$$__meshim_widget_widgets_FakeInput,"fake_input",null,[[b.__$$__meshim_widget_widgets_Avatar,"avatar",null,[],{"id":"avatar","addClass":"avatar"}],[b.__$$__jx_ui_Label,"internal_placeholder",null,[v(109)],{"id":"internal_placeholder","addClass":"internal_placeholder"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"logged_in_name",null,[],{"id":"logged_in_name","addClass":"logged_in_name"}],[b.__$$__jx_ui_Label,"logged_in_email",null,[],{"id":"logged_in_email","addClass":"logged_in_email"}],[b.__$$__jx_ui_Label,"logged_in_phone",null,[],{"id":"logged_in_phone","addClass":"logged_in_phone"}],[b.__$$__jx_ui_Widget,"logged_in_actions",null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"logged_in_edit",null,[],{"id":"logged_in_edit","icon":"pencil","title":v(110)}],[b.__$$__meshim_widget_widgets_iconFont_Button,"logged_in_clear",null,[],{"id":"logged_in_clear","icon":"dustbin","title":v(111)}]],{"id":"logged_in_actions","addClass":"logged_in_actions"}],[b.__$$__jx_ui_Label,"divider",null,[v(112)],{"id":"divider","addClass":"profile_divider"}],[b.__$$__jx_ui_Label,"external_placeholder_one",null,[],{"id":"external_placeholder_one","addClass":"external_placeholder_one"}],[b.__$$__jx_ui_Label,"external_placeholder_many_prefix",null,[v(113)],{"id":"external_placeholder_many_prefix","addClass":"external_placeholder_many_prefix"}],[b.__$$__jx_ui_Label,"external_placeholder_many",null,[],{"id":"external_placeholder_many","addClass":"external_placeholder_many"}]],{"addClass":"floater_inner_seriously"}]],{"addClass":"floater_inner"}]],{"addClass":"floater"}]],{"id":"fake_input","addClass":"fake_input","tabIndex":"0"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"error_message",null,[v(114)],{"id":"error_message","addClass":"error_message","useDisplay":"true"}]],{"id":"available_types_el","addClass":"field profile_field"}],[b.__$$__jx_ui_Widget,"editing_el",null,[[b.__$$__jx_ui_Label,"label_edit_internal",null,[v(107),[b.__$$__jx_ui_Label,"label_edit_internal_required",null,[],{"id":"label_edit_internal_required"}]],{"id":"label_edit_internal","addClass":"label label_edit_internal"}],[b.__$$__meshim_widget_widgets_TextField,"name",null,[],{"id":"name","placeholder":v(105),"addClass":"input_name standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"name_error",null,[v(115)],{"id":"name_error","addClass":"error_message","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","placeholder":v(33),"addClass":"input_email standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"email_error",null,[v(116)],{"id":"email_error","addClass":"error_message","useDisplay":"true"}],[b.__$$__jx_ui_Widget,"edit_external",null,[[b.__$$__jx_ui_Label,null,null,[v(117)],{"addClass":"edit_external_label"}],[b.__$$__jx_ui_Widget,"edit_external_types",null,[],{"id":"edit_external_types","addClass":"edit_external_types"}]],{"id":"edit_external","addClass":"edit_external"}]],{"id":"editing_el","addClass":"editing field profile_field"}],[b.__$$__jx_ui_Widget,"phone_field",null,[[b.__$$__jx_ui_Label,"phone_label",null,[v(118),[b.__$$__jx_ui_Label,"phone_required",null,[],{"id":"phone_required"}]],{"id":"phone_label","addClass":"label"}],[b.__$$__meshim_widget_widgets_PhoneField,"phone",null,[],{"id":"phone","addClass":"input_phone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"phone_error",null,[v(119)],{"id":"phone_error","addClass":"error_message","useDisplay":"true"}]],{"id":"phone_field","addClass":"field field_phone"}]],{"class":"profile_form"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__available_types_el'),H=w.get(z+'__label_logged_out'),I=w.get(z+'__label_logged_out_required'),J=w.get(z+'__label_logged_in'),K=w.get(z+'__fake_input'),L=w.get(z+'__avatar'),M=w.get(z+'__internal_placeholder'),N=w.get(z+'__logged_in_name'),O=w.get(z+'__logged_in_email'),P=w.get(z+'__logged_in_phone'),Q=w.get(z+'__logged_in_actions'),R=w.get(z+'__logged_in_edit'),S=w.get(z+'__logged_in_clear'),T=w.get(z+'__divider'),U=w.get(z+'__external_placeholder_one'),V=w.get(z+'__external_placeholder_many_prefix'),W=w.get(z+'__external_placeholder_many'),X=w.get(z+'__error_message'),Y=w.get(z+'__editing_el'),Z=w.get(z+'__label_edit_internal'),$$=w.get(z+'__label_edit_internal_required'),$_=w.get(z+'__name'),$a=w.get(z+'__name_error'),$b=w.get(z+'__email'),$c=w.get(z+'__email_error'),$d=w.get(z+'__edit_external'),$e=w.get(z+'__edit_external_types'),$f=w.get(z+'__phone_field'),$g=w.get(z+'__phone_label'),$h=w.get(z+'__phone_required'),$i=w.get(z+'__phone'),$j=w.get(z+'__phone_error')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var $k=(function(){var $m=b.__$$__meshim_widget_controllers_DataController,$n=b.__$$__meshim_widget_utils_Utils,$o=b.__$$__meshim_widget_utils_Strings,$p=b.__$$__meshim_widget_widgets_iconFont_Auth,$q=b.__$$__meshim_widget_widgets_iconFont_AuthButton,$r={'facebook':a,'twitter':a,'google':a},$s={'facebook':a,'twitter':a,'google':a},$t={'name':v(105),'email':v(33)},$u={'name':$_,'email':$b,'phone':$i},$v=v(106),$w=$m.root.$('livechat').$('settings').$('login'),$x=$w.$('allowed_types'),$y=$w.$('phone_display$bool'),$z,$A=0,$B,$C,$D=$m.root.$('livechat').$('profile'),$E=$D.$('logged_in$bool'),$F,$G=$D.$('auth').$('type$string'),$H,$I=$m.root.$('livechat').$('ui').$('mobile$bool'),$J,$K,$L
F.submit=function(){var $U=$_.getValue().trim(),$V=$b.getValue().trim(),$W=$i.getValue().trim(),$X={}
if(!($F&&!$U&&!$V)){$X.name=$U
$X.email=$V}
if($z){$X.phone=$W}
$m.livechat.updateProfile($X)
$C=!1
$R()}
F.setHideLabel=function(){$L=!0
$R()}
F.setDisabled=function($U){$U=n($U)
F.disabled=$U
F[$U?'addClass':'removeClass']('disabled')
$_.setDisabled($U)
$b.setDisabled($U)
$f.setDisplay($U?'none':'')}
F.validate=function($U){var $V=!0,$W=[$_,$b]
for(var $X=0,$Y=$W.length;$X<$Y;$X++)if(!$W[$X].validate($U?$V:!1))$V=!1
$V?G.removeClass('invalid'):G.addClass('invalid')
X.setDisplay($V?'none':'')
if(!$i.validate($U?$V:!1))$V=!1
return $V}
F.setDataNode=function($U){if($K==$U)return
if($K)F.autounbind($K,'value',$M)
$K=$U
if($K)F.autobind($K,'value',$M)}
F.getValue=function(){var $U={},$V=$_.getValue()
if(!$n.isDefaultName($V))$U.name=$V
$U.email=$b.getValue()
$U.phone=$i.getValue()
return $U}
function $M(){var $U=$K.getValue(),$V,$W,$X
for($W in $U)if($U.hasOwnProperty($W)){$V=$U[$W]
$X=$u[$V['name$string']]
if(!$X)continue
$X.setRequired(('required$bool' in $V)?$V['required$bool']:!0)
$X.setPlaceholder($V['placeholder$string']||$t[$V['name$string']])}}
F.setRequired=function($U){$U=n($U)
$_.setRequired($U)
$b.setRequired($U)
I.setText($U?' *':'')
$$.setText($U?' *':'')
if(!$U){X.setDisplay('none')
$_.hideErrorMessage()
$b.hideErrorMessage()}}
F.setPhoneRequired=function($U){$U=n($U)
$i.setRequired($U)
$h.setText($U?' *':'')
if(!$U){$i.hideErrorMessage()}}
F.autobind($y,'value',function($U){$z=$U
$f.setDisplay($U?'':'none')})
function $N(){var $U=$x.getValue(),$V
$A=0
$B=$U['email$bool']
for(var $W in $r)if($r.hasOwnProperty($W)){if($U[$W+'$bool']){$A++
$V=$W
$r[$W].setDisplay('')
$s[$W].setDisplay('')}
else{$r[$W].setDisplay('none')
$s[$W].setDisplay('none')}}
if($A==1){U.setText($v.replace('<name>',$o.external_login[$V]||$V))}
$R()}
function $O($U){$F=$U
$R()}
function $P($U){$H=$U
$R()}
function $Q($U){if(!$U)return
if('display_name$string' in $U){if(!$n.isDefaultName($U['display_name$string'])){N.setText($U['display_name$string']||'')
$_.setValue($U['display_name$string']||'')}
else{N.setText('')
$_.setValue('')}}
if('email$string' in $U){O.setText($U['email$string']||'')
$b.setValue($U['email$string']||'')}
if('phone$string' in $U){P.setText($U['phone$string']||'')
$i.setValue($U['phone$string']||'')}
$R()}
function $R(){if($H){$C=!1}
H.setDisplay(!$F?'':'none')
J.setDisplay($F?'':'none')
G.setDisplay(!$C?'':'none')
L.setDisplay(!$F?'none':'')
M.setDisplay(!$F&&$B?'':'none')
U.setDisplay(!$F&&!$B&&($A==1)?'':'none')
V.setDisplay(!$F&&!$B&&($A>1)?'':'none')
W.setDisplay(!$F&&($B||($A>1))?'':'none')
T.setDisplay(!$F&&$B&&$A?'':'none')
Y.setDisplay($C?'':'none')
$d.setDisplay(((!$F||$C)&&$A)?'':'none')
if($L){H.setDisplay('none')
J.setDisplay('none')
Z.setDisplay('none')}
N.setDisplay($F?'':'none')
O.setDisplay($F?'':'none')
P.setDisplay(($F&&F.disabled)?'':'none')
Q.setDisplay($F&&!F.disabled?'':'none')
R.setDisplay($H?'none':'')
F.setClass('profile_form')
if(F.disabled){F.addClass('disabled')}
if($J){F.addClass('mobile')}
if(v&&v.onLanguage)$T()
F.addClass($F?'logged_in':'logged_out')
F.addClass($B?'internal_enabled':'internal_disabled')
F.addClass($C?'editing':'available_types')
if(!$A)F.addClass('external_none')
else if($A==1)F.addClass('external_one')
else F.addClass('external_many')}
function $S(){var $U
$J=$I.getValue()
if($J){F.addClass('mobile')}
L.setDataNode($D)
X.setDisplay('none')
F.removeClass('editing').addClass('available_types')
for($U in $r)if($r.hasOwnProperty($U)){$r[$U]=new ($J?$q:$p)(W,null,null,null,$J?{name:$U,addClass:'profile_form_icon '+$U,icon:$U+'_out'}:{name:$U,addClass:'profile_form_icon '+$U,icon:$U,title:$o.external_login[$U]||$U,tabIndex:0})
$s[$U]=new ($J?$q:$p)($e,null,null,null,$J?{name:$U,addClass:'float profile_form_edit_external '+$U,icon:$U+'_out'}:{name:$U,addClass:'profile_form_icon '+$U,icon:$U,title:$o.external_login[$U]||$U,tabIndex:0})}
W.on('keyup',$V)
W.on('click',$V)
$e.on('keyup',$W)
$e.on('click',$W)
function $V($Z){if(!$Z)return
if($Z.keyCode&&$Z.keyCode!=13)return
var $0=$Z.target.jx_wrapper
if($0==W)return
while($0.parentNode!=W)$0=$0.parentNode
var $1=$0.getName&&$0.getName()
$1&&$m.livechat.doExternalLogin($1)}
function $W($Z){if(!$Z)return
if($Z.keyCode&&$Z.keyCode!=13)return
var $0=$Z.target.jx_wrapper
if($0==$e)return
while($0.parentNode!=$e)$0=$0.parentNode
var $1=$0.getName&&$0.getName()
$1&&$m.livechat.doExternalLogin($1)}
function $X($Z){$Z&&$Z.preventDefault()
$_.setValidity(!0)
$b.setValidity(!0)
$C=!0
$R()
$_.focus()}
function $Y($Z){$Z&&$Z.preventDefault()
$m.livechat.doExternalLogout()
K.blur()
if($I.getValue()){$X()}}
K.on('focus',function(){if($F)return
if(F.disabled)return
if(!$B)return
$X()})
R.on('click',$X)
S.on('click',$Y)
$i.setLabelElement($g)
$_.setErrorMessageElement($a).hideErrorMessage()
$b.setErrorMessageElement($c).hideErrorMessage()
$i.setErrorMessageElement($j).hideErrorMessage()
F.autobind($x,'value',$N)
F.autobind($E,'value',$O)
F.autobind($D,'value',$Q)
F.autobind($G,'value',$P)
if(v&&v.onLanguage){v.onLanguage($T)
$T()}}
function $T(){F[v.rtl()?'addClass':'removeClass']('rtl')}
$S()})()
for(var $l in $k)if($k.hasOwnProperty($l))F[$l]=$k[$l]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_form_Profile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".label_logged_out":{},".label_logged_in":{},".fake_input":{"position":"relative","overflow":"hidden","*zoom":1},".avatar":{"float":"left","width, height":"32px","marginRight":"5px","&":"$$profileFormLoggedIn"},"&.rtl .avatar":{"float":"right","marginRight":0,"marginLeft":"5px"},".internal_placeholder":{"float":"left","vertical-align":"top","cursor":"pointer"},"&.rtl .internal_placeholder":{"float":"right"},".profile_divider":{"vertical-align":"top","marginRight":"5px"},"&.rtl .profile_divider":{"marginRight":0,"marginLeft":"5px"},".internal_placeholder, .profile_divider":{"lineHeight":"18px","*lineHeight":"18px !important"},".external_placeholder_one":{"vertical-align":"top"},".external_placeholder_many":{"vertical-align":"top"},".external_placeholder_many_prefix":{"vertical-align":"top"},".editing":{".input_name":{},".input_email":{},".input_phone":{}},".edit_external":{"marginTop":"5px","color":"$$menuHeaderColor",".edit_external_label":{},".edit_external_types":{"display":"inline-block",".profile_form_edit_external":{"display":"inline-block"}}},"&.rtl .edit_external":{".edit_external_types":{".profile_form_edit_external":{"marginLeft":0,"marginRight":"5px"}}},".logged_in_name":{"fontWeight":"bold"},".logged_in_name, .logged_in_email":{"display":"block","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","paddingRight":"40px"},"&.rtl .logged_in_name, &.rtl .logged_in_email":{"paddingRight":0,"paddingLeft":"40px"},".logged_in_actions":{"position":"absolute","top, right":0,"color":"$$menuHeaderColor","marginTop":"5px","marginRight":"5px","button":{"marginLeft":"5px","&:hover, &:focus":{"color":"$$menuColor"}},".divider":{"fontSize":"$$fontSizeXS","lineHeight":"1.5","margin":"0 5px","cursor":"default","opacity":0.5}},"&.rtl .logged_in_actions":{"right":"auto","left":0},".floater":{"display":"block","overflow":"hidden","*position":"relative !important",".floater_inner":{"display":"table",".floater_inner_seriously":{"display":"table-cell","verticalAlign":"middle"}}},"&.internal_enabled":{".floater":{"float":"right","*float":"right !important"}},"&.rtl.internal_enabled":{".floater":{"float":"left"}},"&.logged_in, &.internal_disabled":{".floater":{".floater_inner":{"tableLayout":"fixed","width":"100%","height":"32px"}}},"&.logged_in":{".fake_input":{"background":"$$formSubmittedBg","borderRadius":"$$formSubmittedRadius","borderWidth":"$$formSubmittedBorderWidth","borderStyle":"$$formSubmittedBorderStyle","borderColor":"$$formSubmittedBorderColor"},".floater":{"float":"none !important"}},"&.logged_out.internal_disabled, &.logged_in":{".fake_input":{}},".profile_form_icon":{"cursor":"pointer","display":"inline-block","marginLeft":"5px","height, fontSize":"17px","lineHeight":"21px","*padding":"0 !important","*marginLeft":"5px !important"},"&.rtl .profile_form_icon":{"marginLeft":0,"marginRight":"5px"},".field":{"marginBottom":"15px","&.last-child":{"marginBottom":0},"&.profile_field":{"*padding":"0 !important","&.invalid":{}}},".label":{"display":"block","marginBottom":"5px","fontWeight":"bold"},"&.mobile":{".avatar":{"width, height":"36px"},"&.available_types":{".fake_input":{".internal_placeholder":{"lineHeight":"25px"},".profile_divider":{"lineHeight":"44px","marginRight":"10px"}},".floater":{"position":"absolute","top":0,"right":"-2px","height":"100%"},".profile_form_icon":{"marginLeft, marginRight":0,"color":"$$menuColor","width":"auto","height":"46px","padding":"13px 12px 10px","borderWidth":"0 0 0 1px","borderRadius":"0",".icon_font":{"textAlign":"center"}},"&.logged_in":{".fake_input":{},".floater":{"position":"relative","top, right, left":0}}},".logged_in_name, .logged_in_email":{"paddingRight":"80px"},".logged_in_actions":{"margin":"0px","height":"100%","button":{"height":"100%","padding":"0 5px"}},".editing":{".name_container, .email_container":{"position":"relative","input.invalid ~ .error_icon":{"display":"block"}}},".edit_external":{".edit_external_types":{"display":"block","marginTop":"10px"}}},"&.rtl.mobile":{".floater":{"right":"auto","left":"-2px"},".profile_divider":{"marginRight":0,"marginLeft":"10px"},".logged_in_name, .logged_in_email":{"paddingRight":0,"paddingLeft":"80px"}},"&.disabled":{".field":{"marginBottom":0},".fake_input":{"border":"none","background":"transparent"},".field_phone":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_Profile"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_form_Profile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_form_DepartmentSelect=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_DefaultDataNode,z=b.__$$__meshim_widget_widgets_Select,A=b.__$$__meshim_widget_utils_Utils,B=b.__$$__meshim_widget_utils_Strings,C=b.__$$__jx_ui_Option
function D(F,G,H,I,J){if(!(this instanceof D))return new D(F,G,H,I,J)
this.inputSuffix='select'
if(!D.__jx__jcss_generated){u.generate(this,D.prototype.__jx__fqname,D.__jx__jcss,null,D)
D.__jx__jcss_generated=!0}
z.call(this,F,G,H,I,J)
this.departments_label_path='livechat.settings.forms.pre_chat_form.form.2.label$string'
this.default_departments_label=A.descendsObj(y,this.departments_label_path)
this.$departments=x.root.$('livechat').$('departments')
this.$departments_label=x.root.$$(this.departments_label_path)
this.prev_value=null
var K=this
this.autobind(this.$departments,'value',function(){K.setOptions()})
this.autobind(this.$departments_label,'value',function(){K.updateBlankOption()})
this.onDestruction(function(){if(K.blank_option){K.blank_option.destroy()
K.blank_option=null}})
this.setSelectedIndex(0)}
D.__jx__jcss={}
D.prototype=e(z.prototype)
D.prototype.__jx__super=z
D.prototype.validate=function(){if(this.isBlank){this.setValidity(!0)
return !0}
return z.prototype.validate.call(this)}
D.prototype.reset=function(){this.setSelectedIndex(0)}
D.prototype.setHide=function(F){this.isHide=n(F)
this.setOptions()}
D.prototype.setRequired=function(){var F=z.prototype.setRequired.apply(this,arguments)
this.updateBlankOption()
return F}
D.prototype.updateBlankOption=function(){if(!this.blank_option)return
if(this.getRequired()){if(this.children[0]==this.blank_option){this.removeChild(this.blank_option)}}
else{this.blank_option.setText(B.get(this.$departments_label)==this.default_departments_label?B.pre_chat_offline_form.department_any:'—')
if(this.children[0]!==this.blank_option){this.insertBefore(this.blank_option,this.children[0])}}}
D.prototype.setOptions=function(){var F=this.$departments.getValue(),G=this.$departments.$('filter_enabled$bool').getValue(),H={},I=''
if(!F){this.prev_value=this.getValue()}
else if(this.prev_value!==null){I=this.prev_value
this.prev_value=null}
else{I=this.getValue()}
this.isBlank=!0
for(var J in F)if(F.hasOwnProperty(J)){if(J=='filter_enabled$bool')continue
if(G&&!F[J]['display$bool'])continue
if(F[J]){this.isBlank=!1
H[J]=F[J]}}
if(this.isBlank||this.isHide){(this.container||this).parentNode.setDisplay('none')
return}
else{(this.container||this).parentNode.setDisplay('')}
this.empty()
var K=this.getName(),L
this.blank_option=L=new C(this,null,null,null,{name:'',value:'',className:'input_input_'+this.inputSuffix});(L.container||L).addClass('input')
H=E(H)
for(J in H)if(H.hasOwnProperty(J)){L=new C(this,null,null,[H[J]['name$string']+(H[J]['status$string']=='online'?'':' ('+v(39)+')')],{name:K,value:H[J]['id$int'],className:'input_input_'+this.inputSuffix});(L.container||L).addClass('input')
if(I==L.getValue()){this.setValue(I)}}
this.updateBlankOption()}
function E(F){var G=[],H=[]
for(var I in F)if(F.hasOwnProperty(I)){if(F.hasOwnProperty(I)){if(F[I]['status$string']=='offline'){H.push({id$int:I,name$string:F[I]['name$string'],status$string:'offline'})}
else{G.push({id$int:I,name$string:F[I]['name$string'],status$string:'online'})}}}
G.sort(J)
H.sort(J)
return G.concat(H)
function J(K,L){if(K['name$string']<L['name$string'])return -1
if(K['name$string']>L['name$string'])return 1
return 0}}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_DepartmentSelect"].join('')
D.prototype.__jx__fqname="meshim_widget_widgets_form_DepartmentSelect"}
return D})()
b.__$$__meshim_widget_components_ChatButton=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_FloatingFrame,null,null,[[b.__$$__meshim_widget_widgets_fontLoader_ZopimFont,null,null,[],{}],[b.__$$__meshim_widget_components_chatButton_Bubble,null,null,[],{"addClass":"bubble"}],[b.__$$__meshim_widget_components_chatButton_Button,null,null,[],{"addClass":"button"}]],{"cursor":"pointer"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_Config,J=b.__$$__meshim_widget_controllers_CookieLaw,K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_controllers_GoogleAnalytics,M=b.__$$__meshim_widget_controllers_PopoutController,N=b.__$$__meshim_widget_controllers_UIController,O=b.__$$__meshim_widget_utils_Utils,P=b.__$$__meshim_widget_utils_Mobile,Q=b.__$$__meshim_widget_controllers_ErrorHandler,R=b.__$$__jx_ui_Widget,S=K.root.$('livechat'),T=S.$('settings'),U=S.$('ui'),V=U.$('chat_button'),W=U.$('chat_button').$('display$bool'),X=-1,Y=U.$('chat_button').$('bubble').$('display$bool'),Z=-1,$$=V.$('button_width$int'),$_=V.$('button_height$int'),$a=V.$('bubble_height$int'),$b=T.$('theme').$('chat_button').$('position$string'),$c,$d=T.$('theme').$('chat_button').$('position_mobile$string'),$e,$f=T.$$('theme.chat_button.h_offset$int'),$g=T.$$('theme.chat_button.v_offset$int'),$h=T.$$('theme.chat_button.h_offset_mobile$int'),$i=T.$$('theme.chat_button.v_offset_mobile$int'),$j=U.$('mobile$bool').getValue(),$k=U.$('mockup$bool').getValue(),$l=S.$('account').$('key$string'),$m,$n=0,$o=10,$p=10,$q=10
function $r(){Q.bind(F.iwin)
F.dom.className='zopim'
F.content.addClass('meshim_widget_Widget')
F.wrapper.addClass(F.__jx__fqname)
F.ibody.style.overflow='hidden'
if($k){F.setPosition('relative')}
if($j){F.wrapper.addClass('mobile').setStyle({position:'absolute',top:0,left:0})
F.content.setStyle('textAlign','left')
F.iframe.style.verticalAlign='top'
$m=new R(F,null,null,null,{tagName:'a',position:'absolute',width:'100%',height:'100%',top:0,left:0})
$m.setAttribute('target',I.POPOUT_WINDOW_PREFIX+$l.getValue())
$m.setAttribute('href',M.getPopoutURL())
$m.on('click',function($D){L.trackEvent('Button Clicked')
$m.setAttribute('href',M.getPopoutURL())
V.write({'unread_count$int':0})
if(J.isCookieDenied()){if(window.confirm(v(0)+'\n\n'+v(1)+': https://www.zopim.com/privacy#cookie')){M.openPopout(!0)&&$D.preventDefault()
J.setUserChoice(!0)}
else{$D.preventDefault()}}
else{M.openPopout(!0)&&$D.preventDefault()}})
F.autobind($h,'value',function($D){$D=parseInt($D)
if($q==$D)return
if(!isNaN($D)&&$D>=0){$q=$D
$B()}})
F.autobind($i,'value',function($D){$D=parseInt($D)
if($o==$D)return
if(!isNaN($D)&&$D>=0){$o=$D
$B()}})
F.autobind($d,'value',function($D){if(!$D||$e==$D)return
if($D!='bl'&&$D!='br')$D='br'
if($e)F.wrapper.removeClass($e)
$e=$D
if($e)F.wrapper.addClass($e)
$B()})
r.window.on('orientationchange',$B)
r.window.on('resize',$B)
r.window.on('scroll',$B)}
if(!$j){F.autobind(Y,'value',function($D){if(Z==$D)return
Z=$D
$v()})
F.autobind($f,'value',function($D){$D=parseInt($D)
if(!isNaN($D)&&$D>=0){$p=$D
$t()}})
F.autobind($g,'value',function($D){$D=parseInt($D)
if(!isNaN($D)&&$D>=0){$n=$D
$t()}})
F.autobind($$,'value',function($D){if(!$D)return
$v()})
F.autobind($_,'value',function($D){if(!$D)return
$v()})
F.autobind($a,'value',function($D){if(!$D)return
$v()})
F.autobind($b,'value',function($D){if($c)F.wrapper.removeClass($c)
$c=$D
if($c)F.wrapper.addClass($c)
$t()})}
F.autobind(W,'value',function($D){if(X==$D)return
X=$D
$s()})
F.on('click',function(){L.trackEvent('Button Clicked')
V.write({'button_clicked$bool':!0})
if($j)M.openPopout(!0)
else N.userShowBadgeOrWindow()})}
function $s(){var $D=X
if($j&&!$z){F.setDisplay('none')}
else{F.setDisplay($D?'':'none')}
$v()}
function $t(){$u()
if(q.bugs.noBoxSizing){window.setTimeout(function(){F.dom.className=F.dom.className},100)}}
function $u(){if($j)return
if($k){F.setTop('').setRight('').setBottom('').setLeft('')
return}
switch($c){case 'br':F.setTop('').setLeft('').setMarginLeft('').setRight($p).setBottom($n)
break
case 'bm':F.setTop('').setRight('').setBottom($n).setLeft('50%').setMarginLeft(-Math.round(F.__width/2)+'px')
break
case 'bl':F.setTop('').setRight('').setMarginLeft('').setBottom($n).setLeft($p)
break
case 'tr':F.setBottom('').setLeft('').setMarginLeft('').setTop($n).setRight($p)
break
case 'tm':F.setRight('').setBottom('').setTop($n).setLeft('50%').setMarginLeft(-Math.round(F.__width/2)+'px')
break
case 'tl':F.setRight('').setBottom('').setMarginLeft('').setTop($n).setLeft($p)
break
default:break}}
function $v(){$x()
l($w,F,'once')}
function $w(){$x()
$B()}
function $x(){if($j)return
var $D=$$.getValue()||10
if($D!==F.getWidth())F.setWidth($D+'px')
var $E=$_.getValue()||10
if(Z)$E+=$a.getValue()||0
if($E!==F.getHeight())F.setHeight($E+'px')}
var $y,$z,$A=300
function $B(){if(!$j)return
window.clearTimeout($y)
$y=window.setTimeout($C,$A)}
function $C(){var $D=P.getZoomLevel(),$E=(1/$D).toFixed(2),$F=window.pageXOffset,$G=window.pageYOffset,$H=window.innerWidth,$I=window.innerHeight,$J=F.wrapper.getWidth(),$K=F.wrapper.getHeight()
for(var $L=0,$M=O.cssom_prefixes.length;$L<$M;$L++){F.wrapper.setStyle(O.cssom_prefixes[$L]+'Transform','scale('+$E+')')
F.wrapper.setStyle(O.cssom_prefixes[$L]+'TransformOrigin','0 0')}
var $N=$J/$D,$O=$K/$D,$P=P.getOffset(),$Q=(q.isIOS&&$D>=1)?'absolute':'fixed',$R,$S,$T,$U
F.setStyle({position:$Q,width:$N+'px',height:$O+'px',top:'',right:'',bottom:'',left:''})
if($Q==='fixed'){$R='auto'
$S=$e==='bl'?'auto':($q/$D)+'px'
$T=($o/$D)+'px'
$U=$e==='bl'?($q/$D)+'px':'auto'}
else{$R=Math.ceil($G+$I-$O-($o/$D)-$P.top)+'px'
$S='auto'
$T='auto'
if($e==='bl'){$U=Math.ceil($F+($q/$D)-$P.left)+'px'}
else{$U=Math.floor($F+$H-$N-($q/$D)-$P.left)+'px'}}
F.setStyle({top:$R,right:$S,bottom:$T,left:$U})
if(!$z){$z=!0
F.setDisplay(X?'':'none')}}
$r()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_ChatButton
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_FloatingFrame.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_FloatingFrame
x.__jx__jcss={"**self":{"*width":"100%"},"&.bm, &.tm":{"margin":"0 auto"},"&.rm, &.lm":{".favicon":{"transform":"rotate(-90deg)","filter":"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}},"&.br, &.bm, &.bl":{".button":{"borderTopLeftRadius, borderTopRightRadius":"$$chatButtonRadius"},".favicon":{"borderTopLeftRadius":"$$chatButtonRadius"},".rtl .favicon":{"borderTopLeftRadius":0,"borderTopRightRadius":"$$chatButtonRadius"}},"&.tr, &.tm, &.tl":{".button":{"borderBottomLeftRadius, borderBottomRightRadius":"$$chatButtonRadius"},".favicon":{"borderBottomLeftRadius":"$$chatButtonRadius"},".rtl .favicon":{"borderBottomLeftRadius":0,"borderBottomRightRadius":"$$chatButtonRadius"}},"&.rm":{".button":{"borderTopLeftRadius, borderBottomLeftRadius":"$$chatButtonRadius"},".favicon":{"borderTopLeftRadius":"$$chatButtonRadius"}},"&.lm":{".button":{"borderTopRightRadius, borderBottomRightRadius":"$$chatButtonRadius"},".favicon":{"borderTopRightRadius":"$$chatButtonRadius"}},"&.mobile":{".button":{"borderRadius":"$$chatButtonRadius"},"&.br":{".favicon":{"borderBottomLeftRadius":"$$chatButtonRadius"}},"&.bl":{".favicon":{"borderBottomRightRadius":"$$chatButtonRadius"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_ChatButton"].join('')
x.prototype.__jx__fqname="meshim_widget_components_ChatButton"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_AgentProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ProfileCard,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_common_ChainedValueDataNode,K=I.root.$$('livechat.settings.concierge'),L=K.$('title$string'),M
function N(P){M.call(F,P)
if(!P||P===K)return
var Q=P.$('title$string'),R=new J(Q,L)
F.setTitleNode(R)}
function O(){M=F.setDataNode||function(){}
F.setDataNode=N}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_AgentProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ProfileCard.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ProfileCard
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AgentProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_AgentProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_VisitorProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ProfileCard,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I
function J(L){I.call(F,L)
if(L)F.setTitleNode(L.$('email$string'))}
function K(){I=F.setDataNode||function(){}
F.setDataNode=J}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_VisitorProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ProfileCard.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ProfileCard
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_VisitorProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_VisitorProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Form,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,"internal_section",null,[[b.__$$__meshim_widget_widgets_menu_Header,"label",null,[v(131)],{"id":"label","addClass":"label","selectable":"false"}],[b.__$$__jx_ui_Widget,"name_email_container",null,[[b.__$$__meshim_widget_widgets_TextField,"name",null,[],{"id":"name","placeholder":v(105),"required":"true","addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"name_error",null,[v(132)],{"id":"name_error","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","placeholder":v(33),"required":"true","addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"email_error",null,[v(133)],{"id":"email_error","useDisplay":"true"}]],{"id":"name_email_container"}],[b.__$$__jx_ui_Widget,"phone_container",null,[[b.__$$__meshim_widget_widgets_PhoneField,"phone",null,[],{"id":"phone","placeholder":v(15),"addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"phone_error",null,[v(134)],{"id":"phone_error","useDisplay":"true"}]],{"id":"phone_container"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(135),"addClass":"save short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"cancel secondary"}]],{}]],{"id":"internal_section","addClass":"flow"}]],{"noValidate":"true"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__internal_section'),H=w.get(z+'__label'),I=w.get(z+'__name_email_container'),J=w.get(z+'__name'),K=w.get(z+'__name_error'),L=w.get(z+'__email'),M=w.get(z+'__email_error'),N=w.get(z+'__phone_container'),O=w.get(z+'__phone'),P=w.get(z+'__phone_error'),Q=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var R=(function(){var T=b.__$$__meshim_widget_controllers_DataController,U=b.__$$__meshim_widget_utils_Utils,V=b.__$$__meshim_widget_utils_BindClass,W=T.root.$('livechat'),X=W.$('profile'),Y=W.$('ui'),Z=X.$('auth').$('type$string'),$$,$_=Y.$('chat_window'),$a=X.$('logged_in$bool'),$b,$c=X.$('display_name$string'),$d=X.$('email$string'),$e=X.$('phone$string'),$f=$_.$('menu_stack_name$string'),$g=$_.$('profile_menu').$('index$int'),$h=W.$('settings').$('login'),$i=$h.$('allowed_types'),$j=$h.$('phone_display$bool'),$k
function $l(){V.mobile(F)
J.setLabelElement(H).setErrorMessageElement(K).setValidity(!0)
L.setErrorMessageElement(M).setValidity(!0)
O.setErrorMessageElement(P).setValidity(!0)
F.autobind($a,'value',function($o){$b=$o})
F.autobind(Z,'value',function($o){$$=$o
I.setDisplay($o?'none':'')})
F.autobind($c,'value',function($o){if(U.isDefaultName($o))$o=''
$o=$o||''
J.setValue($o)
J.setInitialValue($o)
$o&&J.hidePlaceholder()})
F.autobind($d,'value',function($o){$o=$o||''
L.setValue($o)
L.setInitialValue($o)
$o&&L.hidePlaceholder()})
F.autobind($e,'value',function($o){$o=$o||''
O.setValue($o)
O.setInitialValue($o)
$o&&O.hidePlaceholder()})
F.autobind($j,'value',function($o){$k=$o
N.setDisplay($o?'':'none')})
F.autobind($f,'value',function($o){if($o=='profile_menu'){$m()}})
F.autobind($g,'value',function($o){if($o==2){$m()}})
Q.on('click',function($o){$o.preventDefault()
$f.update('')})
F.on('submit',function($o){$o.preventDefault()
if(!F.validate(!0))return
var $p={}
if(!$$){$p.name=J.getValue().trim()
$p.email=L.getValue().trim()}
if($k){$p.phone=O.getValue().trim()}
T.livechat.updateProfile($p)
$f.update('')})
F.autobind($i,'value',$n)}
function $m(){J.reset()
L.reset()
O.reset()}
function $n(){var $o=$i.getValue()
if(!$o)return
G.setDisplay($o['email$bool']?'':'none')}
$l()})()
for(var S in R)if(R.hasOwnProperty(S))F[S]=R[S]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Form.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Form
x.__jx__jcss={".cancel":{"display":"none"},"&.mobile":{".cancel":{"display":"inline-block"},".external":{"marginBottom":"20px",".header":{"padding":"10px 0","borderTop":"none"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Edit"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Edit"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Avatar,"avatar",null,[],{"id":"avatar","addClass":"log_avatar","hideAuthType":"true"}]],{"class":"avatar_cell"}],[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,"content",null,[],{"id":"content","addClass":"content"}]],{}]],{}]],{}]],{"class":"basicAvatarRenderer"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__avatar'),H=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K
function L(){F.setDataNode=M}
function M(O){if(K)F.autounbind(K,'value',N)
H.setDataNode(O)
K=O.$('nick$string')
F.autobind(K,'value',N)}
function N(O){if(!O)return
G.setMemberId(O)}
L()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_table.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_table
x.__jx__jcss={"**self":{"position":"relative","width":"100%","tableLayout":"fixed","borderSpacing":"0px","borderCollapse":"collapse","fontSize":"100%","td":{"verticalAlign":"top","padding":"0px"},".log_avatar":{"width":"24px","height":"24px"},".avatar_cell":{"width":"24px"},".content":{"marginTop":"0px","marginLeft":"8px"}},"**self.group_children":{".log_avatar":{"display":"none"},".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_TextField,null,null,[],{"addClass":"unstyled"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_TextField.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_TextField
x.__jx__jcss={"**self":{"color":"$$badgeInputColor","padding":"$$badgeInputPadding","borderWidth":"$$badgeInputBorderWidth","borderStyle":"$$badgeInputBorderStyle","borderColor":"$$badgeInputBorderColor","borderRadius":"$$badgeInputRadius","boxShadow":"$$badgeInputShadow"},"&:focus, &.focus":{"color":"$$badgeInputFocusColor","background":"$$badgeInputFocusBg","borderColor":"$$badgeInputFocusBorderColor","boxShadow":"$$badgeInputFocusShadow"},"&::placeholder":{"color":"$$badgeInputPlaceholderColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_TextField"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_TextField"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,"header",null,[],{"id":"header"}],[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__meshim_widget_widgets_RatingBar,"rating_bar",null,[],{"id":"rating_bar","addClass":"rating_bar","description":"true"}],[b.__$$__meshim_widget_widgets_motif_Chat,null,null,[],{"addClass":"chat_motif"}]],{"addClass":"scrollable_frame"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__header'),H=w.get(z+'__message'),I=w.get(z+'__rating_bar')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Strings,N=b.__$$__meshim_widget_utils_BindClass,O=L.root.$('livechat').$('settings').$('forms').$('post_chat_form'),P=O.$('header$string'),Q=O.$('message$string'),R=L.root.$('livechat').$('channel'),S=R.$('rating$string')
function T(){N.mobile(F)
I.setDataNode(S)
F.autobind(P,'value',function(){G.setText(M.get(P))})
F.autobind(Q,'value',function(){H.setText(M.get(Q))})}
T()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={"**self":{"textAlign":"center"},".rating_bar":{"display":"inline-block","width":"150px"},".chat_motif":{"position":"absolute","bottom, left":0},".scrollable_frame":{"paddingBottom":"0 !important"},"&.mobile":{".chat_motif":{"position":"relative"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_postChatForm_RatingForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_postChatForm_RatingForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ActionBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}],[b.__$$__jx_ui_Widget,"$$defaultplacement$$",null,[],{"addClass":"actions","container":"default","id":"$$defaultplacement$$"}],[b.__$$__meshim_widget_widgets_Branding,null,null,[],{"addClass":"branding","hideOnMobile":"true"}]],{"class":"action_bar","selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__$$defaultplacement$$')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
function K(){J.mobile(F)
J.rtl(F)}
K()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ActionBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","bottom, left":0,"overflow":"hidden","zIndex":10,"width":"$$actionBarWidth","height":"$$actionBarHeight","color":"$$actionBarColor","background":"$$actionBarBg","paddingLeft, paddingRight":"$$actionBarPadding"},".border_overlay":{"borderWidth":"$$actionBarBorderWidth","borderStyle":"$$actionBarBorderStyle","borderColor":"$$actionBarBorderColor"},".actions":{"float":"left"},".branding":{"position":"relative","float":"right","color":"$$actionBarColor","lineHeight":"$$actionBarHeight",".meshim_widget_widgets_IconFont":{"*color":"$$actionBarColor","*lineHeight":"$$actionBarHeight","*textDecoration":"none"},"&:hover":{"color":"$$actionBarHoverColor"}},"&.rtl":{".actions":{"float":"right"},".branding":{"float":"left"}},"&.mobile":{"top":0,"bottom":"auto","display":"none","zIndex":102,".actions":{"float":"none","position":"absolute","width, height":"100%","top, left":0}},"&.mobile.rtl":{"left":"auto","right":0}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ActionBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ActionBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_AutoResizeTextArea=(function(){var x=b.__$$__meshim_widget_widgets_TextArea
function y(B,C,D,E,F){if(!(this instanceof y))return new y(B,C,D,E,F)
this.$node
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
this.minHeight=0
this.maxHeight=window.Infinity
this.vBoxOffset=0
this.hBoxOffset=0
if(!F)F={}
F.overflow||(F.overflow='hidden')
F.overflowY||(F.overflowY='hidden')
x.call(this,B,C,D,E,F)
this.style.wordWrap='break-word'
this.style.resize='none'
this.compatMode=q.bugs.noBoxSizing&&this.doc.compatMode!="CSS1Compat"&&this.doc!=document
if(!this.compatMode){this.fakeTextArea=new x(this.doc.body,null,null,null,{className:this.getClassName(),tabIndex:"-1"})
try {this.fakeTextArea.setStyle("position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; word-wrap:break-word; height:0 !important; overflow:hidden; min-height:0 !important; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box;")}catch(H){;}
this.onDestruction(function(){this.fakeTextArea.destroy()})}
this._updateHeight=function(){this.updateHeight()}
if('onpropertychange' in this.dom){if('oninput' in this.dom){this.on('input',this._updateHeight)
this.on('keyup',this._updateHeight)}
else{this.on('propertychange',this._updateHeight)}}
else{this.on('input',this._updateHeight)}
var G=this
l(function(){if(!G.dom)return
G.updateStyles()})
this._updateValueNode=function(){this.updateValueNode()}
this._readValueNode=function(H){G.readValueNode(H)}
this.on('input',this._updateValueNode)
this.on('change',this._updateValueNode)
this.on('keyup',this._updateValueNode)}
y.__jx__jcss={"**self":{}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
y.prototype.updateValueNode=function(){if(!this.$node)return
this._updatingValueNode=!0
this.$node.$('value$string').update(this.getValue())
this._updatingValueNode=!1}
y.prototype.readValueNode=function(B){if(!this.$node)return
if(this._updatingValueNode)return
if(B==null)return
this.setValue(B)}
y.prototype.updateHeight=function(){if(!this.compatMode&&!this.fakeTextArea)return
if(this.active)return
var B,C,D
this.active=!0
if(this.compatMode){this.style.height=0
B=this.dom.offsetHeight-this.vBoxOffset}
else{this.fakeTextArea.setValue(this.getValue())
this.fakeTextArea.style.overflowY=this.style.overflowY
D=parseInt(this.style.height,10)
this.fakeTextArea.style.width=Math.max(Math.max(this.dom.offsetWidth,0)-this.hBoxOffset,0)+'px'
this.fakeTextArea.dom.scrollTop=0
this.fakeTextArea.dom.scrollTop=90000.0
B=this.fakeTextArea.dom.scrollTop}
var E=this.maxHeight-this.vBoxOffset,F=this.minHeight-this.vBoxOffset
if(B>E){B=E
C='scroll'}
else if(B<F){B=F}
B+=this.vBoxOffset
B=Math.max(B,0)
this.style.overflowY=C||'hidden'
this.style.height=B+'px'
this.$node&&this.$node.update({'height$int':B,'overflow$bool':!!C})
var G=this
l(function(){G.active=!1})}
var z=['Top','Bottom'],A=['Left','Right']
y.prototype.updateBoxOffset=function(){this.vBoxOffset=0
this.hBoxOffset=0
var B=this.getComputedStyle(),C
if(B.boxSizing==='border-box'||B.MozBoxSizing==='border-box'||B.webkitBoxSizing==='border-box'||(q.isIE<=7&&this.doc.compatMode!="CSS1Compat")){for(C=0;C<2;C++){this.vBoxOffset+=(parseInt(B['padding'+z[C]],10)||0)+(parseInt(B['border'+z[C]+'Width'],10)||0)}
for(C=0;C<2;C++){this.hBoxOffset+=(parseInt(B['padding'+A[C]],10)||0)+(parseInt(B['border'+A[C]+'Width'],10)||0)}}
return this}
y.prototype.setDataNode=function(B){if(this.$node){this.autounbind(this.$node.$('value$string'),'value',this._readValueNode)}
this.$node=B
if(this.$node){this.autobind(this.$node.$('value$string'),'value',this._readValueNode)
this.updateValueNode()
this.updateHeight()}
return this}
y.prototype.setValue=function(B){x.prototype.setValue.call(this,B)
this.updateValueNode()
this.updateHeight()
return this}
y.prototype.updateMinMaxHeight=function(){var B=this.getComputedStyle()
this.minHeight=parseInt(B.minHeight,10)
this.maxHeight=parseInt(B.maxHeight,10)
if(!this.minHeight&&isNaN(this.maxHeight)){this.style.height=''
this.minHeight=this.maxHeight=this.dom.offsetHeight}
if(isNaN(this.maxHeight)){this.maxHeight=this.minHeight}
this.$node&&this.$node.update({'min_height$string':this.minHeight,'max_height$string':this.maxHeight})
return this}
y.prototype.updateClonedStyles=function(){if(!this.fakeTextArea)return
var B=['fontFamily','fontSize','fontWeight','letterSpacing','textTransform','wordSpacing','textIndent']
this.fakeTextArea.style.lineHeight='99px'
if(this.fakeTextArea.style.lineHeight==='99px')B.push('lineHeight')
this.fakeTextArea.style.lineHeight=''
var C=this.getComputedStyle()
for(var D=0,E=B.length;D<E;D++){this.fakeTextArea.style[B[D]]=C[B[D]]}}
y.prototype.updateStyles=function(){if(q.isIE8)this.style.minHeight=''
this.updateMinMaxHeight()
this.updateClonedStyles()
this.updateBoxOffset()
if(q.isIE8)this.style.minHeight=(this.minHeight-this.vBoxOffset)+'px'
this.updateHeight()
var B=this
if(q.isIE8)l(function(){B.updateHeight()})
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AutoResizeTextArea"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_AutoResizeTextArea"}
return y})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble,"bubble",null,[],{"id":"bubble","addClass":"chat_bubble"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"clear_both"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__bubble')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){function J(){F.setDataNode=function(K){G.setDataNode(K)}}
J()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{".clear_both":{"clear":"both","height":"0px","overflow":"hidden","lineHeight":"0px","fontSize":"0px"}},"**self.group_children":{".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__jx_ui_ViewStack,"stack",null,[[b.__$$__meshim_widget_widgets_AgentProfileCard,"agent_card",null,[],{"id":"agent_card","class":"card"}],[b.__$$__meshim_widget_widgets_MultiProfilesCard,"multi_agents_card",null,[],{"id":"multi_agents_card","class":"card cursor_pointer"}]],{"id":"stack"}]],{"pseudo":"served_by_cell"}],[b.__$$__jx_ui_html_td,"rating_cell",null,[],{"pseudo":"rating_cell","id":"rating_cell","class":"display_none"}]],{}]],{}]],{"class":"profile_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__stack'),H=w.get(z+'__agent_card'),I=w.get(z+'__multi_agents_card'),J=w.get(z+'__rating_cell')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_widgets_RatingBar,O=M.root.$('livechat'),P=O.$('agents'),Q=O.$$('settings.concierge'),R=O.$$('channel.chatting$bool'),S=O.$$('settings.rating.enabled$bool'),T=O.$$('ui.chat_window.main_stack_name$string'),U=O.$$('ui.chat_button'),V=O.$$('ui.popout$bool'),W=O.$$('ui.mobile$bool').getValue(),X=null
function Y(){G.on('instantiate',function($b){var $c=G.children[$b]
$c.onGravatarClick=$$
$c.onContentClick=$$
if($b===0)H=$c
else I=$c})
G.setIndex(0)
F.autobind(P,'keys',Z)
F.autobind(R,'value',$_)
F.autobind(S,'value',$_)
if(W){F.addClass('mobile')}}
function Z(){var $b=P.getKeys().length
if($b>1){if(G.getIndex()===1)return
G.setIndex(1)
H.setDataNode(null)
I.setDataNode(P)}
else{if(G.getIndex()!==0){G.setIndex(0)
I.setDataNode(null)}
var $c
if($b===1){$c=P.$(P.getKeys()[0])
H.addClass('cursor_pointer')}
else{$c=Q
H.removeClass('cursor_pointer')}
H.setDataNode($c)}}
function $$(){if(V.getValue()){U.write({'unread_count$int':0})}
if(!P.getKeys().length)return
T.update('agent_list')}
function $_(){var $b=n(R.getValue()),$c=n(S.getValue())
$a($b&&$c)}
function $a($b){if($b){if(!X){X=new N(J).setPseudo('rating_bar')
X.setDataNode(O.$$('channel.rating$string'))}
J.removeClass('display_none')}
else{J.addClass('display_none')}}
Y()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"height":"100%",".profile_table":{"width":"100%"},".card":{".avatar_cell":{"width":"50px","verticalAlign":"bottom",".profile_avatar":{"position":"absolute","bottom":"0","width, height":"50px","borderWidth":"$$chatPanelProfileCardAvatarBorderWidth","borderStyle":"$$chatPanelProfileCardAvatarBorderStyle","borderColor":"$$chatPanelProfileCardAvatarBorderColor","borderRadius":"$$chatPanelProfileCardAvatarRadius","boxShadow":"$$chatPanelProfileCardAvatarShadow"}},".content_cell":{"padding":"0 10px !important","verticalAlign":"bottom","width":"100%",".profile_name, .profile_title":{"overflow":"hidden","width":"100%","whiteSpace":"nowrap"}}},".rating_cell":{"width":"50px","verticalAlign":"bottom"},".cursor_pointer":{"cursor":"pointer"},".display_none":{"display":"none"}},"&.mobile":{".card":{".avatar_cell":{"width":"40px","verticalAlign":"middle",".profile_avatar":{"position":"relative","width, height":"40px"}},".content_cell":{"verticalAlign":"middle",".profile_name":{"marginTop":"3px"}}},".rating_cell":{"width":"88px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,"left_cell",null,[],{"id":"left_cell"}],[b.__$$__jx_ui_html_td,"right_cell",null,[],{"id":"right_cell"}]],{}]],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__left_cell'),H=w.get(z+'__right_cell')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_widgets_Avatar,L=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble,M,N,O=/^agent/
function P(){F.setDataNode=Q}
function Q(S){if(M)F.autounbind(M,'value',R)
N=S
M=S.$('nick$string')
F.autobind(M,'value',R)}
function R(S){if(!S)return
G.empty()
H.empty()
G.removeClass('avatar_cell')
H.removeClass('avatar_cell')
if(O.test(S)){new K(G).setHideAuthType(!0).setMemberId(S).addClass('log_avatar')
new L(H).setDataNode(N)
G.addClass('avatar_cell')}
else{new K(H).setHideAuthType(!0).setMemberId(S).addClass('log_avatar')
new L(G).setDataNode(N)
H.addClass('avatar_cell')}}
P()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_table.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_table
x.__jx__jcss={"**self":{"position":"relative","width":"100%","fontSize":"100%","tableLayout":"fixed","borderSpacing":"0px","borderCollapse":"collapse","td":{"verticalAlign":"bottom","padding":"0px"},".chat_bubble":{"display":"inline","margin":"0 8px"},".log_avatar":{"width":"32px","height":"32px"},".avatar_cell":{"width":"32px"}},"**self.group_children":{".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_AgentProfileCard,null,null,[],{"addClass":"profile_card"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_AgentProfileCard.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_AgentProfileCard
x.__jx__jcss={"**self":{"marginBottom":"10px",".avatar_cell":{"verticalAlign":"top","width":"32px",".profile_avatar":{"width, height":"32px","bottom":"auto"}},".content_cell":{"padding":"0 10px !important","verticalAlign":"middle"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_agentList_AgentProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_agentList_AgentProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Form=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"container",null,[],{"id":"container"}]],{"class":"generated_form"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__container')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_widgets_form_Field,K=b.__$$__meshim_widget_widgets_form_CheckBoxMultiple,L=b.__$$__meshim_widget_widgets_form_RadioButtonMultiple,M=b.__$$__meshim_widget_widgets_form_DepartmentSelect,N=b.__$$__meshim_widget_widgets_TextField,O=b.__$$__meshim_widget_widgets_TextArea,P=b.__$$__meshim_widget_widgets_EmailField,Q=b.__$$__meshim_widget_widgets_Select,R=b.__$$__meshim_widget_widgets_ErrorMessage,S=b.__$$__meshim_widget_utils_Strings,T=b.__$$__jx_core_ObjectUtil,U=b.__$$__jx_ui_CheckBox,V=b.__$$__jx_ui_Label,W=b.__$$__jx_ui_Option,X={'text':N,'email':P,'textarea':O,'checkbox':U,'select':Q,'checkbox_multiple':K,'radio':L,'department':M},Y={'name':1,'email':1,'phone':1},Z,$$,$_={},$a={},$b
F.submitSelf=function(){if(!Z)return
var $d={},$e
for(var $f in $$)if($$.hasOwnProperty($f)){if($$[$f]['hidden$bool'])continue
$e=$_[$$[$f]['name$string']]
if(!$e)continue
$d[$f]={"value_user$string":$e.getValue()}
if($e.getChecked){$d[$f]['checked_user$bool']=$e.getChecked()}
if($e.getOptions&&!($e instanceof M)){$d[$f]['options']=$e.getOptions(!0)}}
Z.update($d)}
F.submit=function($d,$e,$f){if(!$d)return
var $g={},$h,$i
for($i in $$)if($$.hasOwnProperty($i)){if($$[$i]['hidden$bool'])continue
$h=$_[$$[$i]['name$string']]
if(!$h)continue
if($f){$g[$i]={"value_user$string":$h.getValue()}
if($h.getChecked){$g[$i]['checked_user$bool']=$h.getChecked()}
if($h.getOptions&&!($h instanceof M)){$g[$i]['options']=$h.getOptions(!0)}}
else{$g[$i]={"name$string":$$[$i]['name$string'],"value$string":$h.getValue()}
if($h.getChecked){$g[$i]['checked$bool']=$h.getChecked()}
if($h.getOptions&&!($h instanceof M)){$g[$i]['options']=$h.getOptions()}}}
if($e){var $j=$e.getValue()
for($i in $j)if($j.hasOwnProperty($i)){if(!$j[$i]||!Y[$i])continue
$g[$i]={'name$string':$i,'value$string':$j[$i]}}}
$d.write($g)}
F.setReadOnly=function($d){$b=n($d)
F[$b?'addClass':'removeClass']('read_only')
return F}
F.setDataNode=function($d){if(Z==$d)return
if(Z)F.autounbind(Z,'value',$c)
Z=$d
if(Z)F.autobind(Z,'value',$c)}
function $c(){var $d,$e,$f,$g
$d=Z.getValue()
if(T.equal($$,$d))return
G.empty()
$_={}
$a={}
$$=$d
var $h,$i,$j,$k,$l
for($f in $d)if($d.hasOwnProperty($f)){$e=$d[$f]
$j=null
if(Y[$e['name$string']])continue
if(!X[$e['type$string']]){continue}
if(!$e['name$string']){continue}
if(!$e['label$string']){continue}
if($b&&!$e['value_user$string']||($e['type$string']=='checkbox'&&!$e['checked$bool']))continue
$h=$a[$e['name$string']]=new J(G,null,null,null,{className:'field field_'+$e['type$string']})
$h.label=$i=new V($h,null,null,null,{className:'label'})
$h.label_name=new V($i,null,null,[S.get(Z.$$($f+'.label$string'))])
$h.label_required=new V($i,null,null,[($e['required$bool']&&!$b)?' *':''])
$h.input=$_[$e['name$string']]=$j=new X[$e['type$string']]($h,null,null,null,{name:$e['name$string'],required:$e['required$bool'],autoValidate:!0,readOnly:$b});($j.container||$j).addClass('input input_'+$e['type$string'])
$j&&$j.setLabelElement($i)
switch($e['type$string']){case 'checkbox_multiple':case 'radio':$e['options']&&$j.setOptions($e['options'])
break
case 'text':case 'email':case 'textarea':$e['placeholder$string']&&$j.setPlaceholder($e['placeholder$string'])
if($b){if(q.isIE<=7){$j.style.overflow='visible'
$j.style.height=0}
else{l((function($n){return function(){$n.setMinHeight('0')
$n.setHeight('0')
$n.setHeight($n.getScrollHeight())}})($j))}}
break
case 'checkbox':$e['checked$bool']&&$j.setChecked($e['checked$bool']).setInitialChecked($e['checked$bool'])
$h.insertBefore($j.container||$j,$i)
if($b)$j.setDisabled(!0)
break
case 'select':for($g in $e['options'])if($e['options'].hasOwnProperty($g)){$l=new W($j,null,null,[$e['options'][$g]['label$string']||$e['options'][$g]['value$string']],{value:$e['options'][$g]['value$string']})
if($e['value$string']==$e['options'][$g]['value$string']||$e['options'][$g]['checked$bool'])$l.setSelected(!0)}
if($b)$j.setDisabled(!0)
break
case 'department':$j.setSelectedIndex(0)
default:}
if(!$b){$h.error_message=$k=new R($h,null,null,[$e['error_message$string']||S.error_message[$e['type$string']]||S.error_message['default']],{className:'error_message'})
$k.setUseDisplay(!0)
$j&&$j.setErrorMessageElement($k).hideErrorMessage()
$k.setVisible('none')}
if($b&&$e['value_user$string']){$j.setValue&&$j.setValue($e['value_user$string']||'')
$j.setInitialValue&&$j.setInitialValue($e['value_user$string']||'')}
else if($e['value$string']){$j.setValue&&$j.setValue($e['value$string'])
$j.setInitialValue&&$j.setInitialValue($e['value$string'])}
if($e['hidden$bool']){$h.setDisplay('none')
$h.setRequired(!1)}}
var $m=G.getLastChild()
$m&&$m.addClass('last-child')}
F.populateSelf=function(){if(!Z)return
var $d=Z.getValue(),$e
for(var $f in $d)if($d.hasOwnProperty($f)){$e=$_[$$[$f]['name$string']]
if(!$e)continue
$e.setValue($d[$f]['value_user$string'])
if($e.setChecked){$e.setChecked($d[$f]['checked_user$bool'])}
if($e.setOptions){$e.setOptions($d[$f]['options'],!0)}}}
F.reset=function(){if(!Z)return
var $d=Z.getValue(),$e
for(var $f in $d)if($d.hasOwnProperty($f)){$e=$_[$$[$f]['name$string']]
if(!$e)continue
$e.reset&&$e.reset()}}
F.getField=function($d){return $a[$d]}
F.getInput=function($d){return $_[$d]}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Form
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"*zoom":1},".input_text, .input_email, textarea, select":{"width":"100%"},".label, .error_message, .option_label":{"display":"block"},".input_checkbox, .input_input_radio, .input_input_checkbox":{"display":"inline-block","float":"left","clear":"both"},".field":{"marginBottom":"15px","&.field_radio .input, &.field_department .input":{"input":{"width, height":"16px"},"label":{"paddingLeft":"20px","lineHeight":"16px"},"label.disabled":{"color":"#ccc","&":"$$inputDisabled"}},"&.field_checkbox, &.field_checkbox_multiple .input":{"input":{"width, height":"16px"},"label":{"paddingLeft":"20px","lineHeight":"15px"}},"&.field_checkbox, &.field_checkbox_multiple, &.field_radio":{"&.invalid":{}}},".label":{"marginBottom":"5px","fontWeight":"bold"},"textarea":{"minHeight, *height":"70px","resize":"vertical"},".option_label":{"marginBottom":"5px","&:last-child":{"marginBottom":0}},".error_message":{"paddingBottom":"5px"},"&.read_only":{".field_radio, .field_checkbox_multiple":{".input_input_radio, .input_input_checkbox":{"display":"none"}},"textarea":{"overflow":"hidden"},".input_checkbox_multiple":{"label":{"display":"inline","marginRight":"0.5em","&:after":{"content":"','"},"&.last-checked":{"marginRight":0,"&:after":{"content":"none"}}}},".field":{"padding":"6px","marginBottom":0},".input_text, .input_email, textarea, .fake_input":{"border":"none","padding":0,"resize":"none","background":"transparent"},"select":{"padding":0,"border":"none","height":"auto","background":"transparent"},".option_label":{"marginBottom":0,"paddingLeft":"0 !important"},".label":{"display":"none"},"button":{"position":"relative","background":"transparent"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Form"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Form"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_FakeInput,"fake_input",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Button,"send",null,[v(26)],{"id":"send","addClass":"send primary fit"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_AutoResizeTextArea,"textarea",null,[],{"id":"textarea","addClass":"textarea unstyled","placeholder":v(27)}]],{"addClass":"textarea_wrapper"}]],{"addClass":"float_wrapper"}],[b.__$$__meshim_widget_widgets_IconFont,"toggle_picker",null,[],{"id":"toggle_picker","addClass":"toggle_picker","icon":"smiley","tabIndex":"0","tagName":"button"}],[b.__$$__meshim_widget_widgets_EmoticonPicker,"picker",null,[],{"id":"picker","addClass":"picker"}],[b.__$$__jx_ui_Label,null,null,[[b.__$$__jx_ui_Frame,null,null,[v(96)],{}]],{"addClass":"drop_label","tabIndex":"0"}]],{"id":"fake_input","addClass":"fake_input"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__fake_input'),H=w.get(z+'__send'),I=w.get(z+'__textarea'),J=w.get(z+'__toggle_picker'),K=w.get(z+'__picker')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_Config,O=b.__$$__meshim_common_FileUtil,P=b.__$$__meshim_common_QueryString,Q=b.__$$__meshim_widget_controllers_ConnectionController,R=b.__$$__meshim_widget_controllers_DataController,S=b.__$$__meshim_widget_controllers_CookieLaw,T=b.__$$__meshim_widget_utils_BindClass,U=R.root.$('livechat').$('ui').$('chat_window').$('chat_panel'),V=R.root.$('livechat').$('ui').$('chat_button'),W=U.$('emoticon_picker').$('display$bool'),X,Y=U.$('emoticon_picker').$('value$string'),Z=R.root.$('livechat').$('settings').$('emoticons').$('enabled$bool'),$$=U.$('textarea'),$_=R.root.$$('livechat.channel.typing'),$a=R.root.$('livechat').$('ui').$('theme_loaded$bool'),$b=R.root.$$('livechat.ui.hide_branding$bool'),$c=R.root.$('livechat').$('ui').$('popout$bool'),$d,$e=R.root.$('livechat').$('ui').$('mockup$bool'),$f,$g=R.root.$$('livechat.profile.mid$string'),$h=R.root.$$('livechat.profile.uid$string'),$i=R.root.$('livechat').$('ui').$('chat_window').$('chat_panel').$('file_toast').$('error$string'),$j=R.root.$('livechat').$('settings').$('package'),$k,$l,$m
function $n($z){$z.stopPropagation()
$z.preventDefault()
if(!$k)return
if(q.isWebKit){if($z.type=='dragover'){$l=!0
$m&&window.clearTimeout($m)
F.addClass('dragover')}
else{$l=!1
$m=window.setTimeout($A,200)}}
else{$z.type=='dragover'?F.addClass('dragover'):F.removeClass('dragover')}
function $A(){if(!F.dom)return
if($l)return
F.removeClass('dragover')}}
function $o($z,$A){if(!$k)return
$n($z)
var $B
if($A){$B=$z&&$z.dataTransfer&&$z.dataTransfer.files
if(!$B||!$B.length)return
$q($B)}
else;}
var $p
function $q($z){if(!$k||!window.FormData)return
var $A=new window.FormData(),$B=[],$C=[],$D=0
for(var $E=0,$F=$z.length;$E<$F;$E++){if(O.isValidType($z[$E].type)){$B.push($z[$E].name)
$C.push($z[$E].type)
$D+=$z[$E].size||0
$A.append('file_'+$z[$E].name,$z[$E])}
else{$i.update('type')
return}}
if($D>N.FILE_UPLOAD_MAX){$i.update('size')
return}
$B=$B.join(', ')
$C=$C.join(', ')
var $G=R.livechat.sendFile({file_name:$B,file_type:$C,file_size:$D}),$H=new window.XMLHttpRequest(),$I={ts:$G,mid:$g.getValue(),uid:$h.getValue()}
$p='https://'+Q.getHost()+N.FILE_UPLOAD_PATH+'?'+P.buildQuery($I)
if($H.upload){$H.open("POST",$p,!0)
$H.send($A)}}
var $r
function $s(){$r=!0
$_.write({'typing$bool':$r})
S.setUserChoice(!0)}
function $t(){$r=!1
$_.write({'typing$bool':$r})}
function $u(){$d=$c.getValue()
$f=$e.getValue()
T.mobile(F)
T.rtl(F)
I.setDataNode($$)
K.setDataNode(W,Y)
I.on('focus',function(){$y()
$x()
G.addClass('focus')
$b.update(!0)})
I.on('blur',function(){G.removeClass('focus')
$b.update(!1)})
F.autobind($a,'value',function(){l(function(){if(!F.dom)return
I.updateStyles()})})
F.autobind($$,'value',function($D){if(!$D)return
if('overflow$bool' in $D){$D['overflow$bool']?F.addClass('overflow'):F.removeClass('overflow')}})
var $z=120000,$A=0
F.autobind($$.$('value$string'),'value',function($D){if(!$D){if($r){window.clearTimeout($A)
$t()}}
else{if(!$r){$s()}
window.clearTimeout($A)
$A=window.setTimeout($t,$z)}})
F.autobind(W,'value',function($D){$D?J.addClass('active'):J.removeClass('active')
X=$D})
F.autobind(Z,'value',function($D){J.setDisplay($D?'':'none')
$D?F.addClass('emoticons_enabled'):F.removeClass('emoticons_enabled')})
F.autobind(Y,'value',function($D){$D&&I.insertAtCaret($D)})
K.on('click',function(){F.focus()})
J.on('click',function($D){$D.stopPropagation()
W.update(!X)
F.focus()})
var $B=F
while($B&&$B.parentNode&&$B.parentNode.tagName.toLowerCase()!='body'){$B=$B.parentNode}
$B&&$B.on('click',$w)
$d&&r.window.on('click',$w)
F.onDestruction(function(){$B&&$B.un('click',$w)
$d&&r.window.un('click',$w)})
var $C
F.autobind($j,'value',function($D){if(!$D)return
$C=$j.getValue()
if($C['color_customization_enabled$int']||$C['widget_customization_enabled$int']){$k=!0}
else{$k=!1}})
if(window.File&&window.FileList&&window.FileReader){F.on("dragover",$n)
F.on("dragleave",$n)
F.on("drop",function($D){$o($D,!0)})}
I.on('keydown',function($D){if($D.keyCode==13&&!$D.shiftKey&&!$D.ctrlKey&&!$D.altKey){$D.preventDefault()
$v()}})
H.on('click',function(){$y()
$x()
$v()})}
function $v(){var $z=I.getValue().trim()
if($z){R.livechat.sendChatMsg({msg:$z})
I.setValue('')}}
function $w($z){var $A=$z.target.jx_wrapper
while($A&&$A.parentNode&&$A.parentNode!=F){if($A==K)return
$A=$A.parentNode}
W.update(!1)}
function $x(){R.root.$$('livechat.ui.chat_window').update({'menu_stack_name$string':''})}
function $y(){if($d){V.write({'unread_count$int':0})}}
F.focus=function(){if($f)return
I.updateHeight()
I.focus()}
F.blur=function(){I.updateHeight()
I.blur()}
F.updateStyles=function(){I.updateStyles()}
$u()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","width":"100%","padding":"$$chatTextAreaPadding","height":"auto","*zoom":1,"borderWidth":"$$chatTextAreaBorderWidth","borderStyle":"$$chatTextAreaBorderStyle","borderColor":"$$chatTextAreaBorderColor","&.emoticons_enabled.overflow":{".toggle_picker":{}},"&.emoticons_enabled":{".textarea":{}},"&.dragover":{".fake_input":{"boxShadow":"none","border":"none"},".drop_label":{"display":"block"}}},".fake_input":{"position":"relative","overflow":"visible","*zoom":1,"padding":0,"color":"$$chatTextAreaInputColor","background":"$$chatTextAreaInputBg","borderWidth":"$$chatTextAreaInputBorderWidth","borderStyle":"$$chatTextAreaInputBorderStyle","borderColor":"$$chatTextAreaInputBorderColor","borderRadius":"$$chatTextAreaInputRadius","boxShadow":"$$chatTextAreaInputShadow"},".fake_input.focus":{"color":"$$chatTextAreaInputFocusColor","background":"$$chatTextAreaInputFocusBg","borderColor":"$$chatTextAreaInputFocusBorderColor","boxShadow":"$$chatTextAreaInputFocusShadow"},".drop_label, .file_input":{"display":"none","position":"absolute","top, left":0,"width, height":"100%"},".drop_label":{"textAlign":"center","color":"$$chatTextAreaDropColor","background":"$$chatTextAreaDropBg","borderWidth":"$$chatTextAreaDropBorderWidth","borderStyle":"$$chatTextAreaDropBorderStyle","borderColor":"$$chatTextAreaDropBorderColor",".container":{"border":"none","background":"transparent"}},".file_input":{"opacity":0},".toggle_picker":{"position":"absolute","top, right":0,"cursor":"pointer","fontSize":"18px","lineHeight":"24px","&:hover":{},"&:focus":{"outline":"none"}},".picker":{"position":"absolute","bottom":"100%"},".textarea":{"display":"block","width, height":"100%","resize":"none","transition":"height 0.1s ease-in-out","fontSize":"$$chatTextAreaInputFontSize","minHeight":"$$chatTextAreaInputMinHeight","maxHeight":"$$chatTextAreaInputMaxHeight","padding":"$$chatTextAreaInputPadding","lineHeight":"$$chatTextAreaInputLineHeight"},".send":{"display":"none"},".float_wrapper":{"overflow":"hidden"},".textarea_wrapper":{"display":"block","overflow":"hidden"},"&.mobile":{"position":"fixed","zIndex":"1000","padding":0,".fake_input":{},".textarea":{"padding":"10px"},".send":{"display":"block","float":"right","margin":"$$chatTextAreaSubmitMargin","padding":"$$chatTextAreaSubmitPadding"},".toggle_picker":{"display":"none"}},"&.rtl.mobile":{".send":{"float":"left"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatTextArea"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatTextArea"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Status=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Widget,"external",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_VisitorProfileCard,"profile_card",null,[],{"id":"profile_card","addClass":"profile_card"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"sign_out",null,[],{"id":"sign_out","icon":"dustbin","title":v(111)}]],{"addClass":"controls"}]],{"addClass":"positioned"}],[b.__$$__jx_ui_Widget,"phone_container_external",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"phone_text_external",null,[],{"id":"phone_text_external","addClass":"phone_text_external break_word"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"edit_external_phone",null,[],{"id":"edit_external_phone","icon":"pencil","title":v(110)}]],{"addClass":"controls"}]],{"addClass":"positioned"}]],{"id":"phone_container_external","addClass":"phone_container_external"}]],{"id":"external"}],[b.__$$__jx_ui_Widget,"name_email",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"name",null,[],{"id":"name","addClass":"name break_word"}],[b.__$$__jx_ui_Widget,"email",null,[],{"id":"email","addClass":"email break_word"}],[b.__$$__jx_ui_Widget,"phone_text",null,[],{"id":"phone_text","addClass":"phone break_word"}]],{"addClass":"name_email"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"edit",null,[],{"id":"edit","icon":"pencil","title":v(110)}],[b.__$$__meshim_widget_widgets_iconFont_Button,"sign_out_name_email",null,[],{"id":"sign_out_name_email","icon":"dustbin","title":v(111)}]],{"addClass":"controls"}]],{"id":"name_email","addClass":"positioned"}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__external'),H=w.get(z+'__profile_card'),I=w.get(z+'__sign_out'),J=w.get(z+'__phone_container_external'),K=w.get(z+'__phone_text_external'),L=w.get(z+'__edit_external_phone'),M=w.get(z+'__name_email'),N=w.get(z+'__name'),O=w.get(z+'__email'),P=w.get(z+'__phone_text'),Q=w.get(z+'__edit'),R=w.get(z+'__sign_out_name_email')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var S=(function(){var U=b.__$$__meshim_widget_controllers_DataController,V=b.__$$__meshim_widget_utils_Utils,W=b.__$$__meshim_widget_utils_BindClass,X=b.__$$__meshim_widget_utils_Strings,Y=U.root.$('livechat'),Z=Y.$('profile'),$$=Y.$('ui'),$_=Z.$('auth').$('type$string'),$a,$b=Z.$('display_name$string'),$c=Z.$('email$string'),$d=Z.$('phone$string'),$e,$f=Y.$('settings').$('login').$('phone_display$bool'),$g,$h=$$.$('chat_window').$('profile_menu').$('index$int'),$i=$$.$('chat_window').$('menu_stack_name$string')
function $j(){H.setDataNode(Z)
W.mobile(F)
W.rtl(F)
F.autobind($b,'value',function($m){if(V.isDefaultName($m))$m=''
N.setText($m||'')
N.setDisplay($m?'':'none')})
F.autobind($c,'value',function($m){O.setText($m||'')
O.setDisplay($m?'':'none')})
F.autobind($d,'value',function($m){$e=$m
$k()})
F.autobind($f,'value',function($m){$g=$m
$k()})
F.autobind($_,'value',function($m){$a=$m
if($m){G.setDisplay('')
M.setDisplay('none')}
else{G.setDisplay('none')
M.setDisplay('')}
$k()})
function $k(){if($a){J.setDisplay($g?'':'none')
K.setText($e||X.placeholder.phone)
K[$e?'removeClass':'addClass']('placeholder')}
else{if($g&&$e){P.setText($e)
P.setDisplay('')}
else{P.setDisplay('none')}}}
Q.on('click',$l)
L.on('click',$l)
K.on('click',function(){$e||$l()})
function $l(){$h.update(2)}
I.on('click',function(){U.livechat.doExternalLogout()})
R.on('click',function(){Z.write({'display_name$string':'','email$string':'','phone$string':''})
$i.update('')})}
$j()})()
for(var T in S)if(S.hasOwnProperty(T))F[T]=S[T]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Status
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"},".name_email":{".name":{"paddingRight":"40px"}},"&.rtl .name_email":{".name":{"paddingRight":0,"paddingLeft":"40px"}},".controls":{"position":"absolute","top, right":0,".meshim_widget_widgets_iconFont_Button":{"display":"inline-block","cursor":"pointer","height":"100%","paddingLeft":"5px","color":"$$menuHeaderColor","&:hover, &:focus":{"color":"$$menuColor"}}},"&.rtl .controls":{"right":"auto","left":0,".meshim_widget_widgets_iconFont_Button":{"paddingLeft":0,"paddingRight":"5px"}},".break_word":{"wordWrap":"break-word"},".name, .email, .phone":{"lineHeight":1.5},".phone_text_external":{"paddingRight":"40px","&.placeholder":{"cursor":"pointer","color":"$$inputPlaceholderColor","fontStyle":"$$inputPlaceholderFontStyle"}},"&.rtl .phone_text_external":{"paddingRight":0,"paddingLeft":"40px"},".profile_card":{"cursor":"default",".avatar_cell":{"width":"32px"},".content_cell":{"paddingLeft":"10px"},".profile_name":{"whiteSpace":"nowrap","paddingRight":"20px"}},"&.rtl .profile_card":{".content_cell":{"paddingLeft":0,"paddingRight":"10px"},".profile_name, .profile_email, .profile_title":{"paddingRight":0,"paddingLeft":"20px"}},".name":{"fontWeight":"bold"},".positioned":{"position":"relative"},".phone_container_external":{"marginTop, paddingTop":"10px","borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"},"&.mobile":{".controls":{"height":"100%",".meshim_widget_widgets_iconFont_Button":{"paddingRight, paddingLeft":"10px"}},".name_email":{".name, .email":{"paddingRight":"80px"}},".profile_card":{".profile_name, .profile_email, .profile_title":{"paddingRight":"40px"}},".phone_text_external":{"lineHeight":"32px"}},"&.mobile.rtl":{".name_email":{".name, .email":{"paddingRight":0,"paddingLeft":"80px"}},".profile_card":{".profile_name, .profile_email, .profile_title":{"paddingRight":0,"paddingLeft":"40px"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Status"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Status"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ActionBar,null,null,[[b.__$$__jx_ui_html_span,"default_actions",null,[[b.__$$__jx_ui_Button,"settings","backgroundColor:transparent;",[[b.__$$__jx_ui_Label,null,null,[v(137)],{"addClass":"settings_text"}],[b.__$$__jx_ui_Label,null,null,[],{"addClass":"settings_mobile_text","text":"≡"}]],{"id":"settings","addClass":"settings","tabIndex":"","type":"button","style":"backgroundColor:transparent;"}],[b.__$$__jx_ui_html_span,"divider",null,[],{"id":"divider","class":"divider","text":"•"}],[b.__$$__jx_ui_Button,"profile","backgroundColor:transparent;",[[b.__$$__jx_ui_html_span,"logged_out",null,[v(138)],{"id":"logged_out"}],[b.__$$__jx_ui_html_span,"name",null,[],{"id":"name","class":"logged_in_name"}]],{"id":"profile","addClass":"profile","tabIndex":"","type":"button","style":"backgroundColor:transparent;"}]],{"id":"default_actions","display":"none"}],[b.__$$__meshim_widget_widgets_CookieLawNotice,"cookie_law",null,[],{"id":"cookie_law","addClass":"cookie_law"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__default_actions'),H=w.get(z+'__settings'),I=w.get(z+'__divider'),J=w.get(z+'__profile'),K=w.get(z+'__logged_out'),L=w.get(z+'__name'),M=w.get(z+'__cookie_law')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var N=(function(){var P=b.__$$__meshim_widget_controllers_DataController,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_Mobile,S={'settings_menu':H,'profile_menu':J},T=P.root.$('livechat'),U=T.$('profile').$('logged_in$bool'),V,W=T.$('profile').$('display_name$string'),X,Y='visible',Z=T.$('settings').$('cookie_law').$('enabled$bool'),$$=T.$('profile').$('allow_cookies$bool'),$_=P.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),$a,$b=T.$('settings').$('theme').$('chat_window').$('size$string'),$c,$d=T.$$('ui.chat_button'),$e=T.$$('ui.popout$bool'),$f=T.$('settings').$('login').$('restrict_profile$bool'),$g
function $h(){F.autobind($f,'value',function($m){$g=$m
I.setDisplay($m?'none':'')
J.setDisplay($m?'none':'')})
F.autobind($_,'value',function($m){$a=$m
for(var $n in S)if(S.hasOwnProperty($n))S[$n][($n==$m?'add':'remove')+'Class']('active')})
F.autobind(U,'value',function($m){V=$m
$l()})
F.autobind(W,'value',function($m){X=$m||''
$l()})
v&&v.onLanguage&&v.onLanguage($l)
function $l(){if(V){if(X&&!Q.isDefaultName(X)){L.setText(v(120).replace('<name>',X))}
else{L.setText(v(121))}
K.setDisplay('none')
L.setDisplay('')}
else{K.setDisplay('')
L.setDisplay('none')}}
H.on('click',function($m){$m.stopPropagation()
if(R.isIEMobile)$_.update('settings_menu')
else $_.update($a=='settings_menu'?'':'settings_menu')
if($e.getValue()){$d.write({'unread_count$int':0})}})
J.on('click',function($m){$m.stopPropagation()
if($g)return
$_.update($a=='profile_menu'?'':'profile_menu')})
F.autobind($b,'value',function($m){if($c)F.removeClass('action_bar_'+$c)
$c=$m
if($c)F.addClass('action_bar_'+$c)})
F.autobind(Z,'value',$i)
F.autobind($$,'value',$i)}
function $i(){if(!Z.getValue()){$k()}
else{if($$.getValue()){$k()}
else{$j()}}}
function $j(){if(Y=='hidden'){M.setDisplay('')
G.setDisplay('none')
Y='visible'}}
function $k(){if(Y=='visible'){M.setDisplay('none')
G.setDisplay('')
Y='hidden'}}
$h()})()
for(var O in N)if(N.hasOwnProperty(O))F[O]=N[O]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ActionBar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ActionBar
x.__jx__jcss={"button":{"position":"relative","verticalAlign":"top","textAlign":"left","background, backgroundColor":"transparent","border":"none","lineHeight":"$$actionBarHeight"},"button, button *":{"cursor":"pointer"},".logged_in_name":{"display":"inline-block","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","*height":"1em","*verticalAlign":"top"},".divider":{"display":"inline-block","fontSize":"0.8em","lineHeight":"$$actionBarHeight","margin":"0 5px","cursor":"default","opacity":0.5},"button, .divider":{"color":"$$actionBarColor"},"button:hover":{"color":"$$actionBarHoverColor"},".settings":{".settings_mobile_text":{"display":"none"}},".cookie_law":{"position":"relative"},"&.action_bar_small  .logged_in_name":{"maxWidth, *width":"120px"},"&.action_bar_medium .logged_in_name":{"maxWidth, *width":"160px"},"&.action_bar_large  .logged_in_name":{"maxWidth, *width":"180px"},"&.mobile":{"display":"block",".divider":{"display":"none"},".settings":{"position":"absolute","width, height":"100%","textAlign":"center",".settings_text":{"display":"none"},".settings_mobile_text":{"display":"block","height":"$$titleBarHeight","lineHeight":"$$titleBarHeight","fontSize":"30px"}},".profile":{"display":"none"},"button, .divider":{}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_actionBar_DefaultActionBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_actionBar_DefaultActionBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_ProfileMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_profileMenu_Login,null,null,[],{"addClass":"login"}],[b.__$$__meshim_widget_components_chatWindow_profileMenu_Status,null,null,[],{"addClass":"status"}],[b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit,null,null,[],{"addClass":"edit"}]],{"id":"vs"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('ui').$('chat_window').$('profile_menu').$('index$int'),L=J.root.$('livechat').$('profile').$('logged_in$bool'),M,N=J.root.$('livechat').$('settings').$('login').$('allowed_types'),O,P
function Q(){F.autobind(N,'value',function(){var S=N.getValue()
O=0
for(var T in S)if(S.hasOwnProperty(T)){if(T=='email$bool')continue
if(S[T]){O++}}})
F.autobind(K,'value',function(S){if(P)return
G.setIndex(isNaN(S)?R():S)})
G.on('indexChange',function(S){P=!0
K.update(S)
P=!1})
F.autobind(L,'value',function(S){M=S
R()})
F.on('hide',R)}
function R(){G.setIndex(M?1:(O?0:2))}
Q()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_ProfileMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_ProfileMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_ProfileMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__jx_ui_Form,"form_container",null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__jx_ui_Widget,"pre_chat_message",null,[],{"id":"pre_chat_message","addClass":"greetings_message"}],[b.__$$__jx_ui_Widget,"offline_message",null,[[b.__$$__jx_ui_Widget,"offline_message_msg",null,[],{"id":"offline_message_msg"}],[b.__$$__jx_ui_Widget,"offline_operating_hours_link",null,[v(91)],{"id":"offline_operating_hours_link","addClass":"operating_hours_link"}]],{"id":"offline_message","addClass":"greetings_message"}],[b.__$$__jx_ui_Widget,"offline_message_disabled",null,[],{"id":"offline_message_disabled","addClass":"greetings_message"}],[b.__$$__meshim_widget_widgets_form_Profile,"profile",null,[],{"id":"profile"}],[b.__$$__meshim_widget_widgets_Form,"form",null,[],{"id":"form"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,"submit",null,[],{"id":"submit","addClass":"submit"}],[b.__$$__meshim_widget_widgets_Button,"back",null,[v(92)],{"id":"back","addClass":"back secondary"}]],{}]],{"id":"form_container","addClass":"form_container","noValidate":"true"}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form_container'),H=w.get(z+'__pre_chat_message'),I=w.get(z+'__offline_message'),J=w.get(z+'__offline_message_msg'),K=w.get(z+'__offline_operating_hours_link'),L=w.get(z+'__offline_message_disabled'),M=w.get(z+'__profile'),N=w.get(z+'__form'),O=w.get(z+'__submit'),P=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var Q=(function(){var S=b.__$$__meshim_widget_controllers_DataController,T=b.__$$__meshim_widget_controllers_GoogleAnalytics,U=b.__$$__meshim_widget_controllers_UIController,V=b.__$$__meshim_widget_utils_Strings,W={OFFLINE_DISABLED:'OFFLINE_DISABLED',OFFLINE:'OFFLINE',ONLINE:'ONLINE',ONLINE_OFFLINE:'ONLINE_OFFLINE',ONLINE_CHATTING:'ONLINE_CHATTING'},X={DEPARTMENT:'department',MESSAGE:'message'},Y=S.root.$('livechat'),Z=Y.$('ui').$('chat_window').$('pre_chat_form'),$$=Z.$('form_populate$bool'),$_=Z.$('submitted$bool'),$a=Y.$('settings').$('forms').$('pre_chat_form'),$b=$a.$('form'),$c=$a.$('form_submitted'),$d=$a.$('profile_required$bool'),$e=$a.$('message$string'),$f,$g=$b.$('2').$('required$bool'),$h=$b.$('3').$('required$bool'),$i=$c.$('2').$('value$string'),$j=$c.$('3').$('value$string'),$k=$b.$('4').$('required$bool'),$l,$m=Y.$('settings').$('forms').$('offline_form'),$n=$m.$('form_submitted'),$o=$m.$('message$string'),$p=$m.$('message_disabled$string'),$q=$m.$('form'),$r=$q.$('2'),$s=$q.$('3').$('required$bool'),$t,$u=Y.$('ui').$('chat_window').$('offline_form'),$v=$u.$('form_populate$bool'),$w=Y.$('ui').$('chat_window').$('pre_chat_offline_form'),$x=$w.$('stack_index$int'),$y=Y.$('departments'),$z=Y.$('account').$('status$string'),$A=Y.$('channel').$('chatting$bool'),$B=Y.$('ui').$('chat_window').$('main_stack_name$string'),$C=Y.$('settings').$('chat_button').$('hide_when_offline$bool'),$D=Y.$('settings').$('operating_hours').$('enabled$bool'),$E,$F=Y.$('settings').$('operating_hours').$('display_notice$bool'),$G,$H=Y.$('settings').$('login').$('restrict_profile$bool'),$I,$J=Y.$('ui').$('popout$bool').getValue(),$K,$L,$M,$N
function $O(){N.setDataNode($b)
F.autobind($e,'value',function($U){$f=$U
H.setText(V.get($e))
$U||H.setDisplay('none')})
F.autobind($o,'value',function(){J.setText(V.get($o))})
F.autobind($p,'value',function(){L.setText(V.get($p))})
F.autobind($$,'value',function($U){n($U)&&N.populateSelf()})
F.autobind($v,'value',function($U){n($U)&&N.populateSelf()})
F.autobind($A,'value',function($U){if($U==$L)return
$L=$U
$Q()})
F.autobind($z,'value',function($U){if($U==$K)return
$K=$U
$Q()})
F.autobind($C,'value',function($U){if($U==$N)return
$N=$U
$Q()})
F.autobind($k,'value',function($U){$l=$U
$Q()})
F.autobind($s,'value',function($U){$t=$U
$Q()})
F.autobind($D,'value',function($U){$E=$U
$Q()})
F.autobind($F,'value',function($U){$G=$U
$Q()})
F.autobind($H,'value',function($U){$I=$U
$Q()})
F.autobind($y,'value',$P)
N.on('change',$P)
function $P(){var $U=N.getField(X.DEPARTMENT)
if(!$U)return
var $V=$U.input.getValue(),$W
if(!$V){$W=!0}
else{var $X=$y.$($V).$('status$string').getValue()
$W=$X!='offline'}
if($W==$M)return
$M=$W
$Q()}
function $Q(){var $U=$S(),$V=N.getField(X.DEPARTMENT),$W=N.getField(X.MESSAGE)
if($U==W.OFFLINE_DISABLED){L.setDisplay('')
M.setDisplay('none')
N.setDisplay('none')}
else{L.setDisplay('none')
M.setDisplay('')
N.setDisplay('')}
switch($U){case W.OFFLINE_DISABLED:H.setDisplay('none')
I.setDisplay('none')
O.setValue(V.pre_chat_offline_form.button_disabled)
$T(!1)
break
case W.OFFLINE:H.setDisplay('none')
I.setDisplay('')
M.setRequired(!0)
M.setPhoneRequired($t)
if($V){$V.setRequired(!1)
$V.input&&$V.input.setHide(!0)}
$W&&$W.setRequired(!0)
O.setValue(V.pre_chat_offline_form.button_message)
$T(!1)
break
case W.ONLINE:H.setDisplay($f?'':'none')
I.setDisplay('none')
M.setRequired($d.getValue())
M.setPhoneRequired($l)
if($V){$V.setRequired($g.getValue())
$V.input&&$V.input.setHide(!1)}
$W&&$W.setRequired($h.getValue())
O.setValue(V.pre_chat_offline_form.button_chat)
$T(!1)
break
case W.ONLINE_OFFLINE:H.setDisplay($f?'':'none')
I.setDisplay('none')
M.setRequired(!0)
M.setPhoneRequired($t)
if($V){$V.setRequired($g.getValue())
$V.input&&$V.input.setHide(!1)}
$W&&$W.setRequired(!0)
O.setValue(V.pre_chat_offline_form.button_message)
$T(!1)
break
case W.ONLINE_CHATTING:H.setDisplay('none')
I.setDisplay('')
M.setRequired(!0)
M.setPhoneRequired($t)
if($V){$V.setRequired(!1)
$V.input&&$V.input.setHide(!0)}
$W&&$W.setRequired(!0)
O.setValue(V.pre_chat_offline_form.button_message)
$T(!0)
break}
if(($U==W.OFFLINE||$U==W.ONLINE_CHATTING)&&$E&&$G){K.setDisplay('')}
else{K.setDisplay('none')}
if($I){M.setDisplay('none')
M.setRequired(!1)}}
G.on('submit',function($U){$U.preventDefault()
var $V=$S()
if($V!=W.OFFLINE_DISABLED&&!F.validate(!0))return
var $W=N.getField(X.DEPARTMENT),$X
$W.input&&($X=$y.$($W.input.getValue()).$('name$string')||'')
M.submit()
switch($V){case W.OFFLINE_DISABLED:if($J){window.close()}
else{U.userHideWindow()}
break
case W.OFFLINE:T.trackEvent('Offline Message Sent')
N.submit($n,M)
$R()
$x.update(1)
break
case W.ONLINE:T.trackEvent('Chat Request Form Submitted',$X)
N.submit($c,M)
S.livechat.sendChatMsg({msg:$j.getValue()||'',department:parseInt($i.getValue(),10)||0})
$_.update(!0)
$B.update('chat_panel')
break
case W.ONLINE_OFFLINE:T.trackEvent('Offline Message Sent',$X)
N.submit($n,M)
$R()
$x.update(1)
break
case W.ONLINE_CHATTING:N.submit($n,M)
$B.update('chat_panel')
break}
N.reset()
$P()})
function $R(){$r.update({value_user$string:N.getInput('message').getValue()})}
P.on('click',function(){$B.update('chat_panel')})
function $S(){if($K=='banned')return W.OFFLINE_DISABLED
if($K=='offline')return $N?W.OFFLINE_DISABLED:W.OFFLINE
if($L)return W.ONLINE_CHATTING
else return $M?W.ONLINE:W.ONLINE_OFFLINE}
function $T($U){if($U){O.removeClass('wide')
P.setDisplay('')}
else{O.addClass('wide')
P.setDisplay('none')}}
K.on('click',function($U){if(!$U||!$U.target||!$U.target.jx_wrapper||!$U.target.jx_wrapper.hasClass('operating_hours_link')){return}
$x.update(2)})}
$O()})()
for(var R in Q)if(Q.hasOwnProperty(R))F[R]=Q[R]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".greetings_message, .generated_form":{"marginBottom":"$$marginL"},".form_container":{"width, height":"100%"},".operating_hours_link":{"textDecoration":"underline","cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_Form"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_Form"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_form_Profile,null,null,[],{"hideLabel":"","disabled":"true"}],[b.__$$__meshim_widget_widgets_Form,"form",null,[],{"id":"form","readOnly":"true"}]],{"addClass":"form_container"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Button,"another",null,[v(93)],{"id":"another","addClass":"wide"}]],{"addClass":"controls"}]],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__message'),H=w.get(z+'__form'),I=w.get(z+'__another')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Strings,N=L.root.$('livechat'),O=N.$('settings').$('forms').$('offline_form'),P=O.$('form'),Q=O.$('form_submitted'),R=O.$('post_submit_message$string'),S=N.$('ui').$('chat_window').$('pre_chat_offline_form'),T=S.$('stack_index$int')
function U(){H.setDataNode(P)
F.autobind(R,'value',function(){G.setText(M.get(R))})
F.autobind(T,'value',function(V){if((V==1)&&(!Q.getValue()))l(function(){T.update(0)})})
I.on('click',function(){T.update(0)})}
U()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".form_container":{"background":"$$formSubmittedBg","borderRadius":"$$formSubmittedRadius","borderWidth":"$$formSubmittedBorderWidth","borderStyle":"$$formSubmittedBorderStyle","borderColor":"$$formSubmittedBorderColor"},".profile_form":{},".generated_form":{"marginBottom":"5px"},".controls":{"marginTop":"15px","marginBottom":"10px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ChatWindowPanel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"$$defaultplacement$$",null,[],{"container":"default","addClass":"container","id":"$$defaultplacement$$"}],[b.__$$__meshim_widget_widgets_Branding,null,null,[],{"addClass":"chat_window_panel_branding","hideOnDesktop":"true"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__$$defaultplacement$$')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
function K(){J.mobile(F)
J.popout(F)
J.tablet(F)
J.windowSize(F,'cwp_')
J.windowPosition(F,'cwp_')}
K()
var L=b.__$$__meshim_widget_widgets_TitleBar
F.titleBar
F.setTitleBar=function(O){if(F.titleBar)return
var P=O.split(',')
if(f('none',P)!=-1){F.titleBar=!0
F.setStyle('padding-top',0)
return}
F.titleBar=new L(F)
for(var Q=0,R=P.length;Q<R;Q++){switch(P[Q]){case 'hidePopout':F.titleBar.setHidePopout(!0)
break}}}
F.getDraggableNode=function(){return (F.titleBar instanceof L)?F.titleBar:null}
var M=b.__$$__meshim_widget_widgets_ActionBar,N=b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar
F.actionBar
F.setActionBar=function(O){if(F.actionBar)return
var P=O.split(',')
if(f('none',P)!=-1){F.actionBar=!0
F.setStyle('padding-bottom',0)
return}
if(f('default',P)!=-1){F.actionBar=new N(F)}
else{F.actionBar=new M(F)}}
F.setHideBrandingMobile=function(O){if(n(O)){F.addClass('hide_branding_mobile')}
else{F.removeClass('hide_branding_mobile')}}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ChatWindowPanel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","overflow":"hidden","paddingTop":"$$titleBarHeight","paddingBottom":"$$actionBarHeight","margin":"$$chatWindowPanelMargin",".container":{"width, height":"100%","background":"$$windowContentBg","borderWidth":"$$windowContentBorderWidth","borderStyle":"$$windowContentBorderStyle","borderColor":"$$windowContentBorderColor"}},"&.cwp_small":{"width":"$$windowSmallWidth","height":"$$windowSmallHeight"},"&.cwp_medium":{"width":"$$windowMediumWidth","height":"$$windowMediumHeight"},"&.cwp_large":{"width":"$$windowLargeWidth","height":"$$windowLargeHeight"},"&.mini":{"width":"$$windowMiniWidth","height":"$$windowMiniHeight"},"&.popout":{"width, height":"100%"},"&.mobile":{"paddingTop":"$$titleBarHeight","overflow":"auto","width":"auto","height":"auto","paddingBottom":"0","&":"$$chatWindowPanelInner",".container":{"height":"auto"},".wrapper_container":{"margin":"0 auto","maxWidth":"$$mobileMaxWidthS","height":"auto","border":"none",".bottom, .bottom_inner":{"position":"relative","padding":"10px"}},".chat_window_panel_branding":{"display":"block","padding":"5px","margin":"10px 0","textAlign":"center"},"&.hide_branding_mobile .chat_window_panel_branding":{"display":"none !important"}},"&.tablet":{".wrapper_container":{"maxWidth":"$$mobileMaxWidth"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatWindowPanel"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ChatWindowPanel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ChatLogRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{"class":"chat_log_renderer"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_Config,J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_ErrorHandler,L=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,M=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer,N=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer,O=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer,P=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer,Q=b.__$$__meshim_widget_widgets_chatLogRenderer_CardRenderer,R,S,T,U,V,W,X=/chat\.(msg|memberjoin|changename)/
S=T=U=''
function Y(){F.setDataNode=$$
F.onDestruction(function(){clearTimeout(W)})}
function Z(){return J.root.$$('livechat.settings.theme.message_type$string').getValue()||'bubble_avatar'}
function $$($l){if(R)F.autounbind(R,'value',$_)
R=$l
F.autobind(R,'value',$_)
F.on('update.neighbour',$c)}
function $_($l){if(!$l)return
if($l.nick$string){T=$l.nick$string
$b(T)}
if($l.type$string)$a($l.type$string)
if($l.failed$bool)$j()
if('unverified$bool' in $l){clearTimeout(W)
if($l.unverified$bool){W=setTimeout($k,I.RESEND_MSG_TIMEOUT)}}}
function $a($l){if(!$l)return
if($l===U)return
if(V){F.empty()
V=null}
U=$l
switch($l){case 'chat.msg':case 'chat.file.update':case 'chat.file.upload':$g()
break
case 'chat.card':$h()
break
default:$i()
break}
if(T)$b(T)}
function $b($l){if(!V)return
var $m=$l.substring(0,$l.indexOf(':')),$n=0,$o=0,$p=$l.length
while($o<$p){$n+=$l.charCodeAt($o)
$o++}
$n=$n%8+1
V.addClass($m)
V.addClass($m+'_'+$n)
$b.assigned=!0}
function $c($l){if(!('prev' in $l)||S==$l.prev)return
S=$l.prev
$d()}
function $d(){if(!R)return
if(!S){$e()
return}
var $l=R.parentNode.$(S),$m=$l.getValue('nick$string'),$n=$l.getValue('type$string')
if(!X.test($n)||U!==$n||$m!==T)$e()
else $f()}
function $e(){if(!V)return
V.removeClass('group_children')
V.addClass('group_head')}
function $f(){if(!V)return
V.addClass('group_children')
V.removeClass('group_head')}
function $g(){var $l=Z(),$m
if(V)F.empty()
switch($l){case 'bubble':$m=M
break
case 'basic_avatar':$m=N
break
case 'bubble_avatar':$m=O
break
case 'basic':default:$m=L
break}
V=new $m(F)
V.setDataNode(R)
V.addClass($l)}
function $h(){V=new Q(F)
V.setDataNode(R)}
function $i(){V=new P(F)
V.setDataNode(R)
V.setPseudo('system_msg')}
function $j(){K.post('User msg send failed.')}
function $k(){K.post('User msg send timed out.')}
Y()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ChatLogRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","clear":"both","width":"100%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatLogRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ChatLogRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_CookieForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('profile').$('allow_cookies$bool')
function L(){F.autobind(K,'value',function(M){G.setIndex(M===!1?0:1)})}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_CookieForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={"a":{"color":"inherit"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_CookieForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_CookieForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_AgentList=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,"scrollable_frame",null,[[b.__$$__jx_controls_List,"list",null,[],{"id":"list","addClass":"list"}],[b.__$$__meshim_widget_widgets_motif_Chat,"chat_motif",null,[],{"id":"chat_motif","addClass":"chat_motif"}]],{"id":"scrollable_frame"}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[v(30)],{"id":"back","addClass":"back wide"}]],{"addClass":"padding_bottom"}]],{"absPaddingBottom":"bottomHeightBottomPadding"}]],{"titleBar":"hidePopout","actionBar":"none"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__scrollable_frame'),H=w.get(z+'__list'),I=w.get(z+'__chat_motif'),J=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard,O=M.root.$('livechat').$('agents'),P=M.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function Q(){H.setRenderer(N)
H.setDataNode(O)
F.autobind(O,'keys',function(){l(function(){if(!F.dom)return
var R=H.offsetHeight,S=G.getHeight(),T=I.getHeight()
if((R<=S)&&((S-R)>T))F.removeClass('many_agents')
else F.addClass('many_agents')})})
J.on('click',function(){P.update('chat_panel')})}
Q()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_AgentList
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={"**self":{},".list":{"position":"relative","width, height":"100%"},".chat_motif":{"position":"absolute","bottom, left":0,"transition":"opacity 0.5s","opacity":1},"&.many_agents .chat_motif":{"opacity":0}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_AgentList"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_AgentList"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_CardForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__meshim_widget_widgets_form_Profile,"profile",null,[],{"id":"profile"}],[b.__$$__meshim_widget_widgets_Form,"form_generator",null,[],{"id":"form_generator"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(28)}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary"}]],{}]],{"absPaddingBottom":"bottomHeight"}]],{"id":"form","noValidate":"true"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__message'),I=w.get(z+'__profile'),J=w.get(z+'__form_generator'),K=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=N.root.$('livechat').$('settings').$('forms').$('card_form'),P=O.$('message$string'),Q=O.$('form'),R=O.$('form_submitted'),S=O.$('profile_required$bool'),T,U=N.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function V(){J.setDataNode(Q)
I.setDataNode(Q)
F.autobind(P,'value',function(W){H.setText(W||'')})
F.autobind(S,'value',function(W){T=W
I.setDisplay(W?'':'none')
I.setDisabled(W)})
G.on('submit',function(W){W.preventDefault()
if(!G.validate(!0))return
I.submit()
J.submit(R,I)
U.update('chat_panel')})
K.on('click',function(){U.update('chat_panel')})}
V()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_CardForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_CardForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_CardForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_AboutPanel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"Zopim Live Chat"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2008-2014 Zopim Technologies Pte Ltd. All rights reserved."}],[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"Open Source Licenses"}]],{}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"chroma.js - JavaScript library for color conversions"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2011-2013, Gregor Aisch. All rights reserved."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"3. The name Gregor Aisch may not be used to endorse or promote products derived from this software without specific prior written permission."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."}]],{"class":"break_top"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"store.js"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2010-2013 Marcus Westin"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."}]],{"class":"break_top"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[v(30)],{"id":"back","addClass":"back wide"}]],{}]],{"absPaddingBottom":"bottomHeight"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function L(){G.on('click',function(){K.update('chat_panel')})}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_AboutPanel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".break_top":{"padding":"10px 0","borderTop":"1px solid","borderColor":"$$inputColor","fontSize":"$$fontSizeXS",".meshim_widget_widgets_Body":{"color":"$$inputColor","marginBottom":"$$marginS"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_AboutPanel"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_AboutPanel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_controls_List,"list",null,[],{"id":"list"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer,null,null,[],{"addClass":"system_msg group_head"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__list')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_widgets_ChatLogRenderer,K=b.__$$__meshim_widget_controllers_DataController,L=K.root.$('livechat'),M=L.$('channel').$('log'),N=L.$('settings').$('theme').$('chat_window').$('size$string'),O,P=K.root.$$('livechat.settings.theme.message_type$string'),Q
function R(){F.setDataNode=S
F.autobind(N,'value',function(U){if(O)F.removeClass('chat_log_'+O)
O=U
if(O)F.addClass('chat_log_'+O)})
G.setRenderer(J)
S(M)
F.autobind(P,'value',T)}
function S(U){G.setDataNode(U)}
function T(U){if(!U||Q==U)return
Q=U
G.setDataNode(M)}
R()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","margin":"$$chatLogMargin"},".visitor .chat_bubble":{"background":"$$chatLogVisitorBubbleBg","borderWidth":"$$chatLogVisitorBubbleBorderWidth","borderStyle":"$$chatLogVisitorBubbleBorderStyle","borderColor":"$$chatLogVisitorBubbleBorderColor",".arrow_border":{"borderColor":"$$chatLogVisitorBubbleBorderColor"},".arrow_background":{"borderColor":"$$chatLogVisitorBubbleBg"}},".agent .chat_bubble":{"background":"$$chatLogAgentBubbleBg","borderWidth":"$$chatLogAgentBubbleBorderWidth","borderStyle":"$$chatLogAgentBubbleBorderStyle","borderColor":"$$chatLogAgentBubbleBorderColor",".arrow_border":{"borderColor":"$$chatLogAgentBubbleBorderColor"},".arrow_background":{"borderColor":"$$chatLogAgentBubbleBg"}},".log_avatar":{"borderWidth":"$$chatLogAvatarBorderWidth","borderStyle":"$$chatLogAvatarBorderStyle","borderColor":"$$chatLogAvatarBorderColor","borderRadius":"$$chatLogAvatarRadius","boxShadow":"$$chatLogAvatarShadow"},".group_head, .card, .group_children.bubble_avatar, .group_children.bubble":{"marginTop":"$$margin"},"a":{"color":"inherit"},".card":{"marginLeft, marginRight":"auto"},"&.chat_log_small":{".card":{}},"&.chat_log_medium":{".card":{"maxWidth":"220px"}},"&.chat_log_large":{".card":{"maxWidth":"260px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatLog"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatLog"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_PostChatForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":"none"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('ui').$('chat_window').$('post_chat_form').$('stack_index$int'),L=J.root.$$('livechat.channel.rating$string'),M
function N(){F.autobind(K,'value',function(O){if(O==0&&M){K.update(1)
return}
if(O==1&&!M){K.update(0)
return}
G.setIndex(O||0)})
F.autobind(L,'value',function(O){M=O})}
N()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_PostChatForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_PostChatForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_PostChatForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_MenuStack=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ViewStack,null,null,[[b.__$$__meshim_widget_components_chatWindow_SettingsMenu,null,null,[],{"name":"settings_menu"}],[b.__$$__meshim_widget_components_chatWindow_ProfileMenu,null,null,[],{"name":"profile_menu"}],[b.__$$__meshim_widget_components_chatWindow_EndChatMenu,null,null,[],{"name":"end_chat_menu"}],[b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu,null,null,[],{"name":"email_transcript_menu"}],[b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification,null,null,[],{"name":"email_transcript_notification"}]],{"onChildHide":"-1"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
I.popout(F)})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_MenuStack
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ViewStack.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ViewStack
x.__jx__jcss={"**self":{"overflow":"visible"},"&.popout":{"position":"absolute"},"&.mobile":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_MenuStack"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_MenuStack"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_utils_BindClass,L=J.root.$('livechat').$('ui').$('chat_window').$('pre_chat_offline_form').$('stack_index$int')
function M(){K.mobile(F)
F.autobind(L,'value',function(N){G.setIndex(N||0)})}
M()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_PreChatOfflineForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_PreChatOfflineForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_NewChatForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_AbsolutePaddingContainer,null,null,[[b.__$$__jx_ui_Widget,"content",null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner,"banner",null,[],{"id":"banner","addClass":"banner"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_Branding,null,null,[],{"addClass":"branding"}]],{"addClass":"branding_container"}],[b.__$$__meshim_widget_widgets_IconFont,"close",null,[],{"id":"close","addClass":"close","icon":"minimize","title":v(25)}]],{"id":"content","addClass":"content"}],[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_IconFont,"submit",null,[],{"id":"submit","icon":"send","addClass":"send","title":v(26)}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField,"input",null,[],{"id":"input","addClass":"input","autocomplete":"false","placeholder":v(27),"tabIndex":"10"}]],{"class":"input_wrapper"}]],{"id":"form","addClass":"form","noValidate":"true"}]],{"absPaddingBottom":"badgeFormHeight"}]],{"titleBar":"none","actionBar":"none","addClass":"mini"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__content'),H=w.get(z+'__banner'),I=w.get(z+'__close'),J=w.get(z+'__form'),K=w.get(z+'__submit'),L=w.get(z+'__input')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var M=(function(){var O=b.__$$__meshim_widget_controllers_DataController,P=b.__$$__meshim_widget_controllers_UIController,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_BindClass,S=O.root.$('livechat'),T=S.$('ui').$('chat_window').$('main_stack_name$string'),U=S.$('ui').$('chat_window').$('chat_panel').$('textarea').$('value$string'),V=S.$('ui').$('chat_button'),W=S.$('settings').$('forms').$('pre_chat_form').$('required$bool'),X,Y=S.$('settings').$('forms').$('pre_chat_form').$('form').$('3').$('value_user$string'),Z=S.$('ui').$('chat_window').$('pre_chat_form').$('submitted$bool'),$$,$_=S.$('ui').$('chat_window').$('pre_chat_form').$('form_populate$bool'),$a=S.$('settings').$('branding').$('hide_branding$bool')
function $b(){R.rtl(F)
R.windowPosition(F)
Q.hoverFix(F)
F.autobind(W,'value',function($e){X=$e})
F.autobind(Z,'value',function($e){$$=$e})
F.autobind($a,'value',function($e){H[$e?'addClass':'removeClass']('hide_branding')})
J.on('submit',function($e){$e.preventDefault()
$c()})
K.on('click',function(){$c()})
I.on('click',function($e){$e.stopPropagation()
P.userHideBanner()})
G.on('click',function(){var $e=L.getValue().trim()
if($e)U.update($e)
L.reset()
V.write({'button_clicked$bool':!0})
$d()})}
function $c(){var $e=L.getValue().trim()
if(!$e){L.focus()
return}
L.reset()
$d($e)}
function $d($e){P.setBannerUserHidden()
if(X&&!$$){Y.update($e||'')
$_.update(!0)
T.update('pre_chat_offline_form')}
else{$e&&O.livechat.sendChatMsg({msg:$e})
T.update('chat_panel')}}
$b()})()
for(var N in M)if(M.hasOwnProperty(N))F[N]=M[N]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_NewChatForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".container":{"background":"$$badgeBg","borderWidth":"$$badgeBorderWidth","borderStyle":"$$badgeBorderStyle","borderColor":"$$badgeBorderColor"},".content":{"width":"100%","height":"100%","overflow":"hidden","color":"$$badgeContentColor","background":"$$badgeContentBg","borderWidth":"$$badgeContentBorderWidth","borderStyle":"$$badgeContentBorderStyle","borderColor":"$$badgeContentBorderColor"},".banner":{"width":"100%","height":"100%","position":"relative","cursor":"pointer","fontSize":"1.5em","padding":"20px 10px 10px","&.hide_branding":{"paddingTop":"10px"}},".branding_container":{"position":"absolute","top":"6px","left":0,"width":"100%","textAlign":"center","cursor":"pointer",".branding":{"cursor":"pointer"}},".close":{"position":"absolute","cursor":"pointer","opacity":0,"transition":"opacity 0.2s","top, right":0,"padding":"9px 10px 2px 2px"},"&.rtl .close":{"left":"6px","right":"auto","padding":"3px 2px 2px 4px"},"&.hover, &:hover":{".close":{"opacity":1}},".send":{"float":"right","fontSize":"$$fontSizeXXL","padding":"5px","margin":"5px","color":"$$badgeIconColor","opacity":"0.8","cursor":"pointer","&:hover":{"opacity":"1"}},".form":{"position":"absolute","overflow":"hidden","bottom, left":0,"width":"100%","*zoom":1,"height":"$$badgeFormHeight","background":"$$badgeFormBg","borderWidth":"$$badgeFormBorderWidth","borderStyle":"$$badgeFormBorderStyle","borderColor":"$$badgeFormBorderColor",".input_wrapper":{"display":"block","overflow":"hidden","*width":"165px",".input":{"width":"100%","height":"100%","position":"relative","*width":"165px","*overflow":"hidden"}},".button":{"*width":"60px"}},"&.ltr .form":{".input":{"paddingRight":0},".button":{"float":"right"}},"&.rtl .form":{".input":{"paddingLeft":0},".button":{"float":"left"}},"&.br, &.bm, &.bl":{".content":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"}},"&.tr, &.tm, &.tl":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_NewChatForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_NewChatForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_ChatPanel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_toast_Disconnected,null,null,[],{"addClass":"disconnected_toast"}],[b.__$$__meshim_widget_widgets_toast_File,null,null,[],{}],[b.__$$__meshim_widget_widgets_ChatWindowContent,"chat_panel_container",null,[[b.__$$__jx_ui_Widget,"served_by_container",null,[[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader,null,null,[],{}]],{"id":"served_by_container","class":"served_by_container"}],[b.__$$__meshim_widget_widgets_ScrollableFrame,"scrollable_frame",null,[[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog,"chat_log",null,[],{"id":"chat_log","addClass":"chat_log"}]],{"id":"scrollable_frame","addClass":"scrollable_frame"}],[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea,"chat_text_area",null,[],{"id":"chat_text_area","addClass":"chat_text_area"}],[b.__$$__meshim_widget_widgets_Branding,null,null,[],{"addClass":"chat_panel_branding","hideOnDesktop":"true"}],[b.__$$__meshim_widget_widgets_Button,"scroll_top_btn",null,[],{"id":"scroll_top_btn","class":"scroll_top_btn"}]],{"id":"chat_panel_container","class":"chat_panel_container","absPaddingTop":"chatPanelProfileCardContainerHeight"}]],{"titleBar":"","actionBar":"default","hideBrandingMobile":"true"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__chat_panel_container'),H=w.get(z+'__served_by_container'),I=w.get(z+'__scrollable_frame'),J=w.get(z+'__chat_log'),K=w.get(z+'__chat_text_area'),L=w.get(z+'__scroll_top_btn')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var M=(function(){var O=b.__$$__meshim_widget_controllers_DataController,P=b.__$$__meshim_widget_utils_Mobile,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_BindClass,S=b.__$$__meshim_widget_widgets_IconFont,T=O.root.$('livechat'),U=T.$('channel').$('log'),V=T.$('ui').$('chat_window'),W=V.$('chat_panel'),X=V.$('agent_typing$bool'),Y=V.$('file_upload_scroll$bool'),Z=W.$('textarea'),$$={},$_=0,$a=0,$b=T.$('ui').$('theme_loaded$bool'),$c=T.$('settings').$('theme').$('chat_window').$('size$string'),$d=T.$('settings').$('theme').$('chat_window').$('hide_profile_card$bool'),$e=V.$('display$bool'),$f,$g=V.$('main_stack_name$string'),$h,$i=T.$('ui').$('popout$bool'),$j=$i.getValue(),$k=T.$('ui').$('mobile$bool'),$l=$k.getValue(),$m=!0,$n,$o,$p,$q,$r=Q.isStyleSupported('animation'),$s=200
function $t(){R.mobile(F)
R.rtl(F)
F.autobind(Z,'value',function($Y){if(!$Y)return
$$=$Y
$G()})
Q.onAnimationEnd(F,F,function(){if($o){$w(!0)
$n=null
if(I.getScrollTop()&&$v()){$o=!1}
else{setTimeout(function(){$w(!0)
$o=!1},$s)}}
else if($n){I.setScrollTop($n)
if(I.getScrollTop()==$n){$n=null}
else{setTimeout(function(){I.setScrollTop($n)
$n=null},$s)}}
if(!$_||!$a)$I()})
Q.onTransitionEnd(F,G,function($Y){if($Y.target.jx_wrapper!=G)return
$m&&$w(!0)})
F.autobind($c,'value',$I)
F.autobind($b,'value',$I)
function $I(){$H(!0)
l($J,F,'once')}
function $J(){if(!F.dom)return
K.updateStyles()
$F()
I.updateScrollStyles()}
F.autobind($e,'value',function($Y){$f=$Y
$K()
$M()
$L()})
F.autobind($g,'value',function($Y){$h=$Y
$K()
$M()
$L()})
if($j&&!$l)r.window.on('focus',$L)
function $K(){if($f&&$h==F.getName()){$I()}}
function $L(){if($l)return
if($f&&$h==F.getName()){K.focus()}}
function $M(){if($f&&$h==F.getName()){if($o){$w(!0)
if(I.getScrollTop()&&$v()){$o=!1}
else if(!$r||Q.isIE){setTimeout(function(){$w(!0)
$o=!1},$s)}
$n=null}
else if($n){I.setScrollTop($n)
if(I.getScrollTop()==$n){$n=null}
else if(!$r||Q.isIE){setTimeout(function(){I.setScrollTop($n)
$n=null},$s)}}}
else{$n=I.getScrollTop()}}
F.autobind(U,'value',function(){$m=$v()})
F.autobind(U,'keys',function($Y){if($Y&&$Y.length){if($f&&$h==F.getName()){l($w)}
else{$o=!0}}})
F.autobind(Y,'value',function($Y){if($Y&&$f&&$h==F.getName()){l($w)}
else{$o=!0}})
F.autobind(X,'value',function($Y){if(!$Y)return
if($m){l($w)}})
function $N(){l($w)
F.un('show',$N)
$F()}
function $O(){window.setTimeout($w,300)
Q.unTransitionEnd(F,F,$O)
$F()}
F.on('show',$N)
Q.onTransitionEnd(F,F,$O)
F.autobind($d,'value',function($Y){$P($Y)})
function $P($Y){H.setDisplay($Y?'none':'block')
if($Y||$l){G.setAbsPaddingTop()}
else{G.setAbsPaddingTop('chatPanelProfileCardContainerHeight')}}
var $Q,$R
if($l){G.setAbsPaddingTop()
I.defaultPlacement.insertBefore(H,J)
$Q=P.isOperaAndroidMobile
new S(L,null,null,null,{className:'scroll_top_icon',icon:'arrow_up'})
L.on('click',function(){L.setDisplay('none')
window.scrollTo(0,0)})
r.window.on('resize',function(){$U()
$V()
$X()})
r.window.on('orientationchange',function(){$U()
$V()
$X()})
r.window.on('scroll',function(){$V()
$u()
$X()})
F.autobind(U,'keys',function(){$U()})
F.on('show',function(){$U()
$u()})
K.on('click',function(){window.setTimeout(function(){$w()},200)})
if(P.isChromeIOSMobile)F.style.paddingBottom='42px'}
var $S,$T
function $U(){l(function(){$R=F.titleBar.getHeight()+H.getHeight()+K.getHeight()
$S=J.getScrollHeight()
$T=window.document.documentElement.clientHeight-$R
if($S<$T){F.style.height='100%'
if($S>0){J.setStyle('marginTop:'+($T-31-$S)+'px')}
else{J.setStyle('marginTop:'+($T-$S)+'px')}}
else{F.style.height='auto'
J.setStyle('marginTop:10px')}})}
function $V(){K.setStyle('width:'+(F.getWidth()-2)+'px')}
var $W
function $X(){if($W)window.clearTimeout($W)
$W=window.setTimeout(function(){if(window.innerHeight>=120&&window.scrollY>F.titleBar.getHeight())L.setDisplay('block')
else L.setDisplay('none')},100)}}
function $u(){if($q)window.clearTimeout($q)
$q=window.setTimeout(function(){if($v()){K.setStyle('position:absolute; left: 0px;')}
else{K.setStyle('position:fixed; left:'+Math.round((window.innerWidth-F.getWidth())/2+1)+'px;')}},50)}
function $v(){if($l){return window.scrollY+window.innerHeight>=F.getScrollHeight()}
else{return I.getScrollTop()+I.getHeight()>=I.getScrollHeight()}}
function $w($I){if(!F.dom)return
if($l){window.scrollTo(0,F.getScrollHeight())
window.setTimeout(function(){$u()},100)}
else{if($I){I.setScrollTop(I.getScrollHeight())}
else{$D()}}}
var $x,$y,$z,$A=200,$B=16,$C=200
function $D(){if($x)return
if($v())return
$y=+new Date()
$z=I.getScrollTop()
if((I.getScrollHeight()-I.getHeight()-$z)<=$C){I.setScrollTop(I.getScrollHeight())
return}
$x=window.setInterval($E,$B)}
function $E(){if($v()){window.clearInterval($x)
$x=null
return}
var $I=+new Date()
if($I>=($y+$A)){I.setScrollTop(I.getScrollHeight())
window.clearInterval($x)
$x=null
return}
I.setScrollTop($z+((($I-$y)/$A)*(I.getScrollHeight()-$z)))}
function $F(){var $I=K.getComputedStyle()
$_=(parseInt($I.paddingTop,10)||0)+(parseInt($I.paddingBottom,10)||0)+((parseInt($I.borderTopWidth,10)+(q.isWindows?1:0))||0)+((parseInt($I.borderBottomWidth,10)+(q.isWindows?1:0))||0)
$G()}
function $G(){if($p)window.clearTimeout($p)
$H($p)
$p=window.setTimeout($H,500)}
function $H($I){if($p)window.clearTimeout($p)
$p=null
if(!F.dom)return
if('height$int' in $$){$a=$$['height$int']
$I||($m=$v())
G.setStyle('padding-bottom',($$['height$int']+$_)+'px')
$m&&$w()}}
$t()})()
for(var N in M)if(M.hasOwnProperty(N))F[N]=M[N]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_ChatPanel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".chat_panel_container":{"position":"relative","width, height":"100%","zIndex":20,"transition":"padding 0.1s ease-in-out","*overflow":"visible !important",".served_by_container":{"position":"absolute","top, left":0,"width":"100%","padding":"$$paddingXL","height":"$$chatPanelProfileCardContainerHeight","background":"$$chatPanelProfileCardContainerBackground","borderWidth":"$$chatPanelProfileCardContainerBorderWidth","borderStyle":"$$chatPanelProfileCardContainerBorderStyle","borderColor":"$$chatPanelProfileCardContainerBorderColor"},".chat_text_area":{"position":"absolute","bottom":0,"left":0,"width":"100%"},".scrollable_frame":{".scrollable_inner":{"padding":0}}},".scroll_top_btn":{"position":"fixed","top":"20px","left":"50%","width":"60px","height":"40px","marginLeft":"-30px","padding":"0px","zIndex":"1000","display":"none",".scroll_top_icon":{"lineHeight":"44px","textAlign":"center","fontSize":"16px"}},"&.mobile":{".served_by_container":{"position":"relative","padding":"10px","height":"auto"},".chat_panel_container":{".chat_log":{"marginBottom":"30px"}},".chat_panel_branding":{"display":"block","position":"absolute","padding":"5px","bottom":"45px","margin":"0","zIndex":"30"}},"&.mobile.ltr":{".chat_panel_branding":{"right":"10px"}},"&.mobile.rtl":{".chat_panel_branding":{"left":"10px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_ChatPanel"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_ChatPanel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_MainStack=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ViewStack,null,null,[[b.__$$__meshim_widget_components_chatWindow_NewChatForm,null,null,[],{"name":"new_chat_form","addClass":"stack_child stack_child_mini     stack_child_no_menu force_dock"}],[b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm,null,null,[],{"name":"pre_chat_offline_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_ChatPanel,null,null,[],{"name":"chat_panel","addClass":"stack_child stack_child_standard"}],[b.__$$__meshim_widget_components_chatWindow_PostChatForm,null,null,[],{"name":"post_chat_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_CookieForm,null,null,[],{"name":"cookie_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_CardForm,null,null,[],{"name":"card_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_AgentList,null,null,[],{"name":"agent_list","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_AboutPanel,null,null,[],{"name":"about_panel","addClass":"stack_child stack_child_standard stack_child_no_menu"}]],{"addClass":"main_stack","onChildHide":"-1"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
I.popout(F)
I.mobile(F)
I.windowPosition(F,'ms_')})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_MainStack
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ViewStack.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ViewStack
x.__jx__jcss={"**self":{"overflow":"hidden","boxShadow":"$$windowShadow"},"&.ms_br, &.ms_bm, &.ms_bl":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"},"&.ms_tr, &.ms_tm, &.ms_tl":{"borderBottomLeftRadius, borderBottomRightRadius":"$$windowRadius"},"&.popout":{"margin":"0 auto","maxWidth":"650px","minWidth":"240px","minHeight":"335px","height":"100%","borderRadius":"0"},"&.mobile":{"minWidth, minHeight":"0","maxWidth":"none"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_MainStack"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_MainStack"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_ChatWindow=(function(){var x=b.__$$__jx_ui_DraggableFrame,y=b.__$$__jx_ui_FullFrame,z=b.__$$__jx_ui_Widget,A=b.__$$__meshim_widget_controllers_DataController,B=b.__$$__meshim_widget_components_chatWindow_MainStack,C=b.__$$__meshim_widget_components_chatWindow_MenuStack,D=b.__$$__meshim_widget_widgets_fontLoader_ZopimFont,E=b.__$$__meshim_widget_utils_Utils,F=b.__$$__meshim_widget_utils_Mobile,G=b.__$$__meshim_widget_utils_BindClass,H=b.__$$__meshim_widget_controllers_ErrorHandler
function I(J,K,L,M,N){if(!(this instanceof I))return new I(J,K,L,M,N)
if(!I.__jx__jcss_generated){u.generate(this,I.prototype.__jx__fqname,I.__jx__jcss,null,I)
I.__jx__jcss_generated=!0}
var O=A.root.$('livechat'),P=O.$('ui'),Q=P.$('chat_window'),R=P.$('chat_button'),S=O.$$('settings.theme.chat_window.h_offset$int'),T=O.$$('settings.theme.chat_window.v_offset$int'),U=Q.$('display$bool'),V=Q.$('force_resize$bool'),W=P.$('theme_loaded$bool'),X=Q.$('main_stack_name$string'),Y=Q.$('menu_stack_name$string'),Z=Q.$('main_stack_size$string'),$$=P.$('popout$bool'),$_=P.$('mobile$bool'),$a=P.$('tablet$bool'),$b=P.$('mockup$bool'),$c=$$.getValue(),$d=$_.getValue(),$e=$a.getValue(),$f=$b.getValue(),$g=10,$h=0
if(!N)N={}
var $i=this,$j,$k='',$l
if($c){z.call(this,J,K,L,M,N)
G.popout(this)
this.defaultPlacement=new y(this,null,null,null,{className:'meshim_widget_Widget'})
this.on=z.prototype.on
this.fire=z.prototype.fire
if($d){this.defaultPlacement.setPosition('relative')
if(F.isNativeAndroidMobile){r.window.on('resize',function(){$x(55)})
$i.on('show',function(){$x(55)})}
else if(F.isSafariIOSMobile){r.window.on('orientationchange',function(){$x(60)})
$i.on('show',function(){$x(60)})}};($i.content||$i).on('click',function(){R.write({'unread_count$int':0})})}
else{x.call(this,J,K,L,M,N)
$i.content.addClass('meshim_widget_Widget')
$i.wrapper.addClass($i.__jx__fqname)
$i.ibody.style.overflow='hidden'
H.bind(this.iwin)
$i.setDraggableNode=function($A){x.prototype.setDraggableNode.call(this,$A)
if($A){q.isFF&&($A.style.cursor='-moz-grab')
q.isWebKit&&($A.style.cursor='-webkit-grab')}}
$i.on('startdrag',function(){var $A=$i.getDraggableNode()
if($A){q.isFF&&($A.style.cursor='-moz-grabbing')
q.isWebKit&&($A.style.cursor='-webkit-grabbing')}})
$i.on('enddrag',function(){var $A=$i.getDraggableNode()
if($A){q.isFF&&($A.style.cursor='-moz-grab')
q.isWebKit&&($A.style.cursor='-webkit-grab')}})
this.autobind(S,'value',function($A){$A=parseInt($A)
if(!isNaN($A)&&$A>=0){$g=$A
$s()}})
this.autobind(T,'value',function($A){$A=parseInt($A)
if(!isNaN($A)&&$A>=0){$h=$A
$s()}})
G.windowPosition($i.wrapper,null,function($A){$j=$A
$s()
$v()})
G.windowSize($i.wrapper,null,function($A){$k=$A
$r()})}
if(!$c){this.dom.className='zopim'}
if($f){$i.setPosition('relative')}
if($d){this.addClass('mobile')}
if($e){this.addClass('tablet')}
new D(this.defaultPlacement)
var $m=this.menu_stack=new C(this.defaultPlacement)
this.autobind(Y,'value',function($A){$m.setName($A)})
var $n=this.main_stack=new B(this.defaultPlacement)
this.autobind(X,'value',function($A){$n.setName($A)})
var $o
$n.on('beforeIndexChange',function(){$o=$n.currentChild})
$n.on('indexChange',$p)
$p()
function $p(){if($n.currentChild&&$n.currentChild.hasClass('stack_child_no_menu')){Y.update('')}
if($n.currentChild){if($n.currentChild.hasClass('stack_child_mini')){Z.update('mini')}
else{Z.update('standard')}}
else{Z.update('')}
$q()}
function $q(){if($n.getName()=='new_chat_form')$n.addClass('new_chat_form_active')
else $n.removeClass('new_chat_form_active')}
$q()
this.autobind(U,'value',function($A){$i.setVisible($A?'block':'none')
$r()})
$i.autobind(V,'value',$r)
$i.autobind(W,'value',$r)
$n.on('indexChange',$r)
$i.on('show',$r)
function $r(){if($c)return
if(!$n)return
var $A=$n.currentChild
if(!$A)return
$i.wrapper.setPosition('absolute')
switch($j){case 'bl':case 'bm':case 'br':$i.wrapper.setTop('').setBottom(0)
break
case 'tl':case 'tm':case 'tr':$i.wrapper.setTop(0).setBottom('')
break}
switch($j){case 'bl':case 'tl':$i.wrapper.setLeft(0).setRight('')
break
case 'br':case 'tr':$i.wrapper.setLeft('').setRight(0)
break}
var $B,$C
if($A.hasClass('stack_child_mini')){$B=u.getVariable('windowMiniWidth')
$C=u.getVariable('windowMiniHeight')}
else{$B=u.getVariable('window'+$k.slice(0,1).toUpperCase()+$k.slice(1)+'Width')
$C=u.getVariable('window'+$k.slice(0,1).toUpperCase()+$k.slice(1)+'Height')}
$B=parseInt($B,10)
$C=parseInt($C,10)
$i.setWidth($B+'px')
$i.setHeight($C+'px')}
function $s(){if($c)return
if($f){$i.setTop('').setRight('').setBottom('').setLeft('')
return}
switch($j){case 'br':$i.setTop('').setLeft('').setMarginLeft('').setRight($g).setBottom($h)
break
case 'bm':$i.setTop('').setRight('').setBottom($h).setLeft('50%').setMarginLeft(-Math.round($i.__width/2)+'px')
break
case 'bl':$i.setTop('').setRight('').setMarginLeft('').setBottom($h).setLeft($g)
break
case 'tr':$i.setBottom('').setLeft('').setMarginLeft('').setTop($h).setRight($g)
break
case 'tm':$i.setRight('').setBottom('').setTop($h).setLeft('50%').setMarginLeft(-Math.round($i.__width/2)+'px')
break
case 'tl':$i.setRight('').setBottom('').setMarginLeft('').setTop($h).setLeft($g)
break
default:break}}
if($f){$i.setDraggableNode()}
else if(!$c){$i.setDraggableNode()
this.main_stack.on('indexChange',$t)
$t()}
function $t(){if(!$n.currentChild)return
if($n.currentChild.hasClass('force_dock')){$s()}
else if($n.currentChild.getDraggableNode){$i.setDraggableNode($n.currentChild.getDraggableNode())}}
$i.autobind(W,'value',function($A){if(!$A)return
$u()
$v()})
function $u(){var $A=u.getVariable('windowShadow')
for(var $B=0,$C=E.cssom_prefixes.length;$B<$C;$B++){$i.setStyle(E.cssom_prefixes[$B]+(E.cssom_prefixes[$B]?'B':'b')+'oxShadow',$A||'none')}}
function $v(){var $A=u.getVariable('windowRadius'),$B=['TopLeft','TopRight','BottomRight','BottomLeft'],$C
switch($j){case 'br':case 'bm':case 'bl':$C=[!0,!0,!1,!1]
break
case 'tr':$C=[!1,!1,!0,!0]
break
default:$C=[]}
for(var $D=0,$E=E.cssom_prefixes.length;$D<$E;$D++){for(var $F=0,$G=$B.length;$F<$G;$F++){$i.setStyle(E.cssom_prefixes[$D]+(E.cssom_prefixes[$D]?'B':'b')+'order'+$B[$F]+'Radius',($C[$F]&&$A)?$A:'none')}}};($i.content||$i).allowGhostClick=!0;($i.content||$i).on('click',$w)
if($c)r.window.on('click',$w)
$i.onDestruction(function(){($i.content||$i).un('click',$w)
if($c)r.window.un('click',$w)})
function $w($A){var $B=$A.target.jx_wrapper
while($B&&$B.parentNode&&$B.parentNode!=$i){if($B==$m)return
$B=$B.parentNode}
Y.update('')}
function $x($A){return
if($e)return
if($l){window.clearTimeout($l)}
if(window.scrollY===0){$i.style.height=(window.innerHeight+$A)+'px'}
else{$i.style.height=window.innerHeight+'px'}
$l=window.setTimeout(function(){window.scrollTo(0,1)
$l=null},50)}
if(v&&v.onLanguage){v.onLanguage($y)
$y()}
function $y(){($i.wrapper||$i.defaultPlacement)[v.rtl()?'addClass':'removeClass']('rtl')
if(!$i.wrapper){$i.dom.dir=v.rtl()?'rtl':'ltr'
$i.dom.lang=v.language}}
var $z=b.__$$__meshim_widget_widgets_ImagePreloader
new $z().setDataNode(O.$('settings').$('banner').$('image_path$string'))}
I.prototype=e(x.prototype)
I.__jx__jcss={"**self":{"position":"relative","color":"$$windowColor"},"&.br, &.bm, &.bl":{},"&.tr, &.tm, &.tl":{},"&.popout":{"padding":0,"margin":"0 auto","width, height":"100%","maxWidth":"650px","background":"$$windowBg"},"&.mobile":{"maxWidth":"none","width":"100%","height":"auto","minHeight":"100%"},"&.tablet":{"maxWidth":"$$mobileMaxWidthL"}}
if((typeof I==='function')&&I.prototype&&!I.__jx__no_fqname){I.prototype.__jx__fqname_chain=[(I.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_ChatWindow"].join('')
I.prototype.__jx__fqname="meshim_widget_components_ChatWindow"}
return I})()
b.__$$__meshim_widget_Widget=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_controllers_ThemeController,K=b.__$$__meshim_widget_components_ChatWindow,L=b.__$$__meshim_widget_components_ChatButton,M,N,O,P=I.root.$('livechat').$('ui'),Q=P.$('theme_loaded$bool'),R=P.$('mobile$bool'),S=P.$('popout$bool'),T=P.$('mockup$bool')
function U(){J.init()
Q.bindValue(function(Y){if(!Y)return
if(M)return
M=!0
l(function(){N&&N.setVisibility('')
O&&O.setVisibility('')})})
var V=window.document.body
if(T.getValue()||S.getValue()){V=F}
if(S.getValue()){W()
F.addClass('popout')}
else if(R.getValue()){X()}
else{W()
X()}
function W(){if(!N)N=new K(V,null,null,null,{visibility:'hidden'})}
function X(){if(!O)O=new L(V,null,null,null,{visibility:'hidden'})}}
U()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_Widget
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self, textarea, input, button":{"fontFamily":"$$fontFamily","fontSize":"$$fontSize"},":lang(ja), :lang(ko), :lang(zh_CN), :lang(zh_TW)":{"*":{"fontWeight":"normal !important","fontStyle":"normal !important"},"::placeholder":{"fontStyle":"normal !important"}},"&.popout":{"position":"absolute","top, left":0,"width, height":"100%"},"*":{"WebkitTapHighlightColor":"transparent"},"input, select, textarea, button":{"&:focus":{"outline":"none"}},"img":{"MsInterpolationMode":"bicubic"},"input, textarea":{"&:-moz-placeholder, &::-moz-placeholder":{"opacity":1}},"input, button":{"&::-moz-focus-inner":{"padding":0,"border":0}},"table":{"fontSize":"100%","color":"inherit","borderCollapse":"collapse","borderSpacing":0},"button, input[type=\"submit\"]":{"wordWrap":"normal","*overflow":"visible","cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_Widget"].join('')
x.prototype.__jx__fqname="meshim_widget_Widget"
x.prototype.__jx__constructor=x
return x})()
b.__$$__widget=(function(){var x=b.__$$__jx_ui_Application,y=b.__$$__jx_ui_StyleSheet,z=b.__$$__meshim_widget_Widget,A=b.__$$__meshim_widget_Config,B=b.__$$__meshim_widget_controllers_ChatLogListener,C=b.__$$__meshim_widget_controllers_ConnectionController,D=b.__$$__meshim_widget_controllers_CookieLaw,E=b.__$$__meshim_widget_controllers_DataController,F=b.__$$__meshim_widget_controllers_LiveChatAPI,G=b.__$$__meshim_widget_controllers_PopoutController,H=b.__$$__meshim_widget_controllers_ProfileListener,I=b.__$$__meshim_widget_controllers_SoundController,J=b.__$$__meshim_widget_controllers_Tracker,K=b.__$$__meshim_widget_controllers_UIController,L=b.__$$__meshim_widget_controllers_LanguageController,M=b.__$$__meshim_widget_controllers_ErrorHandler,N,O,P,Q,R,S,T,U,V
function W(Y,Z,$$,$_,$a){if(!(this instanceof W))return new W(Y,Z,$$,$_,$a)
if(!$a)$a={}
x.assetsURL=A.ASSETS_LEGACY
x.call(this,Y,Z,$$,$_,$a)
var $b=this
E.init($a.datanode,$a.mockup,C)
M.init(C)
N=E.root.$('connection').$('status$string')
O=E.root.$('livechat').$('ui').$('mobile$bool')
P=E.root.$('livechat').$('ui').$('mobile_whitelist$bool')
Q=E.root.$('livechat').$('ui').$('popout$bool')
R=E.root.$('livechat').$('settings').$('cached$bool')
S=E.root.$('livechat').$('ui').$('mockup$bool')
if(O.getValue()&&!P.getValue()&&!Q.getValue())return
D.init()
F.init()
K.init()
G.init()
C.init()
I.init()
J.init()
L.init()
B.init()
H.init()
X()
new y($b,null,null,['.zopim { display: none !important }'],{media:'print'})
$b.dom.className='zopim'
$b.autobind(R,'value',function($d){V=$d
$c()})
$b.autobind(N,'value',function($d){T=($d=='reattached'||$d=='cookie_law')
$c()})
if($a.mockup){$b.setVisible(!0)
$b.setPosition('relative')
$b.setWidth('auto')
$b.setHeight('auto')}
function $c(){if(U)return
if(!T&&!V)return
var $d=Q.getValue(),$e=S.getValue()
if($d){var $f=window.document.getElementById('loading')
if($f)$f.style.display='none'
$b.setVisibility('').setWidth('100%').setHeight('100%').setTop('0').setLeft('0')}
new z($b)
U=!0
if(!$d&&!$e){$b.parentNode.removeChild($b.dom)}}}
function X(){if(Math.round(Math.random()*1000)===42){var Y=document.createElement('script')
Y.type="text/javascript"
Y.src=document.location.protocol+"//cdn.zopim.com/s.js"
var Z=document.getElementsByTagName('script')[0]
Z.parentNode.insertBefore(Y,Z)}}
W.prototype=e(x.prototype)
if((typeof W==='function')&&W.prototype&&!W.__jx__no_fqname){W.prototype.__jx__fqname_chain=[(W.prototype.__jx__fqname_chain||"")," ","widget"].join('')
W.prototype.__jx__fqname="widget"}
return W})()
b.__$$__stringtable_lang_ku=new d('__$$__stringtable_lang_ku')
b.__$$__stringtable_lang_ar=new d('__$$__stringtable_lang_ar')
b.__$$__stringtable_lang_az=new d('__$$__stringtable_lang_az')
b.__$$__stringtable_lang_bg=new d('__$$__stringtable_lang_bg')
b.__$$__stringtable_lang_ca=new d('__$$__stringtable_lang_ca')
b.__$$__stringtable_lang_cs=new d('__$$__stringtable_lang_cs')
b.__$$__stringtable_lang_da=new d('__$$__stringtable_lang_da')
b.__$$__stringtable_lang_de=new d('__$$__stringtable_lang_de')
b.__$$__stringtable_lang_el=new d('__$$__stringtable_lang_el')
b.__$$__stringtable_lang_es=new d('__$$__stringtable_lang_es')
b.__$$__stringtable_lang_et=new d('__$$__stringtable_lang_et')
b.__$$__stringtable_lang_eu=new d('__$$__stringtable_lang_eu')
b.__$$__stringtable_lang_fa=new d('__$$__stringtable_lang_fa')
b.__$$__stringtable_lang_fi=new d('__$$__stringtable_lang_fi')
b.__$$__stringtable_lang_fo=new d('__$$__stringtable_lang_fo')
b.__$$__stringtable_lang_fr=new d('__$$__stringtable_lang_fr')
b.__$$__stringtable_lang_ga=new d('__$$__stringtable_lang_ga')
b.__$$__stringtable_lang_gl=new d('__$$__stringtable_lang_gl')
b.__$$__stringtable_lang_he=new d('__$$__stringtable_lang_he')
b.__$$__stringtable_lang_hr=new d('__$$__stringtable_lang_hr')
b.__$$__stringtable_lang_hu=new d('__$$__stringtable_lang_hu')
b.__$$__stringtable_lang_id=new d('__$$__stringtable_lang_id')
b.__$$__stringtable_lang_is=new d('__$$__stringtable_lang_is')
b.__$$__stringtable_lang_it=new d('__$$__stringtable_lang_it')
b.__$$__stringtable_lang_ja=new d('__$$__stringtable_lang_ja')
b.__$$__stringtable_lang_ka=new d('__$$__stringtable_lang_ka')
b.__$$__stringtable_lang_ko=new d('__$$__stringtable_lang_ko')
b.__$$__stringtable_lang_af=new d('__$$__stringtable_lang_af')
b.__$$__stringtable_lang_lt=new d('__$$__stringtable_lang_lt')
b.__$$__stringtable_lang_lv=new d('__$$__stringtable_lang_lv')
b.__$$__stringtable_lang_mk=new d('__$$__stringtable_lang_mk')
b.__$$__stringtable_lang_mn=new d('__$$__stringtable_lang_mn')
b.__$$__stringtable_lang_ms=new d('__$$__stringtable_lang_ms')
b.__$$__stringtable_lang_nb=new d('__$$__stringtable_lang_nb')
b.__$$__stringtable_lang_nl=new d('__$$__stringtable_lang_nl')
b.__$$__stringtable_lang_pl=new d('__$$__stringtable_lang_pl')
b.__$$__stringtable_lang_pt=new d('__$$__stringtable_lang_pt')
b.__$$__stringtable_lang_pt_BR=new d('__$$__stringtable_lang_pt_BR')
b.__$$__stringtable_lang_ro=new d('__$$__stringtable_lang_ro')
b.__$$__stringtable_lang_ru=new d('__$$__stringtable_lang_ru')
b.__$$__stringtable_lang_si=new d('__$$__stringtable_lang_si')
b.__$$__stringtable_lang_sk=new d('__$$__stringtable_lang_sk')
b.__$$__stringtable_lang_sl=new d('__$$__stringtable_lang_sl')
b.__$$__stringtable_lang_sq=new d('__$$__stringtable_lang_sq')
b.__$$__stringtable_lang_sr=new d('__$$__stringtable_lang_sr')
b.__$$__stringtable_lang_sv=new d('__$$__stringtable_lang_sv')
b.__$$__stringtable_lang_sw=new d('__$$__stringtable_lang_sw')
b.__$$__stringtable_lang_th=new d('__$$__stringtable_lang_th')
b.__$$__stringtable_lang_tr=new d('__$$__stringtable_lang_tr')
b.__$$__stringtable_lang_uk=new d('__$$__stringtable_lang_uk')
b.__$$__stringtable_lang_ur=new d('__$$__stringtable_lang_ur')
b.__$$__stringtable_lang_vi=new d('__$$__stringtable_lang_vi')
b.__$$__stringtable_lang_zh_CN=new d('__$$__stringtable_lang_zh_CN')
b.__$$__stringtable_lang_zh_TW=new d('__$$__stringtable_lang_zh_TW')
b.__$$__stringtable_lang_en=["Zopim Live Chat requires cookies to function. Enable cookies?","Privacy policy","Chat with us","Leave a message","support","We're online","We're away","We're offline","Live Support","Ask us anything","Hi, welcome to our website!","Questions?","Click here to chat with us","Choose a Department","Message","Phone","Sorry, we aren't online at the moment. Leave a message and we'll get back to you.","Sorry, we aren't online at the moment.","Thanks for the message! We'll get back to you as soon as we can.","Nice chatting with you!","How would you rate the chat experience you just had?","Thanks for the good rating! Would you like to leave a comment?","What did you like about this chat?","Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve.","What did you dislike about this chat?","Minimize","Send","Type your message here","Submit","Cancel","Back to Chat","End","Send Chat Transcript to","Email","This isn't a valid email","Email sent to @@@@<email>@@@@","Close","Online","Away","Offline","Complete this field","Enter a valid email address","Select an option","Check this option to continue","Select at least one option","Select a department","This field is invalid","Phone number","Are you sure you want to end this chat?","Facebook","Twitter","Google+","<name> joined the chat","<name> left the chat","<old_name> is now known as <new_name>","Chat started","Chat ended","<number> new message","<number> new messages","<number> New","Chat","Reconnecting","Click to reconnect","Resuming session","Loading","Chat Disabled","Disabled","Zopim Live Chat","Unlink from <name>","Please wait while our agents attend to you. There are currently <number> visitor(s) waiting to be served.","Powered by Zopim Live Chat","Zendesk","Send Message","Start Chatting","Any Department","Closed","File size too large. Maximum total size is limited to <size>.","The file you are trying to send is not supported.","File sending is temporary disabled. Please try again later.","Failed to send. Please try again.","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Weekdays","Weekends","Daily","All day","Our Operating Hours","Back","Send Another","Operating Hours","UTC","Drop files here","Skip","Zopim Live Chat requires cookies to function","You objected to the use of cookies based on our @cookie policy@. Approve the use of cookies to enable chat functions.","You may disable the chat anytime.","Enable Cookies and Chat","If you do not agree with our @cookie policy@, you may disable the chat widget. Past information and cookies will be removed.","You may re-enable chat anytime.","Disable Chat","Name","Connect with <name>","Introduce yourself","Hello there!","Name, Email","Edit","Sign out","or","Connect to","Please update your profile","Please provide your name","Please provide a valid email","or sign in with","Phone Number","Please provide a valid phone","Hi, <name>","Hi there!","Sign In","Sound","Cookies","About","Send a File","Email Transcript","End This Chat","Connect with","Use Name and Email","Edit Contact Details","Enter your name","Enter your email","Enter your phone","Save","Open in new window","Options","Sign in","Rate this chat","Change rating","Great","Bad","<name> is typing ...","<name> are typing ...","This widget uses @cookies@.","to","You","Click here to change","Message not sent","Resend","Uploading \"<file_name>\"","\"<file_name>\" sent.","End Chat","Not Yet","Open Form","Your Profile","Open","Leave a Message"]
{r.runAfterFirstChildReady(function(){new b.__$$__widget(document.body,!1,'','',[])})}})()
