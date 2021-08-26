function MyInterval(){

    var interval=0;
    var intervalMap={};

    function MysetInterval(callbackfn,delay=0){
        var id=interval++;
        function repeat(){
            intervalMap[id]=setTimeout(
                ()=>{
                    callbackfn()
                    if(intervalMap[id]){
                        repeat();
                    }
                },delay
            )

            
        }
        repeat();

        return id;
    }

    function MyclearInterval(interval){
        clearTimeout(intervalMap[interval]);
        delete intervalMap[interval];
    }


    return{
        MyclearInterval,MysetInterval
    }
}


const{MyclearInterval,MysetInterval}=MyInterval();

var counter=0
function func(){
    counter++;
    console.log("This is Abhay Maheshwari")
    if(counter>=5){
        MyclearInterval(interval)
    }
}

var interval=MysetInterval(func,2000)