## Description

#### This repository is a POC for the solution of the following problem

The scenario is for cross platform React Native app that can interact with various blockchain networks and also act as a non custodial crypto wallet to sign transactions in blockchain.

The app was mostly focused on the Governance related actions on Substrate based blockchain networks like Polkadot, Kusama, Litentry etc. To generate the accounts from seed phrases and to sign transactions with the private key some Polkadot crypto utils and keyring packages were being used, which are primarily developed for web. Since those are JS based usage in a React Native environment was trivial. However, the challenge was those packages use WASM for crypto operations and React Native JS engines do not support WASM yet. So the packages were falling back to ASM which is very slow and the React Native app was not usable since the UI thread was blocking while executing any crypto operation and UX was degrading.

One (probably the best) way to solve this problem was to write those crypto functions natively using C++ or Java and expose them as native modules in React Native. But that would take considerable amount of time and effort. Also the React Native ecosystem does not yet have a good library for crypto operations our aim was to open source it as an independent package.

But time is the most valuable asset here, a quick and functional solution was needed to keep the app usable. One idea is to bundle the crypto utils in a JS package and load it in an internal WebView in React native. Since the native WebView has WASM support, the crypto operations can be performed by serialized message passing to and from React Native WebView. This looks like a good temporary solution.

However, the only way to communicate to and from a WebView is through serialized message passing and the implementation detail could get very messy very fast if not planned properly.

This repository is a reference implementation of the solution. The solution has two parts. One is similar to a web app which imports the Polkadot crypto libraries and some utility functions are wrapped around them. WebPack bundles a minimized JS file into an html which is linked as a static asset in ios and android. The process is completely automated and integrated with ios and android build step.

The second part is to load that html file from the assets into a RN WebView and call specific methods for specific crypto operations by message passing to and from the WebView. In this case the hardest implementation challenge was the event driven message passing. A serialized message is sent to the WebView and it does specific crypto operation and send back the result in another event. This is needed to be unified in a promise based structure, otherwise the implementation detail is exposed and the flow is not reusable. The problem was solved by creating a reference of a promise and attaching a unique id to that while sending a message to the WebView and when the result came back resolving that promise to make the data available. The persisting of the state was done using [Recoil](https://recoiljs.org/) atoms.
