import React, { Fragment } from 'react';
import { CloseMobileMenuButton, ColorPicker, EButtonType, HSplitter, NumberTextBox, Panel, PanelTitle, PanelSection, Button } from 'darkly';
import store, { rootActions, useAppDispatch, useAppSelector } from '../../dal/store';
import { IStripe } from '../../iterfaces';
import { addStripe, deleteStripe, updateStripe } from '../../domain/stripes-provider';
import { CloseIcon, PlusIcon } from '../Icons';
import debounce from 'lodash-es/debounce';
import tinycolor from 'tinycolor2';

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

    const _debounce = debounce( (stripe: IStripe, newColor: string) => {

        const updatedStripes = updateStripe(
            stripe.id,
            { ...stripe, color: newColor },
            store.getState().root.stripes
        );

        dispatch(
            rootActions.main({
                stripes: updatedStripes,
            })
        )
    }, 500);

    /*
    const onColorChange = useCallback((stripe: IStripe, newColor: string) => {

        const updatedStripes = updateStripe(
            stripe.id,
            { ...stripe, color: newColor },
            store.getState().root.stripes
        );

        dispatch(
            rootActions.main({
                stripes: updatedStripes,
            })
        )
    }, [stripes]);*/

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
                                        if(tinycolor.equals(stripe.color, newColor)) return;
                                        _debounce(stripe, newColor);
                                    }}>
                                    Color
                                </ColorPicker>

                                <NumberTextBox
                                    classes="m-4"
                                    width="100px"
                                    value={ stripe.size }
                                    setValue={ (newValue: number) => {
                                        if(stripe.size === newValue) return;
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