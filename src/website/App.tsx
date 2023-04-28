import React, { useState } from 'react';
import { VIconsMenu, HamburgerButton, VIconsMenuLogo, HSplitter, VIconsMenuButton, Panel, PanelTitle, SideBar, StretchBox, ButtonsGroupButton, TopBar, NumberTextBox, CloseMobileMenuButton, ColorPicker, IconRadioButton, IconRadioButtonGroup, ButtonsGroup, FramedImage, BottomBar, Button, EButtonType } from 'darkly';

const App = () => {

    const [size, setSize] = useState(10);
    const [color, setColor] = useState('#168B9E');
    const [duration, setDuration] = useState(100);
    const [selectedAnimation, setSelectedAnimation] = useState(0);
    const [imgFormat, _setImageFormat] = useState(0);

    return (
        <div className="bg-slate-900 text-slate-200 h-screen w-full flex text-base">

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

            <div className="darkly-main flex flex-1">
                <Panel slideOnMobile={ true }>
                    <PanelTitle>
                        Stripes
                        <CloseMobileMenuButton />
                    </PanelTitle>
                    <HSplitter />

                    <NumberTextBox classes="m-4" width="100px" value={ size } setValue={ setSize }>
                        Size
                    </NumberTextBox>

                    <ColorPicker classes="m-4" color={ color } setColor={ setColor }>
                        Color
                    </ColorPicker>

                    <IconRadioButtonGroup>
                        <IconRadioButton
                            groupName="animation"
                            title="Linear Animation"
                            checked={ selectedAnimation === 0 }
                            onChange={ () => {
                                setSelectedAnimation(0);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                                 width="20px" height="20px"
                                 strokeLinejoin="round" strokeWidth="1.5"
                                 viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path d="M14 3 3 14m0-4v4h4m10-4h4v4m-11 7 11-11"/>
                            </svg>
                        </IconRadioButton>

                        <IconRadioButton
                            groupName="animation"
                            title="Clockwise Rotation"
                            checked={ selectedAnimation === 1 }
                            onChange={ () => {
                                setSelectedAnimation(1);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                 width="20px" height="20px" viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5"/>
                            </svg>
                        </IconRadioButton>

                        <IconRadioButton
                            groupName="animation"
                            title="Counter Clockwise Rotation"
                            checked={ selectedAnimation === 2 }
                            onChange={ () => {
                                setSelectedAnimation(2);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                 width="20px" height="20px" viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5"/>
                            </svg>
                        </IconRadioButton>

                        <IconRadioButton
                            groupName="animation"
                            title="No Animation"
                            checked={ selectedAnimation === 3 }
                            onChange={ () => {
                                setSelectedAnimation(3);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                 width="20px" height="20px" viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m6 3 6-6"/>
                            </svg>
                        </IconRadioButton>
                    </IconRadioButtonGroup>

                    <NumberTextBox classes="m-4" width="100px" value={ duration } setValue={ setDuration }>
                        Duration
                    </NumberTextBox>

                    <ButtonsGroup>
                        <ButtonsGroupButton selected={ imgFormat === 0 } onClick={ () => {
                            _setImageFormat(0);
                        }}>SVG</ButtonsGroupButton>
                        <ButtonsGroupButton selected={ imgFormat === 1 } onClick={ () => {
                            _setImageFormat(1);
                        }}>PNG</ButtonsGroupButton>
                        <ButtonsGroupButton selected={ imgFormat === 2 } onClick={ () => {
                            _setImageFormat(2);
                        }}>JPG</ButtonsGroupButton>
                        <ButtonsGroupButton selected={ imgFormat === 3 } onClick={ () => {
                            _setImageFormat(3);
                        }}>GIF</ButtonsGroupButton>
                    </ButtonsGroup>
                </Panel>

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
            </div>

            <SideBar>

            </SideBar>

        </div>
    )
};

export default App;