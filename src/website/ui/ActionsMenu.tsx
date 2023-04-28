import React from 'react';
import { HamburgerButton, HSplitter, VIconsMenu, VIconsMenuButton, VIconsMenuLogo } from 'darkly';
import { rootActions, useAppDispatch, useAppSelector } from '../dal/store';
import { AnimationIcon, ExportIcon, ImageSizeIcon, LogoIcon, RotationIcon, StripesIcon } from './Icons';
import { EAction } from '../iterfaces';

const ActionsMenu = () => {

    const dispatch = useAppDispatch();
    const selectedAction = useAppSelector(store => store.root.selectedAction);

    const selectAction = (selectedAction: EAction) => {
        dispatch(
            rootActions.main({
                selectedAction,
            })
        )
    };

    return (
        <VIconsMenu>

            <div className="flex">
                <HamburgerButton />

                <VIconsMenuLogo href="/">
                    <LogoIcon />
                </VIconsMenuLogo>
            </div>

            <HSplitter classes="mb-4" />

            <VIconsMenuButton
                title="Image Size"
                selected={ selectedAction === EAction.ImageSize }
                onClick={ () => {
                    selectAction(EAction.ImageSize);
                }}>
                <ImageSizeIcon />
            </VIconsMenuButton>

            <VIconsMenuButton
                title="Stripes"
                selected={ selectedAction === EAction.Stripes }
                onClick={ () => {
                    selectAction(EAction.Stripes);
                }}>
                <StripesIcon />
            </VIconsMenuButton>

            <VIconsMenuButton
                title="Rotation"
                selected={ selectedAction === EAction.Rotation }
                onClick={ () => {
                    selectAction(EAction.Rotation);
                }}>
                <RotationIcon />
            </VIconsMenuButton>

            <VIconsMenuButton
                title="Animation"
                selected={ selectedAction === EAction.Animation }
                onClick={ () => {
                    selectAction(EAction.Animation);
                }}>
                <AnimationIcon />
            </VIconsMenuButton>

            <VIconsMenuButton
                title="Export"
                selected={ selectedAction === EAction.Export }
                onClick={ () => {
                    selectAction(EAction.Export);
                }}>
                <ExportIcon />
            </VIconsMenuButton>
        </VIconsMenu>
    )
};

export default ActionsMenu;

