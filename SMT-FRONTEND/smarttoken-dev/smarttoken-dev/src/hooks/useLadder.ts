import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';

const useLadder = () => {
  const { account, chainId } = useWeb3React();

  /** get one level down users of account */
  const fetchUsers = async (userAccount) => {
    const smartLadderContract = await getContract('SmartLadder', chainId);
    const ladderUsers = await smartLadderContract.usersOf(userAccount);
    return ladderUsers;
  };

  /** get one sponsor of account */
  const fetchSponsor = async () => {
    const smartLadderContract = await getContract('SmartLadder', chainId);
    const sponsor = await smartLadderContract.sponsorOf(account);
    return sponsor;
  };

  return { fetchUsers, fetchSponsor };
};

export default useLadder;
