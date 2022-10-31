import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

const RegisterModal = ({
  isOpen,
  closeModal,
  username,
  email,
  password,
  gender,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Result</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Username: {username}</Text>
          <Text>Email: {email}</Text>
          <Text>Password: {password}</Text>
          <Text>Gender: {gender}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RegisterModal

