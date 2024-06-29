import { Fragment, useState, useEffect } from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export default function LoginPopup({ isOpen, close }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('userRole') === 'Admin';
    if (isLoggedIn) {
      // If the user is logged in, you might want to handle it here, like redirecting to a different page
      close();
    }
  }, [close]);

  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    localStorage.setItem('userRole', 'Admin');
    localStorage.setItem('userEmail', email);
    close();
  };

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative z-10 overflow-hidden w-full max-w-md rounded-xl bg-white p-12 py-24 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-lg border"
            >
              <DialogTitle as="h3" className="text-3xl font-bold mb-8">
                Login
              </DialogTitle>
              <input
                type="email"
                className='border w-full h-[50px] rounded-full px-4 mb-4 shadow-xl shadow-violet-500/30'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className='border w-full h-[50px] rounded-full px-4 mb-6 shadow-xl shadow-violet-500/30'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
              <div className="mt-4">
                <Button
                  className="w-full text-center font-bold bg-black h-[50px] rounded-full text-white"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <p className='text-center mt-4 text-sm'>Forgot details? <span className='text-red-500 underline'>Contact our admin</span></p>
              </div>
              <div className='circle-fade-primary'></div>
              <div className='circle-fade-secondary'></div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
