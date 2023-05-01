import { ChevronUpIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState, useTransition } from "react";
import { Diamond, Metal, useRingConfig } from "./ConfigContext";

const ConfigInterface = () => {
  const [isOpen, setOpen] = useState(true);
  const [, startTransition] = useTransition();
  const {
    diamond,
    headColor,
    bodyColor,
    setHeadColor,
    setBodyColor,
    setDiamond,
  } = useRingConfig();

  const changeHeadMetal = (nextValue: string) => {
    startTransition(() => {
      setHeadColor(nextValue as Metal);
    });
  };
  const changeBodyMetal = (nextValue: string) => {
    startTransition(() => {
      setBodyColor(nextValue as Metal);
    });
  };
  const changeDiamond = (nextValue: string) => {
    startTransition(() => {
      setDiamond(nextValue as Diamond);
    });
  };

  return (
    <>
      <ButtonGroup
        size="lg"
        isAttached
        variant="solid"
        colorScheme="linkedin"
        sx={{
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={() => setOpen(true)}
      >
        <Button>Configure Ring</Button>
        <IconButton aria-label="Configure Ring" icon={<ChevronUpIcon />} />
      </ButtonGroup>
      <Drawer
        placement="bottom"
        onClose={() => setOpen((value) => !value)}
        isOpen={isOpen}
        size="xs"
      >
        <DrawerContent>
          <DrawerHeader textAlign="center">
            Configure your favourite Ring
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <Grid
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(3, 1fr)"
            >
              <GridItem w="100%"></GridItem>
              <GridItem w="100%" h="16">
                <Grid templateRows="repeat(3, 1fr)" gap={4}>
                  <GridItem>
                    <fieldset>
                      <legend>
                        <Heading as="h5" size="sm" color="GrayText">
                          Head Metal
                        </Heading>
                      </legend>
                      <RadioGroup onChange={changeHeadMetal} value={headColor}>
                        <Stack spacing={5} direction="row">
                          <Radio value="gold" size="lg">
                            Gold
                          </Radio>
                          <Radio value="silver" size="lg">
                            Silver
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </fieldset>
                  </GridItem>
                  <GridItem>
                    <fieldset>
                      <Heading as="h5" size="sm" color="GrayText">
                        Body Metal
                      </Heading>
                      <RadioGroup onChange={changeBodyMetal} value={bodyColor}>
                        <Stack spacing={5} direction="row">
                          <Radio value="gold" size="lg">
                            Gold
                          </Radio>
                          <Radio value="silver" size="lg">
                            Silver
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </fieldset>
                  </GridItem>
                  <GridItem>
                    <fieldset>
                      <legend>
                        <Heading as="h5" size="sm" color="GrayText">
                          Diamond
                        </Heading>
                      </legend>
                      <RadioGroup onChange={changeDiamond} value={diamond}>
                        <Stack spacing={5} direction="row">
                          <Radio value="diamond1" size="lg">
                            Diamond 1
                          </Radio>
                          <Radio value="diamond2" size="lg">
                            Diamond 2
                          </Radio>
                          <Radio value="diamond3" size="lg">
                            Diamond 3
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </fieldset>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem w="100%"></GridItem>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ConfigInterface;
