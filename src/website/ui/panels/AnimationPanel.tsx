import React from 'react';
import { CloseMobileMenuButton, HSplitter, Panel, PanelTitle } from 'darkly';

const AnimationPanel = () => {
    return (
        <Panel slideOnMobile={ true }>
            <PanelTitle>
                Animation
                <CloseMobileMenuButton />
            </PanelTitle>
            <HSplitter />
        </Panel>
    )
};

export default AnimationPanel;