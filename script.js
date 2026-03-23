let workplace = document.querySelector(".workplace")
let flag = document.querySelector(".knopka1")
let galka = document.querySelector(".knopka2")
let buton = document.querySelector(".buton")
let time = document.querySelector(".time")
let nochka = document.querySelector(".n")
let secunda = 0
let timer_id = null
let massivo = []
let cnt = 0
for (let i = 0; i <= 255; i++){
    let pixel = document.createElement("div")
    pixel.classList.add("square")
    pixel.dataset.index = i
    workplace.appendChild(pixel)
    massivo.push({
        bomba:bimba(),
        open:false,
        flag:false,
        el:pixel
    })
};

nochka.innerHTML = cnt

function bimba(){
    let a = Math.random()
    if (a > 0.875){
        cnt++
        return true
    }
    else{
        return false
    }
}

workplace.addEventListener("click",function(event){
    if(!event.target.classList.contains("square")){
        return
    }
    let indexa = event.target.dataset.index
    indexa = +indexa
    let cur_obj = massivo[indexa]
    if(!cur_obj){
        return
    }
    if(cur_obj.open){
        return
    }
    if (cur_obj.bomba){
        alert("game over")
    }
    let bottom = indexa < 240
    let top = indexa > 15
    let left = indexa%16 != 0
    let right = indexa%16 != 15
    funccia(indexa,top,left,right,bottom,cur_obj)
}
)

function funccia(indexa,top,left,right,bottom,cur_obj){
    let schetchik = 0
    if(massivo[indexa-17] && massivo[indexa - 17].bomba === true && top && left){
        schetchik += 1
    }
    if(massivo[indexa-16] && massivo[indexa - 16].bomba === true && top){
        schetchik += 1
    }
    if(massivo[indexa-15] && massivo[indexa - 15].bomba === true && top && right){
        schetchik += 1
    }
    if(massivo[indexa-1] && massivo[indexa - 1].bomba === true && left){
        schetchik += 1
    }
    if(massivo[indexa+17] && massivo[indexa + 1].bomba === true && right){
        schetchik += 1
    }
    if(massivo[indexa+15] && massivo[indexa + 15].bomba === true && bottom && left){
        schetchik += 1
    }
    if(massivo[indexa+16] && massivo[indexa + 16].bomba === true && bottom){
        schetchik += 1
    }
    if(massivo[indexa+17] && massivo[indexa + 17].bomba === true && bottom && right){
        schetchik += 1
    }
    if (schetchik > 0){
        massivo[indexa].el.innerHTML = schetchik
    }
    else{
        ifalka(indexa,top,left,right,bottom)
    }
    cur_obj.open = true
    cur_obj.el.classList.add("open")
    return schetchik
}

function ifalka(indexa,top,left,right,bottom){
    let cur_obj = massivo[indexa] 
    if(top&&left){
        funccia(indexa-17,top,left,right,bottom,cur_obj)
    }
    if(top){
        funccia(indexa-16,top,left,right,bottom,cur_obj)
    }
    if(right&&top){
        funccia(indexa-15,top,left,right,bottom,cur_obj)
    }
    if(left){
        funccia(indexa-1,top,left,right,bottom,cur_obj)
    }
    if(right){
        funccia(indexa+1,top,left,right,bottom,cur_obj)
    }
    if(bottom&&left){
        funccia(indexa+15,top,left,right,bottom,cur_obj)
    }
    if(bottom){
        funccia(indexa+16,top,left,right,bottom,cur_obj)
    }
    if(bottom&&right){
        funccia(indexa+17,top,left,right,bottom,cur_obj)
    }
}






buton.addEventListener("click",function startTimer(){
    stopTimer()
    timer_id = setInterval(()=>{
        secunda++
        rebootTimer()
    },1000)
}
)


function stopTimer(){
    if(timer_id){
        clearInterval(timer_id)
        timer_id = null
    }
}

function rebootTimer(){
    let chasi = (secunda/3600) | 00
    let minuti = ((secunda%3600)/60) | 00
    let visiblesec = ((secunda%3600)%60) | 0
    time.textContent = chasi+":"+minuti+":"+visiblesec
}

