import React, { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [account, setAccount] = useState(null);

  const createNewAccount = () => {
    const wallet = ethers.Wallet.createRandom();
    setAccount({
      address: wallet.address,
      privateKey: wallet.privateKey
    });
  }

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
