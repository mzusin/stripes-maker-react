import React from 'react';
import ImageSizePanel from './panels/ImageSizePanel';
import { useAppSelector } from '../dal/store';
import { EAction } from '../iterfaces';
import StripesPanel from './panels/StripesPanel';
import RotationPanel from './panels/RotationPanel';
import AnimationPanel from './panels/AnimationPanel';
import ExportPanel from './panels/ExportPanel';

const ActionsPanel = () => {

    const selectedAction = useAppSelector(store => store.root.selectedAction);

    return (
        <>
            { selectedAction === EAction.ImageSize && <ImageSizePanel /> }
            { selectedAction === EAction.Stripes && <StripesPanel /> }
            { selectedAction === EAction.Rotation && <RotationPanel /> }
            { selectedAction === EAction.Animation && <AnimationPanel /> }
            { selectedAction === EAction.Export && <ExportPanel /> }
        </>
    )
};

export default ActionsPanel;