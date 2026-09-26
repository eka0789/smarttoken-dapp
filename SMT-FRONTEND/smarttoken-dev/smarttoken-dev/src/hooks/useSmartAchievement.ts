import { getContract } from 'src/utils';
import { useWeb3React } from '@web3-react/core';

const useSmartAchievement = () => {
  const { account, chainId } = useWeb3React();

  const getNobilityOf = async () => {
    if (!account) return;
    const smtAchieveContract = await getContract('SmartNobilityAchievement', chainId);
    let nobilityOf = await smtAchieveContract.nobilityOf(account);
    return nobilityOf;
  };

  const getNobilityTypeOf = async () => {
    if (!account) return;
    const smtAchieveContract = await getContract('SmartNobilityAchievement', chainId);
    let nobilityTitleOf = await smtAchieveContract.nobilityTitleOf(account);
    return nobilityTitleOf;
  };

  return { getNobilityOf, getNobilityTypeOf, account };
};

export default useSmartAchievement;
