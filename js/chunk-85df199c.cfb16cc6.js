(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85df199c"],{"1c25":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"starship container"},[i("img",{staticClass:"starship__img",attrs:{src:e("946a")}}),t.starshipData.name&&!t.isLoading?[i("h1",[t._v(t._s(t.starshipData.name))]),t._l(t.displayAttributes,(function(s){return[i("p",{key:s.key,staticClass:"starship__attribute",attrs:{"data-tooltip":s.description}},[i("span",{staticClass:"starship__attribute-title"},[t._v(" "+t._s(s.title+": ")+" ")]),i("span",{staticClass:"starship__attribute-value"},[t._v(" "+t._s(t.starshipData[s.key])+" ")])])]})),t._l(t.displayLists,(function(s){return[t.starshipData[s.key]?i("p",{key:s.key,staticClass:"starship__attribute",attrs:{"data-tooltip":s.description}},[i("span",{staticClass:"starship__attribute-title"},[t._v(" "+t._s(s.title+": ")+" ")]),i("span",{staticClass:"starship__attribute-value"},[t._v(" "+t._s(t.starshipData[s.key])+" ")])]):t._e()]}))]:t.isLoading?i("Spinner"):i("h1",[t._v("Starship not found")])],2)},a=[],r=e("2375"),n={name:"StarshipPage",components:{Spinner:r["a"]},data:function(){return{displayAttributes:[{key:"name",title:"Name",description:'The name of this starship. The common name, such as "Death Star".'},{key:"model",title:"Model",description:'The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".'},{key:"starship_class",title:"Class",description:'The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"'},{key:"manufacturer",title:"Manufacturer",description:"The manufacturer of this starship. Comma separated if more than one."},{key:"cost_in_credits",title:"Cost in galactic credits",description:"The cost of this starship new, in galactic credits."},{key:"length",title:"Length",description:"The length of this starship in meters."},{key:"crew",title:"Crew",description:"The number of personnel needed to run or pilot this starship."},{key:"passengers",title:"The number of passengers",description:" The number of non-essential people this starship can transport."},{key:"max_atmosphering_speed",title:"Max atmosphering speed",description:'The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.'},{key:"hyperdrive_rating",title:"Hyperdrive rating",description:" The class of this starships hyperdrive."},{key:"MGLT",title:"The number of Megalights in hour",description:'The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.'},{key:"cargo_capacity",title:"Cargo capacity",description:" The maximum number of kilograms that this starship can transport."},{key:"consumables",title:"Consumables",description:"The maximum length of time that this starship can provide consumables for its entire crew without having to resupply."}],displayLists:[{key:"films",title:"Films",description:"A list of films that this starship has appeared in."},{key:"pilots",title:"Pilots",description:"A list of people that this starship has been piloted by."}]}},computed:{starshipData:function(){return this.$store.state.starships.starshipData},isLoading:function(){return this.$store.state.starships.isLoading}}},o=n,h=(e("4eb1"),e("2877")),p=Object(h["a"])(o,i,a,!1,null,"9f2ba7fa",null);s["default"]=p.exports},"4eb1":function(t,s,e){"use strict";e("a646")},"946a":function(t,s,e){t.exports=e.p+"img/starship.cfae409f.jpeg"},a646:function(t,s,e){}}]);
//# sourceMappingURL=chunk-85df199c.cfb16cc6.js.map