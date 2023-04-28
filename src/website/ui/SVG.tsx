import { FramedImage, StretchBox } from 'darkly';
import { newId } from 'mz-math';
import React from 'react';
import { EAnimationType, IStripe } from '../iterfaces';
import { useAppSelector } from '../dal/store';

export interface ISvgProps {
    stripes: IStripe[];
    lineRotation: number;
    animationType: EAnimationType;
    animationDuration: number;
}

const getStripes = (stripes: IStripe[]) => {
    const res = [];
    let widthSum = 0;

    for(let i=0; i<stripes.length; i++){
        const stripe = stripes[i];

        res.push(
            <rect
                key={ `stripe-${ i }` }
                x={ 0 }
                y={ widthSum }
                width={ '100%' }
                height={ stripe.size }
                fill={ stripe.color }
            />
        );

        widthSum += stripe.size;
    }

    return res;
};

const SVG = (props: ISvgProps) => {

    const { stripes, lineRotation, animationType, animationDuration } = props;

    const patternId = newId();

    const size = stripes.reduce((prev, stripe) => prev + stripe.size, 0);
    const svgWidth = useAppSelector(store => store.root.svgWidth);
    const svgHeight = useAppSelector(store => store.root.svgHeight);

    const isRotateAnimation =
        animationType === EAnimationType.RotateClockWise ||
        animationType === EAnimationType.RotationCounterClockwise;

    return (
        <StretchBox classes="flex justify-center items-center p-4">
            <FramedImage width="100%" height="100%" classes="mx-auto overflow-hidden" style={{
                maxWidth: `${ svgWidth }px`,
                maxHeight: `${ svgHeight }px`,
            }}>
                <svg
                    id="stripes-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%">

                    {/* stripes pattern definition */}
                    <defs>
                        <pattern
                            id={ patternId }
                            patternTransform={ `rotate(${ lineRotation })` }
                            width={ '100%' }
                            height={ size }
                            x={ 0 }
                            y={ 0 }
                            patternUnits="userSpaceOnUse">

                            {
                                isRotateAnimation &&
                                <animateTransform
                                    attributeName="patternTransform"
                                    begin="0s"
                                    dur={ `${ animationDuration || 1 }s` }
                                    type="rotate"
                                    from={ animationType === EAnimationType.RotateClockWise ? '0' : `360` }
                                    to={ animationType === EAnimationType.RotateClockWise ? `360` : '0' }
                                    repeatCount="indefinite"
                                    fill="freeze"
                                />
                            }

                            {
                                animationType === EAnimationType.Linear &&
                                <animate
                                    attributeName="y"
                                    begin="0s"
                                    dur={ `${ (animationDuration || 100) }s` }
                                    from="0"
                                    to="5000px"
                                    repeatCount="indefinite"
                                    fill="freeze"
                                />
                            }

                            <g>
                                { getStripes(stripes) }
                            </g>
                        </pattern>
                    </defs>

                    {/* stripes container */}
                    <rect x={ 0 } y={ 0 } width="100%" height="100%" fill={ `url(#${ patternId })` } />

                </svg>
            </FramedImage>
        </StretchBox>
    )
};

export default SVG;