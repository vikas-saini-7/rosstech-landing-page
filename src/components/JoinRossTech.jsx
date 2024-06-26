import React from 'react'

const JoinRossTech = () => {
  return (
    <div>
        <h1 className='text-[36px] font-bold'>Join <span className='text-primary'>Rosstech</span> Today</h1>
        <p>Transform your trading operations with Rosstech. Simplify processes, improve communication, and ensure top-quality standards.</p>
        <div className='flex'>
            <form className='border'>
                <input type="text" />
                <input type="email" />
                <input type="number" />
                <input type="text" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
            <img src="/join.png" alt="" />
        </div>
    </div>
  )
}

export default JoinRossTech