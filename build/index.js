new Vue({el:"#container",ready:function(){this.startFresh()},methods:{getNewDate:function(){var t=(new Date).toLocaleString().replace(/\:/g," ").replace(/\//g," ").split(" "),e=t[3].slice(0,2),o=t[3].slice(2);t.splice(3,1,e,o);this.getRandomHexColor(),++this.pos&&this.pos>=this.timeArray.length&&(this.pos=0),this.$set("timeArray",t)},getRandomHexColor:function(){return this.color="#"+("0000"+4294967295*Math.random()<<0).toString(16).slice(-6)},startFresh:function(){setInterval(this.getNewDate,1e3)},setColor:function(t){document.getElementsByTagName("span")[t].style.color=this.color}},watch:{pos:function(){this.setColor(this.pos)}},data:{pos:0,color:"",timeArray:[]}});