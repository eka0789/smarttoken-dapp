import { create as ipfsHttpClient, IPFSHTTPClient } from 'ipfs-http-client';

const API_URL = process.env.REACT_APP_IPFS_API_URL || '';
const API_KEY = process.env.REACT_APP_IPFS_API_KEY || '';
const API_SECRET = process.env.REACT_APP_IPFS_API_SECRET || '';
const GATEWAY =
  process.env.REACT_APP_IPFS_GATEWAY || 'https://ipfs.io/ipfs/';

let client: IPFSHTTPClient | undefined;

const getClient = () => {
  if (client) return client;
  if (!API_URL) {
    throw new Error(
      'IPFS is not configured. Set REACT_APP_IPFS_API_URL (and credentials if required) in the environment.'
    );
  }
  const options: any = { url: API_URL };
  // Infura-style basic auth; Pinata users can use a bearer header instead
  if (API_KEY && API_SECRET) {
    const auth =
      'Basic ' +
      Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');
    options.headers = { authorization: auth };
  }
  client = ipfsHttpClient(options);
  return client;
};

/**
 * Uploads a file to the configured IPFS pinning service and
 * returns the public gateway URL for the pinned content.
 */
export const uploadToIPFS = async (file: any): Promise<string> => {
  const ipfs = getClient();
  const added = await ipfs.add(file, {
    progress: () => {}
  });
  return `${GATEWAY}${added.path}`;
};

export const isIPFSConfigured = () => Boolean(API_URL);
