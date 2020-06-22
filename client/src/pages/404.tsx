import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Empty } from 'antd';

function CatalogPage() {
  const history = useHistory();

  useEffect(() => {
    const id = setTimeout(() => {
      history.push('/');
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [history]);

  return <Empty description="404 - Page not found" />;
}

export default CatalogPage;
