import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import { addTech } from '~/store/modules/techs/actions';
import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('Techlist component', () => {
    it('should render tech list', () => {
        useSelector.mockImplementation(cb => cb({
            techs: ['Node.js', 'ReactJS']
        }));

        const { getByTestId, getByText } = render(<TechList />);

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    });

    it('should be able to add new tech', () => {
        const { getByTestId, getByLabelText } = render(<TechList />);

        const dispatch = jest.fn();

        useDispatch.mockReturnValue(dispatch);

        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
        fireEvent.submit(getByTestId('tech-form'));

        expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
    });

    it('should be able to add new tech 2', () => {
        const { getByText, getByTestid } = render(<TechList />);

        fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
        fireEvent.keyPress(getByText('Adiconar'));

        expect(getByText('Node.js')).toBeTruthy();
        expect(getByTestId('tech-input')).toHaveProp('value', '');
    });
}); 