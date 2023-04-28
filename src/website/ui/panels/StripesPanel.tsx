import React, { Fragment } from 'react';
import { CloseMobileMenuButton, ColorPicker, HSplitter, NumberTextBox, Panel, PanelTitle } from 'darkly';
import { useAppSelector } from '../../dal/store';

const StripesPanel = () => {

    const stripes = useAppSelector(store => store.root.stripes);

    return (
        <Panel slideOnMobile={ true }>
            <PanelTitle>
                Stripes
                <CloseMobileMenuButton />
            </PanelTitle>

            <HSplitter />

            {
                stripes.map(stripe => {
                    return (
                        <Fragment key={ stripe.id }>
                            <NumberTextBox
                                classes="m-4"
                                width="100px"
                                value={ stripe.size }
                                setValue={ () => {

                                }}>
                                Size
                            </NumberTextBox>

                            <ColorPicker
                                classes="m-4"
                                color={ stripe.color }
                                setColor={ () => {

                                }}>
                                Color
                            </ColorPicker>

                            <HSplitter />
                        </Fragment>
                    )
                })
            }
        </Panel>
    )
};

export default StripesPanel;