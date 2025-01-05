import { Helmet } from "react-helmet-async";

function SEO({ title, desc = "a career consultant service" }) {
  return (
    <Helmet>
      <title>{title} | Career Compass</title>
      <link rel="canonical" href="https://ccompass.vercel.app/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
    </Helmet>
  );
}

export default SEO;
