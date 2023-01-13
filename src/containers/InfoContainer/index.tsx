import { InfoLayout } from '@/components/InfoLayout';
import { TownInfo } from '@/components/TownInfo';

import { Layout } from './styled';

export function InfoContainer() {
  return (
    <Layout>
      <InfoLayout />
      <TownInfo />
    </Layout>
  );
}
