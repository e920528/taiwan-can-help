import React from 'react';
import Head from 'next/head';
// import Example from '../components/Example';
import TaiwanIsHelping from '../components/TaiwanIsHelping';
import YouCanHelp from '../components/YouCanHelp';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Taiwan Can Help!</title>
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/tooltip.css" />
        <link rel="stylesheet" href="/styles/grid.css" />
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5cb3e923af393d81" />
      </Head>
      {/* <Example /> */}
      <TaiwanIsHelping />
      <YouCanHelp />
      <Footer />
    </div>
  );
}
