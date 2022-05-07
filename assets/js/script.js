let control =0;
let count = 0;
function showOne(){
   control = 0;
   document.querySelector('.tree').classList.remove('active');
   document.querySelector('.two').classList.remove('active');
   document.querySelector('.one').classList.add('active');
   move(control); 
}
function showTwo(){
   control = 1;
   document.querySelector('.one').classList.remove('active');
   document.querySelector('.tree').classList.remove('active');
   document.querySelector('.two').classList.add('active');

   move(control);
} 
function showTree(){
   control = 2;
   document.querySelector('.one').classList.remove('active');
   document.querySelector('.two').classList.remove('active');
   document.querySelector('.tree').classList.add('active');
   
   move(control);  
}
function move(c){
   switch(c){
      case 0:
         document.querySelector('.slide').style.marginLeft = `-${c*100}vw`;
         break;
      case 1:
         document.querySelector('.slide').style.marginLeft = `-${c*100}vw`;
         break;
      case 2:
         document.querySelector('.slide').style.marginLeft = `-${c*100}vw`;
         break;
   }
}
function goNext(){

   if(count == 2){
      move(count);
      count = 0;
   }else{
      move(count);
      count ++;
   }
   
}
setInterval(goNext, 5000);




