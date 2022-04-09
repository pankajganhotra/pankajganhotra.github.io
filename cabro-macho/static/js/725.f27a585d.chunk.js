"use strict";(self.webpackChunkcabro_macho_fuse=self.webpackChunkcabro_macho_fuse||[]).push([[725],{47619:function(e,r,t){t.d(r,{Z:function(){return I}});var a=t(30168),n=t(4942),i=t(92550),o=t(88564),l=t(83061),d=t(47313),s=t(70499),c=t(19860),u=t(26159),p=t(84669),h=t(45894),m=t(46417);var g=function(e){var r=(0,c.Z)(),t=(0,h.v9)((0,p.lK)(r.palette.primary.main));return(0,m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&(0,m.jsx)(u.Z,{theme:t,children:e.header})})},x=t(1413),f=t(29439),b=t(46923),Z=t(57451),v=t(60211);var C=function(e){var r=(0,c.Z)(),t=(0,h.v9)((0,p.lK)(r.palette.primary.main));return(0,m.jsxs)(m.Fragment,{children:[e.header&&(0,m.jsx)(u.Z,{theme:t,children:(0,m.jsx)("div",{className:(0,l.Z)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&(0,m.jsx)(i.Z,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function j(e,r){var t=(0,d.useState)(!1),a=(0,f.Z)(t,2),n=a[0],i=a[1];(0,d.useImperativeHandle)(r,(function(){return{toggleSidebar:o}}));var o=function(){i(!n)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z.Z,{lgUp:"permanent"===e.variant,children:(0,m.jsx)(v.Z,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return o()},disableSwipeToOpen:!0,classes:{root:(0,l.Z)("FusePageCarded-sidebarWrapper",e.variant),paper:(0,l.Z)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,m.jsx)(C,(0,x.Z)({},e))})}),"permanent"===e.variant&&(0,m.jsx)(Z.Z,{lgDown:!0,children:(0,m.jsx)(b.ZP,{variant:"permanent",className:(0,l.Z)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:(0,l.Z)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:(0,m.jsx)(C,(0,x.Z)({},e))})})]})}var P,w=(0,d.forwardRef)(j),S=(0,o.ZP)("div")((function(e){var r=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:r.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:k,background:"linear-gradient(to right, ".concat(r.palette.primary.dark," 0%, ").concat(r.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":(0,n.Z)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},r.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:F,minHeight:F,maxHeight:F,display:"flex",color:r.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:r.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:r.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(r.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":(0,n.Z)({},r.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":(0,n.Z)({},r.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:y,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:k,minHeight:k,color:r.palette.primary.contrastText,backgroundColor:r.palette.primary.dark,"&.permanent":(0,n.Z)({},r.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":(0,n.Z)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:r.palette.background.default,color:r.palette.text.primary},r.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),y=240,k=200,N=64,F=k-N,H=(0,d.forwardRef)((function(e,r){var t=(0,d.useRef)(null),a=(0,d.useRef)(null),n=(0,d.useRef)(null),o=e.rightSidebarHeader||e.rightSidebarContent,c=e.leftSidebarHeader||e.leftSidebarContent;return(0,d.useImperativeHandle)(r,(function(){return{rootRef:n,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){a.current.toggleSidebar()}}})),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.Z,{styles:function(r){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),(0,m.jsxs)(S,{className:(0,l.Z)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[(0,m.jsx)("div",{className:"FusePageCarded-topBg"}),(0,m.jsxs)("div",{className:"flex container w-full",children:[c&&(0,m.jsx)(w,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:t,rootRef:n}),(0,m.jsxs)("div",{className:(0,l.Z)("FusePageCarded-contentWrapper",c&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",o&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[(0,m.jsx)(g,{header:e.header}),(0,m.jsxs)("div",{className:(0,l.Z)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&(0,m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&(0,m.jsx)(i.Z,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),o&&(0,m.jsx)(w,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n})]})]})]})}));H.defaultProps={};var I=(0,d.memo)((0,o.ZP)(H)(P||(P=(0,a.Z)([""]))))},8489:function(e,r,t){var a=t(58970),n=t(83061),i=t(46417),o=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];r.Z=function(e){return(0,i.jsx)("div",{className:(0,n.Z)("inline text-12 font-semibold py-4 px-12 rounded-full truncate",a.Z.find(o,{name:e.name}).color),children:e.name})}},43725:function(e,r,t){t.r(r),t.d(r,{default:function(){return L}});var a=t(4942),n=t(47619),i=t(23132),o=t(88564),l=t(42183),d=t(29439),s=t(71263),c=t(56605),u=t(82295),p=t(26159),h=t(61113),m=t(51280),g=t(45894),x=t(84669),f=t(44784),b=t(47313),Z=t(46417);var v=function(e){(0,g.I0)();var r=(0,b.useState)(""),t=(0,d.Z)(r,2),a=t[0],n=t[1],i=(0,g.v9)(x.rg);return(0,Z.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[(0,Z.jsxs)("div",{className:"flex items-center",children:[(0,Z.jsx)(s.Z,{component:m.E.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"receipt"}),(0,Z.jsx)(h.Z,{component:m.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"Orders"})]}),(0,Z.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:(0,Z.jsx)(p.Z,{theme:i,children:(0,Z.jsxs)(u.Z,{component:m.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[(0,Z.jsx)(s.Z,{color:"action",children:"search"}),(0,Z.jsx)(c.Z,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return n(e.target.value)}})]})})})]})},C=t(92550),j=t(34814),P=t(58970),w=t(44758),S=t(66835),y=t(57861),k=t(67478),N=t(62323),F=t(24076),H=t(8139),I=t(20408),R=t(8489),O=t(47131),T=t(74748),W=t(83213),B=t(85582),D=t(51405),A=t(14560),z=t(82558),E=t(22260),M=t(83689),V=t(23477),_=[{id:"id",align:"left",disablePadding:!1,label:"ID",sort:!0},{id:"reference",align:"left",disablePadding:!1,label:"Reference",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}];var U=function(e){var r=e.selectedOrderIds,t=r.length,a=(0,b.useState)(null),n=(0,d.Z)(a,2),i=n[0],o=n[1],l=(0,g.I0)();function c(){o(null)}return(0,Z.jsx)(V.Z,{children:(0,Z.jsxs)(F.Z,{className:"h-48 sm:h-64",children:[(0,Z.jsxs)(k.Z,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,Z.jsx)(w.Z,{indeterminate:t>0&&t<e.rowCount,checked:0!==e.rowCount&&t===e.rowCount,onChange:e.onSelectAllClick}),t>0&&(0,Z.jsxs)(M.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[(0,Z.jsx)(O.Z,{"aria-owns":i?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},size:"large",children:(0,Z.jsx)(s.Z,{children:"more_horiz"})}),(0,Z.jsx)(B.Z,{id:"selectedOrdersMenu",anchorEl:i,open:Boolean(i),onClose:c,children:(0,Z.jsx)(A.Z,{children:(0,Z.jsxs)(D.Z,{onClick:function(){l((0,f.wH)(r)),e.onMenuItemClick(),c()},children:[(0,Z.jsx)(T.Z,{className:"min-w-40",children:(0,Z.jsx)(s.Z,{children:"delete"})}),(0,Z.jsx)(W.Z,{primary:"Remove"})]})})})]})]}),_.map((function(r){return(0,Z.jsx)(k.Z,{className:"p-4 md:p-16",align:r.align,padding:r.disablePadding?"none":"normal",sortDirection:e.order.id===r.id&&e.order.direction,children:r.sort&&(0,Z.jsx)(E.Z,{title:"Sort",placement:"right"===r.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,Z.jsx)(z.Z,{active:e.order.id===r.id,direction:e.order.direction,onClick:(t=r.id,function(r){e.onRequestSort(r,t)}),className:"font-semibold",children:r.label})})},r.id);var t}),this)]})})};var q=(0,H.Z)((function(e){var r=(0,g.I0)(),t=(0,g.v9)((function(e){return e.orders.loading})),a=(0,g.v9)((function(e){return e.orders.orders})),n=(0,b.useState)([]),i=(0,d.Z)(n,2),o=i[0],l=i[1],s=(0,b.useState)([]),c=(0,d.Z)(s,2),u=c[0],p=c[1],x=(0,b.useState)(""),v=(0,d.Z)(x,2),H=v[0],O=(v[1],(0,b.useState)(0)),T=(0,d.Z)(O,2),W=T[0],B=T[1],D=(0,b.useState)(10),A=(0,d.Z)(D,2),z=A[0],E=A[1],M=(0,b.useState)({direction:"asc",id:null}),V=(0,d.Z)(M,2),_=V[0],q=V[1];return(0,b.useEffect)((function(){r((0,f.AU)())}),[r]),(0,b.useEffect)((function(){0!==H.length?(l(j.Z.filterArrayByString(a,H)),B(0)):l(a)}),[a,H]),t?(0,Z.jsx)(I.Z,{}):0===o.length?(0,Z.jsx)(m.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,Z.jsx)(h.Z,{color:"textSecondary",variant:"h5",children:"There are no orders!"})}):(0,Z.jsxs)("div",{className:"w-full flex flex-col",children:[(0,Z.jsx)(C.Z,{className:"grow overflow-x-auto",children:(0,Z.jsxs)(S.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,Z.jsx)(U,{selectedOrderIds:u,order:_,onSelectAllClick:function(e){e.target.checked?p(o.map((function(e){return e.id}))):p([])},onRequestSort:function(e,r){var t=r,a="desc";_.id===r&&"desc"===_.direction&&(a="asc"),q({direction:a,id:t})},rowCount:o.length,onMenuItemClick:function(){p([])}}),(0,Z.jsx)(y.Z,{children:P.Z.orderBy(o,[function(e){switch(_.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[_.id]}}],[_.direction]).slice(W*z,W*z+z).map((function(r){var t=-1!==u.indexOf(r.id);return(0,Z.jsxs)(F.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,onClick:function(t){return a=r,void e.navigate("/admin/orders/".concat(a.id));var a},children:[(0,Z.jsx)(k.Z,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,Z.jsx)(w.Z,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,r){var t=u.indexOf(r),a=[];-1===t?a=a.concat(u,r):0===t?a=a.concat(u.slice(1)):t===u.length-1?a=a.concat(u.slice(0,-1)):t>0&&(a=a.concat(u.slice(0,t),u.slice(t+1))),p(a)}(0,r.id)}})}),(0,Z.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:r.id}),(0,Z.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:r.reference}),(0,Z.jsx)(k.Z,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:"".concat(r.customer.firstName," ").concat(r.customer.lastName)}),(0,Z.jsxs)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[(0,Z.jsx)("span",{children:"$"}),r.total]}),(0,Z.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:r.payment.method}),(0,Z.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:(0,Z.jsx)(R.Z,{name:r.status[0].name})}),(0,Z.jsx)(k.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:r.date})]},r.id)}))})]})}),(0,Z.jsx)(N.Z,{className:"shrink-0 border-t-1",component:"div",count:o.length,rowsPerPage:z,page:W,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,r){B(r)},onRowsPerPageChange:function(e){E(e.target.value)}})]})})),K=(0,o.ZP)(n.Z)((function(e){var r=e.theme;return{"& .FusePageCarded-header":(0,a.Z)({minHeight:72,height:72,alignItems:"center"},r.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));var L=(0,i.Z)("eCommerceApp",l.Z)((function(){return(0,Z.jsx)(K,{header:(0,Z.jsx)(v,{}),content:(0,Z.jsx)(q,{}),innerScroll:!0})}))},42183:function(e,r,t){var a=t(9038),n=t(42492),i=(0,a.UY)({products:n.ZP});r.Z=i}}]);