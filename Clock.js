let MyClockhour=document.querySelector('#timehour')
let MyClockminute=document.querySelector('#timeminute')
let MyClocksecond=document.querySelector('#timesecond')
let MyClockDate=document.querySelector('#MyDate')
let MyDays=['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday']
let MyDay=document.querySelector('#myday')
setInterval(()=>{
    let Mydate=new Date()
     MyClockDate.innerHTML=`${Mydate.toLocaleDateString()}`
     MyClockhour.innerHTML=Mydate.getHours()
     MyClockminute.innerHTML=Mydate.getMinutes()
     MyClocksecond.innerHTML=Mydate.getSeconds()
     if(Mydate.getDay()==0)
     MyDay.innerHTML=`${MyDays[0]}`
    else if(Mydate.getDay()==1)
    MyDay.innerHTML=`${MyDays[1]}`
    else if(Mydate.getDay()==2)
    MyDay.innerHTML=`${MyDays[2]}`
    else if(Mydate.getDay()==3)
    MyDay.innerHTML=`${MyDays[3]}`
    else if(Mydate.getDay()==4)
    MyDay.innerHTML=`${MyDays[4]}`
    else if(Mydate.getDay()==5)
    MyDay.innerHTML=`${MyDays[5]}`
    else 
    MyDay.innerHTML=`${MyDays[6]}`

},1000)