import { groq } from 'next-sanity';
import { client } from './client';

export async function getProjects() {
  const query = client.fetch(
    groq`
    *[_type == "project"] {
      _id,
      name,
      "slug": slug.current,
      category->,
      "image": image.asset->url,
      url,
      description,
    }
  `
  );
  return query;
}
