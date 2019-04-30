class Square {
constructor (x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}
get X(){
  return this.x;
}
get Y(){
  return this.y;
}
get W(){
  return this.w;
}
get H(){
  return this.h;
}

 changeX(value){
   this.x+= value;
}
 changeY(value){
   this.y+= value;
}
 changeW(value){
   this.w+= value;
}
 changeH(value){
   this.h+= value;
 }
}
