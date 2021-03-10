import React from 'react';
import { render, screen } from '@testing-library/react';
import { CommitDetails } from './CommitDetails';
import { commit } from '../mocks/commit';

const DescriptionsMock = (props: any): JSX.Element => {
	const {children, bordered, ...rest} = props;
	return <div data-testid="details" bordered={bordered.toString()} {...rest}>{children}</div>
};

DescriptionsMock.Item = (props: any): JSX.Element => {
	const {children, ...rest} = props;
	return <div {...rest}>{children}</div>
};

jest.mock('../library/descriptions/Descriptions', () => {
	return {
		__esModule: true,
		Descriptions: DescriptionsMock
	};
});

const momentMock = (date: string) => {
	return {
		format: () => date
	};
};

jest.mock('moment', () => {
	return {
		__esModule: true,
		default: momentMock
	};
});

const {author, message} = commit.commit;

describe('CommitDetails component', () => {
	test('should render correctly', () => {
		render(<CommitDetails commit={commit}/>);
		const details = screen.getByTestId(/details/);
		expect(details).toBeInTheDocument();
		expect(details).toHaveClass('details-box');
		expect(details).toHaveAttribute('bordered', 'true');
		expect(details).toHaveAttribute('layout', 'vertical');
	});

	test('should render author name', () => {
		render(<CommitDetails commit={commit}/>);
		const details = screen.getByText(author.name);
		expect(details).toBeInTheDocument();
		expect(details).toHaveAttribute('label', 'Author');
	});

	test('should render author email', () => {
		render(<CommitDetails commit={commit}/>);
		const details = screen.getByText(author.email);
		expect(details).toBeInTheDocument();
		expect(details).toHaveAttribute('label', 'Email');
	});

	test('should render commit date', () => {
		render(<CommitDetails commit={commit}/>);
		const details = screen.getByText(author.date);
		expect(details).toBeInTheDocument();
		expect(details).toHaveAttribute('label', 'Date');
	});

	test('should render commit message', () => {
		render(<CommitDetails commit={commit}/>);
		const details = screen.getByText(message);
		expect(details).toBeInTheDocument();
		expect(details).toHaveAttribute('label', 'Message');
	});
});
