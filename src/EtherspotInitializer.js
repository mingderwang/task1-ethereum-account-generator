import { PrimeSdk } from '@etherspot/prime-sdk';

const primeSdk = new PrimeSdk(
  { privateKey: process.env.WALLET_PRIVATE_KEY },
  { chainId: 4337, projectKey: '' }
);

const abstractAddress = await primeSdk.getCounterFactualAddress();

export default abstractAddress;
