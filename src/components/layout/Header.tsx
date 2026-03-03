import { getPayloadClient } from '@/lib/payload';
import { Header as HeaderType } from '@/modules/admin/payload-types';
import HeaderClient from './Headerclient';

export default async function Header() {
  const payload = await getPayloadClient();

  const headerData: HeaderType = await payload.findGlobal({
    slug: 'header',
  });

  return <HeaderClient logoText={headerData.logoText} phoneNumber={headerData.phoneNumber} />;
}
