"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[36],{362:function(n,t,e){e.d(t,{e:function(){return _}});var r,a,i,o,c,u,s,p=e(6871),l=e(168),f=e(501),d=e(6031),g=(0,d.ZP)(f.rU)(r||(r=(0,l.Z)(["\n  text-decoration: none;\n"]))),m=d.ZP.div(a||(a=(0,l.Z)(["\n  width: 300px;\n  flex-basis: calc(100% / 4 - 30px);\n  margin-top: 30px;\n  margin-left: 30px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: rgb(255, 215, 0);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  transform: scale(1);\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n    transition: all 250ms linear;\n  }\n"]))),x=d.ZP.img(i||(i=(0,l.Z)(["\n  width: 100%;\n  height: 400px;\n"]))),h=d.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 5px solid rgb(0, 87, 183);\n"]))),v=d.ZP.p(c||(c=(0,l.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  padding: 10px 20px;\n  color: #000;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]))),w=e(184),b=function(n){var t=n.movie,e=t.poster_path,r=t.name,a=t.title,i=t.id,o=(0,p.TH)();return(0,w.jsx)(g,{to:"/movies/".concat(i),state:{from:o.pathname+o.search},children:(0,w.jsxs)(m,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(x,{src:e?"https://image.tmdb.org/t/p/w300/".concat(e):"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png",alt:a})}),(0,w.jsx)(h,{children:(0,w.jsx)(v,{children:null!==a&&void 0!==a?a:r})})]})})},Z=d.ZP.div(u||(u=(0,l.Z)(["\n  max-width: 1400px;\n  margin: 0 auto;\n"]))),y=d.ZP.ul(s||(s=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -30px;\n  margin-left: -30px;\n  flex-wrap: wrap;\n  padding-top: 50px;\n  padding-bottom: 50px;\n"]))),_=function(n){var t=n.movies;return(0,w.jsx)(Z,{children:(0,w.jsx)(y,{children:t.map((function(n){return(0,w.jsx)(b,{movie:n},n.id)}))})})}},36:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a=e(2982),i=e(885),o=e(2791),c=e(4697),u=e(9978),s=e(362),p=e(168),l=e(6031).ZP.h2(r||(r=(0,p.Z)(["\n  padding-left: 50px;\n  font-size: 48px;\n  margin-top: 50px;\n  color: rgb(255, 215, 0);\n"]))),f=e(184),d=function(){var n=(0,o.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],p=(0,o.useState)(""),d=(0,i.Z)(p,2),g=d[0],m=d[1];return(0,o.useEffect)((function(){(0,c.Hg)().then((function(n){return r((0,a.Z)(n))})).catch((function(n){return m(n.message)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{children:"Trending Movies"}),!e&&(0,f.jsx)(u.a,{}),e&&(0,f.jsx)(s.e,{movies:e}),g&&(0,f.jsx)("p",{children:"Something went wrong, please try again later!"})]})}},4697:function(n,t,e){e.d(t,{Hg:function(){return p},IQ:function(){return f},Jh:function(){return d},s_:function(){return l},z1:function(){return s}});var r=e(5861),a=e(7757),i=e.n(a),o=e(4569),c="c0a65f93ad9c41c31d77ca2daaf180b1",u=e.n(o)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:c}}),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie?api_key=".concat(c,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/trending/all/week?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2982:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(907);var a=e(181);function i(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=36.fd588c9c.chunk.js.map