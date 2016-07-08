new Vue({
    el: "#container",
    ready: function(){
        //todo
        this.startFresh();
    },
    methods: {
        getNewDate: function(){
            var currentTimeArray = (new Date()).toLocaleString().replace(/\:/g, " ").replace(/\//g, " ").split(" "),
            m = currentTimeArray[3].slice(0,2),
            hour = currentTimeArray[3].slice(2),
            currenTimeArray = currentTimeArray.splice(3,1,m,hour);

            this.getRandomHexColor();
            (++this.pos) && (this.pos >= this.timeArray.length) && (this.pos = 0);

            this.$set("timeArray", currentTimeArray);

        },
        getRandomHexColor: function(){
            return this.color =  "#" + ("0000" + Math.random() * 0xFFFFFFFF << 0).toString(16).slice(-6);
        },
        startFresh: function(){
            setInterval(this.getNewDate, 1000);
        },
        setColor: function(pos){
            document.getElementsByTagName("span")[pos].style.color = this.color;
        }

    },
    watch: {
        "pos": function(){
            this.setColor(this.pos);
        }
    },
    data: {
        pos: 0,
        color: "",
        timeArray: []
    }

});