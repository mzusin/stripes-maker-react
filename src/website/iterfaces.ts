export enum EAction {
    ImageSize = 0,
    Stripes = 1,
    Rotation = 2,
    Animation = 3,
    Export = 4,
}

export enum EAnimationType {
    NoAnimation = 1,
    RotateClockWise = 2,
    RotationCounterClockwise = 3,
    Linear = 4,
}

export interface IStripe {
    color: string;
    size: number;
    id: string;
}