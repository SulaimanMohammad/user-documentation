"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[134],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const o={title:"DDT",sidebar_position:1},i="Le d\xe9bogueur ddt sur Turpan",u={unversionedId:"arch_exp/turpan/performance/ddt",id:"arch_exp/turpan/performance/ddt",title:"DDT",description:"NOTE - L'\xe9diteur de ce d\xe9bogueur s'appelle arm, auparavant c'\xe9tait allinea",source:"@site/docs/arch_exp/turpan/performance/ddt.md",sourceDirName:"arch_exp/turpan/performance",slug:"/arch_exp/turpan/performance/ddt",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/ddt",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DDT",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Am\xe9liorer les performances",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/"},next:{title:"LWP",permalink:"/documentation/user-documentation/arch_exp/turpan/performance/lwp"}},d={},l=[{value:"D\xe9boguer son code avec ddt en mode connect",id:"d\xe9boguer-son-code-avec-ddt-en-mode-connect",level:2},{value:"Lancer ddt depuis la frontale ou une session graphique (visu)",id:"lancer-ddt-depuis-la-frontale-ou-une-session-graphique-visu",level:3},{value:"Modifier votre script batch:",id:"modifier-votre-script-batch",level:3},{value:"D\xe9marrage de ddt:",id:"d\xe9marrage-de-ddt",level:3},{value:"Configuration:",id:"configuration",level:3},{value:"Recommandation",id:"recommandation",level:3}],s={toc:l},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"le-d\xe9bogueur-ddt-sur-turpan"},"Le d\xe9bogueur ddt sur Turpan"),(0,a.kt)("p",null,"NOTE - L'\xe9diteur de ce d\xe9bogueur s'appelle arm, auparavant c'\xe9tait allinea"),(0,a.kt)("p",null,"ATTENTION - Si le code utilise MPI il faut le compiler avec une version openmpi sup\xe9rieur ou \xe9gal \xe0 4."),(0,a.kt)("p",null,"ddt permet de d\xe9boguer des codes fortran, C, C++, et ce quelque soit le compilateur utilis\xe9 (intel, gnu ou pgi) Il s'agit d'un outil graphique, vous devrez donc ouvrir une session X11 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connectez-vous avec ssh -X"),(0,a.kt)("li",{parentName:"ul"},"Si le d\xe9bit r\xe9seau est insuffisant, ssh -XC permet d'am\xe9liorer la fluidit\xe9 de l'affichage"),(0,a.kt)("li",{parentName:"ul"},"Si cela ne suffit pas, utilisez une session graphique")),(0,a.kt)("p",null,"Pour d\xe9boguer votre code, vous devez travailler en deux temps :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Compilez votre code avec le switch -g et supprimez toutes les options d'optimisation (au minimum, voir autres flags compilateurs)."),(0,a.kt)("li",{parentName:"ol"},"Lancer l'outil ddt. Nous pr\xe9conisons d'utiliser le mode 'connect', tr\xe8s simple d'utilisation, et qui permet de faire tourner le code sur les n\u0153uds tout en lan\xe7ant l'interface graphique sur la frontale :")),(0,a.kt)("h2",{id:"d\xe9boguer-son-code-avec-ddt-en-mode-connect"},"D\xe9boguer son code avec ddt en mode connect"),(0,a.kt)("h3",{id:"lancer-ddt-depuis-la-frontale-ou-une-session-graphique-visu"},"Lancer ddt depuis la frontale ou une session graphique (visu)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module load arm-forge/22.1.2 \nddt &\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capture d&#39;\xe9cran du formulaire d&#39;engistrement dans le SSO Mesonet",src:r(2211).Z,width:"961",height:"564"})),(0,a.kt)("h3",{id:"modifier-votre-script-batch"},"Modifier votre script batch:"),(0,a.kt)("p",null,"Ajouter ddt --connect avant la commande srun (ou mpiexec.hydra ou mpirun) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module load arm-forge/22.1.2\nddt --connect srun ...\n")),(0,a.kt)("h3",{id:"d\xe9marrage-de-ddt"},"D\xe9marrage de ddt:"),(0,a.kt)("p",null,"Depuis la fen\xeatre graphique ddt lanc\xe9e \xe0 l'\xe9tape 1, une boite de dialogue va s'ouvrir (attendre quelques secondes)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capture d&#39;\xe9cran du formulaire d&#39;engistrement dans le SSO Mesonet",src:r(9268).Z,width:"960",height:"566"})),(0,a.kt)("h3",{id:"configuration"},"Configuration:"),(0,a.kt)("p",null,"Une nouvelle fen\xeatre vous demandant de pr\xe9ciser les caract\xe9ristiques de votre code s'ouvre alors. Vous voudrez probablement d\xe9boguer la m\xe9moire : dans ce cas cochez la case et pressez sur le bouton indiqu\xe9 ci-dessous."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capture d&#39;\xe9cran du formulaire d&#39;engistrement dans le SSO Mesonet",src:r(179).Z,width:"958",height:"561"})),(0,a.kt)("h3",{id:"recommandation"},"Recommandation"),(0,a.kt)("p",null,'Nous vous recommandons de positionner le "Heap Debugging" sur Fast, et de pr\xe9ciser \xe0 ddt si le programme est en C, C++ ou fortran, multithread\xe9 ou pas.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capture d&#39;\xe9cran du formulaire d&#39;engistrement dans le SSO Mesonet",src:r(340).Z,width:"966",height:"610"})),(0,a.kt)("p",null,"Vous \xeates maintenant pr\xeat \xe0 d\xe9boguer !"))}p.isMDXComponent=!0},2211:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-15629f54fb27a82eaccce0679bfedba9.png"},9268:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-0f49d2c5d8cf8080f9e480525238ad5c.png"},179:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/3-ce5ce56ff3cb713644a5cfe288346b71.png"},340:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4-7349ac063de72b2b26537bb7752a9f6f.png"}}]);