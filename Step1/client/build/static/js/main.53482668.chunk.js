(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),o=(a(23),a(31)),l=a(39),i=a(38),j=a(37),d=a(32);var u=a(4);var h=function(e){let{onLoginSuccessful:t}=e;const[a,r]=Object(n.useState)(""),[s,c]=Object(n.useState)(""),[h,b]=Object(n.useState)(!1);return Object(u.jsx)(o.a,{children:Object(u.jsxs)(l.a,{className:"mt-5",children:[Object(u.jsx)(l.a.Header,{as:"h1",children:"Login"}),Object(u.jsx)(l.a.Body,{children:Object(u.jsxs)(i.a,{className:"w-100",onSubmit:async e=>{e.preventDefault(),b(!1);const n=await async function(e){let{email:t,password:a}=e;return await fetch("/api/auth/login",{method:"POST",body:JSON.stringify({email:t,password:a}),headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("HTTP status "+e.status);return e.json()})).catch((e=>{console.log(e)}))}({email:a,password:s});if(n){const{name:e,token:a}=n;localStorage.setItem("name",e),localStorage.setItem("token",a),t()}else b(!0)},children:[Object(u.jsxs)(i.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(i.a.Label,{children:"Email address"}),Object(u.jsx)(i.a.Control,{type:"email",placeholder:"Enter email",onChange:e=>r(e.target.value),value:a}),Object(u.jsx)(i.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(u.jsxs)(i.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(i.a.Label,{children:"Password"}),Object(u.jsx)(i.a.Control,{type:"password",placeholder:"Password",onChange:e=>c(e.target.value),value:s})]}),h&&Object(u.jsx)(j.a,{variant:"danger",children:"The email address and password you entered don't match any account. Please try again."}),Object(u.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})})},b=a(33),m=a(34),O=a(35),x=a(36);var p=function(e){let{onLogout:t}=e;const[a,r]=Object(n.useState)(!1),[s,c]=Object(n.useState)(!1),[h,p]=Object(n.useState)(""),[g,f]=Object(n.useState)([]);return Object(u.jsxs)(o.a,{fluid:!0,children:[Object(u.jsx)(b.a,{className:"mt-2 mb-2 justify-content-end",noGutters:!0,children:Object(u.jsx)(d.a,{variant:"outline-danger",onClick:t,children:"Log out"})}),Object(u.jsx)(b.a,{noGutters:!0,children:Object(u.jsx)("h1",{children:"Welcome!"})}),Object(u.jsx)(b.a,{className:"mt-2",noGutters:!0,children:Object(u.jsx)("h6",{children:"Enter one or multiple keywords below to search for artworks in the Art Institute of Chicago."})}),Object(u.jsx)(b.a,{noGutters:!0,children:Object(u.jsx)(i.a,{className:"w-100 mb-5",onSubmit:async e=>{e.preventDefault(),r(!0);const t=await async function(e){let{keyword:t}=e;return await fetch("/api/homepage/getArtworks/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("HTTP status "+e.status);return e.json()})).catch((e=>{console.log(e)}))}({keyword:h});f(t),c(!t||!t.length),r(!1)},children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(i.a.Control,{type:"text",placeholder:"e.g. Monet, O'Keeffe, Ancient Greek...",onChange:e=>{p(e.target.value)},value:h}),Object(u.jsx)(m.a.Prepend,{children:Object(u.jsx)(d.a,{variant:"outline-primary",disabled:!h,type:"submit",children:"Search artworks"})})]})})}),a&&Object(u.jsx)(b.a,{className:"justify-content-center mb-5",children:Object(u.jsx)(O.a,{animation:"border",variant:"primary"})}),s&&!a?Object(u.jsx)(j.a,{variant:"info",children:"No results were found for the entered keyword/s."}):Object(u.jsx)(x.a,{children:g.map(((e,t)=>{const{id:a,title:n,image_url:r,artist_display:s,date_display:c,medium_display:o,place_of_origin:i}=e;return Object(u.jsxs)(l.a,{children:[Object(u.jsx)("a",{href:r,target:"_blank",rel:"noreferrer","aria-current":"true",children:Object(u.jsx)(l.a.Img,{variant:"top",src:r})}),Object(u.jsxs)(l.a.Body,{children:[Object(u.jsx)(l.a.Title,{children:n}),Object(u.jsxs)(l.a.Text,{className:"text-muted",style:{whiteSpace:"pre-line"},children:[i,", ",c,Object(u.jsx)("br",{}),Object(u.jsx)("small",{className:"text-muted",children:s})]}),Object(u.jsx)(l.a.Text,{children:Object(u.jsx)("small",{className:"text-muted",children:o})})]})]},"artwork-".concat(a))}))})]})};var g=function(){const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{localStorage.getItem("token")?t(!0):t(!1)}),[]),e&&Object(u.jsx)(p,{onLogout:()=>{localStorage.removeItem("name"),localStorage.removeItem("token"),t(!1)}})||Object(u.jsx)(h,{onLoginSuccessful:()=>{t(!0)}})};var f=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:s,getTTFB:c}=t;a(e),n(e),r(e),s(e),c(e)}))};a(28);c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.53482668.chunk.js.map