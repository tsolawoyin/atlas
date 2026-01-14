*The Philosophy Behind Boots web application*

In computer science, there is a concept called *recursion*. Recursion is one of the techniques used to solve big problems efficiently by breaking them into smaller problems.

I will use *permutation* as an example. Please, you need to know *multiplication* in order to follow the rest of this tutorial. 😅 Yeah that's all you need to know.

For those of us who don't know permutation, permutation is a fancy word in mathematics that means multiplying a given number by all the numbers below it except 0. For instance, 5! (five factorial) = 5 × 4 × 3 × 2 × 1. That's all. 

Now let's solve some problems on permutations

1! = 1
2! = 2×1 = 2
3! = 3×2×1 = 6
4! = 4×3×2×1 = 12
5! = 5×4×3×2×1 = 60

I am sure that at this stage, you already know what permutation is. 
 
Classwork 😂

a. 10!
b. 20!
c. 1000!
d. 2000000!
e. 1trillion!

I know you might attempt a and b but c, d, and e are beyond your reach. You will probably need like 1billion years to solve. 🤣. 

Now back to recursion. How does recursion helps solve this

Ordinary, if you notice, factorial (permutation) problems can solved by breaking the initial problems into smaller problems. Ok. Another approach to seeing permutation is something like this

1! = 1
2! = 2×1!
3! = 3×2!
4! = 4×3!
5! = 5×4!
...
10! = 10×9!

Now do you see. It's more simplified this way. Recursion takes the initial big problem and break it down into smaller sub-problems and solves those ones first and then combine those result of those problems