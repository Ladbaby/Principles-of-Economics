[toc]

# Elasticity and Its Application

之前的分析其实都是定性分析（只确定变化方向），而定量分析则需要用到elasticity

elasticity
: a measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants

## 5.1 The Elasticity of Demand

### 5.1a The Price Elasticity of Demand and Its Determinants

price elasticity of demand
: a measure of how much the quantity demanded of a good responds to a change in the price of that good, computed as the percentage change in quantity demanded divided by the percentage change in price ($\frac{\Delta\text{Demand}}{\Delta \text{Price}}$)

这个比值的结果可以导致不同的评价：
- elastic

    : Demand for a good is said to be **elastic** if the quantity demanded responds ==substantially== to changes in the price

- inelastic

    : Demand is said to be **inelastic** if the quantity demanded responds only ==slightly== to changes in the price

> The price elasticity of demand for any good measures ==how willing== consumers are to buy less of the good as its price rises.

---

虽然说影响elasticity的因素非常多，我们可以基于经验列举一些因素：

- **Availability of Close Substitutes**

    > Goods with ==close substitutes tend to have more elastic demand== because it is easier for consumers to switch from that good to others.
- **Necessities versus Luxuries**

    > Necessities tend to have inelastic demands, whereas luxuries have elastic demands
- **Definition of the Market**

    > The elasticity of demand in any market depends on ==how we draw the boundaries of the market==. ==Narrowly defined markets tend to have more elastic demand than broadly defined markets== because it is easier to find close substitutes for narrowly defined goods

    比如食品这个大类没有替代品，然而冰淇凌有替代品你
- **Time Horizon**

    > Goods tend to have more elastic demand over longer time horizons

    比如油价涨了之后，短期内需求变化可能很小，但是一段时间后大家换成了更加省油的车，需求就减小了

### 5.1b Computing the Price Elasticity of Demand

假如雪糕价格增长了10\%，你买的雪糕的数量会减少20\%

$$
\text{Price elasticity of demand}=\frac{20 \text{ percent}}{10\text{ percent}}=2
$$

也许你会觉得这玩意应该有正负之分，本书统统忽略符号。这样的话，更大的数值就代表了更加responsive

### 5.1c The Midpoint Method: A Better Way to Calculate Percentage Changes and Elasticities

假如我们用上面的这个公式来计算elasticity的话，我们会发现一些很怪异的结果

e.g.

假如我们有两个不同的状态点：

<!-- <img src="image/2022-11-03-11-35-56.png" width=49%> -->

![](image/2022-11-03-11-35-56.png ':size=49%')

当从point A变成point B的时候，price elasticity为：
$$
\frac{33\%}{50\%}=0.66
$$

然而，从point B变成point A的时候，price elasticity为：
$$
\frac{50\%}{33\%}=1.5
$$

究其原因是，计算比例的时候base使用的是初始状态，而两种情况下的初始状态并不相同，，导致最终结果不一样

---

想要解决也非常无脑，就是把base变成两点之间的中点

假设两点分别为$(Q_1,P_1)$和$(Q_2,P_2)$:
$$
\text{Price elasticity of demand}=\frac{(Q_2-Q_1)/[(Q_2+Q_1)/2]}{(P_2-P_1)/[(P_2+P_1)/2]}
$$

这样两个方向的计算就相等了

---

尽管看着很科学，但是本书极少这么计算:
> what elasticity represents—the responsiveness of quantity demanded to a change in price—is more important than how it is calculated

### 5.1d The Variety of Demand Curves

[5.1a](#51-the-elasticity-of-demand)这里其实讲过了定性的定义，这里再结合elasticity的定量定义来说明一下具体定义：

elastic
: when the elasticity is greater than 1

which means the quantity 
moves proportionately more than the price.

inelastic
: when the elasticity is less than 1

which means the quantity moves proportionately less than the price

unit elasticity
: If the elasticity is ==exactly 1==, the percentage change in quantity equals the percentage change in price, and demand is said to have **unit elasticity**

---

price elasticity和demand curve的slope是有非常大的联系的:
>  The ==flatter== the demand curve that passes through a given point, the ==greater the price elasticity of demand==. The steeper the demand curve that passes through a given point, the smaller the price elasticity of demand.

反正取5个情况来看就是：

<!-- <img src="image/2022-11-05-19-40-35.png" width=%> -->

![](image/2022-11-05-19-40-35.png)

躺得越平、弹性越高

### 5.1e Total Revenue and the Price Elasticity of Demand

total revenue
: the amount paid by buyers and received by sellers of a good, computed as the price ($P$) of the good times the quantity ($Q$) sold ($\text{revenue} = P\times Q$)

总收益和弹性之间的关系如下：

<!-- <img src="image/2022-11-05-20-12-33.png" width=%> -->

![](image/2022-11-05-20-12-33.png)

- When demand is **inelastic** (a price ==elasticity less than 1==), price and total revenue move in the same direction: If the price increases, total revenue also increases.

    价格变化比数量变化要大，所以总的收入增加
- When demand is **elastic** (a price ==elasticity greater than 1==), price and total revenue move in opposite directions: If the price increases, total revenue decreases.

    价格变化比数量变化小，总收入减少
- If demand is **unit elastic** (a price elasticity exactly ==equal to 1==), total revenue remains ==constant== when the price changes.

    这种情况就是一个完美的反比例函数

!!! note
    你应该注意到了，其实看总的revenue变大还是变小，纯粹就是和反比例函数的曲线相比。越往外的revenue越大

### 5.1f Elasticity and Total Revenue along a Linear Demand Curve

> Even though the slope of a linear demand curve is constant, the elasticity is not. This is true because the **slope** is the ratio of ==changes== in the two variables, whereas the **elasticity** is the ratio of ==percentage changes== in the two variables

那就来看看线性的供给曲线上，弹性是如何变化的：

<!-- <img src="image/2022-11-05-20-21-34.png" width=%> -->

![](image/2022-11-05-20-21-34.png)

图中的规律总结一下就是：

- At points with a ==low price and high quantity==, the demand curve is **inelastic**
- At points with a ==high price and low quantity==, the demand curve is **elastic**

!!! note
    直接和unit elastic的图像对比的话，感觉像是把inelastic的右半部分和elastic的左半部分拼在了一起

### 5.1g Other Demand Elasticities

除开 price elasticity of demand 之外，还存在其它种类的弹性

#### The Income Elasticity of Demand

体现“收入”对“需求”的影响

$$
\text{Income elasticity of demand}=\frac{\text{Percentage change in \textbf{quantity} demanded}}{\text{Percentage change in \textbf{income}}}
$$

#### The Cross-Price Elasticity of Demand

“物品1的价格”波动对“物品2的需求”的影响

$$
\text{Cross-price elasticity of demand}=\frac{\text{Percentage change in \textbf{quantity} demanded of good 1}}{\text{Percentage change in the \textbf{price} of good 2}}
$$

## 5.2 The Elasticity of Supply

### 5.2a The Price Elasticity of Supply and Its Determinants

price elasticity of supply
: a measure of how much the quantity ==supplied== of a good responds to a change in the ==price== of that good

*elastic* 和 *inelastic* 的概念和 demand 的那边类似

考虑不同的时间长度的话，计算出来的弹性也会有区别：短期内工厂不会轻易改变供给，所以弹性低；长期来说弹性就会高

### 5.2b Computing the Price Elasticity of Supply

$$
\text{Price elasticity of supply}=\frac{\text{Percentage change in \textbf{quantity} supplied}}{\text{Percentage change in \textbf{price}}}
$$

### 5.2c The Variety of Supply Curves

看图可知

<img src="image/2023-07-07-22-09-43.png" width=%>

垂直的时候压根就没有弹性；水平的时候弹性很高

不过实际状态下，这个线一般就是弯的：

<img src="image/2023-07-07-22-21-24.png" width=%>

至于为什么弹性会有变化：

- 供应量较低的时候，厂家的生产能力还有富裕，在价格略微长高的情况下也能给出很多货
- 供应量高的时候，厂家需要更多的设备来生产，成本大幅度增高

## 5.3 Three Applications of Supply, Demand, and Elasticity

这一节会分析三个具体的案例

### 5.3a Can Good News for Farming Be Bad News for Farmers?

假设你是农民，现在发明了一种新的技术，可以增大单位亩产量，那么请问这个技术到底对你来说是好还是坏呢？

复习一下 Ch4 学过的内容，我们分析这个问题要分为三个步骤：
- whether the supply or demand curve shifts
- the direction in which the curve shifts
- use the supply-and-demand diagram to see how the market equilibrium changes

对于这个问题来说：

- 供给曲线会往右移动
- 需求曲线不变

那这种情况到底有没有对农民有利呢？我们可以来看看 total revenue $P \times Q$ (price of the wheat $\times$ quantity sold) 到底如何变化

<img src="image/2023-07-08-11-08-42.png" width=%>

既然 $P\times Q$ 等于围起来的矩形的面积，那事情就决定于 demand curve 的弹性了

农民种植的东西一般都是比较基础的种植物，需求曲线的弹性会较小，所以即便价格大幅度降低，需求也不会怎么变化。故实际上 total revenue 是下降的

虽然农业技术的进步对于整个社会来说是好事，但是对于农民来说，收入是会下降的

### 5.3b Why Did OPEC Fail to Keep the Price of Oil High?



