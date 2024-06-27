import { Fragment, useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'

export default function LoginPopup({isOpen, close}) {

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-8 py-16 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-lg border"
            >
              <DialogTitle as="h3" className="text-3xl font-bold mb-8">
                Login
              </DialogTitle>
              <input type="text" className='border w-full h-[50px] rounded-full px-4 mb-4' placeholder='Email' />
              <input type="text" className='border w-full h-[50px] rounded-full px-4 mb-6' placeholder='Email' />
              <div className="mt-4">
                <Button
                  className="w-full text-center font-bold bg-black h-[50px] rounded-full text-white"
                  onClick={close}
                >
                  Login
                </Button>
                <p className='text-center mt-4 text-sm'>Forgot details? <span className='text-red-500 underline'>Contact our admin</span></p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
