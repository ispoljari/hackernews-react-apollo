import React, { Component } from 'react'
import Link from './Link';
import { Query } from 'react-apollo';
import qgl from 'graphql-tag';

const FEED_QUERY = qgl`
  {
    feed {
      links {
        id,
        description,
        url
      }
    }
  }
`;

export class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const linksToRender = data.feed.links;

          return (
            <div>
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList;
