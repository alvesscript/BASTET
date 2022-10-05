import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "../../components/ModalComp";

const Adm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_aluno")
      ? JSON.parse(localStorage.getItem("cad_aluno"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (email) => {
    const newArray = data.filter((item) => item.email !== email);

    setData(newArray);

    localStorage.setItem("cad_aluno", JSON.stringify(newArray));
  };

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
      background="#42215f"
     
    >
      <Box maxW={1000} w="50%" h="100vh" py={11} px={2}>
        <Button color="white" colorScheme="red" onClick={() => [setDataEdit({}), onOpen()]}>
          NOVO CADASTRO
        </Button>

        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxW={isMobile ? 5 : 100} fontSize="20px"  color="white">
                  Nome
                </Th>
                <Th maxW={isMobile ? 5 : 110} fontSize="20px" color="white">
                  E-Mail
                </Th>
                <Th maxW={isMobile ? 5 : 110} fontSize="20px" color="white">
                  Telefone
                </Th>
                <Th maxW={isMobile ? 5 : 110} fontSize="20px" color="white">
                  Idade
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, email, telefone, idade}, index) => (
                <Tr key={index} cursor="pointer" color="white">
                  <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{email}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{telefone}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{idade}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, email, telefone, idade, index}),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(email)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default Adm;