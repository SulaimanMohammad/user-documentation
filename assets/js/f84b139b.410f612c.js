"use strict";(self.webpackChunkmeso_net=self.webpackChunkmeso_net||[]).push([[537],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>U,default:()=>A,frontMatter:()=>D,metadata:()=>P,toc:()=>T});var a=t(7462),r=t(7294),i=t(3905),o=t(6010),l=t(2466),u=t(6550),s=t(1980),c=t(7392),p=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,u.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,s]=b({queryString:t,groupId:a}),[c,d]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,p.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=u??c;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),d(e)}),[s,d,i]),tabValues:i}}var g=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==i&&(p(n),u(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function _(e){const n=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function C(e){const n=(0,g.Z)();return r.createElement(_,(0,a.Z)({key:String(n)},e))}const w={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(w.tabItem,a),hidden:t},n)}const D={},U="Building a CUDA-aware Open MPI  library on an Infiniband cluster",P={unversionedId:"juliet/MPI/MPI_CUDA_aware_Installation_Guide",id:"juliet/MPI/MPI_CUDA_aware_Installation_Guide",title:"Building a CUDA-aware Open MPI  library on an Infiniband cluster",description:"Historically, on Infiniband clusters, Open MPI was built with the openib BTL support, enabled when Open MPI is configured --with-verbs. The openib BTL became deprecated in favor of the Unified Communication X (UCX) PML. Hence, the current documentation shows some guidelines on how to install a CUDA-Aware Open MPI library with UCX. Note that all the examples used in this document were run on juliet supercomputer.",source:"@site/docs/juliet/MPI/MPI_CUDA_aware_Installation_Guide.md",sourceDirName:"juliet/MPI",slug:"/juliet/MPI/MPI_CUDA_aware_Installation_Guide",permalink:"/documentation/user-documentation/juliet/MPI/MPI_CUDA_aware_Installation_Guide",draft:!1,editUrl:"https://github.com/MesoNET/user-documentation/docs/juliet/MPI/MPI_CUDA_aware_Installation_Guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request a mesonet account",permalink:"/documentation/user-documentation/connectToMesonet"}},x={},T=[{value:"Setting up and building UCX with GPU support",id:"setting-up-and-building-ucx-with-gpu-support",level:2},{value:"GPU communication performance",id:"gpu-communication-performance",level:3},{value:"Building UCX",id:"building-ucx",level:3},{value:"Setting up and building OpenMPI",id:"setting-up-and-building-openmpi",level:2},{value:"OpenMPI performance tests",id:"openmpi-performance-tests",level:2},{value:"Building OSU Micro-Benchmarks",id:"building-osu-micro-benchmarks",level:3},{value:"Running OSU Micro-Benchmarks",id:"running-osu-micro-benchmarks",level:3},{value:"Manual tunning parameters",id:"manual-tunning-parameters",level:4}],M={toc:T},N="wrapper";function A(e){let{components:n,...t}=e;return(0,i.kt)(N,(0,a.Z)({},M,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-a-cuda-aware-open-mpi--library-on-an-infiniband-cluster"},"Building a CUDA-aware Open MPI  library on an Infiniband cluster"),(0,i.kt)("p",null,"Historically, on Infiniband clusters, Open MPI was built with the openib BTL support, enabled when Open MPI is configured --with-verbs. The openib BTL became deprecated in favor of the Unified Communication X (UCX) PML. Hence, the current documentation shows some guidelines on how to install a CUDA-Aware Open MPI library with UCX. Note that all the examples used in this document were run on juliet supercomputer. "),(0,i.kt)("p",null,"The building process includes two main steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Building UCX with GPU support (+ some GPU specific module kernels)"),(0,i.kt)("li",{parentName:"ol"},"Building OpenMPI with previously configured UCX")),(0,i.kt)("h2",{id:"setting-up-and-building-ucx-with-gpu-support"},"Setting up and building UCX with GPU support"),(0,i.kt)("h3",{id:"gpu-communication-performance"},"GPU communication performance"),(0,i.kt)("p",null,"To obtain high communication performance on a Infiniband cluster, we first need to enable the GPUDirect RDMA technolog, before building UCX. Prior to CUDA 11.4, GPUDirect RDMA was enabled by installing the\n",(0,i.kt)("inlineCode",{parentName:"p"},"nv_peer_memory")," kernel developped by Mellanox. Starting with CUDA 11.4 there is a new kernel module called ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-peermem")," implemented by Nvidia. To note th\\t ",(0,i.kt)("inlineCode",{parentName:"p"},"nv_peer_memory")," became deprecated and should be replaced by ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-peermem"),". Please visit the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/gpudirect-rdma/"},"Nvidia website")," for more details."),(0,i.kt)("p",null,"Additionally, to optimize the intra-node GPU communication latency, UCX should be build with the ",(0,i.kt)("inlineCode",{parentName:"p"},"gdrcopy")," support. The last one is a library based on the GPUDirect RDMA features. A data transfer performed with ",(0,i.kt)("inlineCode",{parentName:"p"},"gdrcopy")," is driven by the CPU, and is meant to reduce the communication latency. This is library is composed of a kernel module called ",(0,i.kt)("inlineCode",{parentName:"p"},"gdrdrv")," and a API called ",(0,i.kt)("inlineCode",{parentName:"p"},"gdrapi"),"."),(0,i.kt)("p",null,"Hence, before building UCX please make sure that both ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-peermem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gdrdrv")," kernel modules are installed and loaded. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ lsmod | grep gdrdrv\n$ lsmod | grep nvidia_peermem\n")),(0,i.kt)("p",null,"If the kernel modules are not loaded please refer to the following ressources for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/gdrcopy"},"installing gdrcopy")," and/or for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/gpudirect-rdma/"},"loading nvidia-peermem"),"."),(0,i.kt)("h3",{id:"building-ucx"},"Building UCX"),(0,i.kt)("p",null,'Building UCX is typically a combination of running "configure" and "make". For a GPU support we need to specify the cuda and gdrcopy install directories via the ',(0,i.kt)("inlineCode",{parentName:"p"},"--with-cuda")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-gdrcopy"),' options of "configure". Below are the steps required to build and install UCX on juliet supercomputer. The latest release UCX tarball can be downloaded from the ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/openucx/ucx/releases"},"UCX repository"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./configure --prefix=<prefix_path> --with-cuda=/apps/spack/spack-softwares/linux-rocky9-zen3/gcc-13.1.0/cuda-12.1.1-hhxtp4y7d55t27jbbxwpjxc4t24tgi3h --with-gdrcopy=/apps/manual_install/gdrcopy\n$ make -j8 install\n")),(0,i.kt)("p",null,"Once the installtion completed, the information about the current UCX installation instance can be retrived via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ucx_info")," command. For example, it is possible to check the UCX GPU support via the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ ucx_info -d | grep cuda\n")),(0,i.kt)("p",null,"To obtain more information it is also possible to change the UCX log level: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ env UCX_LOG_LEVEL=debug ucx_info -d | grep -i cuda\n")),(0,i.kt)("h2",{id:"setting-up-and-building-openmpi"},"Setting up and building OpenMPI"),(0,i.kt)("p",null," Below are the commands for building a CUDA-Aware OpenMPI library with the Slurm support on juliet supercomputer. We need to specify the path to the UCX instalation directory via the ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-ucx")," option and also the path to cuda via ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-cuda"),". Additionaly, we need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-pmi")," option for supporting slurm (i.e. running MPI application with srun). We also disable the btl openib via ",(0,i.kt)("inlineCode",{parentName:"p"},"--without-verbs")," option. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./configure --prefix=<prefix_path> --with-ucx=<path_to_ucx_install> --with-cuda=/apps/spack/spack-softwares/linux-rocky9-zen3/gcc-13.1.0/cuda-12.1.1-hhxtp4y7d55t27jbbxwpjxc4t24tgi3h --with-pmi --without-verbs\nmake -j8 install\n# Check that OpenMPI has been built with CUDA-aware support:\n$ ompi_info --parsable --all | grep mpi_built_with_cuda_support:value\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Recent OpenMPI versions contain a BTL component called ",(0,i.kt)("inlineCode",{parentName:"p"},"uct"),", which might cause data corruption when building MPI with UCX. If needed, you can disable ",(0,i.kt)("inlineCode",{parentName:"p"},"uct")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-mca-no-build=btl-uct")," configuration option. More information about building MPI with UCX can be found ",(0,i.kt)("a",{parentName:"p",href:"https://openucx.readthedocs.io/en/master/running.html"},"here"),".")),(0,i.kt)("h2",{id:"openmpi-performance-tests"},"OpenMPI performance tests"),(0,i.kt)("p",null,"For testing the performance of a CUDA-Aware OpenMPI installation instance, one can use the well-known OSU benchmarks. "),(0,i.kt)("h3",{id:"building-osu-micro-benchmarks"},"Building OSU Micro-Benchmarks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ wget https://mvapich.cse.ohio-state.edu/download/mvapich/osu-micro-benchmarks-7.2.tar.gz\n$ tar xfp osu-micro-benchmarks-7.2.tar.gz\n$ cd osu-micro-benchmarks-7.2\n$ ./configure CC=mpicc CXX=mpicxx --prefix=<prefix> --enable-cuda\n$ make install\n")),(0,i.kt)("h3",{id:"running-osu-micro-benchmarks"},"Running OSU Micro-Benchmarks"),(0,i.kt)("p",null,"By default, UCX tries to use all available devices on the machine, and selects best ones based on performance characteristics. One can also use manual tunning in order to force the use of certain devices or technologies."),(0,i.kt)("p",null,"For example, we can enable or disable the use of GPUDirect RDMA optimization (available through the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-peermem")," kernel) and enable or disable the use of gdrcopy (i.e. use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"gdrdrv")," kernel). Below are a few examples."),(0,i.kt)(C,{mdxType:"Tabs"},(0,i.kt)(I,{value:"rdma1_gdr1",label:"GPUDirect RDMA and gdrcopy",default:!0,mdxType:"TabItem"},"Both GPUDirect RDMA and gdrcopy enabled (Device to Device)",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=1 -x UCX_TLS=all -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D\n# OSU MPI-CUDA Latency Test v7.2\n# Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)\n# Size          Latency (us)\n# Datatype: MPI_CHAR.\n1                       4.06\n2                       4.26\n4                       4.33\n8                       4.22\n16                      4.23\n32                      4.37\n64                      4.45\n128                     4.59\n256                     4.54\n512                     4.88\n1024                    4.89\n2048                    4.93\n4096                    5.57\n8192                    6.20\n16384                   9.02\n32768                  12.15\n65536                  18.42\n131072                 31.48\n262144                 56.07\n524288                 43.67\n1048576                74.08\n2097152               145.56\n4194304               281.57\n```\n"))),(0,i.kt)(I,{value:"rdma1_gdr0",label:"GPUDirect RDMA only",mdxType:"TabItem"},"GPUDirect RDMA enabled and gdrcopy disabled (Device to Device)",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=1 -x UCX_TLS=^gdr_copy -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D\n# OSU MPI-CUDA Latency Test v7.2\n# Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)\n# Size          Latency (us)\n# Datatype: MPI_CHAR.\n1                      94.54\n2                     129.68\n4                     220.87\n8                     181.06\n16                    178.25\n32                    142.65\n64                     40.02\n128                    45.58\n256                    42.28\n512                    39.08\n1024                   41.72\n2048                   47.23\n4096                   47.46\n8192                   49.56\n16384                  48.52\n32768                 176.01\n65536                 284.82\n131072                238.62\n262144                343.78\n524288                 38.15\n1048576                70.01\n2097152               133.14\n4194304               264.97\n"))),(0,i.kt)(I,{value:"rdma0_gdr1",label:"gdrcopy only",mdxType:"TabItem"},"GPUDirect RDMA disabled and gdrcopy enabled (Device to Device)",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=0 -x UCX_TLS=all -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D\n# OSU MPI-CUDA Latency Test v7.2\n# Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)\n# Size          Latency (us)\n# Datatype: MPI_CHAR.\n1                       4.32\n2                       5.75\n4                       5.71\n8                       5.64\n16                      4.86\n32                      5.23\n64                      6.57\n128                     5.68\n256                     7.22\n512                     8.51\n1024                   10.48\n2048                   14.39\n4096                   25.10\n8192                   45.75\n16384                  97.11\n32768                 752.08\n65536                 994.36\n131072               1725.03\n262144               3549.30\n524288                109.51\n1048576               166.81\n2097152               268.49\n4194304               443.22\n"))),(0,i.kt)(I,{value:"rdma0_gdr0",label:"no GDR optimization",mdxType:"TabItem"},"Both GPUDirect RDMA and gdrcopy disabled (Device to Device)",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=0 -x UCX_TLS=^gdr_copy -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D\n# OSU MPI-CUDA Latency Test v7.2\n# Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)\n# Size          Latency (us)\n# Datatype: MPI_CHAR.\n1                      24.92\n2                      25.12\n4                      51.83\n8                     122.11\n16                    230.41\n32                    167.57\n64                    217.15\n128                   305.34\n256                   315.44\n512                   245.43\n1024                  252.01\n2048                  294.08\n4096                  138.61\n8192                  220.35\n16384                 672.99\n32768                1189.99\n65536                1197.14\n131072               1714.11\n262144                928.49\n524288                101.82\n1048576               161.01\n2097152               251.90\n4194304               432.20\n")))),(0,i.kt)("h4",{id:"manual-tunning-parameters"},"Manual tunning parameters"),(0,i.kt)("p",null,"For all the runs above we need to specify the location of the gdrcopy library via ",(0,i.kt)("inlineCode",{parentName:"p"},"-x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib"),". Without this option, the MPI library would be unabled to use gdrcopy, resulting in a performance degradation. We also select the same Infiniband MCA for all our runs via ",(0,i.kt)("inlineCode",{parentName:"p"},"x UCX_NET_DEVICES=mlx5_0:1 "),". This was done for reproductibility issues. To learn more about possible UCX options and manual tunning please visit the ",(0,i.kt)("a",{parentName:"p",href:"https://openucx.readthedocs.io/en/master/faq.html?highlight=uct#working-with-gpu"},"OpenUCX website"),"."))}A.isMDXComponent=!0}}]);