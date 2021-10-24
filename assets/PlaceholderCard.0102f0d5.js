import{W as e}from"./WatchInfo.8e5dada9.js";import{n as t,b as o}from"./main.99de04eb.js";import{ax as i,b6 as s,aQ as r,ar as a,an as d,am as n,ao as l}from"./vendor.b002b14f.js";import"./ChannelChip.90d56af4.js";import"./TruncatedText.46009fb7.js";var c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o(i,{attrs:{value:e.value,width:e.isTooSmall?"96%":"80%","max-width":"980"},on:{input:e.$listeners.input}},[o(s,{staticStyle:{position:"relative"}},[e.video.thumbnail?o(r,{attrs:{src:"/statics/thumbnail/maxres/"+e.enc(e.video.thumbnail)+".jpg"}}):o(r,{attrs:{"max-height":"130px",src:"https://www.banner.yt/"+(e.video.channel_id||e.video.channel.id)+"/mobile"}}),o(s,{staticStyle:{height:"12px"}}),o("watch-info",{attrs:{video:e.video,"no-sub-count":""}},[o("template",{slot:"rightTitleAction"},["scheduled-yt-stream"===e.video.placeholderType?o(a,{staticClass:"float-right placeholder-punchout",attrs:{large:"",color:"primary",href:e.video.link,target:"_blank"}},[o(d,{attrs:{left:""}},[e._v(" "+e._s(e.icons.mdiYoutube)+" ")]),e._v(" "+e._s(e.$t("component.placeholderVideo.scheduledEvent"))+" ")],1):o(a,{staticClass:"float-right placeholder-punchout",attrs:{large:"",color:"primary",target:"_blank",href:e.video.link}},[o(d,{attrs:{left:""}},[e._v(" "+e._s(e.icons.mdiOpenInNew)+" ")]),e._v(" "+e._s("external-stream"===e.video.placeholderType?e.$t("component.placeholderVideo.streamPageBtn"):e.$t("component.placeholderVideo.eventPageBtn"))+" ")],1)],1),o(n,{staticClass:"text-body-2 pl-7 mt-n4",staticStyle:{"text-align":"left"},attrs:{"two-line":""}},[o(l,[o("span",[e._v(e._s(e.$t("component.placeholderVideo.creditTitleText")))]),e.video.credits.discord&&e.discordCredits&&e.discordCredits.data?o("span",[o("i18n",{attrs:{path:"component.placeholderVideo.discordCredit",tag:!1},scopedSlots:e._u([{key:"0",fn:function(){return[e._v(" "+e._s(e.video.credits.discord.user)+" ")]},proxy:!0},{key:"1",fn:function(){return[o("strong",[o("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://discord.gg/"+e.video.credits.discord.link}},[o(d,{attrs:{small:"",color:""}},[e._v(" "+e._s(e.icons.mdiDiscord))]),e._v(e._s(e.discordCredits.data.guild.name))],1)])]},proxy:!0}],null,!1,1576114520)})],1):e._e(),e.video.credits.datasource?o("span",[e._v(" "+e._s(e.$t("component.placeholderVideo.datasourceCredit",[e.video.credits.datasource.name]))+" "),o("strong",[o("a",{attrs:{href:e.video.credits.datasource.link}},[o(d,{attrs:{small:""}},[e._v(e._s(e.icons.mdiOpenInNew))]),e._v(e._s(e.video.credits.datasource.link))],1)])]):e._e(),e.video.credits.bot?o("span",[e._v(" "+e._s(e.$t("component.placeholderVideo.botCredit",[e.video.credits.bot.name,e.video.credits.bot.user]))+" "),o("strong",[o("a",{attrs:{href:e.video.credits.bot.link}},[o(d,{attrs:{small:""}},[e._v(e._s(e.icons.mdiOpenInNew))]),e._v(e._s(e.video.credits.bot.link))],1)])]):e._e(),e.video.credits.editor?o("span",[e._v(" "+e._s(e.$t("component.placeholderVideo.editorCredit",[e.video.credits.editor.name]))+" ")]):e._e()])],1)],2)],1)],1)},p=[];c._withStripped=!0;const v={components:{WatchInfo:e},props:{value:{type:Boolean,required:!0},video:{type:Object,required:!0}},data:()=>({discordCredits:{}}),computed:{isTooSmall(){return this.$vuetify.breakpoint.width<700}},async mounted(){var e,t;(null==(t=null==(e=this.video)?void 0:e.credits)?void 0:t.discord)&&(this.discordCredits=await o.discordServerInfo(this.video.credits.discord.link))},methods:{enc:e=>btoa(e).replace("+","-").replace("/","_").replace(/=+$/,"")}},h={};var m=t(v,c,p,!1,u,null,null,null);function u(e){for(let t in h)this[t]=h[t]}m.options.__file="src/components/video/PlaceholderCard.vue";const _=function(){return m.exports}();export{_ as default};