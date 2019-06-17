//
//  main.c
//  20190521
//
//  Created by YunHee Lee on 21/05/2019.
//  Copyright © 2019 YunHee Lee. All rights reserved.
//

#include <stdio.h>

void sum(void)
{
  int num1, num2;
  printf("두 수를 입력하세요: ");
  scanf("%d %d", &num1, &num2);
  int num3 = num1 + num2;
  printf("%c\n", num3);
  printf("%d\n", num3);
}

void changeCharToNum()
{
  printf("문자를 입력해 주세요: ");
  char a;
  scanf("%c", &a);
  printf("%d\n", a);
}

void repeat()
{
  for (int i = 0; i < 3; i++)
  {
    printf("Hello world\n");
  };
}

void sum2()
{
  int num1, num2, result = 0;
  printf("두 수를 입력하세요: ");
  scanf("%d %d", &num1, &num2);
  for (int i = num1; i <= num2; i++)
  {
    result += i;
  };
  printf("%d\n", result);
}

void factorial()
{
  int num, result = 1;
  printf("수를 입력하세요: ");
  scanf("%d", &num);
  for (int i = 1; i <= num; i++)
  {
    result *= i;
  }
  printf("%d\n", result);
}
int main(void)
{
  // insert code here...
  //    sum();
  //    changeCharToNum();
  //    repeat();
  //    sum2();
  factorial();
  return 0;
}
