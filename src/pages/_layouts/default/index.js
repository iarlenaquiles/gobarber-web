import React from 'react';
import PropType from 'prop-types';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propType = {
  children: PropType.element.isRequired,
};
