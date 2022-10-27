#FooBarQix
Vous devez implémenter une fonction String compute(String) qui implémente les règles suivantes.

#Étape 1
Règlement
Si le nombre est divisible par 3, écrivez « Foo » au lieu du nombre
Si le nombre est divisible par 5, ajouter « Bar »
Si le nombre est divisible par 7, ajoutez « Qix »
Pour chaque chiffre 3, 5, 7, ajoutez « Foo », « Bar », « Qix » dans l’ordre des chiffres.

#Exemples
1  => 1
2  => 2
3  => FooFoo (divisible by 3, contains 3)
4  => 4
5  => BarBar (divisible by 5, contains 5)
6  => Foo (divisible by 3)
7  => QixQix (divisible by 7, contains 7)
8  => 8
9  => Foo
10 => Bar
13 => Foo
15 => FooBarBar (divisible by 3, divisible by 5, contains 5)
21 => FooQix
33 => FooFooFoo (divisible by 3, contains two 3)
51 => FooBar
53 => BarFoo

#Étape 2
Nous avons une nouvelle demande commerciale : nous devons garder une trace de 0 en chiffres, chaque 0 doit être remplacé par le caractère « * ».

#Exemples
101   => 1*1
303   => FooFoo*Foo
105   => FooBarQix*Bar
10101 => FooQix**
