"use strict";(self.webpackChunkyoutube_ex=self.webpackChunkyoutube_ex||[]).push([[716],{6711:(e,s,i)=>{i.d(s,{A:()=>t});i(5043);var n=i(5475),a=i(579);const t=e=>{let{videos:s}=e;return(0,a.jsx)(a.Fragment,{children:s.map(((e,s)=>(0,a.jsxs)("div",{className:"video",children:[(0,a.jsx)("div",{className:"video__thumb play__icon",children:(0,a.jsx)(n.N_,{to:`/video/${e.id.videoId}`,style:{backgroundImage:`url(${e.snippet.thumbnails.high.url})`}})}),(0,a.jsxs)("div",{className:"video__info",children:[(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(n.N_,{to:`/video/${e.id.videoId}`,children:e.snippet.title})}),(0,a.jsx)("div",{className:"info",children:(0,a.jsx)("span",{className:"author",children:(0,a.jsx)(n.N_,{to:`/channel/${e.snippet.channelId}`,children:e.snippet.channelTitle})})})]})]},s)))})}},716:(e,s,i)=>{i.r(s),i.d(s,{default:()=>o});var n=i(5043),a=i(3216),t=i(3862),c=i(4649),l=i(5051),d=i(6711),r=i(579);const o=()=>{const{channelId:e}=(0,a.g)(),[s,i]=(0,n.useState)(),[o,h]=(0,n.useState)(!0),[p,u]=(0,n.useState)([]),[x,v]=(0,n.useState)(null);(0,n.useEffect)((()=>{(async()=>{try{const s=await(0,t.T)(`channels?part=snippet&id=${e}`);console.log(s),i(s.items[0]);const n=await(0,t.T)(`search?channelId=${e}&part=snippet%2Cid&order=date`);u(null===n||void 0===n?void 0:n.items),v(null===n||void 0===n?void 0:n.nextPageToken)}catch(s){console.error(s)}finally{h(!1)}})()}),[e]);const m=o?"isLoading":"isLoaded";return(0,r.jsx)(c.A,{title:"\uc720\ud29c\ube0c \ucc44\ub110",description:"\uc720\ud29c\ube0c \ucc44\ub110\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.",children:(0,r.jsx)("section",{id:"channel",className:m,children:s&&(0,r.jsxs)("div",{className:"channel__inner",children:[(0,r.jsx)("div",{className:"channel__header",style:{backgroundImage:`url(${s.brandingSettings.image.bannerExternalUrl})`},children:(0,r.jsx)("div",{className:"circle",children:(0,r.jsx)("img",{src:s.snippet.thumbnails.high.url,alt:s.snippet.title})})}),(0,r.jsxs)("div",{className:"channel__info",children:[(0,r.jsx)("h3",{className:"title",children:s.snippet.title}),(0,r.jsx)("p",{className:"desc",children:s.snippet.description}),(0,r.jsxs)("div",{className:"info",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)(l.om5,{}),s.statistics.subscriberCount]}),(0,r.jsxs)("span",{children:[(0,r.jsx)(l.cDx,{}),s.statistics.videoCount]}),(0,r.jsxs)("span",{children:[(0,r.jsx)(l.$fZ,{}),s.statistics.viewCount]})]})]}),(0,r.jsx)("div",{className:"channel__video video__inner search",children:(0,r.jsx)(d.A,{videos:p})}),(0,r.jsx)("div",{className:"channel__more",children:x&&(0,r.jsx)("button",{onClick:async()=>{if(x){const s=await(0,t.T)(`search?channelId=${e}&part=snippet%2Cid&order=date&pageToken=${x}`);u((e=>[...e,...s.items])),v(null===s||void 0===s?void 0:s.nextPageToken)}},children:"\ub354\ubcf4\uae30"})})]})})})}},3862:(e,s,i)=>{i.d(s,{T:()=>t});var n=i(6213);const a={params:{maxResults:"48"},headers:{"x-rapidapi-key":"9c3dd2c5a3msh6ae710c9b74c6a8p147e29jsn02870b8ebc3e","x-rapidapi-host":"youtube-v31.p.rapidapi.com"}},t=async e=>{const{data:s}=await n.A.get(`https://youtube-v31.p.rapidapi.com/${e}`,a);return console.log(s),s}}}]);
//# sourceMappingURL=716.0b08985b.chunk.js.map