var num = document.querySelectorAll(".player").length;

for(var i=0;i<num;i++){
    document.querySelectorAll(".player")[i].addEventListener("click",function(){
        console.log(this.id);
        // document.getElementById("player1").classList.toggle("show");
        document.getElementById(this.id).classList.toggle("afterEff");
        var id = (String(this.id)).toLowerCase();
        console.log(id);
        document.getElementById(id).classList.toggle("show");
    })
}