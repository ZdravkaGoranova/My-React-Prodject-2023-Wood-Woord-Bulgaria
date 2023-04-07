import { render, screen ,act} from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom';
import MyProducts from './MyProducts.js';
import userEvent from '@testing-library/user-event';


describe('MyProducts Component', () => {
    test('renders title correctly', () => {
        const title = 'Test Title';
        act(() => {
        render(
            <BrowserRouter>
                <MyProducts title={title} />
            </BrowserRouter>
        );
    });
        const titleElement = screen.getByText(`Title: ${title}`);
        expect(titleElement).toBeInTheDocument();

    });

    test('renders image with correct alt text ', () => {
        const title = 'Test Title';
        const picture = 'https://example.com/image.jpg';
        act(() => {
        render(
            <BrowserRouter>
                <MyProducts title={title} picture={picture} />
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
                <MyProducts _id={itemId} />
            </BrowserRouter>
        );
    });
        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/details/${itemId}`);

    });

});
