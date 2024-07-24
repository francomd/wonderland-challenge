# Wonderland FE Challenge
By [*Franco Dalmasso*](https://www.linkedin.com/in/franndalmasso/)

[🧾 Challenge](https://hackmd.io/@ardy/SJd5OqKR6) | [🚀 DEMO](https://wonderland-challenge.vercel.app/)

```bash
# Development

npm run dev

# Test

npm run test
```

### Stack:
NextJS | React | TypeScript | Linaria | Rainbowkit | Wagmi | Viem |
Prettier | ESLint (stylistic) | Husky

### Thougths
> The challenge was fun. It's simple but it pushes creativity.
> 
> Polygon Mumbai is deprecated. The tokens should be re-deployed on Amoy. 

TODO:
- [X] Connect your wallet
- [X] Detect the wrong network and allows you to switch between chains (Sepolia and Polygon Mumbai)
- [X] Fetch balances of DAI and USDC tokens
- [X] Displays both balances in a readable/human way
- [X] Has an input for wallet address to set selected/target user
- [X] Has an input for each token to enter the amount of tokens to be approved or transfered
- [X] Has 2 buttons for each token: APPROVE and TRANSFER
- [X] The inputs have the correct validations hooked to the buttons and also an error message to show to the user ('not enough funds', 'need to approve token first', etc). All of this is calculated/validated with the amount the user types
- [X] Executes the transactions for APPROVE and TRANSFER of tokens to a user
- [X] Some UNIT tests
- [X] Allows you to call the Mint() function to get some tokens to test the app
      
Bonuses:
- [X] Organized folder/files structure
- [X] Well defined state architecture
- [X] Buttons with loading state (disable buttons and dispatch a notification)
- [X] Detect that you are in the correct network
- [ ] Some E2E tests



### Linaria (first time)
> - It's a good CSS-in-JS lib. Zero-runtime, stylesheets generated during build.
> - It includes theme generation and dynamic props, in the styled components way.
> - Doesn't have an attribute for inline custom styles (like sx or cx in others libs).
> - Some times, when writing dynamic styles, the hot-reload gets buggy.
