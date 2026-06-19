import { AutoCompleteProps } from 'antd';
import { default as CSS } from 'csstype';
import { JSX } from 'react';
import { Address, Config } from '../logic';
export interface Props {
    scope?: string;
    delimiter?: string;
    value?: string;
    filter?: (value?: Address, index?: number, array?: Address[]) => boolean;
    onChange?: (value: string) => void;
    onSelect?: (address: Address) => void;
    style?: CSS.Properties;
    className?: string;
    autoCompleteProps?: AutoCompleteProps;
}
export declare const CreateInput: (config?: Config) => {
    District: (props?: Props) => JSX.Element;
    Amphoe: (props?: Props) => JSX.Element;
    Province: (props?: Props) => JSX.Element;
    Zipcode: (props?: Props) => JSX.Element;
};
