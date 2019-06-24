(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(65),c=n.n(r),i=(n(80),n(3)),s=n(4),o=n(6),u=n(5),m=n(7),d=n(9),E=n(17),p=function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"container"},l.a.createElement(d.b,{to:"/",className:"navbar-logo text-black"},"Profit",l.a.createElement("span",{className:"dollarSign"},"$")),l.a.createElement("div",{className:"nav-links float-right"},l.a.createElement(d.c,{className:"mx-4",to:"/",exact:!0,activeClassName:"active-link"},"Home"),l.a.createElement(d.c,{className:"mx-4",to:"/analysis",exact:!0,activeClassName:"active-link"},"Analysis"),l.a.createElement(d.c,{className:"mx-4",to:"/sessions",exact:!0,activeClassName:"active-link"},"Sessions"),l.a.createElement(d.c,{className:"mx-4",to:"/clients",exact:!0,activeClassName:"active-link"},"Clients"))))},b=n(67),f=n.n(b),h=n(68),y=n.n(h),v=n(69),g=n.n(v),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"bannerIntro"},l.a.createElement("h1",{className:"text-black bannerIntro1"},"Easily track your weekly income with ",l.a.createElement("span",{className:"bannerProfits"},"Profit",l.a.createElement("span",{className:"dollarSign"},"$")),"."),l.a.createElement("h2",{className:"text-black bannerIntro2"},"Visual diagrams and calculations will analyze where your profit is coming from.")),l.a.createElement("div",{className:"container steps"},l.a.createElement("div",{className:"row pt-5"},l.a.createElement("div",{className:"col-12 col-sm-3 step_1"},l.a.createElement("div",null,"Step 1"),l.a.createElement("img",{className:"addclientImg",src:f.a,alt:""}),l.a.createElement("div",{className:"step-titles"},"Add Clients")),l.a.createElement("div",{className:"col-12 col-sm-3 step_2"},l.a.createElement("div",null,"Step 2"),l.a.createElement("img",{className:"addsessionImg",src:y.a,alt:""}),l.a.createElement("div",{className:"step-titles"},"Add Sessions")),l.a.createElement("div",{className:"col-12 col-sm-3 step_3"},l.a.createElement("div",null,"Step 3"),l.a.createElement("img",{className:"analyzeImg",src:g.a,alt:""}),l.a.createElement("div",{className:"step-titles"},"Analyze Income")),l.a.createElement("div",{className:"col-12 col-sm-3 mt-5"},l.a.createElement(d.b,{to:"/clients"},l.a.createElement("button",{className:"startNowBtn btn"},"Start Now"))))))}}]),t}(a.Component),S=n(70),N=n.n(S),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("img",{className:"bannerImg",src:N.a,alt:""}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement(O,null)))))}}]),t}(a.Component),j=n(8),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).calculation=function(){var e=n.props,t=e.sessionList,a=void 0===t?[]:t,l=e.clientList,r=void 0===l?[]:l,c=0;return a.forEach(function(e){r.forEach(function(t){t.name===e.name&&(c+=t.price*e.duration)})}),c},n.totalHours=function(){var e=n.props.sessionList,t=0;return(void 0===e?[]:e).forEach(function(e){var n=e.duration;t+=Number(n)}),t},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(void 0!==this.props.sessionList){var e=this.calculation(),t=this.totalHours();return l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h2",{className:"mb-4"},"Step 3 : Analyze"),l.a.createElement("h3",null,"Total Weekly Income: $",e),l.a.createElement("h3",null,"Total Hours in a Week: ",t))}return l.a.createElement("div",{className:"mt-5 text-center"},l.a.createElement("h2",null,"Here is your current income: "),"You are broke")}}]),t}(a.Component),k=Object(j.b)(function(e){return{sessionList:e.sessions.sessionList,clientList:e.clients.clientList}})(C),A=n(72),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).dayOfWeek=function(){var e=n.props.sessionList,t=0,a=0,l=0,r=0,c=0,i=0,s=0;return e.forEach(function(e){"Sunday"===e.dayOfWeek?t+=e.price*e.duration:"Monday"===e.dayOfWeek?a+=e.price*e.duration:"Tuesday"===e.dayOfWeek?l+=e.price*e.duration:"Wednesday"===e.dayOfWeek?r+=e.price*e.duration:"Thursday"===e.dayOfWeek?c+=e.price*e.duration:"Friday"===e.dayOfWeek?i+=e.price*e.duration:s+=e.price*e.duration}),[t,a,l,r,c,i,s]},n.state={chartData:{labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],datasets:[{label:"Income $",data:n.dayOfWeek(),backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.dayOfWeek();return console.log(e),l.a.createElement("div",null,l.a.createElement(A.a,{data:this.state.chartData,options:{layout:{padding:{left:50,right:50,up:50,bottom:50}},title:{display:!0,text:"Weekly Distribution",fontSize:35},legend:{display:!0,position:"right"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"day of week"}}],yAxes:[{scaleLabel:{display:!0,labelString:"income $"},ticks:{beginAtZero:!0}}]}}}))}}]),t}(a.Component),x=Object(j.b)(function(e){return{clientList:e.clients.clientList,sessionList:e.sessions.sessionList}})(w),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).resetAllButton=function(){n.props.deleteAllClients(),n.props.deleteAllSessions()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container mt-5 "},l.a.createElement(k,null),l.a.createElement("hr",{className:"mt-5"}),l.a.createElement(x,null),l.a.createElement("div",{className:"text-center"},l.a.createElement(d.b,{to:"/clients"},l.a.createElement("button",{className:"btn btn-warning my-4",onClick:this.resetAllButton},"reset and start over"))))}}]),t}(a.Component),I=Object(j.b)(function(e){return console.log(e),{sessionList:e.sessions.sessionList}},function(e){return{deleteAllClients:function(){return e(function(e,t){e({type:"DELETE ALL CLIENTS"})})},deleteAllSessions:function(){return e(function(e,t){e({type:"DELETE ALL SESSIONS"})})}}})(D),T=n(20),W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,name:null,price:null},n.handleChange=function(e){n.setState(Object(T.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.addClient(n.state),e.target.reset()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.clientErr;return console.log(e+"do you see this??"),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit,className:"mt-5"},l.a.createElement("h2",null,"Step 1 : Add a New Client"),l.a.createElement("label",{htmlFor:"name"},"Client First and Last Name: "),l.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange,required:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"price"},"Client Price: "),l.a.createElement("input",{type:"number",step:"0.5",id:"price",onChange:this.handleChange,required:!0})," ",l.a.createElement("br",null),e?l.a.createElement("p",{className:"py-3 text-danger"},e):null,l.a.createElement("button",{className:"btn btn-primary mt-3"},"Add Client"),l.a.createElement("br",null),l.a.createElement(d.b,{to:"/sessions"},l.a.createElement("button",{className:"btn btn-secondary mt-3"},"Step 2: Add Sessions"))))}}]),t}(a.Component),F=Object(j.b)(function(e){return{clientErr:e.clients.clientErr}},function(e){return{addClient:function(t){return e(function(e){return function(t,n){var a=n().clients.clientList;if(console.log("state: "+JSON.stringify(n())),console.log("clientList: "+a),a&&a.map(function(e){return e.name}).includes(e.name))return t({type:"ADD CLIENT ERROR"});t({type:"ADD CLIENT",client:e})}}(t))}}})(W),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){n.props.deleteClient(e)},n.deleteAllClientsButton=function(){n.props.deleteAllClients(),n.props.deleteAllSessions()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.clientList;return l.a.createElement("div",{className:"clients container mt-5 text-center"},l.a.createElement(F,null),l.a.createElement("h2",{className:"mt-5"},"Here Are Your List of Clients..."),l.a.createElement("button",{className:"btn btn-danger text-center my-2",onClick:this.deleteAllClientsButton},"delete all"),l.a.createElement("div",{className:"text-center"},"*deleting all clients will reset sessions and analysis*"),l.a.createElement("hr",null),t&&t.map(function(t){return l.a.createElement("div",{className:"my-2",key:t.id},l.a.createElement("div",null,l.a.createElement("span",{className:"client-name"},"Client Name: ",t.name)," | Client Price: ",t.price,l.a.createElement("button",{className:"btn btn-warning ml-2",onClick:function(){e.handleClick(t.id)}},"Delete")))}))}}]),t}(a.Component),H=Object(j.b)(function(e){return{clientList:e.clients.clientList}},function(e){return{deleteClient:function(t){return e(function(e){return function(t,n){t({type:"DELETE CLIENT",id:e})}}(t))},deleteAllClients:function(){return e(function(e,t){e({type:"DELETE ALL CLIENTS"})})},deleteAllSessions:function(){return e(function(e,t){e({type:"DELETE ALL SESSIONS"})})}}})(B),z=n(19),P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,name:null,duration:null,dayOfWeek:null,price:null},n.handleChange=function(e){n.setState(Object(T.a)({},e.target.id,e.target.value)),console.log([e.target.id])},n.handleSubmit=function(e){e.preventDefault();var t=0;n.props.clientList.filter(function(e){e.name===n.state.name&&(t=e.price),n.setState({price:t},function(){console.log("price = "+n.state.price,"newPrice = "+t)})}),n.props.addSession(Object(z.a)({},n.state,{price:t})),e.target.reset()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.clientList;return l.a.createElement("div",{className:"mt-5"},l.a.createElement("h2",null,"Step 2 : Add a Session"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"name"},"Client Name: "),l.a.createElement("select",{onChange:function(t){return e.handleChange(t)},id:"name",required:!0},l.a.createElement("option",{value:""}),t.map(function(e){return l.a.createElement("option",{key:e.id,value:e.name.value},e.name)})),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"dayOfWeek"},"Day of Week: "),l.a.createElement("select",{onChange:function(t){return e.handleChange(t)},id:"dayOfWeek",required:!0},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"Sunday"},"Sunday"),l.a.createElement("option",{value:"Monday"},"Monday"),l.a.createElement("option",{value:"Tuesday"},"Tuesday"),l.a.createElement("option",{value:"Wednesday"},"Wednesday"),l.a.createElement("option",{value:"Thursday"},"Thursday"),l.a.createElement("option",{value:"Friday"},"Friday"),l.a.createElement("option",{value:"Saturday"},"Saturday")),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"duration"},"Session Duration (in hours): "),l.a.createElement("input",{type:"number",step:"0.5",id:"duration",onChange:this.handleChange,required:!0}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary mt-3"},"Add Session"),l.a.createElement("br",null),l.a.createElement(d.b,{to:"/analysis"},l.a.createElement("button",{className:"btn btn-secondary mt-3"},"Step 3: Analyze Income"))))}}]),t}(a.Component),M=Object(j.b)(function(e){return console.log(e),{clientList:e.clients.clientList}},function(e){return{addSession:function(t){return e(function(e){return function(t,n){t({type:"ADD SESSION",session:e})}}(t))}}})(P),R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){n.props.deleteSession(e)},n.deleteAllSessionsButton=function(){n.props.deleteAllSessions()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.sessionList;t.clientList;return l.a.createElement("div",{className:"sessions mt-5 text-center"},l.a.createElement(M,null),l.a.createElement("h2",{className:"mt-5"},"Here are a list of your existing Sessions..."),l.a.createElement("button",{className:"btn btn-danger text-center my-2",onClick:this.deleteAllSessionsButton},"delete all"),l.a.createElement("div",{className:"text-center"},"*deleting all sessions will reset analysis*"),l.a.createElement("hr",null),n&&n.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement("ul",null,l.a.createElement("li",null,"Client Name: ",t.name),l.a.createElement("li",null,"Session Duration: ",t.duration," hour(s)"),l.a.createElement("li",null,"Session Day: ",t.dayOfWeek),l.a.createElement("li",null,"Session Price: ",t.price),l.a.createElement("button",{className:"btn btn-warning",onClick:function(){e.handleClick(t.id)}},"Delete")))}))}}]),t}(a.Component),$=Object(j.b)(function(e){return{sessionList:e.sessions.sessionList,clientList:e.clients.clientList}},function(e){return{deleteSession:function(t){return e(function(e){return function(t,n){t({type:"DELETE SESSION",id:e})}}(t))},deleteAllSessions:function(){return e(function(e,t){e({type:"DELETE ALL SESSIONS"})})}}})(R),q=function(){return l.a.createElement("div",null,"Hello from Client Details")},J=function(){return l.a.createElement("div",null,"Hello from Session Details")},_=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",activeStyle:{color:"red"},component:L}),l.a.createElement(E.a,{path:"/analysis",activeStyle:{color:"red"},component:I}),l.a.createElement(E.a,{path:"/sessions",activeStyle:{color:"red"},component:$}),l.a.createElement(E.a,{path:"/clients",activeStyle:{color:"red"},component:H}),l.a.createElement(E.a,{path:"/client/:id",activeStyle:{color:"red"},component:q}),l.a.createElement(E.a,{path:"/session/:id",activeStyle:{color:"red"},component:J}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(18),V=n(36),Z={clientList:[],clientErr:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD CLIENT":t.client.id=Math.random(),console.log("new client added");var n=[].concat(Object(V.a)(e.clientList),[t.client]);return n.reverse(),{clientList:n};case"ADD CLIENT ERROR":return console.log("add client failed"),Object(z.a)({},e,{clientErr:"A client with this exact name already exists, please try again."});case"DELETE CLIENT":return n=e.clientList.filter(function(e){return e.id!==t.id}),Object(z.a)({},e,{clientList:n});case"DELETE ALL CLIENTS":return console.log("we get here"),{clientList:n=[]};default:return e}},K={sessionList:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD SESSION":t.session.id=Math.random();var n=[].concat(Object(V.a)(e.sessionList),[t.session]);return n.reverse(),{sessionList:n};case"DELETE SESSION":return n=e.sessionList.filter(function(e){return e.id!==t.id}),Object(z.a)({},e,{sessionList:n});case"DELETE ALL SESSIONS":return console.log("we get here tooooo"),{sessionList:n=[]};default:return e}},U=Object(Y.c)({clients:G,sessions:Q}),X=n(74),ee=Object(Y.d)(U,Object(Y.a)(X.a));c.a.render(l.a.createElement(j.a,{store:ee},l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,n){e.exports=n.p+"static/media/addClient.4cb8c8a5.png"},68:function(e,t,n){e.exports=n.p+"static/media/addsession.d31bc5a3.png"},69:function(e,t,n){e.exports=n.p+"static/media/analyze.7ec2e445.png"},70:function(e,t,n){e.exports=n.p+"static/media/bannerImg3.cfd7b160.jpg"},75:function(e,t,n){e.exports=n(182)},80:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.9c9086e8.chunk.js.map