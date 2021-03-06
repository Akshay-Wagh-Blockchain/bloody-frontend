import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import Timer from './components/Timer'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'


const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  position: relative;
  z-index:2;
  border-radius: 30px;
  
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
    background-image: url('/images/egg/3.png');
    background-repeat: no-repeat;
    background-position: top center;    
    border-radius: 30px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    
    padding-top: 0;
    position: relative;
    z-index: 2;
    height: 165px;

    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 1;
      background-image: url('/images/egg/vaults-hero.png');
    background-position: center;
    background-repeat: no-repeat;
    }
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
       <Heading as="h1" size="xl" mb="12px" color="#FFFFFF" >
          {/* {TranslateString(999, 'Yield Farming starts at block #16860000')} */}
        {/* {TranslateString(999, 'Yield Farming started!')} */}
        </Heading>
      {/* <Timer /> */}
      <Hero>
        {/* <Heading as="h1" size="xxl" mb="15px" color="#FFFFFF" >
          {TranslateString(576, 'BloodySwap Finance')}
        </Heading>
        <Text color="#FFFFFF">{TranslateString(999, 'The bloodiest Polygon based yield farm out there. Come and suck some.')}</Text> */}
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats/>
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
