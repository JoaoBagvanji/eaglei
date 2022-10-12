
import {  Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest} : IInputProps) {
  return (
    <NativeBaseInput 
        bg="primary.500"
        h={14}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        color="primary.700"
        placeholderTextColor="secondary.500"
        {...rest}
    />
  );
}