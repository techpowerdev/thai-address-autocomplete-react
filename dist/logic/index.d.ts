export interface Address {
    district: string;
    amphoe: string;
    province: string;
    zipcode: string;
}
export interface CompatibleDatabase {
    lookup: string;
    words: string;
    data: any[];
}
export interface Config {
    database?: CompatibleDatabase;
    maxSearchResult?: number;
}
export declare class ThaiAddressFinder {
    #private;
    constructor({ database, maxSearchResult, }?: Config);
    private preProcess;
    private resolveResultByField;
    GetConfig: () => Config;
    SearchAddressByDistrict: (searchStr: string, filter?: (value?: Address, index?: number, array?: Address[]) => boolean) => Address[];
    SearchAddressByAmphoe: (searchStr: string, filter?: (value?: Address, index?: number, array?: Address[]) => boolean) => Address[];
    SearchAddressByProvince: (searchStr: string, filter?: (value?: Address, index?: number, array?: Address[]) => boolean) => Address[];
    SearchAddressByZipcode: (searchStr: string, filter?: (value?: Address, index?: number, array?: Address[]) => boolean) => Address[];
}
