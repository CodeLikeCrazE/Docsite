"use strict";(self.webpackChunkavdan_os_docs=self.webpackChunkavdan_os_docs||[]).push([[325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8684:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{src:t}=e;return r.useEffect((()=>{document.querySelectorAll("video").forEach((e=>{e.play()}))}),[]),r.createElement(r.Fragment,null,r.createElement("video",{style:{width:"100%"},loop:!0,muted:!0},r.createElement("source",{src:t,type:"video/webm"}),"Showcase video could not be loaded."))}},5840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),i=n(8684);const o={title:"Website Design Ideas",description:"A couple of design ideas for the AvdanOS website."},l=void 0,s={unversionedId:"contributing/design/design_guidelines/website",id:"contributing/design/design_guidelines/website",title:"Website Design Ideas",description:"A couple of design ideas for the AvdanOS website.",source:"@site/docs/avdanos/contributing/design/design_guidelines/website.mdx",sourceDirName:"contributing/design/design_guidelines",slug:"/contributing/design/design_guidelines/website",permalink:"/docs/contributing/design/design_guidelines/website",draft:!1,tags:[],version:"current",frontMatter:{title:"Website Design Ideas",description:"A couple of design ideas for the AvdanOS website."},sidebar:"tutorialSidebar",previous:{title:"KDE Human Interface Guidelines (HIG)",permalink:"/docs/contributing/design/design_guidelines/kde-guidelines"},next:{title:"The AvdanOS GUI",permalink:"/docs/category/the-avdanos-gui"}},d={},c=[{value:"Website Ideas",id:"website-ideas",level:2},{value:"Parallax Effect",id:"parallax-effect",level:3},{value:"Day &amp; Night Mode Cycle (Auto Dark Mode)",id:"day--night-mode-cycle-auto-dark-mode",level:3},{value:"Shader implementation",id:"shader-implementation",level:3},{value:"User agent targeted marketing",id:"user-agent-targeted-marketing",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"website-ideas"},"Website Ideas"),(0,a.kt)("p",null,"Here we have some different website ideas that are cool but yet to be implemented;"),(0,a.kt)("h3",{id:"parallax-effect"},"Parallax Effect"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("u",null,"Parallax scrolling"))," is a computer graphics technique used by web designers to create a faux-3D effect. As users scroll down as webpage, different layers of content or backgrounds move at different speeds, and this creates an optical illusion."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Using Apple as an example, we can see that they use the Parallax Effect heavily on their product pages;"),(0,a.kt)(i.Z,{src:"/vid/macbook-air.webm",mdxType:"AutoPlay"}),(0,a.kt)("p",null,"Here's a page with some of the best parallax scrolling pages: ",(0,a.kt)("a",{parentName:"p",href:"https://www.impactplus.com/blog/what-is-parallax-scrolling"},"https://www.impactplus.com/blog/what-is-parallax-scrolling")),(0,a.kt)("p",null,"A tutorial from Fireship:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/UgIwjLg4ONk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"day--night-mode-cycle-auto-dark-mode"},"Day & Night Mode Cycle (Auto Dark Mode)"),(0,a.kt)("p",null,"Just like in the concept, the AvdanOS website could have an auto-dark mode. We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Date()")," API in JavaScript to get the current time of day and change the site to either light or dark mode."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shader-implementation"},"Shader implementation"),(0,a.kt)("p",null,"Interactive visualization of noises, data, etc."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cineshader.com/view/WslGWl"},"https://cineshader.com/view/WslGWl")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"user-agent-targeted-marketing"},"User agent targeted marketing"),(0,a.kt)("p",null,"We can check the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"user agent")," to show a targeted message. User Agent detection should also be used for optimizing the download workflow. Using an API, we can understand the operating system the user is currently running on their computer (and maybe use a poll) and use it to target key distinguishing factors between the user's OS and AvdanOS."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Written by TechStudent11 (TechStudent10#0821)")))}p.isMDXComponent=!0}}]);