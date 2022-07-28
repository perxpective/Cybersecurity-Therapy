# EP0601 Advanced Mathematics 1 Notes

## Table of Contents
```toc
```

## Inequalities and Functions
### Set Notation
| Symbol                | Description       |
| --------------------- | ----------------- |
| $\in$                 | Element of        |
| $\notin$              | Not an element of |
| $\subset$             | Subset of         |
| $\subseteq$           | Proper subset of  |
| $\not\subset$         | Not a subset of   |
| $\cup$                | Union             |
| $\cap$                | Intersection      |
| $\{\}$ or $\emptyset$ | Null set          |
| \ or -                | Difference of     |

| Set          | Description             |
| ------------ | ----------------------- |
| $\mathbb{N}$ | Set of natural numbers  |
| $\mathbb{Z}$ | Set of integers         |
| $\mathbb{R}$ | Set of real numbers     |
| $\mathbb{C}$ | Set of complex numbers  |
| $\mathbb{Q}$ | Set of rational numbers |

### Absolute Values
#### Definition of an Absolute Value

$|a| = \begin{cases}a & a > 0 \\ -a & a<0 \end{cases}$

#### Theorem
If $a$ and $b$ are real numbers, then:

1. $|-a| = |a|$
2. $|ab| = |a||b|$
3. $|\frac{a}{b}| = \frac{|a|}{|b|}$
4. $\sqrt{a^2} = |a|$

#### Inequalities with Absolute Values
Suppose that $a$ is positive real number

1. If $|x| = a$, then $x = \pm a$
2. If $|x| < a$, then $-a < x < a$
3. If $|x| > a$, then $x < -a$ or $x > a$

--------

### Functions
> A **function** is a relationship or mapping between inputs and outputs such that each input corresponds to only **exactly one output**

#### Domain, Codomain, Range
- **Domain** - set of all inputs in a function
- **Codomain** - set of all possible outputs in a function
- **Range** - set of actual outputs that have inputs

#### Function Notation
$f: X \to Y$

where $X$ is the *domain** and $Y$ is the **codomain**

#### More on Domains
- The **natural domain** of a function is the interval of inputs for which the rule of formula defining the function makes mathematically sense
- Domain of a function can be restricted depending on the nature of the physical problem which function models
- Unless domain of function specified beforehand, has to be determined from function's rule or formula

#### More on Codomains
- Normally specified in the nature of the problem at hand.

#### Arithmetic Operations on Functions
1. **Addition of Functions:**

$(f_1+f_2)(x) = f_1(x) + f_2(x)$

2. **Subtraction of Functions:**

$(f_1-f_2)(x) = f_1(x) - f_2(x)$

3. **Multiplication of Functions:**

$(f_1f_2)(x) = f_1(x)f_2(x)$  

4. **Division of Functions:**

$(\frac{f_1}{f_2})(x) = \frac{f_1(x)}{f_2(x)}$ provided that $f_2(x)\neq 0$
         
The domains of $f_1 \pm f_2$ and $f_1f_2$ is the intersections of the domains of $f_1$ and $f_2$ and
$f_2(x) \neq 0$ if $\frac{f_1(x)}{f_2(x)}$.

#### Piecewise Functions
> A function made up of two or more different functions defined on non-intersecting sub-domains

$g(x) = \begin{cases}f_1(x) &if&x\in A \\ f_2(x) & if & x \in B\end{cases}$

$D_g = A \cup B$

#### Composite Functions
> The composition of functions $g\circ f$ is well-defined when the **range** of $f$ is a subset of or equal to the **domain** of $g$ i.e. $D_g \subseteq R_f$

---

## Limits
### Definition of Limits
> If values of $f(x)$ can be made as close to some number $L$ by taking values of $x$ close to but not equals to $a$

$\lim\limits_{x\to1} f(x) = L$ or ;
$x\to a$, $f(x) \to L$

(As $x$ approaches closer to $a$, $f(x)$ approaches closer to $L$)

### One-Sided Limits

#### Left Hand Limit
> If $x$ gradually increases towards value $a$ without touching and $f(x)$ goes closer and closer to $L_1$, the **left-hand limit** of $f(x)$ can be written as:

$\lim\limits{x\to a^+} f(x) = L_1$ or $x\to a^+$, $f(x) \to L_1$

#### Right Hand Limit
> Likewise, if $x$ gradually decreasaes towards value $a$ without touching and $f(x)$ goes closer and closer to $L_2$, the **right-hand limit** can be written as:

$\lim\limits_{x\to a^-} f(x) = L_2$ or $x\to a^-$, $f(x) \to L_2$

### Two-Sided Limits
> The two-sided limit of a function at $x=a$ is defined as:

$\lim\limits_{x\to a}f(x) = L$ if:
$\lim\limits_{x\to a^-}f(x) = L$ and $\lim\limits_{x\to a^+}f(x) = L$

#### Jump Discontinuity
> A function $f$ is said to have a **jump discontinuity** if
> at $x = a$ if:

- left and right hand limits are finite and;
- $\lim\limits_{x\to a^+}f(x)\neq\lim\limits_{x\to a^-}f(x)$

### Infinite Limits
> The expressions: $\lim\limits_{x\to a^-}f(x)=+\infty$ and $\lim\limits_{x\to a^+}f(x)=+\infty$ 
> 
> denote that $f(x)$ increases without bound as $x$ approaches $a$ from the left and right respectively and vice versa.

#### Vertical Asymptotes
If $\lim\limits_{x\to a^+}f(x)=\lim\limits_{x\to a^-}f(x) = +\infty$, then $\lim\limits_{x\to a}f(x) = +\infty$

Similarly, if $\lim\limits_{x\to a^+}f(x)=\lim\limits_{x\to a^-}f(x) = -\infty$, then $\lim\limits_{x\to a}f(x) = -\infty$

> The line $x = a$ is called a **vertical asymptote** of curve $y = f(x)$ if any of the above is true.

### Limits at Infinity
If values of $f(x)$ gets as close as possible to a number $L$ as $x$ increases or decreases without bound, this can be written as:

$\lim\limits_{x\to +\infty}f(x) = L$ or $\lim\limits_{x\to -\infty}f(x) = L$

The line $y=L$ is called the **horizontal asymptote** of curve $y=f(x)$ if either of the following above holds true.

#### Infinite Limits at Infinity
If values of $f(x)$ **increase** without bound as $x \to +\infty$ or  $x \to -\infty$:

$\lim\limits_{x\to +\infty}f(x) = +\infty$ or $\lim\limits_{x\to -\infty}f(x) = +\infty$

If values of $f(x)$ **decrease** without bound as $x \to +\infty$ or  $x \to -\infty$:

$\lim\limits_{x\to +\infty}f(x) = -\infty$ or $\lim\limits_{x\to -\infty}f(x) = +-\infty$

### End Behavior of Polynomials

#### Theorem
1. $\lim\limits_{x\to +\infty}x^n = +\infty, n \in ℕ$

2. $\lim\limits_{x\to -\infty}x^n = \begin{cases}-\infty & n=1,3,5...\\ +\infty & n=2,4,6...\end{cases}$

3. $\lim\limits_{x\to +\infty}(a_nx^n + a_{n-1}x^{n-1}+...+a_0) = \lim\limits_{x\to +\infty}a_nx^n, a_n \neq0$

4. $\lim\limits_{x\to -\infty}(a_nx^n + a_{n-1}x^{n-1}+...+a_0) = \lim\limits_{x\to -\infty}a_nx^n, a_n \neq0$

### Continuity of Functions
Real-valued function $f$ is said to be continuous at point $x=a$ if:

1. $f(a)$ is defined
2. $\lim\limits_{x \to a} f(x)$ exists
3. $\lim\limits_{x \to a} f(x) = f(a)$

If either of these conditions are not met, $f$ is discontinous at $x=a$

<img title="" src="https://i.imgur.com/7zJxEmv.png" alt="" width="589" data-align="center">

#### Types of Discontinuities
| Discontinuity | Description                                                                                        | Rules Violated |
| ------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| Removable     | "Hole" in the graph, can be removed by filling the "hole" (redefining the function)                | 1              |
| Jump          | Graph jumps from one finite value to another                                                       | 2, 3           |
| Infinite      | Graph is unbounded and breaks due to vertical asymptotes and thus one-sided limit reaches infinity | 1, 2, 3        |

#### Definitions of Continuity
If functions $f$ and $g$ are continuous at $x=a$, then:

- $f+g$
- $f-g$
- $fg$
- $\frac{f}{g}$ if $g(a) \neq 0$ or discontinuous at $x=a$ if $g(a) = 0$

    are continuous at $x=a$.

If $\lim\limits_{x \to a}g(x)=L$ and function $f$ is continuous at $x=L$, then:
$\lim\limits_{x\to a}f(g(x)) = f(\lim\limits_{x\to a}g(x)) = f(L)$

If g is continuous at $x=a$ and $f$ is continuous at $x=g(a)$ , then $f \circ g$ is continuous at $x=a$

#### Continuity of Intervals
A function $f$ is continuous on $[a,b]$ if the following conditions are met:
1. $f$ is continuous on $(a,b)$
2. $f$ is continuous from the right at $x=a$ if $\lim\limits_{x \to a^+}f(x)=f(a)$
3. $f$ is continuous from the left at $x=b$ if $\lim\limits_{x\to b^-}f(x) = f(b)$

#### Limits of Common Functions
> The limit as $x$ approaches $a$ can be simply evaluated by substituting $x=a$ into the function if it is continuous at $x=a$

$$\lim\limits_{x\to a}f(x)=f(a)$$

### Techniques for Evaluating Limits
#### Limit Laws
> Let $a \in \mathbb{R}$ and suppose the following limits exist:
> 
>  $\lim\limits_{x\to a}f(x) = L$     and     $\lim\limits_{x\to a}g(x) = M$

**Laws**

1. $\lim\limits_{x\to a}[f(x) + g(x)] = \lim\limits_{x\to a}f(x) + \lim\limits_{x\to a}g(x) = L + M$

2. $\lim\limits_{x\to a}[f(x)-g(x)] = \lim\limits_{x\to a}f(x)+\lim\limits_{x\to a}g(x)=L+M$

3. $\lim\limits_{x\to a}[f(x) \bullet g(x)]=\lim\limits_{x\to a}f(x)\bullet\lim\limits_{x\to a}g(x) = LM$

4. $\lim\limits_{x\to a}[\frac{f(x)}{g(x)}]=\frac{\lim\limits_{x\to a}f(x)}{\lim\limits_{x\to a}g(x)}=\frac{L}{M}$ provided that $M \neq 0$

5. $\lim\limits_{x\to a}\sqrt{f(x)}=\sqrt{\lim\limits_{x\to a}f(x)}=\sqrt{L}$ (If $L<0$, rule is for $n$ odd only.)

#### Evaluating Limits of Rational Functions
1. Check if denominator is zero at $x=a$. If not, function is **continuous** at $x=a$ and can be simply substituted into the function. If not, proceed **Step 2**
2. Check if point is removable. If it is, factorize numerator and denominator separately. If there is a common factor of $(x-a)$ in both the numerator and denominator, cancel the factor $(x-a)$
3. At this step, the point of discontinuity is infinite, and hence only need to decide if limit is positive or negative infinity ($\infty$)

> If $x\to \pm \infty$, rational function may tend towards finite number L or continue on to $\pm \infty$. 
> Useful technique is to factor out $x^n$ from polynomials in numerators and denominator separately so that $\frac{1}{x^{k}}\to 0$ as $x \to \pm \infty$ (for $k > 0$)

#### Evaluating Limits of Functions with Radicals
- Always rationalize radical denominators
  - $\frac{1}{\sqrt{a}-\sqrt{b}}=\frac{1}{\sqrt{a}-\sqrt{b}} \times \frac{\sqrt{a}+\sqrt{b}}{\sqrt{a}+\sqrt{b}}=\frac{\sqrt{a}+\sqrt{b}}{a-b}$
	- $\sqrt{a^2}=|a|$

### Squeeze Theorem
![](https://i.imgur.com/gURqKyC.png)

> If $g(x)\leq f(x) \leq h(x)$ when $x$ is nearer to $a$ and if
> 
> $\lim{x\to a}g(x) = \lim\limits_{x\to a}g(x) = L$ then $\lim\limits_{x\to a}f(x)=L$

### Evaluating Limits of Trigonometric Functions
$$\lim\limits_{x\to 0}\frac{sin{x}}{x} =1$$

![](https://i.imgur.com/LrJHAm5.png)

### Intermediate-Value Theorem
If $f$ is continuous on $[a,b]$ and $k$ is any number between $f(a)$ and $f(b)$, where $f(a)\neq f(b)$, then there exists a number where $x \in [a, b]$ such that $f(x) = k$

The IVT can be used to check the existence of roots of continuous functions.

![](https://i.imgur.com/MG18eZh.png)

## Differentiation
### Average and Instantaneous Velocities
- Average velocity (constant velocity to be maintained to cover stated amount of displacement in stated amount of time):
$$v_{average}=\frac{\Delta s}{\Delta t}=\frac{s(t)-s(t_0)}{t-t_0}$$
- Assuming that the limit exists, average velocity from time $t$ to $t_0$ elapse such that $\Delta t$ is very quick
- Thus, it can be assumed that velocity is constant when $t \to t_0$

$$\lim\limits_{t\to t_{0}} v_{average}=v(t_0)$$
- Note: result is the same regardless if $t>t_{0}$ or $t<t_{0}$

### First Principles of Differentiation
![500](https://i.imgur.com/rOzaF9l.png)

- Provided the limit exists, the derivative of real-valued function $f$ with respect to $x$ at $x_0$ given by:
$$\lim_\limits{x\to x_0}=\frac{f(x)-f(x_0)}{x-x_0}$$

- Also known as the gradient of a tangent line ($m_{tan}$)
- To obtain gradient of secant line ($m_{sec}$) at $x_0$, $\Delta x\to 0$:
$$\frac{\Delta f}{\Delta x}=\frac{f(x)-f(x_0)}{x-x_0}=\frac{f(x_0+h)-f(x_0)}{h}$$
### List of Derivatives of Common Functions
- $\frac{d}{dx}(x^n)=nx^{n-1}$
- $\frac{d}{dx}(\ln x) = \frac{1}{x}$
- $\frac{d}{dx}(a^{x})=a^{x}\ln a$
- $\frac{d}{dx}(e^{x})=e^{x}$
- $\frac{d}{dx}(\sin{x})=\cos{x}$
- $\frac{d}{dx}(\cos{x})=-\sin{x}$
- $\frac{d}{dx}(\tan{x})=\sec^2{x}$
- $\frac{d}{dx}(\cot{x})=-\csc^2{x}$
- $\frac{d}{dx}(\sec{x})=\sec{x}\tan{x}$
- $\frac{d}{dx}(\csc{x})=-\csc{x}\cot{x}$
- $\frac{d}{dx}(\sin^{-1}{x})=\frac{1}{\sqrt{1-x^{2}}}$
- $\frac{d}{dx}(\cos^{-1}{x})=\frac{-1}{\sqrt{1-x^{2}}}$
- $\frac{d}{dx}(\tan^{-1}{x})=\frac{1}{1+x^{2}}$

### Differentiation Rules 
- Let $u \equiv u(x)$, $v \equiv v(x)$, $y \equiv y(u)$
- Constant Multiple Rule
	- $\frac{d}{dx}(ku)=k(\frac{du}{dx})$
- Sum Rule
	- $\frac{d}{dx}(u+v)=\frac{du}{dx}+\frac{dv}{dx}$
- Product Rule
	- $\frac{d}{dx}(uv)=u\frac{dv}{dx}+v\frac{du}{dx}$
- Quotient Rule
	- $\frac{d}{dx}(\frac{u}{v})=\frac{v\frac{du}{dx}-u\frac{dv}{dx}}{v^2}$
- Chain Rule
	- $\frac{dy}{dx}=\frac{dy}{du} \times \frac{du}{dx}$

### Higher Order Derivatives and Implicit Differentiation 
> - nth order derivative is to differentiate $(n-1)$ order derivative
$$\frac{d^{n}y}{dx^{n}}=\frac{d}{dx}(\frac{d^{n-1}y}{dx^{n-1}})$$
- In implicit differentiation, chain rule employed

> - Given function $f$ defined in terms of $y$, differentiate $f$ with respect to $x$ by:
$$\frac{d}{dx}(f(y))=\frac{d}{dy}(f(y)) \times \frac{dy}{dx}$$

### Differentiable Functions
> - Function $f$ differentiable at $x_0$ if following limit exists:
$$\lim\limits_{h \to 0}\frac{f(x_0+h)-f(x_0)}{h}$$
> - If $f$ is differentiable at every point $x$ in $(a,b)$ then $f$ is differentiable on $(a,b)$
> - Function $f$ not differentiable at $x_0$ if limit above does not exist
- There is a relationship between continuity and differentiability

> - All differentiable functions are always continuous
> - Two conditions whereby continuous function can fail to be differentiable
> 	- left and right derivatives are finite but not equal
> 	- left or right derivative are not finite
> - Polynomials, sine, cosine and exponential functions are differentiable everywhere

### Applications of Differentiation
#### Indeterminate Forms and L'Hopital's Rule
- Limit of rational function $\frac{f(x)}{g(x)}$ where both $f(x) \to 0$ and $g(x) \to 0$ as $x \to a$
- Use L'Hopital's Rule to evaluate indeterminate forms

> If $\lim\limits_{x\to a}f(x)=\lim\limits_{x \to a}g(x)=0$ or $\pm\infty$, then:
$$\lim\limits_{x \to a}\frac{f(x)}{g(x)}=\lim\limits_{x \to a}\frac{f'(x)}{g'(x)}$$
provided that $\lim\limits_{x \to a}\frac{f'(x)}{g'(x)}$ exists or equal to $\pm\infty$
>
> Moreover, statement is also true in case of limit as $x \to a^{-}, x \to a^{+}, x \to -\infty$ or $x \to \infty$

<u>Breakdown L'Hopital's rule into steps</u>
1. If expression not in the form of fraction, manipulate it until it is in the form $\frac{f(x)}{g(x)}$
2. Check that $\lim\limits_{x \to a}\frac{f(x)}{g(x)}$ is an indeterminate form
3. Differentiate $f$ an $g$ separately
4. Find limit of $\frac{f(x)}{g(x)}$
	- If limit exists and is finite or equals to $\pm\infty$ then it is equal to the limit of $\frac{f(x)}{g(x)}$

### Rolle's Theorem
![](https://i.imgur.com/wc9bNSO.png)

> Suppose that function $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$
> If $f(a)=f(b)$, then a point $c \in (a,b)$ such that $f'(c)=0$ exists

<u>Remarks:</u>
1. Rolle's Theorem does not give us a quick way to compute point $x=c$
2. Rolle's Theorem  that at least one such point exists but does not say exactly how many such point exists in the interval