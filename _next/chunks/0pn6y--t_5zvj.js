(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,387652,e=>{"use strict";var t=e.i(271645),s=e.i(749652);let i={some:0,all:1};e.s(["useInView",0,function(e,{root:l,margin:r,amount:o,once:a=!1,initial:n=!1}={}){let[c,d]=(0,t.useState)(n);return(0,t.useEffect)(()=>{if(!e.current||a&&c)return;let t={root:l&&l.current||void 0,margin:r,amount:o};return function(e,t,{root:l,margin:r,amount:o="some"}={}){let a=(0,s.resolveElements)(e),n=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let s=n.get(e.target);if(!!s!==e.isIntersecting)if(e.isIntersecting){let s=t(e.target,e);"function"==typeof s?n.set(e.target,s):c.unobserve(e.target)}else"function"==typeof s&&(s(e),n.delete(e.target))})},{root:l,rootMargin:r,threshold:"number"==typeof o?o:i[o]});return a.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(d(!0),a?void 0:()=>d(!1)),t)},[l,e,r,a,o]),c}],387652)},394117,e=>{"use strict";var t=e.i(843476),s=e.i(271645),i=e.i(846932),l=e.i(387652);e.i(4799);var r=e.i(309762),o=e.i(372914),a=e.i(298915),n=e.i(66347),c=e.i(650701),d=e.i(96701),u=e.i(107233),m=e.i(37727);function p({children:e}){let r=(0,s.useRef)(null),o=(0,l.useInView)(r,{once:!0,margin:"-100px"});return(0,t.jsxs)("div",{ref:r,className:"relative",children:[(0,t.jsx)(i.motion.div,{className:"absolute top-5 left-0 right-0 h-px hidden md:block",style:{backgroundColor:"#C9A35A",transformOrigin:"left"},initial:{scaleX:0},animate:o?{scaleX:1}:{scaleX:0},transition:{duration:1.2,ease:[.22,1,.36,1],delay:.3}}),e]})}e.s(["default",0,function({section:e}){let s=e.content,{isEditor:l,sectionId:x}=(0,n.useSectionContext)(),g=(0,d.useEditorStore)(e=>e.addArrayItem),f=(0,d.useEditorStore)(e=>e.removeArrayItem);return(0,t.jsxs)(r.SectionWrapper,{section:e,className:"py-28 md:py-36 relative",children:[(0,t.jsx)("div",{className:"absolute inset-0",style:{backgroundColor:"#0B1B2B"}}),(0,t.jsxs)("div",{className:"relative z-10 mx-auto max-w-6xl px-6 sm:px-10",children:[(0,t.jsx)(a.AnimateOnScroll,{children:(0,t.jsxs)("div",{className:"text-center mb-20",children:[(0,t.jsx)(o.EditableText,{as:"h2",value:s.title,fieldKey:"title",className:"text-3xl md:text-5xl leading-tight tracking-tight",placeholder:"Nuestra Solucion"}),s.subtitle&&(0,t.jsx)(o.EditableText,{as:"p",value:s.subtitle,fieldKey:"subtitle",className:"mt-6 text-lg max-w-2xl mx-auto"})]})}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-px mb-20",style:{backgroundColor:"rgba(201, 163, 90, 0.15)"},children:(s.features??[]).map((e,i)=>(0,t.jsx)(a.AnimateOnScroll,{delay:.1*i,children:(0,t.jsxs)("div",{className:"group relative p-8 md:p-10 transition-colors duration-slow lp-solution-card",style:{backgroundColor:"#0B1B2B"},children:[l&&(s.features?.length??0)>1&&(0,t.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),f(x,"features",i)},className:"absolute -right-2 -top-2 z-10 hidden rounded-full bg-red-500 p-1 text-white shadow-md group-hover:flex hover:bg-red-600",children:(0,t.jsx)(m.X,{className:"size-3"})}),(0,t.jsx)("div",{className:"mb-5 flex size-10 items-center justify-center",style:{backgroundColor:"rgba(201, 163, 90, 0.12)"},children:(0,t.jsx)(c.IconRenderer,{name:e.icon,className:"size-5 lp-solution-icon"})}),(0,t.jsx)("div",{className:"h-px w-12 mb-6",style:{backgroundColor:"#C9A35A"}}),(0,t.jsx)("h3",{className:"text-lg font-semibold mb-3 lp-solution-title",style:{fontFamily:"'Playfair Display', serif"},children:e.title}),(0,t.jsx)("p",{className:"text-sm leading-relaxed lp-solution-desc",children:e.description})]})},i))}),l&&(0,t.jsxs)("button",{type:"button",onClick:e=>{e.stopPropagation(),g(x,"features",{icon:"sparkles",title:"Nueva area de practica",description:"Descripcion aqui."})},className:"mb-16 mx-auto flex items-center gap-1.5 rounded border border-dashed border-gray-600 px-3 py-2 text-xs font-medium text-gray-400 hover:border-primary hover:text-primary",children:[(0,t.jsx)(u.Plus,{className:"size-3.5"}),"Agregar area"]}),(s.steps??[]).length>0&&(0,t.jsx)(a.AnimateOnScroll,{delay:.2,children:(0,t.jsx)(p,{children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8",children:(s.steps??[]).map((e,s)=>(0,t.jsxs)(i.motion.div,{className:"relative text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.5+.2*s},children:[(0,t.jsx)("div",{className:"mx-auto mb-5 flex size-10 items-center justify-center text-sm font-medium",style:{color:"#C9A35A",fontFamily:"'Georgia', serif",border:"1px solid rgba(201, 163, 90, 0.4)",backgroundColor:"#0B1B2B",position:"relative",zIndex:1},children:e.number}),(0,t.jsx)("h4",{className:"font-semibold mb-2",style:{color:"#F3EEE2",fontFamily:"'Playfair Display', serif"},children:e.title}),(0,t.jsx)("p",{className:"text-sm max-w-[220px] mx-auto",style:{color:"rgba(243, 238, 226, 0.7)"},children:e.description})]},s))})})})]}),(0,t.jsx)("style",{children:`
        h2 {
          font-family: 'Playfair Display', serif;
          color: #F3EEE2;
        }
        p {
          font-family: system-ui, -apple-system, sans-serif;
        }
        .lp-solution-icon {
          color: #C9A35A;
        }
        .lp-solution-title {
          color: #F3EEE2;
        }
        .lp-solution-desc {
          color: rgba(243, 238, 226, 0.75);
        }
        .lp-solution-card:hover {
          background-color: #0D2235 !important;
        }
        .lp-solution-card:hover .lp-solution-title {
          color: #F3EEE2;
        }
        .lp-solution-card:hover .lp-solution-desc {
          color: rgba(243, 238, 226, 0.8);
        }
        .lp-solution-card:hover .lp-solution-icon {
          color: #F3EEE2;
        }
      `})]})}])}]);