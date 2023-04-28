import React, { useState } from 'react';
import {
    ButtonsGroup, ButtonsGroupButton,
    CloseMobileMenuButton,
    ColorPicker,
    HSplitter, IconRadioButton,
    IconRadioButtonGroup,
    NumberTextBox,
    Panel,
    PanelTitle
} from 'darkly';

const ExportPanel = () => {

    const [size, setSize] = useState(10);
    const [color, setColor] = useState('#168B9E');
    const [duration, setDuration] = useState(100);
    const [selectedAnimation, setSelectedAnimation] = useState(0);
    const [imgFormat, _setImageFormat] = useState(0);

    return (
        <Panel slideOnMobile={ true }>
            <PanelTitle>
                Export
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
    )
};

export default ExportPanel;