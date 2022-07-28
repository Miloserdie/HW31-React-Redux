import Todo from './Todo';
import './TodosList.scss'
import { useSelector } from 'react-redux';



function TodosList() {
	const todos = useSelector(state => state.todos);
	
	return (
		<ul className='todos-list'>
			{todos.map((todo) => {
				return (
					<Todo todo={todo} key={todo.id}></Todo>
				)
			})}
		</ul>
	)
} 

export default TodosList;