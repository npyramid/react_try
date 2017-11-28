/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';
import Icon from './Icon';

const Possessions = ({ items, match, location }) => {
  const linkTo = (id) => {
    if (location.pathname !== '/') {
      return `${match.path}/${id}`;
    }

    return `/${id}`;
  };

  return (
    <div className="possessions">
      {items.map((params) => {
        return (
          <Card params={params} key={params.id}>
            <Link to={linkTo(params.id)}>
              <Icon type="open" />
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

Possessions.propTypes = {
  items: PropTypes.array,
  match: PropTypes.object,
  location: PropTypes.object,
};

Possessions.defaultProps = {
  items: [],
  match: {},
  location: {},
};

export default Possessions;
