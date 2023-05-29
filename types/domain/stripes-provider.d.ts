import { IStripe } from '../iterfaces';
export declare const updateStripe: (id: string, updatedStripe: IStripe, stripes: IStripe[]) => IStripe[];
export declare const deleteStripe: (id: string, stripes: IStripe[]) => IStripe[];
export declare const addStripe: (stripes: IStripe[]) => IStripe[];
