"use strict";(self.webpackChunkmeso_net=self.webpackChunkmeso_net||[]).push([[959],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o="Nvidia NGC catalog",c={unversionedId:"juliet/Apptainer/Building_NGC_Containers",id:"juliet/Apptainer/Building_NGC_Containers",title:"Nvidia NGC catalog",description:"NVIDIA NGC catalog provides a set of containerized environments (e.g. software development kits) you can use in deep learning, machine learning, and high-performance computing projects. Certain containers also include pre-trained models and HPC applications, optimized for running on Nvidia GPUs.",source:"@site/docs/juliet/Apptainer/Building_NGC_Containers.md",sourceDirName:"juliet/Apptainer",slug:"/juliet/Apptainer/Building_NGC_Containers",permalink:"/documentation/user-documentation/juliet/Apptainer/Building_NGC_Containers",draft:!1,editUrl:"https://github.com/MesoNET/user-documentation/tree/main/docs/juliet/Apptainer/Building_NGC_Containers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request access",permalink:"/documentation/user-documentation/juliet/request_access"},next:{title:"Building a CUDA-aware Open MPI  library on an Infiniband cluster",permalink:"/documentation/user-documentation/juliet/MPI/MPI_CUDA_aware_Installation_Guide"}},l={},p=[{value:"Pull NGC containers with Apptainer",id:"pull-ngc-containers-with-apptainer",level:2}],u={toc:p},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nvidia-ngc-catalog"},"Nvidia NGC catalog"),(0,a.kt)("p",null,"NVIDIA NGC catalog provides a set of containerized environments (e.g. software development kits) you can use in deep learning, machine learning, and high-performance computing projects. Certain containers also include pre-trained models and HPC applications, optimized for running on Nvidia GPUs."),(0,a.kt)("h2",{id:"pull-ngc-containers-with-apptainer"},"Pull NGC containers with Apptainer"),(0,a.kt)("p",null,"Pulling containers from NGC requires authentication. Trying to pull an image without an authentification token will result in the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$> apptainer pull nvidia_hpc_benchmarks.sif docker://nvcr.io/nvidia/hpc-benchmarks:23.5\n\nFATAL:   While making image from oci registry: error fetching image to cache: failed to get checksum for docker://nvcr.io/nvidia/hpc-benchmarks:23.5: reading manifest 23.5 in nvcr.io/nvidia/hpc-benchmarks: unauthorized: authentication required\n")),(0,a.kt)("p",null,"To set up an authentification token follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an account at ",(0,a.kt)("a",{parentName:"li",href:"https://ngc.nvidia.com"},"https://ngc.nvidia.com")," or Sign In if you already have an account"),(0,a.kt)("li",{parentName:"ol"},"Once logged in, generate an API key at ",(0,a.kt)("a",{parentName:"li",href:"https://ngc.nvidia.com/setup"},"https://ngc.nvidia.com/setup")),(0,a.kt)("li",{parentName:"ol"},"Export the Apptainer environment variables. Execute the commands below after replacing ",(0,a.kt)("inlineCode",{parentName:"li"},"<API_key>")," with your generated API key. You can add these commands to your ",(0,a.kt)("inlineCode",{parentName:"li"},".bashrc"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export APPTAINER_DOCKER_USERNAME='$oauthtoken'\nexport APPTAINER_DOCKER_PASSWORD=<API_key>\n")),(0,a.kt)("p",null,"Now you are able to pull any NGC container. For example, you can build the ",(0,a.kt)("inlineCode",{parentName:"p"},"NVIDIA HPC-Benchmarks")," which includes three benchmarks (HPL-NVIDIA, HPL-AI-NVIDIA and HPCG-NVIDIA) along with some GPU-optimized communication libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"apptainer pull nvidia_hpc_benchmarks.sif docker://nvcr.io/nvidia/hpc-benchmarks:23.5\n")))}d.isMDXComponent=!0}}]);