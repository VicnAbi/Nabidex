import{b_ as e,bZ as r}from"./vendor.b002b14f.js";function t(e,r){for(var t=0;t<r.length;t++){const n=r[t];for(const r in n)if("default"!==r&&!(r in e)){const t=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,t.get?t:{enumerable:!0,get:()=>n[r]})}}return Object.freeze(e)}var n={exports:{}};const _=n.exports=function(e){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e),n={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return e+(1===e?"er":"")}};return t.default.locale(n,null,!0),n}(e.exports),o=Object.freeze(t({__proto__:null,[Symbol.toStringTag]:"Module",default:_},[n.exports]));export{o as f};