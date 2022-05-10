(function(g){var window=this;'use strict';var vXa=function(a,b){a.Oa("onAutonavCoundownStarted",b)},Q5=function(a,b,c){g.O(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Qe(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.IE&&(b.lengthText?(e=b.lengthText||null,f=b.Bq||null):b.lengthSeconds&&(e=g.XK(b.lengthSeconds),f=g.XK(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.EE(d).type;var l=b instanceof g.IE?b.isLivePlayback:null,m=b instanceof g.IE?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.Tl||g.dH("Regarder $TITLE",{TITLE:b.title}),duration:e,
timestamp:f,url:b.al(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.yn};b instanceof g.HE&&(c.playlist_length=b.playlistLength);a.update(c)},R5=function(a){var b=a.T(),c=b.i;
g.W.call(this,{D:"a",K:"ytp-autonav-suggestion-card",V:{href:"{{url}}",target:c?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],V:{style:"{{background}}"},U:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],ma:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],ma:"En direct"},
{D:"div",Ga:["ytp-autonav-upcoming-stamp"],ma:"\u00c0 venir"},{D:"div",K:"ytp-autonav-list-overlay",U:[{D:"div",K:"ytp-autonav-mix-text",ma:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ma:"{{title}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ma:"{{author}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ma:"{{views_and_publish_time}}"}]});this.G=
a;this.suggestion=null;this.i=c;this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress)},T5=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.I=b;this.C=void 0;this.j=0;b=a.T();var d=b.i;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.S(a,"videodatachange",this.onVideoDataChange);this.i=new g.W({D:"div",K:"ytp-autonav-endscreen-upnext-container",V:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{D:"div",
K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",ma:"{{autoplayAlternativeHeader}}"},{D:"a",K:"ytp-autonav-endscreen-link-container",V:{href:"{{url}}",target:d?b.I:""},U:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",V:{style:"{{background}}"},U:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],ma:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],ma:"En direct"},{D:"div",Ga:["ytp-autonav-upcoming-stamp"],ma:"\u00c0 venir"}]},
{D:"div",K:"ytp-autonav-endscreen-video-info",U:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",ma:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",ma:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",ma:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",ma:"{{author_and_views}}"}]}]}]});g.J(this,this.i);this.i.Ca(this.element);d||this.S(this.i.Da("ytp-autonav-endscreen-link-container"),"click",this.rJ);this.G.Ab(this.element,
this,115127);this.G.Ab(this.i.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({D:"div",K:"ytp-autonav-overlay"});g.J(this,this.overlay);this.overlay.Ca(this.element);this.u=new g.W({D:"div",K:"ytp-autonav-endscreen-button-container"});g.J(this,this.u);this.u.Ca(this.element);this.cancelButton=new g.W({D:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],V:{"aria-label":"Annuler la lecture automatique"},ma:"Annuler"});g.J(this,
this.cancelButton);this.cancelButton.Ca(this.u.element);this.cancelButton.Pa("click",this.uR,this);this.G.Ab(this.cancelButton.element,this,115129);this.playButton=new g.W({D:"a",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],V:{href:"{{url}}",role:"button","aria-label":"Lire la vid\u00e9o suivante"},ma:"Regarder"});g.J(this,this.playButton);this.playButton.Ca(this.u.element);this.playButton.Pa("click",this.rJ,this);this.G.Ab(this.playButton.element,this,115130);
this.B=new g.K(function(){S5(c)},500);
g.J(this,this.B);this.qJ();this.S(a,"autonavvisibility",this.qJ)},W5=function(a){var b=a.G.Ej(!0,a.G.isFullscreen());
g.O(a.element,"ytp-autonav-endscreen-small-mode",a.Af(b));g.O(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.OB);g.O(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.oe());g.O(a.G.getRootNode(),"countdown-running",a.Kh());g.O(a.element,"ytp-player-content",a.G.oe());g.cn(a.overlay.element,{width:b.width+"px"});if(!a.Kh()){a.G.oe()?U5(a,Math.round(V5(a)/1E3)):U5(a);b=!!a.suggestion&&!!a.suggestion.yn;var c=a.G.oe()||!b;g.O(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.O(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.UJ(a.u,a.G.oe())}},S5=function(a){var b=V5(a),c=Math,d=c.min;
var e=a.j?Date.now()-a.j:0;c=d.call(c,e,b);U5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Kh()?a.select(!0):a.Kh()&&a.B.start()},V5=function(a){var b=a.G.cq();
return 0<=b?b:g.aD(a.G.T().experiments,"autoplay_time")||1E4},U5=function(a,b){b=void 0===b?-1:b;
a=a.i.Da("ytp-autonav-endscreen-upnext-header");g.Sh(a);if(0<=b){b=String(b);var c="Prochaine vid\u00e9o dans $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Prochaine vid\u00e9o dans $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Rh("Prochaine vid\u00e9o dans $SECONDS".slice(0,d)));var e=g.Qh("span");g.nq(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Xh(e,b);a.appendChild(e);a.appendChild(g.Rh("Prochaine vid\u00e9o dans $SECONDS".slice(d+c.length)));return}}g.Xh(a,"\u00c0 suivre")},
X5=function(a,b){g.W.call(this,{D:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},Y5=function(a){g.W.call(this,{D:"div",
Ga:["ytp-upnext","ytp-player-content"],V:{"aria-label":"{{aria_label}}"},U:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",V:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",U:[{D:"span",K:"ytp-upnext-header",ma:"\u00c0 suivre"},{D:"span",K:"ytp-upnext-title",ma:"{{title}}"},{D:"span",K:"ytp-upnext-author",ma:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",V:{role:"button",href:"{{url}}","aria-label":"Lire la vid\u00e9o suivante"},U:[{D:"svg",V:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},U:[{D:"circle",K:"ytp-svg-autoplay-circle",V:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",V:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",V:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",U:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
ma:"La lecture automatique est d\u00e9sactiv\u00e9e"}]}]});this.api=a;this.cancelButton=null;this.C=this.Da("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.K(this.oz,5E3,this);this.j=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=new g.W({D:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],V:{tabindex:"0","aria-label":"Annuler la lecture automatique"},ma:"Annuler"});g.J(this,this.cancelButton);this.cancelButton.Pa("click",this.vR,this);this.cancelButton.Ca(b);
this.cancelButton&&this.api.Ab(this.cancelButton.element,this,115129);g.J(this,this.B);this.api.Ab(this.element,this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.S(b,"click",this.wR);this.api.Ab(b,this,115130);this.sJ();this.S(a,"autonavvisibility",this.sJ);this.S(a,"mdxnowautoplaying",this.iW);this.S(a,"mdxautoplaycanceled",this.jW);g.O(this.element,"ytp-upnext-mobile",this.api.T().isMobile)},wXa=function(a,b){return b?b:0<=a.api.cq()?a.api.cq():g.aD(a.api.T().experiments,"autoplay_time")||
1E4},Z5=function(a,b){b=wXa(a,b);
var c=Math,d=c.min;var e=(0,g.R)()-a.j;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Kh()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Kh()&&a.i.start()},$5=function(a){X5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({D:"div",K:"ytp-suggestion-panel",U:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ma:"Plus de vid\u00e9os"}]});this.J=new g.W({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.I=!1;this.j=new T5(this.player);g.J(this,this.j);this.j.Ca(this.element);a.getVideoData().uc?this.i=this.j:(this.i=new Y5(a),g.aM(this.player,this.i.element,4),g.J(this,this.i));this.overlay=new g.W({D:"div",
K:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Ca(this.element);this.B=new g.hC(this);g.J(this,this.B);g.J(this,this.table);this.table.Ca(this.element);this.table.show();g.J(this,this.J);this.J.Ca(this.table.element);this.hide()},a6=function(a){var b=a.oe();
b!==a.C&&(a.C=b,a.player.Z("autonavvisibility"),a.C?(a.j!==a.i&&a.j.hide(),a.table.hide()):(a.j!==a.i&&a.j.show(),a.table.show()))},b6=function(a){X5.call(this,a,"subscribecard-endscreen");
this.i=new g.W({D:"div",K:"ytp-subscribe-card",U:[{D:"img",K:"ytp-author-image",V:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",U:[{D:"div",K:"ytp-author-name",ma:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.J(this,this.i);this.i.Ca(this.element);var b=a.getVideoData();this.subscribeButton=new g.rN("S'abonner",null,"Se d\u00e9sabonner",null,!0,!1,b.pj,b.subscribed,"trailer-endscreen",null,null,a);g.J(this,this.subscribeButton);this.subscribeButton.Ca(this.i.Da("html5-subscribe-button-container"));
this.S(a,"videodatachange",this.Ja);this.Ja();this.hide()},c6=function(a){var b=a.T(),c=g.oz||g.MD?{style:"will-change: opacity"}:void 0,d=b.i,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{D:"a",Ga:e,V:{href:"{{url}}",target:d?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},U:[{D:"div",K:"ytp-videowall-still-image",V:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",U:[{D:"span",K:"ytp-videowall-still-info-bg",U:[{D:"span",K:"ytp-videowall-still-info-content",V:c,U:[{D:"span",K:"ytp-videowall-still-info-title",ma:"{{title}}"},{D:"span",
K:"ytp-videowall-still-info-author",ma:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",ma:"En direct"},{D:"span",K:"ytp-videowall-still-info-duration",ma:"{{duration}}"}]}]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],U:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",U:[" (",{D:"span",ma:"{{playlist_length}}"},")"]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
U:[{D:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",ma:" (50+)"}]}]});this.suggestion=null;this.j=d;this.api=a;this.i=new g.hC(this);g.J(this,this.i);this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress);this.i.S(a,"videodatachange",this.onVideoDataChange);a.Ug(this.element,this);this.onVideoDataChange()},d6=function(a){X5.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.u=0;this.stills=[];this.B=this.videoData=null;this.C=this.J=!1;this.N=null;this.j=new g.hC(this);g.J(this,this.j);this.I=new g.K(function(){g.N(b.element,"ytp-show-tiles")},0);
g.J(this,this.I);var c=new g.W({D:"button",Ga:["ytp-button","ytp-endscreen-previous"],V:{"aria-label":"Pr\u00e9c\u00e9dente"},U:[g.aK()]});g.J(this,c);c.Ca(this.element);c.Pa("click",this.AR,this);this.table=new g.RJ({D:"div",K:"ytp-endscreen-content"});g.J(this,this.table);this.table.Ca(this.element);c=new g.W({D:"button",Ga:["ytp-button","ytp-endscreen-next"],V:{"aria-label":"Suivante"},U:[g.bK()]});g.J(this,c);c.Ca(this.element);c.Pa("click",this.zR,this);a.getVideoData().uc?this.i=new T5(a,!0):
this.i=new Y5(a);g.J(this,this.i);g.aM(this.player,this.i.element,4);this.hide()},e6=function(a){return g.bM(a.player)&&a.Dv()&&!a.B},f6=function(a){var b=a.oe();
b!==a.J&&(a.J=b,a.player.Z("autonavvisibility"))},g6=function(a){g.oM.call(this,a);
var b=this;this.endScreen=null;this.i=this.j=this.u=!1;this.listeners=new g.hC(this);g.J(this,this.listeners);this.env=a.T();xXa(a)?(this.u=!0,yXa(this),this.i?this.endScreen=new $5(a):this.endScreen=new d6(this.player)):this.env.je?this.endScreen=new b6(this.player):this.endScreen=new X5(this.player);g.J(this,this.endScreen);g.aM(this.player,this.endScreen.element,4);zXa(this);this.listeners.S(a,"videodatachange",this.onVideoDataChange,this);this.listeners.S(a,g.gy("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.S(a,g.hy("endscreen"),function(c){b.onCueRangeExit(c)})},yXa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Ii&&a.j===b.uc)return!1;a.i=b.Ii;a.j=b.uc;return!0},xXa=function(a){a=a.T();
return a.Pb&&!a.je},zXa=function(a){a.player.df("endscreen");
var b=a.player.getVideoData();b=new g.ey(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.ey(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Ld([b,c])};
g.UL.prototype.cq=g.da(3,function(){return this.app.cq()});
g.QX.prototype.cq=g.da(2,function(){return this.getVideoData().iO});g.w(R5,g.W);R5.prototype.select=function(){(this.G.hk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Wv||void 0)||this.G.L("web_player_endscreen_double_log_fix_killswitch"))&&this.G.vb(this.element)};
R5.prototype.onClick=function(a){g.LM(a,this.G,this.i,this.suggestion.sessionData||void 0)&&this.select()};
R5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Qt(a)||(this.select(),g.Pt(a))}};g.w(T5,g.W);g.k=T5.prototype;g.k.Oy=function(a){this.suggestion!==a&&(this.suggestion=a,Q5(this.i,a),this.playButton.Ma("url",this.suggestion.al()),W5(this))};
g.k.Kh=function(){return 0<this.j};
g.k.ju=function(){this.Kh()||(this.j=Date.now(),S5(this),vXa(this.G,V5(this)),g.O(this.G.getRootNode(),"countdown-running",this.Kh()))};
g.k.Mq=function(){this.Xm();S5(this);var a=this.i.Da("ytp-autonav-endscreen-upnext-header");a&&g.Xh(a,"\u00c0 suivre")};
g.k.Xm=function(){this.Kh()&&(this.B.stop(),this.j=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.Xm()};
g.k.rJ=function(a){g.LM(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.vb(this.playButton.element):a.currentTarget===this.i.Da("ytp-autonav-endscreen-link-container")&&(a=this.i.Da("ytp-autonav-endscreen-link-container"),this.G.Za(a,!0),this.G.vb(a)),this.select())};
g.k.uR=function(){this.G.vb(this.cancelButton.element);g.WL(this.G,!0);this.C&&this.G.Oa("innertubeCommand",this.C)};
g.k.onVideoDataChange=function(a,b){a=b.DZ;this.C=null===a||void 0===a?void 0:a.command};
g.k.qJ=function(){var a=this.G.oe();this.I&&this.rb!==a&&g.UJ(this,a);W5(this);this.G.Za(this.element,a);this.G.Za(this.cancelButton.element,a);this.G.Za(this.i.Da("ytp-autonav-endscreen-link-container"),a);this.G.Za(this.playButton.element,a)};
g.k.Af=function(a){return 400>a.width||459>a.height};g.w(X5,g.W);g.k=X5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Dv=function(){return!1};
g.k.oe=function(){return!1};
g.k.wM=function(){return!1};g.w(Y5,g.W);g.k=Y5.prototype;g.k.oz=function(){this.notification&&(this.B.stop(),this.vc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.Oy=function(a){this.suggestion=a;Q5(this,a,"hqdefault.jpg")};
g.k.sJ=function(){g.UJ(this,this.api.oe());this.api.Za(this.element,this.api.oe());this.api.Za(this.Da("ytp-upnext-autoplay-icon"),this.api.oe());this.cancelButton&&this.api.Za(this.cancelButton.element,this.api.oe())};
g.k.rW=function(){window.focus();this.oz()};
g.k.ju=function(a){var b=this;this.Kh()||(g.eu("a11y-announce","\u00c0 suivre "+this.suggestion.title),this.j=(0,g.R)(),this.i=new g.K(function(){Z5(b,a)},25),Z5(this,a),vXa(this.api,wXa(this,a)));
g.zq(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.Kh=function(){return!!this.i};
g.k.Mq=function(){this.Xm();this.j=(0,g.R)();Z5(this);g.N(this.element,"ytp-upnext-autoplay-paused")};
g.k.Xm=function(){this.Kh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.T().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.oz(),this.notification=new Notification("\u00c0 suivre",{body:this.suggestion.title,icon:this.suggestion.Qe()}),this.u=this.S(this.notification,"click",this.rW),this.B.start())}this.Xm();this.api.nextVideo(!1,a)};
g.k.wR=function(a){!g.Wh(this.cancelButton.element,g.Lt(a))&&g.LM(a,this.api)&&(this.api.oe()&&this.api.vb(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.k.vR=function(){this.api.oe()&&this.cancelButton&&this.api.vb(this.cancelButton.element);g.WL(this.api,!0)};
g.k.iW=function(a){this.api.getPresentingPlayerType();this.show();this.ju(a)};
g.k.jW=function(){this.api.getPresentingPlayerType();this.Xm();this.hide()};
g.k.va=function(){this.Xm();this.oz();g.W.prototype.va.call(this)};g.w($5,X5);g.k=$5.prototype;g.k.create=function(){X5.prototype.create.call(this);this.B.S(this.player,"appresize",this.fv);this.B.S(this.player,"onVideoAreaChange",this.fv);this.B.S(this.player,"videodatachange",this.onVideoDataChange);this.B.S(this.player,"autonavchange",this.tJ);this.B.S(this.player,"autonavcancel",this.xR);this.onVideoDataChange()};
g.k.show=function(){X5.prototype.show.call(this);(this.I||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.WL(this.player,!1);g.bM(this.player)&&this.Dv()&&!this.u?(a6(this),2===this.videoData.autonavState?this.player.T().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.ju():3===this.videoData.autonavState&&this.i.Mq()):(g.WL(this.player,!0),a6(this));this.fv()};
g.k.hide=function(){X5.prototype.hide.call(this);this.i.Mq();a6(this)};
g.k.fv=function(){var a=this.player.Ej(!0,this.player.isFullscreen());a6(this);W5(this.j);g.O(this.element,"ytp-autonav-cancelled-small-mode",this.Af(a));g.O(this.element,"ytp-autonav-cancelled-tiny-mode",this.vA(a));g.O(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.cn(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.q(b.value);b=c.next().value;c=c.next().value;g.O(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.i.Oy(a[0]);this.i!==this.j&&this.j.Oy(a[0]);for(var b=0;b<AXa.length;++b){var c=AXa[b];if(a&&a[c]){this.videos[b]=new R5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,Q5(d,c));g.J(this,this.videos[b]);this.videos[b].Ca(this.J.element)}}}this.fv()}};
g.k.tJ=function(a){1===a?(this.I=!1,this.u=this.videoData.clientPlaybackNonce,this.i.Xm(),this.rb&&this.fv()):(this.I=!0,this.oe()&&(2===a?this.i.ju():3===a&&this.i.Mq()))};
g.k.xR=function(a){a?this.tJ(1):(this.u=null,this.I=!1)};
g.k.Dv=function(){return 1!==this.videoData.autonavState};
g.k.Af=function(a){return(910>a.width||459>a.height)&&!this.vA(a)&&!(400>=a.width||360>=a.height)};
g.k.vA=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.oe=function(){return this.rb&&g.bM(this.player)&&this.Dv()&&!this.u};
var AXa=[1,3,2,4];g.w(b6,X5);b6.prototype.Ja=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.pj;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.w(c6,g.W);c6.prototype.select=function(){(this.api.hk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Wv||void 0)||this.api.L("web_player_endscreen_double_log_fix_killswitch"))&&this.api.vb(this.element)};
c6.prototype.onClick=function(a){g.LM(a,this.api,this.j,this.suggestion.sessionData||void 0)&&this.select()};
c6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Qt(a)||(this.select(),g.Pt(a))}};
c6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.T();this.j=a.C?!1:b.i};g.w(d6,X5);g.k=d6.prototype;g.k.create=function(){X5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Ll();this.j.S(this.player,"appresize",this.Ll);this.j.S(this.player,"onVideoAreaChange",this.Ll);this.j.S(this.player,"videodatachange",this.onVideoDataChange);this.j.S(this.player,"autonavchange",this.cD);this.j.S(this.player,"autonavcancel",this.yR);a=this.videoData.autonavState;a!==this.N&&this.cD(a);this.j.S(this.element,"transitionend",this.HX)};
g.k.destroy=function(){g.Nw(this.j);g.cf(this.stills);this.stills=[];X5.prototype.destroy.call(this);g.zq(this.element,"ytp-show-tiles");this.I.stop();this.N=this.videoData.autonavState};
g.k.Dv=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){X5.prototype.show.call(this);g.zq(this.element,"ytp-show-tiles");this.player.T().isMobile?g.jq(this.I):this.I.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.WL(this.player,!1);e6(this)?(f6(this),2===this.videoData.autonavState?this.player.T().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.ju():3===this.videoData.autonavState&&this.i.Mq()):(g.WL(this.player,!0),f6(this))};
g.k.hide=function(){X5.prototype.hide.call(this);this.i.Mq();f6(this)};
g.k.HX=function(a){g.Lt(a)===this.element&&this.Ll()};
g.k.Ll=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.N(this.element,"ytp-endscreen-paginate");var a=this.G.Ej(!0,this.G.isFullscreen()),b=g.RL(this.G);b&&(b=b.Xe()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,u=e<=h-2&&n>=p*m;if((p+
1)/r*d/c>c/(p/(r+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=r*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.nn(a,m,n);g.cn(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Oy(this.videoData.suggestions[0]);this.i instanceof T5&&W5(this.i);g.O(this.element,"ytp-endscreen-takeover",e6(this));f6(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.eh(p+this.u,l),0!==r){t=this.stills[c];t||(t=new c6(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-u-4,z=Math.floor(m*(f+r)/b)-x-4;g.jn(t.element,x,u);g.nn(t.element,z,y);g.cn(t.element,"transitionDelay",(h+f)/20+"s");g.O(t.element,"ytp-videowall-still-mini",1===r);g.O(t.element,"ytp-videowall-still-large",
2<r);r=t;p=this.videoData.suggestions[p];r.suggestion!==p&&(r.suggestion=p,t=r.api.T(),u=g.oq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",Q5(r,p,u),g.OD(t)&&(t=p.al(),t=g.Gj(t,g.JL("emb_rel_end")),r.Ma("url",t)),(p=(p=p.sessionData)&&p.itct)&&r.api.Zj(r.element,p));c++}g.O(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Uh(e.element),g.bf(e);this.stills.length=c}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.videoData=a,this.Ll())};
g.k.zR=function(){this.u+=this.stills.length;this.Ll()};
g.k.AR=function(){this.u-=this.stills.length;this.Ll()};
g.k.wM=function(){return this.i.Kh()};
g.k.cD=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.Xm(),this.rb&&this.Ll()):(this.C=!0,this.rb&&e6(this)&&(2===a?this.i.ju():3===a&&this.i.Mq()))};
g.k.yR=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Za(this.stills[a].element,!0);this.cD(1)}else this.B=null,this.C=!1;this.Ll()};
g.k.oe=function(){return this.rb&&e6(this)};g.w(g6,g.oM);g.k=g6.prototype;g.k.Zq=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!xXa(this.player)||b;var c=a.He||g.ZD(a.u),d=this.player.ew();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.oe=function(){return this.endScreen.oe()};
g.k.hU=function(){return this.oe()?this.endScreen.wM():!1};
g.k.va=function(){this.player.df("endscreen");g.oM.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.yM;if(b&&b.videoId){var c=this.player.sb().Jd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.LJ?a=!1:(this.player.hk(b.videoId,void 0,void 0,!0,!0,b),c&&c.EA("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.oM.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.oM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Zq()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){zXa(this);this.u&&yXa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new $5(this.player):this.endScreen=new d6(this.player),g.J(this,this.endScreen),g.aM(this.player,this.endScreen.element,4))};g.nM("endscreen",g6);})(_yt_player);
