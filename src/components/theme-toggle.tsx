import {IconButton} from '@chakra-ui/react';
import useColorMode from '../utils/color-mode';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

export default function ThemeToggle(props) {
  const {colorMode, toggleColorMode, newColorMode} = useColorMode();
  // const Icon = useColorModeValue(
  //   <Moon h={5} color="gray.600" />,
  //   <Sun h={5} />
  // );

  return (
    <IconButton
      data-testid="theme-toggle"
      variant="ghost"
      aria-label={`Toggle ${newColorMode} mode`}
      title={`Activated ${newColorMode} mode`}
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      {...props}
    />
  );
}
