let n = 5

for(indexN = 0; indexN <= n; indexN ++){
  if( indexN % 2 == 1){
    console.log(' '.repeat(n - indexN) + '*'.repeat(indexN))
  }
  
}