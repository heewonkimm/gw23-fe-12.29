import Head from 'next/head';

const Seo = ({ title }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
      />
      <title>{title ? `${title} | Groupware` : 'Groupware'}</title>
    </Head>
  );
};

export default Seo;
