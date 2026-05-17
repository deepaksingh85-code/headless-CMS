import { gql } from "graphql-request";
import { client } from "./graphql";

export async function getPosts() {
  const query = gql`
    query GetPosts {
      posts {
        nodes {
          id
          title
          excerpt
          slug
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.posts.nodes;
}