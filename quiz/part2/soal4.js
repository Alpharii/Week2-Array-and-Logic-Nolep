function pasanganTerbesar(num) {
    let str = num + ''
    let terbesar = 0
    for(i=0; i<str.length; i++){
        if(str[i] + str[i+1] > terbesar){
            terbesar = str[i] + str[i+1]
        }
    } return terbesar
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99