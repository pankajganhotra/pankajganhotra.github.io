"use strict";(self.webpackChunkcabro_macho_fuse=self.webpackChunkcabro_macho_fuse||[]).push([[722],{47619:function(e,r,s){s.d(r,{Z:function(){return T}});var a=s(30168),t=s(4942),n=s(92550),i=s(88564),l=s(83061),d=s(47313),c=s(70499),o=s(19860),h=s(26159),m=s(84669),x=s(45894),u=s(46417);var p=function(e){var r=(0,o.Z)(),s=(0,x.v9)((0,m.lK)(r.palette.primary.main));return(0,u.jsx)("div",{className:"FusePageCarded-header",children:e.header&&(0,u.jsx)(h.Z,{theme:s,children:e.header})})},j=s(1413),g=s(29439),f=s(46923),b=s(57451),Z=s(60211);var v=function(e){var r=(0,o.Z)(),s=(0,x.v9)((0,m.lK)(r.palette.primary.main));return(0,u.jsxs)(u.Fragment,{children:[e.header&&(0,u.jsx)(h.Z,{theme:s,children:(0,u.jsx)("div",{className:(0,l.Z)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&(0,u.jsx)(n.Z,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function N(e,r){var s=(0,d.useState)(!1),a=(0,g.Z)(s,2),t=a[0],n=a[1];(0,d.useImperativeHandle)(r,(function(){return{toggleSidebar:i}}));var i=function(){n(!t)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(b.Z,{lgUp:"permanent"===e.variant,children:(0,u.jsx)(Z.Z,{variant:"temporary",anchor:e.position,open:t,onOpen:function(e){},onClose:function(e){return i()},disableSwipeToOpen:!0,classes:{root:(0,l.Z)("FusePageCarded-sidebarWrapper",e.variant),paper:(0,l.Z)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,u.jsx)(v,(0,j.Z)({},e))})}),"permanent"===e.variant&&(0,u.jsx)(b.Z,{lgDown:!0,children:(0,u.jsx)(f.ZP,{variant:"permanent",className:(0,l.Z)("FusePageCarded-sidebarWrapper",e.variant),open:t,classes:{paper:(0,l.Z)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:(0,u.jsx)(v,(0,j.Z)({},e))})})]})}var y,C=(0,d.forwardRef)(N),S=(0,i.ZP)("div")((function(e){var r=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:r.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:P,background:"linear-gradient(to right, ".concat(r.palette.primary.dark," 0%, ").concat(r.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":(0,t.Z)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},r.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:F,minHeight:F,maxHeight:F,display:"flex",color:r.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:r.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:r.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:k,minHeight:k,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(r.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":(0,t.Z)({},r.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":(0,t.Z)({},r.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:w,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:P,minHeight:P,color:r.palette.primary.contrastText,backgroundColor:r.palette.primary.dark,"&.permanent":(0,t.Z)({},r.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":(0,t.Z)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:r.palette.background.default,color:r.palette.text.primary},r.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),w=240,P=200,k=64,F=P-k,A=(0,d.forwardRef)((function(e,r){var s=(0,d.useRef)(null),a=(0,d.useRef)(null),t=(0,d.useRef)(null),i=e.rightSidebarHeader||e.rightSidebarContent,o=e.leftSidebarHeader||e.leftSidebarContent;return(0,d.useImperativeHandle)(r,(function(){return{rootRef:t,toggleLeftSidebar:function(){s.current.toggleSidebar()},toggleRightSidebar:function(){a.current.toggleSidebar()}}})),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{styles:function(r){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),(0,u.jsxs)(S,{className:(0,l.Z)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:t,children:[(0,u.jsx)("div",{className:"FusePageCarded-topBg"}),(0,u.jsxs)("div",{className:"flex container w-full",children:[o&&(0,u.jsx)(C,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:s,rootRef:t}),(0,u.jsxs)("div",{className:(0,l.Z)("FusePageCarded-contentWrapper",o&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",i&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[(0,u.jsx)(p,{header:e.header}),(0,u.jsxs)("div",{className:(0,l.Z)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&(0,u.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&(0,u.jsx)(n.Z,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),i&&(0,u.jsx)(C,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:t})]})]})]})}));A.defaultProps={};var T=(0,d.memo)((0,i.ZP)(A)(y||(y=(0,a.Z)([""]))))},87722:function(e,r,s){s.r(r),s.d(r,{default:function(){return V}});var a=s(29439),t=s(4942),n=s(20408),i=s(47619),l=s(69099),d=s(71263),c=s(88564),o=s(19860),h=s(65280),m=s(82294),x=s(61113),u=(s(23132),s(51280)),p=s(47313),j=s(45894),g=s(29466),f=s(97890),b=s(69649),Z=(s(42183),s(44784)),v=s(73428),N=s(93405),y=s(66835),C=s(57861),S=s(67478),w=s(23477),P=s(24076),k=s(46417),F=(0,c.ZP)("div")((function(e){var r=e.theme;return{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"".concat(0,"!important")},"& th:last-child, & td:last-child":{paddingRight:"".concat(0,"!important")}},"& .divider":{width:1,backgroundColor:r.palette.divider,height:144},"& .seller":{backgroundColor:r.palette.primary.dark,color:r.palette.getContrastText(r.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:r.palette.getContrastText(r.palette.primary.dark),opacity:.5}}}})),A=function(e){var r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return(0,k.jsx)(F,{className:"grow shrink-0 p-0",children:e.order&&(0,k.jsx)(v.Z,{className:"w-xl mx-auto shadow-0",children:(0,k.jsxs)(N.Z,{className:"p-88 print:p-0",children:[(0,k.jsx)(x.Z,{color:"textSecondary",className:"mb-32",children:e.order.date}),(0,k.jsxs)("div",{className:"flex justify-between",children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("table",{className:"mb-16",children:(0,k.jsx)("tbody",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{className:"pb-4",children:(0,k.jsx)(x.Z,{className:"font-light",variant:"h6",color:"textSecondary",children:"INVOICE"})}),(0,k.jsx)("td",{className:"pb-4 px-8",children:(0,k.jsx)(x.Z,{className:"font-light",variant:"h6",color:"inherit",children:e.order.reference})})]})})}),(0,k.jsx)(x.Z,{color:"textSecondary",children:"".concat(e.order.customer.firstName," ").concat(e.order.customer.lastName)}),e.order.customer.invoiceAddress.address&&(0,k.jsx)(x.Z,{color:"textSecondary",children:e.order.customer.invoiceAddress.address}),e.order.customer.phone&&(0,k.jsx)(x.Z,{color:"textSecondary",children:e.order.customer.phone}),e.order.customer.email&&(0,k.jsx)(x.Z,{color:"textSecondary",children:e.order.customer.email})]}),(0,k.jsxs)("div",{className:"seller flex items-center p-16",children:[(0,k.jsx)("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),(0,k.jsx)("div",{className:"divider mx-8 h-96"}),(0,k.jsxs)("div",{className:"px-8",children:[(0,k.jsx)(x.Z,{color:"inherit",children:"FUSE INC."}),(0,k.jsx)(x.Z,{color:"inherit",children:"2810 Country Club Road Cranford, NJ 07016"}),(0,k.jsx)(x.Z,{color:"inherit",children:"+66 123 455 87"}),(0,k.jsx)(x.Z,{color:"inherit",children:"hello@fuseinc.com"}),(0,k.jsx)(x.Z,{color:"inherit",children:"www.fuseinc.com"})]})]})]}),(0,k.jsxs)("div",{className:"mt-64",children:[(0,k.jsxs)(y.Z,{className:"simple",children:[(0,k.jsx)(w.Z,{children:(0,k.jsxs)(P.Z,{children:[(0,k.jsx)(S.Z,{children:"PRODUCT"}),(0,k.jsx)(S.Z,{children:"PRICE"}),(0,k.jsx)(S.Z,{align:"right",children:"QUANTITY"}),(0,k.jsx)(S.Z,{align:"right",children:"TOTAL"})]})}),(0,k.jsx)(C.Z,{children:e.order.products.map((function(e){return(0,k.jsxs)(P.Z,{children:[(0,k.jsx)(S.Z,{children:(0,k.jsx)(x.Z,{variant:"subtitle1",children:e.name})}),(0,k.jsx)(S.Z,{align:"right",children:r.format(e.price)}),(0,k.jsx)(S.Z,{align:"right",children:e.quantity}),(0,k.jsx)(S.Z,{align:"right",children:r.format(e.price*e.quantity)})]},e.id)}))})]}),(0,k.jsx)(y.Z,{className:"simple mt-32",children:(0,k.jsxs)(C.Z,{children:[(0,k.jsxs)(P.Z,{children:[(0,k.jsx)(S.Z,{children:(0,k.jsx)(x.Z,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"SUBTOTAL"})}),(0,k.jsx)(S.Z,{align:"right",children:(0,k.jsx)(x.Z,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:r.format(e.order.subtotal)})})]}),(0,k.jsxs)(P.Z,{children:[(0,k.jsx)(S.Z,{children:(0,k.jsx)(x.Z,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"TAX"})}),(0,k.jsx)(S.Z,{align:"right",children:(0,k.jsx)(x.Z,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:r.format(e.order.tax)})})]}),(0,k.jsxs)(P.Z,{children:[(0,k.jsx)(S.Z,{children:(0,k.jsx)(x.Z,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:"DISCOUNT"})}),(0,k.jsx)(S.Z,{align:"right",children:(0,k.jsx)(x.Z,{className:"font-normal",variant:"subtitle1",color:"textSecondary",children:r.format(e.order.discount)})})]}),(0,k.jsxs)(P.Z,{children:[(0,k.jsx)(S.Z,{children:(0,k.jsx)(x.Z,{className:"font-light",variant:"h4",color:"textSecondary",children:"TOTAL"})}),(0,k.jsx)(S.Z,{align:"right",children:(0,k.jsx)(x.Z,{className:"font-light",variant:"h4",color:"textSecondary",children:r.format(e.order.total)})})]})]})})]}),(0,k.jsxs)("div",{className:"mt-96",children:[(0,k.jsx)(x.Z,{className:"mb-24 print:mb-12",variant:"body1",children:"Please pay within 15 days. Thank you for your business."}),(0,k.jsxs)("div",{className:"flex",children:[(0,k.jsx)("div",{className:"shrink-0",children:(0,k.jsx)("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})}),(0,k.jsx)(x.Z,{className:"font-normal mb-64 px-24",variant:"caption",color:"textSecondary",children:"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."})]})]})]})})})},T=(0,p.memo)(A),I=s(52769),R=s(41872),O=s(98492),D=s(48119),H=s(22260),U=s(6306),W=s(84697),_=s(8489);function E(e){return(0,k.jsx)(H.Z,{title:e.text,placement:"top",children:(0,k.jsx)(d.Z,{className:"text-red",children:"place"})})}var q=function(){var e=(0,j.v9)((function(e){return e.eCommerceApp.order})),r=(0,p.useState)("shipping"),s=(0,a.Z)(r,2),t=s[0],n=s[1];return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:"pb-48",children:[(0,k.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,k.jsx)(d.Z,{color:"action",children:"account_circle"}),(0,k.jsx)(x.Z,{className:"h2 mx-12 font-medium",color:"textSecondary",children:"Customer"})]}),(0,k.jsxs)("div",{className:"mb-24",children:[(0,k.jsx)("div",{className:"table-responsive mb-48",children:(0,k.jsxs)("table",{className:"simple",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Name"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Email"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Phone"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Company"})})]})}),(0,k.jsx)("tbody",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsxs)("div",{className:"flex items-center",children:[(0,k.jsx)(D.Z,{src:e.customer.avatar}),(0,k.jsx)(x.Z,{className:"truncate mx-8",children:"".concat(e.customer.firstName," ").concat(e.customer.lastName)})]})}),(0,k.jsx)("td",{children:(0,k.jsx)(x.Z,{className:"truncate",children:e.customer.email})}),(0,k.jsx)("td",{children:(0,k.jsx)(x.Z,{className:"truncate",children:e.customer.phone})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.customer.company})})]})})]})}),(0,k.jsxs)(I.Z,{className:"border-0 shadow-0 overflow-hidden",expanded:"shipping"===t,onChange:function(){return n("shipping"!==t&&"shipping")},children:[(0,k.jsx)(O.Z,{expandIcon:(0,k.jsx)(U.Z,{}),classes:{root:"border border-solid rounded-16 mb-16"},children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Shipping Address"})}),(0,k.jsxs)(R.Z,{className:"flex flex-col md:flex-row -mx-8",children:[(0,k.jsx)(x.Z,{className:"w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16",children:e.customer.shippingAddress.address}),(0,k.jsx)("div",{className:"w-full h-320 rounded-16 overflow-hidden mx-8",children:(0,k.jsx)(W.ZP,{bootstrapURLKeys:{key:""},defaultZoom:15,defaultCenter:[e.customer.shippingAddress.lat,e.customer.shippingAddress.lng],children:(0,k.jsx)(E,{text:e.customer.shippingAddress.address,lat:e.customer.shippingAddress.lat,lng:e.customer.shippingAddress.lng})})})]})]}),(0,k.jsxs)(I.Z,{className:"shadow-0 border-0 overflow-hidden",expanded:"invoice"===t,onChange:function(){return n("invoice"!==t&&"invoice")},children:[(0,k.jsx)(O.Z,{expandIcon:(0,k.jsx)(U.Z,{}),classes:{root:"border border-solid rounded-16 mb-16"},children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Invoice Address"})}),(0,k.jsxs)(R.Z,{className:"flex flex-col md:flex-row -mx-8",children:[(0,k.jsx)(x.Z,{className:"w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16",children:e.customer.invoiceAddress.address}),(0,k.jsx)("div",{className:"w-full h-320 rounded-16 overflow-hidden mx-8",children:(0,k.jsx)(W.ZP,{bootstrapURLKeys:{key:""},defaultZoom:15,defaultCenter:[e.customer.invoiceAddress.lat,e.customer.invoiceAddress.lng],children:(0,k.jsx)(E,{text:e.customer.invoiceAddress.address,lat:e.customer.invoiceAddress.lat,lng:e.customer.invoiceAddress.lng})})})]})]})]})]}),(0,k.jsxs)("div",{className:"pb-48",children:[(0,k.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,k.jsx)(d.Z,{color:"action",children:"access_time"}),(0,k.jsx)(x.Z,{className:"h2 mx-12 font-medium",color:"textSecondary",children:"Order Status"})]}),(0,k.jsx)("div",{className:"table-responsive",children:(0,k.jsxs)("table",{className:"simple",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Status"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Updated On"})})]})}),(0,k.jsx)("tbody",{children:e.status.map((function(e){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)(_.Z,{name:e.name})}),(0,k.jsx)("td",{children:e.date})]},e.id)}))})]})})]}),(0,k.jsxs)("div",{className:"pb-48",children:[(0,k.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,k.jsx)(d.Z,{color:"action",children:"attach_money"}),(0,k.jsx)(x.Z,{className:"h2 mx-12 font-medium",color:"textSecondary",children:"Payment"})]}),(0,k.jsx)("div",{className:"table-responsive",children:(0,k.jsxs)("table",{className:"simple",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"TransactionID"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Payment Method"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Amount"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Date"})})]})}),(0,k.jsx)("tbody",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.payment.transactionId})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.payment.method})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.payment.amount})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.payment.date})})]})})]})})]}),(0,k.jsxs)("div",{className:"pb-48",children:[(0,k.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,k.jsx)(d.Z,{color:"action",children:"local_shipping"}),(0,k.jsx)(x.Z,{className:"h2 mx-12 font-medium",color:"textSecondary",children:"Shipping"})]}),(0,k.jsx)("div",{className:"table-responsive",children:(0,k.jsxs)("table",{className:"simple",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Tracking Code"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Carrier"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Weight"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Fee"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Date"})})]})}),(0,k.jsx)("tbody",{children:e.shippingDetails.map((function(e){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.tracking})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.carrier})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.weight})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.fee})}),(0,k.jsx)("td",{children:(0,k.jsx)("span",{className:"truncate",children:e.date})})]},e.date)}))})]})})]})]})};var B=function(){var e=(0,j.v9)((function(e){return e.orders.order}));return(0,k.jsx)("div",{className:"table-responsive",children:(0,k.jsxs)("table",{className:"simple",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"ID"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Image"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Name"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Price"})}),(0,k.jsx)("th",{children:(0,k.jsx)(x.Z,{className:"font-semibold",children:"Quantity"})})]})}),(0,k.jsx)("tbody",{children:e.products.map((function(e){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{className:"w-64",children:e.id}),(0,k.jsx)("td",{className:"w-80",children:(0,k.jsx)("img",{className:"product-image",src:e.image,alt:"product"})}),(0,k.jsx)("td",{children:(0,k.jsx)(x.Z,{component:g.rU,to:"/apps/e-commerce/products/".concat(e.id),className:"truncate",style:{color:"inherit",textDecoration:"underline"},children:e.name})}),(0,k.jsx)("td",{className:"w-64 text-right",children:(0,k.jsxs)("span",{className:"truncate",children:["$",e.price]})}),(0,k.jsx)("td",{className:"w-64 text-right",children:(0,k.jsx)("span",{className:"truncate",children:e.quantity})})]},e.id)}))})]})})},L=(0,c.ZP)(i.Z)((function(e){var r=e.theme;return{"& .FusePageCarded-header":(0,t.Z)({minHeight:72,height:72,alignItems:"center"},r.breakpoints.up("sm"),{minHeight:136,height:136})}}));var V=function(e){var r=(0,j.I0)(),s=(0,j.v9)((function(e){return e.products.error})),t=(0,j.v9)((function(e){return e.products.loading})),i=((0,j.v9)((function(e){return e.products.product})),(0,o.Z)()),c=(0,f.UO)().order_id,v=(0,p.useState)(0),N=(0,a.Z)(v,2),y=N[0],C=N[1],S=(0,p.useState)(!1),w=(0,a.Z)(S,2),P=(w[0],w[1]);return(0,b.KW)((function(){r((0,Z.Ne)(c))}),[r,c]),(0,p.useEffect)((function(){return function(){r(resetOrder()),P(!1)}}),[r]),!t&&!order||s?(0,k.jsxs)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[(0,k.jsx)(x.Z,{color:"textSecondary",variant:"h5",children:"There is no such order!"}),(0,k.jsx)(l.Z,{className:"mt-24",component:g.rU,variant:"outlined",to:"/apps/e-commerce/orders",color:"inherit",children:"Go to Orders Page"})]}):t?(0,k.jsx)(n.Z,{}):(0,k.jsx)(L,{header:order&&(0,k.jsx)("div",{className:"flex flex-1 w-full items-center justify-between",children:(0,k.jsxs)("div",{className:"flex flex-1 flex-col items-center sm:items-start",children:[(0,k.jsx)(u.E.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:(0,k.jsxs)(x.Z,{className:"flex items-center sm:mb-12",component:g.rU,role:"button",to:"/apps/e-commerce/orders",color:"inherit",children:[(0,k.jsx)(d.Z,{className:"text-20",children:"ltr"===i.direction?"arrow_back":"arrow_forward"}),(0,k.jsx)("span",{className:"mx-4 font-medium",children:"Orders"})]})}),(0,k.jsx)("div",{className:"flex flex-col min-w-0 items-center sm:items-start",children:(0,k.jsxs)(u.E.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:[(0,k.jsx)(x.Z,{className:"text-16 sm:text-20 truncate font-semibold",children:"Order ".concat(order.reference)}),(0,k.jsx)(x.Z,{variant:"caption",className:"font-medium",children:"From ".concat(order.customer.firstName," ").concat(order.customer.lastName)})]})})]})}),contentToolbar:(0,k.jsxs)(m.Z,{value:y,onChange:function(e,r){C(r)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:[(0,k.jsx)(h.Z,{className:"h-64",label:"Order Details"}),(0,k.jsx)(h.Z,{className:"h-64",label:"Products"}),(0,k.jsx)(h.Z,{className:"h-64",label:"Invoice"})]}),content:order&&(0,k.jsxs)("div",{className:"p-16 sm:p-24 max-w-2xl w-full",children:[0===y&&(0,k.jsx)(q,{}),1===y&&(0,k.jsx)(B,{}),2===y&&(0,k.jsx)(T,{order:order})]}),innerScroll:!0})}},8489:function(e,r,s){var a=s(58970),t=s(83061),n=s(46417),i=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];r.Z=function(e){return(0,n.jsx)("div",{className:(0,t.Z)("inline text-12 font-semibold py-4 px-12 rounded-full truncate",a.Z.find(i,{name:e.name}).color),children:e.name})}},42183:function(e,r,s){var a=s(9038),t=s(42492),n=(0,a.UY)({products:t.ZP});r.Z=n}}]);