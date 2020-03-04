import React from 'react';
import './App.css';

// import Form from './Form';
// import ParentClass from './MethodsAsProps/ParentClass';

// import Mounting from './LifeCycleMethods/Mounting';

// import Parent from './PureComponentAndMemo/Parent';

// import Focus from './refs/Focus';
// import InputParent from './refs/InputParent';
// import ForwardRefParent from './refs/ForwardRefParent';

// import Parent from './HigherOrderComponents/Parent'

import Counter from './RenderProps/Counter';
import CountChild from './RenderProps/CountChild';
import Header from './RenderProps/Header';


function App() {
  return (
    <div className="App">
      {/* <ParentClass /> */}
      {/* <Form /> */}
      {/* <Mounting /> */}
      {/* <Parent /> */}

      {/* <Focus /> */}

      {/* <InputParent />  */}

      {/* <ForwardRefParent /> */}

      {/* <Parent name="Zorro" /> */}

      <Counter renderCount={(count, incrementCount) => <CountChild count={count} incrementCount={incrementCount} /> } />
      <Counter renderCount={(count, incrementCount) => <Header count={count} incrementCount={incrementCount} /> } />

    </div>
  );
}

export default App;
