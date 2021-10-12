import "./App.css";
import {
  Box,
  Button,
  Input,
  Select,
  FormControl,
  Switch,
  Heading,
  InputGroup,
  InputLeftAddon,
  Text,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import useForm from "./useForm.js";
import { useState } from "react";

function App() {
  const { values, handleChange, handleValidation, handleSubmit } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textInput, setTextInput] = useState("");
  const [customInputs, setCustomInputs] = useState([]);

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleTextInputSubmit = (e) => {
    setCustomInputs([...customInputs, textInput]);
    onClose();
  };
  console.log(values);

  return (
    <Box>
      <Center>
        <Heading p="1em">Custom Form</Heading>
      </Center>

      <form onSubmit={handleSubmit}>
        <Center>
          <Box>
            <FormControl id="name">
              <InputGroup p="10px">
                <InputLeftAddon>Name</InputLeftAddon>
                <Input
                  isInvalid={handleValidation(values.name, "name", "/[A-Za-z]/")}
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Chad Chaddington"
                ></Input>
              </InputGroup>
            </FormControl>

            <FormControl display="flex" p="10px" alignItems="center">
              <Text>I want to learn frontend</Text>
              <Switch
                id="frontend"
                value={values.frontend === "false"}
                onChange={handleChange}
                ml="10px"
                size="sm"
              />
            </FormControl>

            <FormControl display="flex" p="10px" alignItems="center">
              <Text>I want to learn backend</Text>
              <Switch
                id="backend"
                value={values.backend === "false"}
                onChange={handleChange}
                ml="10px"
                size="sm"
              />
            </FormControl>

            <FormControl id="year" isRequired>
              <Select p="10px" placeholder="I am a..." onChange={handleChange}>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
              </Select>
            </FormControl>

            {customInputs.map((input, key) => {
              return (
                <FormControl id={input}>
                  <InputGroup p="10px">
                    <InputLeftAddon>{input}</InputLeftAddon>
                    <Input
                      key={key}
                      value={values[input]}
                      onChange={handleChange}
                      placeholder="..."
                    ></Input>
                  </InputGroup>
                </FormControl>
              );
            })}

            <Box p="10px">
              <Button colorScheme="blue" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
            <Box p="10px">
              <Button colorScheme="blue" onClick={onOpen}>
                Add Custom Input
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Custom Text Input</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl id="customTextInput">
                      <InputGroup>
                        <InputLeftAddon>Title</InputLeftAddon>
                        <Input
                          value={textInput}
                          onChange={handleTextInputChange}
                          placeholder="Chad Chaddington"
                        ></Input>
                      </InputGroup>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={onClose} mr={3} colorScheme="red">
                      Cancel
                    </Button>
                    <Button colorScheme="blue" onClick={handleTextInputSubmit}>
                      Submit
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Center>
      </form>
    </Box>
  );
}

export default App;
