import React from 'react';
import { CloseMobileMenuButton, HSplitter, Panel, PanelTitle } from 'darkly';

const RotationPanel = () => {
    return (
        <Panel slideOnMobile={ true }>
            <PanelTitle>
                Rotation
                <CloseMobileMenuButton />
            </PanelTitle>
            <HSplitter />
        </Panel>
    )
};

export default RotationPanel;