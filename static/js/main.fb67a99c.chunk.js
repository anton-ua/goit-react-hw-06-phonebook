(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={container:"App_container__3twmq"}},22:function(t,e,n){t.exports={buttonAdd:"AddContact_buttonAdd__2G28W"}},23:function(t,e,n){t.exports={enter:"TransitionLogo_enter__1tqM8",enterActive:"TransitionLogo_enterActive__3n2nV",exit:"TransitionLogo_exit__LTW0B",exitActive:"TransitionLogo_exitActive__1nRB_"}},24:function(t,e,n){t.exports={button:"ContactsList_button__3FVYk"}},25:function(t,e,n){t.exports={enter:"TransitionListItem_enter__2QprP",enterActive:"TransitionListItem_enterActive__3Su1q",exit:"TransitionListItem_exit__2Dca_",exitActive:"TransitionListItem_exitActive__2Ai0I"}},26:function(t,e,n){t.exports={enter:"TransitionFilter_enter__2_ISb",enterActive:"TransitionFilter_enterActive__2pAPJ",exit:"TransitionFilter_exit__t3lk9",exitActive:"TransitionFilter_exitActive__1NwB_"}},30:function(t,e,n){t.exports=n(40)},40:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(5),i=n.n(r),u=n(18),l=n.n(u),s=n(8),m="ADD_CONTACT",d="DELETE_CONTACT",b="FILTER_CONTACT",_=Object(s.b)(m),f=Object(s.b)(d),p=Object(s.b)(b),h=n(6),E=n(7),A=n(4),O=n(20),v=n(21),T=n(27),C=n(28),j=n(22),x=n.n(j),g=n(42),L=n(23),y=n.n(L),N=n(43),k={name:"",number:""},w=function(t){Object(C.a)(n,t);var e=Object(T.a)(n);function n(){var t;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contactToAdd:Object(A.a)({},k),isLogo:!1},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState((function(t){var e=t.contactToAdd;return{contactToAdd:Object(A.a)({},e,Object(E.a)({id:Object(N.a)()},a,c))}}))},t.handleSubmit=function(e){e.preventDefault(),t.state.contactToAdd.name&&t.state.contactToAdd.number&&(t.props.addContact(Object(A.a)({},t.state.contactToAdd)),t.reset())},t.reset=function(){t.setState({contactToAdd:Object(A.a)({},k)})},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.setState({isLogo:!0})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{in:this.state.isLogo,classNames:y.a,timeout:500,unmountOnExit:!0},o.a.createElement("h2",null,"Phonebook")),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{name:"name"},"Name",o.a.createElement("input",{type:"text",placeholder:"Enter name",name:"name",value:this.state.contactToAdd.name,onChange:this.handleChange})),o.a.createElement("label",{name:"number"},"Number",o.a.createElement("input",{type:"text",placeholder:"Enter phone number",name:"number",value:this.state.contactToAdd.number,onChange:this.handleChange})),o.a.createElement("button",{className:x.a.buttonAdd,type:"submit"},"Add Contact")))}}]),n}(c.Component),F=Object(h.b)((function(){return{}}),(function(t){return{addContact:function(e){return t(_(e))}}}))(w),S=n(44),I=n(24),D=n.n(I),B=n(25),q=n.n(B),J=function(t){var e=t.contacts,n=t.filter,a=t.deleteContact,c=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return o.a.createElement(S.a,{component:"ul"},c.map((function(t){var e=t.name,n=t.number,c=t.id;return o.a.createElement(g.a,{timeout:250,unmountOnExit:!0,key:c,classNames:q.a},o.a.createElement("li",null,o.a.createElement("p",null,e,": ",o.a.createElement("span",null,n),o.a.createElement("button",{type:"button",onClick:function(){return a(c)},className:D.a.button},"X"))))})))},P=Object(h.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),(function(t){return{deleteContact:function(e){return t(f(e))}}}))(J),R=n(26),M=n.n(R),V=function(t){var e=t.contacts,n=t.filter,a=t.handleFilter;return o.a.createElement(g.a,{classNames:M.a,timeout:250,unmountOnExit:!0,in:e.length>1},o.a.createElement("div",null,o.a.createElement("p",null,"Find contact by name:"),o.a.createElement("input",{placeholder:"Find...",value:n,onChange:function(t){return a(t.target.value)}})))},W=Object(h.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),(function(t){return{handleFilter:function(e){return t(p(e))}}}))(V),G=function(){return o.a.createElement("div",{className:l.a.container},o.a.createElement(F,null),o.a.createElement(W,null),o.a.createElement(P,null))},H=n(15),K=Object(s.c)({contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},(a={},Object(E.a)(a,m,(function(t,e){return t.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.payload.name.toLowerCase())?(alert("".concat(e.payload.name," is already in contact")),t):Object(A.a)({},t,{contacts:[].concat(Object(H.a)(t.contacts),[e.payload])})})),Object(E.a)(a,d,(function(t,e){return Object(A.a)({},t,{contacts:Object(H.a)(t.contacts.filter((function(t){return t.id!==e.payload})))})})),Object(E.a)(a,b,(function(t,e){return Object(A.a)({},t,{filter:e.payload})})),a)),Q=Object(s.a)({reducer:K});i.a.render(o.a.createElement(h.a,{store:Q},o.a.createElement(G,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.fb67a99c.chunk.js.map