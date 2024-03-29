import { render, screen ,act} from '@testing-library/react';
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from 'react-router-dom';
import Publication from './Publication.js';

describe('Publication Component', () => {
    test('Show test', () => {
        expect(true).toBe.true;
    });

    test('renders title correctly', () => {
        const title = 'Test Title';
        act(() => {
        render(
            <BrowserRouter>
                <Publication title={title} />
            </BrowserRouter>
        );
    });
        const titleElement = screen.getByText(`Title: ${title}`);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders type correctly ', () => {
        const type = 'Test type';
        act(() => {
        render(
            <BrowserRouter>
                <Publication type={type} />
            </BrowserRouter>
        );
    });
        const titleElement = screen.getByText(`Type: ${type}`);
        expect(titleElement).toBeInTheDocument();
    });
    test('renders image with correct alt text ', () => {

        const title = 'Test Title';
        const picture = 'https://example.com/image.jpg';
        act(() => {
        render(
            <BrowserRouter>
                <Publication title={title} picture={picture} />
            </BrowserRouter>
        );
    });
        const imageElement = screen.getByAltText(title);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.src).toBe(picture);

    });

    test('Click on details', async () => {
        global.window = { location: { pathname: null } };
        const itemId = 'id';
        act(() => {
        render(
            <BrowserRouter>
                <Publication _id={itemId} />
            </BrowserRouter>
        );
    });
        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/details/${itemId}`);
    });

});