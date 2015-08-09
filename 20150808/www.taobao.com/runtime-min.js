/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:31
*/
KISSY.add("xtemplate/runtime/scope",[],function(g){function l(e,f){this.data=e||{};this.affix=f;this.root=this}l.prototype={isScope:1,setParent:function(e){this.parent=e;this.root=e.root},getParent:function(){return this.parent},getRoot:function(){return this.root},set:function(e,f){this.affix||(this.affix={});this.affix[e]=f},setData:function(e){this.data=e},getData:function(){return this.data},mix:function(e){this.affix||(this.affix={});g.mix(this.affix,e)},has:function(e){var f=this.data,i=this.affix;
return i&&e in i?!0:"object"===typeof f&&e in f},get:function(e){var f=this.data,i=this.affix;if(i&&e in i)return i[e];if("object"===typeof f&&e in f)return f[e]},resolve:function(e,f){"."===e&&(e="this");var i=e.split("."),d=this,b,c,a,g,k;if("root"===i[0])i.shift(),d=d.root;else if(f)for(;d&&f--;)d=d.parent;var h=0;for(b=i.length;d;){k=1;a=d;for(c=0;c<b;c++)if(g=i[c],"this"===g)h=1;else if(a===d)if(d.has(g))a=d.get(g),h=1;else{k=0;break}else{if(null==a||"object"!==typeof a||!(g in a)){k=0;break}a=
a[g]}if(k)return a&&a.isScope&&(a=a.data),"function"===typeof a&&(a=a.call(this.data)),[a];if(h)break;d=d.parent}return!1}};return l});
KISSY.add("xtemplate/runtime/commands",["path","./scope"],function(g,l){var e,f=l("path"),i=l("./scope");return e={"debugger":g.noop,each:function(d,b){var c=b.params,a=c[0],e=c[2]||"xindex",c=c[1],f="",h,j,m;if(a)if(j=new i,g.isArray(a)){h=a.length;for(var n=0;n<h;n++)j.data=a[n],m=j.affix={xcount:h},m[e]=n,c&&(m[c]=a[n]),j.setParent(d),f+=b.fn(j)}else for(h in a)j.data=a[h],m=j.affix={},m[e]=h,c&&(m[c]=a[h]),j.setParent(d),f+=b.fn(j);else b.inverse&&(f=b.inverse(d));return f},"with":function(d,
b){var c=b.params[0],a="";c?(c=new i(c),c.setParent(d),a=b.fn(c)):b.inverse&&(a=b.inverse(d));return a},"if":function(d,b){var c="";b.params[0]?b.fn&&(c=b.fn(d)):b.inverse&&(c=b.inverse(d));return c},set:function(d,b){d.mix(b.hash);return""},include:function(d,b){var c=b.params;if(!c||1!==c.length)return"";if(b.hash){var a=new i(b.hash);a.setParent(d);d=a}a=this.config.name;c=c[0];if("."===c.charAt(0)){if("unspecified"===a)return"";c=f.resolve(a,"../",c)}a=this.config.loader.call(this,c);b=g.merge(this.config);
b.name=c;b.commands=this.config.commands;b.macros=this.config.macros;return this.invokeEngine(a,d,b)},macro:function(d,b){var c=b.params,a=c[0],e=c.slice(1),c=this.config.macros;if(b.fn)c[a]||(c[a]={paramNames:e,fn:b.fn});else{var f={},a=c[a];g.each(a.paramNames,function(c,j){f[c]=e[j]});c=new i(f);return a.fn.call(this,c)}return""},parse:function(d,b){return e.include.call(this,new i,b)}}});
KISSY.add("xtemplate/runtime",["./runtime/commands","./runtime/scope"],function(g,l){function e(){}function f(j,c){for(var a=c.split("."),b=j,e=a.length,d=0;d<e&&!(b=b[a[d]],!b);d++);return b}function i(j,c,a,b){var d;if(b=f(j.config.commands,b)){try{d=b.call(j,c,a)}catch(e){}return{find:!0,value:d}}return{find:!1}}function d(j,c,a,b,d){var f,j=j.config.silent?e:g.error,c=c.resolve(a,b);!1===c?j('can not find property: "'+a+'" at line '+d,"warn"):f=c[0];return f}function b(j,a){this.tpl=j;a=g.merge(h,
a);a.commands=g.merge(a.commands,c);a.utils=k;a.macros=a.macros||{};this.config=a}var c=l("./runtime/commands"),a=l("./runtime/scope"),p=g.escapeHtml,k={runBlockCommand:function(a,c,b,d,i){var h=a.config,l=h.silent?e:g.error,h=h.commands,o=f(h,d);if(!o)if(!b.params&&!b.hash){var k=c.resolve(d);!1===k?(l('can not find property: "'+d+'" at line '+i),k=""):k=k[0];o=h["if"];g.isArray(k)?o=h.each:"object"===typeof k&&(o=h["with"]);b.params=[k]}else return"";var q;try{q=o.call(a,c,b)}catch(p){}return q},
renderOutput:function(a,c){void 0===a&&(a="");return c&&a?p(a):a},getProperty:function(a,c,b,e,f){return d(a,c,b,e,f)},runInlineCommand:function(a,c,b,d,e){var f="",a=i(a,c,b,d,e);a.find&&(f=a.value);return f},getPropertyOrRunCommand:function(a,c,b,e,f,g){var h,k=b.hash||b.params,b=i(a,c,b,e,g,k);b.find?h=b.value:k||(h=d(a,c,e,f,g));return h}},h={silent:!0,name:"unspecified",loader:function(a){return g.require(a)}};g.mix(b,{commands:c,utils:k,addCommand:function(a,b){c[a]=b},removeCommand:function(a){delete c[a]}});
b.prototype={constructor:b,invokeEngine:function(a,b,c){return(new this.constructor(a,c)).render(b,!0)},removeCommand:function(a){delete this.config.commands[a]},addCommand:function(a,b){this.config.commands[a]=b},render:function(b){var c=b;if(!c||!c.isScope)c=new a(b);return this.tpl(c,g)}};b.Scope=a;return b});
