"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[3871],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<u;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},425:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const u={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(u.tabItem,o),hidden:r},t)}},3992:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(7462),a=r(7294),u=r(6010),o=r(2957),l=r(6550),s=r(5238),i=r(3609),c=r(2560);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(n.location.search);t.set(u,e),n.replace({...n.location,search:t.toString()})}),[u,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,u=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[s,i]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,u]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:n}),h=(()=>{const e=s??d;return m({value:e,tabValues:u})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),b(e)}),[i,b,u]),tabValues:u}}var h=r(1048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,u.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function O(e){const t=(0,h.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},4693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(4137)),u=r(3992),o=r(425);const l={title:"Calculer le nombre d'heures \xe0 demander sur une machine",sidebar_position:4},s="Calculer le nombre d'heures \xe0 demander sur une machine.",i={unversionedId:"HOWTO/hours_request",id:"HOWTO/hours_request",title:"Calculer le nombre d'heures \xe0 demander sur une machine",description:"Cette page est une \xe9bauche et est susceptible de changer \xe0 l'avenir.",source:"@site/docs/HOWTO/hours_request.md",sourceDirName:"HOWTO",slug:"/HOWTO/hours_request",permalink:"/documentation/user-documentation/HOWTO/hours_request",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Calculer le nombre d'heures \xe0 demander sur une machine",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Modules d'environnement",permalink:"/documentation/user-documentation/HOWTO/module"}},c={},d=[{value:"TURPAN (CPU)",id:"turpan-cpu",level:2},{value:"Bor\xe9ale (VE)",id:"bor\xe9ale-ve",level:2},{value:"Juliet (GPU)",id:"juliet-gpu",level:2},{value:"Zen (CPU)",id:"zen-cpu",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calculer-le-nombre-dheures-\xe0-demander-sur-une-machine"},"Calculer le nombre d'heures \xe0 demander sur une machine."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Cette page est une \xe9bauche et est susceptible de changer \xe0 l'avenir.")),(0,a.kt)("h2",{id:"turpan-cpu"},"TURPAN (CPU)"),(0,a.kt)("p",null,"Le d\xe9tail du d\xe9compte est d\xe9crit dans  ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/documentation/user-documentation/arch_exp/turpan/accounting/accounting-rules"},'la section "accounting" de la documentation TURPAN')),(0,a.kt)("p",null,"Les heures \xe0 demander sont des heures CPU. Une heure de calcul CPU correspond \xe0 la r\xe9servation d'un coeur CPU unique pendant une heure. Le d\xe9compte est effectu\xe9 diff\xe9remment selon les partitions."),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{label:"Partitions small big et full",value:"notshared",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Pour une r\xe9servation sur ces partitions, les n\u0153uds sont attribu\xe9s dans leur int\xe9gralit\xe9 (i.e les 80 c\u0153urs de chaque n\u0153ud et les 2 cartes GPU sont r\xe9serv\xe9s). Tout n\u0153ud r\xe9serv\xe9 est comptabilis\xe9 de la mani\xe8re suivante :"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"(nombre de ",(0,a.kt)("strong",{parentName:"p"},"n\u0153uds r\xe9serv\xe9s"),") ","*"," (",(0,a.kt)("strong",{parentName:"p"},"80 c\u0153urs"),") ","*"," (",(0,a.kt)("strong",{parentName:"p"},"temps")," de r\xe9servation ",(0,a.kt)("strong",{parentName:"p"},"effectivement utilis\xe9"),")")),(0,a.kt)("p",null,"Pour chaque heure d'utilisation du noeud, il faut donc demander 80 heures CPU. Par exemple, pour utiliser un noeud pendant 24 heures, il faut r\xe9server 24*80 heures CPU, soit 1920 heures.")),(0,a.kt)(o.Z,{label:"Partition share et visu",value:"shared",mdxType:"TabItem"},(0,a.kt)("p",null,"Pour une r\xe9servation sur les partition shared ou visu, le n\u0153ud est partag\xe9 entre plusieurs utilisateurs. Tout n\u0153ud r\xe9serv\xe9 est comptabilis\xe9 de la mani\xe8re suivante :"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"(nombre de ",(0,a.kt)("strong",{parentName:"p"},"c\u0153urs r\xe9serv\xe9s"),") * (",(0,a.kt)("strong",{parentName:"p"},"temps")," de r\xe9servation ",(0,a.kt)("strong",{parentName:"p"},"effectivement utilis\xe9"),")")))),(0,a.kt)("h2",{id:"bor\xe9ale-ve"},"Bor\xe9ale (VE)"),(0,a.kt)("p",null," #TODO"),(0,a.kt)("h2",{id:"juliet-gpu"},"Juliet (GPU)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"Les r\xe8gles exactes de comptabilit\xe9 sur Juliet sont encore en cours de d\xe9veloppement, cette page peut \xeatre amen\xe9e \xe0 \xe9voluer.\n"))),(0,a.kt)("p",null,"Sur Juliet la comptabilisation se fait en heures GPU. Pour utiliser un GPU pendant une heure, il faut compter une heure GPU. Les noeuds sont partag\xe9s par d\xe9fauts. Pour r\xe9server un noeud complet, le nombre d'heures \xe0 demander correspond \xe0 8 fois le nombre d'heures de calcul."),(0,a.kt)("h2",{id:"zen-cpu"},"Zen (CPU)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"Les r\xe8gles exactes de comptabilit\xe9 sur Zen sont encore en cours de d\xe9veloppement, cette page peut \xeatre amen\xe9e \xe0 \xe9voluer.\n"))),(0,a.kt)("p",null,"Sur Zen la comptabilisation se fait en heures GPU. Pour r\xe9server un noeud complet, le nombre d'heures \xe0 demander correspond \xe0 64 fois le nombre d'heures de calcul."))}f.isMDXComponent=!0}}]);