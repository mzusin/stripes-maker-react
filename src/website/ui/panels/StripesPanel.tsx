import React, { Fragment } from 'react';
import { CloseMobileMenuButton, ColorPicker, EButtonType, HSplitter, NumberTextBox, Panel, PanelTitle, PanelSection, Button } from 'darkly';
import { rootActions, useAppDispatch, useAppSelector } from '../../dal/store';
import { IStripe } from '../../iterfaces';
import { addStripe, updateStripe } from '../../domain/stripes-provider';

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

    const addStripeHandler = () => {
        const updatedStripes = addStripe(stripes);

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

            <PanelSection fullHeight={ true } scrollable={ true } style={{
                paddingBottom: '250px',
            }}>
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
                                    popupPosition="right"
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
            </PanelSection>

            <Button type={ EButtonType.Primary } classes="my-4" onClick={ addStripeHandler }>
                Add Stripe
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-4" width="24"
                     height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                </svg>
            </Button>
        </Panel>
    )
};

export default StripesPanel;