/*��ʽ��*/
/* ������ѩ */
function snowFall(snow) {
    /* ���������� */
    snow = snow || {};
    this.maxFlake = snow.maxFlake || 200;   /* ���Ƭ�� */
    this.flakeSize = snow.flakeSize || 10;  /* ѩ����״ */
    this.fallSpeed = snow.fallSpeed || 1;   /* ׹���ٶ� */
}
/* ����д�� */
requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) { setTimeout(callback, 1000 / 60); };

cancelAnimationFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
	window.oCancelAnimationFrame;
/* ��ʼ��ѩ */
snowFall.prototype.start = function(){
    /* �������� */
    snowCanvas.apply(this);
    /* ����ѩ����״ */
    createFlakes.apply(this);
    /* ��ѩ */
    drawSnow.apply(this)
}
/* �������� */
function snowCanvas() {
    /* ����Dom��� */
    var snowcanvas = document.createElement("canvas");
    snowcanvas.id = "snowfall";
    snowcanvas.width = window.innerWidth;
    snowcanvas.height = document.body.clientHeight;
    snowcanvas.setAttribute("style", "position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");
    document.getElementsByTagName("body")[0].appendChild(snowcanvas);
    this.canvas = snowcanvas;
    this.ctx = snowcanvas.getContext("2d");
    /* ���ڴ�С�ı�Ĵ��� */
    window.onresize = function() {
        snowcanvas.width = window.innerWidth;
        /* snowcanvas.height = window.innerHeight */
    }
}
/* ѩ�˶����� */
function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
    this.x = Math.floor(Math.random() * canvasWidth);   /* x���� */
    this.y = Math.floor(Math.random() * canvasHeight);  /* y���� */
    this.size = Math.random() * flakeSize + 2;          /* ��״ */
    this.maxSize = flakeSize;                           /* �����״ */
    this.speed = Math.random() * 1 + fallSpeed;         /* ׹���ٶ� */
    this.fallSpeed = fallSpeed;                         /* ׹���ٶ� */
    this.velY = this.speed;                             /* Y�����ٶ� */
    this.velX = 0;                                      /* X�����ٶ� */
    this.stepSize = Math.random() / 30;                 /* ���� */
    this.step = 0                                       /* ���� */
}
flakeMove.prototype.update = function() {
    var x = this.x,
        y = this.y;
    /* ���Ұڶ�(����) */
    this.velX *= 0.98;
    if (this.velY <= this.speed) { this.vely="this.speed" } this.velx +="Math.cos(this.step" * this.stepsize; this.y this.x �ɳ��߽�ĵ��� if (this.x>= canvas.width || this.x <= 0 || this.y>= canvas.height || this.y </=></=>