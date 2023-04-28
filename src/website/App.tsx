import React from 'react';
import { BottomBar, Button, EButtonType, FramedImage, SideBar, StretchBox, TopBar } from 'darkly';
import ActionsMenu from './ui/ActionsMenu';
import ActionsPanel from './ui/ActionsPanel';

const App = () => {

    return (
        <div className="bg-slate-900 text-slate-200 h-screen w-full flex text-base">

            <ActionsMenu />

            <ActionsPanel />

            <div className="flex flex-col flex-1 w-full">

                <TopBar classes="text-center justify-center">
                    <p className="text-center p-2 text-sm text-slate-300">
                        🤩 If you like this project, please support us by starring our &nbsp;
                        <a target="_blank"
                           rel="noopener noreferrer"
                           href="https://github.com/mzusin/darkly"
                           className="underline">GitHub repository</a> 🤩</p>
                </TopBar>

                <StretchBox classes="flex justify-center items-center p-4">
                    <FramedImage width={ '500px' } height={ '270px' } classes="mx-auto">

                    </FramedImage>
                </StretchBox>

                <BottomBar classes="justify-end">
                    <Button type={ EButtonType.OutlineSecondary }>
                        Reset
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                             width="20" height="20"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                             className="ml-2 hidden md:block" viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="m9 11-4 4 4 4m-4-4h11a4 4 0 0 0 0-8h-1"/>
                        </svg>
                    </Button>

                    <Button>
                        Download
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                             width="20" height="20"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                             className="ml-2 hidden md:block" viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M19 18a3.5 3.5 0 0 0 0-7h-1A5 4.5 0 0 0 7 9a4.6 4.4 0 0 0-2.1 8.4M12 13v9m-3-3 3 3 3-3" />
                        </svg>
                    </Button>
                </BottomBar>
            </div>

            <SideBar></SideBar>

        </div>
    )
};

export default App;