const Course = (props) => {
        const Header = (props) => {
        return <div>
            <h1>{props.course.name}</h1>
        </div>
    }
    const Content = (props) => {
        return (
            <div>
                {props.course.parts.map((part) => (
                    <div key={part.id}>
                        <Part part={part}/>
                    </div>
                ))}
            </div>
        );
    }

    const Part = (props) => {
        return <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    }
    const Total = (props) => {
       const number = props.course.parts.reduce((s, part) => s + part.exercises, 0);
        return <div>
            <p>Number of
                exercises {number}</p>
        </div>
    }
    return (
        <div>
            <Header course={props.course}/>
            <Content course={props.course}/>
            <Total course={props.course}/>
        </div>
    )
}
export default Course;
