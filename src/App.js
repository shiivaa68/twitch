
import {BrowserRouter,Route} from 'react-router-dom'
import StreamCreate from './component/streams/StreamCreate'
import StreamDelete from './component/streams/StreamDelete'
import StreamList from './component/streams/StreamList'
import StreamEdit from './component/streams/StreamEdit'
import StreamShow from './component/streams/StreamShow'
import Header from './Header'


const  App =() =>{
  return (
    <div className="ui container">
       
      <BrowserRouter>
    
      <div>
      <Header/>
      <Route path="/" exact component={StreamList}/>
      <Route path="/streams/new" component={StreamCreate}/>
      <Route path="/streams/edit" component={StreamEdit}/>
      <Route path="/streams/delete" component={StreamDelete}/>
      <Route path="/streams/show" component={StreamShow}/>
      </div>
      </BrowserRouter>
      </div>
 
 
  );
}

export default App;
