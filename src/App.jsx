import equilibrium from './images/image-equilibrium.jpg';
import veiwIcon from './images/icon-view.svg';
import ethereumIcon from './images/icon-ethereum.svg';
import clockIcon from './images/icon-clock.svg';
import avatar from './images/image-avatar.png';

function App() {
  return (
    <div className="w-full h-screen bg-dark-blue-main flex items-center justify-center">
      <div className="bg-dark-blue-card max-w-lg rounded-xl w-80 p-4 grid gap-4">
        <figure className='relative h-fit cursor-pointer'>
          <div className="rounded-xl opacity-0 hover:opacity-100 flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 bg-cyan-100">
            <img src={veiwIcon} alt="eye" />
          </div>
          <img className='rounded-lg' src={equilibrium} alt="Equilibrium" />
        </figure>
        <div>
          <h1 className="text-2xl text-white hover:text-cyan cursor-pointer mb-4 font-bold w-fit">Equilibrium #3429</h1>
          <p className="text-12 text-soft-blue">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        <div className="flex justify-between border-b border-soft-blue pb-6">
          <div className='flex gap-2 text-cyan font-bold'><img className='w-4 h-6' src={ethereumIcon} alt="Ethereum" /> 0.041 ETH</div>
          <div className='flex gap-2 text-soft-blue'><img className='w-6 h-6' src={clockIcon} alt="Clock" /> 3 days left</div>
        </div>
        <div className="flex items-center gap-4">
          <img className='w-8 h-8 border-soft-blue border-2 rounded-full' src={avatar} alt="avatar" />
          <p className='text-soft-blue'>Creation of <span className='text-white hover:text-cyan cursor-pointer'>Jules Wyvern</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
