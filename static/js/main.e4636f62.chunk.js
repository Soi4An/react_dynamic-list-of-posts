(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c,n=s(8),a=s.n(n),i=s(2),l=s(1),o=(s(13),s(14),s(15),s(3)),r=s.n(o),d=s(0),m=function(e){var t=e.posts,s=e.selectedPost,c=e.onSetSelectedPost;return Object(d.jsxs)("div",{"data-cy":"PostsList",children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button","data-cy":"PostButton",className:r()("button","is-link",{"is-light":s!==e}),onClick:function(){var t;c(s===(t=e)?null:t)},children:s===e?"Close":"Open"})})]},e.id)}))})]})]})},j=s(7),b=(s(17),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});!function(e){e.Empty="",e.GetUsers="Unable to get users",e.GetPosts="Unable to get posts",e.GetComments="Unable to get comments",e.AddComment="Unable to add new comment",e.DeleteComment="Unable to delete the comment"}(c||(c={}));var u=function(e){var t=e.name,s=e.onSetFormName,n=e.email,a=e.onSetFormEmail,o=e.commentText,m=e.onSetCommentText,j=e.addComment,b=e.isLoadingNewComment,u=e.onSetErrorInPostDetails,h=Object(l.useState)(!1),O=Object(i.a)(h,2),x=O[0],f=O[1],p=Object(l.useState)(!1),N=Object(i.a)(p,2),y=N[0],v=N[1],g=Object(l.useState)(!1),S=Object(i.a)(g,2),C=S[0],E=S[1];return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),u(c.Empty);var i=t.trim(),l=n.trim(),r=o.trim();if(i.length<1||l.length<1||r.length<1)return i.length<1&&(f(!0),s("")),l.length<1&&(v(!0),a("")),void(r.length<1&&(E(!0),m("")));j(i,l,r)},children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":x}),value:t,onChange:function(e){var t=e.target.value;s(t),f(!1),u(c.Empty)}}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),x&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),x&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":y}),value:n,onChange:function(e){var t=e.target.value;a(t),v(!1),u(c.Empty)}}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),y&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),y&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":C}),value:o,onChange:function(e){var t=e.target.value;m(t),E(!1),u(c.Empty)}})}),C&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:r()("button","is-link",{"is-loading":b}),children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:r()("button","is-link","is-light"),disabled:b,onClick:function(){s(""),a(""),m(""),f(!1),v(!1),E(!1),u(c.Empty)},children:"Clear"})})]})]})},h=function(e){var t=e.comments,s=e.deleteComment;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),t.map((function(e){var t=e.id,c=e.name,n=e.email,a=e.body;return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(n),"data-cy":"CommentAuthor",children:c}),Object(d.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return s(t)},children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:a})]},t)}))]})},O="https://mate.academy/students-api";function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch(O+e,c).then((function(e){if(!e.ok)throw new Error("Unable to connect from the server: \n        - response status = ".concat(e.status,";\n        - status text = ").concat(e.statusText));return e.json()}))}var f=function(e){return x(e)},p=function(e,t){return x(e,"POST",t)},N=function(e){return x(e,"DELETE")};var y=function(e){var t=e.selectedPost,s=Object(l.useState)(!1),n=Object(i.a)(s,2),a=n[0],o=n[1],r=Object(l.useState)([]),m=Object(i.a)(r,2),O=m[0],x=m[1],y=Object(l.useState)(c.Empty),v=Object(i.a)(y,2),g=v[0],S=v[1],C=Object(l.useState)(!1),E=Object(i.a)(C,2),P=E[0],k=E[1],w=Object(l.useState)(""),T=Object(i.a)(w,2),U=T[0],F=T[1],D=Object(l.useState)(""),I=Object(i.a)(D,2),L=I[0],B=I[1],G=Object(l.useState)(""),M=Object(i.a)(G,2),A=M[0],_=M[1],J=Object(l.useState)(!1),q=Object(i.a)(J,2),W=q[0],Y=q[1],z=t.id,H=t.title,K=t.body,Q=Object(l.useCallback)((function(e,t,s){var n,a={id:(n=O,n.length>0?Math.max.apply(Math,Object(j.a)(n.map((function(e){return e.id}))))+1:1),postId:z,name:e,email:t,body:s};Y(!0),function(e){return p("/comments",e)}(a).then((function(e){x((function(t){return null!==t?[].concat(Object(j.a)(t),[e]):[e]})),_("")})).catch((function(){S(c.AddComment)})).finally((function(){Y(!1)}))}),[O]),R=Object(l.useCallback)((function(e){x((function(t){return t.filter((function(t){return t.id!==e}))})),S(c.Empty),function(e){return N("/comments/".concat(e))}(e).catch((function(){x(O),S(c.DeleteComment)}))}),[O]);return Object(l.useEffect)((function(){var e;k(!1),S(c.Empty),F(""),B(""),_(""),t&&(o(!0),(e=t.id,f("/comments?postId=".concat(e))).then(x).catch((function(){return S(c.GetComments)})).finally((function(){return o(!1)})))}),[t]),Object(d.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(z,": ").concat(H)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:K})]}),a?Object(d.jsx)(b,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"block",children:[g.length>1&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:g}),O.length<1&&Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),O.length>0&&Object(d.jsx)(h,{comments:O,deleteComment:R}),P?Object(d.jsx)(u,{name:U,onSetFormName:F,email:L,onSetFormEmail:B,commentText:A,onSetCommentText:_,addComment:Q,isLoadingNewComment:W,onSetErrorInPostDetails:S}):Object(d.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){k(!0),S(c.Empty)},children:"Write a comment"})]})})]})})},v=function(e){var t=e.users,s=e.selectedUser,c=e.onSetSelectedUser,n=e.onSetSelectedPost,a=Object(l.useState)(!1),o=Object(i.a)(a,2),m=o[0],j=o[1];return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:r()("dropdown",{"is-active":m}),onBlur:function(){return setTimeout((function(){return j(!1)}),100)},children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return j(!m)},children:[null===s||""===s.name?Object(d.jsx)("span",{children:"Choose a user"}):Object(d.jsx)("span",{children:s.name}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),m&&Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(d.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(d.jsx)("a",{href:"#user-".concat(e.id),className:r()("dropdown-item",{"is-active":(null===s||void 0===s?void 0:s.id)===e.id}),onClick:function(t){return function(e,t){e.preventDefault(),j(!1),c(t),n(null)}(t,e)},children:e.name},e.id)}))})})]})},g=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),s=t[0],n=t[1],a=Object(l.useState)(null),o=Object(i.a)(a,2),j=o[0],u=o[1],h=Object(l.useState)(c.Empty),O=Object(i.a)(h,2),x=O[0],p=O[1],N=Object(l.useState)(""),g=Object(i.a)(N,2),S=g[0],C=g[1],E=Object(l.useState)(!1),P=Object(i.a)(E,2),k=P[0],w=P[1],T=Object(l.useState)([]),U=Object(i.a)(T,2),F=U[0],D=U[1],I=Object(l.useState)(null),L=Object(i.a)(I,2),B=L[0],G=L[1];return Object(l.useEffect)((function(){var e;j&&(w(!0),p(c.Empty),C(""),(e=j.id,f("/posts?userId=".concat(e))).then(D).catch((function(e){p(c.GetPosts),C(e)})).finally((function(){return w(!1)})))}),[j]),Object(l.useEffect)((function(){f("/users").then(n).catch((function(e){p(c.GetUsers),C(e)}))}),[]),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(v,{users:s,selectedUser:j,onSetSelectedUser:u,onSetSelectedPost:G})}),k?Object(d.jsx)(b,{}):Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[null===j&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),x.length>1&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"".concat(x,". ").concat(S)}),null!==j&&F.length<1&&Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),null!==j&&F.length>0&&Object(d.jsx)(m,{posts:F,selectedPost:B,onSetSelectedPost:G})]})]})}),Object(d.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":B}),children:null!==B&&Object(d.jsx)("div",{className:"tile is-child box is-success ",children:Object(d.jsx)(y,{selectedPost:B})})})]})})})};a.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e4636f62.chunk.js.map