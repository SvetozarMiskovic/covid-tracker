(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(3),r=c.n(o),a=c(4),i=(c(9),c(10),c(0));var u=function(e){return Object(i.jsx)("div",{id:"input",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{htmlFor:"country",children:"Please write the country you want stats for!"}),Object(i.jsx)("input",{type:"text",id:"country",placeholder:"i.e. Serbia, India, Russia...",required:!0,onChange:function(t){var c=t.target.value;e.setInputText(c)}}),Object(i.jsx)("input",{type:"submit",value:"Get Data!",onClick:function(t){t.preventDefault();var c=document.querySelector(".country-display"),n=document.querySelector(".death-cases"),s=document.querySelector(".active-cases"),o=document.querySelector(".confirmed-cases");e.getData(e.inputText,c,n,s,o)}})]})})};c(12);var l=function(){return Object(i.jsxs)("div",{className:"holder",children:[Object(i.jsx)("h2",{className:"country-display",children:"PLEASE WRITE A COUNTRY"}),Object(i.jsxs)("div",{className:"information-box",children:[Object(i.jsxs)("div",{className:"confirmed",children:[Object(i.jsx)("h2",{children:"Number of confirmed cases"}),Object(i.jsx)("h4",{className:"confirmed-cases",children:"0"})]}),Object(i.jsxs)("div",{className:"active",children:[Object(i.jsx)("h2",{children:"Number of active cases"}),Object(i.jsx)("h4",{className:"active-cases",children:"0"})]}),Object(i.jsxs)("div",{className:"death",children:[Object(i.jsx)("h2",{children:"Number of death cases"}),Object(i.jsx)("h4",{className:"death-cases",children:"0"})]})]})]})};var d=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{getData:function(e,t,c,n,s){var o;e&&fetch("https://api.covid19api.com/total/dayone/country/"+e).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){o=e[e.length-1],console.log(o),o&&(t.textContent=o.Country,c.textContent=o.Deaths.toLocaleString(),n.textContent=o.Active.toLocaleString(),s.textContent=o.Confirmed.toLocaleString())})).catch((function(e){console.log(e)}))},inputText:c,setInputText:function(e){s(e.toLowerCase())}}),Object(i.jsx)(l,{})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),h()}],[[13,1,2]]]);
//# sourceMappingURL=main.57af5800.chunk.js.map