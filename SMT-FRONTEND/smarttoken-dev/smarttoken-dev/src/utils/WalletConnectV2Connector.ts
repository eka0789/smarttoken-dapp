import { AbstractConnector } from '@web3-react/abstract-connector';
import EthereumProvider from '@walletconnect/ethereum-provider';

/**
 * WalletConnect v2 connector yang kompatibel dengan @web3-react v6.
 * Menggantikan @web3-react/walletconnect-connector (WalletConnect v1 yang
 * sudah tidak didukung / bridge-nya mati).
 *
 * Membutuhkan Project ID gratis dari https://cloud.walletconnect.com
 * diisi pada REACT_APP_WALLETCONNECT_PROJECT_ID.
 */
export class WalletConnectV2Connector extends AbstractConnector {
  private readonly projectId: string;
  private readonly requiredChains: number[];
  private readonly optionalChains: number[];
  private readonly rpcMap: { [chainId: number]: string };

  public provider?: InstanceType<typeof EthereumProvider>;

  constructor({
    projectId,
    chains,
    optionalChains,
    rpcMap
  }: {
    projectId: string;
    chains: number[];
    optionalChains?: number[];
    rpcMap: { [chainId: number]: string };
  }) {
    super({ supportedChainIds: [...chains, ...(optionalChains || [])] });
    this.projectId = projectId;
    this.requiredChains = chains;
    this.optionalChains = optionalChains || [];
    this.rpcMap = rpcMap;
  }

  private async initProvider() {
    if (this.provider) return;
    this.provider = await EthereumProvider.init({
      projectId: this.projectId,
      chains: this.requiredChains,
      optionalChains: this.optionalChains,
      rpcMap: this.rpcMap,
      showQrModal: true
    });

    this.provider.on('accountsChanged', (accounts: string[]) => {
      this.emitUpdate({
        provider: this.provider,
        account: accounts.length > 0 ? accounts[0] : null,
        chainId: Number(this.provider!.chainId)
      });
    });
    this.provider.on('chainChanged', (chainId: number) => {
      this.emitUpdate({
        provider: this.provider,
        chainId: Number(chainId),
        account: this.provider!.accounts?.[0]
      });
    });
    this.provider.on('disconnect', () => {
      this.emitDeactivate();
    });
  }

  async activate(): Promise<any> {
    await this.initProvider();

    // Membuka modal QR WalletConnect dan menunggu user approve
    const accounts: string[] = await this.provider!.request({
      method: 'eth_requestAccounts'
    });
    let chainId: number = Number(
      await this.provider!.request({ method: 'eth_chainId' })
    );

    // Jika wallet tidak berada di jaringan yang didukung, coba pindahkan otomatis
    const targetChain = this.requiredChains[0];
    if (
      !this.requiredChains.includes(chainId) &&
      !this.optionalChains.includes(chainId)
    ) {
      try {
        await this.provider!.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${targetChain.toString(16)}` }]
        });
        chainId = targetChain;
      } catch {
        // wallet menolak / chain tidak dikenal; biarkan core melempar UnsupportedChainIdError
      }
    }

    return {
      provider: this.provider,
      account: accounts[0],
      chainId
    };
  }

  async getProvider(): Promise<any> {
    return this.provider;
  }

  async getChainId(): Promise<number> {
    return Number(await this.provider!.request({ method: 'eth_chainId' }));
  }

  async getAccount(): Promise<string | null> {
    const accounts: string[] = await this.provider!.request({
      method: 'eth_accounts'
    });
    return accounts[0] ?? null;
  }

  async deactivate() {
    try {
      await this.provider?.disconnect();
    } catch {
      // abaikan error saat disconnect
    }
    this.provider = undefined;
  }

  async close() {
    await this.deactivate();
  }
}

