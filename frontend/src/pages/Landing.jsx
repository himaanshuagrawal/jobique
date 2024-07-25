import Wrapper from '../assets/wrappers/LandingPage.js'

import main from '../assets/images/main.svg'
import {Link} from 'react-router-dom'
import {Logo} from '../components'


const Landing = () => {
  return (
<Wrapper >
   <nav><Logo/>
    </nav>
   <div className='container page'>
    <div className='info'>
      <h1>job <span>tracking</span>app</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non nam, placeat, tenetur in rerum obcaecati deleniti nemo iste illo perferendis, itaque nihil. Perferendis nihil numquam blanditiis a, rem nemo.</p>
      
    <Link  to='/register' className='btn register-link'> Register user</Link>
     <Link  to='/login' className='btn'> user login</Link>
    </div>
    <img src={main} alt="landing image "  className='img main-img'/>
   </div>
</Wrapper>

  )
}
export default Landing