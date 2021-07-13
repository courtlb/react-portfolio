(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/github-logo.b370f9c2.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/linkedin-logo.e7234986.png"},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),s=c(6),n=c.n(s),l=(c(11),c(2)),a=c(0);var o=function(e){var t=e.currentTab,c=e.setCurrentTab;return Object(a.jsxs)("header",{className:"flex-row px-1",children:[Object(a.jsx)("h1",{children:Object(a.jsx)("a",{"data-testid":"link",href:"/",children:"Courtney Brown"})}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"flex-row",children:[Object(a.jsx)("li",{className:"about"===t?"mx-2 navActive":"mx-2",children:Object(a.jsx)("span",{onClick:function(){return c("about")},children:"About me"})}),Object(a.jsx)("li",{className:"portfolio"===t?"mx-2 navActive":"mx-2",children:Object(a.jsx)("span",{onClick:function(){return c("portfolio")},children:"Portfolio"})}),Object(a.jsx)("li",{className:"contact"===t?"mx-2 navActive":"mx-2",children:Object(a.jsx)("span",{onClick:function(){return c("contact")},children:"Contact"})}),Object(a.jsx)("li",{className:"resume"===t?"mx-2 navActive":"mx-2",children:Object(a.jsx)("span",{onClick:function(){return c("resume")},children:"Resume"})})]})})]})},j=c.p+"static/media/cover-image.06bec63d.jpg";var b=function(){return Object(a.jsxs)("section",{className:"intro my-5",children:[Object(a.jsx)("h1",{id:"about",className:"section-title",children:"About Me"}),Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)("img",{src:j,className:"my-2",style:{width:"50%"},alt:"cover"}),Object(a.jsx)("div",{className:"my-2",children:Object(a.jsx)("p",{children:"Hello! My name is Courtney Brown, and I am a full-stack web developer in Austin, Texas. I am currently enrolled in the University of Texas' Coding Bootcamp. I graduated from Texas A&M University in 2016 with a degree in Petroleum Engineering. After working in the industry for several years, I decided to make a change to a career I am more passionate about. I love the problem solving and collaborative nature of coding, and am looking forward to learning more in the next few months of bootcamp."})})]})]})};var d=function(e){var t=Object(i.useState)(e)[0].project,c=t.name,r=t.image,s=t.link,n=t.github;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"cardImg",children:Object(a.jsx)("a",{href:s,children:Object(a.jsx)("img",{src:r,alt:"screenshot of application"})})}),Object(a.jsxs)("div",{className:"cardText",children:[Object(a.jsx)("h2",{children:c}),Object(a.jsx)("a",{href:n,children:"Github Repository"})]})]})},h=c.p+"static/media/angelfish.68219896.png",u=function(){var e=[{name:"Angelfish",image:{angelfish:h},link:"https://angelfish-group.herokuapp.com",github:"https://github.com/courtlb/angelfish-project"},{name:"A Storm Is Brewing",image:"storm.png",link:"https://courtlb.github.io/storm-brewing",github:"https://github.com/courtlb/storm-brewing"},{name:"Tech Blog",image:"blog.png",link:"https://shrouded-journey-82502.herokuapp.com/",github:"https://github.com/courtlb/tech-blog"},{name:"Work Day Scheduler",image:"scheduler.png",link:"https://courtlb.github.io/work-day-scheduler/",github:"https://github.com/courtlb/work-day-scheduler"},{name:"Code Quiz",image:"quiz.png",link:"https://courtlb.github.io/code-quiz/",github:"https://github.com/courtlb/code-quiz"},{name:"Password Generator",image:"password.png",link:"https://courtlb.github.io/password-generator/",github:"https://github.com/courtlb/password-generator"}];return Object(a.jsxs)("section",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Courtney Brown Portfolio"})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("ul",{className:"flex-row",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d,{project:e[0]})}),Object(a.jsx)("li",{children:Object(a.jsx)(d,{project:e[1]})})]}),Object(a.jsxs)("ul",{className:"flex-row",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d,{project:e[2]})}),Object(a.jsx)("li",{children:Object(a.jsx)(d,{project:e[3]})})]}),Object(a.jsxs)("ul",{className:"flex-row",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d,{project:e[4]})}),Object(a.jsx)("li",{children:Object(a.jsx)(d,{project:e[5]})})]})]})]})},m=c(3),x=c(5);var O=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)(""),n=Object(l.a)(s,2),o=n[0],j=n[1],b=c.name,d=c.email,h=c.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(r(Object(x.a)(Object(x.a)({},c),{},Object(m.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(a.jsxs)("section",{children:[Object(a.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(a.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",c)},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",defaultValue:b,onBlur:u})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(a.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:u})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(a.jsx)("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:u})]}),o&&Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"error-text",children:o})}),Object(a.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},g=c.p+"static/media/resume.c7cb87e1.doc";var p=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:g,download:!0,children:"Download Resume"})}),Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Technical Skills"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Languages"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"HTML5"}),Object(a.jsx)("li",{children:"CSS3"}),Object(a.jsx)("li",{children:"Javascript ES6+"}),Object(a.jsx)("li",{children:"SQL"}),Object(a.jsx)("li",{children:"NoSQL"})]}),Object(a.jsx)("h2",{children:"Applications"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"GitHub"}),Object(a.jsx)("li",{children:"MongoDB"}),Object(a.jsx)("li",{children:"MySQL"})]}),Object(a.jsx)("h2",{children:"Tools"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Express.js"}),Object(a.jsx)("li",{children:"Node.js"}),Object(a.jsx)("li",{children:"React"}),Object(a.jsx)("li",{children:"Handlebars"}),Object(a.jsx)("li",{children:"Query"}),Object(a.jsx)("li",{children:"Bootstrap"})]})]})]})};var f=function(){var e,t;return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"https://github.com/courtlb",children:Object(a.jsx)("img",{src:null===(e=c(13))||void 0===e?void 0:e.default,alt:"github",className:"githubLogo"})})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/courtney-brown-73442888",children:Object(a.jsx)("img",{src:null===(t=c(14))||void 0===t?void 0:t.default,alt:"linkedin",className:"linkedinLogo"})})})]})};c(15);var v=function(){var e=Object(i.useState)("about"),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(o,{currentTab:c,setCurrentTab:r})}),Object(a.jsx)("div",{children:Object(a.jsx)("main",{children:function(){switch(c){case"about":return Object(a.jsx)(b,{});case"portfolio":return Object(a.jsx)(u,{});case"contact":return Object(a.jsx)(O,{});case"resume":return Object(a.jsx)(p,{});default:return null}}()})}),Object(a.jsx)("div",{children:Object(a.jsx)(f,{})})]})};n.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.b38dacb2.chunk.js.map