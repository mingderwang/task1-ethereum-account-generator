import React, { useState, useEffect } from 'react';
import esInstance from './EtherspotInitializer'; // Import EtherspotInitializer
import abstractAddress from './EtherspotInitializer'; // Import abstractAddress

function App() {
  const [account, setAccount] = useState(null);

  const createNewAccount = async () => {
    try {
      const wallet = await esInstance.createWallet();
      setAccount({
        address: wallet.address,
        privateKey: wallet.privateKey
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  useEffect(() => {
    const fetchAbstractAddress = async () => {
      const address = await abstractAddress;
      console.log('Abstract Address:', address);
    }

    fetchAbstractAddress();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={createNewAccount}
      >
        New Account
      </button>
      {account && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold">Generated Account</h2>
          <p>Address: {account.address}</p>
          <p>Private Key: {account.privateKey}</p>
        </div>
      )}
    </div>
  );
}

export default App;
