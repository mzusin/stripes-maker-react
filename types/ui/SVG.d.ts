/// <reference types="react" />
import { EAnimationType, IStripe } from '../iterfaces';
export interface ISvgProps {
    stripes: IStripe[];
    lineRotation: number;
    animationType: EAnimationType;
    animationDuration: number;
}
declare const SVG: (props: ISvgProps) => JSX.Element;
export default SVG;
