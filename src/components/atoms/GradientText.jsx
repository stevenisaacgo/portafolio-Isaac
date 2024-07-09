
const text = 'Gradient Text';
const fromColor = 'from-blue-500';
const toColor = 'to-green-500';

export const GradientText = ({text, fromColor, toColor, className}) => {
    return (
        <span className={`${className} text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${toColor}`}>
            {text}
        </span>
    )
}