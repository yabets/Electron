import React from 'react';
import { bool, func } from 'prop-types';


const PlayPause = ({
  playing,
  onClick,
  ...otherProps
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}
    {...otherProps}
  >
    {
      playing ? (
        <g>
          <circle cx="12" cy="12" r="10" />
          <line x1="10" y1="15" x2="10" y2="9" />
          <line x1="14" y1="15" x2="14" y2="9" />
        </g>
      ) : (
        <g>
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
        </g>
      )
    }
  </svg>
);

PlayPause.propTypes = {
  playing: bool,
  onClick: func,
};

PlayPause.defaultProps = {
  playing: true,
  onClick: () => {},
};

export default PlayPause;
