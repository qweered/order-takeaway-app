export const TodoList = ({todos}) => {
    return (
        <>
            {todos.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>
            })
            }
        </>
    )
}