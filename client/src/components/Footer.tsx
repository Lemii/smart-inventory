import React from 'react';
import { Layout } from 'antd';
import logo from '../assets/logo-black.png';

export default function Footer() {
  const link = (url: string, name: string) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );

  return (
    <Layout.Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
      <strong className="block">
        <img src={logo} className="mb-1" style={{ height: '1em' }} alt="logo" /> Smart Inventory
      </strong>
      A {link('https://lisk.io/sdk', 'Lisk')} proof of concept created by {link('https://lisktools.eu', 'lemii')}.
      Source code {link('http://github.com/lemii/smart-inventory', 'here')}.
    </Layout.Footer>
  );
}
