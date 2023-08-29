"use strict";(self.webpackChunkmeso_net=self.webpackChunkmeso_net||[]).push([[995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=i.createContext({}),o=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=o(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=o(r),d=a,v=p["".concat(u,".").concat(d)]||p[d]||m[d]||n;return r?i.createElement(v,s(s({ref:t},c),{},{components:r})):i.createElement(v,s({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<n;o++)s[o]=r[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var i=r(7462),a=(r(7294),r(3905));const n={},s="Documentation Utilisateur pour Slurm",l={unversionedId:"Doc_Utilisateur_Slurm",id:"Doc_Utilisateur_Slurm",title:"Documentation Utilisateur pour Slurm",description:"1. Introduction \xe0 Slurm",source:"@site/docs/Doc_Utilisateur_Slurm.md",sourceDirName:".",slug:"/Doc_Utilisateur_Slurm",permalink:"/documentation/user-documentation/Doc_Utilisateur_Slurm",draft:!1,editUrl:"https://github.com/MesoNET/user-documentation/tree/main/docs/Doc_Utilisateur_Slurm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request a mesonet account",permalink:"/documentation/user-documentation/connectToMesonet"},next:{title:"MesoNET user documentation",permalink:"/documentation/user-documentation/"}},u={},o=[{value:"1. Introduction \xe0 Slurm",id:"1-introduction-\xe0-slurm",level:2},{value:"2. Soumission de travaux",id:"2-soumission-de-travaux",level:2},{value:"Exemple 1 : Soumettre un script simple",id:"exemple-1--soumettre-un-script-simple",level:3},{value:"Exemple 2 : Soumettre avec allocation de ressources",id:"exemple-2--soumettre-avec-allocation-de-ressources",level:3},{value:"3. V\xe9rification de l&#39;\xe9tat des travaux",id:"3-v\xe9rification-de-l\xe9tat-des-travaux",level:2},{value:"Exemple 3 : V\xe9rifier l&#39;\xe9tat de vos travaux",id:"exemple-3--v\xe9rifier-l\xe9tat-de-vos-travaux",level:3},{value:"Exemple 4 : V\xe9rifier les travaux de tous les utilisateurs",id:"exemple-4--v\xe9rifier-les-travaux-de-tous-les-utilisateurs",level:3},{value:"4. Gestion des travaux",id:"4-gestion-des-travaux",level:2},{value:"Exemple 5 : Annuler un travail",id:"exemple-5--annuler-un-travail",level:3},{value:"Exemple 6 : Modifier la priorit\xe9 d&#39;un travail",id:"exemple-6--modifier-la-priorit\xe9-dun-travail",level:3},{value:"5. Gestion des ressources",id:"5-gestion-des-ressources",level:2},{value:"Exemple 7 : Sp\xe9cifier les ressources avec sbatch",id:"exemple-7--sp\xe9cifier-les-ressources-avec-sbatch",level:3},{value:"Exemple 8 : Ex\xe9cuter des t\xe2ches interactives avec srun",id:"exemple-8--ex\xe9cuter-des-t\xe2ches-interactives-avec-srun",level:3},{value:"6. Param\xe8tres avanc\xe9s",id:"6-param\xe8tres-avanc\xe9s",level:2},{value:"Exemple 9 : Utiliser une r\xe9servation de n\u0153uds",id:"exemple-9--utiliser-une-r\xe9servation-de-n\u0153uds",level:3},{value:"Exemple 10 : Utiliser une partition sp\xe9cifique avec srun",id:"exemple-10--utiliser-une-partition-sp\xe9cifique-avec-srun",level:3},{value:"7. Informations sur les noeuds de calcul",id:"7-informations-sur-les-noeuds-de-calcul",level:2},{value:"8. Ressources suppl\xe9mentaires",id:"8-ressources-suppl\xe9mentaires",level:2}],c={toc:o},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-utilisateur-pour-slurm"},"Documentation Utilisateur pour Slurm"),(0,a.kt)("h2",{id:"1-introduction-\xe0-slurm"},"1. Introduction \xe0 Slurm"),(0,a.kt)("p",null,"Slurm (Simple Linux Utility for Resource Management) est un puissant syst\xe8me de gestion de ressources con\xe7u pour planifier, surveiller et ex\xe9cuter des travaux sur des grappes de calcul. Voici quelques concepts de base :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Travail (Job)")," : Une unit\xe9 de travail soumise \xe0 Slurm pour ex\xe9cution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Partition")," : Un groupe de n\u0153uds de calcul avec des propri\xe9t\xe9s similaires."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"N\u0153ud")," : Une machine individuelle au sein de la grappe."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T\xe2che (Task)")," : Une unit\xe9 d'ex\xe9cution d'un travail, qui peut \xeatre un processus ou un thread."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sbatch")," : Utilitaire pour soumettre des travaux non interactifs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Srun")," : Utilitaire pour ex\xe9cuter des t\xe2ches interactives ou non interactives.")),(0,a.kt)("h2",{id:"2-soumission-de-travaux"},"2. Soumission de travaux"),(0,a.kt)("h3",{id:"exemple-1--soumettre-un-script-simple"},"Exemple 1 : Soumettre un script simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sbatch mon_script.sh\n")),(0,a.kt)("p",null,"Cette commande soumet le script ",(0,a.kt)("inlineCode",{parentName:"p"},"mon_script.sh")," pour ex\xe9cution. Assurez-vous que ",(0,a.kt)("inlineCode",{parentName:"p"},"mon_script.sh")," contient les directives Slurm appropri\xe9es en haut du script pour sp\xe9cifier les ressources n\xe9cessaires."),(0,a.kt)("h3",{id:"exemple-2--soumettre-avec-allocation-de-ressources"},"Exemple 2 : Soumettre avec allocation de ressources"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sbatch --partition=mesonet --nodes=2 --ntasks-per-node=4 mon_script.sh\n")),(0,a.kt)("p",null,'Cette commande alloue le travail \xe0 la partition "mesonet" sur 2 n\u0153uds, avec 4 t\xe2ches par n\u0153ud. Assurez-vous d\'ajuster les valeurs selon vos besoins. '),(0,a.kt)("h2",{id:"3-v\xe9rification-de-l\xe9tat-des-travaux"},"3. V\xe9rification de l'\xe9tat des travaux"),(0,a.kt)("h3",{id:"exemple-3--v\xe9rifier-l\xe9tat-de-vos-travaux"},"Exemple 3 : V\xe9rifier l'\xe9tat de vos travaux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"squeue -u votre_nom_utilisateur\n")),(0,a.kt)("p",null,"Cette commande affiche la liste des travaux en cours pour l'utilisateur sp\xe9cifi\xe9. Vous pouvez voir des informations telles que l'ID du travail, l'\xe9tat, le n\u0153ud, le temps, etc. "),(0,a.kt)("h3",{id:"exemple-4--v\xe9rifier-les-travaux-de-tous-les-utilisateurs"},"Exemple 4 : V\xe9rifier les travaux de tous les utilisateurs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"squeue\n")),(0,a.kt)("p",null,"Cette commande affiche la liste de tous les travaux en cours. Utilisez des options suppl\xe9mentaires pour filtrer les r\xe9sultats, par exemple, ",(0,a.kt)("inlineCode",{parentName:"p"},"squeue --partition=mesonet"),' pour afficher les travaux dans la partition "mesonet".'),(0,a.kt)("h2",{id:"4-gestion-des-travaux"},"4. Gestion des travaux"),(0,a.kt)("h3",{id:"exemple-5--annuler-un-travail"},"Exemple 5 : Annuler un travail"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scancel ID_du_travail\n")),(0,a.kt)("p",null,"Cette commande annule le travail avec l'ID sp\xe9cifi\xe9. Vous pouvez obtenir l'ID du travail \xe0 partir de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"squeue"),"."),(0,a.kt)("h3",{id:"exemple-6--modifier-la-priorit\xe9-dun-travail"},"Exemple 6 : Modifier la priorit\xe9 d'un travail"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scontrol update JobID ID_du_travail Priority=50\n")),(0,a.kt)("p",null,"Cette commande modifie la priorit\xe9 du travail avec l'ID sp\xe9cifi\xe9. La priorit\xe9 affecte l'ordre d'ex\xe9cution des travaux."),(0,a.kt)("h2",{id:"5-gestion-des-ressources"},"5. Gestion des ressources"),(0,a.kt)("h3",{id:"exemple-7--sp\xe9cifier-les-ressources-avec-sbatch"},"Exemple 7 : Sp\xe9cifier les ressources avec sbatch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sbatch --partition=compute --nodes=1 --cpus-per-task=8 --mem=16G mon_script.sh\n")),(0,a.kt)("p",null,"Cette commande sp\xe9cifie les ressources pour le travail, y compris la partition, le nombre de n\u0153uds, le nombre de t\xe2ches par n\u0153ud et le nombre de CPU par t\xe2che."),(0,a.kt)("h3",{id:"exemple-8--ex\xe9cuter-des-t\xe2ches-interactives-avec-srun"},"Exemple 8 : Ex\xe9cuter des t\xe2ches interactives avec srun"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"srun --pty -c 4 /bin/bash\n")),(0,a.kt)("p",null,"Cette commande lance un shell interactif avec 4 CPU allou\xe9s. Utile pour les t\xe2ches interactives ou les tests."),(0,a.kt)("h2",{id:"6-param\xe8tres-avanc\xe9s"},"6. Param\xe8tres avanc\xe9s"),(0,a.kt)("h3",{id:"exemple-9--utiliser-une-r\xe9servation-de-n\u0153uds"},"Exemple 9 : Utiliser une r\xe9servation de n\u0153uds"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"srun --reservation=ma_reservation --nodes=2 mon_script.sh\n")),(0,a.kt)("p",null,"Cette commande ex\xe9cute le travail sur une r\xe9servation de 2 n\u0153uds sp\xe9cifi\xe9e avec l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--reservation"),"."),(0,a.kt)("h3",{id:"exemple-10--utiliser-une-partition-sp\xe9cifique-avec-srun"},"Exemple 10 : Utiliser une partition sp\xe9cifique avec srun"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"srun --partition=visu --nodes=1 mon_script.sh\n")),(0,a.kt)("p",null,'Cette commande ex\xe9cute le travail sur la partition "visu" avec 1 n\u0153ud. '),(0,a.kt)("h2",{id:"7-informations-sur-les-noeuds-de-calcul"},"7. Informations sur les noeuds de calcul"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sinfo\n")),(0,a.kt)("p",null,"Cette commande affiche des informations d\xe9taill\xe9es sur les n\u0153uds disponibles, telles que leur nom, partition, \xe9tat, nombre de t\xe2ches, m\xe9moire, ressources, charge CPU, temps d'activit\xe9 et utilisation GPU "),(0,a.kt)("h2",{id:"8-ressources-suppl\xe9mentaires"},"8. Ressources suppl\xe9mentaires"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/documentation.html"},"https://slurm.schedmd.com/documentation.html")))}m.isMDXComponent=!0}}]);