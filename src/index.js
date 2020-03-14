
// You should implement your task here.

module.exports = function towelSort (matrix) {

let arr=[];
if (matrix==[]){return []};
if (matrix==undefined){return []};
for (i=0;i<matrix.length;i++){
  if(i%2==0||i==0){for (j=0;j<matrix[i].length;j++){
    arr.push(matrix[i][j]);}}else{
      for (j=(matrix[i].length-1);j>=0;j--){
        arr.push(matrix[i][j]);}
    }


  }

  return arr;
}
