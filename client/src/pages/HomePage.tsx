import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

import { fetchRegistrations, fetchTransfers } from '../services';

import RegistrationList from '../components/RegistrationList';
import TransferList from '../components/TransferList';

function Home() {
  const [newestRegistrations, setNewestRegistrations] = useState<any>({ data: [], isLoading: true });
  const [newestTransfers, setNewestTransfers] = useState<any>({ data: [], isLoading: true });

  const updateRegistrations = async () => {
    const data = await fetchRegistrations(8);

    setNewestRegistrations({ data, isLoading: false });
  };

  const updateLatestTransfers = async () => {
    const data = await fetchTransfers(8);

    setNewestTransfers({ data, isLoading: false });
  };

  useEffect(() => {
    updateRegistrations();
    updateLatestTransfers();
  }, []);

  return (
    <div>
      <Typography.Title level={2}>Latest Registrations</Typography.Title>

      <RegistrationList data={newestRegistrations.data} isLoading={newestRegistrations.isLoading} />

      <Typography.Title className="mt-10" level={2}>
        Latest Transfers
      </Typography.Title>

      <TransferList data={newestTransfers.data} isLoading={newestTransfers.isLoading} />
    </div>
  );
}

export default Home;
