function getPosTop(i,j){
    return i*120 +20;
}
function getPosLeft(i,j){
    return j*120 +20;
}

function getNumberBackgroundColor(number){
    switch(number){
        case 2 :return "#eee4da";break;
        case 4 :return "#ede0c8";break;
        case 8 :return "#f2b179";break;
        case 16 :return "#f59563";break;
        case 32 :return "#f67c5f";break;
        case 64 :return "#f65e3b";break;
        case 128 :return "#edcf72";break;
        case 256 :return "#edcc61";break;
        case 512 :return "#9c0";break;
        case 1024 :return "#33b5e5";break;
        case 2048 :return "#09c";break;
        case 4096 :return "#a6c";break;
        case 8192 :return "#93c";break;
    }
    return "black"
}
function getNumberColor(number){
    if(number<=4){
        return "#776e65"
    }else{
        return "white"
    }
}

function generateOneNumber(){
    if(nospace()){
        return false
    }else{
        //随机位置
        var randx =parseInt(Math.floor( Math.random() * 4 ));
        var randy =parseInt(Math.floor( Math.random() * 4 ));
        while(true){
            if(board[randx][randy] == 0){
                break;
            }
            var randx =parseInt(Math.floor( Math.random() * 4 ));
            var randy =parseInt(Math.floor( Math.random() * 4 ));
        }
        //随机数
        var randNumber = Math.random()<0.5?2:4;
        board[randx][randy]=randNumber;
        showNumberWithAnimation(randx,randy,randNumber);
    }
}

function nospace(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j] ==0 ){
                return false
            }
        }
    }
    return true
}

