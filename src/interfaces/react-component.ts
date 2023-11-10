type ReactFC<T> = React.FC<{
    [K in keyof T]: T[K]
}>
type ReactComponent<T = void, K = HTMLDivElement> = ReactFC<
    T & React.HTMLProps<K>
>

export default ReactComponent
