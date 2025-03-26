"use client";
import React, { useState } from "react";
import { Instagram, Linkedin, Facebook, Mail ,Plus,X} from "lucide-react";
import { Button } from "./ui/button";

const LinkAccounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Instagram", icon: <Instagram size={18} />, connected: false },
    { id: 2, name: "LinkedIn", icon: <Linkedin size={18} />, connected: true },
    { id: 3, name: "Facebook", icon: <Facebook size={18} />, connected: true },
    { id: 4, name: "Gmail", icon: <Mail size={18} />, connected: true },
  ]);
  const toggleConnection = (id) => {
    setAccounts(accounts.map((acc) => (acc.id === id ? { ...acc, connected: !acc.connected } : acc)));
  };

  return (
    <div className=" flex flex-col justify-center gap-4">
      <div className="space-y-2">
      <h2 className="text-md font-semibold">Linked Accounts</h2>
      <p className="text-xs text-gray-500 ">Connect other accounts to enhance your experience</p>
      </div>
      {accounts.map((account) => (
        <div key={account.id} className="flex items-center justify-between flex-wrap gap-3 py-2">
          <div className="flex items-center gap-3 ">
            <div className="bg-gray-100 p-2 rounded-full  text-gray-600">{account.icon}</div>
            <span className="text-sm font-medium">{account.name}</span>
          </div>
          <Button
              onClick={() => toggleConnection(account.id)}
              variant="outline"
              className="text-sm rounded-sm h-8 flex items-center gap-2"
            >
              {account.connected ? (
                <>
                  <X size={15} strokeWidth={1.5} className="text-gray-500"/>
                  <div className="text-gray-500">
                    Disconnect
                  </div>
                  
                </>
              ) : (
                <>
                  <Plus size={105} strokeWidth={1.5} />
                  Connect
                </>
              )}
            </Button>

        </div>
      ))}
    </div>
  );
};

export default LinkAccounts;
