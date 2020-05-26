import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Menu, MenuItem } from './styles';

export default function ActionMenu({
  visible,
  hide,
  handleOrderChange,
  problem_id,
  onRemoveClick,
  onCancelClick,
  object,
  onVisualizeClick,
}) {
  return (
    <Menu>
      {onVisualizeClick && (
        <MenuItem>
          <span>View</span>
        </MenuItem>
      )}
      {object && (
        <MenuItem>
          <Link to={() => {}}>Edit</Link>
        </MenuItem>
      )}
      {onRemoveClick && (
        <MenuItem>
          <span>Delete</span>
        </MenuItem>
      )}
      {onCancelClick && (
        <MenuItem>
          <span>Cancel</span>
        </MenuItem>
      )}
    </Menu>
  );
}

ActionMenu.defaultProps = {
  onVisualizeClick: null,
  onCancelClick: null,
  onRemoveClick: null,
  object: null,
};

ActionMenu.propTypes = {
  onRemoveClick: PropTypes.func,
  object: PropTypes.object,
  onVisualizeClick: PropTypes.func,
  onCancelClick: PropTypes.func,
};
