import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelCaseWithSpaces } from './App'

const CHANGE_TO_BLUE = 'Change to blue';
const CHANGE_TO_RED = 'Change to red';
const CHANGE_TO_MIDNIGHT = 'Change to Midnight Blue';
const CHANGE_TO_VIOLET = 'Change to Medium Violet Red';

test('button has correct initial color',()=> {
    render(<App/>);

    //Find an element with a role of button and text 
    const button = screen.getByRole('button', { name : CHANGE_TO_MIDNIGHT});
    expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
    expect(button).toHaveStyle('background-color: MediumVioletRed');
    expect(button).toHaveStyle('backgroundColor: MediumVioletRed');
    expect(button).toHaveStyle('backgroundColor: MediumVioletRed');
});

test('button turns blue when clicked and has changed text', ()=> {
    render(<App/>);

    //Find an element with a role of button and text 
    const button = screen.getByRole('button', { name : CHANGE_TO_MIDNIGHT });
    fireEvent.click(button);

    //expect to have color background of blue
    expect(button.textContent).toHaveTextContent(CHANGE_TO_VIOLET)
});


test('initial conditions', () =>{
    render(<App/>);

    //Find an element with a role of button and text 
    const button = screen.getByRole('button', { name : CHANGE_TO_MIDNIGHT });
    const checkbox = screen.getByRole('checkbox');
    expect(button).toBeEnabled();
    expect(checkbox).not.toBeChecked();
});

test('check uncheck fuctionality', () =>{
    render(<App/>);

    //Find an element with a role of button and text 
    const button = screen.getByRole('button', { name : CHANGE_TO_MIDNIGHT });
    const checkbox = screen.getByRole('checkbox', { name : 'Disable button' });

    expect(button).toBeEnabled();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    
    expect(button).toBeDisabled();
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
    expect(checkbox).not.toBeChecked();
});

test('check disabled color', () =>{
    render(<App/>);

    //Find an element with a role of button and text 
    const button = screen.getByRole('button', { name : CHANGE_TO_MIDNIGHT });
    const checkbox = screen.getByRole('checkbox', { name : 'Disable button' });
    fireEvent.click(checkbox);

    expect(button).toHaveStyle({backgroundColor : 'grey'});
});

test('check disabled color blue', () =>{
    render(<App/>);

    //Find an element with a role of button and text 
    const button = screen.getByRole('button', { name : CHANGE_TO_MIDNIGHT });
    const checkbox = screen.getByRole('checkbox', { name : 'Disable button' });
    
    fireEvent.click(button);
    fireEvent.click(checkbox);

    expect(button).toHaveStyle({backgroundColor : 'grey'});

    fireEvent.click(checkbox);

    expect(button).toHaveStyle({backgroundColor : 'MidnightBlue'});
});

describe('spaces before camel-case capital letters',() => {
    test('works for no inner capital letters', () => {
        expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
    });

    test('works for one inner capital letter', () => {
        expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });

    test('works for multiple inner capital letters', () => {
        expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
});