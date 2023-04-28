import { BottomBar, Button, EButtonType } from 'darkly';
import React from 'react';

const MainBottomBar = () => {
    return (
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
    )
};

export default MainBottomBar;