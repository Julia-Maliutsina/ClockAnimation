"use strict";

    function ViewSvg(city,id) {
      var self=this;

            var container=document.getElementById(id);           

            //город
            var gmt=document.createElement('span');
            gmt.style.marginLeft='10px';
            gmt.style.color='#2C447D';
            gmt.innerHTML=city;
            container.appendChild(gmt);
            //часы
            var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
            svg.setAttribute('width','300');
            svg.setAttribute('height','300');
            svg.style.position='absolute';
            svg.style.top='50px';
            svg.style.left='0px';
            container.appendChild(svg);
            var clockWidth=300;
            var clock=document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            clock.style.position='absolute';
            clock.style.zIndex='1';
            clock.style.top='0px';
            clock.style.left='0px';
            clock.setAttribute('ry',clockWidth/2);
            clock.setAttribute('rx',clockWidth/2);
            clock.setAttribute('cy',clockWidth/2);
            clock.setAttribute('cx',clockWidth/2);
            clock.style.stroke='#C8EBFF'; 
            clock.style.fill='#C8EBFF';
            svg.appendChild(clock);


            //координаты центра часов
            var clockCenterX=clockWidth/2;
            var clockCenterY=clockWidth/2;

            //расстояние от центра часов до центра каждой цифры
            var radius=(clockWidth-40)/2-5; 

            //угол, под которым размещена первая цифра, в градусах
            var ang=30; 

            for (var n=1; n<=12; n++) {

            //создаём круги, задаём им стиль
            var number=document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            number.style.position='absolute';
            number.style.zIndex='2';
            number.setAttribute('ry','20px');
            number.setAttribute('rx','20px');
            number.style.stroke='#78A4E0'; 
            number.style.fill='#78A4E0';
            number.style.height="40px";
            number.style.width="40px";
            svg.appendChild(number);

            //задаём расположение кругам
            var angle=ang/180*Math.PI;
            var nCenterX=clockCenterX+radius*Math.sin(angle);
            var nCenterY=clockCenterY-radius*Math.cos(angle);        
            number.setAttribute('cx',Math.round(nCenterX));
            number.setAttribute('cy',Math.round(nCenterY));

            //создаём цифры и задаём им расположение
            var numberText=document.createElementNS("http://www.w3.org/2000/svg", "text");
            numberText.innerHTML=n;
            numberText.setAttribute('font-family',"Noto Sans JP");
            numberText.setAttribute('font-size',"24");
            numberText.setAttribute('stroke-width',"0");
            numberText.setAttribute('text-anchor',"middle");
            numberText.setAttribute('space',"preserve");
            numberText.style.stroke='#2C447D'; 
            numberText.style.fill='#2C447D';
            numberText.style.zIndex='3';
            numberText.setAttribute('x',Math.round(nCenterX));
            numberText.setAttribute('y',Math.round(nCenterY)+(40-24)/2);        
            svg.appendChild(numberText);

            //для расположения каждой следующей цифры угол увеличивается на 30 градусов
            ang+=30;
            }

            //секундная стрелка
            var sec=document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
            sec.style.position='absolute';
            sec.style.width='2px';        
            sec.style.height=140+'px';//размер стрелки 135, 5px выступают за пределы центра
            sec.setAttribute('rx','45');
            sec.setAttribute('y',clockWidth/2-135);
            sec.setAttribute('x',(clockWidth-2)/2);
            sec.style.stroke='#FFBE4B'; 
            sec.style.fill='#FFBE4B';
            sec.style.zIndex='5';
            sec.style.transformOrigin="150px 150px";       
            
            //минутная стрелка
            var min=document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
            min.style.position='absolute';
            min.setAttribute('rx','45');
            min.style.width='4px';        
            min.style.height=125+'px';//размер стрелки 120, 5px выступают за пределы центра       
            min.setAttribute('y',clockWidth/2-120);
            min.setAttribute('x',(clockWidth-4)/2);
            min.style.stroke='#FFDD56'; 
            min.style.fill='#FFDD56';
            min.style.zIndex='6';
            min.style.transformOrigin="150px 150px";        

            //часовая стрелка
            var hour=document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
            hour.style.position='absolute';
            hour.setAttribute('rx','45');
            hour.style.width='6px';        
            hour.style.height=95 + 'px';//размер стрелки 90, 5px выступают за пределы центра
            hour.setAttribute('y',clockWidth/2-90);
            hour.setAttribute('x',(clockWidth-6)/2);
            hour.style.stroke='#FFAA2D'; 
            hour.style.fill='#FFAA2D';
            hour.style.zIndex='7';
            hour.style.transformOrigin="150px 150px"; 

            svg.appendChild(hour);
            svg.appendChild(min);
            svg.appendChild(sec); 

        self.changeArrowsPosition=function(s,m,h) {

          sec.style.transform='rotate(' + s*6 +'deg)';
          min.style.transform='rotate(' + (m*6 + s*0.1) +'deg)';
          hour.style.transform='rotate(' + (h*30+m*0.5) +'deg)';  
          
        }

    };

var clockLondon=new ViewSvg('Лондон (GMT)','Svg1');
var clockTokyo=new ViewSvg('Токио (GMT+9)','Svg2');
