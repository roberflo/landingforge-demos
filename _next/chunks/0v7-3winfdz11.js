(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,387652,e=>{"use strict";var t=e.i(271645),a=e.i(749652);let i={some:0,all:1};e.s(["useInView",0,function(e,{root:s,margin:l,amount:n,once:r=!1,initial:o=!1}={}){let[c,d]=(0,t.useState)(o);return(0,t.useEffect)(()=>{if(!e.current||r&&c)return;let t={root:s&&s.current||void 0,margin:l,amount:n};return function(e,t,{root:s,margin:l,amount:n="some"}={}){let r=(0,a.resolveElements)(e),o=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let a=o.get(e.target);if(!!a!==e.isIntersecting)if(e.isIntersecting){let a=t(e.target,e);"function"==typeof a?o.set(e.target,a):c.unobserve(e.target)}else"function"==typeof a&&(a(e),o.delete(e.target))})},{root:s,rootMargin:l,threshold:"number"==typeof n?n:i[n]});return r.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(d(!0),r?void 0:()=>d(!1)),t)},[s,e,l,r,n]),c}],387652)},18680,e=>{"use strict";var t=e.i(843476),a=e.i(271645),i=e.i(846932),s=e.i(387652),l=e.i(283086);e.i(4799);var n=e.i(309762),r=e.i(372914),o=e.i(298915),c=e.i(66347);let d=[{size:4,left:"12%",delay:0,duration:7},{size:6,left:"28%",delay:1.2,duration:9},{size:5,left:"45%",delay:.5,duration:8},{size:8,left:"65%",delay:2,duration:10},{size:4,left:"78%",delay:.8,duration:7.5},{size:6,left:"90%",delay:1.5,duration:8.5}];e.s(["default",0,function({section:e}){let u=e.content,{isEditor:m}=(0,c.useSectionContext)(),x=(0,a.useRef)(null),f=(0,s.useInView)(x,{once:!0});return(0,t.jsxs)(n.SectionWrapper,{section:e,className:"relative min-h-screen overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0",style:{backgroundImage:"url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop)",backgroundSize:"cover",backgroundPosition:"center"}}),(0,t.jsx)("div",{className:"absolute inset-0",style:{backgroundColor:"#2A1620e6"}}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(ellipse at 50% 40%, rgba(61, 34, 48, 0.7) 0%, transparent 70%)"}}),(0,t.jsx)(i.motion.div,{initial:{opacity:0},animate:f?{opacity:.06}:{},transition:{duration:2},className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(ellipse at 50% 70%, #C9A15A 0%, transparent 50%)"}}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 opacity-[0.03]",style:{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",backgroundSize:"128px 128px",mixBlendMode:"overlay"}}),d.map((e,a)=>(0,t.jsx)("div",{className:"pointer-events-none absolute rounded-full",style:{width:e.size,height:e.size,left:e.left,bottom:"-10px",backgroundColor:"#C9A15A",opacity:.35,animation:`bll-float-up ${e.duration}s ease-in-out ${e.delay}s infinite`}},a)),(0,t.jsxs)("div",{ref:x,className:"relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-28 text-center sm:px-10",children:[u.badgeText&&(0,t.jsx)(o.AnimateOnScroll,{children:(0,t.jsxs)("div",{className:"mb-10 inline-flex items-center gap-2.5 rounded-full px-5 py-2",style:{border:"1px solid rgba(201, 161, 90, 0.4)",backgroundColor:"rgba(201, 161, 90, 0.1)"},children:[(0,t.jsx)(l.Sparkles,{className:"size-3.5",style:{color:"#C9A15A"}}),(0,t.jsx)("span",{className:"text-xs font-medium uppercase",style:{color:"#C9A15A",letterSpacing:"0.2em",fontFamily:"'Inter', system-ui, sans-serif"},children:(0,t.jsx)(r.EditableText,{as:"span",value:u.badgeText,fieldKey:"badgeText"})})]})}),(0,t.jsx)(o.AnimateOnScroll,{delay:.1,children:(0,t.jsx)(r.EditableText,{as:"h1",value:u.headline,fieldKey:"headline",className:"mx-auto mb-8 max-w-4xl text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",placeholder:"Tu Belleza, Elevada"})}),(0,t.jsx)(o.AnimateOnScroll,{delay:.15,children:(0,t.jsx)("div",{className:"mx-auto mb-8 h-px",style:{width:"60px",background:"linear-gradient(90deg, transparent, #C9A15A, transparent)"}})}),(0,t.jsx)(o.AnimateOnScroll,{delay:.2,children:(0,t.jsx)(r.EditableText,{as:"p",value:u.subheadline,fieldKey:"subheadline",className:"mx-auto mb-12 max-w-2xl text-lg leading-relaxed md:text-xl",placeholder:"Descubre una experiencia de belleza que transforma desde adentro"})}),(0,t.jsx)(o.AnimateOnScroll,{delay:.3,children:(0,t.jsx)(i.motion.a,{href:m?void 0:u.ctaHref,onClick:m?e=>e.preventDefault():void 0,whileHover:m?void 0:{scale:1.03},whileTap:m?void 0:{scale:.97},className:"bll-cta-shimmer relative inline-flex items-center gap-2 overflow-hidden rounded-full px-10 py-4 text-sm font-semibold uppercase transition-shadow duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",style:{background:"linear-gradient(135deg, #C9A15A, #D4B06E)",letterSpacing:"0.15em",color:"#2A1620",boxShadow:"0 0 40px -8px rgba(201, 161, 90, 0.35)",fontFamily:"'Inter', system-ui, sans-serif"},children:(0,t.jsx)("span",{className:"relative z-10",children:(0,t.jsx)(r.EditableText,{as:"span",value:u.ctaText,fieldKey:"ctaText",placeholder:"Reservar Ahora"})})})})]}),(0,t.jsx)("div",{className:"absolute bottom-8 left-1/2 z-10 -translate-x-1/2",children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-1",children:[(0,t.jsx)("div",{className:"h-8 w-px",style:{background:"linear-gradient(180deg, transparent, rgba(201, 161, 90, 0.25))"}}),(0,t.jsx)("div",{className:"size-1.5 rounded-full",style:{backgroundColor:"rgba(201, 161, 90, 0.25)",animation:"bll-scroll-bounce 2s ease-in-out infinite"}})]})}),(0,t.jsx)("style",{children:`
        h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(2.75rem, 7vw, 5rem);
          color: #F4DAD6;
          font-weight: 400;
          text-wrap: balance;
        }
        p {
          color: rgba(232, 197, 193, 0.85);
          font-family: 'Inter', system-ui, sans-serif;
        }
        .bll-cta-shimmer {
          position: relative;
        }
        .bll-cta-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: bll-gold-shimmer 3s ease-in-out infinite;
        }
        @keyframes bll-gold-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes bll-float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.35; }
          90% { opacity: 0.35; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes bll-scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(6px); opacity: 0.8; }
        }
      `})]})}])}]);