import { TopBar } from 'darkly';
import React from 'react';

const MainTopBar = () => {
    return (
        <TopBar classes="text-center justify-center">
            <p className="text-center p-2 text-sm text-slate-300">
                🤩 If you like this project, please support us by starring our &nbsp;
                <a target="_blank"
                   rel="noopener noreferrer"
                   href="https://github.com/mzusin/stripes-maker-react"
                   className="underline">GitHub repository</a> 🤩</p>
        </TopBar>
    )
};

export default MainTopBar;