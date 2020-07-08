(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},function(e,t,o){e.exports=o(22)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(7),c=o.n(r),l=(o(14),o(15),o(8)),s=o.n(l);o(16);function i(e){var t=e.title,o=e.logoImage,a=e.isLoading,r=void 0===a||a,c=r?n.a.createElement("span",{className:"loading"},"(loading...)"):"";return n.a.createElement("header",null,n.a.createElement("img",{src:o,className:" logo "+(r?"loading":""),alt:"logo"}),n.a.createElement("div",{className:"title"},t," ",c))}o(17);var u=o(4),d=o(5),m=o(1),E=function(e,t){switch(t.type){case"ADD_FETCHED_TODOS":return console.log("reducer: add fetched todo list"),Object(m.a)(Object(m.a)({},e),{},{todoList:[].concat(Object(d.a)(e.todoList),Object(d.a)(t.todos)),status:1});case"ADD_TODO":return console.log('reducer: add todo "'.concat(t.todoText,'"')),Object(m.a)(Object(m.a)({},e),{},{todoList:[].concat(Object(d.a)(e.todoList),[{id:Math.random().toString(36),name:t.todoText,complete:!1}])});case"REMOVE_TODO":return console.log('reducer: remove todo "'.concat(t.id,'"')),Object(m.a)(Object(m.a)({},e),{},{todoList:e.todoList.filter((function(e){return e.id!==t.id}))});case"TOGGLE_TODO_STATUS":return console.log('reducer: toggle todo "'.concat(t.todoText,'"')),Object(m.a)(Object(m.a)({},e),{},{todoList:e.todoList.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{complete:!e.complete}):e}))});case"RESET_TODOS":return console.log("reducer: change status to Loading"),Object(m.a)(Object(m.a)({},e),{},{error:null,todoList:[],status:0});case"TODOS_ERROR":return console.log("reducer: change status to Error"),console.log(t.error),Object(m.a)(Object(m.a)({},e),{},{status:-1,error:t.error});default:return e}},O=Object(a.createContext)();var p=function(e){var t=e.useLocalData,o=void 0!==t&&t,r=e.children,c=Object(a.useReducer)(E,{todoList:[],status:0,error:null}),l=Object(u.a)(c,2),s=l[0],i=l[1];return Object(a.useEffect)((function(){var e=o?"/react-todo-list/data/todos.json":"https://todo-api-zeta.vercel.app/";setTimeout((function(){return function(e){0===s.status&&fetch(e).then((function(e){return e.json()})).then((function(e){console.log("todo(s) loaded"),e&&i({type:"ADD_FETCHED_TODOS",todos:e})}),(function(e){return i({type:"TODOS_ERROR",error:e})})).catch((function(e){return i({type:"TODOS_ERROR",error:e})}))}(e)}),500)}),[s.status]),n.a.createElement(O.Provider,{value:{todosStore:s,todosDispatch:i}},r)};function f(){var e,t,o=Object(a.useContext)(O).todosStore,r=null===(e=o.todoList)||void 0===e?void 0:e.filter((function(e){return!1===e.complete})).length,c=null===(t=o.todoList)||void 0===t?void 0:t.filter((function(e){return!0===e.complete})).length;return n.a.createElement("div",{className:"todo-summary"},n.a.createElement("div",{className:"pending"},"Pending ToDo(s): ",n.a.createElement("span",null,r)),n.a.createElement("div",{className:"completed"},"Done ToDo(s): ",n.a.createElement("span",null,c)))}o(18);function g(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),o=t[0],r=t[1],c=Object(a.useContext)(O).todosDispatch;return n.a.createElement("form",{className:"todo-add",onSubmit:function(e){e.preventDefault(),c({type:"ADD_TODO",todoText:o}),r("")}},n.a.createElement("input",{type:"text",placeholder:"type todo text here",value:o,onChange:function(e){r(e.target.value)}}),n.a.createElement("input",{type:"submit",disabled:0===o.length,value:"Add todo"}))}o(19);function v(e){var t=e.item,o=Object(a.useContext)(O).todosDispatch;return n.a.createElement("li",{className:"todo-item "+(t.complete?"completed":"")},n.a.createElement("button",{className:"complete",alt:"Mark as done",title:"Mark as done",onMouseUp:function(){return o({type:"TOGGLE_TODO_STATUS",id:t.id})}},"\u2714"),n.a.createElement("span",{className:"text"},t.name),n.a.createElement("button",{className:"remove",alt:"Remove",title:"Remove",onClick:function(){return o({type:"REMOVE_TODO",id:t.id})}},"\u2716"))}o(20);function h(){var e,t=Object(a.useContext)(O),o=t.todosStore,r=t.todosDispatch,c=(null===o||void 0===o||null===(e=o.todoList)||void 0===e?void 0:e.length)?n.a.createElement("ul",null," ",o.todoList.map((function(e){return n.a.createElement(v,{item:e,key:e.id})}))):n.a.createElement("p",null,"No ToDo(s) yet. Add them!");return n.a.createElement("div",{className:"todo-list"},c,n.a.createElement("button",{onClick:function(){return r({type:"RESET_TODOS"})}},"Reset"))}function b(e){var t=e.children,o=Object(a.useContext)(O),r=o.todosStore,c=o.todosDispatch;switch(r.status){case 0:return n.a.createElement("div",{className:"todo-list skeleton"},n.a.createElement("ul",null,n.a.createElement("li",{className:"todo-item"},n.a.createElement("span",{className:"text"}," ")),n.a.createElement("li",{className:"todo-item"},n.a.createElement("span",{className:"text"}," ")),n.a.createElement("li",{className:"todo-item"},n.a.createElement("span",{className:"text"}," "))));case 1:return n.a.createElement("div",null,t);case-1:return n.a.createElement("div",{className:"error"},n.a.createElement("p",{className:"warning"},"An error ocurred when trying to load ToDo(s)"),n.a.createElement("button",{onClick:function(){return c({type:"RESET_TODOS"})}},"Try again"));default:return n.a.createElement("div",{className:"error"},n.a.createElement("p",{className:"warning"},"An unknown error ocurred. Please refresh the page"))}}function D(e){var t=e.logoImage,o=Object(a.useContext)(O).todosStore;return n.a.createElement("div",{className:"todos"},n.a.createElement(i,{title:"Todo list",logoImage:t,isLoading:0===o.status}),n.a.createElement(b,null,n.a.createElement(f,null),n.a.createElement(g,null),n.a.createElement(h,null)))}o(21);var T=function(e){var t=e.sourceCodeUrl;return n.a.createElement("footer",null,n.a.createElement("a",{className:"repo-link",href:t},"view source code ",n.a.createElement("img",{src:"/react-todo-list/github-logo.png",alt:"github logo"})))};var j=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null,n.a.createElement(D,{logoImage:s.a})),n.a.createElement(T,{sourceCodeUrl:"https://github.com/si7o/react-todo-list"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c12d7c15.chunk.js.map