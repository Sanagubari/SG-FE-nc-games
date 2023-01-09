import Button from 'react-bootstrap/Button';

export const Header = () => {
  return (
    <header className='header'>
      <h1 className='header-content'>NC GAMES</h1>
      <Button className='header-content Login-Button' variant="light" >Login</Button>{' '}
    </header>
  );
};
