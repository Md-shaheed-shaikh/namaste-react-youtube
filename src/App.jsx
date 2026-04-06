
import './App.css'
import Body from './Components/Body'
import Header from './Components/Header'
import store from './Utils/Store'
import {Provider} from 'react-redux';

export const App=()=> {
  return (
    <Provider store={store}>
    <div className='flex flex-col'>
      <Header/>
      <Body/>
    </div>
    </Provider>
  )
}
export default App




 // -head
  // -body
  //   -sidebar
  //     -menuItems
  //   -MainContainer
  //     -categoryList
  //     -VideoContainer
  //       -videoCards