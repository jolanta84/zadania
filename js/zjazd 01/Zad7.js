function silnia(n) {
    if ((n == 0) || (n == 1))
       return 1
    else {
       const result = (n * silnia(n-1) );
       return result
    }
 }
 silnia (5);