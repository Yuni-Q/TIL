
//
//  main.c
//  20190517
//
//  Created by YunHee Lee on 17/05/2019.
//  Copyright © 2019 YunHee Lee. All rights reserved.
//

#include <stdio.h>

void fn1(void)
{
  int num1 = 2, num2 = 2;
  printf("%d + %d = %d\n", num1, num2, num1 + num2);
  printf("%d - %d = %d\n", num1, num2, num1 - num2);
  printf("%d * %d = %d\n", num1, num2, num1 * num2);
  printf("%d / %d = %d\n", num1, num2, num1 / num2);
}

void fn2(void)
{
  int num1 = 2, num2 = 2;
  int num3 = num1++;
  int num4 = ++num2;
  printf("%d\n%d\n%d\n%d\n", num3, num4, num1, num2);
}

void fn3(void)
{
  int num1 = 10;
  int num2 = 12;
  int result1, result2, result3;

  result1 = (num1 == 10 && num2 == 12);
  result2 = (num1 < 10 && num2 > 12);
  result3 = (!num1);

  printf("result1: %d \n", result1);
  printf("result2: %d \n", result2);
  printf("result3: %d \n", result3);
}

void fn4(void)
{
  int result;
  int num1, num2, num3;

  printf("3개의 정수 입력: ");
  scanf("%d %d %d", &num1, &num2, &num3);

  result = num1 + num2 + num3;
  printf("sum = %d\n", num1 + num2 + num3);
}

void ex1()
{
  int num1, num2;
  printf("숫자 2개 입력 : ");
  scanf("%d %d", &num1, &num2);
  printf("%d\n", num1 - num2);
  printf("%d\n", num1 * num2);
}

void ex2()
{
  int num1;
  printf("숫자 1개 입력 : ");
  scanf("%d", &num1);
  printf("%d\n", num1 * num1);
}

int main(void)
{
  //    fn1();
  //    fn2();
  //    fn3();
  //    fn4();
  //    ex1();
  ex2();
}
