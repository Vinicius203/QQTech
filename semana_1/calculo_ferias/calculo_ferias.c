#include <stdio.h>

int main()
{

  double valor_ferias, salario;
  int meses_trabalhados;

  printf("Entre com o valor do salario do funcionario: ");
  scanf("%lf", &salario);

  printf("Entre com o numero de meses trabalhados pelo funcionario: ");
  scanf("%d", &meses_trabalhados);

  valor_ferias = (salario * meses_trabalhados) / 12;
  valor_ferias += valor_ferias / 3;
  printf("O valor de remuneracao de ferias para o funcionário e: R$ %.2f\n", valor_ferias);

  return 0;
}