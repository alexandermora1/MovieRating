import { BaseTheme } from "../themes/BaseTheme"


interface Props { children: JSX.Element | JSX.Element[] }

const BaseLayout = ({ children }: Props) => {
    return (
        <BaseTheme>
            {children}
        </BaseTheme>
    )
}

export default BaseLayout;