"use strict";

  function ClockControllerButtons(city,start,stop) {

        var self=this;
        var model=city;

        self.setTimer=function() {
            model.timer=true;
            model.checkTimer(); 
        }

        self.removeTimer=function() {
            model.timer=false;
            model.checkTimer(); 
        }
               
          self.startButton=document.getElementById(start);
          self.startButton.addEventListener('click',self.setTimer);
          self.stopButton=document.getElementById(stop);
          self.stopButton.addEventListener('click',self.removeTimer);
        

  }

    var dom1=new ClockControllerButtons(NewYork,'Dom1Start','Dom1Stop');
    
    var dom2=new ClockControllerButtons(Minsk,'Dom2Start','Dom2Stop');
    
    var svg1=new ClockControllerButtons(London,'Svg1Start','Svg1Stop');
    var svg2=new ClockControllerButtons(Tokyo,'Svg2Start','Svg2Stop');

    var canvas1=new ClockControllerButtons(Berlin,'Canvas1Start','Canvas1Stop');
    var canvas2=new ClockControllerButtons(Vladivostok,'Canvas2Start','Canvas2Stop');

