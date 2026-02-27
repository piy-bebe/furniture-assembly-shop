import { getPayload } from 'payload';
import config from '../modules/admin/payload.config';

export const getPayloadClient = async () => {
  return await getPayload({ config });
};
