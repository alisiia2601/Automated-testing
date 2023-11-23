import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieSearch from '.';

describe('An input field for movie search', () => {
  test('renders input field and search button', () => {
    render(<MovieSearch />);
    const searchInput = screen.getByPlaceholderText('Enter movie title');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    render(<MovieSearch />);
    const searchInput = screen.getByPlaceholderText('Enter movie title');

    fireEvent.change(searchInput, { target: { value: 'Inception' } });
    expect(searchInput.value).toBe('Inception');
  });

  test('submits form with search term', () => {
    let submittedSearchTerm = '';
    const onSubmit = (searchTerm) => {
      submittedSearchTerm = searchTerm;
    };

    render(<MovieSearch onSubmit={onSubmit} />);
    const searchInput = screen.getByPlaceholderText('Enter movie title');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'Interstellar' } });
    fireEvent.click(searchButton);

    expect(submittedSearchTerm).toBe('Interstellar');
  });

  test('submits form with empty search term', () => {
    let submittedSearchTerm = '';
    const onSubmit = (searchTerm) => {
      submittedSearchTerm = searchTerm;
    };

    render(<MovieSearch onSubmit={onSubmit} />);
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.click(searchButton);

    expect(submittedSearchTerm).toBe('');
  });

  test('renders a label with the correct text', () => {
    render(<MovieSearch />);
    const label = screen.getByLabelText('Search for a movie:');
    expect(label).toBeInTheDocument();
  });

  test('gets all input elements in the component', () => {
    render(<MovieSearch />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(1);
  });

  test('queries for the button element', () => {
    render(<MovieSearch />);
    const button = screen.queryByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
  });


  test('does not render an element with an invalid role', () => {
    render(<MovieSearch />);
    const invalidElement = screen.queryByRole('invalidRole');
    expect(invalidElement).toBeNull();
  });

  

  
});
