import { Box } from '@/components/atoms/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { BsCaretRightFill } from 'react-icons/bs';
import { ticketDataType } from './TicketInputComp';

const TicketComp = (props: { ticketData: ticketDataType }) => {
  return (
    <Wrapper option="TicketRow">
      <Box $option="ticketBox">
        <Text size="body4">{props.ticketData.type}</Text>
      </Box>
      <Box $option="ticketBox">
        <Text size="body4">{props.ticketData.title}</Text>
      </Box>
      <Box $option="ticketBox">
        <Text size="body4">
          {props.ticketData.currentQuantity}/{props.ticketData.totalQuantity}
        </Text>
      </Box>
      <Box $option="ticketBox">
        <Text size="body4">{props.ticketData.price}</Text>
      </Box>
      <Box $option="ticketBox">
        <Text size="body4">{props.ticketData.saleState}</Text>
      </Box>
      <Box $option="ticketBox">
        <BsCaretRightFill size={30} />
      </Box>
    </Wrapper>
  );
};

export default TicketComp;
