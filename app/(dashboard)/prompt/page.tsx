
import React from 'react';
import PromptListingPage from './_components/prompt-listing-page.tsx';

type pageProps = object;

export const metadata = {
  title: 'Dashboard : Prompts'
};

export default async function Page({}: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)

  return <PromptListingPage />;
}
