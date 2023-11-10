import ReactComponent from '../../interfaces/react-component'

const Main: ReactComponent = ({ className, ...props }) => {
    return (
        <main
            {...props}
            className={className + ' flex items-center justify-center'}
        >
            <h1 className='title mb-2'>Next App</h1>
        </main>
    )
}

export default Main
