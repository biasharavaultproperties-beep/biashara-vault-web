import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "Biashara Vault Properties | Prime Land Investment in Kenya - Title Deed Ready Plots",
  description = "Secure your wealth with verified, title-deed ready plots across Kenya. From Nairobi to Mombasa—trusted land investment partner since 2016. Call +254 721 660 966",
  keywords = "land for sale Kenya, plots Kenya, Thika land, Mombasa plots, title deed ready, Kenyan real estate, diaspora investment, Nairobi land, Nakuru plots, Malindi property, land investment Kenya, verified plots Kenya",
  image = "https://bvpke.com/logo.png",
  url = "https://bvpke.com/",
  type = "website"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;