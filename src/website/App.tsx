import React from 'react';
import { SideBar } from 'darkly';
import ActionsMenu from './ui/ActionsMenu';
import ActionsPanel from './ui/ActionsPanel';
import MainTopBar from './ui/MainTopBar';
import SVG from './ui/SVG';
import MainBottomBar from './ui/MainBottomBar';
import { useAppSelector } from './dal/store';

const App = () => {

    const stripes = useAppSelector(store => store.root.stripes);
    const lineRotation = useAppSelector(store => store.root.lineRotation);
    const animationType = useAppSelector(store => store.root.animationType);
    const animationDuration = useAppSelector(store => store.root.animationDuration);

    return (
        <div className="bg-slate-900 text-slate-200 h-screen w-full flex text-base">

            <ActionsMenu />

            <ActionsPanel />

            <div className="flex flex-col flex-1 w-full">

                <MainTopBar />

                <SVG
                    stripes={ stripes }
                    lineRotation={ lineRotation }
                    animationType={ animationType }
                    animationDuration={ animationDuration }
                />

                <MainBottomBar />
            </div>

            <SideBar></SideBar>

        </div>
    )
};

export default App;