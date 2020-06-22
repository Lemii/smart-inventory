import dotenv from 'dotenv';
dotenv.config();

import testConfig from './config/devnet';
import { Application, genesisBlockDevnet } from 'lisk-sdk';
import { RegisterItemTransaction, TransferItemTransaction } from './transactions';

const { ExtendedHTTPApiModule } = require('@moosty/lisk-extended-api');

const app = new Application(genesisBlockDevnet, testConfig);

app.registerTransaction(RegisterItemTransaction);
app.registerTransaction(TransferItemTransaction);

app.registerModule(ExtendedHTTPApiModule, {
  port: process.env.EXTENDED_API_PORT,
  limit: 1000,
  assets: ['recipientId', 'itemProperties.identifier', 'owner']
});

app
  .run()
  .then(() => app.logger.info('App started...'))
  .catch((error: any) => {
    console.error('Faced error in application', error);
    process.exit(0);
  });
