import { Contract } from 'ethers';
import InfoContractABI from '@abis/InfoContract.json';
import { InfoContract__factory } from '@/types/ethers-contracts';

const CONTRACT_ADDRESS = InfoContractABI.networks["5777"].address;
const contractInstance = InfoContract__factory.connect(CONTRACT_ADDRESS, null);
contractInstance.setInfo("Hello World", 18);

export { contractInstance };

