import React from 'react';
import { CloseMobileMenuButton, HSplitter, Panel, PanelTitle } from 'darkly';

const StripesPanel = () => {
    return (
        <Panel slideOnMobile={ true }>
            <PanelTitle>
                Stripes
                <CloseMobileMenuButton />
            </PanelTitle>
            <HSplitter />
        </Panel>
    )
};

export default StripesPanel;