KISSY.add("tbc/search-suggest/1.4.8/mods/local-query",function(t,e,a,s,n){function i(t){i.superclass.constructor.call(this,t||{}),this.initialize()}var r="localQuery";return KISSY.extend(i,e,{initialize:function(){var t=this,e=t.get("name"),a=t.get("tab"),s=t.get("user");"item"===a&&(a="baobei"),t.storageKey=r+e+a+s,t._getStorage()},checkFlash:function(t){this.storage.read(t)},_setKey:function(t){var e=this,a=t.name||e.get("name"),s=t.tab||e.get("tab"),n=t.user||e.get("user");"item"===s&&(s="baobei"),e.storageKey=r+a+s+n,e.set("tab",s),e.set("name",a),e.set("user",n),this.datalist=null},_save:function(t,e){if(!t.match(/<>'"/)&&!e.match(/<>'"/)){var a=this._getDatalist(),s=encodeURIComponent(t),n={key:s,value:encodeURIComponent(e),time:KISSY.now()};this._deleteItemByValue(a,s),a.unshift(n)}},_deleteItemByValue:function(t,e){for(var a,s=null,n=0;n<t.length;n++)a=t[n].key,a==e&&(s=t.splice(n,1),n--)},_query:function(t){var e,a,s=this._getDatalist(),n=[];return t?(t=encodeURIComponent(t),KISSY.each(s,function(s,i){e=s.key,a=s.value,(0===e.indexOf(t)||0===a.indexOf(t))&&n.push(s)}),this._distinctByValue(n)):this._distinctByValue(s)},_distinctByValue:function(t){for(var e,a=[],s=0,n=t.length;n>s;s++)e=t[s],e.value.match(/%3C|%3E|[<>'"]/g)||!this._hasItemOfValue(a,e.value)&&a.push(e);return a},_hasItemOfValue:function(t,e){for(var a=!1,s=t.length-1;s>=0;s--)t[s].value===e&&(a=!0);return a},_cleanBefore:function(t){for(var e,a=this._getDatalist(),s=0,n=a.length-1;n>=0;n--)if(e=a[n],e.time>t){s=n+1;break}a.length=s},_getDatalist:function(){return this.datalist||(this.datalist=this.storage.read()||[]),this.datalist},_getStorage:function(){var t=this.get("storageType");switch(t){case"flashStorage":this.storage=this._initFlashStorage();break;default:this.storage=!1}},_initFlashStorage:function(){var t=this;return{save:function(){return(new s).save(t.storageKey,a.stringify(t.datalist))},read:function(e){var i=(new s).read(t.storageKey,e);if(i){var r=a.parse(i);return r}return n}}},destructor:function(){this.datalist=null,r=null},save:function(t,e){if(""!=e){var a,s=this.storage.read();s&&(a=s.length);var n=this._save(t,e),i=this.storage.save();return a>300&&(this.datalist=this.datalist.slice(0,a-10),KISSY.log("add_before\n"+i+"\n"+a),i=this.storage.save(),KISSY.log("add_after\n"+i+"\n"+a)),n}},query:function(t){return this._query(t)},deleteItem:function(t){var e=this._getDatalist(),a=e.length;this._deleteItemByValue(e,encodeURIComponent(t));var s=this.storage.save();a>300&&(this.datalist=this.datalist.slice(0,a-10),s=this.storage.save(),KISSY.log("delete\n"+s+"\n"+a))},clearByDay:function(t){var e=KISSY.now()-24*t*3600*1e3;this._cleanBefore(e),this.storage.save()},hasHistory:function(){return this._getDatalist().length>0?!0:!1}},{ATTRS:{name:{value:"default",setter:function(t){return t}},user:{value:"",setter:function(t){return KISSY.fromUnicode(t)}},maxLength:{value:500},storageType:{value:"flashStorage",setter:function(t){return t},getter:function(t){return t}}}}),i},{requires:["base","json","../mods/storage"]});