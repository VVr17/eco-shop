import Box from "components/Box";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { Delivery, StockCheck } from "./StockDelivery.styled";

const StockDelivery: React.FC<{ inStock: boolean }> = ({ inStock }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={24}
    >
      <StockCheck inStock={inStock}>
        {inStock ? (
          <>
            In stock <BsCheck2Circle size={16} />
          </>
        ) : (
          <> Out of stock</>
        )}
      </StockCheck>
      <Delivery>Delivery: 1–3 business days</Delivery>
    </Box>
  );
};

export default StockDelivery;
