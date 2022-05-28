"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[937],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9407:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],p={title:"Data visualization",keywords:["ARPES data visualization","data visualization","matplotlib","python data visualization"]},s=void 0,l={unversionedId:"visualization",id:"visualization",title:"Data visualization",description:"This example provides basic example of image plot using matplotlib. There is",source:"@site/docs/visualization.md",sourceDirName:".",slug:"/visualization",permalink:"/arpespythontools/docs/visualization",draft:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/visualization.md",tags:[],version:"current",frontMatter:{title:"Data visualization",keywords:["ARPES data visualization","data visualization","matplotlib","python data visualization"]},sidebar:"docs",previous:{title:"Importing data",permalink:"/arpespythontools/docs/data-import"},next:{title:"k-space conversion",permalink:"/arpespythontools/docs/k-conv"}},c={},u=[{value:"Crop image",id:"crop-image",level:2}],m={toc:u};function d(e){var t=e.components,p=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example provides basic example of image plot using ",(0,r.kt)("strong",{parentName:"p"},"matplotlib"),". There is\na huge list of customization possible using ",(0,r.kt)("strong",{parentName:"p"},"matplotlib"),". You can consult\n",(0,r.kt)("a",{parentName:"p",href:"https://matplotlib.org"},"matplotlib")," documentation for advanced customizations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import arpespythontools as arp\ndata, energy, angle = arp.load_ses_spectra('sample_spectra.txt')\n\n# Plot image\nimport matplotlib.pyplot as plt\n%matplotlib inline\n# Above line is specific to Jupyter Notebook\nplt.figure(figsize = (8, 6))\nplt.imshow(data, origin = 'lower', aspect = 'auto', \\\n            extent = (angle[0], angle[-1], energy[0], energy[-1]))\nplt.xlabel(\"$\\\\theta$ (deg)\")\nplt.ylabel('$E_{kin}$ (eV)')\nplt.set_cmap('magma_r')\nplt.show()\n")),(0,r.kt)("p",null,"You should see a plot like this upon successful execution:"),(0,r.kt)("picture",null,(0,r.kt)("source",{type:"image/webp",srcset:a(3041).Z}),(0,r.kt)("img",{src:a(4478).Z,alt:"plot-sample-spectra"})),(0,r.kt)("h2",{id:"crop-image"},"Crop image"),(0,r.kt)("p",null,"We can crop images (two-dimensionl data) using the ",(0,r.kt)("inlineCode",{parentName:"p"},"crop_2d")," function. Say, we\nwant to crop and focus only on the Dirac cone part. We want to crop the energy\nrange (16, 16.8) and angle range (-6, 4)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"# data_crop, x_crop, y_crop = crop_2d(data, x, y, x_min, x_max, y_min, y_max)\ndata_crop, x_crop, y_crop = arp.crop_2d(data, x, y, 16, 16.8, -6, 4)\n\nplt.figure(figsize = (8, 8))\nplt.imshow(data_crop, origin = 'lower', aspect = 'auto', \\\n            extent = (y_crop[0], y_crop[-1], x_crop[0], x_crop[-1]))\nplt.xlabel(\"$\\\\theta$ (deg)\")\nplt.ylabel('$E_{kin}$ (eV)')\nplt.set_cmap('magma_r')\nplt.show()\n")),(0,r.kt)("picture",null,(0,r.kt)("source",{type:"image/webp",srcset:a(4166).Z}),(0,r.kt)("img",{src:a(4090).Z,alt:"crop-image"})),(0,r.kt)("p",null,"That's what we wanted to achieve."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For advanced 3D visualization of Fermi map data, you may have a look at\n",(0,r.kt)("a",{parentName:"p",href:"https://pranabdas.github.io/python-tutorial/matplotlib/3d-vol"},"this example"),"\nfrom my Python tutorial."))))}d.isMDXComponent=!0},4090:function(e,t,a){t.Z=a.p+"assets/images/crop-image-e0e922335cb435d2ed981fe02e9ad9f2.png"},4166:function(e,t,a){t.Z=a.p+"assets/images/crop-image-0d38ec4badf682b001be36a9ba53e18d.webp"},4478:function(e,t,a){t.Z=a.p+"assets/images/plot-sample-spectra-30f7cf719a7e35eebdd429721273b364.png"},3041:function(e,t,a){t.Z=a.p+"assets/images/plot-sample-spectra-41f7615f6733228558a0ddbaefd37316.webp"}}]);