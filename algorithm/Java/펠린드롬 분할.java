// // https://www.acmicpc.net/problem/1509

// import java.util.Arrays;

// public class Main {
//     final static int MAX_CHAR_LENGTH = 2500;
// 	static int buffer[] = new int[MAX_CHAR_LENGTH];

// 	public static void main(String[] args) throws Exception {
//         char[] input = getInput();
		
// 		Arrays.fill(buffer, -1);
		
// 		System.out.print(devideCount(input, 0));
// 	}
    
//     public static char[] getInput() throws Exception {
//         String input = "";
//         int tmp;
//         while((tmp = System.in.read()) != 10)
//             input += (char)tmp;
//         return input.toCharArray();
//     }
	
// 	public static int devideCount(char[] chars, int startIndex) {
// 		int min = MAX_CHAR_LENGTH;
        
//         if(buffer[startIndex] != -1)
//             return buffer[startIndex];
		
// 		for(int currEndIndex = chars.length; currEndIndex > startIndex; currEndIndex--) {
// 			if(!isPalindrome(chars, startIndex, currEndIndex))
//                 continue;
//             if(currEndIndex >= chars.length)
//                 return 1;
            
//             min = Math.min(min, devideCount(chars, currEndIndex)+1);
// 		}
		
// 		return buffer[startIndex] = min;
// 	}
	
// 	public static boolean isPalindrome(char[] chars, int startIndex, int endIndex) {
// 		if(startIndex >= endIndex)
// 			return false;
// 		for(int i=0;startIndex+i<=endIndex-1-i;i++)
// 			if(chars[startIndex+i] != chars[endIndex-1-i])
// 				return false;
// 		return true;
// 	}
// }

import java.util.Arrays;

public class Main1509_2 {
    final static int MAX_CHAR_LENGTH = 2500;

	public static void main(String[] args) throws Exception {
        char[] input = getInput();

        int minCnt[] = new int[input.length + 1];
        for(int i = 1; i <= input.length; i++) {
            minCnt[i] = MAX_CHAR_LENGTH;
            for(int j = 1; j <= i; j++) {
            	//System.out.println(String.format("%d ~ %d", j-1, i));
                if( isPalindrome( input, j-1, i ) ) 
                    minCnt[i] = Math.min( minCnt[i], minCnt[j - 1] + 1 );
            }
            //System.out.println(String.format("i = %d", i) + " " + Arrays.toString(minCnt));
        }
        
		System.out.print(minCnt[input.length]);
	}
	
	public static boolean isPalindrome(char[] chars, int startIndex, int endIndex) {
		if(startIndex >= endIndex)
			return false;
		for(int i=0;startIndex+i<=endIndex-1-i;i++)
			if(chars[startIndex+i] != chars[endIndex-1-i])
				return false;
		return true;
	}
    
    public static char[] getInput() throws Exception {
        String input = "";
        int tmp;
        while((tmp = System.in.read()) != 10)
            input += (char)tmp;
        return input.toCharArray();
    }
}

// for(int endIdx = 1; endIdx <= input.length; endIdx++) {
// 	minCnt[endIdx] = MAX_CHAR_LENGTH;
// 	for(int startIdx = 0; startIdx < endIdx; startIdx++) {
// 		if( isPalindrome( input, startIdx, endIdx ) ) 
// 			minCnt[endIdx] = Math.min( minCnt[endIdx], minCnt[startIdx] + 1 );
// 	}
// 	System.out.println(String.format("endIdx = %d", endIdx) + " " + Arrays.toString(minCnt));
// }