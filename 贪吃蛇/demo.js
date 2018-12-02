/**
 * 1.点击开始游戏-->startPage 小时-->游戏开始
 * 2.随机出现食物-->，出现三街蛇开始运动
 * 3.上下左右-->改变方向
 * 4.判断是否吃到食物--?食物消失,蛇身体长度+1
 * 5.判断游戏结束,弹出框
 */

//使用getElementById获取content贪吃蛇的DIV
var content = document.getElementById('content');
//开始页面（开始游戏按钮）获取
var startPage = document.getElementById('startPage');
//游戏分数
var scoreBox = document.getElementById('score');
//失败游戏得分弹框
var lose = document.getElementById('lose');
//失败分数
var loserScore = document.getElementById('loserScore');
//关闭按钮
var close = document.getElementById('close');
//左上角开始按钮
var startP = document.getElementById('startP');
//开始游戏按钮
var startBtn = document.getElementById('startBtn');
//是否开始游戏
var startGameBool = true;
//是否暂停了游戏
var startPaushBool = true;
//蛇运动的定时器
var snakeMove;
//速度
var speed = 200;


//初始化
init();
function init() {
    this.mapDiv = content;
    //地图的宽度
    this.mapW = parseInt(getComputedStyle(content).width);
    //地图的高度
    this.mapH = parseInt(getComputedStyle(content).height);
    //食物的宽高
    this.foodW = 20;
    this.foodH = 20;
    //食物出现的位置X和Y的值
    this.foodX = 0;
    this.foodY = 0;
    //蛇的初始化属性
    this.snakeW = 20;
    this.snakeH = 20;
    //蛇身用数组代替(重点)
    this.snakeBody = [[3, 1, 'head'], [2, 1, 'body'], [1, 1, 'body']];
    //游戏属性
    //游戏初始化默认的方向是向右移动
    this.direct = 'right';
    //锁机制，判断蛇的运行方向和将要改变的方向是否一致，比如蛇向右移动，按键左右是无法控制蛇的
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    //游戏获得的分数
    this.score = 0;



    startGame();
}

//游戏开始
function startGame() {
    startPage.style.display = 'none';
    startP.style.display = 'block';
    //生成食物
    food();
    //生成贪吃蛇
    snake();
    
    bindEvent();
}

//生成食物函数
function food() {
    //创建一个食物的div节点
    var food = document.createElement('div');
    //食物的宽高
    food.style.width = this.foodW + 'px';
    food.style.height = this.foodH + 'px';
    //绝对定位的位置
    food.style.position = 'absolute';
    //随机生成食物的位置，并向下取整
    this.foodX = Math.floor(Math.random() * (this.mapW / 20));
    this.foodY = Math.floor(Math.random() * (this.mapH / 20));
    //生成食物的位置及它所占的大小
    food.style.left = this.foodX * 20 + 'px';
    food.style.top = this.foodY * 20 + 'px';
    //插入到map地图当中去并生成class为food的节点
    this.mapDiv.appendChild(food).setAttribute('class', 'food');
}

function snake() {
    //循环遍历蛇的长度
    for (var i = 0; i < this.snakeBody.length; i++) {
        //每一节长度对应一个div节点
        var snake = document.createElement('div');
        //蛇的宽高位置
        snake.style.width = this.snakeW + 'px';
        snake.style.height = this.snakeH + 'px';
        snake.style.position = 'absolute';
        //根据snakeBody的每一个数组的索引值0代表X轴的位置,1代表Y轴的位置，2代表它是蛇头还是蛇尾
        snake.style.left = this.snakeBody[i][0] * 20 + 'px';
        snake.style.top = this.snakeBody[i][1] * 20 + 'px';
        //给蛇的蛇头蛇尾添加class属性
        snake.classList.add(this.snakeBody[i][2]);
        //插入在mapDiv插入蛇的节点
        this.mapDiv.appendChild(snake).classList.add('snake');
        //蛇头旋转
        switch (this.direct) {
            case 'right':
                break;
            case 'up':
                snake.style.transform = 'rotate(270deg)';
                break;
            case 'left':
                snake.style.transform = 'rotate(180deg)';
                break;
            case 'down':
                snake.style.transform = 'rotate(90deg)';
                break;
            default:
                break;
        }
    }
}

//运动函数
function move() {
    //循环遍历蛇的长度
    for (var i = this.snakeBody.length - 1; i > 0; i--) {
        //蛇身移动，X轴等于前面蛇的X轴
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        //蛇身移动,Y轴等于前面蛇的Y轴
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
    }
    //判断上下左右运动，加入函数
    switch (this.direct) {
        case 'right':
            //X轴加1   x向右运动
            this.snakeBody[0][0] += 1;
            break;
        case 'up':
            //Y轴减1   Y向上运动   
            this.snakeBody[0][1] -= 1;
            break;
        case 'left':
            //X轴减1   X向左运动  
            this.snakeBody[0][0] -= 1;
            break;
        case 'down':
            //Y轴加1   Y向下运动  
            this.snakeBody[0][1] += 1;
            break;
        default:
            break;
    }
    //每次运动原来的那条蛇删掉，再重新渲染一条蛇
    removeClass('snake');
    //重新渲染
    snake();
    //如果吃到食物,贪吃蛇数组的第一位蛇头的位置跟食物的位置重合的时候。
    if (this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {
        //获取蛇身最后一位的节点数据
        var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
        console.log(snakeEndX);
        var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
        console.log(snakeEndY);

        switch (this.direct) {
            //因为运动是向右吃了食物所以在他的X轴+1位Y轴不变,添加在他的body部分
            case 'right':
                this.snakeBody.push([snakeEndX + 1, snakeEndY, 'body']);
                break;
            case 'up':
                this.snakeBody.push([snakeEndX, snakeEndY - 1, 'body']);
                break;
            case 'left':
                this.snakeBody.push([snakeEndX - 1, snakeEndY, 'body']);
                break;
            case 'down':
                this.snakeBody.push([snakeEndX, snakeEndY + 1, 'body']);
                break;
            default:
                break;
        }
        //吃到食物分数+1，渲染到scoreBox里面,并且移除食物节点
        this.score += 1;
        scoreBox.innerHTML = this.score;
        removeClass('food');
        food();
    }
    //如果碰到边界,X边界
    if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 20) {
        relodGame();
    }
    //如果碰到边界,Y边界
    if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 20) {
        relodGame();
    }
    //如果碰到了自己的身体
    var snakeHX = this.snakeBody[0][0];
    var snakeHY = this.snakeBody[0][1];
    for (var i = 1; i < this.snakeBody.length; i++) {
        if (snakeHX == this.snakeBody[i][0] && snakeHY == snakeBody[i][1]) {
            relodGame();
        }
    }
}
//游戏结束重新加载
function relodGame() {
    removeClass('snake');
    removeClass('food');
    clearInterval(snakeMove);
    //蛇身用数组代替(重点)
    this.snakeBody = [[3, 1, 'head'], [2, 1, 'body'], [1, 1, 'body']];
    //游戏属性
    //游戏初始化默认的方向是向右移动
    this.direct = 'right';
    //锁机制，判断蛇的运行方向和将要改变的方向是否一致，比如蛇向右移动，按键左右是无法控制蛇的
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    lose.style.display = 'block';
    loserScore.innerHTML = this.score;

    startP.setAttribute('src','./images/start.png');
    //游戏获得的分数
    this.score = 0;
    scoreBox.innerHTML = this.score;
}

//移除目标删除class，封装一个 removeClass函数
function removeClass(className) {
    //判断是否有节点class
    var ele = document.getElementsByClassName(className);
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]);
    }
}
//判断键盘keyCode的值
function setDerict(code) {
    switch (code) {
        //左键
        case 37:
            //锁机制，判断蛇的运行方向和将要改变的方向是否一致，比如蛇向右移动，按键左右是无法控制蛇的
            if (this.left) {
                this.direct = 'left';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        //上
        case 38:
            //锁机制，判断蛇的运行方向和将要改变的方向是否一致，比如蛇向右移动，按键左右是无法控制蛇的
            if (this.up) {
                this.direct = 'up';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;

            }
            break;
        //右
        case 39:
            //锁机制，判断蛇的运行方向和将要改变的方向是否一致，比如蛇向右移动，按键左右是无法控制蛇的
            if (this.right) {
                this.direct = 'right';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        //下
        case 40:
            //锁机制，判断蛇的运行方向和将要改变的方向是否一致，比如蛇向右移动，按键左右是无法控制蛇的
            if (this.down) {
                this.direct = 'down';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        default:
            break;
    }
}

//绑定event事件（包含按键事件）
function bindEvent() {
    //绑定按键事件，键盘按下事件
    document.onkeydown = function (e) {
        //获取键盘的keyCode的值
        var code = e.keyCode;
        setDerict(code);
    }
    close.onclick =function(){
        // startAndPaush();
        lose.style.display = "none";
    }
    startBtn.onclick = function(){
        startAndPaush();
    }
    startP.onclick = function(){
        startAndPaush();
    }
}
//开始或者暂停事件（左上角按钮）
function startAndPaush(){
    if(startPaushBool){
        if(startGameBool){
            startGame();
            startGameBool = false;
        }
        startP.setAttribute('src','./images/pause.png')
        document.onkeydown = function (e) {
            //获取键盘的keyCode的值
            var code = e.keyCode;
            setDerict(code);
        }
        //开始运动
        snakeMove = setInterval(function () {
            move();
        }, speed);
        startPaushBool = false;
    }else{
        startP.setAttribute('src','./images/start.png')
        clearInterval(snakeMove);
        document.onkeydown = function(e){
            e.returnValue = false;
            return false;
        };
        startPaushBool = true;
    }
}