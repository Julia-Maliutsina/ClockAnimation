
"use strict";

function ViewCanvas(city,id) {
    
  var self=this;
  
  var container=document.getElementById(id);           

  //город
  var gmt=document.createElement('span');
  gmt.style.marginLeft='10px';
  gmt.style.color='#2C447D';
  gmt.innerHTML=city;
  container.appendChild(gmt);
  
    //часы
    var cvs=document.createElement('canvas');
    cvs.setAttribute('width','300');
    cvs.setAttribute('height','300');
    cvs.style.position='absolute';
    cvs.style.top='50px';
    cvs.style.left='0px';
    container.appendChild(cvs);
    var clock=cvs.getContext('2d');
    clock.fillStyle='#C8EBFF';
    clock.beginPath();
    clock.arc(150, 150, 150, 1, 360, false);
    clock.fill();

    var radius=(300-40)/2-5;//расстояние от центра часов до центра цифры
    var ang=30; //угол для расположения первой цифры

    for (var n=1; n<=12; n++) {
      //создаём круги
      var number=cvs.getContext('2d');
      number.fillStyle='#78A4E0';
      number.beginPath();
    
      var angle=ang/180*Math.PI;
      var CenterX=150+radius*Math.sin(angle);
      var CenterY=150-radius*Math.cos(angle);        

      number.arc(CenterX, CenterY, 20, 1, 360, false);
      number.fill();

      //создаём цифры и задаём им расположение
      var num=cvs.getContext('2d');

      num.fillStyle='#2C447D';
      num.font='20px Times New Roman';   
      num.textAlign='center';    
      num.textBaseline='middle';
      clock.fillText(n,CenterX,CenterY);

      //для расположения каждой следующей цифры угол увеличивается на 30 градусов
       ang+=30;

    }

      //создаём секундную стрелку 
      var sec=cvs.getContext('2d');
      sec.strokeStyle='#FFBE4B';
      sec.lineWidth=2;
      sec.lineCap='round';
      sec.beginPath();
      sec.moveTo(150,150);
      sec.lineTo(150,10);
      sec.stroke();

      //создаём минутную стрелку 
      var min=cvs.getContext('2d');
      min.strokeStyle='#FFDD56';
      min.lineWidth=4;
      min.lineCap='round';
      min.beginPath();
      min.moveTo(150,150);
      min.lineTo(150,20);
      min.stroke();

      //создаём часовую стрелку 
      var hour=cvs.getContext('2d');
      hour.strokeStyle='#FFAA2D';
      hour.lineWidth=6;
      hour.lineCap='round';
      hour.beginPath();
      hour.moveTo(150,150);
      hour.lineTo(150,30);
      hour.stroke();

  self.changeArrowsPosition=function(s,m,h) {
        
    var clock=cvs.getContext('2d');
    clock.fillStyle='#C8EBFF';
    clock.beginPath();
    clock.arc(150, 150, 150, 1, 360, false);
    clock.fill();

    var radius=(300-40)/2-5;//расстояние от центра часов до центра цифры
    var ang=30; //угол для расположения первой цифры

    for (var n=1; n<=12; n++) {
      //создаём круги
      var number=cvs.getContext('2d');
      number.fillStyle='#78A4E0';
      number.beginPath();
    
      var angle=ang/180*Math.PI;
      var CenterX=150+radius*Math.sin(angle);
      var CenterY=150-radius*Math.cos(angle);        

      number.arc(CenterX, CenterY, 20, 1, 360, false);
      number.fill();

      //создаём цифры и задаём им расположение
      var num=cvs.getContext('2d');

      num.fillStyle='#2C447D';
      num.font='20px Times New Roman';   
      num.textAlign='center';    
      num.textBaseline='middle';
      clock.fillText(n,CenterX,CenterY);

      //для расположения каждой следующей цифры угол увеличивается на 30 градусов
       ang+=30;

    }

        //создаём секундную стрелку 
        var secAngle=s*6/180*Math.PI;
        var secX=150+radius*Math.sin(secAngle);
        var secY=150-radius*Math.cos(secAngle); 
        var sec=cvs.getContext('2d');
        sec.strokeStyle='#FFBE4B';
        sec.lineWidth=2;
        sec.lineCap='round';
        sec.beginPath();
        sec.moveTo(150,150);
        sec.lineTo(secX,secY);
        sec.stroke();

        //создаём минутную стрелку 
        var minAngle=(m*6 + s*0.1)/180*Math.PI;
        var minX=150+(radius-25)*Math.sin(minAngle);
        var minY=150-(radius-25)*Math.cos(minAngle); 
        var min=cvs.getContext('2d');
        min.strokeStyle='#FFDD56';
        min.lineWidth=4;
        min.lineCap='round';
        min.beginPath();
        min.moveTo(150,150);
        min.lineTo(minX,minY);
        min.stroke();

        //создаём часовую стрелку 
        var hourAngle=(h*30+m*0.5)/180*Math.PI;
        var hourX=150+(radius-50)*Math.sin(hourAngle);
        var hourY=150-(radius-50)*Math.cos(hourAngle); 
        var hour=cvs.getContext('2d');
        hour.strokeStyle='#FFAA2D';
        hour.lineWidth=6;
        hour.lineCap='round';
        hour.beginPath();
        hour.moveTo(150,150);
        hour.lineTo(hourX,hourY);
        hour.stroke();
    }  
}    

var clockBerlin=new ViewCanvas('Берлин (GMT+1)', 'Canvas1');
var clockVladivostok=new ViewCanvas('Владивосток (GMT+10)', 'Canvas2');
  