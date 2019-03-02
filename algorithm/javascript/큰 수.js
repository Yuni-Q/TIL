function solution(number, k) {
    var answer = '';
    let a = number.split("");
    let c = 0;
    let d = 0;
    for(let i = 0; i < a.length-k; i+=1){
        if(c < a[i]){
            c = a[i]
            d = i
        }
    }
    a = a.slice(d, a.length)
    console.log(111,a,d)
    for(let i = 0 ; i < k-d; i+=1) {
        let b = a[0]
        let index = 0
        
        
        for(let j = 1; j<a.length; j+=1){
            console.log(b, a[j])
            if(b > a[j]){
                b = a[j]
                index = j
            }
            console.log(a, index)
        
        }
        a.splice(index, 1);
    }
    console.log(a)
    for(let k = 0 ; k < a.length ; k+=1){
        answer += a[k]c
    }
    return answer;
}