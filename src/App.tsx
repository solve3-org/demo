import "./App.css";
import "./styling.css";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  sepolia,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  avalanche,
  gnosis,
  fantom,
  base,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import Header from "./components/Header";
import Demo from "./components/Demo";

const { chains, publicClient } = configureChains(
  [
    sepolia,
    goerli,
    mainnet,
    optimism,
    arbitrum,
    polygon,
    avalanche,
    gnosis,
    fantom,
    base,
  ],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Solve3 Demo",
  projectId: "04a29ec4e1e9d2fad245a69fd837d257",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        <div className="App">
          <Header />
          <Demo />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
