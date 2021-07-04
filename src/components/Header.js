import Button from './Button'
const Header = ({title}) => {
	const onClick = () => {
		alert('Hola prros')
	}
	return (
		<header className='header'>
			<h1>{title}</h1>	
			<Button text="Add" onClick={onClick}/>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker'
}

export default Header
