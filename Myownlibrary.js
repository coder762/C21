function is_touching(o1,o2){
    if(o1.width/2+o2.width/2>o2.x-o1.x &&
      o2.width/2+o1.width/2>o1.x-o2.x &&
      o1.height/2+o2.height/2>o2.y-o1.y &&
      o1.height/2+o2.height/2>o2.y-o1.y){
      return true;
    }
    else{
      return false;
    }
  }
  
  function bounce_off(b1,b2){
    if(b1.width/2+b2.width/2>b1.x-b2.x &&
      b1.width/2+b2.width/2>b2.x-b1.x){
        b1.velocityX=b1.velocityX*(-1);
        b2.velocityX=b2.velocityX*(-1);
      }
      if(b1.height/2+b2.height/2>b1.y-b2.y &&
       b1.height/2+b2.height/2>b2.y-b2.y){
          b1.velocityY=b1.velocityY*(-1);
          b2.velocityY=b2.velocityY*(-1);
        }
  }