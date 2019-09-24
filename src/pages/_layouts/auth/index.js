import React from 'react';
import PropType from 'prop-types';
import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propType = {
  children: PropType.element.isRequired,
};
