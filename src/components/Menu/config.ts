import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farming Countdown',
    icon: 'TicketIcon',
    href: 'https://polygonscan.com/block/countdown/19070000',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x7a2EfB71a36B387e35e2Cc683435727E35C1e978', // XXXXBLOOD
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x7a2EfB71a36B387e35e2Cc683435727E35C1e978/undefined', // XXXXBLOOD
      },
    ],
  },
  {
    label: 'Meat Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Blood Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  /* {
     label: 'Lottery', // XXXXSOON
     icon: 'TicketIcon',
     href: '/lottery',
  },
  {
     label: 'NFT (Coming Soon)', // XXXXSOON
     icon: 'NftIcon',
     href: '/nft',
  }, */
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0x7a2EfB71a36B387e35e2Cc683435727E35C1e978', // XXXXBLOOD
      },
      {
        label: 'PooCoin',
        href: 'https://polygon.poocoin.app/tokens/0x7a2efb71a36b387e35e2cc683435727e35c1e978', // XXXXBLOOD
      },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x7a2EfB71a36B387e35e2Cc683435727E35C1e978-polygon', // XXXXBLOOD
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bloodyswap', // XXXXGITHUB
      }, 
      {
        label: 'Docs',
        href: 'https://bloodyswap.gitbook.io/bloodyswap', // XXXXGITBOOK
      }, 
    ],
  },
  /* {
    label: 'Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Listed on RugDoctor',
        href: 'https://rugdoc.io/project/bloodyswap/',
      }, 
      {
        label: 'Listed on VFAT Tools',
        href: 'https://vfat.tools/polygon//',
      }, 
    ],
  }, */
]

export default config
