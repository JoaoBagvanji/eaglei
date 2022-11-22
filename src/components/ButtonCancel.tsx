
import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';
import React from 'react';

type Props = IButtonProps & {
    title: string;
}


export function ButtonCancel({    title, ...rest} : Props) {
  return (
    <ButtonNativeBase
        bg="red.600"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{bg: "primary.600"}}
        {...rest}
    >
        <Heading color="white" fontSize="sm">
            {title}
        </Heading>

    </ButtonNativeBase>
  );
}