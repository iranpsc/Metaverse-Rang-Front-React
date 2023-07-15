import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';

const PrimaryButton = styled.button`
  --bs-bg-opacity: 1;
  background-color: var(--bs-orange) !important;
  border: none;
  border-radius: 8px;
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  padding: 8px 24px 8px 24px;
`

const SecondaryButton = styled.button`
  --tw-border-opacity: 1;
  --tw-gradient-from: #16a34a;
  --tw-gradient-to: rgba(22,163,74,0);
  --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to);
  --tw-gradient-stops: var(--tw-gradient-from),#65a30d,var(--tw-gradient-to);
  --tw-gradient-to: #fff;
  --tw-text-opacity: 1;
  background-image: linear-gradient(to top,var(--tw-gradient-stops));
  border-color: rgb(22 163 74/var(--tw-border-opacity));
  border-radius: 9999px;
  border-width: 4px;
  color: rgb(255 255 255/var(--tw-text-opacity));
  font-size: 24px;
  font-weight: 800;
  line-height: 1.75rem;
  padding: 16px 16px;
  width: 100%;
  cursor: pointer;
  
  @media screen and (max-height: 840px)  {
    padding: 8px 8px;
  }
`;

function Submit({ text, type, options }) {
  const [button, setButton] = useState();

  useLayoutEffect(() => {
    switch (type) {
      case 'secondary':
        setButton(<SecondaryButton type='submit' {...options}>{ text }</SecondaryButton>);
        break;
    
      case 'primary':
        setButton(<PrimaryButton  type='submit' {...options}>{text}</PrimaryButton>)
        break
  
      default:
        return
    }
 
  }, [])

  return button;
}

Submit.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  options: propTypes.object
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.text === nextProps.text
}

export default memo(Submit, areEqual);