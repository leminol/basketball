const exercises = ["Lateral Lunge" , "Glute bridge", "Lateral Bound" , "Medicine BallSquat to Overhead Press" , "Goblet Squat" , "Alternating Dumbbell Press"]
const exerciseslink = ["https://thumbs.gfycat.com/LonelyEmbarrassedFossa-size_restricted.gif",
            "https://flabfix.com/wp-content/uploads/2019/06/Glute-Bridges.gif",
            "https://thumbs.gfycat.com/MeanMindlessHylaeosaurus-size_restricted.gif",
            "loading.gif",
            "https://thumbs.gfycat.com/UnfinishedBreakableBooby-size_restricted.gif",
            "https://thumbs.gfycat.com/KaleidoscopicYoungEmeraldtreeskink-size_restricted.gif",
            "loading.gif"
        ]

const drills = ["Barber Pole", "Figure Eights & Catch Drill"]
const drillslink = ["loading.gif", "loading.gif"]

reps = "4*6"
i = -1
exchange(1)

function exchange(adors) {
    document.getElementById("photo").src = "loading.gif"
    if(adors){
        if(i <= exercises.length - 1){
            i = i + 1
            document.getElementById("next").innerHTML = "Next"
            document.getElementById("title").innerHTML = exercises[i]
            document.getElementById("exname").innerHTML = exercises[i]
            document.getElementById("photo").src = exerciseslink[i]
            document.getElementById("rep").innerHTML = reps
        }
        if(i == 5){document.getElementById("next").innerHTML = "Finish!"}
        if(i == 6){
            document.getElementById("title").innerHTML = "Congratulations"
            document.getElementById("exname").innerHTML = "Congratulations"
        }
    }
    else if(i > 0){
        i = i - 2
        exchange(1)
    }
    console.log(i)
}

function day(repn, extype){
    if(!extype){
        ////////////////////////////////////////////////////////////
        document.getElementById("next").style.visibility = "visible"
        document.getElementById("prev").style.visibility = "visible"

        reps = ["4*6","3*10","4*8"][repn - 1]
        i = -1
        exchange(1)
    }
    else{
        ///////////////////////////////////////////////////////////
        document.getElementById("next").style.visibility = "hidden"
        document.getElementById("prev").style.visibility = "hidden"
        exdrill(repn)
    }
}

function exdrill(number){
    document.getElementById("title").innerHTML = drills[number - 1]
    document.getElementById("exname").innerHTML = drills[number - 1]
    document.getElementById("photo").innerHTML = drills[number - 1]
    document.getElementById("rep").innerHTML = "2*2 min."
    document.getElementById("photo").src = drillslink[i]
    
}