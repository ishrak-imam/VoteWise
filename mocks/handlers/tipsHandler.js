import {graphql} from 'msw';

export const tipsHandler = graphql.query('getTips', (_, res, ctx) => {
  return res(
    ctx.data({
      substrateChainTips: [
        {
          __typename: 'SubstrateChainTip',
          createdAt: '2022-08-19T09:48:36.007Z',
          id: '0xf4955cdbead469ff325edcf11d33bc6884760b2ff75146c9ad06b92f4d6bfd91',
          reason: 'TO: Szegoo FOR: substrate#11767 (small)',
          status: 'Opened',
          who: {
            __typename: 'SubstrateChainAccount',
            address: '126X27SbhrV19mBFawys3ovkyBS87SGfYwtwa8J2FjHrtbmA',
            display: '126X27SBHRV19MBFAWYS3OVKYBS87SGFYWTWA8J2FJHRTBMA',
          },
        },
        {
          __typename: 'SubstrateChainTip',
          createdAt: '2022-08-18T09:38:54.004Z',
          id: '0xeb4f01b9274f9bf65dd9154b58f3b9a4f1873f8c6b816db713decc06bfe4cd6c',
          reason: 'TO: Doordashcon FOR: substrate#11670 (medium)',
          status: 'Opened',
          who: {
            __typename: 'SubstrateChainAccount',
            address: '12zsKEDVcHpKEWb99iFt3xrTCQQXZMu477nJQsTBBrof5k2h',
            display: '12ZSKEDVCHPKEWB99IFT3XRTCQQXZMU477NJQSTBBROF5K2H',
          },
        },
      ],
    }),
  );
});
