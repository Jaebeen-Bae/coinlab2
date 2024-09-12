"use strict";(self.webpackChunkcoinlab=self.webpackChunkcoinlab||[]).push([[762],{5508:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oi});var i=r(5464);const n=i.Ay.main`
  width: 1050px;
  margin: 0 auto;
  display: grid;

  *::-webkit-scrollbar,
  *::-webkit-scrollbar-thumb {
    width: 0px;
  }

  *::-webkit-scrollbar-thumb {
  }
  *:hover::-webkit-scrollbar,
  *:hover::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 12px solid transparent;
    color: grey;
  }

  *:hover::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
`,l=i.Ay.div`
  padding: 5px;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
`;var o,a=r(5043),s=r(5475);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},c.apply(null,arguments)}function d(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,o||(o=a.createElement("path",{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"})))}const h=a.forwardRef(d);r.p;var u;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},m.apply(null,arguments)}function p(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,u||(u=a.createElement("path",{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"})))}const g=a.forwardRef(p),b=(r.p,(0,i.Ay)(h)`
  width: 1.15rem;
  height: 1.15rem;
  fill: ${e=>{let{theme:t}=e;return t.colors.icon}};
`),f=(0,i.Ay)(g)`
  width: 1.15rem;
  height: 1.15rem;
  fill: ${e=>{let{theme:t}=e;return t.colors.icon}};
`,x=i.Ay.header`
  position: sticky;
  top: 0;
  z-index: 3;
`,v=i.Ay.span`
  font-weight: 400;
  margin-right: 0.375rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
`,y=i.Ay.div`
  width: ${e=>{let{theme:t}=e;return t.sizes.lg}};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.9375rem;

  & > div {
    font-weight: 500;
  }
`,w=(0,i.Ay)(y)`
  justify-content: space-between;
`,j=i.Ay.span`
  font-weight: 500;
  font-size: 0.7rem;
  margin-left: 3px;
  color: ${e=>{let{$isPositive:t,theme:r}=e;return t?r.colors.red:r.colors.blue}};
`,$=i.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  background-color: ${e=>{let{theme:t}=e;return t.colors.alpha3}};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha2}} 0px 5px 10px 0px;
  transition: all 0.15s ease-out 0s;
`,k=(0,i.Ay)(s.N_)`
  cursor: pointer;
  display: flex;

  & > img {
    width: 100px;
    height: auto;
  }
`,P=i.Ay.img`
  width: 8.5rem;
  height: 2.8125rem;
`,A=i.Ay.div`
  display: flex;
`,S=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.0625rem;
  gap: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element5}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.border1}};
  transition: all 0.15s ease-out 0s;
`,R=(i.Ay.button`
  width: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.icon}};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,i.Ay.button`
  width: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.icon}};
  font-size: ${e=>{let{$isDarkMode:t}=e;return t?"1.1rem":"1.3rem"}};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`);var C=r(6213);var E=r(831);const N=(0,E.eU)({key:"globalCoinState",default:[]}),_=(0,E.eU)({key:"exchangeRateState",default:0});var T=r(2907);const I=(e,t)=>(0,T.useQuery)([e,t],(()=>async function(e,t){try{const r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()-1,9).getTime(),n=(await C.A.get(`https://api.investing.com/api/financialdata/${e}/historical/chart/?interval=${t}&pointscount=60`)).data.data.map((e=>({time:e[0],value:e[4]})));let l=n.filter((e=>e.time>=i));return 0===l.length&&(l=n.slice(-25)),l}catch(r){throw r}}(e,t)),{refetchInterval:36e5});r(1803),r(64);const B={method:"GET",headers:{accept:"application/json"}},D={method:"GET",headers:{Accept:"application/json"}},z=(0,E.eU)({key:"baseExchangeState",default:"upbit"}),O=((0,E.eU)({key:"modalIsOpenState",default:!0}),(0,E.eU)({key:"marketCodesState",default:[]})),L=(0,E.eU)({key:"tableSortState",default:"\uac70\ub798\uc561(\uc77c)"}),M=(0,E.eU)({key:"tableUpDownState",default:!1}),U=(0,E.eU)({key:"selectedCoinState",default:"BTC"}),H=(0,E.eU)({key:"selectedCoinInfoState",default:null}),F=(0,E.eU)({key:"searchCoinState",default:""}),K=e=>{const t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},W=e=>`${e.slice(0,4)}-${e.slice(4,6)}-${e.slice(6,8)}`,V=()=>{const e=(0,E.vc)(z),t=(0,E.vc)(U),r=(0,E.vc)(H),[i,n]=(0,a.useState)([]),[l,o]=(0,a.useState)(null),s=async()=>{const e=await(async(e,t,r)=>{try{return[...await(await fetch(`https://api.upbit.com/v1/candles/days?market=KRW-${e}&to=${t}T09:00:00Z&count=${r}&convertingPriceUnit=KRW`,D)).json()].reverse().map((e=>({time:e.candle_date_time_kst.slice(0,10),open:e.opening_price,high:e.high_price,low:e.low_price,close:e.trade_price})))}catch(i){throw i}})(t,(()=>{const e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")})(),200);n(e)},c=async()=>{const e=(e=>e.map((e=>({time:K(e[0]),open:Number(e[1]),close:Number(e[2]),high:Number(e[3]),low:Number(e[4])}))))(await(async(e,t)=>{try{return(await(await fetch(`https://api.bithumb.com/public/candlestick/${e}_KRW/${t}`,B)).json()).data}catch(r){throw r}})(t,"24h"));n(e)};return(0,a.useEffect)((()=>{if("upbit"===e){const e=sessionStorage.getItem(`upbit_${t}`);e?n(JSON.parse(e)):s()}else if("bithumb"===e){const e=sessionStorage.getItem(`bithumb_${t}`);e?n(JSON.parse(e)):c()}}),[t]),(0,a.useEffect)((()=>{sessionStorage.setItem(`${"upbit"===e?"upbit_":"bithumb_"}${t}`,JSON.stringify(i))}),[i]),(0,a.useEffect)((()=>{if(r){const{date:e,openingPrice:t,highestPrice:i,lowestPrice:n,tradePrice:l}=r;o({time:e,open:t,high:i,low:n,close:l})}}),[r]),{processedData:i,updatedCandle:l}};const J=e=>e.replace("USDT","");var Z=r(3536);const X=(e,t,r)=>100*(e/(t*r)-1),Y=(e,t)=>100*(e/t-1),Q=(e,t)=>100*(e/t-1),G=(e,t)=>(Number(e)-Number(t))/Number(t)*100,q=(e,t)=>Number(e)-Number(t),ee=(e,t)=>(Number(e)-Number(t))/Number(t)*100,te=(e,t)=>(Number(e)-Number(t))/Number(t)*100,re=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;try{return await(await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&vs_currency=usd&per_page=250&page=${e}&locale=ko`)).json()}catch(t){}},ie=async e=>{const t=K(Number(e[e.length-1][1]));e.splice(e.length-1);const r=await(async()=>{const e=[];for(let t=1;t<=3;t++){const r=await re(t);r&&e.push(...r)}return e})(),i=[];return e.map((e=>{const{coinName:n,thumb:l}=((e,t)=>{const r=e.filter((e=>e.symbol===t.toLowerCase()));if(r.length>0)return{coinName:r[0].name,thumb:r[0].image};return{coinName:t,thumb:"https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"}})(r,e[0]),{opening_price:o,closing_price:a,prev_closing_price:s,min_price:c,max_price:d,acc_trade_value_24H:h}=e[1];i.push({symbol:e[0],tradePrice:Number(a),coinName:n,thumbnail:l,openingPrice:Number(o),changeRatio:G(a,s),changePrice:q(a,s),highestRatio:ee(a,d),highestPrice:Number(d),lowestRatio:te(a,c),lowestPrice:Number(c),tradeValue_24H:Number(h),date:t})})),i},ne={method:"GET",headers:{accept:"application/json"}};function le(){const e=(0,E.vc)(z),t=(0,E.lZ)(O),{binanceTickers:r}=(()=>{const[e,t]=(0,a.useState)(null),r=(0,a.useCallback)((0,Z.throttle)((e=>{const r=e.filter((e=>e.s.endsWith("USDT")));t(r)}),500),[]);return(0,a.useEffect)((()=>{const e=new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");return e.onmessage=e=>{const t=JSON.parse(e.data);r(t)},e.onerror=e=>{},()=>{e.close(),r.cancel()}}),[r]),{binanceTickers:e}})(),[i,n]=(0,a.useState)([]),l=(0,a.useRef)(null),o=async()=>{const e=await(async()=>{try{const e=sessionStorage.getItem("upbitMarketCodes");if(e)return JSON.parse(e);const t=await fetch("https://api.upbit.com/v1/market/all?isDetails=false");if(!t.ok)throw new Error("API\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!");const r=await t.text(),i=JSON.parse(r).filter((e=>e.market.includes("KRW")));return sessionStorage.setItem("upbitMarketCodes",JSON.stringify(i)),i}catch(e){throw e}})();t(e.map((e=>e.market))),l.current=new WebSocket("wss://api.upbit.com/websocket/v1"),l.current.onopen=()=>{var t;1==(null===(t=l.current)||void 0===t?void 0:t.readyState)&&l.current.send(JSON.stringify([{ticket:"seungjun2"},{type:"ticker",codes:e.map((e=>e.market))},{format:"DEFAULT"}]))},l.current.onmessage=t=>{if(t.data instanceof Blob){const r=new FileReader;r.onload=function(){const t=r.result;try{const r=JSON.parse(t),{code:i,trade_price:l,opening_price:o,signed_change_rate:a,signed_change_price:s,trade_date:c,highest_52_week_price:d,lowest_52_week_price:h,acc_trade_price_24h:u}=r;n((t=>{const n=t.findIndex((e=>e.symbol===(null===r||void 0===r?void 0:r.code.split("-")[1])));return-1!==n?t.map(((e,t)=>t===n?{...e,tradePrice:l,openingPrice:o,changeRatio:100*a,changePrice:s,highestRatio:Y(l,d),highestPrice:d,lowestRatio:Q(l,h),lowestPrice:h,tradeValue_24H:u,date:W(c)}:e)):[...t,{symbol:i.split("-")[1],coinName:e.filter((e=>e.market===i))[0].korean_name,thumbnail:`https://static.upbit.com/logos/${i.split("-")[1]}.png`,tradePrice:l,openingPrice:o,changeRatio:100*a,changePrice:s,highestRatio:Y(l,d),highestPrice:d,lowestRatio:Q(l,h),lowestPrice:h,tradeValue_24H:u,date:W(c)}]}))}catch(i){}},r.readAsText(t.data)}}},s=async()=>{const{marketCodes:e,bithumbTicker:r}=await(async()=>{try{const e=await(await fetch("https://api.bithumb.com/public/ticker/ALL_KRW",ne)).json();return{marketCodes:Object.keys(e.data),bithumbTicker:Object.entries(e.data)}}catch(e){throw e}})(),i=await ie(r);t(e),n(i),l.current=new WebSocket("wss://pubwss.bithumb.com/pub/ws"),l.current.onopen=()=>{var t,r;1===(null===(t=l.current)||void 0===t?void 0:t.readyState)&&(null===(r=l.current)||void 0===r||r.send(JSON.stringify({type:"ticker",symbols:e.map((e=>e+"_KRW")),tickTypes:["MID","24H"]})))},l.current.onmessage=async e=>{const t=await JSON.parse(e.data);if("ticker"===t.type){const{tickType:e,symbol:r,closePrice:i,lowPrice:l,highPrice:o,prevClosePrice:a,value:s,date:c}=t.content;n((t=>{const n=t.findIndex((e=>e.symbol===r.replace("_KRW","")));return-1!==n?"MID"===e?(t[n]={...t[n],tradePrice:Number(i),changeRatio:G(i,a),changePrice:q(i,a),highestRatio:ee(i,o),highestPrice:Number(o),lowestRatio:te(i,l),lowestPrice:Number(l),date:W(c)},[...t]):(t[n]={...t[n],tradeValue_24H:Number(s)},[...t]):[...t]}))}}};return(0,a.useEffect)((()=>("upbit"===e?o():"bithumb"===e&&s(),()=>{var e,r;0!==(null===(e=l.current)||void 0===e?void 0:e.readyState)&&(null===(r=l.current)||void 0===r||r.close(),n([]),t([]))})),[e]),(0,a.useEffect)((()=>{if(r){const e=function(e,t){return e.map((e=>{const r=t.find((t=>J(t.s)===e.symbol));return r?{...e,binancePrice:Number(r.c)}:e}))}(i,r);n(e)}}),[r]),i}var oe=r(7307);const ae=e=>{switch(e){case"PT1M":return 6e4;case"PT5M":return 3e5;case"P1D":return 864e5;default:return!1}},se=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"current";return(0,T.useQuery)([e,t,r],(()=>async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"current";try{const i=await C.A.get(`https://api.investing.com/api/financialdata/${e}/historical/chart/?interval=${t}&pointscount=60`),n="current"===r?i.data.data.length-1:i.data.data.length-2,l=i.data.data[n];return{time:l[0],value:l[4]}}catch(i){throw i}}(e,t,r)),{refetchInterval:ae(t)})};var ce=r(579);const de=e=>{let{exchangeRate:t}=e;return(0,ce.jsxs)("div",{children:[(0,ce.jsx)(v,{children:"\ud658\uc728(USD/KRW)"}),null!==t&&void 0!==t?t:"\ub85c\ub529 \uc911..."]})},he=e=>{let{label:t,value:r,change:i,isCurrency:n,isPercentage:l,exchangeRate:o}=e;return(0,ce.jsxs)("div",{children:[(0,ce.jsx)(v,{children:t}),n?(e=>{if(null===e||void 0===e)return"\ub85c\ub529 \uc911...";const t=Math.floor(e/1e12),r=Math.floor(e%1e12/1e8);return t>0?`${t}\uc870 ${r}\uc5b5`:`${r}\uc5b5`})(((e,t)=>t?e*t:0)(r,o)):l?`${r}%`:(null===r||void 0===r?void 0:r.toString())||"\ub85c\ub529 \uc911...",i&&(0,ce.jsx)(j,{$isPositive:i>=0,children:(i>=0?"+":"-")+Math.abs(i).toString()+"%"})]})},ue=r.p+"static/media/Coinlab.5d74f590d766ee7b11a5.png";function me(){const{theme:e,onChangeTheme:t}=function(){const[e,t]=(0,E.L4)(oe.T),r=(0,a.useCallback)((()=>{const r="light"===e?"dark":"light";t(r),localStorage.setItem("theme",r)}),[e]);return(0,a.useLayoutEffect)((()=>{const e=localStorage.getItem("theme");e&&["dark","light"].includes(e)?t(e):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&t("dark")}),[]),{theme:e,onChangeTheme:r}}(),[r,i]=(0,E.L4)(N),n=(0,E.vc)(_),l="dark"===e;(0,a.useEffect)((()=>{(async()=>{try{const e=await async function(){try{const e=sessionStorage.getItem("globalCoinData");if(e)return JSON.parse(e);{const e=await C.A.get("https://api.coinlore.net/api/global/"),t=await e.data;return sessionStorage.setItem("globalCoinData",JSON.stringify(t)),t}}catch(e){}}();i(e)}catch(e){}})()}),[i]);const{coins_count:o,active_markets:s,total_mcap:c,mcap_change:d,total_volume:h,volume_change:u,btc_d:m}=r[0]||{};return(0,ce.jsxs)(x,{children:[(0,ce.jsx)(S,{children:(0,ce.jsxs)(y,{children:[(0,ce.jsx)(de,{exchangeRate:n}),(0,ce.jsx)(he,{label:"\uc554\ud638\ud654\ud3d0",value:o}),(0,ce.jsx)(he,{label:"\uac70\ub798\uc18c",value:s}),(0,ce.jsx)(he,{label:"\uc2dc\uac00\ucd1d\uc561",value:c,change:d,isCurrency:!0,exchangeRate:n}),(0,ce.jsx)(he,{label:"24\uc2dc\uac04 \uac70\ub798\ub7c9",value:h,change:u,isCurrency:!0,exchangeRate:n}),(0,ce.jsx)(he,{label:"BTC \uc810\uc720\uc728",value:m,isPercentage:!0})]})}),(0,ce.jsx)($,{children:(0,ce.jsxs)(w,{children:[(0,ce.jsx)(k,{to:"/",children:(0,ce.jsx)(P,{src:ue,alt:"logo"})}),(0,ce.jsxs)(A,{children:[(0,ce.jsx)("a",{href:"https://github.com/Hell-Study/Final-Project",target:"_blank",rel:"noopener noreferrer"}),(0,ce.jsx)(R,{$isDarkMode:l,onClick:t,children:l?(0,ce.jsx)(f,{}):(0,ce.jsx)(b,{})})]})]})})]})}const pe=(0,a.memo)(me),ge={"S&P 500":{id:"1175153",intervals:["PT1M","PT1H","P1D"]},NASDAQ:{id:"1175151",intervals:["PT1M","PT1H","P1D"]},KOSPI:{id:"37426",intervals:["PT5M","PT1H","P1D"]},KOSDAQ:{id:"38016",intervals:["PT1M","PT1H","P1D"]},"\uae08 \uc120\ubb3c":{id:"8830",intervals:["PT1M","PT1H","P1D"]},"\uc6d0\uc720 \uc120\ubb3c":{id:"8849",intervals:["PT1M","PT1H","P1D"]}};var be;function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},fe.apply(null,arguments)}function xe(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",fe({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,be||(be=a.createElement("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})))}const ve=a.forwardRef(xe);r.p;var ye;function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},we.apply(null,arguments)}function je(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,ye||(ye=a.createElement("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})))}const $e=a.forwardRef(je);r.p;var ke;function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Pe.apply(null,arguments)}function Ae(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,ke||(ke=a.createElement("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"})))}const Se=a.forwardRef(Ae);r.p;var Re;function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ce.apply(null,arguments)}function Ee(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",Ce({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 320 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,Re||(Re=a.createElement("path",{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"})))}const Ne=a.forwardRef(Ee),_e=(r.p,(0,i.Ay)(ve)`
  fill: ${e=>{let{theme:t}=e;return t.colors.white}};
  width: 1rem;
  height: 1rem;
`),Te=(0,i.Ay)($e)`
  fill: ${e=>{let{theme:t}=e;return t.colors.white}};
  width: 1rem;
  height: 1rem;
`,Ie=(0,i.Ay)(Se)`
  fill: ${e=>{let{theme:t}=e;return t.colors.red}};
  width: 1rem;
  height: 1rem;
`,Be=(0,i.Ay)(Ne)`
  fill: ${e=>{let{theme:t}=e;return t.colors.blue}};
  width: 1rem;
  height: 1rem;
`,De=i.Ay.div`
  position: relative;
  width: ${e=>{let{theme:t}=e;return t.sizes.lg}};
  overflow: hidden;
  scroll-behavior: smooth;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0.3rem 1rem;
  font-family: 'Pretendard', sans-serif;
`,ze=i.Ay.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(${e=>e.$visible?1:.7});
  transition:
    opacity 0.5s cubic-bezier(0.5, -0.75, 0.7, 2),
    transform 0.6s cubic-bezier(0.5, -0.75, 0.7, 2);
  opacity: ${e=>e.$visible?1:0};
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 0px;
  min-width: 0px;
  width: 40px;
  height: 40px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary1}};
  z-index: 2;
`,Oe=(0,i.Ay)(ze)`
  left: 8px;
`,Le=(0,i.Ay)(ze)`
  left: auto;
  right: 8px;
`,Me=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  font-size: 1.5rem;
  line-height: 0.5;
`,Ue=i.Ay.div`
  display: flex;
  transition: transform 0.4s cubic-bezier(0.51, 0.92, 0.24, 1.15);
  gap: 0.6rem;
  box-sizing: border-box;
`,He=i.Ay.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 140px;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1;
`,Fe=(0,i.Ay)(He)`
  opacity: ${e=>e.$visible?1:0};
  left: 0px;
  background-image: linear-gradient(
    90deg,
    ${e=>{let{theme:t}=e;return t.colors.bg_page}} 10%,
    transparent
  );
`,Ke=(0,i.Ay)(He)`
  opacity: ${e=>e.$visible?1:0};
  right: 0px;
  background-image: linear-gradient(
    270deg,
    ${e=>{let{theme:t}=e;return t.colors.bg_page}} 10%,
    transparent
  );
`,We=i.AH`
  display: flex;
  padding: 1rem 1.1rem;
  gap: 1.5rem;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.border1}};
  border-radius: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element4}};
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha1}} 0px 2px 10px 0px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  width: 218px;
  height: 93.97px;
`,Ve=i.Ay.div`
  ${We};
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.alpha1}};
  }
`,Je=i.Ay.div`
  ${We};
`,Ze=i.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
`,Xe=(0,i.Ay)(Ze)`
  flex: auto;
`,Ye=i.Ay.div`
  font-size: 0.75rem;
  color: ${e=>{let{theme:t}=e;return t.colors.heading2}};
`,Qe=(0,i.Ay)(Ye)`
  width: 100%;
  height: 36.8px;
`,Ge=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,qe=i.Ay.span`
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${e=>"increase"===e.$highlight?e.theme.colors.alpha_red:"decrease"===e.$highlight?e.theme.colors.alpha_blue:"transparent"};
`,et=i.Ay.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${e=>e.$isIncrease?e.theme.colors.red:e.$isDecrease?e.theme.colors.blue:e.theme.colors.heading1};
`,tt=i.Ay.span`
  gap: 0.1rem;
  display: flex;
`,rt=i.Ay.span`
  font-size: 0.65rem;
`,it=i.Ay.div`
  width: 100%;
  height: 44px;
`,nt=e=>{let{children:t,slidesToShow:r}=e;const[i,n]=(0,a.useState)(0),l=a.Children.count(t)-r-1;return(0,ce.jsxs)(De,{children:[(0,ce.jsx)(Oe,{onClick:()=>{i>0&&n((e=>Math.max(e-1,0)))},$visible:i>0,children:(0,ce.jsx)(Me,{children:(0,ce.jsx)(Te,{})})}),(0,ce.jsx)(Fe,{$visible:i>0}),(0,ce.jsx)(Ue,{style:{transform:`translateX(-${100/r*i}%)`},children:t}),(0,ce.jsx)(Ke,{$visible:i<l}),(0,ce.jsx)(Le,{onClick:()=>{i<l&&n((e=>Math.min(e+1,l)))},$visible:i<l,children:(0,ce.jsx)(Me,{children:(0,ce.jsx)(_e,{})})})]})};var lt=r(1547);const ot=e=>{let{pairId:t,baseData:r}=e;const i=(0,a.useRef)(null),{data:n}=I(t,"PT1H");return(0,a.useEffect)((()=>{if(!i.current||!n||0===n.length)return;const e=null===r||void 0===r?void 0:r.value,t=()=>{var e;l.applyOptions({width:null===(e=i.current)||void 0===e?void 0:e.clientWidth})},l=(0,lt.R9)(i.current,{layout:{background:{type:lt.mE.Solid,color:"transparent"}},width:72,height:44,timeScale:{visible:!1},grid:{vertLines:{visible:!1},horzLines:{visible:!1}},rightPriceScale:{visible:!1},handleScroll:{mouseWheel:!1,pressedMouseMove:!1},handleScale:{mouseWheel:!1,pinch:!1,axisPressedMouseMove:{time:!1,price:!1}},crosshair:{vertLine:{visible:!1},horzLine:{visible:!1}}}),o=l.addBaselineSeries({baseValue:{type:"price",price:e},lineWidth:1,topLineColor:"rgb( 239, 83, 80)",topFillColor1:"rgba( 239, 83, 80, 0.03)",topFillColor2:"rgba( 239, 83, 80, 0.4)",bottomLineColor:"rgb(42,127,255)",bottomFillColor1:"rgba( 42,127,255, 0.03)",bottomFillColor2:"rgba(42,127,255,0.4)",crosshairMarkerVisible:!1,priceLineVisible:!1}),a=n.map((e=>({time:e.time,value:e.value})));o.setData(a);const s=l.addLineSeries({color:"#B2B5BE",priceLineVisible:!1,lineWidth:1,lineStyle:2,crosshairMarkerVisible:!1}),c=n.map((t=>({time:t.time,value:e})));return l.timeScale().fitContent(),s.setData(c),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),l.remove()}}),[n]),(0,ce.jsx)("div",{ref:i})},at=(0,a.memo)((e=>{var t;let{pairId:r,baseData:i}=e;const n=((null===(t=Object.values(ge).find((e=>e.id===r)))||void 0===t?void 0:t.intervals)||[]).includes("PT1M")?"PT1M":"PT5M",{data:l}=se(r,n,"current"),o=(0,a.useRef)(l),[s,c]=(0,a.useState)(null);(0,a.useEffect)((()=>{l&&(o.current=l)}),[l]),(0,a.useEffect)((()=>{if("increase"===h||"decrease"===h){c(h);const e=setTimeout((()=>{c(null)}),150);return()=>clearTimeout(e)}}),[l]);const d=(e,t)=>e&&t?e.value>t.value?"increase":e.value<t.value?"decrease":"":"",h=d(l,o.current),u=d(l,i);if(!l||!i)return null;const{diff:m,percent:p}=((e,t)=>{const r=e-t,i=r/t*100;return{diff:r>=0?`+${r.toFixed(2)}`:`-${Math.abs(r).toFixed(2)}`,percent:Math.abs(i).toFixed(2)}})(l.value,i.value);return(0,ce.jsxs)(Ge,{children:[(0,ce.jsx)(qe,{$highlight:s,children:(g=parseFloat(l.value.toFixed(2)),(new Intl.NumberFormat).format(g))}),(0,ce.jsxs)(et,{$isIncrease:"increase"===u,$isDecrease:"decrease"===u,children:[(0,ce.jsxs)(tt,{children:["increase"===u?(0,ce.jsx)(Ie,{}):(0,ce.jsx)(Be,{})," ",p,"%"," "]}),(0,ce.jsx)(rt,{children:m})]})]});var g}));at.displayName="TickerWidget";const st=(0,a.memo)((e=>{let{ticker:t,id:r}=e;const{data:i}=se(r,"P1D","previous");return i?(0,ce.jsxs)(Ve,{children:[(0,ce.jsxs)(Ze,{children:[(0,ce.jsx)(Ye,{children:t}),(0,ce.jsx)(a.Suspense,{fallback:(0,ce.jsx)(Qe,{}),children:(0,ce.jsx)(at,{pairId:r,baseData:i})})]}),(0,ce.jsx)(Xe,{children:(0,ce.jsx)(a.Suspense,{fallback:(0,ce.jsx)(it,{}),children:(0,ce.jsx)(ot,{pairId:r,baseData:i})})})]}):null}));st.displayName="Card";const ct=()=>(0,ce.jsx)(a.Suspense,{fallback:(0,ce.jsx)(Je,{}),children:(0,ce.jsx)(nt,{slidesToShow:4,children:Object.entries(ge).map((e=>{let[t,{id:r}]=e;return(0,ce.jsx)(st,{ticker:t,id:r},t)}))})});const dt=r.p+"static/media/upbit.e87e65dcecbff02f024adaeff087b360.svg";const ht=r.p+"static/media/binance.1228492c6bdd19c1a66a8a45ead822f3.svg";const ut=r.p+"static/media/bithumb.ae42052b0a5078b2e9cc7a98e3db1788.svg";const mt=r.p+"static/media/btc.ff3109a84637a9f7b5b55c36ea79edb2.svg";const pt=r.p+"static/media/usdt.1ab449b81782797ef67650fba8e3ed59.svg",gt=[{key:"BINANCE",value:"BINANCE",title:"\ube44\ud2b8\ucf54\uc778 - Binance",symbol:ht},{key:"UPBIT",value:"UPBIT",title:"\ube44\ud2b8\ucf54\uc778 \uae40\uce58\ud504\ub9ac\ubbf8\uc5c4 Ubit",symbol:dt},{key:"BITHUMB",value:"BITHUMB",title:"\ube44\ud2b8\ucf54\uc778 \uae40\uce58\ud504\ub9ac\ubbf8\uc5c4 Bithumb",symbol:ut}],bt={BINANCE:"BINANCE:BTCUSDT",UPBIT:"(BINANCE:BTCUSD/BINANCE:BTCUSD*UPBIT:BTCKRW-BINANCE:BTCUSDT*FX_IDC:USDKRW)/(BINANCE:BTCUSD*FX_IDC:USDKRW)*100",BITHUMB:"(BINANCE:BTCUSD/BINANCE:BTCUSD*BITHUMB:BTCKRW-BINANCE:BTCUSDT*FX_IDC:USDKRW)/(BINANCE:BTCUSD*FX_IDC:USDKRW)*100"},ft={BINANCE:{name:"Bitcoin / TetherUS",ticker:"BTCUSDT",symbol1:mt,symbol2:pt},UPBIT:{name:"\ube44\ud2b8\ucf54\uc778 \uae40\uce58\ud504\ub9ac\ubbf8\uc5c4",ticker:"Upbit",symbol1:mt,symbol2:dt},BITHUMB:{name:"\ube44\ud2b8\ucf54\uc778 \uae40\uce58\ud504\ub9ac\ubbf8\uc5c4",ticker:"Bithumb",symbol1:mt,symbol2:ut}},xt=(0,E.eU)({key:"selectedOption",default:gt[0].key});var vt;function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},yt.apply(null,arguments)}function wt(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",yt({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,vt||(vt=a.createElement("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})))}const jt=a.forwardRef(wt);r.p;var $t;function kt(){return kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},kt.apply(null,arguments)}function Pt(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",kt({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,$t||($t=a.createElement("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"})))}const At=a.forwardRef(Pt),St=(r.p,i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 8px;
  border-radius: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element6}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.border1}};
  align-self: center;
  gap: 0.8rem;
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha2}} 0px 5px 10px 0px;
  cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
  pointer-events: ${e=>{let{$disabled:t}=e;return t?"none":"auto"}};
  user-select: none;
`),Rt=i.Ay.label`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`,Ct=i.Ay.ul`
  position: absolute;
  list-style: none;
  top: 35px;
  left: 0;
  overflow: hidden;
  max-height: ${e=>e.$show?"none":"0"};
  padding: ${e=>e.$show?"3px":0};
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element2}};
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  box-shadow: ${e=>e.$show?"0 2px 4px #0003":"none"};
  border: ${e=>{let{theme:t,$show:r}=e;return r?`1px solid ${t.colors.border1}`:"none"}};
  font-size: 0.8rem;
  z-index: 3;
`,Et=i.Ay.li`
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color 0.1s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.border1}};
  gap: 0.4rem;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element1}};
    border-radius: 0.25rem;
  }
`,Nt=(0,i.Ay)(jt)`
  fill: ${e=>{let{theme:t}=e;return t.colors.icon}};
  margin-left: auto;
  height: 0.75rem;
  width: 0.75rem;
`,_t=(0,i.Ay)(At)`
  fill: ${e=>e.$isChecked?e.theme.colors.primary2:"transparent"};
  margin-left: auto;
  width: 0.85rem;
  height: 0.85rem;
`,Tt=i.Ay.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
`,It=e=>{var t;let{optionData:r,onChange:i,disabled:n}=e;const[l,o]=(0,a.useState)(r[0].value),[s,c]=(0,a.useState)(r[0].title),{ref:d,isOpen:h,setIsOpen:u}=function(){const[e,t]=(0,a.useState)(!1),r=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=e=>{r.current&&!r.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),{ref:r,isOpen:e,setIsOpen:t}}(),m=e=>{e.stopPropagation();const t=e.currentTarget.getAttribute("value")||"",n=r.find((e=>e.title===t));n&&(o(n.value),c(n.title)),u(!1),i&&n&&i(n.value)};return(0,ce.jsxs)(St,{ref:d,onClick:()=>{n||u((e=>!e))},$disabled:n,children:[(0,ce.jsxs)(Rt,{children:[(0,ce.jsx)(Tt,{src:null===(t=r.find((e=>e.value===l)))||void 0===t?void 0:t.symbol,alt:l,loading:"lazy"}),s]}),(0,ce.jsx)(Nt,{}),(0,ce.jsx)(Ct,{$show:h,children:r.map((e=>(0,ce.jsxs)(Et,{value:e.title,onClick:m,children:[(0,ce.jsx)(Tt,{src:e.symbol,alt:e.value,loading:"lazy"}),e.title,(0,ce.jsx)(_t,{$isChecked:e.value===l})]},e.key)))})]})},Bt=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element4}};
  padding: 1rem 1.1rem;
  border-radius: 12px;
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha1}} 0px 2px 10px 0px;
`,Dt=i.Ay.div`
  display: flex;
  justify-content: space-between;
`,zt=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Ot=i.Ay.div`
  display: flex;
`,Lt=i.Ay.span`
  display: inline-flex;
  user-select: auto;
  position: relative;
`,Mt=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,Ut=i.Ay.span`
  border-radius: 50%;
  overflow: hidden;
`,Ht=(0,i.Ay)(Ut)``,Ft=(0,i.Ay)(Ut)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(9px, -9px);
`,Kt=i.Ay.img`
  position: relative;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  z-index: 1;
  background: #ccc;
`,Wt=i.Ay.span`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${e=>{let{theme:t}=e;return t.colors.heading1}};
`,Vt=i.Ay.span`
  font-size: 0.8rem;
  font-weight: 300;
  margin-left: 5px;
  color: ${e=>{let{theme:t}=e;return t.colors.heading2}};
`,Jt=i.Ay.div`
  height: 100%;
  width: 100%;
`,Zt=i.Ay.div`
  width: 100%;
`,Xt=()=>{const e=function(e){if(e in ft)return ft[e];return ft.BINANCE}((0,E.vc)(xt));return(0,ce.jsxs)(zt,{children:[(0,ce.jsx)(Lt,{children:(0,ce.jsxs)(Mt,{children:[(0,ce.jsx)(Ht,{children:(0,ce.jsx)(Kt,{src:e.symbol1,alt:"Symbol 1"})}),(0,ce.jsx)(Ft,{children:(0,ce.jsx)(Kt,{src:e.symbol2,alt:"Symbol 2"})})]})}),(0,ce.jsxs)(Ot,{children:[(0,ce.jsxs)(Wt,{children:[e.name," "]}),(0,ce.jsxs)(Vt,{children:["/",e.ticker]})]})]})};let Yt;function Qt(){const e=(0,E.vc)(oe.T),t=(0,E.vc)(xt),r=(0,a.useRef)(null),n=(0,i.DP)();return(0,a.useEffect)((()=>{return r.current=function(){document.getElementById("tradingview_0e511")&&"TradingView"in window&&new window.TradingView.widget({autosize:!0,symbol:i(t),width:"100%",height:"100%",interval:"15",timezone:"Asia/Seoul",theme:"light"===e?"light":"dark",style:"1",locale:"kr",enable_publishing:!1,hide_top_toolbar:!0,hide_legend:!0,save_image:!1,hide_volume:!0,backgroundColor:n.colors.bg_element4,container_id:"tradingview_0e511"})},Yt||(Yt=new Promise((e=>{const t=document.createElement("script");t.id="tradingview-widget-loading-script",t.src="https://s3.tradingview.com/tv.js",t.type="text/javascript",t.onload=()=>e(),document.head.appendChild(t)}))),Yt.then((()=>{r.current&&r.current()})),()=>{r.current=null};function i(e){return e in bt?bt[e]:bt.BINANCE}}),[t,e]),(0,ce.jsx)(Jt,{children:(0,ce.jsx)(Zt,{id:"tradingview_0e511"})})}const Gt=()=>{const e=(0,E.lZ)(xt);return(0,ce.jsxs)(Bt,{children:[(0,ce.jsxs)(Dt,{children:[(0,ce.jsx)(Xt,{}),(0,ce.jsx)(It,{optionData:gt,onChange:t=>{e(t)}})]}),(0,ce.jsx)(Qt,{})]})},qt=i.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element4}};
  border-radius: 12px;
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha1}} 0px 2px 10px 0px;
  padding: 1rem 1.1rem;
  gap: 0.5rem;
`;var er;function tr(){return tr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},tr.apply(null,arguments)}function rr(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",tr({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,er||(er=a.createElement("path",{d:"M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"})))}const ir=a.forwardRef(rr);r.p;var nr;function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},lr.apply(null,arguments)}function or(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",lr({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,nr||(nr=a.createElement("path",{d:"M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"})))}const ar=a.forwardRef(or),sr=(r.p,i.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element4}};
  border-radius: 12px;
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha1}} 0px 2px 10px 0px;
  padding: 1rem 1.1rem;
  gap: 0.5rem;
`,i.Ay.div`
  display: flex;
`),cr=i.Ay.img`
  width: 2.375rem;
  height: 2.375rem;
`,dr=i.Ay.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`,hr=i.Ay.div`
  display: flex;
  align-items: flex-end;
  gap: 0.1875rem;
  margin-bottom: 0.1875rem;
`,ur=i.Ay.span`
  color: ${e=>{let{theme:t}=e;return t.colors.heading1}};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,mr=i.Ay.span`
  color: ${e=>{let{theme:t}=e;return t.colors.heading2}};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,pr=i.Ay.div`
  color: ${e=>{let{$isPositive:t,theme:r}=e;return t?r.colors.red:r.colors.blue}};
  span {
    font-size: 0.9rem;
  }
`,gr=i.Ay.div`
  display: flex;
  align-items: flex-end;
  gap: 0.3125rem;
  margin-left: auto;

  color: ${e=>{let{$isPositive:t,theme:r}=e;return t?r.colors.red:r.colors.blue}};
  font-family: Inter;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,br=i.Ay.span`
  color: ${e=>{let{theme:t}=e;return t.colors.heading2}};
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,fr=(0,i.Ay)(ir)`
  margin-right: 0.1875rem;
  height: 15px;
  fill: ${e=>{let{theme:t}=e;return t.colors.red}};
`,xr=(0,i.Ay)(ar)`
  margin-right: 0.1875rem;
  height: 15px;
  fill: ${e=>{let{theme:t}=e;return t.colors.blue}};
`,vr=(0,i.Ay)(br)`
  color: inherit;
`,yr=e=>{var t;let{symbol:r,thumbnail:i,coinName:n,tradePrice:l,changeRatio:o,changePrice:a}=e;return(0,ce.jsxs)(sr,{children:[(0,ce.jsx)(cr,{alt:`${r} \uc544\uc774\ucf58`,src:i,loading:"lazy"}),(0,ce.jsxs)(dr,{children:[(0,ce.jsxs)(hr,{children:[(0,ce.jsx)(ur,{children:n}),(0,ce.jsxs)(mr,{children:["/ ",r]})]}),(0,ce.jsxs)(pr,{$isPositive:o>0,children:[l.toLocaleString("ko-KR")," ",(0,ce.jsx)("span",{children:"KRW"})]})]}),(0,ce.jsxs)(gr,{$isPositive:o>0,children:[(0,ce.jsx)(br,{children:"\uc804\uc77c\ub300\ube44"}),(0,ce.jsxs)(vr,{children:[o>0?(0,ce.jsx)(fr,{viewBox:"0 -190 320 512"}):(0,ce.jsx)(xr,{viewBox:"0 60 320 512"}),Math.abs(o).toFixed(2),"%"]}),(0,ce.jsxs)(vr,{children:[a>0?"+":"-",null===(t=Math.abs(a))||void 0===t?void 0:t.toLocaleString("ko-KR")]})]})]})},wr=(0,a.memo)(yr),jr=i.Ay.div`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.border1}};
`,$r=()=>{const{processedData:e,updatedCandle:t}=V(),r=(0,i.DP)(),n=(0,a.useRef)(null),l=(0,a.useRef)(),o=(0,a.useRef)();return(0,a.useEffect)((()=>{var t;if(e.length>0)return l.current=(0,lt.R9)(n.current,{layout:{background:{color:"transparent"},textColor:r.colors.text1},height:226,grid:{vertLines:{color:r.colors.border2},horzLines:{color:r.colors.border2}},crosshair:{mode:lt._q.Normal},leftPriceScale:{borderVisible:!1},rightPriceScale:{borderVisible:!1,textColor:r.colors.text1,scaleMargins:{top:.1,bottom:.1}},timeScale:{borderVisible:!1,fixLeftEdge:!0,fixRightEdge:!0}}),l.current.timeScale().applyOptions({barSpacing:8}),o.current=l.current.addCandlestickSeries({upColor:r.colors.red,wickUpColor:r.colors.red,downColor:r.colors.blue,wickDownColor:r.colors.blue,borderVisible:!1}),null===(t=o.current)||void 0===t||t.setData(e),()=>{var e;null===(e=l.current)||void 0===e||e.remove()}}),[e,r.colors]),(0,a.useEffect)((()=>{t&&o.current&&o.current.update(t)}),[t]),(0,ce.jsx)(jr,{ref:n})};function kr(){const e=(0,E.vc)(H);return(0,ce.jsxs)(qt,{children:[null!==e&&(0,ce.jsx)(wr,{...e}),(0,ce.jsx)($r,{})]})}const Pr=(0,a.memo)(kr),Ar=i.Ay.div`
  width: 100%;
  margin-bottom: 5rem;
`,Sr=i.Ay.div`
  padding: 0rem 0.625rem 1.375rem 0.625rem;
  background-color: ${e=>{let{theme:t}=e;return t.colors.bg_element4}};
  border-radius: 0.75rem;
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha1}} 0px 2px 10px 0px;
`;var Rr;function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Cr.apply(null,arguments)}function Er(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",Cr({xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 24 24",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,Rr||(Rr=a.createElement("path",{d:"M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31                     c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z                     M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02                     z"})))}const Nr=a.forwardRef(Er),_r=(r.p,i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1.625rem 0;
`),Tr=i.Ay.div`
  display: flex;
  align-items: center;
`,Ir=i.Ay.div`
  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  font-family: Uni Neue-Trial;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-right: 1.25rem;
`,Br=i.Ay.form`
  display: flex;
  align-items: center;
  padding: 0.5625rem 1rem;

  width: 232px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.border1}};
  background: ${e=>{let{theme:t}=e;return t.colors.bg_element4}};
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.alpha1}} 0px 2px 10px 0px;

  &:focus-within {
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
  }
`,Dr=(0,i.Ay)(Nr)`
  width: 18px;
  height: 18px;
  margin-right: 0.625rem;
  fill: ${e=>{let{theme:t}=e;return t.colors.icon}};
`,zr=i.Ay.input`
  width: 100%;
  border: none;
  outline: none;

  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  background-color: inherit;
`;var Or;function Lr(){return Lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Lr.apply(null,arguments)}function Mr(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",Lr({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-arrow-left-right",viewBox:"0 0 16 16",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,Or||(Or=a.createElement("path",{fillRule:"evenodd",d:"M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"})))}const Ur=a.forwardRef(Mr),Hr=(r.p,i.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  color: ${e=>{let{theme:t}=e;return t.colors.text1}};
  font-family: Uni Neue-Trial;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`),Fr=(0,i.Ay)(Ur)`
  width: 0.875rem;
  height: 0.875rem;
`,Kr=[{key:"upbit",value:"upbit",title:"\uc5c5\ube44\ud2b8",symbol:dt},{key:"bithumb",value:"bithumb",title:"\ube57\uc378",symbol:ut}],Wr=[{key:"binance",value:"binance",title:"\ubc14\uc774\ub0b8\uc2a4 USDT \ub9c8\ucf13",symbol:ht}],Vr=()=>{const[e,t]=(0,E.L4)(z),r=(0,E.lZ)(U);return(0,a.useEffect)((()=>{r("BTC")}),[e]),(0,ce.jsxs)(Hr,{children:["\uae30\uc900 \uac70\ub798\uc18c",(0,ce.jsx)(It,{optionData:Kr,onChange:e=>{t(e)}}),(0,ce.jsx)(Fr,{}),(0,ce.jsx)(It,{optionData:Wr,disabled:!0}),"\ud574\uc678 \uac70\ub798\uc18c"]})},Jr=(0,a.memo)(Vr),Zr=()=>{const e=(0,E.vc)(z),t=(0,E.lZ)(U),r=(0,E.vc)(O),[i,n]=(0,E.L4)(F);return(0,a.useEffect)((()=>{t("BTC")}),[e]),(0,ce.jsxs)(_r,{children:[(0,ce.jsx)(Jr,{}),(0,ce.jsxs)(Tr,{children:[(0,ce.jsxs)(Ir,{children:["\uc554\ud638\ud654\ud3d0 \ucd1d ",r.length,"\uac1c"]}),(0,ce.jsxs)(Br,{children:[(0,ce.jsx)(Dr,{}),(0,ce.jsx)(zr,{placeholder:"\uc554\ud638 \ud654\ud3d0 \uac80\uc0c9",value:i,onChange:e=>{n(e.target.value)}})]})]})]})},Xr=(0,a.memo)(Zr),Yr=i.Ay.div`
  height: 3.25rem;
  display: grid;
  padding: 0.625rem 0.9375rem;
  grid-template-columns: 0.4fr 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
`,Qr=i.Ay.button`
  display: flex;
  align-items: center;
  justify-content: ${e=>{let{$value:t}=e;return"\ucf54\uc778"!==t&&"flex-end"}};
  gap: 0.125rem;

  color: ${e=>{let{theme:t}=e;return t.colors.heading2}};
  font-family: DM Sans;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background-color: inherit;
  border: 0;

  cursor: pointer;

  &.active {
    font-weight: bold;
    color: ${e=>{let{theme:t}=e;return t.colors.heading1}};
  }
`,Gr=i.Ay.span`
  display: flex;
  flex-direction: column;
`,qr=(0,i.Ay)(ir)`
  width: 0.8125rem;
  height: 0.8125rem;
  fill: ${e=>{let{theme:t}=e;return t.colors.heading2}};
  &.active {
    fill: ${e=>{let{theme:t}=e;return t.colors.heading1}};
  }
`,ei=(0,i.Ay)(ar)`
  width: 0.8125rem;
  height: 0.8125rem;
  fill: ${e=>{let{theme:t}=e;return t.colors.heading2}};
  &.active {
    fill: ${e=>{let{theme:t}=e;return t.colors.heading1}};
  }
`,ti=e=>{let{value:t}=e;const r=t.slice(0,4),i="\uace0\uac00\ub300\ube44"===r||"\uc800\uac00\ub300\ube44"===r,[n,l]=(0,E.L4)(L),[o,a]=(0,E.L4)(M),s=i?n===r:n===t;return(0,ce.jsxs)(Qr,{$value:t,onClick:()=>{s?a(!o):l(i?r:t)},className:s?"active":"",children:[t,(0,ce.jsxs)(Gr,{children:[(0,ce.jsx)(qr,{className:s&&o?"active":"",viewBox:"0 -250 320 512"}),(0,ce.jsx)(ei,{className:s?o?"":"active":"",viewBox:"0 250 320 512"})]})]})},ri=()=>{const e=(0,E.vc)(z),t=["\ucf54\uc778","\ud604\uc7ac\uac00","\uae40\ud504","\uc804\uc77c\ub300\ube44","\uace0\uac00\ub300\ube44"+("upbit"===e?"(52\uc8fc)":"(\uc804\uc77c)"),"\uc800\uac00\ub300\ube44"+("upbit"===e?"(52\uc8fc)":"(\uc804\uc77c)"),"\uac70\ub798\uc561(\uc77c)"];return(0,ce.jsxs)(Yr,{children:[(0,ce.jsx)("div",{}),t.map((e=>(0,ce.jsx)(ti,{value:e},e)))]})},ii=(0,a.memo)(ri);var ni=r(4243);const li=(0,i.Ay)(ni.Y1)`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`,oi=i.Ay.div`
  height: 4rem;
  display: grid;
  grid-template-columns: 0.4fr 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.625rem 0.9375rem;
  border-radius: 15px;

  cursor: pointer;

  background-color: ${e=>{let{$selected:t}=e;return t?e=>{let{theme:t}=e;return t.colors.alpha2}:"inherit"}};

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.alpha2}};
  }
`,ai=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,si=i.Ay.img`
  width: 1.6875rem;
  height: 1.6875rem;
  margin-right: 0.9375rem;
`,ci=(0,i.Ay)(ai)`
  flex-direction: column;
  align-items: flex-start;
`,di=i.Ay.div`
  color: ${e=>{let{theme:t}=e;return t.colors.heading1}};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,hi=i.Ay.div`
  color: ${e=>{let{theme:t}=e;return t.colors.text3}};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,ui=(0,i.Ay)(ci)`
  align-items: flex-end;
`,mi=(0,i.Ay)(di)``,pi=(0,i.Ay)(di)`
  color: ${e=>{let{$isPositive:t}=e;return t>0?e=>{let{theme:t}=e;return t.colors.red}:e=>{let{theme:t}=e;return t.colors.blue}}};
`,gi=(0,i.Ay)(di)`
  color: ${e=>{let{$changeType:t}=e;switch(t){case"RISE":return e=>{let{theme:t}=e;return t.colors.red};case"EVEN":return e=>{let{theme:t}=e;return t.colors.heading1};case"FALL":return e=>{let{theme:t}=e;return t.colors.blue}}}};
`,bi=(0,i.Ay)(di)`
  color: ${e=>{let{theme:t}=e;return t.colors.blue}};
`,fi=(0,i.Ay)(di)`
  color: ${e=>{let{theme:t}=e;return t.colors.red}};
`,xi=e=>{let{coinName:t,thumbnail:r,symbol:i}=e;return(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(ai,{children:(0,ce.jsx)(si,{alt:`${t} \uc544\uc774\ucf58`,src:r,loading:"lazy"})}),(0,ce.jsxs)(ci,{children:[(0,ce.jsx)(di,{children:t}),(0,ce.jsx)(hi,{children:i})]})]})},vi=(0,a.memo)(xi),yi=e=>{let{tradeValue_24H:t}=e;return(0,ce.jsx)(ui,{children:(0,ce.jsxs)(hi,{children:[Math.ceil((r=t,r/1e6)).toLocaleString("ko-KR"),"\ubc31\ub9cc"]})});var r},wi=(0,a.memo)(yi),ji=e=>{let{tradePrice:t,binanceKRWPrice:r}=e;return(0,ce.jsxs)(ui,{children:[(0,ce.jsx)(mi,{children:t.toLocaleString("ko-KR")}),(0,ce.jsx)(hi,{children:r&&r.toLocaleString("ko-KR")})]})},$i=(0,a.memo)(ji),ki=e=>{let{binanceKRWPrice:t,kimpRatio:r,kimpDiff:i}=e;return(0,ce.jsx)(ui,{children:t&&r&&i&&(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsxs)(pi,{$isPositive:r,children:[r>0&&"+",r.toFixed(2),"%"]}),(0,ce.jsxs)(hi,{children:[i>0&&"+",Number(i.toFixed(2)).toLocaleString("ko-KR")]})]})})},Pi=(0,a.memo)(ki),Ai=e=>{let{changeRatio:t,changePrice:r}=e;return(0,ce.jsxs)(ui,{children:[(0,ce.jsxs)(gi,{$changeType:(i=t,i>0?"RISE":i<0?"FALL":"EVEN"),children:[t>0&&"+",t.toFixed(2),"%"]}),(0,ce.jsx)(hi,{children:r.toLocaleString("ko-KR")})]});var i},Si=(0,a.memo)(Ai),Ri=e=>{let{highestRatio:t,highestPrice:r}=e;return(0,ce.jsxs)(ui,{children:[(0,ce.jsxs)(bi,{children:[t>0&&"+",t.toFixed(2),"%"]}),(0,ce.jsx)(hi,{children:r.toLocaleString("ko-KR")})]})},Ci=(0,a.memo)(Ri),Ei=e=>{let{lowestRatio:t,lowestPrice:r}=e;return(0,ce.jsxs)(ui,{children:[(0,ce.jsxs)(fi,{children:["+",t.toFixed(2),"%"]}),(0,ce.jsx)(hi,{children:r.toLocaleString("ko-KR")})]})},Ni=(0,a.memo)(Ei),_i=e=>{let{data:t,index:r,style:i}=e;const{symbol:n,coinName:l,thumbnail:o,tradePrice:s,changeRatio:c,changePrice:d,highestRatio:h,highestPrice:u,lowestRatio:m,lowestPrice:p,tradeValue_24H:g,binancePrice:b}=t[r],[f,x]=(0,E.L4)(U),v=(0,E.lZ)(H);(0,a.useEffect)((()=>{n===f&&v(t[r])}),[f,t[r]]);const y=(0,E.vc)(_),[w,j]=(0,a.useState)(null),[$,k]=(0,a.useState)(null),[P,A]=(0,a.useState)(null);return(0,a.useEffect)((()=>{b&&(j(((e,t)=>e*t)(b,y)),k(X(s,b,y)),A(((e,t,r)=>e-t*r)(s,b,y)))}),[s,b,y]),(0,ce.jsxs)(oi,{id:n,onClick:e=>{x(e.currentTarget.id)},$selected:f===n,style:i,children:[(0,ce.jsx)(vi,{coinName:l,thumbnail:o,symbol:n}),(0,ce.jsx)($i,{tradePrice:s,binanceKRWPrice:w}),(0,ce.jsx)(Pi,{binanceKRWPrice:w,kimpRatio:$,kimpDiff:P}),(0,ce.jsx)(Si,{changeRatio:c,changePrice:d}),(0,ce.jsx)(Ci,{highestRatio:h,highestPrice:u}),(0,ce.jsx)(Ni,{lowestRatio:m,lowestPrice:p}),(0,ce.jsx)(wi,{tradeValue_24H:g})]})},Ti=(0,a.memo)(_i),Ii=()=>{const e=(e=>{const t=(0,E.vc)(L),r=(0,E.vc)(M),i=(0,E.vc)(_);return(0,a.useEffect)((()=>{switch(t){case"\ucf54\uc778":r?e.sort(((e,t)=>e.symbol>t.symbol?1:-1)):e.sort(((e,t)=>e.symbol>t.symbol?-1:1));break;case"\ud604\uc7ac\uac00":r?e.sort(((e,t)=>e.tradePrice-t.tradePrice)):e.sort(((e,t)=>t.tradePrice-e.tradePrice));break;case"\uae40\ud504":r?e.sort(((e,t)=>e.binancePrice&&t.binancePrice?X(e.tradePrice,e.binancePrice,i)-X(t.tradePrice,t.binancePrice,i):e.binancePrice&&!t.binancePrice?-1:1)):e.sort(((e,t)=>e.binancePrice&&t.binancePrice?X(t.tradePrice,t.binancePrice,i)-X(e.tradePrice,e.binancePrice,i):e.binancePrice&&!t.binancePrice?-1:1));break;case"\uc804\uc77c\ub300\ube44":r?e.sort(((e,t)=>e.changeRatio-t.changeRatio)):e.sort(((e,t)=>t.changeRatio-e.changeRatio));break;case"\uace0\uac00\ub300\ube44":r?e.sort(((e,t)=>e.highestRatio-t.highestRatio)):e.sort(((e,t)=>t.highestRatio-e.highestRatio));break;case"\uc800\uac00\ub300\ube44":r?e.sort(((e,t)=>e.lowestRatio-t.lowestRatio)):e.sort(((e,t)=>t.lowestRatio-e.lowestRatio));break;case"\uac70\ub798\uc561(\uc77c)":r?e.sort(((e,t)=>e.tradeValue_24H-t.tradeValue_24H)):e.sort(((e,t)=>t.tradeValue_24H-e.tradeValue_24H))}}),[e,t,r]),e})(le()),t=(0,E.vc)(F),[r,i]=(0,a.useState)(e);return(0,a.useEffect)((()=>{const r=e.filter((e=>e.coinName.toLowerCase().includes(t.toLowerCase())));i(r)}),[t,e]),(0,ce.jsx)(li,{height:480,itemCount:r.length,itemSize:64,width:1030,itemData:r,children:Ti})},Bi=(0,a.memo)(Ii),Di=()=>(0,ce.jsxs)(Ar,{children:[(0,ce.jsx)(Xr,{}),(0,ce.jsxs)(Sr,{children:[(0,ce.jsx)(ii,{}),(0,ce.jsx)(Bi,{})]})]}),zi=()=>{const e=(0,E.vc)(H),t=(0,E.vc)(_),r=(0,a.useMemo)((()=>(()=>{if(e){const{tradePrice:r,symbol:i,coinName:n,binancePrice:l}=e,o=`${r.toLocaleString("ko-KR")} ${i}/KRW | ${n}(${i}) \uad6d\uac00\uad8c\ub825\uae09 \ud22c\uc790\uc790\uc758 \ubaa8\uc784, \ucf54\uc778\ub7a9`;if(l){const e=X(r,l,t);return`${e>0&&"+"}${e.toFixed(2)}% ${o}`}return o}return"\ucf54\uc778\ub7a9"})()),[null===e||void 0===e?void 0:e.tradePrice]);(0,a.useEffect)((()=>{if(e){document.querySelector("title").innerText=r}}),[r])},Oi=()=>((()=>{const[e,t]=(0,E.L4)(_);t(1321)})(),zi(),(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(pe,{}),(0,ce.jsxs)(n,{children:[(0,ce.jsx)(ct,{}),(0,ce.jsxs)(l,{children:[(0,ce.jsx)(Gt,{}),(0,ce.jsx)(Pr,{})]}),(0,ce.jsx)(Di,{})]})]}))}}]);