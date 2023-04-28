import { FramedImage, StretchBox } from 'darkly';
import React from 'react';

const SVG = () => {
    return (
        <StretchBox classes="flex justify-center items-center p-4">
            <FramedImage width={ '500px' } height={ '270px' } classes="mx-auto">

            </FramedImage>
        </StretchBox>
    )
};

export default SVG;