# Basilisk XYK Pallet
This pallet is used for the decentralized exchange of different assets supported by `Basilisk`.

Our SDK supports this pallet in both `Builder pattern` and `Function pattern`.

**Both** will be explained below.

A quick intro to XYK functionality:
- **addLiquidity**: This call serves to add liquidity to a specific pool
- **removeLiquidity**: This call serves to remove the liquidity of a specific pool
- **createPool**: Call that creates a pool with new assets
- **buy**: Call that allows to buy the asset from the pool that exists
- **sell**: Call that allows to sell a specific asset from the pool that exists

## Builder pattern addLiquidity
```js
    Builder(api)
      .addLiquidity()
      .assetA(assetA)
      .assetB(assetB)
      .amountA(amountA)
      .amountBMaxLimit(maxLimit)
      .build()
```
## Builder pattern removeLiquidity
```js
    Builder(api)
      .removeLiquidity()
      .assetA(assetA)
      .assetB(assetB)
      .liquidityAmount(liquidity)
      .build()
```
## Builder pattern createPool
```js
 Builder(api)
      .createPool()
      .assetA(assetA)
      .amountA(amountA)
      .assetB(assetB)
      .amountB(amountB)
      .build()
```
## Builder pattern buy
```js
    Builder(api)
      .buy()
      .assetOut(out)
      .assetIn(in)
      .amount(amount)
      .maxLimit(maxLimit)
      .discount(discount)
      .build()
```
## Builder pattern sell
```js
    Builder(api)
      .sell()
      .assetIn(in)
      .assetOut(out)
      .amount(amount)
      .maxLimit(maxLimit)
      .discount(discount)
      .build()
```
## Functional pattern addLiquidity
```js
paraspell.xyk.addLiquidity(api: ApiPromise, assetA: number, assetB: number, amountA: any, amountBMaxLimit: any)
```
## Functional pattern removeLiquidity
```js
paraspell.xyk.removeLiquidity(api: ApiPromise, assetA: number, assetB: number, liquidityAmount: any)
```
## Functional pattern createPool
```js
paraspell.xyk.createPool(api: ApiPromise, assetA: number, amountA: any, assetB: number, amountB: any)
```

## Functional pattern buy
```js
paraspell.xyk.buy(api: ApiPromise, assetOut: number, assetIn: number, amount: any, maxLimit: any, discount: Bool)
```
## Functional pattern sell
```js
paraspell.xyk.sell(api: ApiPromise, assetIn: number, assetOut: number, amount: any, maxLimit: any, discount: Bool)
```
## Developer experience

### Builder pattern experience
When developing with the Builder pattern, the developer is guided by the typescript and thus knows which parameter can be added next. This increases the developer experience and makes SDK easier to use.
<img width="459" alt="builder" src="https://user-images.githubusercontent.com/55763425/214562882-dd1a052e-c420-4131-bb50-3b656fabd10c.png">
