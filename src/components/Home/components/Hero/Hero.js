import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { COLOR } from 'config';
import media from 'utils/media';
import Container from 'components/Container';
import Header from 'components/Header';
import CanvasBg from './components/CanvasBg';
import Introduction from './components/Introduction';

const Wrapper = styled.div`
  background: ${COLOR.dark};
  position: relative;
  min-height: 56rem;
  height: auto;
  overflow: hidden;

  ${media.sm.css`
    height: 40rem;
  `}
`;

const StyledFlex = styled(Flex)`
  position: relative;
  height: 100%;
  z-index: 1;
`;

const Hero = () => (
  <Wrapper>
    <CanvasBg />
    <StyledFlex column justify="flex-start">
      <Box>
        <Header white social showBuy={false} />
      </Box>
      <Box mt={8}>
        <Container>
          <Flex row wrap align="center">
            <Box width={[1 / 1]}>
              <Introduction />
            </Box>
          </Flex>
        </Container>
      </Box>
    </StyledFlex>
  </Wrapper>
);

export default Hero;
