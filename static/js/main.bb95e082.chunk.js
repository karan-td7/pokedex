(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(21),c=n.n(r),o=n(23),i=n(7),s=n(71),l=n(128),u=n(137),j=n(129),d=n(134),p=n(39),b=n.n(p),h="https://pokeapi.co/api/v2/pokemon",m=n(130),x=n(131),O=n(132),f=n(133),g=n(2),v=Object(l.a)((function(e){return{card:{cursor:"pointer",backgroundColor:"black",color:"green","&:hover":{backgroundColor:"rgb(34, 34 , 34)"}},cardMedia:{margin:"auto",width:130,height:130},cardContent:{textAlign:"center"},link:{textDecoration:"none"}}}));function k(e){var t=v(),n=e.pokemon,a=e.image,r=n.id,c=n.name;return Object(g.jsx)(j.a,{item:!0,xs:12,sm:2,children:Object(g.jsx)(o.b,{to:"/pokemon/"+r,className:t.link,children:Object(g.jsxs)(m.a,{className:t.card,children:[Object(g.jsx)(x.a,{className:t.cardMedia,image:a}),Object(g.jsx)(O.a,{className:t.cardContent,children:Object(g.jsxs)(f.a,{children:["\u267e\ufe0f ",c," \u267e\ufe0f"]})})]})})},r)}var N=Object(l.a)((function(e){return{PokedexContainer:{textAlign:"center",padding:"70px 10px 0px 10px",backgroundColor:"rgb(68, 68, 68)"}}}));function C(){var e=N(),t=Object(a.useState)(null),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b.a.get(h+"?limit=800").then((function(e){if(e.status>=200&&e.status<300){var t=e.data.results,n=[];t.forEach((function(e,t){var a={id:++t,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+t+".png",name:e.name};n.push(a)})),c(n)}}))}),[]),Object(g.jsx)(u.a,{children:r?Object(g.jsx)(j.a,{className:e.PokedexContainer,container:!0,spacing:2,children:r.map((function(e){return Object(g.jsx)(k,{pokemon:e,image:e.url},e.id)}))}):Object(g.jsx)(d.a,{style:{marginTop:100}})})}var y=n(135),T=n(136),w=Object(l.a)((function(e){return{AppBar:{backgroundColor:"green"},link:{textDecoration:"none"},title:{cursor:"pointer",color:"black"}}}));function A(){var e=w();return Object(g.jsx)(y.a,{className:e.AppBar,postion:"fixed",children:Object(g.jsxs)(T.a,{children:[Object(g.jsx)(o.b,{to:"/",className:e.link,children:Object(g.jsx)(f.a,{className:e.title,variant:"h6",children:"Pokedex"})}),Object(g.jsxs)(o.b,{to:"/favourites",className:e.link,children:[Object(g.jsx)(f.a,{className:e.title,variant:"h6",style:{marginLeft:15},children:"Favourites"}),","]})]})})}var I=n(42),F=n(43),E=n(45),P=n(44),S=n(138),B=n(6),D=n(68),M=n.n(D),_=n(25),z="TOGGLE_FAVOURITE",G=function(e){Object(E.a)(n,e);var t=Object(P.a)(n);function n(e){var a;return Object(I.a)(this,n),(a=t.call(this,e)).state={pokemon:null},a}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match,n=(null===t||void 0===t?void 0:t.params).id;b.a.get(h+"/"+n).then((function(t){t.status>=200&&t.status<300&&e.setState({pokemon:t.data})}))}},{key:"favouriteChecker",value:function(e){var t,n=!1;return null===(t=this.props.favourites)||void 0===t||t.map((function(t){t.id===e.id&&(n=!0)})),n}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.pokemon;if(n){var a=n.name,r=n.sprites,c=n.height,o=n.weight,i=n.types;return console.log(r),Object(g.jsx)(u.a,{children:Object(g.jsxs)(u.a,{className:t.pokedexContainer,children:[Object(g.jsx)(f.a,{className:t.textTitle,variant:"h1",children:a}),Object(g.jsx)("img",{className:t.pokemonImage,src:r.front_default}),Object(g.jsxs)(u.a,{className:t.pokemonInfoContainer,children:[Object(g.jsx)("hr",{className:t.seperator}),Object(g.jsxs)(j.a,{container:!0,children:[Object(g.jsx)(j.a,{item:!0,md:1,children:Object(g.jsx)(S.a,{className:t.favourite,onClick:function(){return e.props.toggleFavourite(n)},children:Object(g.jsx)(M.a,{style:{color:this.favouriteChecker(n)?"red":"white",fontSize:40}})})}),Object(g.jsx)(j.a,{item:!0,md:2,children:Object(g.jsxs)(f.a,{className:t.text,children:["Name",Object(g.jsx)("hr",{className:t.seperator}),a]})}),Object(g.jsx)(j.a,{item:!0,md:2,children:Object(g.jsxs)(f.a,{className:t.text,children:["Height",Object(g.jsx)("hr",{className:t.seperator}),c,"m"]})}),Object(g.jsx)(j.a,{item:!0,md:2,children:Object(g.jsxs)(f.a,{className:t.text,children:["Weight",Object(g.jsx)("hr",{className:t.seperator}),o,"kg"]})}),i.map((function(e){console.log(e);var n=e.type.name;return Object(g.jsx)(j.a,{item:!0,md:2,children:Object(g.jsxs)(f.a,{className:t.text,children:["Type",Object(g.jsx)("hr",{className:t.seperator}),n]})})}))]})]})]})})}return Object(g.jsx)(d.a,{})}}]),n}(a.Component),J=Object(B.a)((function(e){return{pokedexContainer:{height:"80vh",backgroundColor:" black",color:"green",marginTop:75,textAlign:"center",borderRadius:5,paddingTop:30},textTitle:{textTransform:"upperCase",FontFace:"Sans-serif"},pokemonImage:{width:"170px",height:" 170px",backgroundColor:"black"},pokemonInfoContainer:{bottom:60,position:"absolute",width:"98.7%"},seperator:{height:"0.0.1mm",width:"95%"},favourite:{height:50,width:50,marginTop:15},text:{fontSize:30}}}))(Object(_.b)((function(e){return{favourites:e.favourites}}),(function(e){return{toggleFavourite:function(t){return e(function(e){return{type:z,payload:e}}(t))}}}))(G)),L=n(27),R=n(49),H=n(69),U=n.n(H),V=n(50),W=n(51),q={favourites:[]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;if(t.type===z){var n=t.payload,a=e.favourites.find((function(e){return n.id===e.id}));return Object(W.a)(Object(W.a)({},e),{},{favourites:a?Object(V.a)(e.favourites.filter((function(e){return e.id!==a.id}))):[].concat(Object(V.a)(e.favourites),[t.payload])})}return e},Q={key:"root",storage:U.a},X=Object(R.a)(Q,K),Y=Object(L.b)(X),Z=Object(R.b)(Y),$=n(70),ee=function(e){Object(E.a)(n,e);var t=Object(P.a)(n);function n(){return Object(I.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.favourites;return Object(g.jsx)(u.a,{children:Object(g.jsx)(j.a,{container:!0,spacing:2,className:t.pokedexContainer,children:n.map((function(e){return Object(g.jsx)(k,{pokemon:e,image:e.sprites.front_default},e.id)}))})})}}]),n}(a.Component),te=Object(B.a)((function(e){return{pokedexContainer:{height:"100vh",backgroundColor:"rgb(68,68,68)",paddingTop:80,textAlign:"center"}}}))(Object(_.b)((function(e){return{favourites:e.favourites}}),(function(e){return{}}))(ee));function ne(){return Object(g.jsx)(_.a,{store:Y,children:Object(g.jsx)($.a,{loading:null,persistor:Z,children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(A,{}),Object(g.jsx)(i.a,{exact:!0,path:"/",component:C}),Object(g.jsx)(i.a,{exact:!0,path:"/pokemon/:id",component:J}),Object(g.jsx)(i.a,{exact:!0,path:"/favourites",component:te})]})})})}c.a.render(Object(g.jsx)(ne,{}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.bb95e082.chunk.js.map