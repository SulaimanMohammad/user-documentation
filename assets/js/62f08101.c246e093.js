"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[7278],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},425:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},3992:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(7462),a=r(7294),o=r(6010),l=r(2957),u=r(6550),c=r(5238),i=r(3609),s=r(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,i]=f({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var v=r(1048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:u,selectValue:c,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=s.indexOf(t),n=i[r].value;n!==u&&(p(t),c(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},3440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(4137)),o=r(3992),l=r(425);const u={title:"PETSc",sidebar_position:5,hide_table_of_contents:!0},c=void 0,i={unversionedId:"arch_exp/turpan/logiciels/petsc",id:"arch_exp/turpan/logiciels/petsc",title:"PETSc",description:"Comment charger PETSc avec un environnement ?",source:"@site/docs/arch_exp/turpan/logiciels/petsc.md",sourceDirName:"arch_exp/turpan/logiciels",slug:"/arch_exp/turpan/logiciels/petsc",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/petsc",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"PETSc",sidebar_position:5,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"HDF5",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/hdf5"},next:{title:"AmgX",permalink:"/documentation/user-documentation/arch_exp/turpan/logiciels/amgx"}},s={},p=[{value:"Comment charger PETSc avec un environnement ?",id:"comment-charger-petsc-avec-un-environnement-",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"comment-charger-petsc-avec-un-environnement-"},"Comment charger PETSc avec un environnement ?"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gnu",label:"GNU",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Compil\xe9 avec gcc 11.2.0, openmpi 4.1.4 et scalapack 2.2.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module load petsc/gnu/3.18.2\n"))),(0,a.kt)(l.Z,{value:"arm",label:"ARM",mdxType:"TabItem"},(0,a.kt)("p",null,"Compil\xe9 avec armclang 22.1, openmpi 4.1.4 et scalapack 2.2.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module load petsc/arm/3.18.2\n"))),(0,a.kt)(l.Z,{value:"nvidia",label:"NVIDIA",mdxType:"TabItem"},(0,a.kt)("p",null,"Compil\xe9 avec nvc 22.9-0, openmpi 4.1.4 et scalapack 2.2.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module load petsc/nvidia/3.18.2\n")))))}f.isMDXComponent=!0}}]);