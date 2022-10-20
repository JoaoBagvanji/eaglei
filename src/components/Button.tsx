
import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
    title: string;
}


export function Button({    title, ...rest} : Props) {
  return (
    <ButtonNativeBase
        bg="primary.700"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{bg: "primary.600"}}
        {...rest}
    >
        <Heading color="green.700" fontSize="sm">
            {title}
        </Heading>

    </ButtonNativeBase>
  );
}