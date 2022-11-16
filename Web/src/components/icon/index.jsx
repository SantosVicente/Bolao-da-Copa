import { ReactComponent as arrowLeft } from './svgs/arrow-left.svg'
import { ReactComponent as arrowRight } from './svgs/arrow-right.svg'
import { ReactComponent as Back } from './svgs/back.svg'
import { ReactComponent as Profile } from './svgs/profile.svg'


const icons = {
    arrowLeft,
    arrowRight,
    Back,
    Profile,
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props} />
}