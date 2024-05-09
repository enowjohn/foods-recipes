
import React from 'react';
import RecipeList from './components/RecipeList';
// import MealDailog from './components/MealDailog';
import './App.css'

const App = () => {
  return (
    
      <>
      <h1 className='h1'> Recipe App</h1>
      <RecipeList />
      {/* <MealDailog/> */}
      </>
  );
};

export default App;










// import React from 'react';
// import {RecipeContextProvider} from './RecipeContext';
// import RecipeList from './RecipeList';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Recipe App</h1>
//       <RecipeContextProvider>
//         <RecipeList />
//       </RecipeContextProvider>
//     </div>
//   );
// }

// export default App;