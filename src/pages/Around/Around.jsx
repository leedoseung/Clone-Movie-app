import React from 'react';
import { Header } from 'components/Header/Header.style';
import { Footer } from 'components/Footer/Footer.style';
import { primaryColor, Layout } from 'styles/variables';
import { AroundType } from 'components/Around/index';

const Around = () => {
  return (
    <Layout>
      <Header color={primaryColor} bgColor="white">
        <main>
          <AroundType />
        </main>
      </Header>
      <Footer color={primaryColor} />
    </Layout>
  );
};

export default Around;
