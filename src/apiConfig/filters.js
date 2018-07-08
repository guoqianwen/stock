function setNum(num){//保留2位小数，如果没小数位自动补全.00
     if(num && num!=null){
      num = String(num);
      var left=num.split('.')[0],right=num.split('.')[1];
      right = right ? (right.length>=2 ? '.'+right.substr(0,2) : '.'+right+'0') : '.00';
      var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
      return (Number(num)<0?"-":"") + temp.join(',').split('').reverse().join('')+right;
    }else if(num===0){   //注意===在这里的使用，如果传入的num为0,if中会将其判定为boolean类型，故而要另外做===判断
      return '0.00';
    }else{
      return "";
    }
  }
function toFixed2(value){
  return parseFloat(value).toFixed(2);
}
export { setNum,toFixed2 }
