import React from 'react';
import { SideBar } from 'darkly';
import ActionsMenu from './ui/ActionsMenu';
import ActionsPanel from './ui/ActionsPanel';
import MainTopBar from './ui/MainTopBar';
import SVG from './ui/SVG';
import MainBottomBar from './ui/MainBottomBar';

const App = () => {

    return (
        <div className="bg-slate-900 text-slate-200 h-screen w-full flex text-base">

            <ActionsMenu />

            <ActionsPanel />

            <div className="flex flex-col flex-1 w-full">

                <MainTopBar />

                <SVG />

                <MainBottomBar />
            </div>

            <SideBar></SideBar>

        </div>
    )
};

export default App;