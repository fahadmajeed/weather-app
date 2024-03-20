import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { WeatherComponentReact } from './components/WeatherComponent';
import { useQuery, gql } from '@apollo/client';
import '@testing-library/jest-dom';

// Mock ApolloClient and useQuery
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  ApolloClient: jest.fn(),
  InMemoryCache: jest.fn(),
  useQuery: jest.fn(),
  gql: jest.fn()
}));
// Mock gql function
const gqlMock = (query) => query; // Mock function that returns the query itself

// Provide the mocked gql function to the global scope
global.gql = gqlMock;
describe('WeatherComponentReact', () => {
  beforeEach(() => {
    // Reset mock implementations before each test
    jest.clearAllMocks();
  });

  it('renders loading state correctly', async () => {
    // Mock useQuery hook to return loading state
    useQuery.mockReturnValueOnce({ loading: true });

    const { getByText } = render(<WeatherComponentReact latitude={0} longitude={0} city="Test City" />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state correctly', async () => {
    // Mock useQuery hook to return error state
    useQuery.mockReturnValueOnce({ error: { message: 'Failed to fetch' } });

    const { getByText } = render(<WeatherComponentReact latitude={0} longitude={0} city="Test City" />);

    expect(getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  it('renders weather data correctly', async () => {
    const mockData = {
      weather: {
        temperature: 25,
        description: 'Sunny, Clear Sky',
        rain: 0,
      },
    };

    // Mock useQuery hook to return successful data fetching
    useQuery.mockReturnValueOnce({ loading: false, error: undefined, data: { weather: mockData.weather } });

    const { getByTestId, getByText } = render(<WeatherComponentReact latitude={0} longitude={0} city="Test City" />);


    // Assert the rendered data
    expect(getByTestId('temperature')).toHaveTextContent('25°C');
    expect(getByText('Test City')).toBeInTheDocument();
    expect(getByTestId('windSpeed')).toHaveTextContent('Clear Sky');
  });
});
