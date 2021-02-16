interface Props {
    name: string
}

export const HelloWorld = ({ name }: Props) => {
    return <div>Hello 3 {name}</div>
}