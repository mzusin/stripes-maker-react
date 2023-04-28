import React from 'react';
import { VIconsMenu, HamburgerButton, VIconsMenuLogo, HSplitter, VIconsMenuButton } from 'darkly';

const ActionsMenu = () => {
    return (
        <VIconsMenu>

            <div className="flex">
                <HamburgerButton />

                <VIconsMenuLogo href="/">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24" strokeWidth="3.48"
                         stroke="rgba(255, 255, 255, 1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="50%" cy="50%" r="50%" stroke="none" strokeWidth="0" fill="rgba(40, 95, 104, 1)"/>
                        <g transform="translate(3.36, 3.36) scale(0.72)">
                            <g transform="rotate(25.2 12 12)">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 20v-16l6 14l6 -14v16"/>
                            </g>
                        </g>
                    </svg>
                </VIconsMenuLogo>
            </div>

            <HSplitter classes="mb-4" />

            <VIconsMenuButton title="Image Size" selected={ true }>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5h11"></path>
                    <path d="M12 7l2 -2l-2 -2"></path>
                    <path d="M5 3l-2 2l2 2"></path>
                    <path d="M19 10v11"></path>
                    <path d="M17 19l2 2l2 -2"></path>
                    <path d="M21 12l-2 -2l-2 2"></path>
                    <path d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z"></path>
                </svg>
            </VIconsMenuButton>

            <VIconsMenuButton title="Stripes">
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 5l-10 14"></path>
                    <path d="M20 5l-10 14"></path>
                </svg>
            </VIconsMenuButton>

            <VIconsMenuButton title="Rotation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5"></path>
                    <path d="M18.37 7.16l0 .01"></path>
                    <path d="M13 19.94l0 .01"></path>
                    <path d="M16.84 18.37l0 .01"></path>
                    <path d="M19.37 15.1l0 .01"></path>
                    <path d="M19.94 11l0 .01"></path>
                </svg>
            </VIconsMenuButton>

            <VIconsMenuButton title="Animation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round"
                     strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z"></path>
                    <path d="M17 20h-2"></path>
                    <path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z"></path>
                    <path d="M7 4h2"></path>
                    <path d="M14 4h-2"></path>
                    <path d="M12 20h-2"></path>
                    <path d="M3 20c8 0 10 -16 18 -16"></path>
                </svg>
            </VIconsMenuButton>

            <VIconsMenuButton title="Export">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path>
                </svg>
            </VIconsMenuButton>
        </VIconsMenu>
    )
};

export default ActionsMenu;