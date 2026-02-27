import { getPayloadClient } from '@/lib/payload';
import { Header as HeaderType } from '@/modules/admin/payload-types';

export default async function Header() {
  const payload = await getPayloadClient();

  const headerData: HeaderType = await payload.findGlobal({
    slug: 'header',
  });

  return (
    <header>
      <div>{headerData.logoText}</div>
      <div>{headerData.phoneNumber}</div>
    </header>
  );
}
