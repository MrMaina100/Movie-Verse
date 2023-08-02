import errorImage from '../../assests/Images/cat.png'

function ErrorComponet() {
  return (
   
    <div className='w-60 h-60 md:w-[35%] '>
      <img src={errorImage} alt="" />  

      <h1 className='text-3xl font-inter '> No results found</h1>   

    </div>
  )
}
export default ErrorComponet