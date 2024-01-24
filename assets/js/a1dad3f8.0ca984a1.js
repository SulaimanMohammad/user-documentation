"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[5108],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const i={title:"Lancer un calcul",sidebar_position:4},a=void 0,c={unversionedId:"code_form/zen/jobs",id:"code_form/zen/jobs",title:"Lancer un calcul",description:"Pour effectuer des calculs sur Zen il faut obligatoirement utiliser le gestionnaire de travaux slurm.",source:"@site/docs/code_form/zen/jobs.md",sourceDirName:"code_form/zen",slug:"/code_form/zen/jobs",permalink:"/documentation/user-documentation/code_form/zen/jobs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Lancer un calcul",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Se connecter \xe0 Zen",permalink:"/documentation/user-documentation/code_form/zen/connexion"},next:{title:"Environnement logiciel",permalink:"/documentation/user-documentation/code_form/zen/software"}},l={},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pour effectuer des calculs sur Zen il faut obligatoirement utiliser le gestionnaire de travaux ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Pour rappel, il est strictement interdit de lancer des calculs directement sur la frontale.")),(0,o.kt)("p",null,"Une introduction g\xe9n\xe9rale \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm")," est disponible ",(0,o.kt)("a",{parentName:"p",href:"HOWTO/slurm.md"},"ici"),".\nCette page se concentre sur les particularit\xe9s du cluster Zen."),(0,o.kt)("h1",{id:"lancer-un-job-sur-zen"},"Lancer un job sur Zen"),(0,o.kt)("p",null,"Zen comporte une seule partition nomm\xe9e ",(0,o.kt)("inlineCode",{parentName:"p"},"compute"),". Il faut sp\xe9cifier"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#SBATCH --partition=compute\n")),(0,o.kt)("p",null,"dans l'en-t\xeate du script de soumission."))}m.isMDXComponent=!0}}]);