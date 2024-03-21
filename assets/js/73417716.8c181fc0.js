"use strict";(self.webpackChunkmesodocs=self.webpackChunkmesodocs||[]).push([[7997],{4137:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=l.createContext({}),m=function(e){var n=l.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=m(e.components);return l.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),c=r,v=u["".concat(d,".").concat(c)]||u[c]||p[c]||i;return t?l.createElement(v,a(a({ref:n},s),{},{components:t})):l.createElement(v,a({ref:n},s))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var m=2;m<i;m++)a[m]=t[m];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var l=t(7462),r=(t(7294),t(4137));const i={title:"Modules d'environnement",sidebar_position:3},a="Gestion d'environnement d'applications et de librairies",o={unversionedId:"HOWTO/module",id:"HOWTO/module",title:"Modules d'environnement",description:"Les environnements d'applications et de librairies sont accessibles par le biais de modules (Environment Modules ou Lmod).",source:"@site/docs/HOWTO/module.md",sourceDirName:"HOWTO",slug:"/HOWTO/module",permalink:"/documentation/user-documentation/HOWTO/module",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Modules d'environnement",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Utilisation avanc\xe9e",permalink:"/documentation/user-documentation/HOWTO/slurm/advanced"},next:{title:"Calculer le nombre d'heures \xe0 demander sur une machine",permalink:"/documentation/user-documentation/HOWTO/hours_request"}},d={},m=[{value:"Afficher les modules disponibles",id:"afficher-les-modules-disponibles",level:2},{value:"Charger et d\xe9charger des modules",id:"charger-et-d\xe9charger-des-modules",level:2},{value:"Examiner l&#39;environnement",id:"examiner-lenvironnement",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Raccourcis",id:"raccourcis",level:3},{value:"ml",id:"ml",level:3}],s={toc:m},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gestion-denvironnement-dapplications-et-de-librairies"},"Gestion d'environnement d'applications et de librairies"),(0,r.kt)("p",null,"Les environnements d'applications et de librairies sont accessibles par le biais de modules (",(0,r.kt)("a",{parentName:"p",href:"https://modules.readthedocs.io/en/latest/"},"Environment Modules")," ou ",(0,r.kt)("a",{parentName:"p",href:"https://lmod.readthedocs.io/en/latest/"},"Lmod"),")."),(0,r.kt)("p",null,"L'outil ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," permet aux utilisateurs de dynamiquement changer leur environnement en modifiant des variables d'environnement.\nC'est le moyen privil\xe9gi\xe9 pour maintenir une multitude de compilateurs, de librairies et de logiciels, souvent en diff\xe9rents versions sur les clusters MesoNET."),(0,r.kt)("h2",{id:"afficher-les-modules-disponibles"},"Afficher les modules disponibles"),(0,r.kt)("p",null,"La commande"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"module avail\n")),(0,r.kt)("p",null,"permet de lister l'ensemble des modules qui peuvent \xeatre charg\xe9s directement avec ",(0,r.kt)("inlineCode",{parentName:"p"},"module load"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"module avail")," ne liste pas n\xe9cessairement ",(0,r.kt)("em",{parentName:"p"},"tous")," les modules disponible - certains ne deviennent visibles qu'apr\xe8s avoir charg\xe9 un autre module.\nC'est notamment le cas sur Turpan et sur Zen : par exemple, il faudra charger le module ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia")," afin de voir les environnements qui en d\xe9pendent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"module avail nom_app\n")),(0,r.kt)("p",null,"permet de lister les modules visibles dont le nom commence par ",(0,r.kt)("em",{parentName:"p"},"nom_app"),".\nPar exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# module avail hdf\n----------------------------------- /share/modules/libraries ------------------------------------\nhdf5/1.14.3/intel/2024/mpi  hdf5/1.14.3/intel/2024/seq\n")),(0,r.kt)("h2",{id:"charger-et-d\xe9charger-des-modules"},"Charger et d\xe9charger des modules"),(0,r.kt)("p",null,"La commande ",(0,r.kt)("inlineCode",{parentName:"p"},"module load")," charge un ou plusieurs environnement(s). Par exemple,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"module load openfoam/11\n")),(0,r.kt)("p",null,"charge l'ensemble de l'environnement n\xe9cessaire \xe0 l'ex\xe9cution du code OpenFOAM, compilateurs inclus."),(0,r.kt)("p",null,"Pour d\xe9charger le module :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"module unload openfoam/11\n")),(0,r.kt)("p",null,"Cette commande d\xe9chargera \xe9galement les d\xe9pendances devenues inutiles."),(0,r.kt)("p",null,"Enfin, pour d\xe9charger tous les modules charg\xe9s dans votre terminal ou un script utilisez: ",(0,r.kt)("inlineCode",{parentName:"p"},"module purge")),(0,r.kt)("h2",{id:"examiner-lenvironnement"},"Examiner l'environnement"),(0,r.kt)("p",null,"Avec ",(0,r.kt)("inlineCode",{parentName:"p"},"module list")," on peut voir la liste des modules charg\xe9s actuellement."),(0,r.kt)("p",null,"La commande ",(0,r.kt)("inlineCode",{parentName:"p"},"module show nom_module")," (ou ",(0,r.kt)("inlineCode",{parentName:"p"},"module display nom_module"),") permet de voir comment le chargement d'un module modifie l'environnement."),(0,r.kt)("p",null,"Par exemple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# module show hdf5/1.14.3/intel/2024/mpi\n-------------------------------------------------------------------\n/share/modules/libraries/hdf5/1.14.3/intel/2024/mpi:\n\nmodule-whatis   {Loading the hdf5 1.14.3 environment.}\nprereq          intel/2024/compilers\nprepend-path    PATH /share/libraries/hdf5/1.14.3/intel/2024/mpi/bin\nprepend-path    LD_LIBRARY_PATH /share/libraries/hdf5/1.14.3/intel/2024/mpi/lib\nprepend-path    CPATH /share/libraries/hdf5/1.14.3/intel/2024/mpi/include\nprepend-path    INCLUDE /share/libraries/hdf5/1.14.3/intel/2024/mpi/include\n-------------------------------------------------------------------\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"module help nom_module")," affiche plus d'informations sur un module (si disponible)."),(0,r.kt)("h2",{id:"astuces"},"Astuces"),(0,r.kt)("h3",{id:"raccourcis"},"Raccourcis"),(0,r.kt)("p",null,"Les sous-commandes de module peuvent \xeatre raccourcis, tant qu'il n'y a pas d'ambigu\xeft\xe9.\nPar exemple,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"module avail\nmodule avai\nmodule ava\nmodule av\n")),(0,r.kt)("p",null,"font la m\xeame chose, mais ",(0,r.kt)("inlineCode",{parentName:"p"},"module a")," est inconnu."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"module lo")," est ",(0,r.kt)("inlineCode",{parentName:"p"},"module load")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"module li")," est ",(0,r.kt)("inlineCode",{parentName:"p"},"module list"),", mais ",(0,r.kt)("inlineCode",{parentName:"p"},"module l")," n'est pas valide."),(0,r.kt)("h3",{id:"ml"},"ml"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ml")," est un raccourci astucieux pour la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"module"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sans argument ",(0,r.kt)("inlineCode",{parentName:"li"},"ml")," correspond \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"module list")),(0,r.kt)("li",{parentName:"ul"},"Suivi d'un nom de module, ",(0,r.kt)("inlineCode",{parentName:"li"},"ml")," correspond \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"module load"),", c'est-\xe0-dire ",(0,r.kt)("inlineCode",{parentName:"li"},"ml gcc")," charge le module gcc (la version d\xe9fini comme d\xe9faut)."),(0,r.kt)("li",{parentName:"ul"},"Suivi d'un nom de module pr\xe9fix\xe9 d'un ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ml")," correspond \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"module unload"),", c'est-\xe0-dire ",(0,r.kt)("inlineCode",{parentName:"li"},"ml -gcc")," d\xe9charge le module gcc."),(0,r.kt)("li",{parentName:"ul"},"Suivi d'une sous-commande valide, ",(0,r.kt)("inlineCode",{parentName:"li"},"ml"),"correspond \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"module"),", c'est-\xe0-dire ",(0,r.kt)("inlineCode",{parentName:"li"},"ml av")," est identique \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"module avail"),".")))}p.isMDXComponent=!0}}]);