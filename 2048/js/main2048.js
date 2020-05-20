var board = new Array();
var score = 0;

$(document).ready(function(){
    newgame()
})

function newgame(){
    //初始化棋盘
    init();
    //生成两个随机数
    generateOneNumber();
    generateOneNumber();
}

function init(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top" , getPosTop(i,j));
            gridCell.css("left" , getPosLeft(i,j));
        }
    }

    for(var i=0;i<4;i++){
        board[i]=new Array
        for(var j=0;j<4;j++){
            board[i][j]=0
        }
    }
    updataBoardView()
}

function updataBoardView(){
    //每次操作board值都改变，就删除这个
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            // 每一个board都必须生成一个number-cell
            $(".grid-container").append("<div class='number-cell' id='number-cell-"+ i + "-" + j +"'></div>")
            var theNumberCell = $("#number-cell-" + i + '-' + j)
            if(board[i][j] == 0){
                theNumberCell.css("width" , "0px")
                theNumberCell.css("height" , "0px")
                theNumberCell.css("top" , getPosTop(i,j) +50);
                theNumberCell.css("left" , getPosLeft(i,j) +50);
            }else{
                // 这样一个numberCell就把一个gridCell覆盖住了
                theNumberCell.css("width" , "100px")
                theNumberCell.css("height" , "100px")
                theNumberCell.css("top" , getPosTop(i,j));
                theNumberCell.css("left" , getPosLeft(i,j));
                theNumberCell.css("background-color" , getNumberBackgroundColor( board[i][j] ));
                theNumberCell.css("color" , getNumberColor( board[i][j] ));
                theNumberCell.text( board[i][j] )
            }
        }
    } 
}

$(document).keydown(function(event){
    switch(event.keyCode){
        case 37:
            if(moveLeft()){
                generateOneNumber();
                isgameover();
            };
            break;
        case 38:
            if(moveUp()){
                generateOneNumber();
                isgameover();
            };
            break;
        case 39:
            if(moveRight()){
                generateOneNumber();
                isgameover();
            };
            break;
        case 40:
            if(moveDown()){
                generateOneNumber();
                isgameover();
            };
            break;
        default:
            break;
    }
})
function isgameover(){

}

//左移函数
function moveLeft(){
    //判断
    if(!canMoveLeft()){
        return false
    }
    //左移
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(!board[i][j]==0){
                for(var k=0;k<j;k++){
                    if(board[i][k] == 0 && noBlockHorizontal(i,k,j,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue
                    }else if(board[i][k] == board[i][j] && noBlockHorizontal(i,k,j,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        continue
                    }
                }
            }
        }
    }
    //动画太快，加延时器
    setTimeout("updataBoardView()",200);
    return true
}
function moveUp(){
    if(!canMoveUp()){
        return false
    }
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(!board[i][j]==0){
                for(var k=0;k<i;k++){
                    if(board[k][j] == 0 && noBlockVertical(j,k,i,board)){
                        //move
                        showMoveAnimation(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                        continue
                    }else if(board[k][j] == board[i][j] && noBlockVertical(j,k,i,board)){
                        //move
                        showMoveAnimation(i,j,k,j);
                        //add
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        continue
                    }
                }
            }
        }
    }
    setTimeout("updataBoardView()",200);
    return true
}
function moveRight(){
    //判断
    if(!canMoveRight()){
        return false
    }
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(!board[i][j]==0){
                for(var k=3;k>j;k--){
                    if(board[i][k] == 0 && noBlockHorizontal(i,j,k,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue
                    }else if(board[i][k] == board[i][j] && noBlockHorizontal(i,j,k,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        continue
                    }
                }
            }
        }
    }
    //动画太快，加延时器
    setTimeout("updataBoardView()",200);
    return true
}
function moveDown(){
    if(!canMoveDown()){
        return false
    }
    for(var j=0;j<4;j++){
        for(var i=2;i>=0;i--){
            if(!board[i][j]==0){
                for(var k=3;k>i;k--){
                    if(board[k][j] == 0 && noBlockVertical(j,i,k,board)){
                        //move
                        showMoveAnimation(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                        continue
                    }else if(board[k][j] == board[i][j] && noBlockVertical(j,i,k,board)){
                        //move
                        showMoveAnimation(i,j,k,j);
                        //add
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        continue
                    }
                }
            }
        }
    }
    setTimeout("updataBoardView()",200);
    return true
}