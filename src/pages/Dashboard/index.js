import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Iarlen</span>
        </Time>

        <Time>
          <strong>09:00</strong>
          <span>Em abert</span>
        </Time>

        <Time>
          <strong>10:00</strong>
          <span>Iarlen</span>
        </Time>

        <Time>
          <strong>11:00</strong>
          <span>Iarlen</span>
        </Time>
      </ul>
    </Container>
  );
}
