
import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';
import React from 'react';

type Props = IButtonProps & {
    title: string;
}


export function ButtonHandle({    title, ...rest} : Props) {
  return (
    <ButtonNativeBase
        bg="primary.700"
        h={14}
        fontSize="sm"
        rounded="sm"
        borderRadius={40}
        _pressed={{bg: "primary.600"}}
        {...rest}
    >
        <Heading color="green.700" fontSize="sm">
            {title}
        </Heading>

    </ButtonNativeBase>
  );
}