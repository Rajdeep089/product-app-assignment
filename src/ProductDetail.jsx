// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const productsData = [
{
  id: 1,
  name: 'Le Male Elixir Jean Paul Gaultier for men',
  description: 'The new sailor Le Male Elixir will induce burning cravings and drive your senses crazy. Burning desire spreads with the irresistible notes of fresh lavender, warming tonka bean, and gentle benzoin. With a gilded torso, this fiery novelty from Jean Paul Gaultier embodies radiant power and seductive charisma. It is finished! You melt away with burning desire.This intense fragrance ignites the fire of the senses on his upper body and gives the soft skin a burning sensuality. After a refreshing breeze of mint, the tide rises to addiction, becoming a glowing elixir. In this breath of fresh air, dashing lavender quickly takes on lusty proportions, enhanced by the balsamic richness of benzoin with syrupy vanilla accents. The tonka bean trumps with its warm and sweet tones between honey and tobacco. The time has come: You jump!Radiant at first sight, glowing with masculinity, more fiery than ever. The torso is bursting with muscles, the skin is bathed in copper color by the sinking sun. What a Gaultier body... what accomplished style. Finely chiseled grooves stand out on its muscles dipped in gold and merge with the amber stripes of the sailor shirt, which plays with transparency effects in a highly sexy way.Available as 75ml and 125ml Parfum.',
  price: 13950.00,
  additionalDetails: 'Le Male Elixir by Jean Paul Gaultier is a Amber Fougere fragrance for men. This is a new fragrance. Le Male Elixir was launched in 2023. The nose behind this fragrance is Quentin Bisch. Top notes are Lavender and Mint; middle notes are Vanilla and Benzoin; base notes are Honey, Tonka Bean and Tobacco.',
},
{
  id: 2,
  name: 'Habit Rouge Rouge Privé Guerlain for men',
  description: 'A legend that transcends generations, a true statement of boldness and elegance. Like skilled cellar masters, Guerlain Perfumers create a new blend from their secret reserve to elevate the elegance of Habit Rouge, making it more refined than ever. A masterful reinterpretation of the myth, an exceptional fragrance with hints of spirits. In the utmost secrecy, the facets of vanilla become liqueur-like, thanks to an accord known only to the house of Guerlain. For the precious Habit Rouge Rouge Privé edition, this contrasting olfactory journey takes on a more noble and exclusive character than ever before. A splendid homage by Guerlain Perfumers to the first amber fragrance for men, this new composition reinvents its legendary patchouli, vanilla, and leather accord in a more sensual and intense blend. Notes of tanned leather mingle with the warmth of vanilla and captivating patchouli to reveal an exceptional interpretation of Habit Rouge—an outstanding Rouge Privé. "Rouge Privé reinterprets the Habit Rouge myth with a new exceptional blend. The signature leather facet, played in overdose and combined with bergamot and patchouli, becomes even more sensual and intense." - Delphine Jelk, Guerlain Perfumer Product Benefit. Inspired by the world of spirits, Habit Rouge Rouge Privé is an extraordinary reinterpretation of the original Habit Rouge. Notes of tanned leather blend with the warmth of vanilla and captivating patchouli to reveal an exceptional interpretation of the myth.',
  price: 10850.00,
  additionalDetails: 'Habit Rouge Rouge Privé by Guerlain is a Leather fragrance for men. This is a new fragrance. Habit Rouge Rouge Privé was launched in 2023. The nose behind this fragrance is Delphine Jelk. Top notes are Bergamot and Ginger; middle notes are Orange Blossom and Iris; base notes are Leather, Vanilla and Patchouli.',
},
// Add more products as needed
]

function ProductDetail() {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <p>{product.additionalDetails}</p>
    </div>
  );
}

export default ProductDetail;
