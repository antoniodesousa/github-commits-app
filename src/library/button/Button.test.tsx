import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
	test('should render primary type', () => {
		render(<Button role={'button'} type={'primary'}>Primary</Button>);
		const button = screen.getByRole(/button/);
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Primary');
		expect(button).toHaveAttribute('type', 'button');
		expect(button).toHaveClass('ant-btn-primary');
	});

	test('should render link type', () => {
		render(<Button role={'button'} type={'link'}>Link</Button>);
		const button = screen.getByRole(/button/);
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Link');
		expect(button).toHaveAttribute('type', 'button');
		expect(button).toHaveClass('ant-btn-link');
	});

	test('should render text type', () => {
		render(<Button role={'button'} type={'text'}>Text</Button>);
		const button = screen.getByRole(/button/);
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Text');
		expect(button).toHaveAttribute('type', 'button');
		expect(button).toHaveClass('ant-btn-text');
	});

	test('should render ghost type', () => {
		render(<Button role={'button'} type={'ghost'}>Ghost</Button>);
		const button = screen.getByRole(/button/);
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Ghost');
		expect(button).toHaveAttribute('type', 'button');
		expect(button).toHaveClass('ant-btn-ghost');
	});

	test('should change button text on click', async () => {
		let buttonText = 'Continue';

		const handleClick = jest.fn(() => {
			buttonText = 'Back';
		});

		render(<Button role={'button'} onClick={handleClick}>{buttonText}</Button>);
		const button = screen.getByRole(/button/);
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Continue');

		await fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
		expect(buttonText).toBe('Back');
	});
});
