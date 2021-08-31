"use strict"

function Model(gmt,view) {
  var self=this;

  self.gmt=gmt;
  self.timer=true;
  
  self.checkTimer=function(){
    if (self.timer && (!(self.currTime))) {
      self.changeTime();
      self.currTime=setInterval(self.changeTime,1000);
    }
    if(!(self.timer) && self.currTime) {
      clearInterval(self.currTime); 
      self.currTime=null
    }
  }

  self.changeTime=function() {
    self.now=new Date();
    self.s=self.now.getUTCSeconds();
    self.m=self.now.getUTCMinutes();
    self.h=self.now.getUTCHours() + gmt;
    view.changeArrowsPosition(self.s,self.m,self.h);
  }

  self.checkTimer();
}      
var NewYork=new Model((-5), clockNY);
var Minsk=new Model(3, clockMinsk);
var London=new Model(0, clockLondon);
var Tokyo=new Model(9, clockTokyo);
var Berlin=new Model(1, clockBerlin);
var Vladivostok=new Model(10, clockVladivostok);

function startTime(EO) {
  NewYork.changeTime;
  Minsk.changeTime;
  London.changeTime;
  Tokyo.changeTime;
  Berlin.changeTime;
  Vladivostok.changeTime;
}

