export default {
  app: {
    label: 'smart-inventory',
    minVersion: '0.0.1',
    version: '3.0.2',
    protocolVersion: '1.1',
    ipc: {
      enabled: true
    },
    genesisConfig: {
      EPOCH_TIME: '2016-05-24T17:00:00.000Z',
      BLOCK_TIME: 10,
      MAX_TRANSACTIONS_PER_BLOCK: 25,
      REWARDS: {
        MILESTONES: ['100000000'],
        OFFSET: 1
      }
    }
  },
  components: {
    logger: {
      fileLogLevel: 'debug',
      logFileName: 'logs/devnet/smart-inventory.log',
      consoleLogLevel: 'info'
    },
    storage: {
      logFileName: 'logs/devnet/smart-inventory_db.log',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      min: 10,
      max: 25,
      poolIdleTimeout: 30000,
      reapIntervalMillis: 1000,
      logEvents: ['error']
    },
    cache: {
      enabled: false,
      host: '127.0.0.1',
      port: 6380,
      db: 0,
      password: null
    }
  },
  modules: {
    http_api: {
      enabled: true,
      httpPort: Number(process.env.BASE_API_PORT),
      address: '0.0.0.0',
      trustProxy: false,
      access: {
        public: false,
        whiteList: ['127.0.0.1']
      },
      ssl: {
        enabled: false,
        options: {
          port: 443,
          address: '0.0.0.0',
          key: './ssl/lisk.key',
          cert: './ssl/lisk.crt'
        }
      },
      options: {
        limits: {
          max: 0,
          delayMs: 0,
          delayAfter: 0,
          windowMs: 60000,
          headersTimeout: 5000,
          serverSetTimeout: 20000
        },
        cors: {
          origin: '*',
          methods: ['GET', 'POST', 'PUT']
        }
      },
      forging: {
        access: {
          whiteList: ['127.0.0.1']
        }
      }
    },
    chain: {
      forging: {
        force: true,
        delegates: [
          {
            encryptedPassphrase:
              'iterations=10&cipherText=44ed96f26f4816d7acf91f9224a0db36dba26384ab458ad16a9c5f74ad11b5e3352d82c76fca689903e7dbc1cd55b2ec013bb9877d2d6c0129adbebd42c968c0661bbb4872f97b3406284bcd&iv=21921be40f694f13f2520726&salt=e42bbe86bd6698c5f7e298977ade8689&tag=87fcf23488489ec20263f35d35e51c06&version=1',
            publicKey: '27bac3eec40f65394197a93c93e3e03f427ec04271ec3e45d933b9550c8ab015'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=e94bbb976a121bf9519e98bebcf29e7bd0829c932496bf3e98fa1281e3dde2c5855b61c501baac1eeba554a53d8e730d398ca2c5448d1b3dd5f32ff10983fc192b3ae00dd043102f1d8fa750&iv=1420bd65bc30e78ae628bb38&salt=6831cadca9c4f83a4ca03770cdd8714c&tag=399f7e0db7c3b2efd256eb89771c4f4c&version=1',
            publicKey: '1d4677e06f870449f271f859e299e3514718e4b8498c1bd832daa7843b83d9c5'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=99383a6f230e8d472c6e790947ee35845f1f93bb113f3be0fceb464f878a2cfee62b392c275c323ff1dc8f030c3431270d6a255663318dbfae4cdfe4aebe0d013b9bd8ec424eb7&iv=cdfd5a1315d439342e27346d&salt=1da4414db11a459597f48edd8a9bb0f6&tag=fcef599f19cb9d65d9573da2d024279c&version=1',
            publicKey: 'bee5dfc9e2dca043c3fe898199f5acfc510c274d98f463a0660aca0c375242ca'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=ed50d4529aedb957d141e6f2ef2af9dda0d8f17638c77c0b1d4b2211256f21282121b2fa418c1cf33c37aac6b9da7ca5c2ebc6f51829f8203977998cb171cb8fb180765db63a8ddb1b1e85ea56dafff34d&iv=c8acb2b4d8ca19f79e0808a2&salt=102028f23100eb04d92e0009e455ab88&tag=b854a6e97e973b01754183b226e462b5&version=1',
            publicKey: 'ad46339369e9bc1cea4982a9ef510dae6d777d8d3ab1cd3893c41dfed71e6d5d'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=3dd1d25e4ffd6c7b16a7c0044c4fd058c0f1385bd2738fa3c8982ef183d1748d770f7a9032761526725a7b9bed0d71b1a7d645c7b8e949a84b2961500fbb213f92d09a28cc872cb055e55f4f&iv=b1cfac7108ad17927c511d86&salt=9b5f4365336019229d0d2ac8d66c085d&tag=93f64f241a37d936eafb2f922001a41e&version=1',
            publicKey: '54298817e3e5811c9b8e109e48c22787c5401129c0a6ef0307d9e329820709dc'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=5a0669aecd350a90028675e3bc59a3ad7802437d08aa9ff05a15049a2632d8cb5b963dcdf7b58125624773513a6dc8979580351b6c9d4a25c5d5413be4c09d9dc41d8060201ab9&iv=dc77fa466dfb28326c01ed4b&salt=6dee1f13110e92641516fa83e96b2091&tag=6012b23e8d565cec1bd1e3115d7fa211&version=1',
            publicKey: '9f4a7d405744edee89f2567fb8e77c66a94282408a62aaea0c4f0f218f482a1c'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=23eac1b6e443a725134ceaf08e6905e1e8493cfd9132be9aff4e2f8643d46489d77f9686b7a9d473a95f0c33e1771d6b56454117d961a08a304846af03ec1b7bff8ea507a173a8a8da8928e21d&iv=f69073b508a21c98866d71a3&salt=93e45ac43eb2c06caf631a05c4984634&tag=6455e1d15dd88ed358ae9e7f5c11a5be&version=1',
            publicKey: '6efe9df36d1b6a93dde7a6ff2f9294c97b4ad454ee089d3f0abc8a94d4aac15e'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=4b8cdbf1b6e4c9889d6f30b851cc53fb4ed1179d721aa0139181ccd646b0c2948b275b7e53160225e9ee5b80ff5e6ffb5da00fda0513ed026a782f8a45463c1b06e8d61f791c20dd2375e80f9525&iv=c9176f3901690c6e4add4383&salt=c4fc43cf04a26fa96dc336a4a460b39a&tag=373a7ab7fb1e2c242f5c5b0c8eb39700&version=1',
            publicKey: 'fdaf5bd1e7d4f8ff9cde5de231c0b847c50fbff9e4594981003f795599b1e942'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=22e015a06a5a741c3b5695092d49fa05bf9175b5c9d6558a512300318152b37fee92d975c5805d7fc6aa4f708f207b550da28ad9ce80818daa861e60fdcf6013ecec33dd371242904f2c&iv=c9323b2029e9664a666ee777&salt=4a3025201be8369e7ee2cb2615a6a42f&tag=69427de18cc498b053225c84238c0728&version=1',
            publicKey: '953f89e8f63e8b3f493d6ef89300ab8b40c972cc656b463b0b93df3f13cd9d9e'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=8ce90146f843c2a9fcabcea30de52045895331e3f46cca5e10ac01faa1a8853e35d1ab72ff6368e31438d9b831cfdf590476ef8c3ffe8b8ee14649ba5f9f95ef2eb7c18b0561c2f62d395d0c64f1&iv=ae15860ab96d1804e8146993&salt=57aa2f5e9a8cb49d7c691153d6dd94a3&tag=2aa3a94d378e43ed92b2f805d4569bd8&version=1',
            publicKey: '448da45f2987b245fe088bfd33aa256c490fd3d338fecfd5cac1f54de7406806'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=9e0fbbf5c83e9bd1f7e942d33f80b499d1ac0d5be2c932196adc50d8afaa337b4367b7a78e41160d279a2747b06612d9c79efd6b5fdb4c5da872157dd8c446fa4a61bbdb28b7459403360055337d5ee5bb64&iv=44d1c26559d90080b13a59ff&salt=656a70bb87fa651917d3242ce7e542f4&tag=027bf892303ac7ef5e7d78b8bc099e59&version=1',
            publicKey: 'f986b272cdecc68cc7f6210874fa237c58d658d8db41b260075db5ca4c6f3296'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=68595e0443af68817d8f3724b05da7d34d36f333796188f311817be1fdf1fa08e8ce75bc3d4cb288d276b7e1bfff335ea89c2bf648311213cafb4bce64e9d8b062166b21fb4e92ff&iv=72ec99922d8a4cc39d2c92f8&salt=89a691036063dcbe907f36e1aa634ae5&tag=314f7c4413ecc161a8759f8ae2c38c94&version=1',
            publicKey: 'a916f32473e9c0fb845d555ee1a62797612a720e8b39d57e17fdb7f5dcfae86a'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=0d04ac3e5e562ff907f47e0555b88349f05758d291e5cd8d4891e1026a87131d3c58ebc2296f4c06df1932fa98d1af0247fb8eb8a142bac09fd278ab8eb18af2a977ddb3b4&iv=93509c108274deaf9328a546&salt=83ee58699722a11a2bf3ab2b57addbd5&tag=4be304af2902b229d740aeb1219bf503&version=1',
            publicKey: '6bb5c79dfebc9949968b7ff5244ed8bed0635c77c3ad03561a9fe99a9e6e3e25'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=4e4a8b0ae8f8d90cc24ce028964c371e202ef38bd1d66a0be850288a89ec664ee3ca77a6bfcc22c16e30c5c80a87e8037f37b238556fa1c1faf83902c52506e048311fe770db7a&iv=6932a62810c0da3985cee6e5&salt=20518dd1141e185655f95aabb4dcf050&tag=d02f878bd42e5b9898998bcf97a88ec9&version=1',
            publicKey: '9a52501583f165b43de7a46ed9aee695e61fc8ecf1178cf7eb784e9b67eebcd8'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=63b1e137a9ce7027ac26ae83c1b801c64b8e54f194c85ab12a07cea4257766b099f020deead994b91a33c88a7c120dcff1841a4eac819053e39278efe43fcb0283adb4ebcf80c10828aec78d1078f6&iv=6b58939f4d4f852de89cfe9f&salt=d754078086db47ea7a9f4bf00ad2a7f0&tag=b36af4f48b820dcc0f51901938a1a4b6&version=1',
            publicKey: '40c82d0e0b4437410371c2d445d7d71248d60b9b94239e2c3a7f3ee2976ef106'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=46931884d824593195d0863e9f87337c6c2f427ae0cd3f0bb9208601f25b7f6f0d328266663bd9317635b4e5e1d19f51adcb044c432a8bd117f66d5a2ecb2f67255e285e34c08d644175959a5fc066c8d156b87c&iv=3db010606bae22c5fd9f1a3f&salt=2453553ff15fe6869278f3e4c74c45f8&tag=29d53b5649acfa79d5ebe9e056b04053&version=1',
            publicKey: 'c2005fb5916ce668745780eb1ebcc8c647d87871ab71afe83da6a1359a278146'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=1ee7a0d71571a12705d58368988c4f803fb9bf38eb50bd8ff73cda88a8b7e994154146bb1775c53760c31670beb4a0b587f81f460618b1094764ae0fdb0b270c0bfd83def2bb33679d49bf6d3b73fe88&iv=54d2a7d9c623a7f42cbb8223&salt=cfe4ce1cbe62a719bfc7814811023a17&tag=dace905751fdfac54f7100d39f9c9191&version=1',
            publicKey: 'a1f174e8e68de794adc5c33f1ee87ddd770314e673363aa6f9e7068035560925'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=b99cffcc1467989128455026bc785c3a9446e7ee25736814f5ddfb107dcdec3d183882d9c34c377dbc8759fc066a6fc45be798c1a11a87309cd7c7f50608ed2cb26f7eb17c689bcc8020e3324df5973384&iv=b67c18663c71ea4e8adc29d7&salt=b78a6c3fda51c334b148eb8217cadb50&tag=cfbf62208f0e31c8b1ac63be22d079c5&version=1',
            publicKey: 'cd6d181284e2930cb7967146248e4ab93e22c410a10443decf910c0c2363a684'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=01136e6f751c0d1db4bc7b5d826bc3fe5b4362100049bbd34cf3f45feb6b5d7e9210e85687fce2a2776e1acae35309887996a4fb1cb461c19e3186f44bc7f6a8328a44a3358af9384fb7fc&iv=f896e7813d01f474675f1981&salt=1d661c310c450b877e8fea70bd996be5&tag=a1fe1d0f05b29d98a453504d1da4ef28&version=1',
            publicKey: 'd03d85fc12dee4a18ef5524ca7b8c1d5626a4be7347eded082ef9aa7ed892a59'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c6ad20737818ab6ced1a26a3d6f179311b4453c810e6a9d2477280b9a1e451bcd7ebbc1f4f20320a4702faa3cba894e9c4ded039ffa975ee8a2141f1d7362a2d1a7395dfedd831c97c677b645d3ef33d54448b&iv=046d9ce1e346d533cf0e2353&salt=74d67b47a37e6363157209cae5c33fd5&tag=da6e3fda67bea6e4d62ec31a891df11e&version=1',
            publicKey: '7351f319155e85ad29b74e3734ab46615522617033041b8b2f9913e35c5dec2f'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=1cea02c9e68a9163c50002cea620feafe3fb5297141bcf25e8f2562ea7c339cacecab2c2f3b45939a74cfd5b92d72d135182714c8d6ec55f3279459f973628fcb7218a073788e627dc&iv=85661bafae2a52599d42f851&salt=2a746e01ca3a909ad25a6e9f8d0b0efb&tag=5ef1486ab3d80a0efd12967b149c72ab&version=1',
            publicKey: '4f8f89046dbb6e25fa468ba3a9a08d889d3782cc742c7ab3bea179436c5de215'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=ab3e742391d3fad54f492e8feb901c5e14a7026d4d83f1e39f110111ebcf4e57526ead928c3d0fcadbaff2839947c429d53137cefeecaae4539dbb9bccfaa8b7fb11faba39686d4fd396&iv=5ea205934c6d63c709afbe20&salt=5f6e794192413dbb0fcc6e102b60c5cb&tag=642850cb2271e35df8dee1603a0dd272&version=1',
            publicKey: 'a8d3a3ec34d22928b55ecf9d8d575e6310538935daf977f5b56bb788c4ac9f6e'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=daba87be2b14d9bc76df161ccb46a9469590a66fbc4c75c4717d9dffb7d8d60737bc89e5ff064058f58da106fbb62c6c98f59defbc1db07867af2f87bb15365154fb6082d421&iv=68c8db0a2ed981614d7c47d6&salt=bc1c8f401c783e0f63f52368d780abad&tag=5af9a0cb2cc515603bd437ee73ee372a&version=1',
            publicKey: 'ceceebf136a369937b6988bdc09e1d01e0cf90a10699259b1a267251af645f78'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=05143fbea1b42c6ca5a6b9b77cb905a65fa5e7ee24c63b6eb48d075cfe6c80886cf557a3d06e46035cdcb3e6b6966d68830408a09a4d6f33693a918875cd154029057896a21657927cd3&iv=07456033b4a649f3fb217fc0&salt=2be5fda50106fd68868b9c46bf432f1c&tag=6eec8bf86f13e198d0dabc2c22560e44&version=1',
            publicKey: '664660271a533e02f13699d17e6fb2fccd48023685a47fd04b3eea0acf2a9531'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=ccd82e225e7bb8801553d5ab019e108a620673d08f160a33c3e092591b13be716602b52dc92c58e6b013a3ce068779431384ec6d6d1ac4e75b355f0198e0651d9c05be49f58f64&iv=9b5693b5b358e3cd63d29985&salt=bec2ca2f4ab9e46297bd4ec735e3795f&tag=b2050de146458845a2e0c183abb0d9a7&version=1',
            publicKey: '25a3d39166ba0f684f2b37431e838e0c3b709e5ebb1633bdc598e1b7c4289d5e'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=d2f48952e1ff2d01ab53cdfbc830a8f3a4d6d44208b6a27e500d4ca2c1684f2742184e228f58c4eddaa0be34a10b279c53a881fdd07e02dedbf384dfeb23c703fb3e306d11315a1f9e96ad50bdf97dcd1f089ec972&iv=5d674952ab5611f717c0af84&salt=0bb633b57530eef232a090941cbc3cc9&tag=99f748ad0ccb2f97d445f91f3a80dba0&version=1',
            publicKey: '545293b159c1205b4d6ebe4276fe5edce3a3f8acadfe0f80fdd2221cec003e9d'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=edd101db5ca6a79f21b8ee2bcb6bf489899a903df1a555501098c9353a88e032adbc83e587295936d5f8426ea00d9cb27f3786011fc3e7ba53724bb54427b92a82a67b1d&iv=3ab0e18cad6b326366abe6d5&salt=12dbbe8a1d75564facb0b11c85feff6b&tag=59a09b086daeee4a41d756ef7a048717&version=1',
            publicKey: 'ef7ac1ce53fef049d26fced7a6a13ba878e2e563f4db03d7dc2059a8ae7b27e2'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c0f3380165ff6d7b14bcd7358009bfec9f397de44d29d8b35aaa55de7400d3e9d0aff4642e9ce6c9b9eb616a0ba1c69a558a6506829be1900381981d3e30bea7498d1373064f078c8ed0a15077806d&iv=f3cf95abb56ad22a99e228ce&salt=33fcaf4a0d4f17760f8f6057131c5b03&tag=6dad98033f295c9ffcd91e5eab21b550&version=1',
            publicKey: '4d77037232850a4d003ef7984d7c731e4653fe131159b9e6ec7cbdacc0d81bb3'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=e3b2296982d32bc63452938085c4635e370428c878842fbbea865abcf4024bbeeb6b7f8cb39c66d7aabfd567eb8643d3ecea3024a730cd7a9769f481b094b32af703b747362f5e945db10b919f91ca31da&iv=e7e84c8f4b40adf50b5f228a&salt=0e5aa0ee0d9ef1f52a82b9e9537fa1ae&tag=c2f762867221b1dae86af4293f591e62&version=1',
            publicKey: 'c883d355b4ce51e429c42e01a2172c9b5f2e1792c02f42872f335db5fdd00abc'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c040bcc37619514cb0442e27bd72833c761ca70b7afc9fec216028d1520869907288e26aa5556fd0337ef936ac110119cc11ce965e9e5a4b1ca55b6f074627d8ec65fd494238e8&iv=f48d1e8716ed546d2ee9d56e&salt=8891fd73d8a49b7b738b1924f104b5b3&tag=a3a4732953429254aa6663e4bf215347&version=1',
            publicKey: 'ef0e7cda1e3e41b65944f744af8cba62a17a2c60e813120a1f9282d72678ed4a'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=be08a89018ceaeff5919919914cbe868e1013cbbbc8bb559e66a57420049dd1769365048926f38496c5eedc4a0bd0ff95f23da12975d47a5f2644b77a18797e6e5e4c15c34a88b896cff63eeb17d718c&iv=6893e6bb501870c1dba82af0&salt=dc6ac2ed538b4cd79d5afa621e4bf4e3&tag=af56f16712f309bad6a769c32433dce9&version=1',
            publicKey: '52f4d4d727d3e8d2b8c587b170c4b3ad969895e2ab22adf21a9d7059b88bce10'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=1601b58d85a6bef238c376cf24d6ff5d2352f049e9149ab748efa4da64595ab2c2443a4282017cab617466c44b44f1a929bc82a54ff5891de8a3fada40e05c430cbb67fa&iv=8abe4cc308d1daafefd01d4b&salt=e1d5c53819ad0b8c1a48debaea8917f8&tag=ee0a6f4b7bb057d8447ac39254ded0f9&version=1',
            publicKey: 'cff0b10a342175f6f6655575d52de9f7d18890ba8250a126a37abe82a65892b8'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=4588102df923e9a734c079e02b436ebbaeb866e6e344fe4074b68f9dbb2cd1de5e1afd62045fdecf0702c2cf31bcec19fabb693f9d790e690b3e3de906506f23506016db1e8f959e880de3f6909b&iv=0d4f69bb56e485fd6eccf70d&salt=6988aa808c5a1c87f0a4f9470d5f83ef&tag=4284bc5429588bdefaddba7392b817d8&version=1',
            publicKey: '4663cdac7e5aafd9ad16ac80623241a6325e20745c5d0a3d7602fc29ed0f9c1c'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=1e89049881323cc399f9be0a8060a48fea764683f46b017b70b3cf6176b9975d5700a811bf24f26183588f42a7ba00fbb30ca4e1967f26be25e40d860c033209d49948f16878be3f&iv=b45e40e2d5ba888168a209c7&salt=5bb70d0a8834e69773bcadcf81b993ff&tag=18423b8958ab1586c84edf1d42baeee0&version=1',
            publicKey: '8a1f1cf1bed1f8753c78435c7ddffc11e78dbfdd27f413802c06edac5c39d217'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=eb9374ad6798f51c8efc4fc9a99caa76fba5e2b19a9bb7a541351cf9fc6fb14ca2763d7d30de16101e0d72eae83ab5d5c83bbb8963e30a9a9c6cb06a57762dd806b254b9933f75a6eea1a864c6&iv=75cb6eb51db5252ef35c1d26&salt=4b08e58586e8297eb36f4ddd57a7870c&tag=33efa3e5efb7fa853419a70bf2313fee&version=1',
            publicKey: '9818ee3947760aeae90e2cca8592a373a44af11f13cc5e2490b9a056598c34c7'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=8a7a4389d8f13d60e3aefff3404b55502bc97285043445c6cd4b99d586faf677e40942d883cfb7332cd96538ed757385520cfc4cde2fcfd5aa480ea7d6ef9b53a0dc7674e39a121ec280e69b88&iv=9ed3dfeda934e3d5cb44b2c2&salt=32dd4cb070ad04369b4718a5a2869b3f&tag=0591bb0f76c2d9ee6a7aa5892888abdf&version=1',
            publicKey: '0ee0074501faea2d48f5fec60672396b6e40e10413e31b28a9b6a2f49fe27830'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=356e989a70f485221872b1d8019b432362e4855f07737467928091febf5aa486e804ff31c3a231afd6a96896e7b6a3a4afef2b31791c98f4d8244f6d9c48b6f44b359cd044869f73cd783fca&iv=021de4607c5c4464b0cb6071&salt=414d43930f0eace2566e6e4d556fc788&tag=2130a4a24777324904ae74818937f3e6&version=1',
            publicKey: '7e6b5381e9d57f3d18365fc0a9190fe369fcbb83a0c8f6ba53d3ea75721942d5'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=187c571412073a3e0bbc2e680ce29f73012ec8c12f49028a01d2f57453db0ade30878c46b44901d8f0d7da2f5a8323d3429c6d3ac99fb61a8bb93324764dc908e70a58ea5e72f3&iv=0a5f0935a811c99737a5eca0&salt=59165c5c536166319a9e8c56e9f151b6&tag=38f6ca448ed3860fca53cc60e71f743e&version=1',
            publicKey: '6e5facdb7ff8f63180c964d691adab01789b2cf066a33ee36c2cff5d043306be'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=2789ba0fcbf8d381ef8f22fb8fbf9d1da9135916ef246599b5a51b14e43a443bf649c43ae07ba9baa6d26848988e370a41792b1dd012b573efd6c5a6fd222ae1edb168ba1d624e91caa5470201d4&iv=4d5fda0b7d4397bcdcf9c61b&salt=06906b40ba795f2baa4007a435bad111&tag=761e01624343e244586702727bc8980b&version=1',
            publicKey: 'f743a7f5bc8474ccf304fd3d2dc598f852e55344e6bc4eb1ab05a24e9594c365'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=53cd53ae327a3700b9b63682d9bf082a330cb328dff1a1a4a4ed34b3fb6378242f9b17b2eca95e08706ebdb07961c5c8f77ea16e49ea1e071395783267dd780ff865d4cb5e671cfb2aa266&iv=14b06b14d457515165f7e472&salt=fcf9592e30e25d71d228a8eed07cf8df&tag=6956e40ce3ecfde88831f3c5e67d5c36&version=1',
            publicKey: '04de7937d1bb0bcb18c4528b76362cbe69c644cab4c0f16bb6544f7a7efc4267'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=7db057a87874be4571cc7a7180b7300ed0a22025dfd77d2c17c42d524d3b25fd2ca59f69454d6468febebecfedea19478d3f06c20ef72da5aeca820fe64a804d13ec5896d60982aa846df2b633a1d4ae47f24842fa&iv=62d1fd867451267b48a1831a&salt=e3947d2ee05ce8259ba07343584ca948&tag=cb40ab656aad57daa9d229178ef457ed&version=1',
            publicKey: '426103d878a17824d6aa9327ce08a036cf690efffaa0f8bccfa1f10b1c0b64f2'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=a49ef8286c4917025c3c6ea83a020c06511f47bab9e69f24fb127777f94a006426309b522b99c4e94d0e9aa7f96cedbf191060210ccf8e480fa00f67b5b2b251a07126fc&iv=b6ee923522d84c577683e80b&salt=c69fac3409e4b95293800c27bd8d38de&tag=69567e6901ef77bd1b9557487fa363ce&version=1',
            publicKey: 'f0878b21516f76014eaf5b27c9cf272dbf8dde76387c085b2777b6f95de26288'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=e67b747b464642dcb8b0817e0c8733d3a353ffe4931c41bba64edf529cbac427c238f3d530f9b36eaaa34a9cb372efeba2b8774e522b4b01071cf2101ee98610d39ae30d765a98d35ddadb&iv=7c65a551e96ecf90a6fee761&salt=e2ee5cd990387cc2c50828f172b3295b&tag=c7ba517e415eafd59b582f2035bdd518&version=1',
            publicKey: '46a1fd90a5456842bb7610b5374e71df7753b7767e9d36c54f27faeae429ffcb'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=1c1b3b53087132214056ac431828558e8c043dbebe12113bd57f5feb2d8c7d22d1424b5456f30ab1be5d46f5012db280f8ae59b44fd85eb101f9de1558a509c73a1e0f00f055f38819907784e456490e2f&iv=2fa0def03ea38d7e7754f6d2&salt=764ed0095ae479dccd472a81efe9fad1&tag=c0ed655892e7b3a1eec3a8c50d527cf5&version=1',
            publicKey: 'b32d7f0156abffaf1270537576566740ebe57d3bbff546f70d18e7b034417f9c'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=42c9c176febdd7606bc34cc6a04b7f0997908fc9fb1af3cb722550a6b1f83901047bd48277b9c7088754ed6156114e381d8ca7f081537fca790ef93f01e21fa0785335c1af9e&iv=f8b69f0c73cf081d8df3ef5b&salt=758be23a8dc5a2d256340de00c195e68&tag=e15e4953ed581f693d361193a59594c0&version=1',
            publicKey: '4985f0dfcffb7a4bc50165690df46cc64c756e27236badd4f94e2ec9e129ab08'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=929ade2fcb4d9128586af64982a015e4cc054b92ffb3b1c4e6a19eb4fb222a3e1a6a5dcce2fde3cb7eabbee32e0bf77efcc065d7b44e0230e076b9a4d3f7730c34216380484ec118833d7a3250d0c856b7ae&iv=6fac4537e35d75e8deec1af1&salt=2cc64ec56533e44c38b2a11b7fc564e8&tag=7c2664fa17a01f3efa5a916d02d0da31&version=1',
            publicKey: '4da26f13cdd734813980366d3875053d5d894193004dbdc0b741dd5a9fa825b1'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=f8234f06224ad42b80a034df9b64a8520fc21b3f327b0af788f9d665e295d48f04280c80cb1cbc04e4d10304ceed0a0e2309031646c7e55d0613521e4e7cce4daff82bf2dfa54e19&iv=be7fa6c80318c4e34eb482fd&salt=20813c4dd73db2aac909efa7dcedd58a&tag=0e1882eb91a8c43fca2f1595611243d4&version=1',
            publicKey: '9233ff74671eb04cda1b28b63599b840bd82fb52ddb7b3eca71a7edd126358c2'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=bf28a649a1d69acd20f72d6d1a625d7a255aa77a298718dc77acf38838514f9b8f32a888ad9bd7201b5849ea557568b1966ded16de0ff64ebcae2a3c5bbc7370ab7fc21e125c56c6c7937ca5&iv=a78fbfa833f5f95d9a6de80e&salt=8a17f87b4ba80a5e964476ab844af5e8&tag=c4d6e884beac8878e4921c14f7888693&version=1',
            publicKey: '7fe53138101e3a34f3ed22308910692483d32dd3591f31137ff807a1e001a55c'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=14730f41e4406297dad79c386a994e14177def268a1d1ece0160718280e9bb79a912e888c32e90b1fa219842093ec66509861f04cf875e0b62b947a7eb1cd895346507b70ff2ab8704b2c520&iv=58f6c0f36621cd81fb296ee4&salt=3f4de1134e711eb7ef91e7af8ce79621&tag=049bae9920b28e6e2ed860e51189d90f&version=1',
            publicKey: '5d57d76f2f1b28e0f9fcdc5b44841825f042a04d733e99a53ed9544f4e4f09b6'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=5073ead261f552b82666508da0b1ef8c37bb08f235f6352fcba093b8737a46e0ee28980b03dcda6fb690f56d3e49ecb0bf36299f9b481f6c7ddd1c7697f5b63406a035a1421b1846cba2&iv=f6f8c484da2059a2841a4f34&salt=2df6ff48c29b4afedd00a0c8a8c095a6&tag=1d54762bad7e45c8fbd6fcb39077343a&version=1',
            publicKey: '95f90a8aaec1e29af8e74d2dac1b405439fccad35e56864c9b4eac9c28328cf6'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=f61be86556bb57195d889b10449818907be70851c47970d0b59d3ea71a4880d57ef6d3b3f59ebdc86bb1ad45b844660714beb5a4b92b5e97813fee782f3b2ae994638ea01acb2d&iv=8fe6289394e09f777b329bfb&salt=bdbdc744514358e48d9318c7ee3d4b69&tag=6e0780db8604ef25c135961da366da35&version=1',
            publicKey: 'a44c83e6051f7129c62f9aab54631c70366407573219aafe01fda9fdef88d893'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c47f7f07b2581286165bed9c2bdfb3b9a50dd9bb29f000c0deeb8437aa1c6e99f7537baad0ebf4bd63811326d54e5cdf37ae3315b0ecff9150756d4e171ad77a6f98414ba5e8df2985daee&iv=80c5922416d8ed27ef93b95e&salt=86283be0ae34e3b6112211e39e2ab8e0&tag=baf1d53a9e6363c7a64f3520817a6e9b&version=1',
            publicKey: 'c11b34b4223fa0c4c0944a0711cd3678d033b454f225e1450076a7def12b73b7'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=73c31753632ba4339d3302fedcfc378269936804358886677f7defbbacec5e2a40d2df318c9249d39e5d14103448fc1a7e2a0fea4562211955c754cc1201b84c214461a6ed20&iv=26d54c746d73b9e4dbd60e7e&salt=c20ab59e9f02e2fcef8925a2ff2fc459&tag=cedb4b2e69b1197032b0b89f95a3bdb3&version=1',
            publicKey: '91062babc4fd527fa188291ca9f192e7883282ff71fb2a03fac916a6479a48e6'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=bd2f6fdc87ac2579fdfa4b5368b232ade6b074a17117ee2ac44c4e10b9d2b19a940d612400fbcc8020b9af6c4fe609d8750264567df3d7dbfdee5ca79136e72a16a2b04d1f03013995767317b7bb11bc&iv=334d7f2732d49a143d8d2c38&salt=caa34b34bcb07393353f54b64d559af9&tag=b883a0cce2667de9c762596ae2a77abd&version=1',
            publicKey: '94d62cd2e7249ab0aa19d35002335be7d4d39cc7e3579ae77638a4ef6dd52993'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c3a761f8ddf54578764065b81d8d92abad7c74a8e1e1d65e0cf8815c20b92de9a435cf06075f29a02554555bc74e6a9b622278df942a9e26de65881574365478268254e3b72465607343bbe9db&iv=c24ed7804dfdb5bf7c8a28e4&salt=0bac75ffccdc4cae772a3ba66584d9f2&tag=ac7496da7f8e519c35a371e3c5b45e7b&version=1',
            publicKey: '1bcf7704efc299d519618de9ddfebc2e3e0e5643e2ac0cb6a60babc08d3afe02'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=02fd5d3c7a2bdc1e170a21ae5de97ee5704f28a32c929b90840614435f510c4bf2195efc60ecee7e90f823fda7c338c0bf18da2e884f9128fb0519d1856de9f79361aa43d8290b6e185421ae5ae93e1e010db91e&iv=504383d23824450d8f00b8e0&salt=51006bd75176fa2599c7dbf4a82976ae&tag=016c9b2d004b2636a378d7081694aa2b&version=1',
            publicKey: 'c787166d16653ba9410638dbe48a207e84ab95bc08233849cb4ad93a270ebd56'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=ea6200388d07b6e82043c75c243a0f861b8869a6273c0848595461eabae945d387a8300a7d602f8cc2ac3db7c9672bbbbbe0505db45d7ccbd8b99115984aa96da87b46b0efee1fc359d2b4082844&iv=bc314c9dbebfd6f4dbbb10dd&salt=08e1d9a313bbd750f6b53f69d341d811&tag=5e912f02b18b8a1e158ac177cb4ff259&version=1',
            publicKey: '33cafc7fd4db2b555e52117b7799b6d8a0df23800ae64faaac1877a444ed1d91'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=1bcf019c6ac85564c21d3d620bd3356bf0919fd19b8fd17429ba31103461aeb6dceb5f612229af3e1d052f9d3d44db3490f2d5067e267fe965b639803d26af51d4222006d74c6da4bc31e9077a31&iv=17dbc98fecfdc1d644e0610e&salt=9372eea070a3c78f19ef9f8c05925bf0&tag=c928f9e590b3ef649d5a85d54580e6e9&version=1',
            publicKey: '661c42cf98aa87e05f55c2998381f302a5e497a9b0a177bbd22ecb51c88faa10'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=056fb0087cc75cd4fb54c028eefc9b4acb543be26315558f11b4ed25349ebc4c473262170da9598d4e8c914ca5d2d1930371ba6374cfcd32645d2278c17da963c4e691ad6a692f7ed02c4314505e8fda&iv=58534096f99c6bd76ffa5ae2&salt=3271dd46b5c2a70aca1625c7ada30a07&tag=95d842b9e400fa6071e259c2041661ca&version=1',
            publicKey: '8ca1170bc9c2838ce35d02dbf61f4c7e1ebbcfd478cb7cf8be2d2fa2395ca5e6'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=2bc3c9eb0853153d08856557afde1e0c8ed625fe1caa037add99f0b754f0c45b605f7023432bb3d572210c401c3553f7bdc92303c71e906f605327a08e222f79d963b086e27d3780b3&iv=8dc48dce815d827b887d2873&salt=b33df1283750fe3ab6cbb3bc20a32035&tag=6bd5373b1904c135b61460016435a3d0&version=1',
            publicKey: 'c0e433c5ba1772242d94e26bed4a013c229046448dd0cf92be76e8bdb080daf4'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c4f63814284101fb21307a8223525031bc9ea084933bd31fd4f7a54906c2c35736b2c96d0ddf8d7586066da6e0e1cb9eb306dc708414e434f0d561adf56e2c3443d9495070e215873738a53f&iv=721e4d25b5668bface76bc89&salt=1dcdf705c90fe3e7bdd592ccaca3407f&tag=0329f7d834673b581348436e155791f8&version=1',
            publicKey: 'bd6c57a5fc10dd3d5c304da971f2ddf032736c260a04c8c0122123c8015dea0d'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=e7f58c81fc35600e4898ee8c3cbb116f9fdc19fc9edea07788adf690f4557265b47f7f8740e98099bd8cc7f5b45fff35c62164ab096827e72897d348eb9e0ac32c442f119bc20988&iv=6225d9a67d6ffb35d13e4d4d&salt=09fd066212c0a7403952342b8b68d490&tag=c703d2d4cec81dfc7e354ecc81b6a4d7&version=1',
            publicKey: '87cbb1736fa336953be588ff45690ab18d5314b4c963c38021c746099e7488de'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c7b50dc81399d8072c939c5b55dfb3a55aaab803baf1ff6c7b8941682b02668c8578577d95a87686be8feb7c1f6a7341ca888e7b826a8b796b63939364f88b82a8f3f258ad394d0e8f&iv=1c54d18bfd09defc7edd850d&salt=064e2688a08aaa705d51b91da91aedc2&tag=276dd32cd38e9b120b84d3a484780abf&version=1',
            publicKey: 'a43c558693db3dcfc908fc8b783963e81775194abc8c0aad26336b184f92337e'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=a6d687c5c9220aae353b1357598095a910ffc870d491df66564770b70135fcb7fc087b2e9f58722aa577031e22eebaef05ce41385d8a0b472226ca73818e6428a8e73d1179962a0b&iv=6d39d927f7c79b826eeae779&salt=5126915d9b18e11dc2e3cddbf0f79478&tag=1f4956fe41e0fe39fcac98ef9127b1af&version=1',
            publicKey: 'd37730a11ba94342b67ed1df434742473dedc84bc0fb52b3ce893124c5e6a312'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=3edf8c169b0848a7e21391ee1f5b611aa44c89c26827c10404a14ddf3041926b2925ff271ea77df2057aa4c6d2e8078b313c730837ce873a3638ad9f9a499cd343d32a6736042ba315&iv=8d5359c7bb990ff90881ad4f&salt=2222f09d8828933321032f3533d9dce3&tag=e433e8169184f59387d33ff27794e712&version=1',
            publicKey: '808f95838b8890e4b7141c93a7561fab66d8b5138c12547ab169174486f74466'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=66af5147b1eeea1ec81a3442b70b87d42a9470b0a752e5083554e3c5c30ef7d1673bbb40ea617be607883ce36344beb7f3018e7cfad7fd1c41e8d8d36cb886f33ff7ee9b862d1144b253e9&iv=b14dc63640dffcf63bd443ea&salt=13428f8acd3bb38a1c7e2d54dee19c6c&tag=fa1d5c519204caa73bfd5b953ef706e4&version=1',
            publicKey: 'e874d533a1513ca5879ae0868bd668a28a7bb22392c9a7cf82277c58f31ca445'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=45cfdca26de2b9ed0b3e01e38a6b2ce40cea4d80d41518c8936d2728201db743cf2f9a3d0010bd3c4c849b0e4450ae40e6ab4cc73b33090be515998d3afe38da742c5382dc80d330028c39fc6175ade1f471e65b3b2ab9&iv=b01b8318086186ea827fc49f&salt=e382e0c5516ffa4aef7b3abdc8c16a9f&tag=2e1a2aec82c6ecc504fc46fe2e68f768&version=1',
            publicKey: 'b8ee8cd5055ac0518fb375b21e2951870a74c911e10e58cc03c2c41271cb4f96'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=532a5e4b40cec39e5f51b31c52a02e1c2906210cef1074aa42fb2cc0684f3258c971a8013e0ac2735f86043b5a743549bbd9d5c11771f1cbd530b9107eb914855dcc9d93accca1ee78a3&iv=cc8817add6928d6f927a433b&salt=d948e5e9677e550f0cfc3b191df3b8c3&tag=fb2d63dd53322deb507c14abcb649e5c&version=1',
            publicKey: 'd712e2f2df8a442ac63db8e6f35ad45b220598ca15a969dcd22713efcf1347ac'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=b160a3d89e933efff0605dd199c0d9ead38352bd15bd020042eaee99757ea0059c06a9414b48e626ad1ce2b018ad12c7a81e4840f066cb92f21dab3f57cd30585167435a8be88658a4586f5d&iv=5497c75d1872a88ef90be6de&salt=f60bb918745870f23f7a8cd39acc1baa&tag=c9dd6657fb9599a697e7a33a3d3c007c&version=1',
            publicKey: '4e1c31c89e3881458e051316941715304d45e879ac036f590b39221be6c01a00'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=5fffe0f3dbbe2cecaf565ca61c6fa6a38c8fde7ac23f056a2c4c83f0184ce3d045abd0f2778f08845c377a181a6b3a850baf2035ce22ecf912bb036d9db443d3ead4d7306a&iv=089d91b9b6f064a7e86a5698&salt=595b31adf3b05611e2fe1ef35c6efc0f&tag=fd02e8b1045dafa44b48311b36d8106e&version=1',
            publicKey: 'f1e3229fd7b141f08be9d34a9c05d8bf08f2584aa5aeeb3b1a6b2cb37a942cae'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=698eb1a35eb8903d05cbde235790bb5a093c3c0affb777fdb85d9cf2257edfe6c036065c6788091f7bd519694f1c7779ddf667b9c72418c5dea80593cc0d1e833b1ee9f1e537681ad5d44734fa707e&iv=95d2b7f533fce40081ad3651&salt=61166786c094b05d1871e3b5e16b5498&tag=3aec83622b35b9508d2f47a79d552739&version=1',
            publicKey: '6ae318cac22391dec6416578bdae9191c91e6b95f0b0533a987874fbc481fce7'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=ad9136e0790708f392724c879bc59bca4aae006a6b22120bd8a53015ab355c54b0b635f7a1607cdef69058633ae2d489d3e6e4609e32f9aa03f255d392617a324104a52cfc8c1447fec5&iv=0d31ea8b66f33890fd83fb5d&salt=b552f8b5febdc0e9e5e927c3ccc76766&tag=bf57af2a3ac4c8218325992ff6094515&version=1',
            publicKey: '6849973243ff018e920d19afed415d5bfa451e9b21e270c4ea6d9656af1ea1cb'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=63dd8f8ed35adc5a97379c5848947c76bc973f461120ae0c9cb01d0db0f7c8723590177ce322e2726ab2cd0fc1f945aed83e5956781f2793b677e71bc2197c253e14a5b3763ac2a7&iv=51957cc7a7ee7a06c14d9918&salt=b42656de9a468de6df331a062fa055aa&tag=c10e46e548ae784475118c0983ba2990&version=1',
            publicKey: '918090faee45252139d190e7702322bcc51f9ac4b045d4f311e4feff5241029f'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c33b7bfa0fb918be3bea4c6bd0d62a031b169d8d2aac268015eaa9fbac24bc9d23ddf629dbe32cc936740775b2b5ab5d2c318b0a94b7207c322626fd6024831c1883454dc431534794&iv=6967f756c872077ee5115263&salt=81a20f821440f5782ab01ecb44016576&tag=a81126350b9ca35c2b8f605e3ae0f760&version=1',
            publicKey: '8d8586af8a3dc3d1aaff3abc886e6089ac0ece6274491c0f487a51ffb6c303bd'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=ae835c13e69e958010f00716b47b1ecbccd04591a74392b5da91793f41fa9041f722261e302bc223a15564671ce4f19612e924dfb31190b0211d8a716faa739530ae7e211fdd6357&iv=3dddb095b779491ac4d1b192&salt=13cc55965ddc1c9858524056317a40c8&tag=b51411bd32c167c7d217186a2ca0fa19&version=1',
            publicKey: '96d08ea966d5d80cbf8a0691c46af9e80954de9e113e5785d931e45bd93de992'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=6ca041ba2c5090df1557b1d2a480fea3dbb33c8e3d600dcc78439216c219105dec404407df6ee30c9ad998df3959736737f012adbdc400e483aff1b8188ce532d32844072a28d154d596a45e2a31&iv=4714aafad9ff81f9841493cc&salt=9cf63fb6e560e76be48fe723e5bff435&tag=0c501bbdb0371445ebdb936a42cf2616&version=1',
            publicKey: 'd7cebf201cbc76d1960723169a864ce0619690d6a71f8251db1d6ba6510404fa'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=d1e38d72a43747f103815172df9a09cc4c65e4450da3924b3a781291c698c8be59776ceed1cb86be99d458aa93d567cfcd31d153eb78cfc5d2c5310554adf6b0d0486e75ee0a0ef11568a90d36&iv=2827e5eea78cdc5d818173b4&salt=6215bb3cd7cbbfd7ed859bdbcfb1bbb2&tag=6af38a5e4432d3fe10ed7a45ac8d5bd3&version=1',
            publicKey: '826258377263ad1c1be090083bd254e836d5f2fb8d7f342d5a4fdf7b26012426'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=8b09cbaed4b59ff642cd25aaa76efc8421c5bf1e9cb11fb8b36edcbcb130c2c622bb6f45444ead2aff3c0e5f32faf5a10d7a07e463b1dc26264ee4aeb45bbe3a982b651cd609f07b8648&iv=98f97616d90d32c1678a9f74&salt=b5ef3b7f93e678e7a4bba328230dbde2&tag=4810f49a0408756eeb33a68c75bb6997&version=1',
            publicKey: 'f59b1d36b42d9b40c56b4af6ee8b388a75e7cbc7207c4b0b56340fa8eeb54ac8'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=bd919d7dd9138c4fc8e345a69b7c7dc69ff616aabc2d6e8d40ae63801a671e7ea0fa6db832820c31a85079d6056aa3eba358b0bba1161098b0eb931d5c17a2256b534a97cf3ff4913d9ebd&iv=ea21edc1cb26839618260984&salt=dc92a611721b4210f5ddf8e61f1e520f&tag=6084d086b692d782c13440c27d79f0fd&version=1',
            publicKey: '6982c3bbe9642de43d3d0c17d2dbfc12fbe5d8f24050570406081a6b31f5aba4'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=0d28adb7d430bfbf6c4d255f546ac225882e97bd472b36ca21228e3e8c17f230cbaef3d1332c1f65d24b348538c05aef3a242220b287ab5072901044f0e26d7ba2e9a871991e3f9687d043bdd4235e&iv=1eb0e7cc3ffca3300cddc9a4&salt=294a9eaf785512213cc42759850cdcda&tag=5b8eec41af1e827b39796fdf5571691a&version=1',
            publicKey: 'b6a9d09c258b8c466106f322b74fd46bc17dea2cda28ea6dae3079f57f8ad2d2'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=1fa60855580740cd41aba486aa34f0985f3736890e8e799e55400bc0429ad67ee285134a82fc39e2b34a3e3e4eb17a1152f8a366b5aef068c12047a9b9e82ce8872a79d64f1cdde202b1&iv=e2eb533be34cca76283fb853&salt=1afbd05d115c1bcf386b092663202c98&tag=015379e65aaff0e886972f61f6d05878&version=1',
            publicKey: 'd5e1bc9ddf73fc4906c4029ea43b37b3a1d7cadf0ae867dc3d4946fde768f9eb'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=40e3847b3143fb230658c414c589d082dbfb868388cf7c50e551e37f637469c8a16e13ca7ae06c4f40e7ae08a4fedacbbf9c92e5fa7050993dff778798b442bf4f7df1aec6323e4ea0dc&iv=98d53d255284e1406b8112ec&salt=fdc468b1a3ba35ccddfeb96f3d2313a5&tag=4b5cb7a84ab27c7f143bd46e136c6c90&version=1',
            publicKey: 'e94e552fb7bc12a637d4822e4d84459f0408698133e695419d0997be2757f071'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=f78e324f66f74f731a9a807e76f11b791d2f70ff01c15e95fe372eb872ef71640b8cd06a2e1dbc50e3033c34be82f6e75ae3524cde108a9afecd1b8a2007c9f2303d624cf6246e6f82c2caa9&iv=cafa030bdc7c3472331da72a&salt=d2b574a39fb6fd09d666dd0d94d519e0&tag=0188ca9a2ab58c55ec80b75c042e1426&version=1',
            publicKey: '29ed175a2e2dd1d0e4c86c06a9a25d5e5f0a3368cb34ffc9f6f464f79d7decfe'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=09f7fd08911df9a02aaf762c82c040f321de0bad711a3c0fee6444555dba8791a6dff3c6b493efe94ed71314c974a2f345ffa1f49197b70972bb77f92556389b828d0b0d466654a9af&iv=d43aeee0b86e056c1abcd876&salt=543ba355244f7770bdcaf2cab905f2e4&tag=96e06e89ba36e903f3bd1bfa0ab96b89&version=1',
            publicKey: 'ee30a912ba6160845358ee8fd7b70efead287a04f259855d26f54b7955e5ec3d'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=86b8ff5535a263fa360e172202b9ad64396ffa12ea4fe8350a4b043ddc257ef15b0393b01e162d81817060ab9be3ddf12439dcce810d37794b7552af404610674130237ac759&iv=02efd76081beb62aa1533ec2&salt=4f2b6eabbb4ac845336f6d987c924a53&tag=c507b9331350acc47b49d304ecd80c28&version=1',
            publicKey: '72552906ccedd73fe26ea924350b5fa15dbe5c70e575952733846e86f99ffd8d'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=b865ecb243a727a2c0f89856ed41c109c819ae70880945223e57aa81eaa144cfa77b0ddff1f9c72147ea9fb87c2ab680b1734457b70561db3df38c72290cbb6fb1f6e5ff9980a12307a7b5&iv=ad8708507ee4bcca24f05b8f&salt=3d41ec184c6b135368cbeaa7bcd4852c&tag=3ebe92fa05dc6e379b4f8a222f245544&version=1',
            publicKey: 'a484a46928b265281c8d19b082325e31c0b620a5ce0ac912cddab1ac1add1f89'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=93db9f700928f9db425cfea40c9028b95cf8c799849a960ad73e3b197ea452ae8f5ace178b0bdabb981085e388f452a5119d69bbda930a146ce54e25abab78f1b5ddf53c67289abe83&iv=cb5656c9c2feb48f20e52639&salt=a672d4baffb9644a1939bf7274cfc2e9&tag=19f00778f24bb4ba7136a1a3fa812e92&version=1',
            publicKey: 'd2ed6ba11bdf05bee0802555276ede16184ec89ad4cfc22721b5604b951b8bf5'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=6e46d78c8d24c74f482e38956833738488e7c9e55a3d3ce67a07985f99d8b59dc13f84af890f4268b78e3f7e20aea9028719b0d7ccc51bf464cbee7bbd2b5fc40b466271dccd8b153ba8f7&iv=055cd2df445d3c08b4d26e62&salt=86f0a02b280e9b1b46396c33304e7878&tag=3596fdec0333d98cd8280604e0d7a533&version=1',
            publicKey: '80496942d95666e6ef963e656ea7411b02a7c42fd9eaf00bae078be27dd84d43'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=a817f19899a08bda752101096323e6aa28e131f51f16bb7052e84a91acebf04c51ff2bf3b8bb8c2a87ca222d945a0bcb3043fc260fa729a0f5c4b7f6650970279b4006a8a911edec356b0f87&iv=6df87e16768c98d6066c6958&salt=99a1cac4a2aabd0a8ab03fc2b87f0aa3&tag=f86966856965f8f456d7c8ea31ddd1ea&version=1',
            publicKey: '18ad592791894e56a1ec9c97606c1dfa876d800aede6aa901bfb3cbd50368ae0'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=606777779cc4ffc501041516c12c2b5171ef00c24948dc7eb8607c74903b6c4a08409888c587127d07c4c6052afa415ac43665cfd020d9f05f2ce4d3b70196bc951c913624e778&iv=03eecf858f3174b4bf38994f&salt=178557e05261a1392a61d89a7e89e5b6&tag=fc0dd280724df713b9cb8ec0a5cfff69&version=1',
            publicKey: '141eba3ea56a32dfc4cb192a7909073927beb390dcea1dea736ccf2c6307e426'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=0e3daecb0c64c04ea382d3008d1b101944313961c40588b939f0ab58e970885e618e66be4b4cd01c612e7da4add8043d35842eeca8e570a68cf1c868b446ae4fbc90&iv=87f157359ee354817c94823d&salt=77df8d304c84f0e101900bee8662e949&tag=fe85b97d0d93a87c4515a018078ced9f&version=1',
            publicKey: 'e9a9357401162a07de98c9da8f56a745e9bd9cbc58ebd77732f42704c8bdbc79'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=808639ea1ea4551bc64f11bfedcdd235c1b9dc2eb6d1446bd1441a3695ffdefd1e1896b13d536464c15dbe9af61e797048c03fb098e5ca774376b421d768d33f9e4ea3271cbe24163e&iv=1f744318b96e6ca74093de89&salt=94f918a83558c1f04a5e2cf9373d55db&tag=3957ca74e50c63fa0c94d86c85f760c4&version=1',
            publicKey: '20baf02c9642c2463027396a5ec694418b6243b68a16793fc3f191ab1585aab6'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=38ae1f0be4ff051a69b321a561a6cf472bbc21497205835a1220c60070c9a0826d91b39f787700cc07ca31f6a158d55c35a61318664a943f72daf9986ed21312bd3453876a6c4d3787febea601d9&iv=822d27204a748e9a3ede0533&salt=91b98d3d620874f543ca0505815b27b9&tag=8e6855303867c2366cdb85949c90b64d&version=1',
            publicKey: 'c8c1404d28e530d5addd3175d45799bb1df725a168e4e234b1de5508ea874d1e'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=5c37a5edecebf5fffc5069b9f9467a58c8e2d60e03a45aee1ae5fedf7ea4ed810c29b8ecba8158018bda5806fc5913bb08935d28c70bf86c5c19728cfb25f10a92a933d5028a0213&iv=9d73009422cae7ed34bb04c4&salt=2bb21f48d13d712acf76796d19aac107&tag=5585c2e4e4a187bab95522bd2aed279c&version=1',
            publicKey: 'e312d17c883026ba3527230ec07019bf70e8afa6685f3c9d03d2d07bb999566b'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=c8288124577b7362530a27a0ec60daf8d8689a6d28d37cc028e16ba9deb2f5d934f45339563e5ce3dbc2a3c52e398e2445782eb7561415e0c7b8f1828780eb887c76c8eb8d0530255754a1da501ee2b9&iv=18c38fe9c3c0a4a10ff5b249&salt=19bc321b7346b1673f3d5bd28f4ab056&tag=081c8f6ec8e03910f10f6c2a7cea7185&version=1',
            publicKey: 'a3ea3205d9a40b1dac695767ade74a9b1b9cab27ccbad59dfab1e3aa0c6d1f27'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=2da65ccb9e58ca06f11d5f155466e5597c3ed2a42cedcee1c1b114de8cafeeab3dbef5ca1d2096c40db70b4174ffb59d1415ccd35e9aaec51133d0a6618ca60ddfbd2a07a3af8be2ef&iv=1fdf2bf76309b4382b4c0bad&salt=6d895cfea8dad3338df0a18eddb060fd&tag=5877a5cebf414cacd86c617134f83374&version=1',
            publicKey: 'c29e44a11f866cda5faf164d73d58da628c17c214b177a815cf6205a55af5990'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=55cd7dfdd99db35a2a3fe3bd577b3e8c4a3b0dd5d4af17b0a00772fc0a3e05b107677bb9bb750b03a7197b0a252876753f0390fd06f5eada928d61c1519230d7fd4e9570e3bd3bdbba37&iv=141639aab0024ca788d56ada&salt=70f437a9360bd9cb60a994a7dc3ed4c1&tag=d9b7b79d1268feef544d6b590e8cb1ae&version=1',
            publicKey: '3bf9cce33a2275c7a33ae6ca46a9428853113fff5bd1d734270218cb4592f4df'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=f61b11ed35cc866a3d2a5aeb1f4f4b40aa83f469bcd55d47889d10f8bacbd33fc5481f9c701dfce5d40d23983f7239048435a0b0ef924c3258e66d17817d74f7f943f6e259ff220be214f85a28319e1b0646&iv=47bee0e3bb5d60e39ac5c48e&salt=c2dd14db7920e29907425cb749225ae7&tag=42ce6fc193ff10138c84c3066c39e393&version=1',
            publicKey: '1a020d27baea4fe7b240c10f85ad97fc311399b6d3be76b2cd4564a2481d3676'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=dc5d6af2e482fb96c6d99dc16b24fa4f7fdbcb609c8cf8d833af945e5d318b094f1469a0222bb963d8e3580e72a54e954475b45dbeffba9fd50500e15c774f61598f2d6ec9cb38ccc912e3aa8d1b18ebd1&iv=7e24623890b8d6128830ffa3&salt=f89822fe11192ad17deaf1190eb36e4e&tag=438ebd17c21a452bbb6536a1f6dd7972&version=1',
            publicKey: '32a2f261985252022b8c40b5c64f7588aced08c7cc6e48719b66808b313cacc8'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=b009292f88ea0f9f5b5aec47a6168b328989a37e7567aea697b8011b3d7fb63a07d7d8553c1a52740fd14453d84f560fda384bf1c105b5c274720d7cb6f3dbf6a9ed9f967cdc7e57f274083c&iv=ec7e5ebe2c226fcd8209fc06&salt=0478b7883713866370ae927af7525ed2&tag=29aa766741bf5b4bbcfeaf3cd33ad237&version=1',
            publicKey: 'd8685de16147583d1b9f2e06eb43c6af9ba03844df30e20f3cda0b681c14fb05'
          },
          {
            encryptedPassphrase:
              'iterations=10&cipherText=b07f7b76f11674733174b68624c6d5893f19f26f1ae2d34b45d5fa7ae872ae5db27ba2e44ef4484a0067b58644b0c7fa7fe416995660284ed56f593c01689b1872ae125b2cd4c11729&iv=be47b785623843ab14eed815&salt=57fbc804b7a8ff1576fda2860662084a&tag=f20099f33ba8d3db5558ff808d25521d&version=1',
            publicKey: '98f88a243d008d23637a8e15e2d4883173bea3e132bf092e0f74903920c2d1eb'
          }
        ],
        defaultPassword: 'elephant tree paris dragon chair galaxy'
      },
      broadcasts: {
        active: true,
        broadcastInterval: 5000,
        releaseLimit: 25
      },
      transactions: {
        maxTransactionsPerQueue: 1000
      },
      syncing: {
        active: true
      },
      loading: {
        loadPerIteration: 5000,
        rebuildUpToRound: null
      },
      exceptions: {
        blockRewards: [],
        senderPublicKey: [],
        signatures: [],
        signSignature: [],
        multisignatures: [],
        votes: [],
        inertTransactions: [],
        rounds: {},
        precedent: {
          disableDappTransfer: 0,
          disableDappTransaction: 0
        },
        ignoreDelegateListCacheForRounds: [],
        blockVersions: {},
        roundVotes: [],
        recipientLeadingZero: {},
        recipientExceedingUint64: {},
        duplicatedSignatures: {},
        transactionWithNullByte: []
      }
    },
    network: {
      wsPort: 5000,
      seedPeers: [
        {
          ip: '127.0.0.1',
          wsPort: 5000
        }
      ]
    }
  }
};
