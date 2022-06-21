import Part from './Part'
const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} content={props.exercise1} />
            <Part part={props.part2} content={props.exercise2} />
            <Part part={props.part3} content={props.exercise3} />
        </div>

    )
}

export default Content