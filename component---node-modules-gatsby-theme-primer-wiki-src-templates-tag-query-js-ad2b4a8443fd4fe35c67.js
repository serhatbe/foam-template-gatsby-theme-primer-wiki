"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[117],{99017:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(19692),a=l(13465),r=l(67294),i=l(87722),o=l(7431);var s=function(e){var t,l,n,s=e.location,d=e.sidebarItems,c=(t="sidebar",l=r.useRef(),n=r.useCallback((function(e){return window.sessionStorage.setItem(t,e.target.scrollTop)}),[t]),r.useEffect((function(){var e=window.sessionStorage.getItem(t);e&&l.current&&(l.current.scrollTop=e)}),[t]),{ref:l,onScroll:n});return Array.isArray(d)&&d.length>0?r.createElement(a.Z,{display:["none",null,null,"block"],position:"sticky",top:i.M,height:"calc(100vh - "+i.M+"px)",minWidth:260,maxWidth:360,color:"auto.gray.8",bg:"auto.gray.0"},r.createElement(a.Z,Object.assign({borderStyle:"solid",borderColor:"border.primary"},c,{borderWidth:0,borderRightWidth:1,borderRadius:0,height:"100%",style:{overflow:"auto"}}),r.createElement(a.Z,{display:"flex",flexDirection:"column"},r.createElement(o.Z,{location:s,items:d})))):null},d=l(13081),c=l(2393);var u=function(e){var t=e.children,l=e.location,n=e.pageContext,o=n.sidebarItems,u=n.tagsGroups,m=n.slug,p=(0,d.u)(o,u),g=(0,c.Z)();return r.createElement(a.Z,{display:"flex",flexDirection:"column",minHeight:"100vh",bg:"bg.primary",color:"text.primary"},r.createElement(i.Z,{currentSlug:m,location:l,sidebarItems:p,tagsGroups:u}),r.createElement(f,{display:"flex",flex:"1 1 auto",flexDirection:"row"},r.createElement(s,{location:l,sidebarItems:p}),r.createElement(a.Z,{as:"main",flex:"1",maxWidth:g.contentMaxWidth},t)))},f=(0,n.default)(a.Z).withConfig({displayName:"layout___StyledBox",componentId:"sc-7a5ttt-0"})({zIndex:0})},28565:function(e,t,l){var n=l(67294),a=l(81969),r=l(13465),i=l(65754),o=l(2393);t.Z=function(e){var t=e.nodes,l=e.shouldShowInstantView,s=void 0!==l&&l,d=e.forceMobile,c=void 0!==d&&d,u=(0,o.Z)(),f=t,m=function(e){return n.createElement(a.Z.a,Object.assign({},e,{references:s?f:[]}))};return n.createElement(r.Z,null,n.createElement(a.Z.ul,null,f&&f.filter((function(e){return"/404/"!==e.fields.slug&&(!e.frontmatter||!0!==e.frontmatter.draft)})).map((function(e){return n.createElement("li",{key:e.fields.slug},n.createElement(m,{href:e.fields.slug},e.fields.title),u.shouldShowLastUpdated&&e.fields.lastUpdated&&!c&&n.createElement(i.Z,{display:["none",null,null,"inline-block"],color:"text.placeholder",fontSize:1},"  - ",u.lastUpdatedText," ",e.fields.lastUpdated),u.shouldShowLastUpdated&&e.fields.lastUpdated&&n.createElement(r.Z,{display:c?"block":["block",null,null,"none"],color:"text.placeholder",fontSize:1,mb:2,mt:1},u.lastUpdatedText," ",e.fields.lastUpdated))}))))}},60706:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var n=l(67294),a=l(99017),r=l(81705),i=l(13465),o=l(58594),s=l.n(o),d=l(28565),c=l(81969),u=function(e){var t=e.data,l=e.pageContext,o=e.location,u=t.site.pathPrefix||"",f=l.slug,m=s()(u||"/",f),p=t.site.siteMetadata.siteUrl,g=s()(p,m),h=t.allMdx.nodes.sort((function(e,t){var l=new Date(e.fields.lastUpdatedAt||0).getTime();return new Date(t.fields.lastUpdatedAt||0).getTime()-l})),b=null,x=null;h.length>0&&(h[h.length-1].fields.gitCreatedAt&&(b=new Date(h[h.length-1].fields.gitCreatedAt)),h[0].fields.lastUpdatedAt&&(x=new Date(h[0].fields.lastUpdatedAt)));var y=l.tag,w="#"+y,E=h.map((function(e){return e.fields.title})).join(", "),Z="All posts about #"+y+", "+E.slice(0,256),v={title:w,frontmatterTitle:"",description:Z,rawBody:E,excerpt:Z,datePublished:b,dateModified:x,category:y,imageUrl:null,imageAlt:"",url:g,slug:f,tags:[y]};return n.createElement(a.Z,{pageContext:l,location:o},n.createElement(r.Z,{post:v}),n.createElement(i.Z,{py:"2",px:[4,5,6,7]},n.createElement(c.Z.h2,null,"# ",y),n.createElement(d.Z,{nodes:t.allMdx.nodes,tag:y,shouldShowInstantView:!0})))}},13081:function(e,t,l){l.d(t,{u:function(){return n}});var n=function(e,t){return e.length>0?e:t.length>0?[{title:"Tags",items:t}]:[]}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-primer-wiki-src-templates-tag-query-js-ad2b4a8443fd4fe35c67.js.map