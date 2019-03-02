function solution(numbers) {
    var answer = 0;
    const arr = [];
    for (let i = 0; i < numbers.length; i += 1) {
        let num = numbers[i];
        if (arr.includes(num)) {
            break;
        }
        arr.push(num);
        let isPrime = true;
        if(num <= 2){
            isPrime = false;
        }
        for (let q=2; q<num/2; q++) {
            if (num % q == 0 || num <= 2) {
                console.log(num, 111)
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            answer++;console.log(num)
            
        }
        if (numbers.length > num.length && numbers[i] != 0) {
            for (let j = 0; j < numbers.length; j += 1) {
                if (i == j) {
                    continue;
                }
                num = numbers[i] + '' + numbers[j];
                if (arr.includes(num)) {
                    break;
                }
                arr.push(num);
                let isPrime = true;
                for (let q=2; q<num/2; q++) {
                    if (num % q == 0 || num <= 2) {
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime){
                    answer++;console.log(num);
                }
                if (numbers.length > num.length && numbers[i] != 0) {
                    for (let k = 0; k < numbers.length; k += 1) {
                        if (i == k || j == k) {
                            continue;
                        }
                        num = numbers[i] + '' + numbers[j] + '' + numbers[k];
                        if (arr.includes(num)) {
                            break;
                        }
                        arr.push(num);
                        let isPrime = true;
                        for (let q=2; q<num/2; q++) {
                            if (num % q == 0 || num <= 2) {
                                isPrime = false;
                                break;
                            }
                        }
                        if(isPrime){
                            answer++;console.log(num);
                        }
                        if (numbers.length > num.length && numbers[i] != 0) {
                            for (let a = 0; a < numbers.length; a += 1) {
                                if (i == a || j == a || k == a) {
                                    continue;
                                }
                                num = numbers[i] + '' + numbers[j] + '' + numbers[k] + '' + numbers[a];
                                if (arr.includes(num)) {
                                    break;
                                }
                                arr.push(num);
                                let isPrime = true;
                                for (let q=2; q<num/2; q++) {
                                    if (num % q == 0 || num <= 2) {
                                        isPrime = false;
                                        break;
                                    }
                                }
                                if(isPrime){
                                    answer++;console.log(num);
                                }
                                if (numbers.length > num.length && numbers[i] != 0) {
                                    for (let b = 0; b < numbers.length; b += 1) {
                                        if (i == b || j == b || k == b || a == b) {
                                            continue;
                                        }
                                        num = numbers[i] + '' + numbers[j] + '' + numbers[k] + '' + numbers[a] + '' + numbers[b];
                                        if (arr.includes(num)) {
                                            break;
                                        }
                                        arr.push(num);
                                        let isPrime = true;
                                        for (let q=2; q<num/2; q++) {
                                            if (num % q == 0 || num <= 2) {
                                                isPrime = false;
                                                break;
                                            }
                                        }
                                        if(isPrime){
                                            answer++;console.log(num);
                                        }
                                        if (numbers.length > num.length && numbers[i] != 0) {
                                            for (let c = 0; c < numbers.length; c += 1) {
                                                if (i == c || j == c || k == c || a == c || b == c) {
                                                    continue;
                                                }
                                                num = numbers[i] + '' + numbers[j] + '' + numbers[k] + '' + numbers[a] + '' + numbers[b] + '' + numbers[c];
                                                if (arr.includes(num)) {
                                                    break;
                                                }
                                                arr.push(num);
                                                let isPrime = true;
                                                for (let q=2; q<num/2; q++) {
                                                    if (num % q == 0 || num <= 2) {
                                                        isPrime = false;
                                                        break;
                                                    }
                                                }
                                                if(isPrime){
                                                    answer++;console.log(num);
                                                }
                                                if (numbers.length > num.length && numbers[i] != 0) {
                                                    for (let d = 0; d < numbers.length; d += 1) {
                                                        if (i == d || j == d || k == d || a == d || b == d || c == d) {
                                                            continue;
                                                        }
                                                        num = numbers[i] + '' + numbers[j] + '' + numbers[k] + '' + numbers[a] + '' + numbers[b] + '' + numbers[c] + numbers[d];
                                                        if (arr.includes(num)) {
                                                            break;
                                                        }
                                                        arr.push(num);
                                                        let isPrime = true;
                                                        for (let q=2; q<num/2; q++) {
                                                            if (num % q == 0 || num <= 2) {
                                                                isPrime = false;
                                                                break;
                                                            }
                                                        }
                                                        if(isPrime){
                                                            answer++;console.log(num);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(arr)
    return answer;
}