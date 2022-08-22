import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const ReactString = 'Learn React';
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //GetByText Could work either with RegEx or Strings
  //const linkElement = screen.getByText(ReactString);
  /** Recommended option for accesibility purposes */
  const linkElement = screen.getByRole('link',{ name: ReactString });
  expect(linkElement).toBeInTheDocument();
});

//Roles documentation : https://www.w3.org/TR/wai-aria/#role_definitions
// - some elements have built-in--roles button.a
// Can't find and element like a screen reader would ?
/**
 * Then your app isn't friendly to screen readers
 */
/**
 * Much more about queries and roles later!
 */