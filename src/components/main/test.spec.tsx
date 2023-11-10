import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'

import Main from '.'

const TestWrapper = ({ children }: { children: ReactNode }) => {
    return <div className='h-screen'>{children}</div>
}

const renderMain = () => render(<Main />, { wrapper: TestWrapper })

describe('<Main />', () => {
    it('should render the heading', () => {
        renderMain()
        expect(screen.getByRole('heading', { name: /next app/i }))
    })

    it('should match snapshot', () => {
        const { container } = renderMain()
        expect(container.firstChild).toMatchSnapshot()
    })
})
