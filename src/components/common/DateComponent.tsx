import { parseISO, format } from 'date-fns';

interface DateProp {
    date?: Date,
    class: string
}

export default function Date({ props }: { props: DateProp }) {
    if (props.date) {
        if (props.date?.toLocaleString()) {
            const date = parseISO(props.date.toLocaleString());
            return (
                <time dateTime={props.date.toLocaleString()}>
                    <span className={props.class}>{format(date, 'EEEE, d LLLL yyyy')}</span>
                </time>
            )
        }
        return <span className={props.class}>
            -
        </span>
    }
    return <span className={props.class}>
        -
    </span>
}