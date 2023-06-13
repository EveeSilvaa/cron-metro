var sec=0
var min=0
var hr=0

var Interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
 Interval= setInterval(watch,1000)
}

function pause(){
    clearInterval(Interval)
}

function stop(){
    clearInterval(Interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00'
}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
          min=0
          hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}