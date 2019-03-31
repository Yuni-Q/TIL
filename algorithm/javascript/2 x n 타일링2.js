
// 백준 문제 2×n 타일링 2
// https://www.acmicpc.net/problem/11727

var fs = require('fs');
var input;

if(process.platform=="win32"){
    input = fs.readFileSync('input.txt','utf8').toString().trim().split('\n');

}
else{
    input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
}

var n = parseInt(input.shift());

var a = 1;
var b = 1;
var c = 0;
var dp = [1, 1];
var answer = dp[0]
for (var i = 2; i <= n ; i++ ) {
    dp[i] = (dp[i - 1] %10007 + (dp[i - 2]*2) %10007)%10007;
}
answer = dp[n];
console.log(answer);

// 11727 2xn 타일링 2
// import java.io.BufferedReader;
// import java.io.InputStreamReader;

// public class TestN {

// 	public static void main(String[] args) throws Exception {
// 		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
// 		int n = Integer.parseInt(br.readLine());

//         int[] rectCountDp = new int[n + 1];
//         rectCountDp[0] = 0;
//         rectCountDp[1] = 1;
//         rectCountDp[2] = 3;
//         for(int i = 3; i <=n; i++) {
//             rectCountDp[i] = rectCountDp[i - 1] + 2 * rectCountDp[i - 2];
//             rectCountDp[i] = rectCountDp[i] % 10007;
//         }

//         System.out.print(rectCountDp[n]);
// 	}
// }