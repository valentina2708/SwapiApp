import React from 'react';
import { render } from '@testing-library/react-native';
import SearchBar from '../molecules/Search';

describe('SearchBar Component', () => {
  test('renders correctly with given value', () => {
    const { getByPlaceholderText } = render(
      <SearchBar value="Test" onChangeText={() => {}} />
    );

    expect(getByPlaceholderText('Buscar...')).toBeTruthy();
  });
});
