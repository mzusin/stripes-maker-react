import React from 'react';
import { CloseMobileMenuButton, HSplitter, Panel, PanelTitle } from 'darkly';

const ExportPanel = () => {
    return (
        <Panel slideOnMobile={ true }>
            <PanelTitle>
                Export
                <CloseMobileMenuButton />
            </PanelTitle>
            <HSplitter />
        </Panel>
    )
};

export default ExportPanel;