const string = `/*今天我们来画一只黄皮耗子
首先我们将他的皮涂成黄色*/

#html {
    background: #ffe600;
}
.skin {
    position: relative;
}

/*然后
我们给他按上一个鼻子*/

.nose {
    border: 14px solid;
    border-color: black transparent transparent transparent;
    width: 0;
    height: 0;
    border-radius: 10px;
    position: relative;
    left: 50%;
    top: 105px;
    margin-left: -14px;
    z-index: 10;
}

/*当我们把手放在鼻子上时
让他的鼻子可以左右晃动*/

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(8deg);
    }
    66% {
        transform: rotate(-8deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: 14px 7px;
    animation: wave 250ms infinite linear;
}

/*现在我们给他一双眼睛
让他能够看见东西*/

.eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 60px;
    border-radius: 50%;
    background: #2e2e2e;
}

.eye::before {
    content: '';
    border: 3px solid black;
    display: block;
    width: 31px;
    height: 31px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
}

.eye.left {
    transform: translateX(-132px);
}

.eye.right {
    transform: translateX(132px);
}

/*为了让皮卡丘吃到美味的苹果
我们再给他一张嘴*/

.mouth {
    width: 200px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 130px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
}

.mouth > .up > .lip {
    border: 3px solid black;
    position: absolute;
    width: 100px;
    height: 30px;
    border-top: none;
    background: #ffe600;
    z-index: 1
}

.mouth > .up > .left {
    border-radius: 0 0 0 50px;
    border-right: none;
    transform: rotate(-24deg);
}


.mouth > .up > .right {
    left: 50%;
    border-radius: 0 0 50px 0;
    border-left: none;
    transform: rotate(24deg);
}

.mouth > .down {
    position: absolute;
    height: 180px;
    width: 100%;
    top: 9px;
    overflow: hidden;
}

.mouth .down .circle1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    bottom: 0;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .circle1 .circle2 {
    width: 100%;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -153px;
    border-radius: 200px/210px;
}

/*最后别忘了皮卡丘的杀伤性武器
能放电的脸颊*/

.face {
    position: absolute;
    left: 50%;
    top: 182px;
    margin-left: -41px;
    border: 3px solid black;
    background: red;
    width: 82px;
    height: 82px;
    border-radius: 50%;
}

.face > img {
    position: absolute;
    left: 50%;
    top: 50%;
}

.face.left {
    transform: translateX(-180px);
}

.face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.right {
    transform: translateX(180px);
}

/*好了
可爱的皮卡丘画完了
谢谢观看*/
`

export default string
