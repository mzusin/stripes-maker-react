import React from 'react';
import { SideBar } from 'darkly';
import ActionsMenu from './ui/ActionsMenu';
import ActionsPanel from './ui/ActionsPanel';

const App = () => {

    return (
        <div className="bg-slate-900 text-slate-200 h-screen w-full flex text-base">

            <ActionsMenu />

            <ActionsPanel />

            <SideBar></SideBar>

        </div>
    )
};

export default App;