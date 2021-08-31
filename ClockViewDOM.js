"use strict";

    function ViewDom(city,id) {
      var self=this;

            var container=document.getElementById(id);
            //город
            var gmt=document.createElement('span');
            gmt.style.marginLeft='10px';
            gmt.style.color='#2C447D';
            gmt.innerHTML=city;
            container.appendChild(gmt);
            //часы
            var clock=document.createElement('div');
            clock.style.position='absolute';
            clock.style.width='300px';
            clock.style.height='300px';
            clock.style.backgroundColor='#C8EBFF'; 
            clock.style.borderRadius='50%'; 
            clock.style.top='50px';
            clock.style.left='0px';
            container.appendChild(clock);

            var sec=document.createElement('div'); //секундная стрелка
            var min=document.createElement('div'); //минутная стрелка
            var hour=document.createElement('div'); //часовая стрелка

            //координаты центра часов
            var clockCenterX=clock.offsetLeft+clock.offsetWidth/2;
            var clockCenterY=clock.offsetHeight/2;

            //расстояние от центра часов до центра каждой цифры
            var radius=(clock.offsetWidth-40)/2-5; 

            //угол, под которым размещена первая цифра, в градусах
            var ang=30; 

            for (var n=1; n<=12; n++) {

              //создаём блоки с цифрами, задаём им стиль
              var number=document.createElement('div');
              number.style.height="40px";
              number.style.width="40px";
              number.style.backgroundColor="#78A4E0"; 
              number.style.color='#2C447D';
              number.style.position="absolute";
              number.style.borderRadius="50%";
              number.style.textAlign="center";
              number.style.lineHeight="40px"; 
              number.style.fontSize="24px";
              number.innerHTML=n;
              clock.appendChild(number);

              //задаём расположение цифрам
              var angle=ang/180*Math.PI;
              var nCenterX=clockCenterX+radius*Math.sin(angle);
              var nCenterY=clockCenterY-radius*Math.cos(angle);
              number.style.left=Math.round(nCenterX-number.offsetWidth/2)+'px';
              number.style.top=Math.round(nCenterY-number.offsetHeight/2)+'px';

              //для расположения каждой следующей цифры угол увеличивается на 30 градусов
              ang+=30;
            }
            
            //задаём стиль секундной стрелки        
            
            sec.style.position="absolute";
            sec.style.zIndex="5";
            sec.style.backgroundColor="#FFBE4B";
            sec.style.transformOrigin="1px 130px";
            sec.style.borderRadius="50%";

            //задаём размер и начальное положение секундной стрелки
            sec.style.width='2px';        
            sec.style.height=(clock.offsetHeight/2)*0.9 + 'px';
            sec.style.top=clock.offsetHeight/20 + 'px';
            sec.style.left=clock.offsetWidth/2-sec.offsetWidth/2 + 'px';   
            //задаём стиль минутной стрелки     
            
            min.style.position="absolute";
            min.style.zIndex="6";
            min.style.backgroundColor="#FFDD56";
            min.style.transformOrigin="2px 115px";
            min.style.borderRadius="50%";

            //задаём размер и начальное положение минутной стрелки
            min.style.width='4px';        
            min.style.height=(clock.offsetHeight/2)*0.8 + 'px';
            min.style.top=(clock.offsetHeight/2)*0.2 + 'px';
            min.style.left=clock.offsetWidth/2-min.offsetWidth/2 + 'px'; 

            //задаём стиль часовой стрелки       
            
            hour.style.position="absolute";
            hour.style.zIndex="7";
            hour.style.backgroundColor="#FFAA2D";
            hour.style.transformOrigin="3px 85px";
            hour.style.borderRadius="50%";

            //задаём размер и начальное положение часовой стрелки
            hour.style.width='6px';
            hour.style.height=(clock.offsetHeight/2)*0.6 + 'px';
            hour.style.top=(clock.offsetHeight/2)*0.4 + 'px';
            hour.style.left=clock.offsetWidth/2-hour.offsetWidth/2 + 'px';

            clock.appendChild(hour);
            clock.appendChild(min);
            clock.appendChild(sec);


        self.changeArrowsPosition=function(s,m,h) {

          sec.style.transform='rotate(' + s*6 +'deg)';
          min.style.transform='rotate(' + (m*6 + s*0.1) +'deg)';
          hour.style.transform='rotate(' + (h*30+m*0.5) +'deg)';  
          
        }

    };

var clockNY=new ViewDom('Нью-Йорк (GMT-5)', 'Dom1');

var clockMinsk=new ViewDom('Минск (GMT+3)', 'Dom2');


 

        


