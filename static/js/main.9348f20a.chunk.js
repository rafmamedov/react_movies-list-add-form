(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(14),i(9)),s=i(2),l=i(1),r=(i(15),i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=function(e){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(e)},j=i(7),b=i.n(j);var h=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.required,o=void 0!==c&&c,d=e.onChange,m=void 0===d?function(){}:d,j=e.validationCallback,h=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),u=Object(s.a)(h,1)[0],g=Object(l.useState)(!1),O=Object(s.a)(g,2),v=O[0],p=O[1],w=Object(l.useState)(!0),f=Object(s.a)(w,2),x=f[0],M=f[1],N=v&&o&&(!i||!x);return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:u,children:n}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:u,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":N}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){if(p(!0),j){var e=j(i);M(e)}}})}),N&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},u=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(l.useState)(""),d=Object(s.a)(o,2),j=d[0],b=d[1],u=Object(l.useState)(""),g=Object(s.a)(u,2),O=g[0],v=g[1],p=Object(l.useState)(""),w=Object(s.a)(p,2),f=w[0],x=w[1],M=Object(l.useState)(""),N=Object(s.a)(M,2),U=N[0],y=N[1],I=Object(l.useState)(""),T=Object(s.a)(I,2),k=T[0],B=T[1],_=!j.length||!f.length||!U.length||!k.length||!m(f)||!m(U);return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:j,description:O,imgUrl:f,imdbUrl:U,imdbId:k}),c(n+1),b(""),v(""),x(""),y(""),B("")},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(h,{name:"title",label:"Title",value:j,onChange:b,required:!0}),Object(r.jsx)(h,{name:"description",label:"Description",value:O,onChange:v}),Object(r.jsx)(h,{name:"imgUrl",label:"Image URL",value:f,onChange:x,validationCallback:m,required:!0}),Object(r.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:U,onChange:y,validationCallback:m,required:!0}),Object(r.jsx)(h,{name:"imdbId",label:"Imdb ID",value:k,onChange:B,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:_,children:"Add"})})})]},n)},g=i(8),O=function(){var e=Object(l.useState)(g),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(u,{onAdd:function(e){return a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.9348f20a.chunk.js.map