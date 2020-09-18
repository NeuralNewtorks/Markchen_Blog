//Paper - 0 | Scissor - 1 | Stone - 2
function chooseStatusRandomly(Status){
    num_status = Status.length;
    random_num = Math.floor(Math.random() * num_status);
    return random_num;
}

function convertStringToStatus(input_string, status){
    let i = 0;
    while (i < status.length){
        if (input_string == status[i]){return i;}
        i ++;
    }
    return -1;
}

function isUserWin(user_result, program_result){
    if ((user_result==0 && program_result==1) ||
        (user_result==1 && program_result==2) ||
        (user_result==2 && program_result==0)){return false;}
    return true;
}

scoreBoard = {
    numGame : 0,
    numUserWin : 0,
    getWinRate : function getWinRate(){
        return Math.round((this.numUserWin/this.numGame) * 100) + "%";
    },
    addGameRes : function addGameRes(userWin){
        this.numGame += 1;
        this.numUserWin += userWin ? 1 : 0;
    }
}

const status = ["paper", "scissor", "stone"];
alert("Welcome to the Paper-scissor-stone game in the next century!")
while (true){
    let user_input = prompt("Which do you want to choose? Paper, Scissor, or the Stone?").toLowerCase();
    user_status = convertStringToStatus(user_input, status);
    if (user_status == -1){
        alert("Seems that you didn't put a valid input here, try again please");
        continue;
    }
    program_status = chooseStatusRandomly(status);
    user_result = isUserWin(user_status, program_status);
    if (user_result){alert("you win! You choose the "+status[user_status]+" and the program choose the "+status[program_status]);}
    else{alert("you lose :( You choose the "+status[user_status]+" and the program choose the "+status[program_status]);}
    scoreBoard.addGameRes(user_result);
    if (confirm("Do you want to see your data statistic?")){
        alert("You have played "+scoreBoard.numGame+", and your wining rate is"+scoreBoard.getWinRate())
    }
}