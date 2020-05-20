function showNumberWithAnimation(i,j,number){
    var numberCell = $("#number-cell-" + i + "-" + j);
    numberCell.css("background-color" , getNumberBackgroundColor( board[i][j] ));
    numberCell.css("color" , getNumberColor( board[i][j] ));
    numberCell.text( board[i][j] )

    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50)
    
}

//是否可以左移
function canMoveLeft(){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(!board[i][j]==0){
                if(board[i][j-1] == 0 || board[i][j] == board[i][j-1]){
                    return true
                }
            }
        }
    }
    return false
}
function canMoveUp(){
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(!board[i][j]==0){
                if(board[i-1][j] == 0 || board[i][j] == board[i-1][j]){
                    return true
                }
            }
        }
    }
    return false
}
function canMoveRight(){
    for(var i=0;i<4;i++){
        for(var j=2;j>0;j--){
            if(!board[i][j]==0){
                if(board[i][j+1] == 0 || board[i][j] == board[i][j+1]){
                    return true
                }
            }
        }
    }
    return false
}
function canMoveDown(){
    for(var j=0;j<4;j++){
        for(var i=2;i>0;i--){
            if(!board[i][j]==0){
                if(board[i+1][j] == 0 || board[i][j] == board[i+1][j]){
                    return true
                }
            }
        }
    }
    return false
}
function noBlockHorizontal(row,col1,col2,board){
    for(var k=col1+1;k<col2;k++){
        if(board[row][k]!=0){
            return false
        }
    }
    return true
}
function noBlockVertical(col,row1,row2,board){
    for(var k=row1+1;k<row2;k++){
        if(board[k][col]!=0){
            return false
        }
    }
    return true
}

function showMoveAnimation(fromx,fromy,tox,toy){
    var numberCell = $("#number-cell-" + fromx + "-" + fromy );
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200)
}