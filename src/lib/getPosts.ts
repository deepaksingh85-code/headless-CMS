import { gql } from "graphql-request";
import { client } from "./graphql";

const QUERY = gql`
{
  posts {
    nodes {
      id
      title
      slug
      date
    }
  }
}
`;

export async function getPosts() {
  const data = await client.request(QUERY);
  return data.posts.nodes;
}