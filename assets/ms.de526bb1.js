import{b_ as e,bZ as t}from"./vendor.b002b14f.js";function a(e,t){for(var a=0;a<t.length;a++){const r=t[a];for(const t in r)if("default"!==t&&!(t in e)){const a=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(e)}var r={exports:{}};const _=r.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),r={name:"ms",weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH.mm",LLLL:"dddd, D MMMM YYYY HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(e){return e+"."}};return a.default.locale(r,null,!0),r}(e.exports),s=Object.freeze(a({__proto__:null,[Symbol.toStringTag]:"Module",default:_},[r.exports]));export{s as m};