import{b_ as _,bZ as t}from"./vendor.b002b14f.js";function e(_,t){for(var e=0;e<t.length;e++){const r=t[e];for(const t in r)if("default"!==t&&!(t in _)){const e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(_,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(_)}var r={exports:{}};const n=r.exports=function(_){function t(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var e=t(_),r="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),o="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),s="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function a(_,t,e){var r,n;return"m"===e?t?"минута":"минуту":_+" "+(r=+_,n={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[e].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var m=function(_,t){return i.test(t)?r[_.month()]:n[_.month()]};m.s=n,m.f=r;var u=function(_,t){return i.test(t)?o[_.month()]:s[_.month()]};u.s=s,u.f=o;var f={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:m,monthsShort:u,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:a,mm:a,h:"час",hh:a,d:"день",dd:a,M:"месяц",MM:a,y:"год",yy:a},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};return e.default.locale(f,null,!0),f}(_.exports),o=Object.freeze(e({__proto__:null,[Symbol.toStringTag]:"Module",default:n},[r.exports]));export{o as r};