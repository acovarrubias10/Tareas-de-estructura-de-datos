let array = [];
 
for(let i = 0; i < 1000; i++) {
	array[i] = 1
}
 
for (let i=2; i<1000; i++){
  if (array[i] === 1) {
	for(let j = i+1; j<1000;j++)
        if( j%i===0)
          array[j]=0;
  }
}
 
for(let j=2; j<1000; j++){
	if (array[j])
        console.log(j);
}
 
 
 
 
 
 
 
