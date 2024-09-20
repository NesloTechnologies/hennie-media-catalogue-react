import ViewCD from './cd/view/ViewCD';

const App = () => (
  <ViewCD
    title='Nevermind'
    id={1}
    artist='Nirvana'
    duration='48:00'
    releaseDate='24/09/1991'
    isOpen
  />
);

export default App;
