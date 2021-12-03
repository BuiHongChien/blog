import {Route, BrowserRouter} from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Blogs from './components/pages/Blogs'
import Blog from './components/pages/Blog'
import Quotes from './components/pages/Quotes'
import Login from './components/admin/Login'
import UploadQuote from './components/admin/UploadQuote'
import UploadBlog from './components/admin/UploadBlog'

import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/more/quotes' component={Quotes}/>
        <Route path='/more/blogs' exact component={Blogs}/>
        <Route path='/more/blogs/:id' component={Blog}/>
        <Route path='/admin/login' component={Login} />
        <Route path='/admin/upload/quote' component={UploadQuote}/>
        <Route path='/admin/upload/blog' component={UploadBlog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
