import{G as j,u as v,r,a as g,b as E,j as e,T as m,n as L,B as C,o as M}from"./index-CpL11QD8.js";function N(s){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.24283 6.85419L11.4895 1.30843C11.8062 1.11848 12.2019 1.11855 12.5185 1.30862L21.7573 6.85416C21.9079 6.94453 22 7.10726 22 7.28286V19.9998C22 20.5521 21.5523 20.9998 21 20.9998H3C2.44772 20.9998 2 20.5521 2 19.9998V7.28298C2 7.10732 2.09218 6.94454 2.24283 6.85419ZM4 8.13244V18.9998H20V8.13197L12.0037 3.33221L4 8.13244ZM12.0597 13.6981L17.3556 9.23515L18.6444 10.7645L12.074 16.3016L5.36401 10.7715L6.63599 9.22813L12.0597 13.6981Z"}}]})(s)}const f=()=>{const{message:s,error:n,loading:x}=v(a=>a.update),[i,o]=r.useState(""),[l,d]=r.useState(""),[u,h]=r.useState(""),t=g(),c=E(),p=a=>{a.preventDefault(),t(M(i,l,u)),o(""),d(""),h("")};return r.useEffect(()=>{s&&(c.success(s),t({type:"CLEAR_MESSAGE"})),n&&(c.error(n),t({type:"CLEAR_ERRORS"}))},[s,n,t,c]),e.jsxs("div",{className:"contact",children:[e.jsx("div",{className:"contactRightBar"}),e.jsxs("div",{className:"contactBoxFloat",children:[e.jsx(m,{variant:"h1",children:"Contact Me"}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"icons",children:[e.jsx(L,{}),e.jsx(N,{style:{position:"relative",bottom:"1rem"}})]}),e.jsxs("div",{className:"iconsData",children:[e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h4",{children:"Phone"}),e.jsx("p",{children:"8709547746"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Email"}),e.jsx("p",{children:"ravikumarjha059@gmail.com"})]})]})]})]}),e.jsx("div",{className:"contactBox",children:e.jsxs("form",{className:"contactForm",onSubmit:p,children:[e.jsx(m,{variant:"h4",children:"Or Write Me"}),e.jsx("input",{type:"text",placeholder:"Name",value:i,onChange:a=>o(a.target.value),required:!0}),e.jsx("input",{type:"email",placeholder:"Email",value:l,onChange:a=>d(a.target.value),required:!0}),e.jsx("textarea",{cols:"30",rows:"10",placeholder:"Enter Message",value:u,onChange:a=>h(a.target.value),required:!0}),e.jsx(C,{variant:"contained",type:"submit",disabled:x,children:"SEND MESSAGE"})]})})]})};export{f as default};
