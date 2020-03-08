import styled from 'styled-components';
import { homeIntroZindex, device } from 'styles/variables';

const HomeIntro = styled.section`
  position: relative;
  z-index: ${homeIntroZindex};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  text-align: center;

  @media ${device.TabletPortrait} {
    font-size: 2rem;
  }
`;

const contentMarginBottom = '1.5rem';

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${contentMarginBottom};
`;

const Desc = styled.p`
  font-size: 2em;
  font-style: italic;
  margin-bottom: ${contentMarginBottom};
  line-height: 1.2;
`;

const Name = styled.p`
  font-size: 1.3rem;
  margin-bottom: calc(${contentMarginBottom} + 1em);
`;

const MoreButton = styled.button`
  width: 250px;
  padding: 0.8rem 0;
  border: 3px solid white;
  background-color: rgb(0, 0, 0, 0.3);
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.6);
  }
`;

export { HomeIntro, Container, Title, Desc, Name, MoreButton };
