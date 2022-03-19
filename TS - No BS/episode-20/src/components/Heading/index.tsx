import { Styles } from "../../react-app-env"

export const Heading = ({ title, styles, center }: { title: string, styles?: Styles, center?: boolean }) => {
    return <h2 className={styles?.title} style={{
        textAlign: center ? 'center' : 'initial'
    }}>{title}</h2>
}