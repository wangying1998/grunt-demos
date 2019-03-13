function add(x,y){
  //return Number(x)+Number(y);
  if((typeof x == 'number')  && (typeof y == 'number')){
    return x+y;
  }
}
module.exports = add;
