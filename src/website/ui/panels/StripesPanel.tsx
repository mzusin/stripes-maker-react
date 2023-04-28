import React, { Fragment } from 'react';
import { CloseMobileMenuButton, ColorPicker, EButtonType, HSplitter, NumberTextBox, Panel, PanelTitle, PanelSection, Button } from 'darkly';
import { rootActions, useAppDispatch, useAppSelector } from '../../dal/store';
import { IStripe } from '../../iterfaces';
import { addStripe, deleteStripe, updateStripe } from '../../domain/stripes-provider';
import { CloseIcon, PlusIcon } from '../Icons';

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

    const deleteStripeHandler = (id: string) => {
        const updatedStripes = deleteStripe(id, stripes);

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
                    stripes.map((stripe, i) => {
                        return (
                            <Fragment key={ stripe.id }>

                                <section className="flex items-center justify-between mx-4 mt-4 text-slate-500">
                                    <div className="text-sm">Stripe { i + 1 }</div>
                                    <button type="button" onClick={ () => {
                                        deleteStripeHandler(stripe.id);
                                    }}><CloseIcon /></button>
                                </section>

                                <ColorPicker
                                    classes="m-4"
                                    color={ stripe.color }
                                    popupPosition="right"
                                    buttonWidth="100px"
                                    setColor={ (newColor: string) => {
                                        onColorChange(stripe, newColor);
                                    }}>
                                    Color
                                </ColorPicker>

                                <NumberTextBox
                                    classes="m-4"
                                    width="100px"
                                    value={ stripe.size }
                                    setValue={ (newValue: number) => {
                                        onSizeChange(stripe, newValue);
                                    }}>
                                    Size
                                </NumberTextBox>

                                <HSplitter />
                            </Fragment>
                        )
                    })
                }
            </PanelSection>

            <Button type={ EButtonType.Primary } classes="my-4" onClick={ addStripeHandler }>
                <span className="mr-2">Add Stripe</span>
                <PlusIcon />
            </Button>
        </Panel>
    )
};

export default StripesPanel;