import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
        <div className='text-5xl flex justify-center gap-10 py-3'>
            <a href="https://github.com/connormcgrew"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/"><AiFillLinkedin/></a>
          </div>
          <div className='flex justify-center'>
            <p>Checkout my 
              <a href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/" className='text-amber-950'> LinkedIn </a> 
              and 
              <a href="https://github.com/connormcgrew" className='text-amber-950'> Github</a>
              !
              </p>
          </div>
        </footer>
    )
}

export default Footer;