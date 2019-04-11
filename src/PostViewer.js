import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_POSTS = gql`
query GetPosts {
  posts {
    id
    body
    author {
      id
      name
    }
  }
}
`;

// export default () => (
const rowStyles = (post, canEdit) => canEdit(post)
    ? { cursor: 'pointer', fontWeight: 'bold' }: {};

const PostViewer = ({ canEdit, onEdit }) => (
    <Query query={GET_POSTS}>
      {({ loading, data }) => !loading && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.posts.map(post => (
              <tr
              key={post.id}
              style={rowStyles(post, canEdit)}
              onClick={() => canEdit(post) && onEdit(post)}>
                <td>{post.id}</td>
                <td>{post.author.name}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Query>
);

PostViewer.defaultProps = {
    canEdit: () => false,
    onEdit: () => null,
};

export default PostViewer;