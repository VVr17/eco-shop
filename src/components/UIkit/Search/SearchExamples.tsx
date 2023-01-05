import Box from "components/Box";
import Search from "./Search";

const SearchExamples = () => {
  return (
    <>
      <Box p="30px" backgroundColor="#c7701f">
        <Search
          fontSize="s"
          borderStyle="none"
          pr="50px"
          onSearch={console.log}
        />
      </Box>
      <Box p="30px" backgroundColor="white">
        <Search
          fontSize="s"
          borderStyle="solid"
          borderColor="accent"
          width="400px"
        />
      </Box>
    </>
  );
};

export default SearchExamples;
