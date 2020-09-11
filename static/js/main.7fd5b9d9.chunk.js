(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{23:function(e,t,n){e.exports=n(69)},28:function(e,t,n){},29:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),c=(n(28),n(5)),l=n(17),s=n(18),u=n(20),m=n(22),h=(n(29),n(21)),f=function(e){var t=Object(a.useState)(""),n=Object(h.a)(t,2),r=n[0],i=n[1];return o.a.createElement("header",{className:"Searchbar"},o.a.createElement("form",{className:"SearchForm",onSubmit:function(t){return function(t){t.preventDefault(),r&&e.onSubmit(r)}(t)}},o.a.createElement("button",{type:"submit",className:"SearchForm-button"},o.a.createElement("span",{className:"SearchForm-button-label"},"Search")),o.a.createElement("input",{value:r,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){return function(e){e.preventDefault(),i(e.target.value)}(e)}})))},d=function(e){return o.a.createElement("li",{className:"ImageGalleryItem"},o.a.createElement("img",{onClick:function(t){return function(t){t.preventDefault(),e.onClick(e.image.id)}(t)},src:e.image.webformatURL,alt:e.image.webformatURL,className:"ImageGalleryItem-image"}))},g=function(e){var t=function(t){e.onClick(t)};return o.a.createElement("ul",{className:"ImageGallery"},e.images.map((function(e){return o.a.createElement(d,{key:e.id,image:e,onClick:t})})))},p=n(19),v=n.n(p),E=function(){return o.a.createElement("div",{className:"Loader"},o.a.createElement(v.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:0}))},y=function(e){return o.a.createElement("button",{className:"Button",onClick:function(t){return function(t){t.preventDefault(),e.onClick()}(t)}},"Load more")},w=(n(51),n(6)),b=n.n(w);b.a.defaults.baseURL="https://pixabay.com/api";var k=function(e){return o.a.createElement("div",{className:"Overlay",onClick:function(t){t.preventDefault(),t.target instanceof HTMLDivElement&&e.onClose(e.image.id)}},o.a.createElement("div",{className:"Modal"},o.a.createElement("img",{src:e.image,alt:e.image})))},S=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],page:1,query:"",isLoading:!1,showFull:null},e.handleImageClick=function(t){var n=e.state.images.find((function(e){return e.id===t}));e.setState({showFull:n?n.largeImageURL:null})},e.handleCloseModal=function(){e.setState({showFull:null})},e.handleCloseModalEsc=function(t){"Escape"===t.code&&e.handleCloseModal()},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){n&&setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),0)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return this.state.images.length>t.images.length}},{key:"handleSearchImages",value:function(e){var t=this;this.setState((function(){return{page:1}}),(function(){return t.setState({query:e},(function(){return t.loadImages(!1)}))}))}},{key:"loadImages",value:function(e,t){var n=this;this.setState({isLoading:!0},(function(){(function(e,t){var n="/?q=".concat(e,"&page=").concat(t,"&key=18060216-54e3ca58d741e1dcf99f0c9a1&image_type=photo&orientation=horizontal&per_page=12");return b.a.get(n).then((function(e){return e.data.hits})).catch((function(e){return console.warn(e),e}))})(n.state.query,n.state.page).then((function(a){n.setState((function(){return e?{images:[].concat(Object(c.a)(n.state.images),Object(c.a)(a))}:{images:Object(c.a)(a)}}),(function(){t&&t()}))})).catch((function(e){console.warn(e)})).finally((function(){return n.setState({isLoading:!1})}))}))}},{key:"handleLoadMore",value:function(){var e=this;this.setState((function(){return{page:e.state.page+1}}),(function(){e.loadImages(!0)}))}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModalEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModalEsc)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(f,{onSubmit:function(t){return e.handleSearchImages(t)}}),this.state.query?o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{images:this.state.images,onClick:function(t){return e.handleImageClick(t)}}),this.state.images.length>0&&!this.state.isLoading?o.a.createElement(y,{onClick:function(){return e.handleLoadMore()}}):""):"",this.state.isLoading?o.a.createElement(E,null):"",this.state.showFull?o.a.createElement(k,{image:this.state.showFull,onClose:function(){return e.handleCloseModal()}}):"")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7fd5b9d9.chunk.js.map