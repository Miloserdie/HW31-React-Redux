import './App.css';
import TodosList from './components/todo/TodosList';
import AddTask from './components/todo/AddTask';

function App() {
	return (
		<>
			<AddTask></AddTask>
			<TodosList></TodosList>
		</>
	)
}

export default App;