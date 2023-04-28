import React, { useState } from 'react';
import {
    ButtonsGroup, ButtonsGroupButton,
    CloseMobileMenuButton,
    ColorPicker,
    HSplitter,
    IconRadioButton,
    IconRadioButtonGroup,
    NumberTextBox, Panel,
    PanelTitle
} from 'darkly';
import { rootActions, useAppDispatch, useAppSelector } from '../../dal/store';

const ImageSizePanel = () => {

    const dispatch = useAppDispatch();

    const svgWidth = useAppSelector(store => store.root.svgWidth);
    const svgHeight = useAppSelector(store => store.root.svgHeight);

    const setSvgWidth = (value: number) => {
        dispatch(
            rootActions.main({
                svgWidth: value,
            })
        )
    };

    const setSvgHeight = (value: number) => {
        dispatch(
            rootActions.main({
                svgHeight: value,
            })
        )
    };

    return (
        <Panel slideOnMobile={ true }>
            <PanelTitle>
                Image Size
                <CloseMobileMenuButton />
            </PanelTitle>
            <HSplitter />

            <NumberTextBox
                classes="m-4"
                width="100px"
                value={ svgWidth }
                setValue={ setSvgWidth }>
                Width
            </NumberTextBox>

            <NumberTextBox
                classes="m-4"
                width="100px"
                value={ svgHeight }
                setValue={ setSvgHeight }>
                Height
            </NumberTextBox>
        </Panel>
    )
};

export default ImageSizePanel;