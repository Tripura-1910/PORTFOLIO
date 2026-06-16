

import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel T Thomas",
  url: "https://portfolio-one-ochre-63.vercel.app/",
  image: "https://portfolio-one-ochre-63.vercel.app/preview.png",
  jobTitle: "Software Developer",
  sameAs: [
    "https://github.com/Tripura-1910/",
    "https://www.linkedin.com/in/samuel-t-thomas-a7807439a"
  ]
})}
</script>

      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;