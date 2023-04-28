import React, { Fragment } from 'react';
import { CloseMobileMenuButton, ColorPicker, HSplitter, NumberTextBox, Panel, PanelTitle } from 'darkly';
import { rootActions, useAppDispatch, useAppSelector } from '../../dal/store';
import { IStripe } from '../../iterfaces';
import { updateStripe } from '../../domain/stripes-provider';

const StripesPanel = () => {

    const dispatch = useAppDispatch();
    const stripes = useAppSelector(store => store.root.stripes);

    const onSizeChange = (stripe: IStripe, newSize: number) => {
        const updatedStripes = updateStripe(
            stripe.id,
            { ...stripe, size: newSize },
            stripes
        );

        dispatch(
            rootActions.main({
                stripes: updatedStripes,
            })
        )
    };

    const onColorChange = (stripe: IStripe, newColor: string) => {
        const updatedStripes = updateStripe(
            stripe.id,
            { ...stripe, color: newColor },
            stripes
        );

        dispatch(
            rootActions.main({
                stripes: updatedStripes,
            })
        )
    };

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
                                setValue={ (newValue: number) => {
                                    onSizeChange(stripe, newValue);
                                }}>
                                Size
                            </NumberTextBox>

                            <ColorPicker
                                classes="m-4"
                                color={ stripe.color }
                                setColor={ (newColor: string) => {
                                    onColorChange(stripe, newColor);
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